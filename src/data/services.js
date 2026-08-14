const services = [
  {
    id: 'konseling-individu',
    mark: 'Ind',
    title: 'Konseling Individu',
    short: 'Ruang aman satu lawan satu untuk memahami diri, mengelola tekanan, dan menemukan arah.',
    description:
      'Sesi konseling individu dirancang sebagai ruang privat antara Anda dan psikolog untuk mengeksplorasi kecemasan, kesedihan, tekanan pekerjaan, relasi, hingga transisi hidup. Kami menggunakan pendekatan berbasis bukti yang disesuaikan dengan cerita dan kecepatan Anda sendiri — bukan sebaliknya.',
    duration: '60 menit / sesi',
    format: 'Tatap muka atau daring',
    forWhom: ['Dewasa muda & profesional', 'Mahasiswa', 'Siapa pun yang butuh ruang bicara tanpa penghakiman'],
  },
  {
    id: 'konseling-pasangan',
    mark: 'Psg',
    title: 'Konseling Pasangan',
    short: 'Memperbaiki komunikasi, menyelesaikan konflik berulang, dan membangun kembali kepercayaan.',
    description:
      'Ditujukan untuk pasangan yang ingin memperbaiki pola komunikasi, mengatasi konflik yang berulang, atau memutuskan langkah besar bersama. Psikolog berperan sebagai fasilitator netral yang membantu kedua pihak didengar secara setara.',
    duration: '75 menit / sesi',
    format: 'Tatap muka, disarankan hadir berdua',
    forWhom: ['Pasangan menikah', 'Pasangan pranikah', 'Pasangan yang menghadapi masa transisi'],
  },
  {
    id: 'psikologi-anak-remaja',
    mark: 'A&R',
    title: 'Psikologi Anak & Remaja',
    short: 'Pendampingan tumbuh kembang, kesulitan belajar, emosi, dan perilaku pada anak dan remaja.',
    description:
      'Layanan ini mencakup observasi, asesmen ringan, dan pendampingan bagi anak dan remaja yang mengalami kesulitan belajar, regulasi emosi, atau perubahan perilaku. Orang tua dilibatkan secara aktif dalam setiap tahap proses.',
    duration: '45–60 menit / sesi',
    format: 'Tatap muka, didampingi orang tua/wali',
    forWhom: ['Anak usia 6–12 tahun', 'Remaja 13–18 tahun', 'Orang tua yang butuh panduan pengasuhan'],
  },
  {
    id: 'psikotes-karier',
    mark: 'Tes',
    title: 'Psikotes & Asesmen Karier',
    short: 'Pemetaan minat, bakat, dan kepribadian untuk keputusan studi atau karier yang lebih tepat.',
    description:
      'Rangkaian tes psikologi terstandardisasi untuk memetakan potensi kognitif, minat, dan kepribadian. Hasil disampaikan melalui laporan tertulis dan sesi feedback tatap muka bersama psikolog agar mudah dipahami dan ditindaklanjuti.',
    duration: '2–3 jam pengerjaan + 1 sesi feedback',
    format: 'Tatap muka di klinik',
    forWhom: ['Siswa SMA yang memilih jurusan', 'Pencari kerja', 'Karyawan yang mempertimbangkan pindah jalur karier'],
  },
  {
    id: 'terapi-trauma',
    mark: 'Tra',
    title: 'Terapi Trauma',
    short: 'Pendampingan pemulihan dari pengalaman traumatis dengan pendekatan yang aman dan bertahap.',
    description:
      'Proses terapi yang berjalan bertahap dan berbasis kesiapan klien untuk memproses pengalaman traumatis, dengan tujuan mengurangi dampaknya terhadap keseharian dan relasi. Kecepatan proses sepenuhnya mengikuti kenyamanan Anda.',
    duration: '60 menit / sesi',
    format: 'Tatap muka, jangka menengah–panjang',
    forWhom: ['Penyintas peristiwa traumatis', 'Orang dengan gejala kecemasan pasca-kejadian tertentu'],
  },
  {
    id: 'konsultasi-korporat',
    mark: 'Kor',
    title: 'Konsultasi Korporat',
    short: 'Program kesehatan mental karyawan, pelatihan, dan asesmen untuk kebutuhan organisasi.',
    description:
      'Kami bekerja sama dengan perusahaan untuk merancang program kesehatan mental karyawan, mulai dari sesi psikoedukasi, pelatihan manajerial, hingga layanan konseling berkala bagi tim internal.',
    duration: 'Disesuaikan dengan kebutuhan',
    format: 'Di lokasi perusahaan atau daring',
    forWhom: ['Divisi HR & People', 'Tim manajerial', 'Perusahaan yang membangun budaya kerja sehat'],
  },
]

export default services
