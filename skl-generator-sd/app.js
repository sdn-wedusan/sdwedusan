/* ==========================================================================
   KelulusanSD (GraduEase SD) - Premium Application Logic & Print Engine
   ========================================================================== */

// --- GLOBAL STATE ---
let state = {
    schoolProfile: {
        kabupaten: "PATI",
        dinas: "DINAS PENDIDIKAN DAN KEBUDAYAAN",
        namaSekolah: "SD NEGERI WEDUSAN",
        npsn: "20316435",
        alamat: "Jl. Pucel - Ngablak Km. 05 Desa Wedusan",
        kodePos: "59158",
        email: "sdwedusan@gmail.com",
        kasekNama: "Sudarto, S.Pd",
        kasekNip: "196702122006041004",
        tanggalSkl: "2025-06-02",        // SKL Date: 2 Juni 2025
        tanggalTranskrip: "2025-06-25",  // Transkrip Date: 25 Juni 2025
        logoLeft: "",  // Base64 Pemkab Logo
        logoRight: "",  // Base64 School Logo
        tahunAjaran: "2024/2025",
        kkm: 75
    },
    rumus: {
        rapor: 50,     // 50% Rapor
        us: 50,        // 50% US
        praktik: 0     // 0% Praktik by default (scaled dynamically if enabled/disabled)
    },
    config: {
        kurikulum: "merdeka",         // "merdeka" (IPAS combined) vs "k13" (IPA & IPS separated)
        rentangSemester: "9-12",      // "7-12" (Kelas 4-6), "9-12" (Kelas 5-6), "11-12" (Kelas 6)
        font: "times"                 // "times" (Times New Roman) vs "arial"
    },
    students: []
};

// --- SUBJECTS REGISTRY ---
// Each subject can have a custom key, official name, dynamic name function (e.g. for PABP based on religion),
// and whether it supports Ujian Praktik by default.
const SUBJECTS_METADATA = {
    merdeka: [
        { key: "pabp", name: "Pendidikan Agama dan Budi Pekerti", kelompok: "A", hasPraktik: true, religionBased: true },
        { key: "pancasila", name: "Pendidikan Pancasila", kelompok: "A", hasPraktik: false },
        { key: "indonesia", name: "Bahasa Indonesia", kelompok: "A", hasPraktik: true },
        { key: "matematika", name: "Matematika", kelompok: "A", hasPraktik: false },
        { key: "ipas", name: "Ilmu Pengetahuan Alam dan Sosial", kelompok: "A", hasPraktik: true },
        { key: "pjok", name: "Pendidikan Jasmani, Olah Raga dan Kesehatan", kelompok: "A", hasPraktik: true },
        { key: "seni_budaya", name: "Seni dan Budaya", kelompok: "A", hasPraktik: true },
        { key: "inggris", name: "Bahasa Inggris", kelompok: "A", hasPraktik: false },
        { key: "mulok_a", name: "Bahasa Jawa", kelompok: "B", hasPraktik: true, isMulokSub: true }
    ],
    k13: [
        { key: "pabp", name: "Pendidikan Agama dan Budi Pekerti", kelompok: "A", hasPraktik: true, religionBased: true },
        { key: "ppkn", name: "Pendidikan Pancasila dan Kewarganegaraan", kelompok: "A", hasPraktik: false },
        { key: "indonesia", name: "Bahasa Indonesia", kelompok: "A", hasPraktik: true },
        { key: "matematika", name: "Matematika", kelompok: "A", hasPraktik: false },
        { key: "ipa", name: "Ilmu Pengetahuan Alam (IPA)", kelompok: "A", hasPraktik: true },
        { key: "ips", name: "Ilmu Pengetahuan Sosial (IPS)", kelompok: "A", hasPraktik: false },
        { key: "sbdp", name: "Seni Budaya dan Prakarya", kelompok: "A", hasPraktik: true },
        { key: "pjok", name: "Pendidikan Jasmani, Olahraga dan Kesehatan", kelompok: "A", hasPraktik: true },
        { key: "inggris", name: "Bahasa Inggris", kelompok: "A", hasPraktik: false },
        { key: "mulok_a", name: "Bahasa Jawa", kelompok: "B", hasPraktik: true, isMulokSub: true }
    ]
};

// Get active subjects list based on active curriculum
function getActiveSubjects() {
    const base = SUBJECTS_METADATA[state.config.kurikulum] || SUBJECTS_METADATA.merdeka;
    const custom = state.customMulok || [];
    return [...base, ...custom];
}

// Get standard subject name or religion-specific name
function getSubjectDisplayName(subject, studentReligion) {
    if (subject.religionBased && studentReligion) {
        const religion = studentReligion.toLowerCase();
        if (religion === "islam") return "Pendidikan Agama Islam dan Budi Pekerti";
        if (religion === "kristen") return "Pendidikan Agama Kristen dan Budi Pekerti";
        if (religion === "katolik") return "Pendidikan Agama Katolik dan Budi Pekerti";
        if (religion === "hindu") return "Pendidikan Agama Hindu dan Budi Pekerti";
        if (religion === "budha" || religion === "buddha") return "Pendidikan Agama Buddha dan Budi Pekerti";
        if (religion === "khonghucu") return "Pendidikan Agama Khonghucu dan Budi Pekerti";
    }
    return subject.name;
}

// Get active semesters keys based on active range
function getActiveSemesters() {
    const range = state.config.rentangSemester;
    if (range === "7-12") return ["sem7", "sem8", "sem9", "sem10", "sem11", "sem12"];
    if (range === "9-12") return ["sem9", "sem10", "sem11", "sem12"];
    return ["sem11", "sem12"]; // "11-12"
}

// Format numbers in Indonesian decimal style (e.g. 84,13)
function formatIndoDecimal(number) {
    if (number === undefined || number === null || isNaN(number)) return "-";
    return number.toFixed(2).replace('.', ',');
}

// Generate an empty grades structure for a student
function createEmptyGrades() {
    const grades = {};
    const semesters = ["sem7", "sem8", "sem9", "sem10", "sem11", "sem12"];
    const allSubjectKeys = [...SUBJECTS_METADATA.merdeka.map(s => s.key), ...SUBJECTS_METADATA.k13.map(s => s.key)];
    
    // De-duplicate keys
    const uniqueKeys = [...new Set(allSubjectKeys)];
    
    uniqueKeys.forEach(key => {
        grades[key] = {
            us: "",
            praktik: ""
        };
        semesters.forEach(sem => {
            grades[key][sem] = "";
        });
    });
    return grades;
}

// --- DYNAMIC CALCULATIONS ---

// Calculates the average of active report semesters for a specific subject
function calculateSubjectRaporAverage(student, subjectKey) {
    const grades = student.nilai[subjectKey];
    if (!grades) return 0;
    
    const activeSems = getActiveSemesters();
    let sum = 0;
    let count = 0;
    
    activeSems.forEach(sem => {
        const val = parseFloat(grades[sem]);
        if (!isNaN(val)) {
            sum += val;
            count++;
        }
    });
    
    return count > 0 ? (sum / count) : 0;
}

// Calculates the final grade (Nilai Akhir) with automatic weight scaling
function calculateSubjectFinalGrade(student, subjectObj) {
    const subjectKey = subjectObj.key;
    const grades = student.nilai[subjectKey];
    if (!grades) return 0;
    
    const raporAvg = calculateSubjectRaporAverage(student, subjectKey);
    const usGrade = parseFloat(grades.us);
    const prGrade = parseFloat(grades.praktik);
    
    // Fetch base weights
    const wRapor = parseFloat(state.rumus.rapor) || 0;
    const wUS = parseFloat(state.rumus.us) || 0;
    // Only apply practical weight if the subject officially has a practical exam
    // and the input is NOT empty/NaN.
    const hasActivePraktik = subjectObj.hasPraktik && !isNaN(prGrade);
    const wPraktik = hasActivePraktik ? (parseFloat(state.rumus.praktik) || 0) : 0;
    
    const nRapor = raporAvg || 0;
    const nUS = !isNaN(usGrade) ? usGrade : 0;
    const nPraktik = hasActivePraktik ? prGrade : 0;
    
    // Scale weights to sum to 100%
    const totalWeight = wRapor + wUS + wPraktik;
    if (totalWeight === 0) return 0;
    
    const rawScore = (nRapor * wRapor) + (nUS * wUS) + (nPraktik * wPraktik);
    return rawScore / totalWeight;
}

// Calculates overall average of all subjects for a student
function calculateStudentOverallAverage(student) {
    const activeSubjects = getActiveSubjects();
    let sum = 0;
    let count = 0;
    
    activeSubjects.forEach(sub => {
        // Skip Mulok main header row
        if (sub.key === "mulok_a" || sub.key === "mulok_b" || !sub.isMulokSub) {
            const finalGrade = calculateSubjectFinalGrade(student, sub);
            if (finalGrade > 0) {
                sum += finalGrade;
                count++;
            }
        }
    });
    
    // Mulok sub-items are already counted in the loop above because mulok_a and mulok_b are graded items.
    return count > 0 ? (sum / count) : 0;
}

// --- MOCK DATA SEEDING (SD Negeri Wedusan) ---
function seedMockData() {
    state.students = [
        {
            id: "1",
            nama: "Ahmad Faris Syahputra",
            agama: "Islam",
            tempatLahir: "Pati",
            tanggalLahir: "2012-12-25",
            orangTua: "ABDUL MUIS",
            nis: "2147",
            nisn: "0124849286",
            noIjazah: "111202507556700",
            noSkl: "400.3.11/21.1",
            noTranskrip: "400.3.11/023.01/2025",
            nilai: createEmptyGrades()
        },
        {
            id: "2",
            nama: "Budi Santoso",
            agama: "Kristen",
            tempatLahir: "Pati",
            tanggalLahir: "2013-05-14",
            orangTua: "Joko Santoso",
            nis: "2148",
            nisn: "0134983277",
            noIjazah: "111202507556701",
            noSkl: "400.3.11/21.2",
            noTranskrip: "400.3.11/023.02/2025",
            nilai: createEmptyGrades()
        },
        {
            id: "3",
            nama: "Siti Aminah",
            agama: "Islam",
            tempatLahir: "Pati",
            tanggalLahir: "2012-08-20",
            orangTua: "Rahmat Hidayat",
            nis: "2149",
            nisn: "0128746399",
            noIjazah: "111202507556702",
            noSkl: "400.3.11/21.3",
            noTranskrip: "400.3.11/023.03/2025",
            nilai: createEmptyGrades()
        }
    ];

    // Seed grades for Ahmad Faris Syahputra (Student 1) to match exactly their target grades!
    // Since we'll calculate Semesters, US, and Praktik, let's pre-fill them uniformly to target grades
    // so they yield the exact values in the image!
    const targetGrades = {
        pabp: 88.80,
        pancasila: 83.80,
        indonesia: 85.60,
        matematika: 81.30,
        ipas: 84.30,
        pjok: 89.30,
        seni_budaya: 85.60,
        inggris: 78.30,
        mulok_a: 81.10
    };
    
    // For student 1, write uniform grades
    const semesters = ["sem7", "sem8", "sem9", "sem10", "sem11", "sem12"];
    Object.keys(targetGrades).forEach(key => {
        const val = targetGrades[key];
        state.students[0].nilai[key].us = val;
        state.students[0].nilai[key].praktik = val; // Only used if hasPraktik is true
        semesters.forEach(sem => {
            state.students[0].nilai[key][sem] = val;
        });
    });

    // Seed student 2 with random decent grades
    Object.keys(targetGrades).forEach(key => {
        const randVal = Math.floor(Math.random() * 15) + 80; // 80-95
        state.students[1].nilai[key].us = randVal;
        state.students[1].nilai[key].praktik = randVal - 2;
        semesters.forEach(sem => {
            state.students[1].nilai[key][sem] = randVal + (Math.floor(Math.random() * 5) - 2);
        });
    });

    // Seed student 3
    Object.keys(targetGrades).forEach(key => {
        const randVal = Math.floor(Math.random() * 15) + 78; // 78-93
        state.students[2].nilai[key].us = randVal;
        state.students[2].nilai[key].praktik = randVal + 1;
        semesters.forEach(sem => {
            state.students[2].nilai[key][sem] = randVal + (Math.floor(Math.random() * 4) - 2);
        });
    });
}

// --- LOCAL STORAGE HANDLING ---
function saveToLocalStorage() {
    localStorage.setItem("kelulusan_sd_state", JSON.stringify(state));
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem("kelulusan_sd_state");
    if (saved) {
        try {
            state = JSON.parse(saved);
            // Quick backwards compatibility check for new fields
            if (!state.schoolProfile.kabupaten) state.schoolProfile.kabupaten = "PATI";
            if (!state.schoolProfile.dinas) state.schoolProfile.dinas = "DINAS PENDIDIKAN DAN KEBUDAYAAN";
            if (!state.schoolProfile.tahunAjaran) state.schoolProfile.tahunAjaran = "2024/2025";
            if (!state.schoolProfile.kkm) state.schoolProfile.kkm = 75;
            if (!state.customMulok) state.customMulok = [];
            if (!state.config) {
                state.config = { kurikulum: "merdeka", rentangSemester: "9-12", font: "times" };
            } else if (!state.config.font) {
                state.config.font = "times";
            }
        } catch (e) {
            console.error("Error loading localStorage state, seeding mock data.", e);
            seedMockData();
        }
    } else {
        seedMockData();
        saveToLocalStorage();
    }
}

// --- UI TOAST NOTIFICATION ---
function showToast(message, type = "success") {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `toast-alert ${type}`;
    
    let icon = "fa-check-circle";
    if (type === "danger") icon = "fa-exclamation-circle";
    
    toast.innerHTML = `<i class="fas ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => toast.classList.add("show"), 50);
    
    // Destroy after 3.5s
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// --- DOM RENDER ENGNES ---

// Switch view panels
function switchPanel(panelId) {
    document.querySelectorAll(".view-panel").forEach(p => p.classList.remove("active"));
    document.querySelectorAll(".menu-item").forEach(m => m.classList.remove("active"));
    
    const panel = document.getElementById(`panel-${panelId}`);
    const menu = document.getElementById(`menu-${panelId}`);
    
    if (panel) panel.classList.add("active");
    if (menu) menu.classList.add("active");
    
    // Trigger panel-specific rendering logic
    if (panelId === "dashboard") renderDashboardStats();
    if (panelId === "profil") renderSchoolProfileForm();
    if (panelId === "siswa") renderStudentTable();
    if (panelId === "skl") renderSKLSelector();
    if (panelId === "transkrip") renderTranskripSelector();
}

// 1. Render Dashboard Statistics
function renderDashboardStats() {
    const sp = state.schoolProfile;
    document.getElementById("stat-total-siswa").innerText = state.students.length;
    
    // Update main header subtitle dynamically to match current school!
    const subTitle = document.getElementById("page-subtitle");
    if (subTitle) {
        subTitle.innerText = `${sp.namaSekolah}, Kabupaten ${toTitleCase(sp.kabupaten)}, Provinsi Jawa Tengah`;
    }
    
    let totalScore = 0;
    let scoredStudents = 0;
    let lulusCount = 0;
    
    state.students.forEach(st => {
        const avg = calculateStudentOverallAverage(st);
        if (avg > 0) {
            totalScore += avg;
            scoredStudents++;
            
            // Calculate dynamic graduation based on KKM
            const kkm = parseFloat(sp.kkm) || 75;
            if (avg >= kkm) {
                lulusCount++;
            }
        }
    });
    
    const classAvg = scoredStudents > 0 ? (totalScore / scoredStudents) : 0;
    document.getElementById("stat-rata-rata").innerText = formatIndoDecimal(classAvg);
    
    // Calculate and render pass percentage dynamically
    const passPercentage = scoredStudents > 0 ? (lulusCount / scoredStudents * 100) : 100;
    const statStatus = document.getElementById("stat-status-kelulusan");
    if (statStatus) {
        statStatus.innerText = `${passPercentage.toFixed(0)}% LULUS`;
    }
    
    // Set Header quick stats as well
    document.getElementById("quick-total-siswa").innerText = state.students.length;
    document.getElementById("quick-rata-rata").innerText = formatIndoDecimal(classAvg);
}

// 2. Render School Profile Form
function renderSchoolProfileForm() {
    const sp = state.schoolProfile;
    document.getElementById("sp-kabupaten").value = sp.kabupaten || "";
    document.getElementById("sp-dinas").value = sp.dinas || "";
    document.getElementById("sp-sekolah").value = sp.namaSekolah || "";
    document.getElementById("sp-npsn").value = sp.npsn || "";
    document.getElementById("sp-alamat").value = sp.alamat || "";
    document.getElementById("sp-kodepos").value = sp.kodePos || "";
    document.getElementById("sp-email").value = sp.email || "";
    document.getElementById("sp-kasek-nama").value = sp.kasekNama || "";
    document.getElementById("sp-kasek-nip").value = sp.kasekNip || "";
    document.getElementById("sp-tanggal-skl").value = sp.tanggalSkl || "";
    document.getElementById("sp-tanggal-transkrip").value = sp.tanggalTranskrip || "";
    document.getElementById("sp-tahun-ajaran").value = sp.tahunAjaran || "2024/2025";
    document.getElementById("sp-kkm").value = sp.kkm || 75;
    
    // Rumus Weights
    document.getElementById("w-rapor").value = state.rumus.rapor;
    document.getElementById("w-us").value = state.rumus.us;
    document.getElementById("w-praktik").value = state.rumus.praktik;
    
    // Configurations
    document.getElementById("cfg-kurikulum").value = state.config.kurikulum;
    document.getElementById("cfg-semester").value = state.config.rentangSemester;
    document.getElementById("cfg-font").value = state.config.font || "times";
    
    // Previews of Logos if available
    renderLogoPreview("logo-left-preview", sp.logoLeft);
    renderLogoPreview("logo-right-preview", sp.logoRight);
    
    // Render custom mulok list
    renderCustomMulokList();
}

// Render dynamic custom mulok list in settings card
function renderCustomMulokList() {
    const container = document.getElementById("mulok-list-container");
    if (!container) return;
    container.innerHTML = "";
    
    // 1. Show default Bahasa Jawa (cannot be deleted but can show)
    const defRow = document.createElement("div");
    defRow.className = "stat-pill";
    defRow.style.justifyContent = "space-between";
    defRow.style.width = "100%";
    defRow.innerHTML = `
        <span><i class="fas fa-book text-primary" style="margin-right: 8px;"></i> Bahasa Jawa (Bawaan)</span>
        <span class="badge badge-success">Sistem</span>
    `;
    container.appendChild(defRow);
    
    // 2. Show custom Mulok subjects
    const list = state.customMulok || [];
    list.forEach(m => {
        const row = document.createElement("div");
        row.className = "stat-pill";
        row.style.justifyContent = "space-between";
        row.style.width = "100%";
        row.innerHTML = `
            <span><i class="fas fa-book-reader" style="color: var(--primary); margin-right: 8px;"></i> ${m.name} ${m.hasPraktik ? '<span style="font-size:11px;opacity:0.75;font-style:italic;">(Ada Praktik)</span>' : ''}</span>
            <button class="btn btn-danger btn-sm" onclick="deleteCustomMulokSubject('${m.key}')" style="padding: 4px 10px; font-size:11px; height:auto; line-height:1;">
                <i class="fas fa-trash"></i> Hapus
            </button>
        `;
        container.appendChild(row);
    });
}

// Add a new custom Muatan Lokal subject dynamically
function addCustomMulokSubject() {
    const nameInput = document.getElementById("add-mulok-name");
    if (!nameInput) return;
    const name = nameInput.value.trim();
    const hasPraktik = document.getElementById("add-mulok-praktik").value === "true";
    
    if (!name) {
        showToast("Error: Nama Muatan Lokal wajib diisi!", "danger");
        return;
    }
    
    // Check if duplicate name
    const activeSubjects = getActiveSubjects();
    const duplicate = activeSubjects.find(sub => sub.name.toLowerCase() === name.toLowerCase());
    if (duplicate) {
        showToast("Error: Mata pelajaran dengan nama tersebut sudah ada!", "danger");
        return;
    }
    
    const key = "custom_mulok_" + Date.now();
    
    const newMulok = {
        key: key,
        name: name,
        kelompok: "B",
        hasPraktik: hasPraktik,
        isMulokSub: true
    };
    
    if (!state.customMulok) state.customMulok = [];
    state.customMulok.push(newMulok);
    
    // Seed new grades for existing students so they don't have blank objects
    state.students.forEach(st => {
        if (!st.nilai[key]) {
            st.nilai[key] = { us: "", praktik: "" };
            const semesters = ["sem7", "sem8", "sem9", "sem10", "sem11", "sem12"];
            semesters.forEach(sem => {
                st.nilai[key][sem] = "";
            });
        }
    });
    
    saveToLocalStorage();
    nameInput.value = "";
    renderCustomMulokList();
    renderDashboardStats();
    showToast(`Berhasil menambahkan Muatan Lokal: ${name}`);
}

// Delete custom Muatan Lokal subject dynamically
function deleteCustomMulokSubject(key) {
    const mulokToDelete = state.customMulok.find(m => m.key === key);
    if (!mulokToDelete) return;
    
    if (confirm(`Apakah Anda yakin ingin menghapus Muatan Lokal "${mulokToDelete.name}"? Nilai siswa untuk mapel ini juga akan terhapus secara permanen.`)) {
        state.customMulok = state.customMulok.filter(m => m.key !== key);
        
        // Remove from student grades
        state.students.forEach(st => {
            if (st.nilai[key]) {
                delete st.nilai[key];
            }
        });
        
        saveToLocalStorage();
        renderCustomMulokList();
        renderDashboardStats();
        showToast(`Muatan Lokal "${mulokToDelete.name}" berhasil dihapus.`, "warning");
    }
}

// Toggle inline Mulok form inside the student modal
function toggleInlineMulokForm(show) {
    const form = document.getElementById("inline-mulok-form");
    const trigger = document.getElementById("inline-mulok-trigger");
    if (!form || !trigger) return;
    
    if (show) {
        form.style.display = "block";
        trigger.style.display = "none";
        document.getElementById("inline-mulok-name").focus();
    } else {
        form.style.display = "none";
        trigger.style.display = "flex";
        document.getElementById("inline-mulok-name").value = "";
    }
}

// Save dynamic custom Mulok subject created inline inside the student modal
function saveInlineMulokSubject() {
    const nameInput = document.getElementById("inline-mulok-name");
    if (!nameInput) return;
    const name = nameInput.value.trim();
    const hasPraktik = document.getElementById("inline-mulok-praktik").value === "true";
    
    if (!name) {
        showToast("Error: Nama Muatan Lokal wajib diisi!", "danger");
        return;
    }
    
    // Check if duplicate name
    const activeSubjects = getActiveSubjects();
    const duplicate = activeSubjects.find(sub => sub.name.toLowerCase() === name.toLowerCase());
    if (duplicate) {
        showToast("Error: Mata pelajaran dengan nama tersebut sudah ada!", "danger");
        return;
    }
    
    // 1. CAPTURE all current typed unsaved grades from inputs in the modal DOM!
    const savedValues = [];
    const inputs = document.querySelectorAll(".grade-input");
    inputs.forEach(input => {
        savedValues.push({
            mapel: input.getAttribute("data-mapel"),
            field: input.getAttribute("data-field"),
            value: input.value
        });
    });
    
    // 2. Add to global customMulok state
    const key = "custom_mulok_" + Date.now();
    const newMulok = {
        key: key,
        name: name,
        kelompok: "B",
        hasPraktik: hasPraktik,
        isMulokSub: true
    };
    
    if (!state.customMulok) state.customMulok = [];
    state.customMulok.push(newMulok);
    
    // 3. Seed new empty keys for all students in database
    state.students.forEach(st => {
        if (!st.nilai[key]) {
            st.nilai[key] = { us: "", praktik: "" };
            const semesters = ["sem7", "sem8", "sem9", "sem10", "sem11", "sem12"];
            semesters.forEach(sem => {
                st.nilai[key][sem] = "";
            });
        }
    });
    
    saveToLocalStorage();
    
    // 4. RE-RENDER the Mulok grade grid tab (creates Bahasa Jawa + new mapel grid inputs)
    renderGradeGrid("mulok");
    
    // 5. RESTORE all previously typed grades back into the DOM!
    savedValues.forEach(item => {
        const input = document.querySelector(`.grade-input[data-mapel="${item.mapel}"][data-field="${item.field}"]`);
        if (input) {
            input.value = item.value;
        }
    });
    
    // 6. Recalculate real-time grid averages for all subject keys
    getActiveSubjects().forEach(sub => {
        recalculateRealtimeGridScore(sub.key);
    });
    
    // 7. Reset inline form
    toggleInlineMulokForm(false);
    nameInput.value = "";
    
    // 8. Refresh the Settings custom Mulok list and stats if open
    renderCustomMulokList();
    renderDashboardStats();
    
    showToast(`Muatan Lokal "${name}" berhasil ditambahkan langsung ke lembar nilai!`);
}

function renderLogoPreview(elementId, base64Str) {
    const img = document.getElementById(elementId);
    if (base64Str) {
        img.src = base64Str;
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }
}

// Save School Profile & Config
function saveSchoolProfile() {
    const wRapor = parseInt(document.getElementById("w-rapor").value) || 0;
    const wUS = parseInt(document.getElementById("w-us").value) || 0;
    const wPraktik = parseInt(document.getElementById("w-praktik").value) || 0;
    
    if (wRapor + wUS + wPraktik !== 100) {
        showToast("Error: Total bobot nilai akhir (Rapor + US + Praktik) harus tepat 100%!", "danger");
        return;
    }
    
    state.schoolProfile.kabupaten = document.getElementById("sp-kabupaten").value;
    state.schoolProfile.dinas = document.getElementById("sp-dinas").value;
    state.schoolProfile.namaSekolah = document.getElementById("sp-sekolah").value;
    state.schoolProfile.npsn = document.getElementById("sp-npsn").value;
    state.schoolProfile.alamat = document.getElementById("sp-alamat").value;
    state.schoolProfile.kodePos = document.getElementById("sp-kodepos").value;
    state.schoolProfile.email = document.getElementById("sp-email").value;
    state.schoolProfile.kasekNama = document.getElementById("sp-kasek-nama").value;
    state.schoolProfile.kasekNip = document.getElementById("sp-kasek-nip").value;
    state.schoolProfile.tanggalSkl = document.getElementById("sp-tanggal-skl").value;
    state.schoolProfile.tanggalTranskrip = document.getElementById("sp-tanggal-transkrip").value;
    state.schoolProfile.tahunAjaran = document.getElementById("sp-tahun-ajaran").value;
    state.schoolProfile.kkm = parseFloat(document.getElementById("sp-kkm").value) || 75;
    
    state.rumus.rapor = wRapor;
    state.rumus.us = wUS;
    state.rumus.praktik = wPraktik;
    
    const oldKuri = state.config.kurikulum;
    state.config.kurikulum = document.getElementById("cfg-kurikulum").value;
    state.config.rentangSemester = document.getElementById("cfg-semester").value;
    state.config.font = document.getElementById("cfg-font").value;
    
    saveToLocalStorage();
    showToast("Profil sekolah, kurikulum, dan rumus berhasil disimpan!");
    renderDashboardStats();
}

// Handle Logo File Conversions to Base64
function handleLogoUpload(fileInputId, profileFieldKey, previewElementId) {
    const file = document.getElementById(fileInputId).files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        state.schoolProfile[profileFieldKey] = e.target.result;
        saveToLocalStorage();
        renderLogoPreview(previewElementId, e.target.result);
        showToast("Logo berhasil diunggah dan disimpan!");
    };
    reader.readAsDataURL(file);
}

// 3. Render Student Table
let currentSearchQuery = "";
function renderStudentTable() {
    const tbody = document.getElementById("student-table-body");
    tbody.innerHTML = "";
    
    const query = currentSearchQuery.toLowerCase().trim();
    const filtered = state.students.filter(st => 
        st.nama.toLowerCase().includes(query) ||
        st.nisn.includes(query) ||
        st.nis.includes(query)
    );
    
    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;color:#94a3b8;padding:40px;">Tidak ada data siswa ditemukan</td></tr>`;
        return;
    }
    
    filtered.forEach((st, idx) => {
        const tr = document.createElement("tr");
        const overallAvg = calculateStudentOverallAverage(st);
        
        tr.innerHTML = `
            <td>${idx + 1}</td>
            <td style="font-weight: 600; color: var(--secondary);">${st.nama}</td>
            <td>${st.nis} / ${st.nisn}</td>
            <td>${st.agama}</td>
            <td><span class="badge badge-success">${formatIndoDecimal(overallAvg)}</span></td>
            <td>
                <div class="action-btns">
                    <button class="btn btn-secondary btn-sm" onclick="openStudentModal('${st.id}')">
                        <i class="fas fa-edit"></i> Edit/Nilai
                    </button>
                    <button class="btn btn-danger btn-sm" onclick="deleteStudent('${st.id}')">
                        <i class="fas fa-trash"></i> Hapus
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function handleSearch(e) {
    currentSearchQuery = e.target.value;
    renderStudentTable();
}

// Delete Student
function deleteStudent(id) {
    if (confirm("Apakah Anda yakin ingin menghapus data siswa ini? Semua nilai juga akan terhapus secara permanen.")) {
        state.students = state.students.filter(s => s.id !== id);
        saveToLocalStorage();
        renderStudentTable();
        renderDashboardStats();
        showToast("Data siswa berhasil dihapus!", "danger");
    }
}

// --- STUDENT GRADE ENTRY TABBED MODAL ---
let activeModalStudentId = null;
let activeModalTab = "pribadi";

function openStudentModal(studentId = null) {
    activeModalStudentId = studentId;
    activeModalTab = "pribadi";
    switchModalTab("pribadi");
    
    const isNew = !studentId;
    document.getElementById("modal-title").innerText = isNew ? "Tambah Data Siswa Baru" : "Edit Biodata & Nilai Siswa";
    
    if (isNew) {
        // Prepare blank fields
        document.getElementById("m-nama").value = "";
        document.getElementById("m-agama").value = "Islam";
        document.getElementById("m-tempat-lahir").value = "";
        document.getElementById("m-tanggal-lahir").value = "";
        document.getElementById("m-ortu").value = "";
        document.getElementById("m-nis").value = "";
        document.getElementById("m-nisn").value = "";
        document.getElementById("m-ijazah").value = "";
        document.getElementById("m-no-skl").value = "";
        document.getElementById("m-no-transkrip").value = "";
        
        // Render empty grade tables
        renderGradeGrid("pokok");
        renderGradeGrid("mulok");
    } else {
        // Populate fields
        const st = state.students.find(s => s.id === studentId);
        document.getElementById("m-nama").value = st.nama;
        document.getElementById("m-agama").value = st.agama || "Islam";
        document.getElementById("m-tempat-lahir").value = st.tempatLahir;
        document.getElementById("m-tanggal-lahir").value = st.tanggalLahir;
        document.getElementById("m-ortu").value = st.orangTua;
        document.getElementById("m-nis").value = st.nis;
        document.getElementById("m-nisn").value = st.nisn;
        document.getElementById("m-ijazah").value = st.noIjazah || "";
        document.getElementById("m-no-skl").value = st.noSkl || "";
        document.getElementById("m-no-transkrip").value = st.noTranskrip || "";
        
        // Render actual grade tables
        renderGradeGrid("pokok");
        renderGradeGrid("mulok");
    }
    
    document.getElementById("student-modal").classList.add("show");
}

function closeStudentModal() {
    document.getElementById("student-modal").classList.remove("show");
    activeModalStudentId = null;
}

function switchModalTab(tabId) {
    activeModalTab = tabId;
    document.querySelectorAll(".modal-tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".modal-tab-content").forEach(c => c.classList.remove("active"));
    
    document.getElementById(`tab-btn-${tabId}`).classList.add("active");
    document.getElementById(`tab-content-${tabId}`).classList.add("active");
}

// Render the interactive excel-like grade grid inside modal
function renderGradeGrid(type) {
    const containerId = type === "pokok" ? "excel-grid-pokok-container" : "excel-grid-mulok-container";
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    
    const activeSubjects = getActiveSubjects().filter(sub => 
        type === "pokok" ? !sub.isMulokSub : sub.isMulokSub
    );
    
    const activeSems = getActiveSemesters();
    
    // Create Excel table
    const table = document.createElement("table");
    table.className = "excel-grid";
    
    // Table Header
    let headersHTML = `
        <tr>
            <th rowspan="2" style="width: 50px;">No</th>
            <th rowspan="2" style="text-align: left; min-width: 250px;">Mata Pelajaran</th>
            <th colspan="${activeSems.length}">Nilai Rapor Rata-rata per Semester</th>
            <th rowspan="2" style="width: 90px;">Rata Rapor<br>(Oto)</th>
            <th rowspan="2" style="width: 90px;">Ujian<br>Sekolah (US)</th>
            <th rowspan="2" style="width: 90px;">Ujian<br>Praktik</th>
            <th rowspan="2" style="width: 90px; background-color:#e2e8f0; color:#0f172a;">Nilai Akhir<br>(NA)</th>
        </tr>
        <tr>
    `;
    
    activeSems.forEach(sem => {
        // Humanize labels e.g. sem9 -> Sem 9 (K5 S1)
        let label = sem.replace("sem", "Sem ");
        if (sem === "sem7") label += " (K4 S1)";
        if (sem === "sem8") label += " (K4 S2)";
        if (sem === "sem9") label += " (K5 S1)";
        if (sem === "sem10") label += " (K5 S2)";
        if (sem === "sem11") label += " (K6 S1)";
        if (sem === "sem12") label += " (K6 S2)";
        
        headersHTML += `<th style="width: 80px;">${label}</th>`;
    });
    
    headersHTML += `</tr>`;
    table.innerHTML = headersHTML;
    
    // Get currently loaded student data (if editing)
    const st = activeModalStudentId ? state.students.find(s => s.id === activeModalStudentId) : null;
    const tempStudentReligion = document.getElementById("m-agama").value; // Grab real-time selected religion to show correct PABP name!
    
    // Table Body rows
    activeSubjects.forEach((sub, idx) => {
        const tr = document.createElement("tr");
        
        // Subject Number
        let numText = "";
        let isIndented = false;
        
        if (type === "pokok") {
            numText = `${idx + 1}.`;
        } else {
            // Under Mulok, we indent and number as a, b, c...
            numText = `${String.fromCharCode(97 + idx)}.`; // a, b, c...
            isIndented = true;
        }
        
        // Get grades from state or blank
        const grades = st ? st.nilai[sub.key] : null;
        const usVal = grades ? (grades.us || "") : "";
        const prVal = grades ? (grades.praktik || "") : "";
        
        // Column inputs for semesters
        let semInputsHTML = "";
        activeSems.forEach(sem => {
            const semVal = grades ? (grades[sem] || "") : "";
            semInputsHTML += `
                <td>
                    <input type="number" step="0.01" min="0" max="100" 
                        class="excel-input grade-input" 
                        data-mapel="${sub.key}" 
                        data-field="${sem}" 
                        value="${semVal}" 
                        oninput="recalculateRealtimeGridScore('${sub.key}')">
                </td>
            `;
        });
        
        // Check if subject has practical exam
        const prDisabledAttribute = sub.hasPraktik ? "" : "disabled placeholder='N/A'";
        
        // Generate Row
        tr.innerHTML = `
            <td style="text-align: center; color:#64748b; font-weight:bold;">${numText}</td>
            <td class="subject-label ${isIndented ? 'indented' : ''}">${getSubjectDisplayName(sub, tempStudentReligion)}</td>
            ${semInputsHTML}
            <td id="rt-${sub.key}" class="calculated-cell">-</td>
            <td>
                <input type="number" step="0.01" min="0" max="100" 
                    class="excel-input grade-input" 
                    data-mapel="${sub.key}" 
                    data-field="us" 
                    value="${usVal}" 
                    oninput="recalculateRealtimeGridScore('${sub.key}')">
            </td>
            <td>
                <input type="number" step="0.01" min="0" max="100" 
                    class="excel-input grade-input" 
                    data-mapel="${sub.key}" 
                    data-field="praktik" 
                    value="${prVal}" 
                    ${prDisabledAttribute}
                    oninput="recalculateRealtimeGridScore('${sub.key}')">
            </td>
            <td id="na-${sub.key}" class="calculated-cell" style="background-color: #e0e7ff; color:#4f46e5; font-weight:700;">-</td>
        `;
        table.appendChild(tr);
        
        // Trigger initial dynamic calculations for this row
        setTimeout(() => recalculateRealtimeGridScore(sub.key), 10);
    });
    
    container.appendChild(table);
}

// Recalculates grid averages & NA in real-time when user types inside modal
function recalculateRealtimeGridScore(subjectKey) {
    const activeSems = getActiveSemesters();
    
    // 1. Grab values from current DOM inputs (which might not be saved to student state yet)
    let sumSems = 0;
    let countSems = 0;
    
    activeSems.forEach(sem => {
        const input = document.querySelector(`.grade-input[data-mapel="${subjectKey}"][data-field="${sem}"]`);
        if (input) {
            const val = parseFloat(input.value);
            if (!isNaN(val)) {
                sumSems += val;
                countSems++;
            }
        }
    });
    
    const raporAvg = countSems > 0 ? (sumSems / countSems) : 0;
    
    const rtCell = document.getElementById(`rt-${subjectKey}`);
    if (rtCell) rtCell.innerText = raporAvg > 0 ? raporAvg.toFixed(2) : "-";
    
    // 2. Fetch US & Praktik inputs
    const usInput = document.querySelector(`.grade-input[data-mapel="${subjectKey}"][data-field="us"]`);
    const prInput = document.querySelector(`.grade-input[data-mapel="${subjectKey}"][data-field="praktik"]`);
    
    const usGrade = usInput ? parseFloat(usInput.value) : NaN;
    const prGrade = prInput ? parseFloat(prInput.value) : NaN;
    
    // 3. Perform dynamic scaling calculation
    const subjectObj = getActiveSubjects().find(s => s.key === subjectKey);
    if (!subjectObj) return;
    
    const wRapor = parseFloat(state.rumus.rapor) || 0;
    const wUS = parseFloat(state.rumus.us) || 0;
    
    const hasActivePraktik = subjectObj.hasPraktik && prInput && !prInput.disabled && !isNaN(prGrade);
    const wPraktik = hasActivePraktik ? (parseFloat(state.rumus.praktik) || 0) : 0;
    
    const nRapor = raporAvg || 0;
    const nUS = !isNaN(usGrade) ? usGrade : 0;
    const nPraktik = hasActivePraktik ? prGrade : 0;
    
    const totalWeight = wRapor + wUS + wPraktik;
    let finalGrade = 0;
    if (totalWeight > 0) {
        finalGrade = ((nRapor * wRapor) + (nUS * wUS) + (nPraktik * wPraktik)) / totalWeight;
    }
    
    const naCell = document.getElementById(`na-${subjectKey}`);
    if (naCell) naCell.innerText = finalGrade > 0 ? finalGrade.toFixed(2) : "-";
}

// Trigger grade grid mapel name updates if user changes religion in modal dropdown
function handleModalReligionChange() {
    renderGradeGrid("pokok"); // PABP resides in pokok, re-render it
}

// Save Student Data from Modal Form
function saveStudent() {
    const nama = document.getElementById("m-nama").value.trim();
    const agama = document.getElementById("m-agama").value;
    const tempatLahir = document.getElementById("m-tempat-lahir").value.trim();
    const tanggalLahir = document.getElementById("m-tanggal-lahir").value;
    const orangTua = document.getElementById("m-ortu").value.trim();
    const nis = document.getElementById("m-nis").value.trim();
    const nisn = document.getElementById("m-nisn").value.trim();
    const noIjazah = document.getElementById("m-ijazah").value.trim();
    const noSkl = document.getElementById("m-no-skl").value.trim();
    const noTranskrip = document.getElementById("m-no-transkrip").value.trim();
    
    if (!nama || !nis || !nisn || !tempatLahir || !tanggalLahir || !orangTua) {
        showToast("Error: Semua kolom biodata wajib diisi!", "danger");
        return;
    }
    
    let studentObj;
    if (activeModalStudentId) {
        // Editing existing
        studentObj = state.students.find(s => s.id === activeModalStudentId);
    } else {
        // Adding new
        studentObj = {
            id: Date.now().toString(),
            nilai: createEmptyGrades()
        };
    }
    
    // Save metadata
    studentObj.nama = nama;
    studentObj.agama = agama;
    studentObj.tempatLahir = tempatLahir;
    studentObj.tanggalLahir = tanggalLahir;
    studentObj.orangTua = orangTua;
    studentObj.nis = nis;
    studentObj.nisn = nisn;
    studentObj.noIjazah = noIjazah;
    studentObj.noSkl = noSkl;
    studentObj.noTranskrip = noTranskrip;
    
    // Collect all grade values from grid inputs
    const inputs = document.querySelectorAll(".grade-input");
    inputs.forEach(input => {
        const mapel = input.getAttribute("data-mapel");
        const field = input.getAttribute("data-field");
        const val = input.value === "" ? "" : parseFloat(input.value);
        
        if (!studentObj.nilai[mapel]) {
            studentObj.nilai[mapel] = {};
        }
        studentObj.nilai[mapel][field] = val;
    });
    
    if (!activeModalStudentId) {
        state.students.push(studentObj);
    }
    
    saveToLocalStorage();
    closeStudentModal();
    renderStudentTable();
    renderDashboardStats();
    showToast("Data siswa dan nilai berhasil disimpan!");
}

// --- 4. PRINT PREVIEWS GENERATION (SKL & TRANSKRIP) ---

// Populate Dropdown selector for prints
function renderSKLSelector() {
    const select = document.getElementById("skl-student-select");
    select.innerHTML = "";
    
    if (state.students.length === 0) {
        select.innerHTML = `<option value="">-- Tidak ada siswa --</option>`;
        return;
    }
    
    state.students.forEach(st => {
        const option = document.createElement("option");
        option.value = st.id;
        option.innerText = `${st.nama} (${st.nisn})`;
        select.appendChild(option);
    });
    
    // Trigger preview for first student
    generateSKLPreview();
}

function renderTranskripSelector() {
    const select = document.getElementById("transkrip-student-select");
    select.innerHTML = "";
    
    if (state.students.length === 0) {
        select.innerHTML = `<option value="">-- Tidak ada siswa --</option>`;
        return;
    }
    
    state.students.forEach(st => {
        const option = document.createElement("option");
        option.value = st.id;
        option.innerText = `${st.nama} (${st.nisn})`;
        select.appendChild(option);
    });
    
    // Trigger preview for first student
    generateTranskripPreview();
}

// Shared KOP Surat builder function
function buildKopSuratHTML() {
    const sp = state.schoolProfile;
    
    // Use placeholders if user hasn't uploaded logos
    const logoL = sp.logoLeft || "https://upload.wikimedia.org/wikipedia/commons/0/01/Pati_Regency_Seal.svg"; // Fallback to Pati Regency Logo
    const logoR = sp.logoRight || "https://upload.wikimedia.org/wikipedia/commons/8/8c/Tutwuri.png"; // Fallback to Tut Wuri Logo
    
    return `
        <div class="kop-logo-container-left">
            <img class="kop-logo-img" src="${logoL}" alt="Logo Pemkab">
        </div>
        <div class="kop-text-center">
            <h4>PEMERINTAH KABUPATEN ${sp.kabupaten}</h4>
            <h4>${sp.dinas}</h4>
            <h3>${sp.namaSekolah}</h3>
            <p>Alamat : ${sp.alamat} , Kode Pos. ${sp.kodePos}</p>
            <p>Email : ${sp.email}</p>
        </div>
        <div class="kop-logo-container-right">
            <img class="kop-logo-img" src="${logoR}" alt="Logo Sekolah">
        </div>
    `;
}

/// Formatting dates into Indonesian word formats e.g. 2025-06-02 -> 2 Juni 2025
function formatIndoDate(dateStr) {
    if (!dateStr) return "-";
    const parts = dateStr.split('-');
    if (parts.length !== 3) return dateStr;
    
    const year = parts[0];
    const monthIdx = parseInt(parts[1]) - 1;
    const day = parseInt(parts[2]);
    
    const months = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni", 
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    
    return `${day} ${months[monthIdx]} ${year}`;
}

// Convert any string to Title Case (Ejaan yang Disesuaikan)
// e.g. "PATI" -> "Pati" or "JAWA TENGAH" -> "Jawa Tengah"
function toTitleCase(str) {
    if (!str) return "";
    return str.trim().toLowerCase().split(/\s+/).map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

// Formatting school names to Title Case with "SD" capitalized
// e.g. "SD NEGERI KENANTI" -> "SD Negeri Kenanti"
function formatSchoolNameSDProper(schoolName) {
    if (!schoolName) return "";
    let name = schoolName.trim();
    return name.toLowerCase().split(/\s+/).map(word => {
        if (word === "sd") return "SD";
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

// Formatting school names to proper title case (Ejaan yang Disesuaikan)
// e.g. "SD NEGERI KENANTI" -> "Sekolah Dasar Negeri Kenanti"
// e.g. "SEKOLAH DASAR NEGERI KENANTI" -> "Sekolah Dasar Negeri Kenanti"
function formatSchoolNameProper(schoolName) {
    if (!schoolName) return "";
    let name = schoolName.trim();
    if (/^SD\s+/i.test(name)) {
        name = name.replace(/^SD\s+/i, "Sekolah Dasar ");
    }
    return name.toLowerCase().split(' ').map(word => {
        if (word === "sd") return "SD";
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

// Generate printable SKL
function generateSKLPreview() {
    const studentId = document.getElementById("skl-student-select").value;
    const previewContainer = document.getElementById("skl-preview-container");
    previewContainer.innerHTML = "";
    
    if (!studentId) {
        previewContainer.innerHTML = `<div style="padding:40px; text-align:center; color:#94a3b8;">Silakan pilih atau tambahkan data siswa terlebih dahulu.</div>`;
        return;
    }
    
    const st = state.students.find(s => s.id === studentId);
    const sp = state.schoolProfile;
    
    // Dynamic Religions PABP Subject
    const activeSubjects = getActiveSubjects();
    
    // Generate subjects rows HTML
    let tableRowsHTML = "";
    let overallSum = 0;
    let scoredItemsCount = 0;
    
    // We group by Pokok and Mulok
    const mapelPokok = activeSubjects.filter(s => !s.isMulokSub);
    const mapelMulok = activeSubjects.filter(s => s.isMulokSub);
    
    // Render Pokok
    mapelPokok.forEach((sub, idx) => {
        const na = calculateSubjectFinalGrade(st, sub);
        overallSum += na;
        scoredItemsCount++;
        
        tableRowsHTML += `
            <tr>
                <td class="center-align">${idx + 1}.</td>
                <td>${getSubjectDisplayName(sub, st.agama)}</td>
                <td class="right-align">${formatIndoDecimal(na)}</td>
            </tr>
        `;
    });
    
    // Render Mulok Section Header
    tableRowsHTML += `
        <tr>
            <td class="center-align">${mapelPokok.length + 1}.</td>
            <td>Muatan Lokal</td>
            <td></td>
        </tr>
    `;
    
    // Render Mulok items
    mapelMulok.forEach((sub, idx) => {
        const na = calculateSubjectFinalGrade(st, sub);
        overallSum += na;
        scoredItemsCount++;
        
        tableRowsHTML += `
            <tr>
                <td class="center-align"></td>
                <td class="indent-mapel">${String.fromCharCode(97 + idx)}. ${getSubjectDisplayName(sub, st.agama)}</td>
                <td class="right-align">${formatIndoDecimal(na)}</td>
            </tr>
        `;
    });
    
    // Calculate final Average
    const finalAvg = scoredItemsCount > 0 ? (overallSum / scoredItemsCount) : 0;
    
    // Format SD name dynamically to "SEKOLAH DASAR ..." for the SKL title block
    const rawSchoolName = sp.namaSekolah.toUpperCase();
    const formattedSchoolName = rawSchoolName.replace(/^SD\s+/, "SEKOLAH DASAR ");
    const properSchoolName = formatSchoolNameProper(sp.namaSekolah);

    // Build full SKL document
    const activeFontClass = (state.config.font === "arial") ? "font-arial" : "font-times";
    const page = document.createElement("div");
    page.className = `printable-page skl-page ${activeFontClass}`;
    page.innerHTML = `
        <div class="kop-surat">
            ${buildKopSuratHTML()}
        </div>
        
        <div class="document-title-block">
            <h2>SURAT KETERANGAN LULUS</h2>
            <h2>${formattedSchoolName}</h2>
            <h2>TAHUN AJARAN ${sp.tahunAjaran || "2024/2025"}</h2>
            <p>Nomer : ${st.noSkl || "400.3.11/21.1"}</p>
        </div>
        
        <div class="opening-text">
            Yang bertanda tangan dibawah ini, Kepala ${properSchoolName}, Kabupaten ${toTitleCase(sp.kabupaten)}, Provinsi Jawa Tengah menerangkan bahwa :
        </div>
        
        <table class="metadata-table">
            <tr>
                <td class="meta-key">Nama</td>
                <td class="meta-colon">:</td>
                <td class="meta-value">${st.nama}</td>
            </tr>
            <tr>
                <td class="meta-key">Tempat Tanggal Lahir</td>
                <td class="meta-colon">:</td>
                <td class="meta-value">${st.tempatLahir}, ${formatIndoDate(st.tanggalLahir)}</td>
            </tr>
            <tr>
                <td class="meta-key">Nama Orang Tua/ Wali</td>
                <td class="meta-colon">:</td>
                <td class="meta-value">${toTitleCase(st.orangTua)}</td>
            </tr>
            <tr>
                <td class="meta-key">Nomor Induk Siswa</td>
                <td class="meta-colon">:</td>
                <td class="meta-value">${st.nis}</td>
            </tr>
            <tr>
                <td class="meta-key">Nomor Induk Siswa Nasional</td>
                <td class="meta-colon">:</td>
                <td class="meta-value">${st.nisn}</td>
            </tr>
        </table>
        
        <div class="opening-text">
            Dinyatakan <strong>${finalAvg >= (parseFloat(sp.kkm) || 75) ? "LULUS" : "BELUM LULUS"}</strong> dari satuan pendidikan berdasarkan kriteria kelulusan ${properSchoolName}, Kabupaten ${toTitleCase(sp.kabupaten)} Provinsi Jawa Tengah Tahun Ajaran ${sp.tahunAjaran || "2024/2025"} dengan nilai sebagai berikut :
        </div>
        
        <table class="grades-print-table">
            <thead>
                <tr>
                    <th style="width: 50px;">No</th>
                    <th>Mata Pelajaran</th>
                    <th style="width: 140px;">Nilai</th>
                </tr>
            </thead>
            <tbody>
                ${tableRowsHTML}
                <tr class="total-row" style="background-color: transparent;">
                    <td colspan="2">Rata - rata</td>
                    <td class="value-cell">${formatIndoDecimal(finalAvg)}</td>
                </tr>
            </tbody>
        </table>
        
        <div class="closing-text-section">
            Surat keterangan lulus ini berlaku sementara sampai diterbitkannya Ijazah Tahun Ajaran ${sp.tahunAjaran || "2024/2025"}, untuk menjadikan maklum bagi yang berkepentingan.
        </div>
        
        <div class="footer-print-layout">
            <div class="pas-foto-placeholder-3x4">
                PAS FOTO<br>3 X 4
            </div>
            
            <div class="signature-block">
                <div class="signature-date">${toTitleCase(sp.kabupaten)}, ${formatIndoDate(sp.tanggalSkl)}</div>
                <div class="signature-title">Kepala Sekolah,</div>
                <div class="signature-name">${sp.kasekNama}</div>
                <div class="signature-nip">NIP. ${sp.kasekNip}</div>
            </div>
        </div>
    `;
    
    previewContainer.appendChild(page);
}

// Generate printable Transkrip
function generateTranskripPreview() {
    const studentId = document.getElementById("transkrip-student-select").value;
    const previewContainer = document.getElementById("transkrip-preview-container");
    previewContainer.innerHTML = "";
    
    if (!studentId) {
        previewContainer.innerHTML = `<div style="padding:40px; text-align:center; color:#94a3b8;">Silakan pilih atau tambahkan data siswa terlebih dahulu.</div>`;
        return;
    }
    
    const st = state.students.find(s => s.id === studentId);
    const sp = state.schoolProfile;
    
    const activeSubjects = getActiveSubjects();
    
    // Generate subjects rows HTML
    let tableRowsHTML = "";
    let overallSum = 0;
    let scoredItemsCount = 0;
    
    const mapelPokok = activeSubjects.filter(s => !s.isMulokSub);
    const mapelMulok = activeSubjects.filter(s => s.isMulokSub);
    
    mapelPokok.forEach((sub, idx) => {
        const na = calculateSubjectFinalGrade(st, sub);
        overallSum += na;
        scoredItemsCount++;
        
        tableRowsHTML += `
            <tr>
                <td class="center-align">${idx + 1}.</td>
                <td>${getSubjectDisplayName(sub, st.agama)}</td>
                <td class="right-align">${formatIndoDecimal(na)}</td>
            </tr>
        `;
    });
    
    tableRowsHTML += `
        <tr>
            <td class="center-align">${mapelPokok.length + 1}.</td>
            <td>Muatan Lokal</td>
            <td></td>
        </tr>
    `;
    
    mapelMulok.forEach((sub, idx) => {
        const na = calculateSubjectFinalGrade(st, sub);
        overallSum += na;
        scoredItemsCount++;
        
        tableRowsHTML += `
            <tr>
                <td class="center-align"></td>
                <td class="indent-mapel">${String.fromCharCode(97 + idx)}. ${getSubjectDisplayName(sub, st.agama)}</td>
                <td class="right-align">${formatIndoDecimal(na)}</td>
            </tr>
        `;
    });
    
    const finalAvg = scoredItemsCount > 0 ? (overallSum / scoredItemsCount) : 0;
    
    // Build full Transcript document
    const activeFontClass = (state.config.font === "arial") ? "font-arial" : "font-times";
    const page = document.createElement("div");
    page.className = `printable-page transkrip-page ${activeFontClass}`;
    page.innerHTML = `
        <div class="kop-surat">
            ${buildKopSuratHTML()}
        </div>
        
        <div class="document-title-block" style="margin-bottom: 12px;">
            <h2 class="transcript-title">TRANSKRIP NILAI</h2>
            <p>Nomer : ${st.noTranskrip || "400.3.11/023.01/2025"}</p>
        </div>
        
        <table class="metadata-table" style="margin-bottom: 12px;">
            <tr>
                <td class="meta-key">Satuan Pendidikan</td>
                <td class="meta-colon">:</td>
                <td class="meta-value">${formatSchoolNameSDProper(sp.namaSekolah)}</td>
            </tr>
            <tr>
                <td class="meta-key">Nomor Pokok Sekolah Nasional</td>
                <td class="meta-colon">:</td>
                <td class="meta-value">${sp.npsn}</td>
            </tr>
            <tr>
                <td class="meta-key">Nama lengkap</td>
                <td class="meta-colon">:</td>
                <td class="meta-value">${st.nama}</td>
            </tr>
            <tr>
                <td class="meta-key">Tempat, Tanggal Lahir</td>
                <td class="meta-colon">:</td>
                <td class="meta-value">${st.tempatLahir}, ${formatIndoDate(st.tanggalLahir)}</td>
            </tr>
            <tr>
                <td class="meta-key">Nomor Induk Siswa Nasional</td>
                <td class="meta-colon">:</td>
                <td class="meta-value">${st.nisn}</td>
            </tr>
            <tr>
                <td class="meta-key">Nomor Ijazah</td>
                <td class="meta-colon">:</td>
                <td class="meta-value">${st.noIjazah || "-"}</td>
            </tr>
            <tr>
                <td class="meta-key">Tanggal Kelulusan</td>
                <td class="meta-colon">:</td>
                <td class="meta-value">${formatIndoDate(sp.tanggalSkl)}</td>
            </tr>
        </table>
        
        <table class="grades-print-table" style="margin-bottom: 12px;">
            <thead>
                <tr>
                    <th style="width: 50px;">No.</th>
                    <th>Mata Pelajaran</th>
                    <th style="width: 140px;">Nilai</th>
                </tr>
            </thead>
            <tbody>
                ${tableRowsHTML}
                <tr class="total-row">
                    <td colspan="2">Rata - Rata</td>
                    <td class="value-cell">${formatIndoDecimal(finalAvg)}</td>
                </tr>
            </tbody>
        </table>
        
        <div class="footer-print-layout" style="justify-content: flex-end; margin-top: auto;">
            <div class="signature-block">
                <div class="signature-date">${toTitleCase(sp.kabupaten)}, ${formatIndoDate(sp.tanggalTranskrip)}</div>
                <div class="signature-title">Kepala Sekolah</div>
                <div class="signature-name">${sp.kasekNama}</div>
                <div class="signature-nip">NIP. ${sp.kasekNip}</div>
            </div>
        </div>
    `;
    
    previewContainer.appendChild(page);
}

// Print Document
function printActivePreview() {
    window.print();
}

// --- EXPORT & IMPORT UTILITIES ---

// 1. JSON Backup/Restore
function exportToJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 4));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `Backup_Data_Kelulusan_SD_${state.schoolProfile.namaSekolah.replace(/\s+/g, '_')}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
    showToast("Data cadangan JSON berhasil diunduh!");
}

function handleJSONImport(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const imported = JSON.parse(e.target.result);
            if (imported.schoolProfile && imported.students) {
                state = imported;
                saveToLocalStorage();
                renderDashboardStats();
                showToast("Data kelulusan sekolah berhasil dipulihkan secara penuh dari file JSON!");
                switchPanel("dashboard");
            } else {
                showToast("Format file JSON cadangan tidak sesuai!", "danger");
            }
        } catch (err) {
            showToast("Gagal mengurai file JSON. File rusak!", "danger");
        }
    };
    reader.readAsText(file);
}

// 2. CSV / Excel Importer & Templates
function downloadCSVTemplate() {
    const activeSubjects = getActiveSubjects();
    const activeSems = getActiveSemesters();
    
    // Header row
    let headers = ["Nama Lengkap", "Agama", "Tempat Lahir", "Tanggal Lahir (YYYY-MM-DD)", "Orang Tua Wali", "NIS", "NISN", "Nomor Ijazah", "Nomor Surat SKL", "Nomor Surat Transkrip"];
    
    activeSubjects.forEach(sub => {
        activeSems.forEach(sem => {
            headers.push(`${sub.name} - ${sem.replace("sem", "Sem")}`);
        });
        headers.push(`${sub.name} - US`);
        if (sub.hasPraktik) {
            headers.push(`${sub.name} - Praktik`);
        }
    });
    
    // Create worksheet data with headers and 1 row of mock data as visual guidance
    const mockRow = ["Ahmad Faris Syahputra", "Islam", "Pati", "2012-12-25", "ABDUL MUIS", "2147", "0124849286", "111202507556700", "400.3.11/21.1", "400.3.11/023.01/2025"];
    
    for (let i = 10; i < headers.length; i++) {
        mockRow.push(88); // Default grade seed for guidance
    }
    
    const sheetData = [headers, mockRow];
    
    // Create new workbook using SheetJS (XLSX)
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(sheetData);
    
    // Append worksheet to workbook
    XLSX.utils.book_append_sheet(wb, ws, "Template Nilai Kelulusan");
    
    // Download as a real native .xlsx binary file!
    XLSX.writeFile(wb, "Template_Impor_Nilai_SD_Negeri_Wedusan.xlsx");
    
    showToast("Template Microsoft Excel (.xlsx) berhasil diunduh!");
}

// Export current students data to a fully populated Excel sheet
function exportExcelData() {
    if (!state.students || state.students.length === 0) {
        showToast("Tidak ada data siswa untuk diekspor!", "warning");
        return;
    }
    
    const activeSubjects = getActiveSubjects();
    const activeSems = getActiveSemesters();
    
    // Header row
    let headers = ["Nama Lengkap", "Agama", "Tempat Lahir", "Tanggal Lahir (YYYY-MM-DD)", "Orang Tua Wali", "NIS", "NISN", "Nomor Ijazah", "Nomor Surat SKL", "Nomor Surat Transkrip"];
    
    activeSubjects.forEach(sub => {
        activeSems.forEach(sem => {
            headers.push(`${sub.name} - ${sem.replace("sem", "Sem")}`);
        });
        headers.push(`${sub.name} - US`);
        if (sub.hasPraktik) {
            headers.push(`${sub.name} - Praktik`);
        }
    });
    
    const sheetData = [headers];
    
    state.students.forEach(student => {
        const row = [
            student.nama || "",
            student.agama || "Islam",
            student.tempatLahir || "",
            student.tanggalLahir || "",
            student.orangTua || "",
            student.nis || "",
            student.nisn || "",
            student.noIjazah || "",
            student.noSkl || "",
            student.noTranskrip || ""
        ];
        
        // Match grades dynamically
        activeSubjects.forEach(sub => {
            const gradesObj = (student.nilai && student.nilai[sub.key]) || {};
            
            // Semesters
            activeSems.forEach(sem => {
                row.push(gradesObj[sem] !== undefined && gradesObj[sem] !== "" ? gradesObj[sem] : "");
            });
            
            // US
            row.push(gradesObj.us !== undefined && gradesObj.us !== "" ? gradesObj.us : "");
            
            // Praktik
            if (sub.hasPraktik) {
                row.push(gradesObj.praktik !== undefined && gradesObj.praktik !== "" ? gradesObj.praktik : "");
            }
        });
        
        sheetData.push(row);
    });
    
    // Create new workbook using SheetJS (XLSX)
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(sheetData);
    
    // Append worksheet to workbook
    XLSX.utils.book_append_sheet(wb, ws, "Data Nilai Kelulusan");
    
    // Download as a real native .xlsx binary file!
    const schoolName = (state.schoolProfile && state.schoolProfile.sekolah) ? state.schoolProfile.sekolah.replace(/\s+/g, "_") : "SD";
    XLSX.writeFile(wb, `Data_Siswa_dan_Nilai_${schoolName}.xlsx`);
    
    showToast("Data Siswa berhasil diekspor ke Microsoft Excel (.xlsx)!");
}

// Excel & CSV File Uploader with SheetJS Integrations
function handleExcelImport(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, {type: 'array'});
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            
            // Read rows as array of arrays
            const rows = XLSX.utils.sheet_to_json(worksheet, {header: 1});
            
            if (rows.length < 2) {
                showToast("File Excel kosong atau tidak memiliki baris data!", "danger");
                return;
            }
            
            // First row is headers
            const headers = rows[0].map(h => h ? h.toString().trim() : "");
            
            // Build temporary mapper based on active columns
            const activeSubjects = getActiveSubjects();
            const activeSems = getActiveSemesters();
            
            let importCount = 0;
            
            // Loop students rows
            for (let i = 1; i < rows.length; i++) {
                const row = rows[i];
                if (!row || row.length === 0 || !row[0]) continue; // Skip empty rows
                
                const nama = row[0] ? row[0].toString().trim() : "";
                const agama = row[1] ? row[1].toString().trim() : "Islam";
                const tempatLahir = row[2] ? row[2].toString().trim() : "";
                // Handle Excel dates or string dates
                let tanggalLahir = "";
                if (row[3]) {
                    if (typeof row[3] === 'number') {
                        // Excel serial date conversion
                        const dateObj = new Date((row[3] - 25569) * 86400 * 1000);
                        tanggalLahir = dateObj.toISOString().split('T')[0];
                    } else {
                        tanggalLahir = row[3].toString().trim();
                    }
                }
                
                const orangTua = row[4] ? row[4].toString().trim() : "";
                const nis = row[5] ? row[5].toString().trim() : "";
                const nisn = row[6] ? row[6].toString().trim() : "";
                const noIjazah = row[7] ? row[7].toString().trim() : "";
                
                let noSkl = "";
                const noSklColIdx = headers.findIndex(h => h.toLowerCase().includes("surat skl") || h.toLowerCase().includes("no skl"));
                if (noSklColIdx !== -1) {
                    noSkl = row[noSklColIdx] ? row[noSklColIdx].toString().trim() : "";
                } else if (row[8] !== undefined) {
                    noSkl = row[8] ? row[8].toString().trim() : "";
                }
                
                let noTranskrip = "";
                const noTransColIdx = headers.findIndex(h => h.toLowerCase().includes("surat transkrip") || h.toLowerCase().includes("no transkrip"));
                if (noTransColIdx !== -1) {
                    noTranskrip = row[noTransColIdx] ? row[noTransColIdx].toString().trim() : "";
                } else if (row[9] !== undefined) {
                    noTranskrip = row[9] ? row[9].toString().trim() : "";
                }
                
                if (!nama || !nisn || !nis) continue; // Basic safety check
                
                const studentGrades = createEmptyGrades();
                
                // Map grades dynamically based on headers list
                activeSubjects.forEach(sub => {
                    // Semesters
                    activeSems.forEach(sem => {
                        const colLabel = `${sub.name} - ${sem.replace("sem", "Sem")}`.toLowerCase();
                        const colIdx = headers.findIndex(h => h.toLowerCase() === colLabel);
                        if (colIdx !== -1 && row[colIdx] !== undefined) {
                            studentGrades[sub.key][sem] = parseFloat(row[colIdx]) || "";
                        }
                    });
                    
                    // US
                    const usLabel = `${sub.name} - US`.toLowerCase();
                    const usIdx = headers.findIndex(h => h.toLowerCase() === usLabel);
                    if (usIdx !== -1 && row[usIdx] !== undefined) {
                        studentGrades[sub.key].us = parseFloat(row[usIdx]) || "";
                    }
                    
                    // Praktik
                    if (sub.hasPraktik) {
                        const prLabel = `${sub.name} - Praktik`.toLowerCase();
                        const prIdx = headers.findIndex(h => h.toLowerCase() === prLabel);
                        if (prIdx !== -1 && row[prIdx] !== undefined) {
                            studentGrades[sub.key].praktik = parseFloat(row[prIdx]) || "";
                        }
                    }
                });
                
                // Construct student object
                const stObj = {
                    id: Date.now().toString() + "_" + Math.random().toString(36).substr(2, 9),
                    nama,
                    agama,
                    tempatLahir,
                    tanggalLahir,
                    orangTua,
                    nis,
                    nisn,
                    noIjazah,
                    noSkl,
                    noTranskrip,
                    nilai: studentGrades
                };
                
                // Check if duplicate (by NISN), if so override
                const dupIdx = state.students.findIndex(s => s.nisn === nisn);
                if (dupIdx !== -1) {
                    state.students[dupIdx] = stObj;
                } else {
                    state.students.push(stObj);
                }
                
                importCount++;
            }
            
            saveToLocalStorage();
            renderStudentTable();
            renderDashboardStats();
            showToast(`Berhasil mengimpor ${importCount} data siswa dari file Excel!`);
            switchPanel("siswa");
            
        } catch (err) {
            console.error(err);
            showToast("Gagal membaca file Excel. Pastikan format kolom sesuai!", "danger");
        }
    };
    reader.readAsArrayBuffer(file);
}

// Reset entire database to default seeds
function resetDatabase() {
    if (confirm("PERINGATAN: Apakah Anda yakin ingin mereset seluruh database kelulusan? Semua profil sekolah, logo, data siswa, dan nilai akan dihapus dan dikembalikan ke data tiruan awal.")) {
        localStorage.removeItem("kelulusan_sd_state");
        state = {
            schoolProfile: {
                kabupaten: "PATI",
                dinas: "DINAS PENDIDIKAN DAN KEBUDAYAAN",
                namaSekolah: "SD NEGERI WEDUSAN",
                npsn: "20316435",
                alamat: "Jl. Pucel - Ngablak Km. 05 Desa Wedusan",
                kodePos: "59158",
                email: "sdwedusan@gmail.com",
                kasekNama: "Sudarto, S.Pd",
                kasekNip: "196702122006041004",
                tanggalSkl: "2025-06-02",
                tanggalTranskrip: "2025-06-25",
                logoLeft: "",
                logoRight: "",
                tahunAjaran: "2024/2025",
                kkm: 75
            },
            rumus: { rapor: 50, us: 50, praktik: 0 },
            config: { kurikulum: "merdeka", rentangSemester: "9-12", font: "times" },
            students: []
        };
        seedMockData();
        saveToLocalStorage();
        renderDashboardStats();
        switchPanel("dashboard");
        showToast("Database berhasil di-reset ke pengaturan awal!", "warning");
    }
}

// --- SECURE ADMINISTRATIVE LOGIN PORTAL LOGIC ---
function attemptLogin(event) {
    event.preventDefault();
    const user = document.getElementById("login-username").value.trim();
    const pass = document.getElementById("login-password").value.trim();
    
    if (user === "admin" && pass === "admin") {
        // Successful login
        sessionStorage.setItem("kelulusan_logged_in", "true");
        showToast("Login berhasil! Selamat datang di Portal KelulusanSD.");
        
        // Transition animation
        const portal = document.getElementById("login-portal");
        const workspace = document.getElementById("app-workspace");
        
        portal.style.opacity = "0";
        portal.style.pointerEvents = "none";
        
        setTimeout(() => {
            portal.style.display = "none";
            workspace.style.display = "flex";
            
            // Render first dashboard view
            switchPanel("dashboard");
            
            // Update countdown card
            updateGraduationCountdown();
        }, 500);
    } else {
        showToast("Error: Username atau Password salah!", "danger");
    }
}

function checkLoginSession() {
    const loggedIn = sessionStorage.getItem("kelulusan_logged_in") === "true";
    const portal = document.getElementById("login-portal");
    const workspace = document.getElementById("app-workspace");
    
    if (loggedIn) {
        if (portal) portal.style.display = "none";
        if (workspace) workspace.style.display = "flex";
        switchPanel("dashboard");
    } else {
        if (portal) {
            portal.style.display = "flex";
            portal.style.opacity = "1";
            portal.style.pointerEvents = "auto";
        }
        if (workspace) workspace.style.display = "none";
    }
}

function logout() {
    if (confirm("Apakah Anda yakin ingin keluar dari sistem KelulusanSD?")) {
        sessionStorage.removeItem("kelulusan_logged_in");
        showToast("Anda telah berhasil keluar dari sistem.", "warning");
        
        // Clear login inputs
        document.getElementById("login-username").value = "";
        document.getElementById("login-password").value = "";
        
        checkLoginSession();
    }
}

// --- DYNAMIC GRADUATION COUNTDOWN & CELEBRATION ENGINE ---
function updateGraduationCountdown() {
    const sp = state.schoolProfile;
    if (!sp || !sp.tanggalSkl) return;
    
    // Parse target graduation date at start of day
    const targetDate = new Date(sp.tanggalSkl + "T00:00:00");
    const now = new Date();
    const diff = targetDate - now;
    
    const sideDisplay = document.getElementById("side-countdown-display");
    const sideStatus = document.getElementById("side-countdown-status");
    const dashCard = document.getElementById("dashboard-announcement-card");
    
    if (diff > 0) {
        // Graduation date has NOT arrived yet - show countdown!
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        let sideCountdownStr = "";
        if (days > 0) {
            sideCountdownStr = `<i class="fas fa-clock"></i> ${days} Hari ${hours} Jam`;
        } else {
            sideCountdownStr = `<i class="fas fa-clock animate-pulse"></i> ${hours}j ${minutes}m ${seconds}s`;
        }
        
        if (sideDisplay) sideDisplay.innerHTML = sideCountdownStr;
        if (sideStatus) sideStatus.innerText = "Menuju Pengumuman Resmi";
        
        if (dashCard && document.getElementById("panel-dashboard").classList.contains("active")) {
            dashCard.innerHTML = `
                <div class="premium-card" style="background: linear-gradient(135deg, #1e1b4b 0%, #311042 100%); color: white; border: 1px solid rgba(255,255,255,0.08); position: relative; overflow: hidden; padding: 32px;">
                    <div style="position: absolute; top: -50px; right: -50px; width: 180px; height: 180px; background: radial-gradient(circle, rgba(79, 70, 229, 0.25) 0%, rgba(79, 70, 229, 0) 70%);"></div>
                    <div style="display: flex; flex-direction: column; gap: 12px; z-index: 2; position: relative;">
                        <span class="badge" style="background-color: var(--primary); color: white; max-width: fit-content; padding: 6px 12px; font-weight: 700;">
                            <i class="fas fa-hourglass-half"></i> Menuju Kelulusan Resmi
                        </span>
                        <h2 style="font-family: var(--font-heading); font-size: 26px; font-weight: 700; color: white; margin-top: 6px;">
                            Hitung Mundur Pengumuman Kelulusan Resmi
                        </h2>
                        <p style="font-size: 14.5px; opacity: 0.85; line-height: 1.6; max-width: 750px; margin-bottom: 8px;">
                            Status kelulusan seluruh siswa **${formatSchoolNameProper(sp.namaSekolah)}** Tahun Ajaran **${sp.tahunAjaran || "2024/2025"}** akan resmi diumumkan secara serentak dalam:
                        </p>
                        
                        <!-- Countdown Timers -->
                        <div style="display: flex; gap: 14px; margin: 12px 0;">
                            <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--border-radius-md); padding: 12px 18px; text-align: center; min-width: 70px;">
                                <div style="font-size: 26px; font-weight: 800; color: #a5b4fc;">${days}</div>
                                <div style="font-size: 9px; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 2px;">Hari</div>
                            </div>
                            <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--border-radius-md); padding: 12px 18px; text-align: center; min-width: 70px;">
                                <div style="font-size: 26px; font-weight: 800; color: #a5b4fc;">${hours}</div>
                                <div style="font-size: 9px; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 2px;">Jam</div>
                            </div>
                            <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--border-radius-md); padding: 12px 18px; text-align: center; min-width: 70px;">
                                <div style="font-size: 26px; font-weight: 800; color: #a5b4fc;">${minutes}</div>
                                <div style="font-size: 9px; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 2px;">Menit</div>
                            </div>
                            <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--border-radius-md); padding: 12px 18px; text-align: center; min-width: 70px;">
                                <div style="font-size: 26px; font-weight: 800; color: #a5b4fc; text-shadow: 0 0 10px rgba(165,180,252,0.3);">${seconds}</div>
                                <div style="font-size: 9px; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 2px;">Detik</div>
                            </div>
                        </div>
                        
                        <p style="font-size: 12px; color: #94a3b8; margin-top: 4px;">
                            <i class="fas fa-info-circle"></i> Rilis pengumuman dijadwalkan pada tanggal: <strong>${formatIndoDate(sp.tanggalSkl)}</strong> (00:00 WIB)
                        </p>
                    </div>
                </div>
            `;
        }
    } else {
        // Celebratory Mode - The graduation date has arrived!
        let scoredStudents = 0;
        let lulusCount = 0;
        state.students.forEach(st => {
            const avg = calculateStudentOverallAverage(st);
            if (avg > 0) {
                scoredStudents++;
                const kkm = parseFloat(sp.kkm) || 75;
                if (avg >= kkm) {
                    lulusCount++;
                }
            }
        });
        const passPercentage = scoredStudents > 0 ? (lulusCount / scoredStudents * 100) : 100;

        if (sideDisplay) sideDisplay.innerHTML = `<i class="fas fa-trophy text-amber-400"></i> LULUS ${passPercentage.toFixed(0)}%`;
        if (sideStatus) sideStatus.innerText = "Resmi Diumumkan!";
        
        if (dashCard && document.getElementById("panel-dashboard").classList.contains("active")) {
            dashCard.innerHTML = `
                <div class="premium-card" style="background: linear-gradient(135deg, #059669 0%, #064e3b 50%, #0f172a 100%); color: white; border: none; position: relative; overflow: hidden; padding: 36px; box-shadow: 0 20px 40px rgba(16, 185, 129, 0.25); animation: pulseScale 3s infinite alternate;">
                    <!-- celebratory grid overlay -->
                    <div style="position: absolute; width: 100%; height: 100%; top:0; left:0; pointer-events:none; background-image: radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px); background-size: 24px 24px;"></div>
                    <div style="position: absolute; bottom: -30px; right: -30px; width: 220px; height: 220px; background: radial-gradient(circle, rgba(52, 211, 153, 0.25) 0%, rgba(52, 211, 153, 0) 70%);"></div>
                    <div style="display: flex; flex-direction: column; gap: 12px; z-index: 2; position: relative;">
                        <span class="badge" style="background-color: white; color: #059669; max-width: fit-content; padding: 6px 12px; font-weight: 800;">
                            <i class="fas fa-bullhorn text-emerald-600"></i> Kelulusan Resmi Diumumkan!
                        </span>
                        <h2 style="font-family: var(--font-heading); font-size: 28px; font-weight: 800; color: white; letter-spacing: 0.5px; margin-top: 6px;">
                            🎉 SELAMAT! KELULUSAN RESMI DIUMUMKAN 🎉
                        </h2>
                        <p style="font-size: 15px; opacity: 0.95; line-height: 1.6; max-width: 800px; margin-bottom: 12px;">
                            Berdasarkan kriteria kelulusan resmi **${formatSchoolNameProper(sp.namaSekolah)}**, seluruh siswa kelas VI Tahun Ajaran **${sp.tahunAjaran || "2024/2025"}** telah menyelesaikan pendidikan dan dinyatakan **${passPercentage.toFixed(0)}% LULUS**!
                        </p>
                        
                        <div style="display: flex; flex-wrap: wrap; gap: 14px;">
                            <button class="btn btn-secondary" onclick="switchPanel('siswa')" style="background-color: white; color: #064e3b; border: none; font-weight: 700; font-size: 13.5px; padding: 10px 20px;">
                                <i class="fas fa-graduation-cap"></i> Lihat Data Kelulusan Siswa
                            </button>
                            <button class="btn btn-secondary" onclick="switchPanel('skl')" style="background-color: rgba(255,255,255,0.15); color: white; border: 1px solid rgba(255,255,255,0.25); font-weight: 600; font-size: 13.5px; padding: 10px 20px;">
                                <i class="fas fa-print"></i> Mulai Cetak SKL Massal
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }
    }
}

// --- STUDENT SELF-SERVICE LOOKUP PORTAL WORKSPACE LOGIC ---

// Switch between Admin login tab and Student lookup tab
function switchLoginTab(tab) {
    const adminBtn = document.getElementById("tab-login-admin");
    const studentBtn = document.getElementById("tab-login-student");
    const adminForm = document.getElementById("login-form-admin");
    const studentForm = document.getElementById("login-form-student");
    if (!adminBtn || !studentBtn || !adminForm || !studentForm) return;
    
    if (tab === "admin") {
        adminBtn.style.background = "var(--primary)";
        adminBtn.style.color = "white";
        studentBtn.style.background = "transparent";
        studentBtn.style.color = "#94a3b8";
        adminForm.style.display = "block";
        studentForm.style.display = "none";
    } else {
        studentBtn.style.background = "var(--primary)";
        studentBtn.style.color = "white";
        adminBtn.style.background = "transparent";
        adminBtn.style.color = "#94a3b8";
        adminForm.style.display = "none";
        studentForm.style.display = "block";
        document.getElementById("lookup-nisn").focus();
    }
}

let activeStudentPortalId = null;

// Handle student lookup by NISN
function attemptStudentLookup(event) {
    event.preventDefault();
    const lookupInput = document.getElementById("lookup-nisn");
    if (!lookupInput) return;
    const nisnInput = lookupInput.value.trim();
    
    if (nisnInput.length !== 10 || isNaN(nisnInput)) {
        showToast("Error: NISN harus berupa 10 digit angka!", "danger");
        return;
    }
    
    // 1. Check if the graduation date has arrived
    const sp = state.schoolProfile;
    if (sp.tanggalSkl) {
        const targetDate = new Date(sp.tanggalSkl + "T00:00:00");
        const now = new Date();
        if (targetDate - now > 0) {
            showToast(`Pengumuman belum dirilis! Silakan tunggu sampai tanggal resmi: ${formatIndoDate(sp.tanggalSkl)}.`, "danger");
            return;
        }
    }
    
    // 2. Search for student by NISN or NIS
    const st = state.students.find(s => s.nisn === nisnInput || s.nis === nisnInput);
    if (!st) {
        showToast("Maaf, NISN tidak terdaftar di database. Silakan periksa kembali atau hubungi pihak sekolah.", "danger");
        return;
    }
    
    // Successful lookup!
    activeStudentPortalId = st.id;
    showToast(`Data ditemukan! Selamat datang, ${st.nama}.`);
    
    // Transition to Student Self-Service Workspace
    const portal = document.getElementById("login-portal");
    const studentWorkspace = document.getElementById("student-portal-workspace");
    
    portal.style.opacity = "0";
    portal.style.pointerEvents = "none";
    
    setTimeout(() => {
        portal.style.display = "none";
        studentWorkspace.style.display = "flex";
        
        // Render school profile title in student header
        document.getElementById("st-portal-school-title").innerText = sp.namaSekolah || "SD Negeri Wedusan";
        
        // Dynamic KKM check for banner
        const avg = calculateStudentOverallAverage(st);
        const kkm = parseFloat(sp.kkm) || 75;
        const isLulus = avg >= kkm;
        
        const banner = document.getElementById("st-portal-banner");
        const emojiDiv = document.getElementById("st-portal-emoji");
        const welcomeMsg = document.getElementById("st-portal-welcome-msg");
        const descMsg = document.getElementById("st-portal-status-desc");
        const actionBtns = document.getElementById("st-portal-action-btns");
        const canvas = document.getElementById("student-portal-print-canvas");
        
        if (isLulus) {
            // Lulus Styling & Content
            if (banner) {
                banner.style.background = "linear-gradient(135deg, #059669 0%, #064e3b 50%, #0f172a 100%)";
                banner.style.boxShadow = "0 15px 30px rgba(16, 185, 129, 0.2)";
                banner.style.animation = "pulseScale 3s infinite alternate";
            }
            if (emojiDiv) emojiDiv.innerText = "🎉🎓🏆";
            if (welcomeMsg) welcomeMsg.innerText = `SELAMAT! ${st.nama.toUpperCase()}`;
            if (descMsg) descMsg.innerHTML = `Anda dinyatakan <strong>LULUS</strong> dari satuan pendidikan dasar! Silakan lihat dan unduh Surat Keterangan Lulus (SKL) dan Transkrip Nilai Anda di bawah ini secara resmi.`;
            if (actionBtns) actionBtns.style.display = "flex";
            if (canvas) canvas.style.display = "flex";
            
            // Render both print documents under lookup portal print canvas
            renderStudentPortalDocs(st);
        } else {
            // Belum Lulus Styling & Content
            if (banner) {
                banner.style.background = "linear-gradient(135deg, #ef4444 0%, #7f1d1d 50%, #0f172a 100%)";
                banner.style.boxShadow = "0 15px 30px rgba(239, 68, 68, 0.2)";
                banner.style.animation = "none";
            }
            if (emojiDiv) emojiDiv.innerText = "⚠️ℹ️";
            if (welcomeMsg) welcomeMsg.innerText = `PEMBERITAHUAN: ${st.nama.toUpperCase()}`;
            if (descMsg) descMsg.innerHTML = `Status kelulusan Anda saat ini dinyatakan <strong>BELUM MEMENUHI KRITERIA KELULUSAN SATUAN PENDIDIKAN</strong> (Rata-rata Nilai Akhir Anda <strong>${formatIndoDecimal(avg)}</strong> berada di bawah batas KKM Sekolah <strong>${formatIndoDecimal(kkm)}</strong>).<br><br>Silakan menghubungi Kepala Sekolah atau Wali Kelas Anda secara langsung di kantor sekolah untuk informasi bimbingan lebih lanjut.`;
            if (actionBtns) actionBtns.style.display = "none";
            if (canvas) {
                canvas.style.display = "none";
                canvas.innerHTML = "";
            }
        }
    }, 500);
}

// Generate print sheets inside the student lookup portal
function renderStudentPortalDocs(st) {
    const canvas = document.getElementById("student-portal-print-canvas");
    if (!canvas) return;
    canvas.innerHTML = "";
    
    const sp = state.schoolProfile;
    const activeSubjects = getActiveSubjects();
    
    // Calculate final Average
    let overallSum = 0;
    let scoredItemsCount = 0;
    
    const mapelPokok = activeSubjects.filter(s => !s.isMulokSub);
    const mapelMulok = activeSubjects.filter(s => s.isMulokSub);
    
    // Generate SKL subjects table rows
    let sklRowsHTML = "";
    mapelPokok.forEach((sub, idx) => {
        const na = calculateSubjectFinalGrade(st, sub);
        overallSum += na;
        scoredItemsCount++;
        sklRowsHTML += `
            <tr>
                <td class="center-align">${idx + 1}.</td>
                <td>${getSubjectDisplayName(sub, st.agama)}</td>
                <td class="right-align">${formatIndoDecimal(na)}</td>
            </tr>
        `;
    });
    
    sklRowsHTML += `
        <tr>
            <td class="center-align">${mapelPokok.length + 1}.</td>
            <td>Muatan Lokal</td>
            <td></td>
        </tr>
    `;
    
    mapelMulok.forEach((sub, idx) => {
        const na = calculateSubjectFinalGrade(st, sub);
        overallSum += na;
        scoredItemsCount++;
        sklRowsHTML += `
            <tr>
                <td class="center-align"></td>
                <td class="indent-mapel">${String.fromCharCode(97 + idx)}. ${getSubjectDisplayName(sub, st.agama)}</td>
                <td class="right-align">${formatIndoDecimal(na)}</td>
            </tr>
        `;
    });
    
    const finalAvg = scoredItemsCount > 0 ? (overallSum / scoredItemsCount) : 0;
    
    // Format SD name dynamically
    const rawSchoolName = sp.namaSekolah.toUpperCase();
    const formattedSchoolName = rawSchoolName.replace(/^SD\s+/, "SEKOLAH DASAR ");
    const properSchoolName = formatSchoolNameProper(sp.namaSekolah);
    
    // Generate SKL DOM Sheet
    const activeFontClass = (state.config.font === "arial") ? "font-arial" : "font-times";
    const sklPage = document.createElement("div");
    sklPage.className = `printable-page skl-page ${activeFontClass}`;
    sklPage.id = "student-portal-skl-sheet";
    sklPage.innerHTML = `
        <div class="kop-surat">
            ${buildKopSuratHTML()}
        </div>
        
        <div class="document-title-block">
            <h2>SURAT KETERANGAN LULUS</h2>
            <h2>${formattedSchoolName}</h2>
            <h2>TAHUN AJARAN ${sp.tahunAjaran || "2024/2025"}</h2>
            <p>Nomer : ${st.noSkl || "400.3.11/21.1"}</p>
        </div>
        
        <div class="opening-text">
            Yang bertanda tangan dibawah ini, Kepala ${properSchoolName}, Kabupaten ${toTitleCase(sp.kabupaten)}, Provinsi Jawa Tengah menerangkan bahwa :
        </div>
        
        <table class="metadata-table">
            <tr>
                <td class="meta-key">Nama</td>
                <td class="meta-colon">:</td>
                <td class="meta-value">${st.nama}</td>
            </tr>
            <tr>
                <td class="meta-key">Tempat Tanggal Lahir</td>
                <td class="meta-colon">:</td>
                <td class="meta-value">${st.tempatLahir}, ${formatIndoDate(st.tanggalLahir)}</td>
            </tr>
            <tr>
                <td class="meta-key">Nama Orang Tua/ Wali</td>
                <td class="meta-colon">:</td>
                <td class="meta-value">${toTitleCase(st.orangTua)}</td>
            </tr>
            <tr>
                <td class="meta-key">Nomor Induk Siswa</td>
                <td class="meta-colon">:</td>
                <td class="meta-value">${st.nis}</td>
            </tr>
            <tr>
                <td class="meta-key">Nomor Induk Siswa Nasional</td>
                <td class="meta-colon">:</td>
                <td class="meta-value">${st.nisn}</td>
            </tr>
        </table>
        
        <div class="opening-text">
            Dinyatakan <strong>${finalAvg >= (parseFloat(sp.kkm) || 75) ? "LULUS" : "BELUM LULUS"}</strong> dari satuan pendidikan berdasarkan kriteria kelulusan ${properSchoolName}, Kabupaten ${toTitleCase(sp.kabupaten)} Provinsi Jawa Tengah Tahun Ajaran ${sp.tahunAjaran || "2024/2025"} dengan nilai sebagai berikut :
        </div>
        
        <table class="grades-print-table">
            <thead>
                <tr>
                    <th style="width: 50px;">No</th>
                    <th>Mata Pelajaran</th>
                    <th style="width: 140px;">Nilai</th>
                </tr>
            </thead>
            <tbody>
                ${sklRowsHTML}
                <tr class="total-row" style="background-color: transparent;">
                    <td colspan="2">Rata - rata</td>
                    <td class="value-cell">${formatIndoDecimal(finalAvg)}</td>
                </tr>
            </tbody>
        </table>
        
        <div class="closing-text-section">
            Surat keterangan lulus ini berlaku sementara sampai diterbitkannya Ijazah Tahun Ajaran ${sp.tahunAjaran || "2024/2025"}, untuk menjadikan maklum bagi yang berkepentingan.
        </div>
        
        <div class="footer-print-layout">
            <div class="pas-foto-placeholder-3x4">
                PAS FOTO<br>3 X 4
            </div>
            
            <div class="signature-block">
                <div class="signature-date">${toTitleCase(sp.kabupaten)}, ${formatIndoDate(sp.tanggalSkl)}</div>
                <div class="signature-title">Kepala Sekolah,</div>
                <div class="signature-name">${sp.kasekNama}</div>
                <div class="signature-nip">NIP. ${sp.kasekNip}</div>
            </div>
        </div>
    `;
    
    // Generate Transcript table rows
    let transkripRowsHTML = "";
    mapelPokok.forEach((sub, idx) => {
        const na = calculateSubjectFinalGrade(st, sub);
        transkripRowsHTML += `
            <tr>
                <td class="center-align">${idx + 1}.</td>
                <td>${getSubjectDisplayName(sub, st.agama)}</td>
                <td class="right-align">${formatIndoDecimal(na)}</td>
            </tr>
        `;
    });
    
    transkripRowsHTML += `
        <tr>
            <td class="center-align">${mapelPokok.length + 1}.</td>
            <td>Muatan Lokal</td>
            <td></td>
        </tr>
    `;
    
    mapelMulok.forEach((sub, idx) => {
        const na = calculateSubjectFinalGrade(st, sub);
        transkripRowsHTML += `
            <tr>
                <td class="center-align"></td>
                <td class="indent-mapel">${String.fromCharCode(97 + idx)}. ${getSubjectDisplayName(sub, st.agama)}</td>
                <td class="right-align">${formatIndoDecimal(na)}</td>
            </tr>
        `;
    });
    
    // Generate Transkrip DOM Sheet
    const transkripPage = document.createElement("div");
    transkripPage.className = `printable-page transkrip-page ${activeFontClass}`;
    transkripPage.id = "student-portal-transkrip-sheet";
    transkripPage.innerHTML = `
        <div class="kop-surat">
            ${buildKopSuratHTML()}
        </div>
        
        <div class="document-title-block" style="margin-bottom: 12px;">
            <h2 class="transcript-title">TRANSKRIP NILAI</h2>
            <p>Nomer : ${st.noTranskrip || "400.3.11/023.01/2025"}</p>
        </div>
        
        <table class="metadata-table" style="margin-bottom: 12px;">
            <tr>
                <td class="meta-key">Satuan Pendidikan</td>
                <td class="meta-colon">:</td>
                <td class="meta-value">${formatSchoolNameSDProper(sp.namaSekolah)}</td>
            </tr>
            <tr>
                <td class="meta-key">Nomor Pokok Sekolah Nasional</td>
                <td class="meta-colon">:</td>
                <td class="meta-value">${sp.npsn}</td>
            </tr>
            <tr>
                <td class="meta-key">Nama lengkap</td>
                <td class="meta-colon">:</td>
                <td class="meta-value">${st.nama}</td>
            </tr>
            <tr>
                <td class="meta-key">Tempat, Tanggal Lahir</td>
                <td class="meta-colon">:</td>
                <td class="meta-value">${st.tempatLahir}, ${formatIndoDate(st.tanggalLahir)}</td>
            </tr>
            <tr>
                <td class="meta-key">Nomor Induk Siswa Nasional</td>
                <td class="meta-colon">:</td>
                <td class="meta-value">${st.nisn}</td>
            </tr>
            <tr>
                <td class="meta-key">Nomor Ijazah</td>
                <td class="meta-colon">:</td>
                <td class="meta-value">${st.noIjazah || "-"}</td>
            </tr>
            <tr>
                <td class="meta-key">Tanggal Kelulusan</td>
                <td class="meta-colon">:</td>
                <td class="meta-value">${formatIndoDate(sp.tanggalSkl)}</td>
            </tr>
        </table>
        
        <table class="grades-print-table" style="margin-bottom: 12px;">
            <thead>
                <tr>
                    <th style="width: 50px;">No.</th>
                    <th>Mata Pelajaran</th>
                    <th style="width: 140px;">Nilai</th>
                </tr>
            </thead>
            <tbody>
                ${transkripRowsHTML}
                <tr class="total-row">
                    <td colspan="2">Rata - Rata</td>
                    <td class="value-cell">${formatIndoDecimal(finalAvg)}</td>
                </tr>
            </tbody>
        </table>
        
        <div class="footer-print-layout" style="justify-content: flex-end; margin-top: auto;">
            <div class="signature-block">
                <div class="signature-date">${toTitleCase(sp.kabupaten)}, ${formatIndoDate(sp.tanggalTranskrip)}</div>
                <div class="signature-title">Kepala Sekolah</div>
                <div class="signature-name">${sp.kasekNama}</div>
                <div class="signature-nip">NIP. ${sp.kasekNip}</div>
            </div>
        </div>
    `;
    
    // Append both pages to the portal canvas!
    canvas.appendChild(sklPage);
    canvas.appendChild(transkripPage);
}

// Exit student portal and return to login screen
function exitStudentPortal() {
    activeStudentPortalId = null;
    document.getElementById("lookup-nisn").value = "";
    
    const studentWorkspace = document.getElementById("student-portal-workspace");
    const portal = document.getElementById("login-portal");
    
    if (studentWorkspace) studentWorkspace.style.display = "none";
    if (portal) {
        portal.style.display = "flex";
        portal.style.opacity = "1";
        portal.style.pointerEvents = "auto";
    }
}

// Print SKL only for Student Portal lookup
function printStudentSKL() {
    const transkrip = document.getElementById("student-portal-transkrip-sheet");
    if (transkrip) transkrip.style.display = "none";
    
    window.print();
    
    if (transkrip) transkrip.style.display = "block";
}

// Print Transkrip only for Student Portal lookup
function printStudentTranskrip() {
    const skl = document.getElementById("student-portal-skl-sheet");
    if (skl) skl.style.display = "none";
    
    window.print();
    
    if (skl) skl.style.display = "block";
}

// --- BOOTSTRAP INITIALIZATION ON PAGE LOAD ---
window.onload = function() {
    // Inject notification container
    const toastContainer = document.createElement("div");
    toastContainer.id = "toast-container";
    toastContainer.className = "notification-container";
    document.body.appendChild(toastContainer);
    
    // Load state
    loadFromLocalStorage();
    
    // Check login session state
    checkLoginSession();
    
    // Initialize countdown timer (run immediately, then every 1 second)
    updateGraduationCountdown();
    setInterval(updateGraduationCountdown, 1000);
};
