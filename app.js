/* ==========================================================================
   Website Resmi SD Negeri Wedusan - Modern Application Logic
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Dynamic Year in Footer
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.innerText = new Date().getFullYear();
    }

    // ==========================================================================
    // CENTRAL SEED DATABASE FOR DYNAMIC PAGES
    // ==========================================================================
    const defaultSchoolDatabase = {
        logo: {
            type: "icon",
            icon: "fa-school",
            base64Image: "",
            name: "SDN Wedusan",
            tagline: "Mewujudkan Generasi Cerdas & Berkarakter"
        },
        heroSlides: [
            {
                id: "slide_1",
                badge: "<i class=\"fas fa-graduation-cap\"></i> Selamat Datang",
                title: "Platform Digital Resmi <span>SD Negeri Wedusan</span>",
                desc: "Berkomitmen mewujudkan generasi yang cerdas secara kognitif, kreatif, berprestasi tinggi, serta memiliki karakter kepemimpinan luhur berlandaskan nilai-nilai luhur bangsa.",
                link: "Daftar PPDB Baru|https://wa.me/085347641171?text=Halo%20Admin%20SPMB%2C%20saya%20ingin%20bertanya%20tentang%20pendaftaran.",
                base64Image: "",
                imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800"
            },
            {
                id: "slide_2",
                badge: "<i class=\"fas fa-bullseye\"></i> Karakter Luhur",
                title: "Membangun Semangat Nasionalisme & <span>Budi Pekerti</span>",
                desc: "Mari Bersama Terus Melaju Untuk Indonesia Maju dengan Menjunjung Tinggi Nilai-Nilai Pancasila dan Pembiasaan Keagamaan Rutin.",
                link: "Jelajahi Program|#program",
                base64Image: "",
                imageUrl: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800"
            },
            {
                id: "slide_3",
                badge: "<i class=\"fas fa-laptop-code\"></i> Administrasi Terpadu",
                title: "Inovasi Tanpa Batas Melalui <span>CMS Untukmu Negeri</span>",
                desc: "Layanan cek kelulusan mandiri kelas VI dan pencetakan Surat Keterangan Lulus (SKL) resmi secara online langsung dari rumah Anda.",
                link: "Cek Kelulusan|#portal-kelulusan",
                base64Image: "",
                imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800"
            }
        ],
        news: [
            {
                id: "news_1",
                tag: "Prestasi",
                date: "26 Mei 2026",
                title: "Prestasi Juara II POPDA Korfball 2026 Gugus Dewi Sartika",
                desc: "Dukung penuh minat bakat siswa, kontingen Gugus Dewi Sartika berhasil membawa pulang medali Perak POPDA Korfball.",
                link: "https://sdnwedusan.aksespedia.com/berita/dukung-minat-bakat-siswa-gugus-dewi-sartika-torehkan-prestasi-juara-ii-di-ajang-popda-korfball-2026",
                icon: "fa-users-rectangle",
                base64Image: ""
            },
            {
                id: "news_2",
                tag: "Pendidikan",
                date: "02 Mei 2026",
                title: "Gelorakan Hardiknas 2026, SDN Wedusan Perkuat Sinergi",
                desc: "Perkuat Sinergi Semesta demi Pendidikan Bermutu demi menyongsong generasi unggul berkarakter Pancasila.",
                link: "https://sdnwedusan.aksespedia.com/berita/gelorakan-hardiknas-2026-sdn-wedusan-perkuat-sinergi-semesta-demi-pendidikan-bermutu",
                icon: "fa-ribbon",
                base64Image: ""
            },
            {
                id: "news_3",
                tag: "POPDA & O2SN",
                date: "24 April 2026",
                title: "Membanggakan! Raih Juara POPDA & O2SN Kec. Dukuhseti",
                desc: "Siswa-siswi SD Negeri Wedusan tampil perkasa menyabet emas and penghargaan di ajang POPDA & O2SN Dukuhseti.",
                link: "https://sdnwedusan.aksespedia.com/berita/membanggakan-siswa-siswi-sdn-wedusan-raih-juara-di-ajang-popda-dan-o2sn-tingkat-kecamatan-dukuhseti-2026",
                icon: "fa-trophy",
                base64Image: ""
            }
        ],
        facilities: [
            {
                id: "fac_1",
                title: "Gerbang & Papan Nama",
                desc: "Akses masuk sekolah yang kokoh, megah, dan berwibawa di pinggir jalan raya utama Desa Wedusan.",
                link: "https://sdnwedusan.aksespedia.com/fasilitas",
                icon: "fa-door-open",
                base64Image: ""
            },
            {
                id: "fac_2",
                title: "Perpustakaan Nyaman",
                desc: "Ruang membaca tenang dan sejuk yang dilengkapi ribuan buku referensi ilmu pengetahuan menarik.",
                link: "https://sdnwedusan.aksespedia.com/fasilitas",
                icon: "fa-book-reader",
                base64Image: ""
            },
            {
                id: "fac_3",
                title: "Ruang Kelas Kondusif",
                desc: "Ruang belajar luas yang bersih, terang, dilengkapi proyektor interaktif dan sirkulasi udara baik.",
                link: "https://sdnwedusan.aksespedia.com/fasilitas",
                icon: "fa-chalkboard-user",
                base64Image: ""
            },
            {
                id: "fac_4",
                title: "Musholla & Area Ibadah",
                desc: "Musholla sekolah yang bersih untuk pembiasaan sholat berjamaah dan tadarus keagamaan harian murid.",
                link: "https://sdnwedusan.aksespedia.com/fasilitas",
                icon: "fa-mosque",
                base64Image: ""
            },
            {
                id: "fac_5",
                title: "Kamar Mandi Higienis",
                desc: "Fasilitas toilet bersih, terpisah untuk siswa pria dan wanita, serta guru dengan air mengalir melimpah.",
                link: "https://sdnwedusan.aksespedia.com/fasilitas",
                icon: "fa-restroom",
                base64Image: ""
            },
            {
                id: "fac_6",
                title: "Halaman Hijau Adiwiyata",
                desc: "Area bermain outdoor dan halaman upacara bendera yang asri dikelilingi pepohonan pelindung rindang.",
                link: "https://sdnwedusan.aksespedia.com/fasilitas",
                icon: "fa-tree",
                base64Image: ""
            }
        ],
        agenda: [
            {
                id: "age_1",
                badge: "09 Feb 2026",
                title: "Ujian Praktik Kelas VI SD",
                desc: "Pelaksanaan ujian praktik kelayakan kompetensi bagi seluruh peserta didik kelas VI sebagai salah satu syarat utama kelulusan.",
                link: "https://sdnwedusan.aksespedia.com/agenda/ujian-praktik-kelas-vi",
                icon: "fa-file-signature"
            },
            {
                id: "age_2",
                badge: "05 Feb 2026",
                title: "Rapat Pleno Komite Sekolah",
                desc: "Rapat koordinasi sinergi tahunan antara pengurus komite sekolah, paguyuban wali murid, serta Kepala Sekolah untuk program pendidikan.",
                link: "https://sdnwedusan.aksespedia.com/agenda",
                icon: "fa-users"
            },
            {
                id: "age_3",
                badge: "02 Feb 2026",
                title: "Lomba Kompetensi Siswa",
                desc: "Ajang unjuk bakat, kreativitas, prestasi, dan keterampilan akademik maupun non-akademik antarkelas di lingkungan sekolah.",
                link: "https://sdnwedusan.aksespedia.com/agenda",
                icon: "fa-trophy"
            },
            {
                id: "age_4",
                badge: "01 Feb 2026",
                title: "Pelepasan Siswa Kelas VI",
                desc: "Acara seremonial pelepasan siswa kelas akhir yang dikombinasikan dengan pentas gebyar kreativitas seni tari tradisional.",
                link: "https://sdnwedusan.aksespedia.com/agenda",
                icon: "fa-graduation-cap"
            }
        ],
        downloads: [
            {
                id: "dl_1",
                title: "Laporan TKA SD",
                badge: "Microsoft Word • Laporan",
                desc: "Laporan resmi Program TKA sekolah dasar. Buka dan unduh berkas secara langsung.",
                link: "https://docs.google.com/document/d/1ke0bLNoEsCbUJmEQLVxhMthtEPaPGYrp/edit?usp=sharing&ouid=114689328531825124802&rtpof=true&sd=true",
                icon: "fa-file-word"
            },
            {
                id: "dl_2",
                title: "SOP TKA Tahun 2026",
                badge: "Microsoft Word • SOP",
                desc: "Dokumen Standar Operasional Prosedur (SOP) pelaksanaan program TKA terpadu sekolah dasar.",
                link: "https://docs.google.com/document/d/1OnTIPAF_rLAVzOPTQ4CddXwNv4gqKwoj/edit?usp=sharing&ouid=114689328531825124802&rtpof=true&sd=true",
                icon: "fa-file-contract"
            },
            {
                id: "dl_3",
                title: "Contoh Program Kerja TKA",
                badge: "Microsoft Word • Proker",
                desc: "Contoh rancangan program kerja pelaksanaan TKA sebagai referensi penyusunan dokumen lembaga.",
                link: "https://docs.google.com/document/d/1gZyIwJmtBulUCTR7e7nx0bPuLFxt6S3R/edit?usp=sharing&ouid=114689328531825124802&rtpof=true&sd=true",
                icon: "fa-file-alt"
            },
            {
                id: "dl_4",
                title: "Jadwal KBM Ramadhan",
                badge: "Dokumen PDF Resmi • 127 KB",
                desc: "Kalender Kegiatan Belajar Mengajar (KBM) khusus bulan suci Ramadhan 1447 H / 2026 M. (127 KB)",
                link: "https://sdnwedusan.aksespedia.com/storage/tenants/50/Stzc6r5Ghfwzltf3DTaK4WIOASTJKsKCtEM7GlyH.pdf",
                icon: "fa-file-pdf"
            }
        ],
        stats: [
            { id: "stat_1", value: "250+", label: "Siswa Didik" },
            { id: "stat_2", value: "16+", label: "Guru & Tenaga Kerja" },
            { id: "stat_3", value: "100%", label: "Lulus Ujian Utama" },
            { id: "stat_4", value: "A", label: "Akreditasi Sekolah" }
        ],
        welcome: {
            name: "Sudarto, S.Pd",
            title: "Kepala Sekolah",
            quote: "\"Mewujudkan manusia yang terampil, kreatif, berprestasi dan berkarakter, dilandasi iman dan taqwa kepada Tuhan Yang Maha Esa.\"",
            heading: "Menyatukan Potensi Teknologi dan Karakter Bangsa Untuk Generasi Unggul",
            text1: "Puji syukur kehadirat Tuhan Yang Maha Esa atas hadirnya situs web profil resmi digital SD Negeri Wedusan. Kami percaya bahwa teknologi dan pendidikan bermutu adalah kunci utama untuk mempersiapkan generasi masa depan yang cerdas secara kognitif serta berkarakter mulia.",
            text2: "Melalui situs ini, kami berusaha menyediakan informasi yang komprehensif, cepat, transparan, dan terpercaya mengenai kurikulum, program unggulan, fasilitas, agenda kegiatan, serta portal administrasi satu pintu bagi seluruh orang tua murid dan pemangku kepentingan.",
            base64Image: ""
        },
        visionMission: {
            vision: "\" Mewujudkan manusia yang terampil, kreatif, berprestasi dan berkarakter, dilandasi iman dan taqwa kepada Tuhan Yang Maha Esa, serta berbudi pekerti luhur. \"",
            mission: [
                "Mengembangkan dan memfasilitasi peningkatan prestasi murid sesuai minat dan bakatnya melalui proses pendampingan dan kerja sama yang erat dengan orang tua murid.",
                "Menumbuhkan karakter murid yang disiplin, jujur, kreatif, mandiri, bertanggung jawab, serta peduli terhadap pelestarian lingkungan hidup sekitarnya.",
                "Melaksanakan pembelajaran berbasis teknologi digital (literasi digital) untuk mempermudah pemahaman ilmu pengetahuan modern secara kreatif."
            ]
        },
        programs: [
            {
                id: "prog_1",
                title: "Penguatan Karakter & Budaya Sekolah",
                desc: "Membentuk pribadi peserta didik yang berakhlak mulia, disiplin, berjiwa luhur, peduli lingkungan, serta memiliki semangat kebangsaan.",
                link: "Selengkapnya|#profil",
                icon: "fa-hands-holding"
            },
            {
                id: "prog_2",
                title: "Literasi Digital & Inovasi Teknologi",
                desc: "Meningkatkan kemampuan murid dan tenaga pendidik dalam memanfaatkan perangkat digital secara cerdas, aman, kreatif, dan inovatif.",
                link: "Selengkapnya|#profil",
                icon: "fa-laptop"
            },
            {
                id: "prog_3",
                title: "Karakter & Kepemimpinan Murid",
                desc: "Program khusus pembinaan kepemimpinan yang bertujuan melatih disiplin diri, tanggung jawab sosial, serta keterampilan bekerja sama.",
                link: "Selengkapnya|#profil",
                icon: "fa-compass"
            },
            {
                id: "prog_4",
                title: "Optimalisasi Potensi Akademik Nasional",
                desc: "Memaksimalkan penguasaan materi murid sesuai Standar Nasional secara terarah melalui pendampingan khusus dan tryout berkala.",
                link: "Selengkapnya|#profil",
                icon: "fa-award"
            },
            {
                id: "prog_5",
                title: "Karakter & Pembiasaan Keagamaan",
                desc: "Membiasakan nilai keagamaan melalui pembacaan Asma'ul Husna, tahlil bersama, tadarus, dan ibadah berjamaah secara rutin.",
                link: "Selengkapnya|#profil",
                icon: "fa-mosque"
            },
            {
                id: "prog_6",
                title: "Pramuka & Kesenian Tradisional",
                desc: "Wadah pengembangan minat bakat di luar jam sekolah melalui kepramukaan terpadu serta latihan tari kesenian tradisional.",
                link: "Selengkapnya|#profil",
                icon: "fa-campground"
            }
        ],
        registrations: [
            {
                id: "reg_1",
                nama: "Rian Hidayat",
                nisn: "3318120614080002",
                ttl: "Pati, 14 Juni 2019",
                jk: "Laki-laki",
                ortu: "Budi Prasetyo",
                wa: "085347641171",
                asalTk: "TK Pertiwi Wedusan",
                alamat: "RT 02 RW 01 Desa Wedusan"
            },
            {
                id: "reg_2",
                nama: "Siti Rahmawati",
                nisn: "3318124802190001",
                ttl: "Pati, 20 Agustus 2019",
                jk: "Perempuan",
                ortu: "Ahmad Dahlan",
                wa: "081234567890",
                asalTk: "RA Miftahul Ulum Wedusan",
                alamat: "RT 04 RW 02 Desa Wedusan"
            }
        ]
    };

    // Initialize State with Self-Healing Fallback
    let schoolDB = null;
    try {
        const storedData = localStorage.getItem("school_website_db");
        if (storedData) {
            schoolDB = JSON.parse(storedData);
        }
    } catch (e) {
        console.error("Gagal memuat database dari localStorage:", e);
    }

    // Verify database schema integrity, reset to default if corrupt or missing properties
    if (!schoolDB || typeof schoolDB !== "object" || 
        !schoolDB.news || !schoolDB.facilities || 
        !schoolDB.agenda || !schoolDB.downloads || !schoolDB.heroSlides ||
        !schoolDB.stats || !schoolDB.welcome || !schoolDB.visionMission ||
        !schoolDB.programs || !schoolDB.registrations) {
        
        console.warn("Database tidak lengkap atau tidak valid. Melakukan reset ke database default.");
        schoolDB = defaultSchoolDatabase;
        try {
            localStorage.setItem("school_website_db", JSON.stringify(schoolDB));
        } catch (e) {
            console.error("Gagal menyimpan database default:", e);
        }
    }
    
    // Self-heal logo schema key if missing from older browser cache
    if (schoolDB && !schoolDB.logo) {
        schoolDB.logo = {
            type: "icon",
            icon: "fa-school",
            base64Image: "",
            name: "SDN Wedusan",
            tagline: "Mewujudkan Generasi Cerdas & Berkarakter"
        };
        try {
            localStorage.setItem("school_website_db", JSON.stringify(schoolDB));
        } catch (e) {
            console.error("Gagal menyimpan self-healing logo:", e);
        }
    }
    
    let isAdminLoggedIn = localStorage.getItem("school_admin_logged_in") === "true";

    // 1. Render Engines
    function renderDynamicLogo() {
        const container = document.getElementById("brand-container");
        if (!container) return;

        const logo = schoolDB.logo || {
            type: "icon",
            icon: "fa-school",
            base64Image: "",
            name: "SDN Wedusan",
            tagline: "Mewujudkan Generasi Cerdas & Berkarakter"
        };

        const editBtn = isAdminLoggedIn ? `
            <div class="admin-controls" style="position: absolute; top: 50%; transform: translateY(-50%); left: 100%; margin-left: 12px; display: flex; z-index: 100; margin-top:0;">
                <button class="btn btn-add-item" onclick="openEditLogo(event)" style="padding: 4px 10px; font-size: 11px; border-style: solid; white-space: nowrap; height:auto; box-shadow: var(--shadow-sm);"><i class="fas fa-edit"></i> Edit Logo</button>
            </div>
        ` : "";

        const logoHtml = logo.type === "image" && logo.base64Image ? `
            <img src="${logo.base64Image}" style="height: 38px; width: 38px; object-fit: contain; border-radius: 4px;" alt="Logo">
        ` : `
            <i class="fas ${logo.icon || 'fa-school'}"></i>
        `;

        container.innerHTML = `
            <div class="brand-logo">
                ${logoHtml}
            </div>
            <div class="brand-text">
                <span class="brand-name">${logo.name}</span>
                <span class="brand-sub">${logo.tagline}</span>
            </div>
            ${editBtn}
        `;

        // Propagate branding changes to the footer dynamically for brand consistency
        const footerTitle = document.querySelector(".footer-about h3");
        if (footerTitle) {
            footerTitle.innerText = logo.name;
        }
        
        const footerCopyright = document.querySelector(".footer-bottom p");
        if (footerCopyright) {
            const year = new Date().getFullYear();
            footerCopyright.innerHTML = `&copy; <span id="current-year">${year}</span> ${logo.name}. Hak Cipta Dilindungi.`;
        }
    }
    function renderDynamicHeroSlider() {
        const sliderContainer = document.getElementById("beranda");
        if (!sliderContainer) return;

        if (!schoolDB.heroSlides || schoolDB.heroSlides.length === 0) {
            sliderContainer.innerHTML = `
                <div class="container" style="padding-top: 100px; text-align: center; color: var(--text-muted);">
                    <p>Belum ada slide. Silakan masuk sebagai admin untuk menambah slide baru.</p>
                </div>
            `;
            return;
        }

        let slidesHtml = schoolDB.heroSlides.map((item, idx) => {
            let buttonText = "Selengkapnya";
            let buttonUrl = "#";
            if (item.link) {
                if (item.link.includes("|")) {
                    const parts = item.link.split("|");
                    buttonText = parts[0].trim();
                    buttonUrl = parts[1].trim();
                } else {
                    buttonUrl = item.link.trim();
                }
            }

            const imageSrc = item.base64Image || item.imageUrl || "";

            return `
                <div class="slide ${idx === 0 ? 'active' : ''}" data-id="${item.id}">
                    <div class="container">
                        <div class="hero-grid">
                            <div class="hero-content">
                                <div class="hero-badge">${item.badge}</div>
                                <h1 class="hero-title">${item.title}</h1>
                                <p class="hero-desc">${item.desc}</p>
                                <div class="hero-action-buttons">
                                    <a href="${buttonUrl}" class="btn btn-primary" ${buttonUrl.startsWith('http') ? 'target="_blank"' : ''}>
                                        ${buttonText} <i class="fas fa-arrow-circle-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="hero-visual">
                                <div class="hero-img-box" style="background-image: url('${imageSrc}'); background-size: cover; background-position: center; border: none; padding: 0; position: relative;">
                                    <div class="admin-controls" onclick="event.preventDefault(); event.stopPropagation();">
                                        <button class="btn-admin-card edit" onclick="openEditItem('heroSlides', '${item.id}')"><i class="fas fa-edit"></i></button>
                                        <button class="btn-admin-card delete" onclick="deleteItem('heroSlides', '${item.id}')"><i class="fas fa-trash"></i></button>
                                    </div>
                                </div>
                                <div class="float-card float-card-1">
                                    <div class="float-icon"><i class="fas fa-graduation-cap"></i></div>
                                    <div class="float-text">
                                        <h4>250+ Siswa</h4>
                                        <p>Cerdas & Berkarakter</p>
                                    </div>
                                </div>
                                <div class="float-card float-card-2">
                                    <div class="float-icon amber"><i class="fas fa-award"></i></div>
                                    <div class="float-text">
                                        <h4>Akreditasi A</h4>
                                        <p>Sangat Unggul</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join("");

        // Control Arrows & Dots
        const controlsHtml = `
            <button class="slider-control prev"><i class="fas fa-chevron-left"></i></button>
            <button class="slider-control next"><i class="fas fa-chevron-right"></i></button>
            <div class="slider-dots">
                ${schoolDB.heroSlides.map((_, idx) => `<span class="dot ${idx === 0 ? 'active' : ''}"></span>`).join("")}
            </div>
            <!-- Admin "+ Tambah Slide Baru" overlay button inside hero slider container -->
            <div class="add-btn-wrapper slider-add-btn" style="position: absolute; bottom: 20px; right: 20px; z-index: 50; margin-bottom: 0;">
                <button class="btn-add-item" onclick="openAddItem('heroSlides')"><i class="fas fa-plus"></i> Tambah Slide Baru</button>
            </div>
        `;

        sliderContainer.innerHTML = slidesHtml + controlsHtml;

        // Initialize slider animation listeners
        reinitSliderEngine();
    }

    function renderDynamicStats() {
        const container = document.getElementById("stats-container");
        if (!container) return;

        const editBtn = isAdminLoggedIn ? `
            <div class="admin-controls" style="position: absolute; top: 15px; right: 15px; display: flex; z-index: 50; margin: 0;">
                <button class="btn btn-add-item" onclick="openEditStats()" style="padding: 6px 14px; font-size: 12px; border-style: solid;"><i class="fas fa-edit"></i> Edit Statistik</button>
            </div>
        ` : "";

        const itemsHtml = schoolDB.stats.map(item => `
            <div class="stat-item">
                <h2>${item.value}</h2>
                <p>${item.label}</p>
            </div>
        `).join("");

        container.innerHTML = editBtn + `<div class="stats-grid">${itemsHtml}</div>`;
    }

    function renderDynamicWelcome() {
        const container = document.getElementById("welcome-container");
        if (!container) return;

        const w = schoolDB.welcome;
        const editBtn = isAdminLoggedIn ? `
            <div class="admin-controls" style="position: absolute; top: 15px; right: 15px; display: flex; z-index: 50; margin: 0;">
                <button class="btn btn-add-item" onclick="openEditWelcome()" style="padding: 6px 14px; font-size: 12px; border-style: solid;"><i class="fas fa-edit"></i> Edit Sambutan</button>
            </div>
        ` : "";

        const photoHtml = w.base64Image ? `
            <img src="${w.base64Image}" style="width: 160px; height: 160px; border-radius: 50%; object-fit: cover; border: 4px solid var(--primary-light); box-shadow: var(--shadow-sm); z-index: 5; margin: 0 auto 20px auto; display: block;" alt="Kasek">
        ` : `
            <div class="kasek-photo-placeholder"><i class="fas fa-user-tie"></i></div>
        `;

        container.innerHTML = editBtn + `
            <div class="about-grid">
                <div class="about-visual">
                    <div style="position: relative; display: inline-block;">
                        ${photoHtml}
                    </div>
                    <h4>${w.name}</h4>
                    <p class="kasek-title">${w.title}</p>
                    <p class="kasek-desc">${w.quote}</p>
                </div>
                
                <div class="about-content">
                    <span class="section-badge">Sambutan Kepala Sekolah</span>
                    <h3>${w.heading}</h3>
                    <div class="about-text">
                        <p>${w.text1}</p>
                        <p>${w.text2}</p>
                    </div>
                    <a href="#profil" class="btn btn-primary"><i class="fas fa-chevron-circle-down"></i> Lihat Visi & Misi</a>
                </div>
            </div>
        `;
    }

    function renderDynamicVisionMission() {
        const container = document.getElementById("visi-misi-container");
        if (!container) return;

        const vm = schoolDB.visionMission;
        const editBtn = isAdminLoggedIn ? `
            <div class="admin-controls" style="position: absolute; top: 15px; right: 15px; display: flex; z-index: 50; margin: 0;">
                <button class="btn btn-add-item" onclick="openEditVision()" style="padding: 6px 14px; font-size: 12px; border-style: solid;"><i class="fas fa-edit"></i> Edit Visi & Misi</button>
            </div>
        ` : "";

        container.innerHTML = editBtn + `
            <div class="section-header">
                <span class="section-badge">Landasan Utama</span>
                <h2 class="section-title">Visi & Misi SD Negeri Wedusan</h2>
                <p class="section-subtitle">Nilai utama yang mendasari arah pembelajaran, tata tertib, dan ekosistem pendidikan di lembaga kami.</p>
            </div>
            
            <div class="visi-misi-card-grid">
                <!-- Visi Card -->
                <div class="visi-misi-card">
                    <div class="card-top-icon"><i class="fas fa-bullseye"></i></div>
                    <h3>Visi Sekolah</h3>
                    <p class="visi-text">${vm.vision}</p>
                </div>
                
                <!-- Misi Card -->
                <div class="visi-misi-card secondary">
                    <div class="card-top-icon"><i class="fas fa-tasks"></i></div>
                    <h3>Misi Sekolah</h3>
                    <ul class="misi-list">
                        ${vm.mission.map(point => `<li>${point}</li>`).join("")}
                    </ul>
                </div>
            </div>
        `;
    }

    function renderDynamicPrograms() {
        const container = document.getElementById("programs-container");
        if (!container) return;

        const addBtn = isAdminLoggedIn ? `
            <div class="add-btn-wrapper" style="display: flex; justify-content: center; margin-bottom: 40px;">
                <button class="btn-add-item" onclick="openAddItem('programs')"><i class="fas fa-plus"></i> Tambah Program Baru</button>
            </div>
        ` : "";

        const cardsHtml = schoolDB.programs.map(item => {
            let buttonText = "Selengkapnya";
            let buttonUrl = "#";
            if (item.link) {
                if (item.link.includes("|")) {
                    const parts = item.link.split("|");
                    buttonText = parts[0].trim();
                    buttonUrl = parts[1].trim();
                } else {
                    buttonUrl = item.link.trim();
                }
            }

            return `
                <div class="feature-card" data-id="${item.id}" style="position: relative;">
                    <div class="admin-controls" onclick="event.preventDefault(); event.stopPropagation();">
                        <button class="btn-admin-card edit" onclick="openEditItem('programs', '${item.id}')"><i class="fas fa-edit"></i></button>
                        <button class="btn-admin-card delete" onclick="deleteItem('programs', '${item.id}')"><i class="fas fa-trash"></i></button>
                    </div>
                    <div class="feature-icon"><i class="fas ${item.icon || 'fa-award'}"></i></div>
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                    <a href="${buttonUrl}" class="feature-link" ${buttonUrl.startsWith('http') ? 'target="_blank"' : ''}>${buttonText} <i class="fas fa-arrow-right"></i></a>
                </div>
            `;
        }).join("");

        container.innerHTML = `
            <div class="section-header">
                <span class="section-badge">Program Pendidikan</span>
                <h2 class="section-title">Program Unggulan Sekolah</h2>
                <p class="section-subtitle">Program edukasi terarah yang dirancang khusus untuk memaksimalkan kecerdasan spiritual, karakter kepemimpinan, dan akademik murid.</p>
            </div>
            ${addBtn}
            <div class="features-grid">${cardsHtml}</div>
        `;
    }

    function renderDynamicNews() {
        const grid = document.getElementById("news-grid");
        if (!grid) return;
        
        grid.innerHTML = schoolDB.news.map(item => {
            const bgImgStyle = item.base64Image ? `style="background-image: url('${item.base64Image}'); background-size: cover; background-position: center;"` : "";
            const mediaContent = item.base64Image ? "" : `<i class="fas ${item.icon || 'fa-newspaper'}"></i><span class="gallery-tag">${item.tag || 'Berita'}</span>`;
            
            return `
                <div class="gallery-card" data-id="${item.id}">
                    <div class="gallery-media" ${bgImgStyle}>
                        ${mediaContent}
                        <div class="admin-controls" onclick="event.preventDefault(); event.stopPropagation();">
                            <button class="btn-admin-card edit" onclick="openEditItem('news', '${item.id}')"><i class="fas fa-edit"></i></button>
                            <button class="btn-admin-card delete" onclick="deleteItem('news', '${item.id}')"><i class="fas fa-trash"></i></button>
                        </div>
                    </div>
                    <div class="gallery-content">
                        <div class="gallery-date"><i class="fas fa-calendar-alt"></i> ${item.date}</div>
                        <h3>${item.title}</h3>
                        <p>${item.desc}</p>
                        <a href="${item.link || '#'}" class="feature-link" target="_blank">Baca Selengkapnya <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            `;
        }).join("");
    }

    function renderDynamicFacilities() {
        const grid = document.getElementById("facilities-grid");
        if (!grid) return;
        
        grid.innerHTML = schoolDB.facilities.map(item => {
            const bgImgStyle = item.base64Image ? `style="background-image: url('${item.base64Image}'); background-size: cover; background-position: center; border-radius: 12px; height: 140px; margin-bottom: 20px; position: relative;"` : "";
            const iconContent = item.base64Image ? "" : `<div class="feature-icon"><i class="fas ${item.icon || 'fa-school'}"></i></div>`;
            
            return `
                <div class="feature-card" data-id="${item.id}" style="position: relative;">
                    <div class="admin-controls" onclick="event.preventDefault(); event.stopPropagation();">
                        <button class="btn-admin-card edit" onclick="openEditItem('facilities', '${item.id}')"><i class="fas fa-edit"></i></button>
                        <button class="btn-admin-card delete" onclick="deleteItem('facilities', '${item.id}')"><i class="fas fa-trash"></i></button>
                    </div>
                    ${item.base64Image ? `<div ${bgImgStyle}></div>` : iconContent}
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                    <a href="${item.link || '#'}" class="feature-link" target="_blank">Selengkapnya <i class="fas fa-arrow-right"></i></a>
                </div>
            `;
        }).join("");
    }

    function renderDynamicAgenda() {
        const grid = document.getElementById("agenda-grid");
        if (!grid) return;
        
        grid.innerHTML = schoolDB.agenda.map(item => {
            return `
                <div class="feature-card" data-id="${item.id}" style="position: relative;">
                    <div class="admin-controls" onclick="event.preventDefault(); event.stopPropagation();">
                        <button class="btn-admin-card edit" onclick="openEditItem('agenda', '${item.id}')"><i class="fas fa-edit"></i></button>
                        <button class="btn-admin-card delete" onclick="deleteItem('agenda', '${item.id}')"><i class="fas fa-trash"></i></button>
                    </div>
                    <div class="feature-icon"><i class="fas ${item.icon || 'fa-calendar-alt'}"></i></div>
                    <div class="card-date-badge">${item.badge}</div>
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                    <a href="${item.link || '#'}" class="feature-link" target="_blank">Selengkapnya <i class="fas fa-arrow-right"></i></a>
                </div>
            `;
        }).join("");
    }

    function renderDynamicDownloads() {
        const grid = document.getElementById("downloads-grid");
        if (!grid) return;
        
        grid.innerHTML = schoolDB.downloads.map(item => {
            return `
                <a href="${item.link || '#'}" class="feature-card" target="_blank" style="text-decoration: none; position: relative;">
                    <div class="admin-controls" onclick="event.preventDefault(); event.stopPropagation();">
                        <button class="btn-admin-card edit" onclick="openEditItem('downloads', '${item.id}')"><i class="fas fa-edit"></i></button>
                        <button class="btn-admin-card delete" onclick="deleteItem('downloads', '${item.id}')"><i class="fas fa-trash"></i></button>
                    </div>
                    <div class="feature-icon"><i class="fas ${item.icon || 'fa-file'}"></i></div>
                    <h3>${item.title}</h3>
                    <p>${item.badge} • ${item.desc}</p>
                    <span class="feature-link">Unduh File <i class="fas fa-download"></i></span>
                </a>
            `;
        }).join("");
    }

    function renderAllDynamicSections() {
        try { renderDynamicLogo(); } catch (e) { console.error("Error rendering logo:", e); }
        try { renderDynamicHeroSlider(); } catch (e) { console.error("Error rendering hero slider:", e); }
        try { renderDynamicStats(); } catch (e) { console.error("Error rendering stats:", e); }
        try { renderDynamicWelcome(); } catch (e) { console.error("Error rendering welcome:", e); }
        try { renderDynamicVisionMission(); } catch (e) { console.error("Error rendering vision:", e); }
        try { renderDynamicPrograms(); } catch (e) { console.error("Error rendering programs:", e); }
        try { renderDynamicNews(); } catch (e) { console.error("Error rendering news:", e); }
        try { renderDynamicFacilities(); } catch (e) { console.error("Error rendering facilities:", e); }
        try { renderDynamicAgenda(); } catch (e) { console.error("Error rendering agenda:", e); }
        try { renderDynamicDownloads(); } catch (e) { console.error("Error rendering downloads:", e); }
    }

    // Toggle Admin Mode Class on Body
    function updateAdminUI() {
        if (isAdminLoggedIn) {
            document.body.classList.add("admin-mode");
        } else {
            document.body.classList.remove("admin-mode");
        }
        renderAllDynamicSections();
    }

    // Bind Global Functions to Window Object for HTML Access
    window.openAddItem = (section) => {
        document.getElementById("crud-item-id").value = "";
        document.getElementById("crud-section-type").value = section;
        document.getElementById("crud-modal-title").innerHTML = `<i class="fas fa-plus-circle"></i> Tambah Item Baru`;
        
        document.getElementById("admin-crud-form").reset();
        document.getElementById("crud-img-preview").style.display = "none";
        document.getElementById("crud-base64-image").value = "";
        
        const lblTitle = document.getElementById("lbl-crud-title");
        const lblBadge = document.getElementById("lbl-crud-badge");
        const fileInput = document.getElementById("crud-file-input");
        const filePreview = document.getElementById("crud-img-preview-box");
        
        if (section === "news") {
            lblTitle.innerText = "Judul Berita";
            lblBadge.innerText = "Kategori / Tag Berita (Misal: Prestasi)";
            fileInput.disabled = false;
            filePreview.style.opacity = "1";
        } else if (section === "facilities") {
            lblTitle.innerText = "Nama Fasilitas";
            lblBadge.innerText = "Keterangan Sub-judul (Opsional)";
            fileInput.disabled = false;
            filePreview.style.opacity = "1";
        } else if (section === "heroSlides") {
            lblTitle.innerText = "Judul Slide (Mendukung HTML <span>)";
            lblBadge.innerText = "Badge Slide Atas (Contoh: <i class='fas fa-school'></i> Portal)";
            fileInput.disabled = false;
            filePreview.style.opacity = "1";
        } else if (section === "programs") {
            lblTitle.innerText = "Nama Program Unggulan";
            lblBadge.innerText = "Ikon Aksi / Pilihan (Format: Judul Tombol|Tautan)";
            fileInput.disabled = true;
            filePreview.style.opacity = "0.4";
        } else if (section === "agenda") {
            lblTitle.innerText = "Nama Agenda";
            lblBadge.innerText = "Tanggal Kegiatan (Contoh: 09 Feb 2026)";
            fileInput.disabled = true;
            filePreview.style.opacity = "0.4";
        } else if (section === "downloads") {
            lblTitle.innerText = "Nama Dokumen";
            lblBadge.innerText = "Keterangan Berkas (Contoh: Microsoft Word • SOP)";
            fileInput.disabled = true;
            filePreview.style.opacity = "0.4";
        }
        
        document.getElementById("admin-crud-modal").classList.add("active");
    };

    window.openEditItem = (section, id) => {
        const item = schoolDB[section].find(x => x.id === id);
        if (!item) return;

        document.getElementById("crud-item-id").value = id;
        document.getElementById("crud-section-type").value = section;
        document.getElementById("crud-modal-title").innerHTML = `<i class="fas fa-edit"></i> Edit Item (${item.title})`;
        
        document.getElementById("crud-title").value = item.title;
        document.getElementById("crud-desc").value = item.desc;
        document.getElementById("crud-link").value = item.link || "";
        document.getElementById("crud-icon-select").value = item.icon || "fa-file";
        document.getElementById("crud-badge").value = item.badge || item.tag || item.date || "";
        
        const fileInput = document.getElementById("crud-file-input");
        const filePreview = document.getElementById("crud-img-preview-box");
        const imgEl = document.getElementById("crud-img-preview");
        const base64Input = document.getElementById("crud-base64-image");
        
        if (section === "news" || section === "facilities" || section === "heroSlides") {
            fileInput.disabled = false;
            filePreview.style.opacity = "1";
            if (item.base64Image) {
                imgEl.src = item.base64Image;
                imgEl.style.display = "block";
                base64Input.value = item.base64Image;
            } else if (item.imageUrl) {
                imgEl.src = item.imageUrl;
                imgEl.style.display = "block";
                base64Input.value = ""; // fallback imageUrl
            } else {
                imgEl.style.display = "none";
                base64Input.value = "";
            }
        } else {
            fileInput.disabled = true;
            filePreview.style.opacity = "0.4";
            imgEl.style.display = "none";
            base64Input.value = "";
        }
        
        document.getElementById("admin-crud-modal").classList.add("active");
    };

    window.deleteItem = (section, id) => {
        if (section === "heroSlides" && schoolDB.heroSlides.length <= 1) {
            showToast("Slider harus memiliki minimal 1 slide aktif!", "danger");
            return;
        }
        if (section === "programs" && schoolDB.programs.length <= 1) {
            showToast("Program Unggulan harus memiliki minimal 1 item aktif!", "danger");
            return;
        }

        if (!confirm("Apakah Anda yakin ingin menghapus item ini secara permanen dari website?")) return;
        
        schoolDB[section] = schoolDB[section].filter(x => x.id !== id);
        localStorage.setItem("school_website_db", JSON.stringify(schoolDB));
        renderAllDynamicSections();
        showToast("Item berhasil dihapus secara permanen!", "success");
    };

    // ==========================================================================
    // CMS DIRECT CARD EDITORS (STATS, WELCOME, VISION & MISSION)
    // ==========================================================================

    // 1. Stats Bar Editor
    window.openEditStats = () => {
        const wrapper = document.getElementById("stats-inputs-wrapper");
        if (!wrapper) return;
        wrapper.innerHTML = schoolDB.stats.map((item, idx) => `
            <div style="margin-bottom: 15px; border-bottom: 1px solid var(--border-color); padding-bottom: 15px;">
                <h4 style="font-size: 13px; margin-bottom: 10px; color: var(--primary); font-weight:700;"><i class="fas fa-chart-bar"></i> Bar Statistik ${idx + 1}</h4>
                <div class="form-group-2" style="margin-bottom:0; gap:12px;">
                    <div class="form-field" style="margin-bottom:0;">
                        <label style="font-size:11px;">Nilai / Angka (Maks 10 Karakter)</label>
                        <input type="text" id="stat-value-${idx}" class="form-input" value="${item.value}" required placeholder="Contoh: 250+">
                    </div>
                    <div class="form-field" style="margin-bottom:0;">
                        <label style="font-size:11px;">Label Keterangan (Maks 30 Karakter)</label>
                        <input type="text" id="stat-label-${idx}" class="form-input" value="${item.label}" required placeholder="Contoh: Siswa Didik">
                    </div>
                </div>
            </div>
        `).join("");
        document.getElementById("admin-stats-modal").classList.add("active");
    };

    window.closeStatsModal = () => {
        document.getElementById("admin-stats-modal").classList.remove("active");
    };

    window.submitStatsForm = (e) => {
        e.preventDefault();
        schoolDB.stats = schoolDB.stats.map((item, idx) => {
            return {
                id: item.id,
                value: document.getElementById(`stat-value-${idx}`).value.trim(),
                label: document.getElementById(`stat-label-${idx}`).value.trim()
            };
        });
        localStorage.setItem("school_website_db", JSON.stringify(schoolDB));
        renderDynamicStats();
        window.closeStatsModal();
        showToast("Statistik sekolah berhasil diperbarui secara presisten!", "success");
    };

    // 2. Sambutan Kepala Sekolah Editor
    window.openEditWelcome = () => {
        const w = schoolDB.welcome;
        document.getElementById("wel-name").value = w.name;
        document.getElementById("wel-title").value = w.title;
        document.getElementById("wel-quote").value = w.quote;
        document.getElementById("wel-heading").value = w.heading;
        document.getElementById("wel-text1").value = w.text1;
        document.getElementById("wel-text2").value = w.text2;
        
        const imgEl = document.getElementById("wel-img-preview");
        const base64Input = document.getElementById("wel-base64-image");
        if (w.base64Image) {
            imgEl.src = w.base64Image;
            imgEl.style.display = "block";
            base64Input.value = w.base64Image;
        } else {
            imgEl.style.display = "none";
            base64Input.value = "";
        }
        
        document.getElementById("admin-welcome-modal").classList.add("active");
    };

    window.closeWelcomeModal = () => {
        document.getElementById("admin-welcome-modal").classList.remove("active");
    };

    window.submitWelcomeForm = (e) => {
        e.preventDefault();
        schoolDB.welcome = {
            name: document.getElementById("wel-name").value.trim(),
            title: document.getElementById("wel-title").value.trim(),
            quote: document.getElementById("wel-quote").value.trim(),
            heading: document.getElementById("wel-heading").value.trim(),
            text1: document.getElementById("wel-text1").value.trim(),
            text2: document.getElementById("wel-text2").value.trim(),
            base64Image: document.getElementById("wel-base64-image").value
        };
        localStorage.setItem("school_website_db", JSON.stringify(schoolDB));
        renderDynamicWelcome();
        window.closeWelcomeModal();
        showToast("Sambutan Kepala Sekolah berhasil diperbarui secara presisten!", "success");
    };

    // 3. Visi & Misi Editor
    window.openEditVision = () => {
        const vm = schoolDB.visionMission;
        document.getElementById("vis-vision").value = vm.vision;
        
        const listWrapper = document.getElementById("vision-misi-list-inputs");
        listWrapper.innerHTML = "";
        vm.mission.forEach(point => {
            window.addMissionInputRow(point);
        });
        
        document.getElementById("admin-vision-modal").classList.add("active");
    };

    window.closeVisionModal = () => {
        document.getElementById("admin-vision-modal").classList.remove("active");
    };

    window.addMissionInputRow = (value = "") => {
        const listWrapper = document.getElementById("vision-misi-list-inputs");
        const row = document.createElement("div");
        row.className = "mission-input-row";
        row.style.display = "flex";
        row.style.gap = "10px";
        row.style.alignItems = "center";
        row.innerHTML = `
            <input type="text" class="form-input mission-poin-input" value="${value}" placeholder="Tuliskan poin misi sekolah..." required style="flex-grow:1;">
            <button type="button" onclick="this.parentElement.remove()" class="btn-admin-bar danger" style="padding:12px 14px; border:none; height:46px;"><i class="fas fa-trash"></i></button>
        `;
        listWrapper.appendChild(row);
    };

    window.addNewMissionInput = () => {
        window.addMissionInputRow("");
    };

    window.submitVisionForm = (e) => {
        e.preventDefault();
        const inputs = document.querySelectorAll(".mission-poin-input");
        const missions = [];
        inputs.forEach(input => {
            const val = input.value.trim();
            if (val) missions.push(val);
        });

        if (missions.length === 0) {
            showToast("Misi sekolah minimal harus memiliki 1 poin!", "danger");
            return;
        }

        schoolDB.visionMission = {
            vision: document.getElementById("vis-vision").value.trim(),
            mission: missions
        };
        localStorage.setItem("school_website_db", JSON.stringify(schoolDB));
        renderDynamicVisionMission();
        window.closeVisionModal();
        showToast("Visi & Misi sekolah berhasil diperbarui secara presisten!", "success");
    };

    // ==========================================================================
    // SPMB WIDGET & STUDENT CRM PORTAL HANDLERS (ONLINE & OFFLINE)
    // ==========================================================================

    // 1. SPMB / PPDB Registration Modal for Parents
    window.openSpmbModal = (e) => {
        if (e) e.preventDefault();
        document.getElementById("spmb-registration-form").reset();
        document.getElementById("spmb-modal").classList.add("active");
    };

    window.closeSpmbModal = () => {
        document.getElementById("spmb-modal").classList.remove("active");
    };

    window.submitSpmbForm = (e) => {
        e.preventDefault();
        const nama = document.getElementById("spmb-nama").value.trim();
        const nisn = document.getElementById("spmb-nisn").value.trim();
        const ttl = document.getElementById("spmb-ttl").value.trim();
        const jk = document.getElementById("spmb-jk").value;
        const ortu = document.getElementById("spmb-ortu").value.trim();
        const wa = document.getElementById("spmb-wa").value.trim();
        const asalTk = document.getElementById("spmb-asal-tk").value.trim();
        const alamat = document.getElementById("spmb-alamat").value.trim();

        if (!nama || !nisn || !ttl || !jk || !ortu || !wa || !asalTk || !alamat) {
            showToast("Harap isi semua kolom pendaftaran dengan lengkap!", "danger");
            return;
        }

        const newReg = {
            id: "reg_" + Date.now(),
            nama: nama,
            nisn: nisn,
            ttl: ttl,
            jk: jk,
            ortu: ortu,
            wa: wa,
            asalTk: asalTk,
            alamat: alamat
        };

        if (!schoolDB.registrations) {
            schoolDB.registrations = [];
        }
        schoolDB.registrations.push(newReg);
        localStorage.setItem("school_website_db", JSON.stringify(schoolDB));
        
        // Prepare formatted WhatsApp message
        const messageText = `Halo Panitia PPDB SDN Wedusan, saya ingin mengonfirmasi pendaftaran mandiri calon siswa baru:

Nama Lengkap: ${nama}
NIK/NISN: ${nisn}
Tempat & Tanggal Lahir: ${ttl}
Jenis Kelamin: ${jk}
Orang Tua / Wali: ${ortu}
No WhatsApp: ${wa}
Asal Sekolah/TK: ${asalTk}
Alamat: ${alamat}

Mohon bantuannya untuk memproses verifikasi berkas lebih lanjut. Terima kasih!`;

        const waUrl = `https://wa.me/085347641171?text=${encodeURIComponent(messageText)}`;
        
        window.closeSpmbModal();
        showToast("Pendaftaran berhasil disimpan di sistem! Dialihkan ke WhatsApp Panitia...", "success");
        
        setTimeout(() => {
            window.open(waUrl, "_blank");
        }, 1200);

        // Auto refresh table if active in background
        if (document.getElementById("admin-registrations-modal").classList.contains("active")) {
            window.renderRegistrationsTable();
        }
    };

    // 2. Admin View Registrations CRM Panel
    window.openRegistrationsModal = () => {
        window.renderRegistrationsTable();
        document.getElementById("admin-registrations-modal").classList.add("active");
    };

    window.closeRegistrationsModal = () => {
        document.getElementById("admin-registrations-modal").classList.remove("active");
    };

    function formatWaNumber(num) {
        let clean = num.replace(/\D/g, "");
        if (clean.startsWith("0")) {
            clean = "62" + clean.substr(1);
        }
        return clean;
    }

    window.renderRegistrationsTable = () => {
        const tbody = document.getElementById("ppdb-table-body");
        if (!tbody) return;

        if (!schoolDB.registrations || schoolDB.registrations.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="9" style="padding: 30px; text-align: center; color: var(--text-muted); font-style: italic;">
                        Belum ada data pendaftar baru yang tercatat di database.
                    </td>
                </tr>
            `;
            return;
        }

        tbody.innerHTML = schoolDB.registrations.map((item, idx) => `
            <tr style="border-bottom: 1px solid var(--border-color); transition: background 0.2s;">
                <td style="padding: 12px; text-align: center; font-weight: 700; color: var(--text-muted);">${idx + 1}</td>
                <td style="padding: 12px; font-weight: 700; color: var(--secondary);">${item.nama}</td>
                <td style="padding: 12px; font-family: monospace; font-size:12px;">${item.nisn}</td>
                <td style="padding: 12px;">${item.ttl}</td>
                <td style="padding: 12px; text-align:center;"><span style="padding: 2px 8px; border-radius: 999px; font-size: 11px; font-weight:700; background: ${item.jk === 'Laki-laki' ? '#eff6ff' : '#fdf2f8'}; color: ${item.jk === 'Laki-laki' ? '#2563eb' : '#db2777'};">${item.jk === 'Laki-laki' ? 'L' : 'P'}</span></td>
                <td style="padding: 12px;">${item.ortu}</td>
                <td style="padding: 12px;">
                    <a href="https://wa.me/${formatWaNumber(item.wa)}" target="_blank" style="color: #059669; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 4px;">
                        <i class="fab fa-whatsapp"></i> ${item.wa}
                    </a>
                </td>
                <td style="padding: 12px;">${item.asalTk}</td>
                <td style="padding: 12px; text-align: center;">
                    <button onclick="window.deleteRegistration('${item.id}')" class="btn-admin-card delete" style="width: 30px; height: 30px; display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; font-size:12px; margin: 0 auto;" title="Hapus Murid">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `).join("");
    };

    window.deleteRegistration = (id) => {
        if (!confirm("Apakah Anda yakin ingin menghapus data pendaftar ini secara permanen dari database sekolah?")) return;
        
        schoolDB.registrations = schoolDB.registrations.filter(x => x.id !== id);
        localStorage.setItem("school_website_db", JSON.stringify(schoolDB));
        window.renderRegistrationsTable();
        showToast("Data pendaftar berhasil dihapus secara permanen!", "success");
    };

    // 3. Offline Student Registration (Formulir Guru)
    window.openAddOfflineRegistration = () => {
        document.getElementById("admin-offline-reg-form").reset();
        document.getElementById("admin-offline-reg-modal").classList.add("active");
    };

    window.closeOfflineRegModal = () => {
        document.getElementById("admin-offline-reg-modal").classList.remove("active");
    };

    window.submitOfflineRegForm = (e) => {
        e.preventDefault();
        const nama = document.getElementById("off-nama").value.trim();
        const nisn = document.getElementById("off-nisn").value.trim();
        const ttl = document.getElementById("off-ttl").value.trim();
        const jk = document.getElementById("off-jk").value;
        const ortu = document.getElementById("off-ortu").value.trim();
        const wa = document.getElementById("off-wa").value.trim();
        const asalTk = document.getElementById("off-asal-tk").value.trim();
        const alamat = document.getElementById("off-alamat").value.trim();

        if (!nama || !nisn || !ttl || !jk || !ortu || !wa || !asalTk || !alamat) {
            showToast("Harap isi semua kolom pendaftaran offline dengan lengkap!", "danger");
            return;
        }

        const newReg = {
            id: "reg_" + Date.now(),
            nama: nama,
            nisn: nisn,
            ttl: ttl,
            jk: jk,
            ortu: ortu,
            wa: wa,
            asalTk: asalTk,
            alamat: alamat
        };

        if (!schoolDB.registrations) {
            schoolDB.registrations = [];
        }
        schoolDB.registrations.push(newReg);
        localStorage.setItem("school_website_db", JSON.stringify(schoolDB));
        
        window.renderRegistrationsTable();
        window.closeOfflineRegModal();
        showToast("Pendaftaran murid offline berhasil disimpan!", "success");
    };

    // ==========================================================================
    // EXCEL & PDF EXPORT MECHANISMS
    // ==========================================================================

    // 1. Excel (UTF-8 BOM CSV) Export
    window.exportRegistrationsToExcel = () => {
        if (!schoolDB.registrations || schoolDB.registrations.length === 0) {
            showToast("Tidak ada data pendaftar untuk diekspor!", "danger");
            return;
        }

        const headers = ["No", "Nama Calon Siswa", "NIK/NISN", "Tempat Tanggal Lahir", "Jenis Kelamin", "Orang Tua/Wali", "No WhatsApp", "Asal Sekolah/TK", "Alamat Lengkap"];
        let csvContent = "\uFEFF"; // UTF-8 BOM to prevent excel parsing bugs
        csvContent += headers.join(",") + "\r\n";

        schoolDB.registrations.forEach((item, idx) => {
            const row = [
                idx + 1,
                `"${item.nama.replace(/"/g, '""')}"`,
                `"${item.nisn.replace(/"/g, '""')}"`,
                `"${item.ttl.replace(/"/g, '""')}"`,
                `"${item.jk.replace(/"/g, '""')}"`,
                `"${item.ortu.replace(/"/g, '""')}"`,
                `"${item.wa.replace(/"/g, '""')}"`,
                `"${item.asalTk.replace(/"/g, '""')}"`,
                `"${item.alamat.replace(/"/g, '""')}"`
            ];
            csvContent += row.join(",") + "\r\n";
        });

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", "pendaftar-ppdb-sdn-wedusan.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast("Data pendaftar berhasil diekspor sebagai Excel CSV!", "success");
    };

    // 2. High Resolution Vector PDF Print Layout
    window.exportRegistrationsToPDF = () => {
        if (!schoolDB.registrations || schoolDB.registrations.length === 0) {
            showToast("Tidak ada data pendaftar untuk dicetak!", "danger");
            return;
        }
        window.print();
    };

    // ==========================================================================
    // BRANDING & LOGO CMS EDITOR HANDLERS
    // ==========================================================================
    window.openEditLogo = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        
        const logo = schoolDB.logo || {
            type: "icon",
            icon: "fa-school",
            base64Image: "",
            name: "SDN Wedusan",
            tagline: "Mewujudkan Generasi Cerdas & Berkarakter"
        };
        
        document.getElementById("logo-name").value = logo.name;
        document.getElementById("logo-tagline").value = logo.tagline;
        document.getElementById("logo-type").value = logo.type;
        document.getElementById("logo-icon-select").value = logo.icon || "fa-school";
        document.getElementById("logo-base64-image").value = logo.base64Image || "";
        
        const imgEl = document.getElementById("logo-img-preview");
        if (logo.base64Image) {
            imgEl.src = logo.base64Image;
            imgEl.style.display = "block";
        } else {
            imgEl.style.display = "none";
        }
        
        window.toggleLogoTypeInputs();
        document.getElementById("admin-logo-modal").classList.add("active");
    };

    window.closeLogoModal = () => {
        document.getElementById("admin-logo-modal").classList.remove("active");
    };

    window.toggleLogoTypeInputs = () => {
        const type = document.getElementById("logo-type").value;
        const iconField = document.getElementById("field-logo-icon");
        const imageField = document.getElementById("field-logo-image");
        if (type === "icon") {
            iconField.style.display = "block";
            imageField.style.display = "none";
        } else {
            iconField.style.display = "none";
            imageField.style.display = "block";
        }
    };

    window.submitLogoForm = (e) => {
        e.preventDefault();
        schoolDB.logo = {
            type: document.getElementById("logo-type").value,
            icon: document.getElementById("logo-icon-select").value,
            base64Image: document.getElementById("logo-base64-image").value,
            name: document.getElementById("logo-name").value.trim(),
            tagline: document.getElementById("logo-tagline").value.trim()
        };
        localStorage.setItem("school_website_db", JSON.stringify(schoolDB));
        renderDynamicLogo();
        window.closeLogoModal();
        showToast("Identitas & Logo sekolah berhasil diperbarui secara presisten!", "success");
    };

    // Initialize CMS Data Render
    renderAllDynamicSections();
    updateAdminUI();

    // Image Upload base64 Conversion
    const crudFileInput = document.getElementById("crud-file-input");
    if (crudFileInput) {
        crudFileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            if (file.size > 102 * 1024 * 10) { // Limit 1MB to prevent localstorage quota overflow
                showToast("Ukuran file terlalu besar! Maksimal ukuran file foto adalah 1MB.", "danger");
                crudFileInput.value = "";
                return;
            }
            
            const reader = new FileReader();
            reader.onload = (event) => {
                const base64 = event.target.result;
                document.getElementById("crud-base64-image").value = base64;
                const imgEl = document.getElementById("crud-img-preview");
                imgEl.src = base64;
                imgEl.style.display = "block";
                showToast("Foto berhasil dimuat untuk diunggah!", "success");
            };
            reader.readAsDataURL(file);
        });
    }

    const welFileInput = document.getElementById("wel-file-input");
    if (welFileInput) {
        welFileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            if (file.size > 102 * 1024 * 10) { // Limit 1MB to prevent localstorage quota overflow
                showToast("Ukuran file terlalu besar! Maksimal ukuran file foto adalah 1MB.", "danger");
                welFileInput.value = "";
                return;
            }
            
            const reader = new FileReader();
            reader.onload = (event) => {
                const base64 = event.target.result;
                document.getElementById("wel-base64-image").value = base64;
                const imgEl = document.getElementById("wel-img-preview");
                imgEl.src = base64;
                imgEl.style.display = "block";
                showToast("Foto Kepala Sekolah berhasil dimuat untuk disimpan!", "success");
            };
            reader.readAsDataURL(file);
        });
    }

    const logoFileInput = document.getElementById("logo-file-input");
    if (logoFileInput) {
        logoFileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            if (file.size > 500 * 1024) { // Limit 500KB to keep localStorage light
                showToast("Ukuran logo terlalu besar! Maksimal ukuran file logo kustom adalah 500KB.", "danger");
                logoFileInput.value = "";
                return;
            }
            
            const reader = new FileReader();
            reader.onload = (event) => {
                const base64 = event.target.result;
                document.getElementById("logo-base64-image").value = base64;
                const imgEl = document.getElementById("logo-img-preview");
                imgEl.src = base64;
                imgEl.style.display = "block";
                showToast("Foto Logo Sekolah berhasil dimuat untuk disimpan!", "success");
            };
            reader.readAsDataURL(file);
        });
    }

    // Save CRUD Form Submission
    const crudForm = document.getElementById("admin-crud-form");
    if (crudForm) {
        crudForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const id = document.getElementById("crud-item-id").value;
            const section = document.getElementById("crud-section-type").value;
            const title = document.getElementById("crud-title").value.trim();
            const desc = document.getElementById("crud-desc").value.trim();
            const link = document.getElementById("crud-link").value.trim();
            const icon = document.getElementById("crud-icon-select").value;
            const badge = document.getElementById("crud-badge").value.trim();
            const base64Image = document.getElementById("crud-base64-image").value;
            
            if (id) {
                // Editing existing item
                const idx = schoolDB[section].findIndex(x => x.id === id);
                if (idx !== -1) {
                    schoolDB[section][idx].title = title;
                    schoolDB[section][idx].desc = desc;
                    schoolDB[section][idx].link = link;
                    schoolDB[section][idx].icon = icon;
                    
                    if (section === "news") {
                        schoolDB[section][idx].date = badge || new Date().toLocaleDateString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'});
                        schoolDB[section][idx].tag = "Kabar";
                        schoolDB[section][idx].base64Image = base64Image;
                    } else if (section === "facilities") {
                        schoolDB[section][idx].base64Image = base64Image;
                    } else if (section === "heroSlides") {
                        schoolDB[section][idx].badge = badge || "<i class=\"fas fa-school\"></i> Portal";
                        schoolDB[section][idx].base64Image = base64Image;
                    } else if (section === "agenda" || section === "downloads") {
                        schoolDB[section][idx].badge = badge;
                    }
                }
            } else {
                // Creating new item
                const newItem = {
                    id: section + "_" + Date.now(),
                    title: title,
                    desc: desc,
                    link: link,
                    icon: icon
                };
                
                if (section === "news") {
                    newItem.date = badge || new Date().toLocaleDateString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'});
                    newItem.tag = "Kabar";
                    newItem.base64Image = base64Image;
                } else if (section === "facilities") {
                    newItem.base64Image = base64Image;
                } else if (section === "heroSlides") {
                    newItem.badge = badge || "<i class=\"fas fa-school\"></i> Portal";
                    newItem.base64Image = base64Image;
                    newItem.imageUrl = "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800"; // default fallback
                } else if (section === "agenda" || section === "downloads") {
                    newItem.badge = badge;
                }
                
                schoolDB[section].unshift(newItem);
            }
            
            localStorage.setItem("school_website_db", JSON.stringify(schoolDB));
            renderAllDynamicSections();
            document.getElementById("admin-crud-modal").classList.remove("active");
            showToast("Data sekolah berhasil disimpan secara presisten!", "success");
        });
    }

    // Admin Login and Logout Handlers
    const loginTrigger = document.getElementById("admin-login-trigger");
    const closeLoginBtn = document.getElementById("btn-close-login");
    const closeCrudBtn = document.getElementById("btn-close-crud");
    const loginForm = document.getElementById("admin-login-form");
    const logoutBtn = document.getElementById("btn-logout-admin");
    const viewPpdbBtn = document.getElementById("btn-view-ppdb");
    
    if (loginTrigger) {
        loginTrigger.addEventListener("click", (e) => {
            e.preventDefault();
            document.getElementById("admin-login-modal").classList.add("active");
        });
    }

    if (viewPpdbBtn) {
        viewPpdbBtn.addEventListener("click", (e) => {
            e.preventDefault();
            window.openRegistrationsModal();
        });
    }
    
    // Hidden Shortcut (Ctrl + Shift + A) to open Login Modal
    window.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.shiftKey && e.key === "A") {
            e.preventDefault();
            document.getElementById("admin-login-modal").classList.add("active");
        }
    });

    if (closeLoginBtn) {
        closeLoginBtn.addEventListener("click", () => {
            document.getElementById("admin-login-modal").classList.remove("active");
        });
    }
    
    if (closeCrudBtn) {
        closeCrudBtn.addEventListener("click", () => {
            document.getElementById("admin-crud-modal").classList.remove("active");
        });
    }
    
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const password = document.getElementById("admin-password").value;
            
            if (password === "admin123") {
                isAdminLoggedIn = true;
                localStorage.setItem("school_admin_logged_in", "true");
                updateAdminUI();
                document.getElementById("admin-login-modal").classList.remove("active");
                loginForm.reset();
                showToast("Selamat Datang Admin! Panel editor telah aktif di seluruh halaman.", "success");
            } else {
                showToast("Kata sandi yang Anda masukkan salah!", "danger");
            }
        });
    }
    
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            isAdminLoggedIn = false;
            localStorage.setItem("school_admin_logged_in", "false");
            updateAdminUI();
            showToast("Anda telah keluar dari mode admin.", "success");
        });
    }

    // Ekspor Database (Download as JSON file)
    const exportBtn = document.getElementById("btn-export-db");
    if (exportBtn) {
        exportBtn.addEventListener("click", () => {
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(schoolDB, null, 2));
            const downloadAnchor = document.createElement("a");
            downloadAnchor.setAttribute("href", dataStr);
            downloadAnchor.setAttribute("download", "database-sekolah-wedusan.json");
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            downloadAnchor.remove();
            showToast("Database sekolah berhasil diekspor sebagai database-sekolah-wedusan.json!", "success");
        });
    }
    
    // Impor Database (Upload JSON file)
    const importBtn = document.getElementById("btn-import-db");
    const importFileInput = document.getElementById("input-import-file");
    if (importBtn && importFileInput) {
        importBtn.addEventListener("click", () => {
            importFileInput.click();
        });
        
        importFileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const parsedData = JSON.parse(event.target.result);
                    
                    if (parsedData.news && parsedData.facilities && parsedData.agenda && parsedData.downloads) {
                        schoolDB = parsedData;
                        if (!schoolDB.heroSlides) {
                            schoolDB.heroSlides = defaultSchoolDatabase.heroSlides;
                        }
                        localStorage.setItem("school_website_db", JSON.stringify(schoolDB));
                        renderAllDynamicSections();
                        showToast("Database sekolah berhasil diimpor dan disinkronkan secara presisten!", "success");
                    } else {
                        showToast("Format file database tidak valid!", "danger");
                    }
                } catch (err) {
                    showToast("Gagal membaca file JSON!", "danger");
                }
            };
            reader.readAsText(file);
            importFileInput.value = "";
        });
    }

    // 2. Navbar Scroll Effect
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // 3. Contact Form Submission Interaction
    const contactForm = document.getElementById("school-contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            
            // Get values
            const name = document.getElementById("form-name").value.trim();
            const email = document.getElementById("form-email").value.trim();
            const subject = document.getElementById("form-subject").value.trim();
            const message = document.getElementById("form-message").value.trim();
            
            if (!name || !email || !subject || !message) {
                showToast("Harap isi semua kolom formulir terlebih dahulu!", "danger");
                return;
            }
            
            // Simulate sending message
            const btn = contactForm.querySelector("button[type='submit']");
            const originalText = btn.innerHTML;
            btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Mengirim Pesan...`;
            btn.disabled = true;
            
            setTimeout(() => {
                showToast(`Terima kasih Bapak/Ibu ${name}, pesan Anda telah berhasil dikirim ke Admin sekolah! Kami akan segera menghubungi Anda.`, "success");
                contactForm.reset();
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }

    // 4. Toast Notification Engine
    function showToast(message, type = "success") {
        let container = document.getElementById("toast-container");
        if (!container) {
            container = document.createElement("div");
            container.id = "toast-container";
            container.style.position = "fixed";
            container.style.bottom = "24px";
            container.style.right = "24px";
            container.style.display = "flex";
            container.style.flexDirection = "column";
            container.style.gap = "12px";
            container.style.zIndex = "9999";
            document.body.appendChild(container);
        }
        
        const toast = document.createElement("div");
        toast.style.background = "#0f172a";
        toast.style.color = "white";
        toast.style.padding = "16px 24px";
        toast.style.borderRadius = "12px";
        toast.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
        toast.style.display = "flex";
        toast.style.alignItems = "center";
        toast.style.gap = "12px";
        toast.style.fontSize = "14px";
        toast.style.fontWeight = "500";
        toast.style.borderLeft = type === "success" ? "4px solid #059669" : "4px solid #ef4444";
        toast.style.transform = "translateY(20px)";
        toast.style.opacity = "0";
        toast.style.transition = "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        
        const icon = document.createElement("i");
        icon.className = type === "success" ? "fas fa-check-circle" : "fas fa-exclamation-circle";
        icon.style.color = type === "success" ? "#059669" : "#ef4444";
        icon.style.fontSize = "18px";
        
        const text = document.createElement("span");
        text.innerText = message;
        
        toast.appendChild(icon);
        toast.appendChild(text);
        container.appendChild(toast);
        
        // Trigger show animation
        setTimeout(() => {
            toast.style.transform = "translateY(0)";
            toast.style.opacity = "1";
        }, 50);
        
        // Auto hide after 4 seconds
        setTimeout(() => {
            toast.style.transform = "translateY(20px)";
            toast.style.opacity = "0";
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 4000);
    }

    // 5. Hero Slider Engine (Dynamic)
    let currentSlide = 0;
    let sliderInterval = null;

    function reinitSliderEngine() {
        if (sliderInterval) {
            clearInterval(sliderInterval);
            sliderInterval = null;
        }

        const slides = document.querySelectorAll(".hero-slider .slide");
        const dots = document.querySelectorAll(".slider-dots .dot");
        const prevBtn = document.querySelector(".slider-control.prev");
        const nextBtn = document.querySelector(".slider-control.next");

        if (slides.length === 0) return;

        // Reset index bounds
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        function showSlide(index) {
            if (index >= slides.length) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = slides.length - 1;
            } else {
                currentSlide = index;
            }

            slides.forEach((slide, idx) => {
                if (idx === currentSlide) {
                    slide.classList.add("active");
                } else {
                    slide.classList.remove("active");
                }
            });

            dots.forEach((dot, idx) => {
                if (idx === currentSlide) {
                    dot.classList.add("active");
                } else {
                    dot.classList.remove("active");
                }
            });
        }

        function startSlider() {
            if (sliderInterval) clearInterval(sliderInterval);
            sliderInterval = setInterval(() => {
                showSlide(currentSlide + 1);
            }, 6000);
        }

        if (prevBtn) {
            prevBtn.addEventListener("click", () => {
                showSlide(currentSlide - 1);
                startSlider();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener("click", () => {
                showSlide(currentSlide + 1);
                startSlider();
            });
        }

        dots.forEach((dot, idx) => {
            dot.addEventListener("click", () => {
                showSlide(idx);
                startSlider();
            });
        });

        // Show the initial slide
        showSlide(currentSlide);
        startSlider();
    }

    // 6. Mobile Navigation Drawer Toggle
    const menuBtn = document.getElementById("menu-btn");
    const navMenu = document.querySelector(".nav-menu");
    
    if (menuBtn && navMenu) {
        const toggleIcon = menuBtn.querySelector("i");
        
        menuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            const isOpen = navMenu.classList.contains("active");
            
            if (isOpen) {
                toggleIcon.className = "fas fa-times";
            } else {
                toggleIcon.className = "fas fa-bars";
            }
        });
        
        // Close menu when a link is clicked
        const navLinks = navMenu.querySelectorAll(".nav-link, .btn-nav");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                toggleIcon.className = "fas fa-bars";
            });
        });
    }

    // 7. Floating Quick Actions Widget Mobile Support
    const widget = document.querySelector(".floating-widget");
    const widgetToggle = document.querySelector(".widget-toggle");
    if (widget && widgetToggle) {
        widgetToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            widget.classList.toggle("active");
        });
        
        document.addEventListener("click", () => {
            widget.classList.remove("active");
        });
    }
});
