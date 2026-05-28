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
            type: "image",
            icon: "fa-school",
            base64Image: "",
            imageUrl: "https://sdnwedusan.aksespedia.com/storage/tenants/50/fZxyOX0jIfZ5pDa1hu4tcZnyYt8hjX49vqLs9vTy.png",
            name: "SDN Wedusan",
            tagline: "Mewujudkan Generasi Cerdas & Berkarakter"
        },
        sidebarBanners: [
            {
                id: "side_1",
                title: "CMS Untukmu Negeri",
                link: "#profil",
                base64Image: "",
                imageUrl: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=400"
            },
            {
                id: "side_2",
                title: "Aplikasi Terpadu",
                link: "#program",
                base64Image: "",
                imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400"
            },
            {
                id: "side_3",
                title: "Gugus Dewi Sartika",
                link: "#berita",
                base64Image: "",
                imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=400"
            }
        ],
        heroSlides: [
            {
                id: "slide_1",
                badge: "<i class=\"fas fa-graduation-cap\"></i> Selamat Datang",
                title: "Selamat Datang di Platform Digital Resmi <span>SD Negeri Wedusan</span>",
                desc: "Berkomitmen mewujudkan generasi cerdas, berkarakter, dan berdaya saing global melalui pendidikan berkualitas.",
                link: "Daftar PPDB Baru|#spmb",
                base64Image: "",
                imageUrl: "https://sdnwedusan.aksespedia.com/storage/tenants/50/ZQaiNR8vqNZHqJG28ymmefxZj6Sj7X3ui5Zn2l25.jpg"
            },
            {
                id: "slide_2",
                badge: "<i class=\"fas fa-flag\"></i> Nasionalisme",
                title: "Membangun Semangat Nasionalisme Melalui <span>Peringatan Hari Besar</span>",
                desc: "Mari Bersama Terus Melaju Untuk Indonesia Maju dengan Menjunjung Tinggi Nilai-Nilai Luhur Bangsa.",
                link: "Lihat Berita|#berita",
                base64Image: "",
                imageUrl: "https://sdnwedusan.aksespedia.com/storage/tenants/50/Y4e8mkVeB4ASOecNWOqpt1j5C1phJ8pKcyXzjZhU.jpg"
            },
            {
                id: "slide_3",
                badge: "<i class=\"fas fa-laptop\"></i> Digitalisasi",
                title: "Kolaborasi Ekosistem Digital Untuk <span>Masa Depan Pendidikan</span>",
                desc: "Menyatukan Potensi Teknologi dan Karakter Bangsa Untuk Generasi Unggul.",
                link: "Jelajahi|#profil",
                base64Image: "",
                imageUrl: "https://sdnwedusan.aksespedia.com/assets/dummy/13.png"
            },
            {
                id: "slide_4",
                badge: "<i class=\"fas fa-cogs\"></i> Efisiensi",
                title: "Inovasi Tanpa Batas Dalam Mengelola <span>Administrasi Lembaga</span>",
                desc: "Efisiensi dan Transparansi Dalam Genggaman Melalui CMS Untukmu Negeri.",
                link: "Hubungi Kami|#kontak",
                base64Image: "",
                imageUrl: "https://sdnwedusan.aksespedia.com/assets/dummy/14.png"
            }
        ],
        news: [
            {
                id: "news_1",
                tag: "Prestasi",
                date: "26 Mei 2026",
                title: "Prestasi Juara II POPDA Korfball 2026 Gugus Dewi Sartika",
                desc: "Dukung penuh minat bakat siswa, kontingen Gugus Dewi Sartika berhasil membawa pulang medali Perak POPDA Korfball.",
                content: "Dukuhseti, Pati — Kontingen Gugus Dewi Sartika berhasil mencetak sejarah luar biasa dengan menyabet medali Perak (Juara II) dalam ajang bergengsi Pekan Olahraga Pelajar Daerah (POPDA) cabang olahraga Korfball tingkat Kabupaten Pati tahun 2026. Pertandingan final yang berlangsung sengit di Stadion Joyokusumo ini mempertemukan perwakilan sekolah kita dengan tim tangguh dari Kecamatan Juwana.<br><br>Kepala Sekolah SD Negeri Wedusan menyampaikan apresiasi yang luar biasa atas kerja keras dan semangat pantang menyerah yang ditunjukkan oleh anak-anak didik beserta tim pembina olahraga sekolah. Cabang olahraga Korfball yang menggabungkan kecepatan, ketangkasan tangan, dan kerja sama tim yang erat terbukti menjadi salah satu program unggulan non-akademik di sekolah kami.<br><br>Dengan torehan prestasi ini, sekolah berkomitmen untuk terus mendukung penuh dan memfasilitasi pengembangan minat dan bakat siswa di bidang olahraga melalui penyediaan sarana latihan yang memadai dan bimbingan ekskul yang intensif agar mampu mengukir prestasi emas yang lebih tinggi lagi di masa depan.",
                link: "",
                icon: "fa-users-rectangle",
                base64Image: ""
            },
            {
                id: "news_2",
                tag: "Pendidikan",
                date: "02 Mei 2026",
                title: "Gelorakan Hardiknas 2026, SDN Wedusan Perkuat Sinergi",
                desc: "Perkuat Sinergi Semesta demi Pendidikan Bermutu demi menyongsong generasi unggul berkarakter Pancasila.",
                content: "Wedusan, Pati — SD Negeri Wedusan menggelar upacara bendera peringatan Hari Pendidikan Nasional (Hardiknas) tahun 2026 secara meriah dan khidmat. Upacara diikuti oleh seluruh siswa-siswi kelas I hingga VI, guru, tenaga kependidikan, serta perwakilan komite sekolah dengan mengenakan pakaian adat tradisional nusantara yang mencerminkan kebinekaan global.<br><br>Dalam amanat tertulis Kepala Dinas Pendidikan yang dibacakan oleh pembina upacara, Hardiknas tahun ini mengusung tema penting tentang Penguatan Sinergi Semesta untuk perbaikan mutu pendidikan berkelanjutan demi mewujudkan generasi unggul berkarakter Profil Pelajar Pancasila. SD Negeri Wedusan secara aktif menerapkan Kurikulum Merdeka dengan fokus pada literasi digital cerdas serta pembiasaan karakter luhur.<br><br>Setelah upacara usai, kegiatan dilanjutkan dengan pentas seni tari tradisional persembahan siswa-siswi berbakat, demonstrasi literasi digital, serta peluncuran buletin digital resmi sekolah yang dapat diakses oleh seluruh wali murid secara transparan demi memperkuat kemitraan semesta antara keluarga dan sekolah.",
                link: "",
                icon: "fa-ribbon",
                base64Image: ""
            },
            {
                id: "news_3",
                tag: "POPDA & O2SN",
                date: "24 April 2026",
                title: "Membanggakan! Raih Juara POPDA & O2SN Kec. Dukuhseti",
                desc: "Siswa-siswi SD Negeri Wedusan tampil perkasa menyabet emas dan penghargaan di ajang POPDA & O2SN Dukuhseti.",
                content: "Dukuhseti, Pati — Kontingen atlet cilik dari SD Negeri Wedusan tampil mendominasi dan sukses keluar sebagai juara umum di ajang seleksi POPDA & O2SN (Olimpiade Olahraga Siswa Nasional) tingkat Kecamatan Dukuhseti tahun 2026. Atlet-atlet unggulan sekolah berhasil menyabet medali emas di berbagai cabang utama seperti Atletik Kids, Bulutangkis Tunggal Putra/Putri, Catur Klasik, dan Renang Gaya Bebas.<br><br>Prestasi luar biasa ini merupakan buah manis dari latihan keras rutin pasca-sekolah serta pendampingan spiritual pembiasaan doa bersama sebelum bertanding. Keberhasilan menyabet posisi juara umum tingkat kecamatan ini sekaligus mengantarkan para atlet SD Negeri Wedusan untuk melaju mewakili Kecamatan Dukuhseti di ajang POPDA & O2SN tingkat Kabupaten Pati.<br><br>Wali kelas beserta jajaran komite sekolah turut memberikan sambutan hangat dan bonus apresiasi kepada para pemenang. Diharapkan prestasi membanggakan ini dapat memotivasi seluruh siswa didik lainnya untuk terus giat belajar, berolahraga, disiplin diri, serta mengukir prestasi emas demi mengharumkan nama sekolah.",
                link: "",
                icon: "fa-trophy",
                base64Image: ""
            }
        ],
        facilities: [
            {
                id: "fac_1",
                title: "Gerbang & Papan Nama",
                desc: "Akses masuk sekolah yang kokoh, megah, dan berwibawa di pinggir jalan raya utama Desa Wedusan.",
                content: "Akses masuk utama SD Negeri Wedusan didesain secara kokoh, megah, dan berwibawa tepat di pinggir jalan raya utama Desa Wedusan, Dukuhseti, Pati. Gerbang sekolah yang asri dan bersih mencerminkan kerapian serta kedisiplinan tinggi warga sekolah. Setiap pagi, guru piket menyambut kedatangan para siswa di gerbang ini dengan budaya senyum, salam, sapa, sopan, dan santun (5S).",
                link: "",
                icon: "fa-door-open",
                base64Image: ""
            },
            {
                id: "fac_2",
                title: "Perpustakaan Nyaman",
                desc: "Ruang membaca tenang dan sejuk yang dilengkapi ribuan buku referensi ilmu pengetahuan menarik.",
                content: "Perpustakaan SD Negeri Wedusan merupakan ruang membaca yang sejuk, tenang, dan sangat nyaman bagi siswa didik. Perpustakaan ini dilengkapi dengan ribuan koleksi buku referensi, novel anak, ensiklopedia modern, buku cerita bergambar, serta sudut baca digital pintar. Tempat ini menjadi pusat literasi murid untuk menggali berbagai ilmu pengetahuan baru secara menyenangkan.",
                link: "",
                icon: "fa-book-reader",
                base64Image: ""
            },
            {
                id: "fac_3",
                title: "Ruang Kelas Kondusif",
                desc: "Ruang belajar luas yang bersih, terang, dilengkapi proyektor interaktif dan sirkulasi udara baik.",
                content: "Setiap ruang kelas di SD Negeri Wedusan memiliki pencahayaan alami yang sangat baik, bersih, luas, dilengkapi papan tulis interaktif proyektor digital, kipas angin, serta sirkulasi udara yang optimal. Penataan meja dan kursi belajar didesain fleksibel untuk mendukung metode pembelajaran kelompok aktif, diskusi mandiri, maupun presentasi kreativitas siswa.",
                link: "",
                icon: "fa-chalkboard-user",
                base64Image: ""
            },
            {
                id: "fac_4",
                title: "Musholla & Area Ibadah",
                desc: "Musholla sekolah yang bersih untuk pembiasaan sholat berjamaah dan tadarus keagamaan harian murid.",
                content: "Musholla sekolah didesain dengan tingkat kebersihan dan kesucian yang sangat terjaga untuk menunjang pembiasaan keagamaan harian murid. Setiap hari, musholla ini menjadi tempat utama bagi siswa dan guru untuk melaksanakan sholat dhuha berjamaah, pembacaan Asma'ul Husna pagi hari, sholat dzuhur berjamaah, serta kegiatan tadarus Al-Qur'an rutin.",
                link: "",
                icon: "fa-mosque",
                base64Image: ""
            },
            {
                id: "fac_5",
                title: "Kamar Mandi Higienis",
                desc: "Fasilitas toilet bersih, terpisah untuk siswa pria dan wanita, serta guru dengan air mengalir melimpah.",
                content: "Kamar mandi di sekolah dirancang terpisah antara siswa laki-laki dan perempuan dengan standar kebersihan toilet higienis yang tinggi. Fasilitas ini didukung dengan air bersih yang mengalir melimpah, wastafel cuci tangan dengan sabun, cermin, dan lantai anti-selip guna memastikan kenyamanan sanitasi harian seluruh siswa didik di lingkungan sekolah.",
                link: "",
                icon: "fa-restroom",
                base64Image: ""
            },
            {
                id: "fac_6",
                title: "Halaman Hijau Adiwiyata",
                desc: "Area bermain outdoor dan halaman upacara bendera yang asri dikelilingi pepohonan pelindung rindang.",
                content: "Halaman sekolah didesain asri, sejuk, dan rimbun dikelilingi taman obat keluarga (TOGA) serta pohon pelindung rindang. Halaman ini berfungsi serbaguna untuk area bermain outdoor siswa yang aman, lapangan upacara bendera hari Senin, area senam Sabtu Sehat, serta laboratorium alam terbuka bagi pembelajaran sains luar kelas.",
                link: "",
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
                content: "Pelaksanaan Ujian Praktik bagi seluruh siswa kelas VI merupakan salah satu syarat utama dan krusial dalam penilaian kelulusan sekolah dasar. Cabang ujian praktik meliputi praktik ibadah keagamaan (sholat & wudhu), ujian kesenian tradisional (tari & menyanyi lagu daerah), ujian bahasa (berpidato & membaca puisi), serta praktik sains fisika dasar. Siswa diimbau untuk mempersiapkan fisik dan kompetensi praktiknya secara matang.",
                link: "",
                icon: "fa-file-signature"
            },
            {
                id: "age_2",
                badge: "05 Feb 2026",
                title: "Rapat Pleno Komite Sekolah",
                desc: "Rapat koordinasi sinergi tahunan antara pengurus komite sekolah, paguyuban wali murid, serta Kepala Sekolah untuk program pendidikan.",
                content: "Rapat koordinasi tahunan ini mempertemukan pengurus komite sekolah, paguyuban wali murid kelas I-VI, jajaran guru, dan Kepala Sekolah. Rapat bertujuan untuk mensinergikan program kerja sekolah dasar selama satu tahun ajaran penuh, menyelaraskan program literasi digital, menyerap aspirasi orang tua murid, serta merencanakan peningkatan fasilitas sarana prasarana sekolah secara transparan.",
                link: "",
                icon: "fa-users"
            },
            {
                id: "age_3",
                badge: "02 Feb 2026",
                title: "Lomba Kompetensi Siswa",
                desc: "Ajang unjuk bakat, kreativitas, prestasi, dan keterampilan akademik maupun non-akademik antarkelas di lingkungan sekolah.",
                content: "Lomba Kompetensi Siswa (LKS) antarkelas diselenggarakan untuk memeriahkan jeda tengah semester. Jenis lomba mencakup lomba cerdas cermat sains-matematika, lomba mewarnai dan menggambar kaligrafi, lomba pidato bahasa Indonesia, serta lomba kebersihan dan keasrian kelas. Kegiatan ini bertujuan menggali bakat terpendam siswa dalam suasana yang ceria dan sportif.",
                link: "",
                icon: "fa-trophy"
            },
            {
                id: "age_4",
                badge: "01 Feb 2026",
                title: "Pelepasan Siswa Kelas VI",
                desc: "Acara seremonial pelepasan siswa kelas akhir yang dikombinasikan dengan pentas gebyar kreativitas seni tari tradisional.",
                content: "Acara seremonial pelepasan siswa-siswi kelas VI yang telah menyelesaikan masa pendidikan dasar selama 6 tahun di SD Negeri Wedusan. Acara ini dikombinasikan dengan pentas gebyar kreativitas seni budaya daerah (tari tradisional, pembacaan puisi perpisahan, serta paduan suara murid). Pelepasan dihadiri oleh seluruh orang tua siswa kelas akhir dan komite sekolah dengan penuh rasa haru dan bangga.",
                link: "",
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
                link: "https://drive.google.com/file/d/1ke0bLNoEsCbUJmEQLVxhMthtEPaPGYrp/view?usp=sharing",
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
        gallery: [
            {
                id: "gal_1",
                title: "Prestasi POPDA dan O2SN Tingkat Kecamatan",
                badge: "2 Foto",
                date: "06 Feb 2026",
                desc: "Dokumentasi kontingen atlet berprestasi SDN Wedusan yang sukses menyabet gelar juara di ajang olahraga tingkat daerah.",
                content: "Dokumentasi kontingen atlet berprestasi SDN Wedusan yang sukses menyabet gelar juara di ajang olahraga tingkat daerah, mempersembahkan medali emas untuk nama baik sekolah dan desa Wedusan. Prestasi ini memotivasi seluruh murid untuk terus giat berolahraga, disiplin diri, serta mengukir prestasi emas demi mengharumkan nama sekolah.",
                imageUrl: "https://sdnwedusan.aksespedia.com/storage/tenants/50/QIadXZlVh4UMqOvqQw9FbBa2fp6ByaZ5xvPYOa6L.jpg",
                base64Image: ""
            },
            {
                id: "gal_2",
                title: "Supervisi Administrasi dan Pembelajaran",
                badge: "5 Foto",
                date: "05 Feb 2026",
                desc: "Kegiatan supervisi rutin untuk penjaminan mutu kurikulum, kelayakan mengajar guru, dan administrasi kelas terpadu.",
                content: "Kegiatan supervisi rutin untuk penjaminan mutu kurikulum, kelayakan mengajar guru, dan administrasi kelas terpadu yang dipimpin langsung oleh jajaran pengawas sekolah dasar tingkat kecamatan guna meningkatkan kualitas pendidikan.",
                imageUrl: "https://sdnwedusan.aksespedia.com/storage/tenants/50/FalGFyURqHAeuIlMZXBv0vPtZvUIA7fhVtdU3Itk.jpg",
                base64Image: ""
            },
            {
                id: "gal_3",
                title: "Pembacaan Asma'ul Husna dan Tahlil",
                badge: "4 Foto",
                date: "02 Feb 2026",
                desc: "Pembiasaan keagamaan di musholla sekolah dengan melafalkan Asma'ul Husna serta doa tahlil berjamaah harian.",
                content: "Pembiasaan keagamaan di musholla sekolah dengan melafalkan Asma'ul Husna serta doa tahlil berjamaah harian guna membentuk karakter murid yang bertakwa, beriman, dan berakhlak mulia sejak dini.",
                imageUrl: "https://sdnwedusan.aksespedia.com/storage/tenants/50/cZgnsxmBgSTRXKz9X3zeQCiC4h9kpNX57b93kqlI.jpg",
                base64Image: ""
            },
            {
                id: "gal_4",
                title: "Pembiasaan Karakter & Senyum Salam Sapa",
                badge: "1 Foto",
                date: "01 Feb 2026",
                desc: "Budaya 5S (Senyum, Sapa, Salam, Sopan, Santun) menyambut kehadiran siswa di gerbang depan setiap pagi.",
                content: "Budaya 5S (Senyum, Sapa, Salam, Sopan, Santun) menyambut kehadiran siswa di gerbang depan setiap pagi oleh kepala sekolah and guru piket harian untuk mendidik adab luhur sebelum belajar.",
                imageUrl: "https://sdnwedusan.aksespedia.com/storage/tenants/50/cidVqRgsSfadn8NZKWJL06L8nrH32vL0o7klgxGv.jpg",
                base64Image: ""
            },
            {
                id: "gal_5",
                title: "Menjenguk Teman Sekolah Yang Sakit",
                badge: "2 Foto",
                date: "28 Jan 2026",
                desc: "Aksi sosial empati guru dan perwakilan siswa menjenguk teman kelas yang sedang dirawat sakit di rumah.",
                content: "Aksi sosial empati guru dan perwakilan siswa menjenguk teman kelas yang sedang dirawat sakit di rumah guna mempererat kekeluargaan, melatih kepekaan sosial, dan menanamkan solidaritas kemanusiaan.",
                imageUrl: "https://sdnwedusan.aksespedia.com/storage/tenants/50/KaLXpP7o5HcegGEE9Cl3Y5jOQLJhqcpoU7Rv1Npi.jpg",
                base64Image: ""
            },
            {
                id: "gal_6",
                title: "Kegiatan Jeda Semester (PERSARI Pramuka)",
                badge: "13 Foto",
                date: "20 Des 2025",
                desc: "Pertemuan Satu Hari (PERSARI) Pramuka Siaga yang seru dengan berbagai permainan edukasi outdoor.",
                content: "Pertemuan Satu Hari (PERSARI) Pramuka Siaga yang seru dengan berbagai permainan edukasi outdoor, jelajah alam bebas, ketangkasan regu, dan api unggun kebersamaan melatih kedisiplinan mental anak.",
                imageUrl: "https://sdnwedusan.aksespedia.com/storage/tenants/50/96iyCPvud4kMRtEiAkRgs3EqkdPJyH0gDrWEzhjc.jpg",
                base64Image: ""
            },
            {
                id: "gal_7",
                title: "Sabtu Sehat dan Bersih Lingkungan",
                badge: "4 Foto",
                date: "15 Nov 2025",
                desc: "Senam pagi kebugaran jasmani dilanjutkan kerja bakti membersihkan lingkungan kelas dan TOGA sekolah.",
                content: "Senam pagi kebugaran jasmani dilanjutkan kerja bakti bersama membersihkan lingkungan kelas dan TOGA sekolah untuk mewujudkan lingkungan Adiwiyata yang sehat, sejuk, dan bebas polusi.",
                imageUrl: "https://sdnwedusan.aksespedia.com/storage/tenants/50/y2Id1a2MrO3IQEjDJ0aGfHzGlORotEBHpiz4z8vD.jpg",
                base64Image: ""
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
        ],
        contact: {
            email: "sdwedusan@gmail.com",
            phone: "085347641171",
            address: "Jl. Puncel - Ngablak KM. 05 Desa Wedusan, Kec. Dukuhseti, Kabupaten Pati, Jawa Tengah (59158)"
        },
        schoolHistory: {
            title: "Sejarah Singkat SD Negeri Wedusan",
            desc: "Sejak berdirinya, SD Negeri Wedusan terus konsisten mendedikasikan diri untuk melahirkan generasi yang cerdas secara akademik, luhur secara karakter, dan kokoh dalam nilai keimanan di Desa Wedusan.",
            content: "SD Negeri Wedusan didirikan pada tahun 1974 sebagai jawaban atas kebutuhan mendasar masyarakat Desa Wedusan, Kecamatan Dukuhseti, Kabupaten Pati akan akses pendidikan dasar yang berkualitas. Pada awal perintisan, sekolah ini berdiri dengan fasilitas yang sangat sederhana, namun didorong oleh semangat gotong royong warga desa dan tekad pendidik yang luhur.<br><br>Seiring berjalannya waktu, sekolah terus bertransformasi secara fisik dan akademis. Berbagai sarana penunjang mulai dari perpustakaan, sarana ibadah (musholla), hingga ruang kelas modern yang representatif dibangun demi menjamin kenyamanan belajar murid. Pendidik di sekolah kami juga senantiasa meningkatkan kapasitas diri untuk memberikan pembelajaran terbaik.<br><br>Kini, di era modernisasi, SD Negeri Wedusan tidak hanya berfokus pada kecakapan akademik tradisional, melainkan juga memelopori integrasi pendidikan berbasis karakter Pancasila dan literasi digital. Kami percaya bahwa kolaborasi yang kuat antara sekolah, orang tua, dan masyarakat merupakan kunci utama dalam mencetak generasi penerus yang cerdas, kreatif, berakhlak mulia, dan siap bersaing di masa depan.",
            imageUrl: "https://sdnwedusan.aksespedia.com/storage/tenants/50/FalGFyURqHAeuIlMZXBv0vPtZvUIA7fhVtdU3Itk.jpg",
            base64Image: ""
        }
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
        !schoolDB.programs || !schoolDB.registrations || !schoolDB.contact) {
        
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
    
    // Self-heal sidebarBanners key if missing from older browser cache
    if (schoolDB && !schoolDB.sidebarBanners) {
        schoolDB.sidebarBanners = defaultSchoolDatabase.sidebarBanners;
        try {
            localStorage.setItem("school_website_db", JSON.stringify(schoolDB));
        } catch (e) {
            console.error("Gagal menyimpan self-healing sidebarBanners:", e);
        }
    }
    
    // Self-heal contact schema key if missing from older browser cache
    if (schoolDB && !schoolDB.contact) {
        schoolDB.contact = defaultSchoolDatabase.contact;
        try {
            localStorage.setItem("school_website_db", JSON.stringify(schoolDB));
        } catch (e) {
            console.error("Gagal menyimpan self-healing contact:", e);
        }
    }

    // Self-heal gallery schema key if missing from older browser cache
    if (schoolDB && !schoolDB.gallery) {
        schoolDB.gallery = defaultSchoolDatabase.gallery;
        try {
            localStorage.setItem("school_website_db", JSON.stringify(schoolDB));
        } catch (e) {
            console.error("Gagal menyimpan self-healing gallery:", e);
        }
    }
    
    // Self-heal schoolHistory schema key if missing from older browser cache
    if (schoolDB && !schoolDB.schoolHistory) {
        schoolDB.schoolHistory = defaultSchoolDatabase.schoolHistory;
        try {
            localStorage.setItem("school_website_db", JSON.stringify(schoolDB));
        } catch (e) {
            console.error("Gagal menyimpan self-healing schoolHistory:", e);
        }
    }
    
    // Self-heal hero slides link to use #spmb instead of #kontak for student admission
    if (schoolDB && schoolDB.heroSlides && schoolDB.heroSlides[0]) {
        if (schoolDB.heroSlides[0].link === "Daftar PPDB Baru|#kontak") {
            schoolDB.heroSlides[0].link = "Daftar PPDB Baru|#spmb";
            try {
                localStorage.setItem("school_website_db", JSON.stringify(schoolDB));
            } catch (e) {
                console.error("Gagal menyimpan self-healing slide link:", e);
            }
        }
    }
    
    // Self-heal logo to use premium transparent Kemendikbud shield
    if (schoolDB && schoolDB.logo) {
        if (!schoolDB.logo.imageUrl || schoolDB.logo.type === "icon") {
            schoolDB.logo.type = "image";
            schoolDB.logo.imageUrl = "https://sdnwedusan.aksespedia.com/storage/tenants/50/fZxyOX0jIfZ5pDa1hu4tcZnyYt8hjX49vqLs9vTy.png";
            try {
                localStorage.setItem("school_website_db", JSON.stringify(schoolDB));
            } catch (e) {
                console.error("Gagal menyimpan self-healing logo image:", e);
            }
        }
    }

    // Self-heal hero slides to use the premium official sdnwedusan images
    if (schoolDB && schoolDB.heroSlides) {
        let needsUpdate = false;
        schoolDB.heroSlides.forEach((slide, idx) => {
            if (slide.imageUrl && slide.imageUrl.includes("unsplash.com")) {
                needsUpdate = true;
                if (idx === 0) {
                    slide.imageUrl = "https://sdnwedusan.aksespedia.com/storage/tenants/50/ZQaiNR8vqNZHqJG28ymmefxZj6Sj7X3ui5Zn2l25.jpg";
                    slide.title = "Selamat Datang di Platform Digital Resmi <span>SD Negeri Wedusan</span>";
                    slide.desc = "Berkomitmen mewujudkan generasi cerdas, berkarakter, dan berdaya saing global melalui pendidikan berkualitas.";
                } else if (idx === 1) {
                    slide.imageUrl = "https://sdnwedusan.aksespedia.com/storage/tenants/50/Y4e8mkVeB4ASOecNWOqpt1j5C1phJ8pKcyXzjZhU.jpg";
                    slide.title = "Membangun Semangat Nasionalisme Melalui <span>Peringatan Hari Besar</span>";
                    slide.desc = "Mari Bersama Terus Melaju Untuk Indonesia Maju dengan Menjunjung Tinggi Nilai-Nilai Luhur Bangsa.";
                } else if (idx === 2) {
                    slide.imageUrl = "https://sdnwedusan.aksespedia.com/assets/dummy/13.png";
                    slide.title = "Kolaborasi Ekosistem Digital Untuk <span>Masa Depan Pendidikan</span>";
                    slide.desc = "Menyatukan Potensi Teknologi dan Karakter Bangsa Untuk Generasi Unggul.";
                }
            }
        });
        
        // Ensure there are 4 slides like the official website
        if (schoolDB.heroSlides.length < 4) {
            schoolDB.heroSlides.push({
                id: "slide_4",
                badge: "<i class=\"fas fa-cogs\"></i> Efisiensi",
                title: "Inovasi Tanpa Batas Dalam Mengelola <span>Administrasi Lembaga</span>",
                desc: "Efisiensi dan Transparansi Dalam Genggaman Melalui CMS Untukmu Negeri.",
                link: "Hubungi Kami|#kontak",
                base64Image: "",
                imageUrl: "https://sdnwedusan.aksespedia.com/assets/dummy/14.png"
            });
            needsUpdate = true;
        }

        if (needsUpdate) {
            try {
                localStorage.setItem("school_website_db", JSON.stringify(schoolDB));
            } catch (e) {
                console.error("Gagal menyimpan self-healing hero slides:", e);
            }
        }
    }
    
    let isAdminLoggedIn = localStorage.getItem("school_admin_logged_in") === "true";

    // 1. Render Engines
    function renderDynamicLogo() {
        const container = document.getElementById("brand-container");
        if (!container) return;

        const logo = schoolDB.logo || {
            type: "image",
            icon: "fa-school",
            base64Image: "",
            imageUrl: "https://sdnwedusan.aksespedia.com/storage/tenants/50/fZxyOX0jIfZ5pDa1hu4tcZnyYt8hjX49vqLs9vTy.png",
            name: "SDN Wedusan",
            tagline: "Mewujudkan Generasi Cerdas & Berkarakter"
        };

        const editBtn = isAdminLoggedIn ? `
            <div class="admin-controls" style="position: absolute; top: 50%; transform: translateY(-50%); left: 100%; margin-left: 12px; display: flex; z-index: 100; margin-top:0;">
                <button class="btn btn-add-item" onclick="openEditLogo(event)" style="padding: 4px 10px; font-size: 11px; border-style: solid; white-space: nowrap; height:auto; box-shadow: var(--shadow-sm);"><i class="fas fa-edit"></i> Edit Logo</button>
            </div>
        ` : "";

        const logoSrc = logo.base64Image || logo.imageUrl || "";
        const logoHtml = logo.type === "image" && logoSrc ? `
            <img src="${logoSrc}" style="height: 100%; width: 100%; object-fit: cover; border-radius: inherit;" alt="Logo">
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
            let onclickAttr = "";
            if (item.link) {
                if (item.link.includes("|")) {
                    const parts = item.link.split("|");
                    buttonText = parts[0].trim();
                    buttonUrl = parts[1].trim();
                } else {
                    buttonUrl = item.link.trim();
                }
                
                if (buttonUrl === "#spmb") {
                    onclickAttr = 'onclick="openSpmbModal(event)"';
                    buttonUrl = "#";
                }
            }

            const imageSrc = item.base64Image || item.imageUrl || "";

            return `
                <div class="slide ${idx === 0 ? 'active' : ''}" data-id="${item.id}" style="background-image: url('${imageSrc}'); background-size: cover; background-position: center; position: absolute; width: 100%; height: 100%;">
                    <!-- Dark green-blue professional visual overlay for maximum text contrast and glassmorphic shine -->
                    <div class="slide-overlay" style="position: absolute; inset: 0; background: linear-gradient(135deg, rgba(20, 83, 45, 0.85) 0%, rgba(13, 52, 28, 0.75) 100%); z-index: 2;"></div>
                    
                    <!-- Admin control overlay absolute layout in the top right corner -->
                    <div class="admin-controls" onclick="event.preventDefault(); event.stopPropagation();" style="position: absolute; top: 120px; right: 40px; z-index: 50; display: flex; gap: 10px;">
                        <button class="btn-admin-card edit" onclick="openEditItem('heroSlides', '${item.id}')" title="Edit Slide"><i class="fas fa-edit"></i></button>
                        <button class="btn-admin-card delete" onclick="deleteItem('heroSlides', '${item.id}')" title="Hapus Slide"><i class="fas fa-trash"></i></button>
                    </div>
 
                    <!-- Centered Slide Content container -->
                    <div class="container" style="position: relative; z-index: 10; height: 100%; display: flex; align-items: center; justify-content: center; text-align: center;">
                        <div class="hero-content" style="max-width: 880px; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; animation: slideUp 0.8s ease;">
                            <div class="hero-badge" style="background: rgba(255, 255, 255, 0.12); color: white; border: 1px solid rgba(255, 255, 255, 0.25); text-shadow: 0 1px 2px rgba(0,0,0,0.25); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); font-weight: 700; margin-bottom: 24px; padding: 8px 18px; font-size: 13px; border-radius: 9999px;">${item.badge}</div>
                            <h1 class="hero-title" style="color: white; text-shadow: 0 4px 15px rgba(0,0,0,0.5); font-size: 48px; font-weight: 900; line-height: 1.25; margin-bottom: 20px; font-family: var(--font-sans);">${item.title}</h1>
                            <p class="hero-desc" style="color: rgba(255, 255, 255, 0.92); text-shadow: 0 2px 8px rgba(0,0,0,0.4); font-size: 16px; max-width: 720px; margin-bottom: 35px; line-height: 1.7; font-weight: 500;">${item.desc}</p>
                            <div class="hero-action-buttons" style="display: flex; justify-content: center;">
                                <a href="${buttonUrl}" ${onclickAttr} class="btn btn-primary" ${buttonUrl.startsWith('http') ? 'target="_blank"' : ''} style="background: linear-gradient(135deg, var(--accent), #d97706); border: none; box-shadow: 0 10px 25px rgba(245, 158, 11, 0.35); font-weight: 800; padding: 16px 38px; border-radius: 9999px; font-size: 15px; display: inline-flex; align-items: center; gap: 8px;">
                                    ${buttonText} <i class="fas fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join("");

        // Control Arrows & Dots
        const controlsHtml = `
            <button class="slider-control prev" style="z-index: 30;"><i class="fas fa-chevron-left"></i></button>
            <button class="slider-control next" style="z-index: 30;"><i class="fas fa-chevron-right"></i></button>
            <div class="slider-dots" style="z-index: 30; bottom: 40px;">
                ${schoolDB.heroSlides.map((_, idx) => `<span class="dot ${idx === 0 ? 'active' : ''}"></span>`).join("")}
            </div>
            <!-- Admin "+ Tambah Slide Baru" overlay button inside hero slider container -->
            <div class="add-btn-wrapper slider-add-btn" style="position: absolute; bottom: 30px; right: 40px; z-index: 50; margin-bottom: 0; width: auto;">
                <button class="btn-add-item" onclick="openAddItem('heroSlides')" style="background: rgba(255, 255, 255, 0.15); color: white; border: 1px dashed rgba(255, 255, 255, 0.4); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);"><i class="fas fa-plus"></i> Tambah Slide Baru</button>
            </div>
        `;

        sliderContainer.innerHTML = `
            <div class="hero-carousel-wrapper" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; overflow: hidden; background: #0f172a;">
                <div class="hero-slides-container" style="height: 100%; position: relative;">
                    ${slidesHtml}
                </div>
                ${controlsHtml}
            </div>
        `;

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

        const itemsHtml = schoolDB.stats.map((item, idx) => `
            <div class="stat-item stat-card-${idx}">
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
        const history = schoolDB.schoolHistory || defaultSchoolDatabase.schoolHistory;
        const editBtn = isAdminLoggedIn ? `
            <div class="admin-controls" style="position: absolute; top: 15px; right: 15px; display: flex; z-index: 50; margin: 0; gap: 10px;">
                <button class="btn btn-add-item" onclick="openEditHistory()" style="padding: 6px 14px; font-size: 12px; border-style: solid;"><i class="fas fa-landmark"></i> Edit Sejarah</button>
                <button class="btn btn-add-item" onclick="openEditVision()" style="padding: 6px 14px; font-size: 12px; border-style: solid;"><i class="fas fa-bullseye"></i> Edit Visi & Misi</button>
            </div>
        ` : "";

        const historyImgSrc = history.base64Image || history.imageUrl || "";

        container.innerHTML = `
            ${editBtn}
            
            <!-- 1. SEJARAH SEKOLAH BLOCK (2 COLUMNS) -->
            <div class="school-history-block" style="display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 50px; margin-bottom: 60px; align-items: center;">
                <div class="history-content-col">
                    <span class="section-badge" style="margin-left: 0;">Lintasan Sejarah</span>
                    <h2 class="section-title" style="text-align: left; font-size: 32px; margin-bottom: 20px; line-height: 1.25;">${history.title}</h2>
                    <p class="history-subtitle" style="font-size: 16px; font-weight: 600; color: var(--primary); line-height: 1.6; margin-bottom: 20px;">${history.desc}</p>
                    <div class="history-text" style="font-size: 15px; line-height: 1.8; color: var(--text-main); text-align: justify;">
                        ${history.content}
                    </div>
                </div>
                
                <div class="history-image-col">
                    <div class="history-image-frame" style="position: relative; border-radius: var(--radius-lg); overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.08); border: 4px solid white;">
                        <img src="${historyImgSrc}" alt="Sejarah SDN Wedusan" style="width: 100%; height: 400px; object-fit: cover; transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1); display: block;" class="hover-zoom-img">
                        <div style="position: absolute; bottom: 0; left: 0; width: 100%; background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%); padding: 20px; color: white; z-index: 2;">
                            <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: var(--accent);"><i class="fas fa-landmark"></i> SDN Wedusan</span>
                            <p style="margin: 4px 0 0 0; font-size: 14px; font-weight: 600;">Dedikasi Pendidikan Sejak 1974</p>
                        </div>
                    </div>
                </div>
            </div>

            <hr style="border: 0; height: 1px; background: linear-gradient(to right, transparent, var(--border-color), transparent); margin-bottom: 60px;">
            
            <!-- 2. VISI & MISI BLOCK -->
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
            const imgSrc = item.base64Image || item.imageUrl;
            const coverHtml = imgSrc ? `
                <div class="card-cover-box" style="background-image: url('${imgSrc}'); background-size: cover; background-position: center; height: 160px; border-radius: var(--radius-md) var(--radius-md) 0 0; margin: -40px -32px 24px -32px; border-bottom: 1px solid var(--border-color);"></div>
            ` : `<div class="feature-icon"><i class="fas ${item.icon || 'fa-award'}"></i></div>`;

            return `
                <div class="feature-card" data-id="${item.id}" style="position: relative;">
                    <div class="admin-controls" onclick="event.preventDefault(); event.stopPropagation();">
                        <button class="btn-admin-card edit" onclick="openEditItem('programs', '${item.id}')"><i class="fas fa-edit"></i></button>
                        <button class="btn-admin-card delete" onclick="deleteItem('programs', '${item.id}')"><i class="fas fa-trash"></i></button>
                    </div>
                    ${coverHtml}
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                    <a href="#" class="feature-link" onclick="openDetailView(event, 'programs', '${item.id}')">Selengkapnya <i class="fas fa-arrow-right"></i></a>
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
                        <a href="#" class="feature-link" onclick="openDetailView(event, 'news', '${item.id}')">Baca Selengkapnya <i class="fas fa-arrow-right"></i></a>
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
                    <a href="#" class="feature-link" onclick="openDetailView(event, 'facilities', '${item.id}')">Selengkapnya <i class="fas fa-arrow-right"></i></a>
                </div>
            `;
        }).join("");
    }

    function renderDynamicAgenda() {
        const grid = document.getElementById("agenda-grid");
        if (!grid) return;
        
        grid.innerHTML = schoolDB.agenda.map(item => {
            const imgSrc = item.base64Image || item.imageUrl;
            const coverHtml = imgSrc ? `
                <div class="card-cover-box" style="background-image: url('${imgSrc}'); background-size: cover; background-position: center; height: 160px; border-radius: var(--radius-md) var(--radius-md) 0 0; margin: -40px -32px 24px -32px; border-bottom: 1px solid var(--border-color);"></div>
            ` : `<div class="feature-icon"><i class="fas ${item.icon || 'fa-calendar-alt'}"></i></div>`;

            return `
                <div class="feature-card" data-id="${item.id}" style="position: relative;">
                    <div class="admin-controls" onclick="event.preventDefault(); event.stopPropagation();">
                        <button class="btn-admin-card edit" onclick="openEditItem('agenda', '${item.id}')"><i class="fas fa-edit"></i></button>
                        <button class="btn-admin-card delete" onclick="deleteItem('agenda', '${item.id}')"><i class="fas fa-trash"></i></button>
                    </div>
                    ${coverHtml}
                    <div class="card-date-badge">${item.badge}</div>
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                    <a href="#" class="feature-link" onclick="openDetailView(event, 'agenda', '${item.id}')">Selengkapnya <i class="fas fa-arrow-right"></i></a>
                </div>
            `;
        }).join("");
    }

    function renderDynamicGallery() {
        const grid = document.getElementById("gallery-masonry-grid");
        if (!grid) return;

        if (!schoolDB.gallery || schoolDB.gallery.length === 0) {
            grid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted); font-style: italic;">
                    Belum ada foto galeri yang diunggah.
                </div>
            `;
            return;
        }

        const cardsHtml = schoolDB.gallery.map((item, idx) => {
            const imgSrc = item.base64Image || item.imageUrl || "";
            // Item 1 is featured/large (span 2 cols, span 2 rows)
            const isFeatured = idx === 0 ? "bento-featured" : "";
            
            return `
                <div class="gallery-masonry-item ${isFeatured}" data-id="${item.id}" onclick="openDetailView(event, 'gallery', '${item.id}')">
                    <div class="admin-controls" onclick="event.preventDefault(); event.stopPropagation();">
                        <button class="btn-admin-card edit" onclick="openEditItem('gallery', '${item.id}')" title="Edit Foto"><i class="fas fa-edit"></i></button>
                        <button class="btn-admin-card delete" onclick="deleteItem('gallery', '${item.id}')" title="Hapus Foto"><i class="fas fa-trash"></i></button>
                    </div>
                    <img src="${imgSrc}" alt="${item.title}" loading="lazy">
                    <div class="gallery-item-content">
                        <div class="gallery-item-meta">
                            <span>${item.date || ""}</span>
                            <span class="gallery-item-count"><i class="fas fa-camera"></i> ${item.badge || '1 Foto'}</span>
                        </div>
                        <h3>${item.title}</h3>
                    </div>
                </div>
            `;
        }).join("");

        grid.innerHTML = cardsHtml;
    }

    function renderDynamicDownloads() {
        const grid = document.getElementById("downloads-grid");
        if (!grid) return;
        
        // Show or hide admin Google Drive guidance dynamically
        const adminInfo = document.getElementById("downloads-admin-info");
        if (adminInfo) {
            if (isAdminLoggedIn) {
                adminInfo.innerHTML = `
                    <div class="admin-helper-banner" style="background: rgba(5, 150, 105, 0.05); border: 1px dashed var(--primary); border-radius: var(--radius-md); padding: 24px; display: flex; align-items: center; gap: 20px; box-shadow: var(--shadow-sm); animation: fadeIn 0.4s ease; margin-bottom: 30px;">
                        <div style="font-size: 32px; color: var(--primary);"><i class="fab fa-google-drive"></i></div>
                        <div style="flex-grow: 1; font-size: 13px; line-height: 1.6; color: var(--text-main);">
                            <strong style="color: var(--primary); display: block; font-size: 14px; margin-bottom: 6px;"><i class="fas fa-info-circle"></i> Mode Admin: Panduan Upload Berkas / File Penting</strong>
                            Karena website ini berjalan secara serverless (gratis tanpa database berbayar), berkas baru (PDF, Word, Excel, dll.) <strong>tidak bisa langsung diunggah ke website secara mentah</strong> demi menjaga performa website agar tidak lambat. 
                            <br>
                            Silakan unggah dokumen Anda ke <strong>Google Drive Sekolah</strong> terlebih dahulu, ubah setelan akses berbagi file menjadi <strong>"Siapa saja yang memiliki link dapat melihat"</strong>, salin linknya, kemudian klik tombol <strong>+ Tambah Dokumen Baru</strong> di bawah dan tempelkan link tersebut ke dalam kolom "Tautan Google Drive".
                        </div>
                        <div style="flex-shrink: 0;">
                            <a href="https://drive.google.com" target="_blank" class="btn btn-primary" style="padding: 10px 20px; font-size: 12px; border-radius: var(--radius-sm);"><i class="fab fa-google-drive"></i> Buka Google Drive</a>
                        </div>
                    </div>
                `;
                adminInfo.style.display = "block";
            } else {
                adminInfo.innerHTML = "";
                adminInfo.style.display = "none";
            }
        }
        
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

    function renderDynamicContact() {
        const c = schoolDB.contact || {
            email: "sdwedusan@gmail.com",
            phone: "085347641171",
            address: "Jl. Puncel - Ngablak KM. 05 Desa Wedusan, Kec. Dukuhseti, Kabupaten Pati, Jawa Tengah (59158)"
        };

        // Update Top Bar
        const topEmail = document.getElementById("top-email");
        if (topEmail) topEmail.innerText = c.email;
        const topPhone = document.getElementById("top-phone");
        if (topPhone) topPhone.innerText = c.phone;

        // Update Contact Section
        const contactAddress = document.getElementById("contact-address");
        if (contactAddress) contactAddress.innerText = c.address;
        const contactEmail = document.getElementById("contact-email");
        if (contactEmail) contactEmail.innerText = c.email;
        const contactPhone = document.getElementById("contact-phone");
        if (contactPhone) contactPhone.innerText = c.phone;
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
        try { renderDynamicGallery(); } catch (e) { console.error("Error rendering gallery:", e); }
        try { renderDynamicDownloads(); } catch (e) { console.error("Error rendering downloads:", e); }
        try { renderDynamicContact(); } catch (e) { console.error("Error rendering contact:", e); }
        try { updateDatabaseSizeIndicator(); } catch (e) { console.error("Error updating db indicator:", e); }
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

    // Standalone Article Detail Popup Viewer
    window.openDetailView = (e, section, id) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        
        const item = schoolDB[section].find(x => x.id === id);
        if (!item) return;

        // Set Kop Category Badge
        const badgeEl = document.getElementById("detail-badge");
        if (badgeEl) {
            if (section === "news") {
                badgeEl.innerText = item.tag || "Berita Terkini";
                badgeEl.style.background = "var(--primary-light)";
                badgeEl.style.color = "var(--primary)";
            } else if (section === "facilities") {
                badgeEl.innerText = "Sarana Prasarana";
                badgeEl.style.background = "var(--accent-light)";
                badgeEl.style.color = "var(--accent)";
            } else if (section === "agenda") {
                badgeEl.innerText = "Agenda Mendatang";
                badgeEl.style.background = "rgba(30, 58, 138, 0.08)";
                badgeEl.style.color = "var(--secondary)";
            } else if (section === "gallery") {
                badgeEl.innerText = "Galeri Kegiatan";
                badgeEl.style.background = "rgba(16, 185, 129, 0.1)";
                badgeEl.style.color = "#059669";
            } else if (section === "programs") {
                badgeEl.innerText = "Program Unggulan";
                badgeEl.style.background = "var(--primary-light)";
                badgeEl.style.color = "var(--primary)";
            }
        }

        // Set Title
        const titleEl = document.getElementById("detail-title");
        if (titleEl) titleEl.innerText = item.title;

        // Set Date or Badge
        const dateEl = document.getElementById("detail-date");
        if (dateEl) {
            if (section === "news") {
                dateEl.innerHTML = `<i class="fas fa-calendar-alt"></i> Diterbitkan pada: ${item.date || ""}`;
            } else if (section === "agenda") {
                dateEl.innerHTML = `<i class="fas fa-calendar-check"></i> Tanggal Pelaksanaan: ${item.badge || ""}`;
            } else if (section === "gallery") {
                dateEl.innerHTML = `<i class="fas fa-image"></i> Album: ${item.title} • ${item.badge || ""}`;
            } else if (section === "programs") {
                dateEl.innerHTML = `<i class="fas fa-award"></i> Program Unggulan SD Negeri Wedusan`;
            } else {
                dateEl.innerHTML = `<i class="fas fa-school"></i> Fasilitas Sekolah SDN Wedusan`;
            }
        }

        // Set Cover Image Banner
        const imgBox = document.getElementById("detail-img-box");
        const imgEl = document.getElementById("detail-img");
        if (imgBox && imgEl) {
            const imageSrc = item.base64Image || item.imageUrl || "";
            if (imageSrc) {
                imgEl.src = imageSrc;
                imgBox.style.display = "block";
            } else {
                imgEl.src = "";
                imgBox.style.display = "none";
            }
        }

        // Set Rich Multi-paragraph content
        const textEl = document.getElementById("detail-text");
        if (textEl) {
            // Render multi-paragraph or default description if content is missing
            const richContent = item.content || item.desc || "Belum ada bacaan berita lengkap untuk item ini. Anda dapat menyunting dan melengkapinya melalui kontrol panel admin.";
            textEl.innerHTML = richContent;
        }

        document.getElementById("detail-view-modal").classList.add("active");
    };

    window.closeDetailView = () => {
        document.getElementById("detail-view-modal").classList.remove("active");
    };

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
        const lblImage = document.getElementById("lbl-crud-image");
        
        // Reset label link and placeholder to defaults
        document.querySelector("label[for='crud-link']").innerHTML = "Tautan Aksi (Link URL)";
        document.getElementById("crud-link").placeholder = "Contoh: https://google.com atau link dokumen";

        if (lblImage) {
            if (section === "gallery") {
                lblImage.innerText = "Pilihan Gambar Unggulan (Galeri)";
            } else {
                lblImage.innerText = "Pilihan Gambar Unggulan (Berita/Fasilitas/Program/Agenda)";
            }
        }

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
        } else if (section === "sidebarBanners") {
            lblTitle.innerText = "Judul Banner Sidebar";
            lblBadge.innerText = "Keterangan Tambahan (Opsional)";
            fileInput.disabled = false;
            filePreview.style.opacity = "1";
        } else if (section === "programs") {
            lblTitle.innerText = "Nama Program Unggulan";
            lblBadge.innerText = "Ikon Aksi / Pilihan (Format: Judul Tombol|Tautan)";
            fileInput.disabled = false;
            filePreview.style.opacity = "1";
        } else if (section === "agenda") {
            lblTitle.innerText = "Nama Agenda";
            lblBadge.innerText = "Tanggal Kegiatan (Contoh: 09 Feb 2026)";
            fileInput.disabled = false;
            filePreview.style.opacity = "1";
        } else if (section === "gallery") {
            lblTitle.innerText = "Judul Foto / Kegiatan Galeri";
            lblBadge.innerText = "Keterangan / Jumlah Foto (Misal: 4 Foto)";
            fileInput.disabled = false;
            filePreview.style.opacity = "1";
        } else if (section === "downloads") {
            lblTitle.innerText = "Nama Dokumen";
            lblBadge.innerText = "Keterangan Berkas (Contoh: Microsoft Word • SOP)";
            fileInput.disabled = true;
            filePreview.style.opacity = "0.4";
            
            // Customize label and placeholder with Drive helper links!
            document.querySelector("label[for='crud-link']").innerHTML = `Tautan Akses / Tautan Google Drive <a href="https://drive.google.com" target="_blank" style="margin-left: 8px; font-size:11px; color:var(--primary); font-weight:700; text-decoration:none;"><i class="fas fa-external-link-alt"></i> Buka Google Drive Sekolah</a>`;
            document.getElementById("crud-link").placeholder = "Upload file ke Drive sekolah terlebih dahulu, lalu tempel link berbaginya di sini...";
        }
        
        // Handle rich content field reset and visibility dynamically
        const contentField = document.getElementById("field-crud-content");
        if (contentField) {
            document.getElementById("crud-content").value = "";
            if (section === "news" || section === "facilities" || section === "agenda" || section === "gallery" || section === "programs") {
                contentField.style.display = "block";
            } else {
                contentField.style.display = "none";
            }
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
        const lblImage = document.getElementById("lbl-crud-image");
        
        // Reset label link and placeholder to defaults
        document.querySelector("label[for='crud-link']").innerHTML = "Tautan Aksi (Link URL)";
        document.getElementById("crud-link").placeholder = "Contoh: https://google.com atau link dokumen";

        if (lblImage) {
            if (section === "gallery") {
                lblImage.innerText = "Pilihan Gambar Unggulan (Galeri)";
            } else {
                lblImage.innerText = "Pilihan Gambar Unggulan (Berita/Fasilitas/Program/Agenda)";
            }
        }

        if (section === "downloads") {
            // Customize label and placeholder with Drive helper links!
            document.querySelector("label[for='crud-link']").innerHTML = `Tautan Akses / Tautan Google Drive <a href="https://drive.google.com" target="_blank" style="margin-left: 8px; font-size:11px; color:var(--primary); font-weight:700; text-decoration:none;"><i class="fas fa-external-link-alt"></i> Buka Google Drive Sekolah</a>`;
            document.getElementById("crud-link").placeholder = "Upload file ke Drive sekolah terlebih dahulu, lalu tempel link berbaginya di sini...";
        }

        if (section === "news" || section === "facilities" || section === "heroSlides" || section === "sidebarBanners" || section === "programs" || section === "agenda" || section === "gallery") {
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
        
        // Handle rich content field value and visibility dynamically
        const contentField = document.getElementById("field-crud-content");
        if (contentField) {
            document.getElementById("crud-content").value = item.content || "";
            if (section === "news" || section === "facilities" || section === "agenda" || section === "gallery" || section === "programs") {
                contentField.style.display = "block";
            } else {
                contentField.style.display = "none";
            }
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

    // 3b. Sejarah Sekolah Editor
    window.openEditHistory = () => {
        const hist = schoolDB.schoolHistory || defaultSchoolDatabase.schoolHistory;
        document.getElementById("hist-title").value = hist.title;
        document.getElementById("hist-desc").value = hist.desc;
        document.getElementById("hist-content").value = hist.content.replace(/<br\s*\/?>/gi, '\n');
        
        const base64 = hist.base64Image || "";
        const preview = document.getElementById("hist-img-preview");
        const previewBox = document.getElementById("hist-img-preview-box");
        const hiddenInput = document.getElementById("hist-base64-image");
        
        hiddenInput.value = base64;
        if (base64 || hist.imageUrl) {
            preview.src = base64 || hist.imageUrl;
            preview.style.display = "block";
            if (previewBox.querySelector("p")) previewBox.querySelector("p").style.display = "none";
            if (previewBox.querySelector("i")) previewBox.querySelector("i").style.display = "none";
        } else {
            preview.src = "";
            preview.style.display = "none";
            if (previewBox.querySelector("p")) previewBox.querySelector("p").style.display = "block";
            if (previewBox.querySelector("i")) previewBox.querySelector("i").style.display = "block";
        }
        
        document.getElementById("admin-history-modal").classList.add("active");
    };

    window.closeHistoryModal = () => {
        document.getElementById("admin-history-modal").classList.remove("active");
    };

    window.submitHistoryForm = (e) => {
        e.preventDefault();
        const title = document.getElementById("hist-title").value.trim();
        const desc = document.getElementById("hist-desc").value.trim();
        const rawContent = document.getElementById("hist-content").value.trim();
        const content = rawContent.replace(/\n/g, "<br>");
        const base64Image = document.getElementById("hist-base64-image").value;
        
        const currentHist = schoolDB.schoolHistory || {};
        schoolDB.schoolHistory = {
            title: title,
            desc: desc,
            content: content,
            imageUrl: currentHist.imageUrl || "https://sdnwedusan.aksespedia.com/storage/tenants/50/FalGFyURqHAeuIlMZXBv0vPtZvUIA7fhVtdU3Itk.jpg",
            base64Image: base64Image
        };
        
        localStorage.setItem("school_website_db", JSON.stringify(schoolDB));
        renderDynamicVisionMission();
        window.closeHistoryModal();
        showToast("Sejarah singkat sekolah berhasil diperbarui secara presisten!", "success");
    };

    // 4. Contact Editor Window Handlers
    window.openEditContact = () => {
        const c = schoolDB.contact || {
            email: "sdwedusan@gmail.com",
            phone: "085347641171",
            address: "Jl. Puncel - Ngablak KM. 05 Desa Wedusan, Kec. Dukuhseti, Kabupaten Pati, Jawa Tengah (59158)"
        };
        document.getElementById("contact-phone-input").value = c.phone;
        document.getElementById("contact-email-input").value = c.email;
        document.getElementById("contact-address-input").value = c.address;
        
        document.getElementById("admin-contact-modal").classList.add("active");
    };

    window.closeContactModal = () => {
        document.getElementById("admin-contact-modal").classList.remove("active");
    };

    window.submitContactForm = (e) => {
        e.preventDefault();
        schoolDB.contact = {
            phone: document.getElementById("contact-phone-input").value.trim(),
            email: document.getElementById("contact-email-input").value.trim(),
            address: document.getElementById("contact-address-input").value.trim()
        };
        localStorage.setItem("school_website_db", JSON.stringify(schoolDB));
        renderDynamicContact();
        window.closeContactModal();
        showToast("Kontak resmi sekolah berhasil diperbarui secara presisten!", "success");
    };

    // ==========================================================================
    // SPMB WIDGET & STUDENT CRM PORTAL HANDLERS (ONLINE & OFFLINE)
    // ==========================================================================

    // 1. SPMB / PPDB Registration Modal for Parents
    window.openSpmbModal = (e) => {
        if (e) e.preventDefault();
        document.getElementById("spmb-registration-form").reset();
        
        // Reset modal visibility state back to form input
        document.getElementById("spmb-form-container").style.display = "block";
        document.getElementById("spmb-success-container").style.display = "none";
        
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

        // Generate Registration Number (PPDB-[YEAR]-[COUNT])
        const regCount = schoolDB.registrations.length;
        const regNumber = "PPDB-" + new Date().getFullYear() + "-" + String(regCount).padStart(4, '0');

        // Create success printable slip HTML structure
        const logoSrc = schoolDB.logo.base64Image || schoolDB.logo.imageUrl || "https://sdnwedusan.aksespedia.com/storage/tenants/50/fZxyOX0jIfZ5pDa1hu4tcZnyYt8hjX49vqLs9vTy.png";
        const todayStr = new Date().toLocaleDateString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'});

        const successSlipHtml = `
            <div class="spmb-success-card" style="text-align: center; padding: 10px 0;">
                <div style="width: 64px; height: 64px; background: rgba(5, 150, 105, 0.1); color: var(--primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 32px; margin: 0 auto 16px auto; border: 2px solid rgba(5, 150, 105, 0.2); animation: scaleUp 0.5s ease;">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3 style="font-size: 20px; font-weight: 800; color: var(--secondary); margin-bottom: 6px;">Pendaftaran Berhasil Dikirim!</h3>
                <p style="color: var(--text-muted); font-size: 13.5px; margin-bottom: 20px; line-height: 1.4;">Berkas pendaftaran calon siswa baru telah tercatat dengan aman di database PPDB SDN Wedusan secara luring.</p>
                
                <!-- Printable Slip Box -->
                <div id="printable-spmb-slip" style="background: white; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 22px; text-align: left; margin-bottom: 20px; box-shadow: var(--shadow-sm); position: relative; overflow: hidden; color: #334155;">
                    <!-- Watermark Logo -->
                    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-30deg); font-size: 60px; font-weight: 900; color: rgba(5, 150, 105, 0.04); pointer-events: none; text-transform: uppercase; white-space: nowrap; user-select: none;">
                        SDN WEDUSAN
                    </div>
                    
                    <!-- Header Slip -->
                    <div style="display: flex; gap: 14px; align-items: center; border-bottom: 2px solid var(--primary); padding-bottom: 10px; margin-bottom: 14px;">
                        <img src="${logoSrc}" style="width: 44px; height: 44px; object-fit: cover;" alt="Logo">
                        <div>
                            <h4 style="font-size: 13.5px; font-weight: 800; color: var(--secondary); margin: 0; text-transform: uppercase; letter-spacing: 0.5px; line-height:1.2;">KARTU BUKTI PENDAFTARAN PPDB</h4>
                            <p style="font-size: 10.5px; color: var(--text-muted); margin: 2px 0 0 0; font-weight: 500;">SD NEGERI WEDUSAN • TAHUN AJARAN 2026/2027</p>
                        </div>
                    </div>
                    
                    <!-- Slip Metadata -->
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; font-size: 11.5px; background: #f8fafc; padding: 8px 12px; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
                        <span><strong>No. Pendaftaran:</strong> <span style="font-family: monospace; font-weight: 700; color: var(--primary);">${regNumber}</span></span>
                        <span><strong>Tanggal:</strong> ${todayStr}</span>
                    </div>
                    
                    <!-- Slip Table Data -->
                    <table style="width: 100%; font-size: 12.5px; border-collapse: collapse;">
                        <tr style="border-bottom: 1px solid #f1f5f9;">
                            <td style="padding: 5px 0; color: var(--text-muted); width: 35%;">Nama Calon Siswa</td>
                            <td style="padding: 5px 0; font-weight: 700; color: var(--secondary);">: ${nama}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #f1f5f9;">
                            <td style="padding: 5px 0; color: var(--text-muted);">NISN / NIK</td>
                            <td style="padding: 5px 0; font-family: monospace; font-weight: 600;">: ${nisn}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #f1f5f9;">
                            <td style="padding: 5px 0; color: var(--text-muted);">Tempat, Tgl Lahir</td>
                            <td style="padding: 5px 0;">: ${ttl}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #f1f5f9;">
                            <td style="padding: 5px 0; color: var(--text-muted);">Jenis Kelamin</td>
                            <td style="padding: 5px 0;">: ${jk}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #f1f5f9;">
                            <td style="padding: 5px 0; color: var(--text-muted);">Nama Orang Tua</td>
                            <td style="padding: 5px 0;">: ${ortu}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #f1f5f9;">
                            <td style="padding: 5px 0; color: var(--text-muted);">Nomor WhatsApp</td>
                            <td style="padding: 5px 0;">: ${wa}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #f1f5f9;">
                            <td style="padding: 5px 0; color: var(--text-muted);">Asal Sekolah / TK</td>
                            <td style="padding: 5px 0;">: ${asalTk}</td>
                        </tr>
                        <tr>
                            <td style="padding: 5px 0; color: var(--text-muted); vertical-align: top;">Alamat Lengkap</td>
                            <td style="padding: 5px 0; line-height: 1.4;">: ${alamat}</td>
                        </tr>
                    </table>
                    
                    <!-- Slip Footer Stamp -->
                    <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-top: 18px; border-top: 1px dashed var(--border-color); padding-top: 12px;">
                        <!-- Barcode Placeholder -->
                        <div style="text-align: center; color: var(--text-muted); font-size: 10px;">
                            <i class="fas fa-barcode" style="font-size: 26px; display: block; margin-bottom: 2px; color: var(--secondary);"></i>
                            <span>VERIFIED SYSTEM</span>
                        </div>
                        
                        <!-- Stamp Place -->
                        <div style="text-align: center; width: 140px;">
                            <span style="font-size: 10px; color: var(--text-muted); display: block; margin-bottom: 30px; font-weight: 500; text-align: center;">Panitia PPDB SDN Wedusan</span>
                            <div style="width: 120px; border-bottom: 1px dotted var(--text-muted); margin: 0 auto;"></div>
                        </div>
                    </div>
                </div>
                
                <!-- Action buttons -->
                <div style="display: flex; gap: 10px; justify-content: center;">
                    <button onclick="window.printSpmbSlip()" class="btn btn-primary" style="background: linear-gradient(135deg, var(--primary), var(--secondary)); border: none; padding: 10px 20px; font-size: 13.5px;"><i class="fas fa-print"></i> Cetak Bukti Pendaftaran</button>
                    <button onclick="window.closeSpmbModal()" class="btn" style="background: #e2e8f0; color: var(--text-main); border: 1px solid var(--border-color); padding: 10px 20px; font-size: 13.5px;">Tutup</button>
                </div>
            </div>
        `;

        document.getElementById("spmb-success-container").innerHTML = successSlipHtml;
        
        // Switch view containers beautifully
        document.getElementById("spmb-form-container").style.display = "none";
        document.getElementById("spmb-success-container").style.display = "block";
        
        showToast("Pendaftaran sukses disimpan di database PPDB luring!", "success");

        // Auto refresh table if active in CRM background
        if (document.getElementById("admin-registrations-modal").classList.contains("active")) {
            window.renderRegistrationsTable();
        }
    };

    window.printSpmbSlip = () => {
        const slip = document.getElementById("printable-spmb-slip");
        if (!slip) return;
        
        const printWindow = window.open("", "_blank");
        printWindow.document.write(`
            <html>
                <head>
                    <title>Bukti Pendaftaran PPDB - SDN Wedusan</title>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
                    <style>
                        body {
                            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                            padding: 30px;
                            color: #334155;
                            background: white;
                        }
                        strong {
                            color: #0f172a;
                        }
                    </style>
                </head>
                <body>
                    <div style="max-width: 580px; margin: 0 auto; border: 1px solid #cbd5e1; border-radius: 8px; padding: 25px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
                        ${slip.innerHTML}
                    </div>
                    <script>
                        window.onload = function() {
                            window.print();
                            setTimeout(function() { window.close(); }, 500);
                        };
                    <\/script>
                </body>
            </html>
        `);
        printWindow.document.close();
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
            type: "image",
            icon: "fa-school",
            base64Image: "",
            imageUrl: "https://sdnwedusan.aksespedia.com/storage/tenants/50/fZxyOX0jIfZ5pDa1hu4tcZnyYt8hjX49vqLs9vTy.png",
            name: "SDN Wedusan",
            tagline: "Mewujudkan Generasi Cerdas & Berkarakter"
        };
        
        document.getElementById("logo-name").value = logo.name;
        document.getElementById("logo-tagline").value = logo.tagline;
        document.getElementById("logo-type").value = logo.type;
        document.getElementById("logo-icon-select").value = logo.icon || "fa-school";
        document.getElementById("logo-base64-image").value = logo.base64Image || "";
        
        const imgEl = document.getElementById("logo-img-preview");
        const logoSrc = logo.base64Image || logo.imageUrl || "";
        if (logoSrc) {
            imgEl.src = logoSrc;
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
            imageUrl: schoolDB.logo.imageUrl || "https://sdnwedusan.aksespedia.com/storage/tenants/50/fZxyOX0jIfZ5pDa1hu4tcZnyYt8hjX49vqLs9vTy.png",
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

    // ==========================================================================
    // OFFLINE CLIENT-SIDE IMAGE COMPRESSION & DATABASE OPTIMIZATION ENGINE
    // ==========================================================================

    // 1. Client-Side Image Compression using HTML5 Canvas
    function compressAndResizeImage(file, maxWidth, maxHeight, quality, callback) {
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                let width = img.width;
                let height = img.height;

                // Adjust dimensions preserving aspect ratio
                if (width > height) {
                    if (width > maxWidth) {
                        height = Math.round((height * maxWidth) / width);
                        width = maxWidth;
                    }
                } else {
                    if (height > maxHeight) {
                        width = Math.round((width * maxHeight) / height);
                        height = maxHeight;
                    }
                }

                const canvas = document.createElement("canvas");
                canvas.width = width;
                canvas.height = height;

                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, width, height);

                // Output compressed high-efficiency JPEG string
                const compressedBase64 = canvas.toDataURL("image/jpeg", quality);
                callback(compressedBase64);
            };
            img.src = event.target.result;
        };
        reader.onerror = () => {
            showToast("Gagal membaca berkas gambar!", "danger");
        };
        reader.readAsDataURL(file);
    }

    // 2. Real-time Database Size Indicator in Admin Top Bar
    function updateDatabaseSizeIndicator() {
        const statusEl = document.getElementById("admin-db-status");
        if (!statusEl) return;
        
        const dbString = localStorage.getItem("school_website_db") || "";
        const sizeBytes = new Blob([dbString]).size;
        const sizeKB = (sizeBytes / 1024).toFixed(1);
        
        statusEl.innerHTML = `<i class="fas fa-database" style="color: #34d399;"></i> Database: ${sizeKB} KB / 5000 KB`;
        
        if (sizeBytes > 4000 * 1024) {
            statusEl.style.color = "#ef4444"; // Danger Red
        } else if (sizeBytes > 2500 * 1024) {
            statusEl.style.color = "#f59e0b"; // Warning Orange
        } else {
            statusEl.style.color = "#94a3b8"; // Neutral Slate
        }
    }

    // 3. One-Click Batch Image Optimizer (Shrinks existing db images)
    window.optimizeExistingDatabase = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        
        showToast("Memulai optimasi database luring...", "success");
        
        const btn = document.getElementById("btn-optimize-db");
        const originalHtml = btn.innerHTML;
        btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Optimasi...`;
        btn.disabled = true;
        
        const dbStringBefore = localStorage.getItem("school_website_db") || "";
        const sizeBefore = new Blob([dbStringBefore]).size;
        
        let imagesToCompress = [];
        
        function checkAndQueue(parentObj, key, maxWidth, maxHeight, quality) {
            if (parentObj && parentObj[key] && parentObj[key].startsWith("data:image/")) {
                const imgStr = parentObj[key];
                // Queue if it is not already small
                if (imgStr.length > 50 * 1024) { 
                    imagesToCompress.push({
                        parent: parentObj,
                        key: key,
                        data: imgStr,
                        maxWidth: maxWidth,
                        maxHeight: maxHeight,
                        quality: quality
                    });
                }
            }
        }
        
        // Scan single key profiles
        if (schoolDB.logo) checkAndQueue(schoolDB.logo, "base64Image", 300, 300, 0.8);
        if (schoolDB.welcome) checkAndQueue(schoolDB.welcome, "base64Image", 400, 400, 0.75);
        if (schoolDB.schoolHistory) checkAndQueue(schoolDB.schoolHistory, "base64Image", 1200, 1200, 0.7);
        
        // Scan list models
        const listSections = [
            { name: "news", maxW: 1200, maxH: 1200, q: 0.7 },
            { name: "facilities", maxW: 1200, maxH: 1200, q: 0.7 },
            { name: "heroSlides", maxW: 1200, maxH: 1200, q: 0.7 },
            { name: "sidebarBanners", maxW: 1200, maxH: 1200, q: 0.7 },
            { name: "programs", maxW: 1200, maxH: 1200, q: 0.7 },
            { name: "agenda", maxW: 1200, maxH: 1200, q: 0.7 },
            { name: "gallery", maxW: 1200, maxH: 1200, q: 0.7 }
        ];
        
        listSections.forEach(section => {
            if (schoolDB[section.name]) {
                schoolDB[section.name].forEach(item => {
                    checkAndQueue(item, "base64Image", section.maxW, section.maxH, section.q);
                });
            }
        });
        
        if (imagesToCompress.length === 0) {
            showToast("Database Anda sudah optimal! Tidak ada gambar besar terdeteksi.", "success");
            btn.innerHTML = originalHtml;
            btn.disabled = false;
            return;
        }
        
        let processedCount = 0;
        
        function processNext() {
            if (processedCount >= imagesToCompress.length) {
                // Done! Save and re-render
                localStorage.setItem("school_website_db", JSON.stringify(schoolDB));
                renderAllDynamicSections();
                
                const dbStringAfter = localStorage.getItem("school_website_db") || "";
                const sizeAfter = new Blob([dbStringAfter]).size;
                const savedKB = ((sizeBefore - sizeAfter) / 1024).toFixed(1);
                const pct = (((sizeBefore - sizeAfter) / sizeBefore) * 100).toFixed(0);
                
                showToast(`Optimasi sukses! Berhasil menghemat ${savedKB} KB (${pct}% lebih ringan).`, "success");
                btn.innerHTML = originalHtml;
                btn.disabled = false;
                return;
            }
            
            const task = imagesToCompress[processedCount];
            const tempImg = new Image();
            tempImg.onload = () => {
                let width = tempImg.width;
                let height = tempImg.height;
                
                if (width > height) {
                    if (width > task.maxWidth) {
                        height = Math.round((height * task.maxWidth) / width);
                        width = task.maxWidth;
                    }
                } else {
                    if (height > task.maxHeight) {
                        width = Math.round((width * task.maxHeight) / height);
                        height = task.maxHeight;
                    }
                }
                
                const canvas = document.createElement("canvas");
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(tempImg, 0, 0, width, height);
                
                task.parent[task.key] = canvas.toDataURL("image/jpeg", task.quality);
                
                processedCount++;
                setTimeout(processNext, 30); // Yield main thread to prevent UI freezing
            };
            tempImg.onerror = () => {
                processedCount++;
                processNext();
            };
            tempImg.src = task.data;
        }
        
        processNext();
    };

    // 4. Integrated Compressed File Upload Event Listeners
    const crudFileInput = document.getElementById("crud-file-input");
    if (crudFileInput) {
        crudFileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            showToast("Sedang memproses dan mengompres foto kegiatan...", "success");
            
            compressAndResizeImage(file, 1200, 1200, 0.7, (compressedBase64) => {
                document.getElementById("crud-base64-image").value = compressedBase64;
                const imgEl = document.getElementById("crud-img-preview");
                imgEl.src = compressedBase64;
                imgEl.style.display = "block";
                
                const origKB = (file.size / 1024).toFixed(1);
                const compKB = (new Blob([compressedBase64]).size / 1024).toFixed(1);
                showToast(`Foto berhasil dikompres: ${origKB} KB -> ${compKB} KB!`, "success");
            });
        });
    }

    const welFileInput = document.getElementById("wel-file-input");
    if (welFileInput) {
        welFileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            showToast("Mengompres foto Kepala Sekolah...", "success");
            
            compressAndResizeImage(file, 400, 400, 0.75, (compressedBase64) => {
                document.getElementById("wel-base64-image").value = compressedBase64;
                const imgEl = document.getElementById("wel-img-preview");
                imgEl.src = compressedBase64;
                imgEl.style.display = "block";
                
                const origKB = (file.size / 1024).toFixed(1);
                const compKB = (new Blob([compressedBase64]).size / 1024).toFixed(1);
                showToast(`Foto Kasek berhasil dikompres: ${origKB} KB -> ${compKB} KB!`, "success");
            });
        });
    }

    const logoFileInput = document.getElementById("logo-file-input");
    if (logoFileInput) {
        logoFileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            showToast("Mengompres logo kustom sekolah...", "success");
            
            compressAndResizeImage(file, 300, 300, 0.8, (compressedBase64) => {
                document.getElementById("logo-base64-image").value = compressedBase64;
                const imgEl = document.getElementById("logo-img-preview");
                imgEl.src = compressedBase64;
                imgEl.style.display = "block";
                
                const origKB = (file.size / 1024).toFixed(1);
                const compKB = (new Blob([compressedBase64]).size / 1024).toFixed(1);
                showToast(`Logo berhasil dikompres: ${origKB} KB -> ${compKB} KB!`, "success");
            });
        });
    }

    const histFileInput = document.getElementById("hist-file-input");
    if (histFileInput) {
        histFileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            showToast("Mengompres foto sejarah sekolah...", "success");
            
            compressAndResizeImage(file, 1200, 1200, 0.7, (compressedBase64) => {
                document.getElementById("hist-base64-image").value = compressedBase64;
                const imgEl = document.getElementById("hist-img-preview");
                imgEl.src = compressedBase64;
                imgEl.style.display = "block";
                
                const previewBox = document.getElementById("hist-img-preview-box");
                if (previewBox.querySelector("p")) previewBox.querySelector("p").style.display = "none";
                if (previewBox.querySelector("i")) previewBox.querySelector("i").style.display = "none";
                
                const origKB = (file.size / 1024).toFixed(1);
                const compKB = (new Blob([compressedBase64]).size / 1024).toFixed(1);
                showToast(`Foto sejarah berhasil dikompres: ${origKB} KB -> ${compKB} KB!`, "success");
            });
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
            const content = document.getElementById("crud-content") ? document.getElementById("crud-content").value.trim() : "";
            
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
                        schoolDB[section][idx].content = content;
                    } else if (section === "facilities") {
                        schoolDB[section][idx].base64Image = base64Image;
                        schoolDB[section][idx].content = content;
                    } else if (section === "heroSlides") {
                        schoolDB[section][idx].badge = badge || "<i class=\"fas fa-school\"></i> Portal";
                        schoolDB[section][idx].base64Image = base64Image;
                    } else if (section === "sidebarBanners") {
                        schoolDB[section][idx].base64Image = base64Image;
                    } else if (section === "programs") {
                        schoolDB[section][idx].base64Image = base64Image;
                    } else if (section === "agenda") {
                        schoolDB[section][idx].badge = badge;
                        schoolDB[section][idx].content = content;
                        schoolDB[section][idx].base64Image = base64Image;
                    } else if (section === "gallery") {
                        schoolDB[section][idx].badge = badge || "1 Foto";
                        schoolDB[section][idx].base64Image = base64Image;
                        schoolDB[section][idx].content = content;
                    } else if (section === "downloads") {
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
                    newItem.content = content;
                } else if (section === "facilities") {
                    newItem.base64Image = base64Image;
                    newItem.content = content;
                } else if (section === "heroSlides") {
                    newItem.badge = badge || "<i class=\"fas fa-school\"></i> Portal";
                    newItem.base64Image = base64Image;
                    newItem.imageUrl = "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800"; // default fallback
                } else if (section === "sidebarBanners") {
                    newItem.base64Image = base64Image;
                } else if (section === "programs") {
                    newItem.base64Image = base64Image;
                } else if (section === "agenda") {
                    newItem.badge = badge;
                    newItem.content = content;
                    newItem.base64Image = base64Image;
                } else if (section === "gallery") {
                    newItem.badge = badge || "1 Foto";
                    newItem.base64Image = base64Image;
                    newItem.content = content;
                    newItem.date = new Date().toLocaleDateString('id-ID', {day: 'numeric', month: 'short', year: 'numeric'});
                } else if (section === "downloads") {
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
