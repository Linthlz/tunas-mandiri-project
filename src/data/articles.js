import asset1 from '../img/asset1.jpg'
import asset2 from '../img/asset2.jpg'
import asset3 from '../img/asset3.jpg'
import asset4 from '../img/asset4.jpg'

const articles = [
  {
    id: 'mengenali-tanda-burnout',
    category: 'Kesehatan Kerja',
    title: 'Mengenali Tanda-Tanda Burnout Sebelum Terlambat',
    excerpt:
      'Burnout tidak datang tiba-tiba. Kenali pola-pola halus yang sering diabaikan sebelum berdampak pada kesehatan dan pekerjaan Anda.',
    date: '12 Jul 2026',
    readTime: '6 menit baca',
    content: [
      'Burnout sering digambarkan sebagai kelelahan yang datang tiba-tiba, padahal prosesnya biasanya bertahap dan mudah diabaikan pada tahap awal.',
      'Tanda paling umum meliputi sulit fokus pada tugas sederhana, mudah tersinggung terhadap hal kecil, dan kehilangan rasa pencapaian atas pekerjaan yang dulu terasa bermakna.',
      'Langkah pertama yang membantu adalah mengenali pemicu spesifik, bukan sekadar merasa "capek secara umum". Mencatat pola energi harian selama satu hingga dua minggu bisa membantu memetakan hal ini.',
      'Jika tanda-tanda ini berlangsung lebih dari beberapa minggu dan mulai memengaruhi relasi atau kesehatan fisik, berbicara dengan psikolog dapat membantu menyusun langkah pemulihan yang lebih terarah.',
    ],
    image: asset1,
  },
  {
    id: 'komunikasi-sehat-dalam-hubungan',
    category: 'Relasi',
    title: 'Membangun Komunikasi yang Sehat dalam Hubungan',
    excerpt:
      'Sebagian besar konflik dalam hubungan bukan soal siapa benar dan salah, melainkan soal cara menyampaikan dan mendengarkan.',
    date: '28 Jun 2026',
    readTime: '5 menit baca',
    content: [
      'Banyak pasangan berdebat tentang topik yang sama berulang kali bukan karena masalahnya besar, tetapi karena pola komunikasinya belum menemukan jalan yang tepat.',
      'Salah satu kebiasaan yang membantu adalah memisahkan antara menyampaikan perasaan dan menyampaikan tuduhan. Kalimat yang dimulai dengan "saya merasa" cenderung lebih mudah diterima dibanding "kamu selalu".',
      'Mendengarkan tanpa langsung menyusun pembelaan diri juga menjadi keterampilan yang perlu dilatih, bukan sesuatu yang otomatis dimiliki setiap orang.',
      'Jika pola konflik terasa berulang dan sulit diselesaikan berdua, konseling pasangan dapat membantu menyediakan ruang netral untuk memperbaikinya.',
    ],
    image: asset2,
  },
  {
    id: 'mendampingi-anak-cemas-sekolah',
    category: 'Anak & Remaja',
    title: 'Mendampingi Anak yang Cemas Menghadapi Sekolah',
    excerpt:
      'Kecemasan pada anak sering muncul lewat keluhan fisik atau penolakan pergi sekolah. Berikut cara mendampinginya dengan tepat.',
    date: '15 Jun 2026',
    readTime: '7 menit baca',
    content: [
      'Anak yang cemas seringkali belum memiliki kosakata untuk menjelaskan apa yang dirasakannya, sehingga muncul dalam bentuk sakit perut, sulit tidur, atau menolak berangkat sekolah.',
      'Orang tua dapat mulai dengan memvalidasi perasaan tanpa langsung meyakinkan bahwa "tidak ada yang perlu ditakutkan" — validasi membuat anak merasa didengar sebelum diajak mencari solusi.',
      'Membangun rutinitas pagi yang lebih tenang dan konsisten juga terbukti membantu menurunkan tingkat kecemasan sebelum berangkat sekolah.',
      'Bila kecemasan berlangsung lama atau semakin mengganggu keseharian, pendampingan psikolog anak dapat membantu memetakan akar penyebab secara lebih mendalam.',
    ],
    image: asset3,
  },
  {
    id: 'memilih-jurusan-lewat-psikotes',
    category: 'Karier',
    title: 'Memilih Jurusan Kuliah: Kapan Psikotes Benar-Benar Membantu',
    excerpt:
      'Psikotes bukan sekadar tebakan angka. Berikut cara membaca hasil tes minat dan bakat agar benar-benar berguna dalam mengambil keputusan.',
    date: '2 Jun 2026',
    readTime: '5 menit baca',
    content: [
      'Psikotes minat dan bakat paling berguna ketika digunakan sebagai bahan diskusi, bukan sebagai jawaban tunggal yang menentukan segalanya.',
      'Hasil tes idealnya dibaca bersama dengan minat pribadi, kondisi ekonomi keluarga, dan peluang yang realistis, bukan berdiri sendiri.',
      'Sesi feedback bersama psikolog menjadi bagian penting karena membantu menerjemahkan angka dan kategori menjadi langkah konkret yang bisa diambil.',
      'Psikotes paling ideal dilakukan menjelang masa pengambilan keputusan besar, seperti akhir kelas 11 SMA, agar hasilnya masih relevan saat digunakan.',
    ],
    image: asset4,
  },
]

export default articles
