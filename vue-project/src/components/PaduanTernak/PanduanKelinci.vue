<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import kelinciImage from '@/assets/images/Kelinci.jpg';

const router = useRouter();
const showFloatingButton = ref(false);

const goBack = () => {
  router.push('/paduan-ternak');
};

const handleScroll = () => {
  showFloatingButton.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <Navbar />
    
    <!-- Hero Image Section -->
    <div class="relative h-96 md:h-[500px] overflow-hidden">
      <img 
        :src="kelinciImage" 
        alt="Ternak Kelinci"
        class="w-full h-full object-cover"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 p-8 md:p-12">
        <div class="max-w-6xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
            Panduan Lengkap Beternak Kelinci di Balikpapan
          </h1>
          <p class="text-gray-200 text-lg">
            Panduan praktis beternak kelinci pedaging untuk pemula hingga profesional
          </p>
        </div>
      </div>
    </div>

    <!-- Floating Back Button -->
    <transition name="fade">
      <button 
        v-if="showFloatingButton"
        @click="goBack"
        class="fixed bottom-8 right-8 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50 group"
        title="Kembali ke Daftar Panduan"
      >
        <svg class="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
        </svg>
      </button>
    </transition>

    <!-- Back Button -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <button 
        @click="goBack"
        class="flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-medium transition-colors group"
      >
        <svg class="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
        </svg>
        Kembali ke Daftar Panduan
      </button>
    </div>

    <!-- Content Section -->
    <article class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div class="bg-white rounded-xl shadow-lg p-8 md:p-12">
        
        <!-- Pendahuluan -->
        <section class="mb-12">
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            Beternak kelinci di Balikpapan sangat menguntungkan dengan ROI (Return on Investment) tertinggi dibanding ternak lain karena reproduksi super cepat, 
            siklus panen pendek (3 bulan), dan tidak butuh lahan luas (cocok untuk rumahan/urban farming). Tantangan utama adalah manajemen suhu di iklim tropis Balikpapan 
            (kelinci sangat sensitif panas >28°C bisa stress, >32°C bisa heat stroke fatal!). Dengan 10 indukan saja, bisa hasilkan 150-200 kelinci/tahun dengan keuntungan 
            bersih Rp 6-8 juta/bulan! Kunci suksesnya: kontrol suhu maksimal, kandang individual, pakan hijauan+konsentrat seimbang, dan deteksi penyakit dini. 
            Pasar kelinci terus berkembang: restoran sate kelinci, pasar tradisional, pet shop, bahkan olahan frozen (sate beku, nugget, abon) dengan margin 2-3x lipat!
          </p>
        </section>

        <!-- I. Pengenalan Ternak Kelinci -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-200">
            I. Pengenalan Ternak Kelinci
          </h2>
          
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">A. Jenis-Jenis Kelinci Ternak untuk Balikpapan</h3>
            
            <!-- Kelinci New Zealand White -->
            <div class="bg-emerald-50 rounded-lg p-6 mb-4">
              <h4 class="text-xl font-semibold text-emerald-900 mb-3">1. Kelinci New Zealand White (NZW) - Raja Kelinci Pedaging</h4>
              <div class="space-y-3">
                <p class="text-gray-700">
                  <strong class="text-emerald-700">Deskripsi:</strong> Kelinci pedaging nomor 1 dunia dengan pertumbuhan super cepat dan konversi pakan sangat efisien. 
                  Bulu putih bersih sempurna, mata merah (albino), telinga tegak medium, tubuh kompak dan berotot ideal untuk daging. Bobot dewasa 4-5 kg 
                  (betina lebih besar dari jantan). Temperamen jinak, mudah handling, cocok untuk pemula.
                </p>
                <ul class="ml-6 mt-2 space-y-2">
                  <li class="text-gray-700"><strong class="text-emerald-700">Keunggulan Utama:</strong> Pertumbuhan sangat cepat (0 → 2-2,5 kg hanya dalam 10-12 minggu!), persentase karkas tinggi 50-55% (lebih tinggi dari kelinci lokal 45%), FCR (Feed Conversion Ratio) efisien 3,5-4,5 (butuh 3,5-4,5 kg pakan untuk 1 kg pertambahan bobot), produktivitas tinggi 6-8 anak per kelahiran, jinak dan mudah dipelihara bahkan untuk pemula, permintaan pasar sangat tinggi (restoran suka karena ukuran seragam dan daging putih bersih)</li>
                  <li class="text-gray-700"><strong class="text-emerald-700">Kelemahan dan Tantangan:</strong> SANGAT sensitif suhu panas! Suhu ideal 18-24°C, di atas 28°C mulai stress (nafsu makan turun, pertumbuhan lambat), di atas 32°C bisa heat stroke dan mati mendadak! Di Balikpapan WAJIB ada sistem pendingin (kipas, fogging/mist spray, kandang teduh). Butuh pakan berkualitas tinggi (protein 16-18%) agar pertumbuhan optimal, harga bibit mahal Rp 200.000-350.000/ekor (tapi worth it karena produktivitas tinggi), rentan penyakit pernapasan (snuffles) jika kandang lembap atau amonia tinggi</li>
                  <li class="text-gray-700"><strong class="text-emerald-700">Rekomendasi:</strong> Cocok untuk peternak serius yang mau investasi sistem pendingin dan pakan berkualitas. Target pasar restoran/hotel yang butuh kelinci premium ukuran besar dan seragam. ROI sangat tinggi jika manajemen suhu berhasil!</li>
                </ul>
              </div>
            </div>

            <!-- Kelinci Rex -->
            <div class="bg-emerald-50 rounded-lg p-6 mb-4">
              <h4 class="text-xl font-semibold text-emerald-900 mb-3">2. Kelinci Rex - Kelinci Dwiguna (Daging + Kulit Premium)</h4>
              <div class="space-y-3">
                <p class="text-gray-700">
                  <strong class="text-emerald-700">Deskripsi:</strong> Kelinci mewah dengan bulu unik pendek, halus, dan padat seperti beludru/velvet (karena gen mutan resesif yang bikin guard hair pendek sama panjang dengan undercoat). 
                  Beragam warna cantik: putih, coklat (castor), hitam, biru (grey), broken (belang). Telinga tegak proporsional, mata bulat ekspresif, tubuh medium kompak. 
                  Bobot dewasa 3,5-4,5 kg. Temperamen tenang dan friendly, populer sebagai show rabbit (kontes kelinci) dan pet rabbit mewah.
                </p>
                <ul class="ml-6 mt-2 space-y-2">
                  <li class="text-gray-700"><strong class="text-emerald-700">Keunggulan Utama:</strong> Nilai jual kulit SANGAT TINGGI Rp 150.000-300.000/lembar (kulit Rex premium untuk jaket, tas, sepatu branded karena tekstur beludru unik), daging lembut, gurih, dan rendah kolesterol (disukai konsumen health-conscious), lebih toleran panas dibanding NZW (masih bisa survive 28-30°C meski tetap butuh ventilasi baik), tampilannya sangat menarik untuk dijual sebagai hewan hias/pet (harga pet Rex Rp 300.000-800.000/ekor!), potensi dual income: jual daging + jual kulit + jual anak untuk pet</li>
                  <li class="text-gray-700"><strong class="text-emerald-700">Kelemahan dan Tantangan:</strong> Pertumbuhan lebih lambat dari NZW (butuh 14-16 minggu untuk capai 2 kg), harga bibit mahal Rp 300.000-500.000/ekor karena genetik khusus, populasi anak per kelahiran lebih sedikit 5-7 ekor (vs NZW 6-8 ekor), pasar kulit Rex butuh networking dengan pengrajin kulit/industri fashion (tidak semudah jual daging)</li>
                  <li class="text-gray-700"><strong class="text-emerald-700">Rekomendasi:</strong> Cocok untuk peternak yang ingin diversifikasi produk (daging + kulit + pet). Target pasar mid-high class yang apresiasi kualitas. Cocok dikombinasi dengan bisnis olahan kulit atau kerjasama dengan pengrajin leather goods.</li>
                </ul>
              </div>
            </div>

            <!-- Kelinci Lokal -->
            <div class="bg-emerald-50 rounded-lg p-6 mb-4">
              <h4 class="text-xl font-semibold text-emerald-900 mb-3">3. Kelinci Lokal/Campuran - Si Tangguh Adaptif</h4>
              <div class="space-y-3">
                <p class="text-gray-700">
                  <strong class="text-emerald-700">Deskripsi:</strong> Kelinci hasil adaptasi lokal atau persilangan tidak terencana dari berbagai ras (NZW x lokal, Rex x lokal, dll) yang sudah beradaptasi dengan iklim tropis Indonesia. 
                  Variasi warna sangat beragam: totol hitam-putih, coklat, abu-abu, campuran warna. Ukuran medium kecil (bobot dewasa 2,5-3,5 kg), tubuh kompak dan lincah. 
                  Temperamen hardy (tahan banting), adaptif, dan tidak rewel.
                </p>
                <ul class="ml-6 mt-2 space-y-2">
                  <li class="text-gray-700"><strong class="text-emerald-700">Keunggulan Utama:</strong> SANGAT ADAPTIF dengan cuaca panas Balikpapan (evolved untuk survive >30°C tanpa AC/kipas fancy), tahan penyakit luar biasa (sistem imun kuat karena seleksi alam), murah dan mudah didapat (Rp 80.000-150.000/ekor, bahkan bisa dapat gratis dari peternak lokal), tidak rewel pakan (bisa hidup dengan hijauan lokal saja tanpa konsentrat mahal), cocok untuk pemula dengan modal minim, risiko kematian rendah (survival rate >85%)</li>
                  <li class="text-gray-700"><strong class="text-emerald-700">Kelemahan dan Tantangan:</strong> Pertumbuhan lambat (butuh 16-20 minggu untuk capai 1,5-2 kg), bobot panen kecil dan tidak seragam (1,2-2 kg tergantung genetik), kualitas daging kurang optimal (lebih alot, lemak kurang, tidak disukai restoran high-end), produktivitas rendah 4-6 anak per kelahiran, harga jual rendah Rp 70.000-90.000/kg (vs NZW Rp 100.000-120.000/kg)</li>
                  <li class="text-gray-700"><strong class="text-emerald-700">Rekomendasi:</strong> Sangat cocok untuk pemula yang ingin belajar beternak kelinci dengan modal minim dan risiko rendah. Target pasar tradisional/warung makan biasa (bukan premium). Setelah menguasai teknik dasar, bisa upgrade ke NZW atau Rex untuk profit lebih besar.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- II. Manajemen Pemeliharaan -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-emerald-800 mb-6 pb-3 border-emerald-200">
            II. Manajemen Pemeliharaan
          </h2>
          
          <!-- A. Kandang dan Lingkungan -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">A. Kandang dan Lingkungan</h3>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Tipe Kandang Ideal untuk Balikpapan</h4>
              <div class="space-y-3">
                <div class="text-gray-700">
                  <p class="mb-2"><strong class="text-emerald-700">Kandang Baterai/Individual (PALING DIREKOMENDASIKAN!):</strong></p>
                  <ul class="ml-6 mt-2 space-y-2">
                    <li>• <strong>Ukuran standar:</strong> 60 cm (panjang) x 50 cm (lebar) x 40 cm (tinggi) per ekor dewasa. Untuk induk bunting/menyusui: 70x60x45 cm (perlu space untuk glodok/kotak beranak)</li>
                    <li>• <strong>Keunggulan sistem baterai:</strong> Kelinci tidak berkelahi (kelinci territorial, bisa berantem sampai luka serius!), mudah kontrol individu (makan, kesehatan, reproduksi), lebih higienis (kotoran tidak bercampur), hemat tempat dengan sistem susun bertingkat 2-3 tingkat</li>
                    <li>• <strong>Material lantai:</strong> Kawat RAM ukuran mesh 1,5 cm atau bambu bilah dengan celah 1-1,5 cm. JANGAN pakai kawat terlalu besar (kaki kelinci masuk celah dan patah) atau terlalu rapat (kotoran menumpuk). Fungsi: kotoran dan urin jatuh langsung ke bawah, kaki kelinci tetap kering dan bersih, cegah penyakit kaki (bumblefoot/sore hock)</li>
                    <li>• <strong>Konstruksi rangka:</strong> Kayu meranti/kamper (tahan lama) atau besi hollow (lebih mahal tapi awet puluhan tahun). Hindari kayu murah yang cepat lapuk karena urin kelinci sangat korosif!</li>
                    <li>• <strong>Atap kandang:</strong> Asbes gelombang atau seng TAPI WAJIB ada insulasi/plafon (plafon gypsum, styrofoam 3-5 cm, atau atap ganda dengan jarak 30 cm untuk sirkulasi udara). Tanpa insulasi, siang hari suhu dalam kandang bisa 40°C+ = kelinci mati kepanasan!</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Manajemen Suhu (KUNCI SUKSES DI BALIKPAPAN!)</h4>
              <div class="p-4 bg-red-100 border-l-4 border-red-500 rounded mb-4">
                <p class="text-red-800 font-semibold">🔥 PERINGATAN KRITIS: Kelinci SANGAT sensitif panas! Suhu ideal 18-24°C. Suhu 28-30°C = stress (nafsu makan turun 30-40%, pertumbuhan lambat). Suhu >32°C = heat stroke fatal (napas cepat, lemas, kejang, MATI dalam 1-2 jam!). Manajemen suhu adalah faktor #1 kegagalan/kesuksesan ternak kelinci di Balikpapan!</p>
              </div>
              <div class="space-y-3 text-gray-700">
                <div>
                  <p class="font-semibold text-emerald-700 mb-2">Strategi Pendinginan Wajib:</p>
                  <ul class="ml-6 space-y-2">
                    <li>• <strong>Ventilasi maksimal silang (cross ventilation):</strong> Pasang banyak lubang angin/jendela di dinding kandang (30-40% luas dinding harus terbuka untuk aliran udara). Buat lubang di sisi berlawanan untuk ventilasi silang. Sirkulasi udara adalah kunci utama!</li>
                    <li>• <strong>Kipas angin/exhaust fan:</strong> WAJIB nyalakan saat jam 10 pagi - 4 sore (jam terpanas). Pasang 2-3 kipas angin besar untuk kandang 20-30 ekor. Atau pakai exhaust fan untuk hisap udara panas keluar. Biaya listrik Rp 200.000-300.000/bulan tapi ini investasi penting untuk survival kelinci!</li>
                    <li>• <strong>Teduh alami maksimal:</strong> Lokasi kandang di bawah pohon besar (mangga, rambutan, nangka) atau buat naungan tambahan paranet 70-80%. Hindari sinar matahari langsung mengenai kandang!</li>
                    <li>• <strong>Sistem fogging/mist spray:</strong> Pasang nozzle kabut (Rp 150.000-300.000 untuk sistem sederhana) yang semprot kabut air halus saat suhu >30°C. Kabut air turunkan suhu lingkungan 3-5°C. Jangan semprot langsung ke kelinci (basah = sakit), semprot di udara/atap kandang saja</li>
                    <li>• <strong>Lantai/ubin keramik dingin:</strong> Taruh keramik/granite tile 30x30 cm di pojok kandang. Kelinci bisa rebahan di atas keramik dingin saat kepanasan. Ini life-saver saat heat wave!</li>
                    <li>• <strong>Ganti air minum sering:</strong> Air harus dingin dan segar, ganti 2-3x/hari saat panas (pagi, siang, sore). Kelinci minum banyak saat panas untuk regulasi suhu tubuh. Air hangat = kelinci tidak mau minum = dehidrasi = mati!</li>
                    <li>• <strong>Pakan malam hari:</strong> Beri porsi pakan terbesar saat malam/dini hari (jam 5-6 sore dan jam 9-10 malam) saat suhu sudah turun. Kelinci makan lebih lahap saat sejuk, pencernaan lebih baik</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Sanitasi dan Kebersihan Kandang</h4>
              <div class="space-y-3 text-gray-700">
                <ul class="ml-6 space-y-2">
                  <li>• <strong>Buang kotoran setiap hari:</strong> WAJIB! Kotoran kelinci cair-padat campur urin, menumpuk 1 hari = amonia tinggi = iritasi mata dan pernapasan kelinci = penyakit snuffles (pilek kronis). Sapu/sikat kotoran yang jatuh di bawah kandang setiap pagi dan sore</li>
                  <li>• <strong>Cuci kandang mingguan:</strong> Seminggu sekali, angkat kelinci sementara, semprot kandang dengan air bersih + sikat bagian kotor. Keringkan sempurna sebelum kelinci dimasukkan lagi (kandang basah = jamur dan bakteri tumbuh)</li>
                  <li>• <strong>Desinfeksi bulanan:</strong> Sebulan sekali, kosongkan kandang, cuci total dengan desinfektan (Virkon-S, Lysol, atau larutan klorin 1%), bilas bersih, jemur di matahari 4-6 jam untuk bunuh semua patogen. Ini penting untuk break siklus penyakit</li>
                  <li>• <strong>Tempat pakan dan minum:</strong> Cuci setiap hari dengan sabun, bilas bersih. Sisa pakan basi di tempat pakan = jamur = aflatoksin = racun untuk kelinci!</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- B. Pakan dan Nutrisi -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">B. Pakan dan Nutrisi</h3>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Komposisi Pakan Ideal untuk Kelinci Pedaging</h4>
              <div class="space-y-3 text-gray-700">
                <p class="mb-3">Kelinci adalah <strong class="text-emerald-700">herbivora sejati dengan sistem pencernaan unik (hindgut fermenter)</strong>. Mereka butuh serat tinggi untuk kesehatan saluran cerna. Formula ideal: <strong>70% hijauan + 30% konsentrat</strong>.</p>
                
                <div class="mb-3">
                  <p class="font-semibold text-emerald-700">Hijauan (70% dari total pakan):</p>
                  <ul class="ml-6 mt-2 space-y-1">
                    <li>• <strong>Rumput gajah/king grass:</strong> Hijauan utama, serat tinggi, murah, mudah ditanam. Potong saat tinggi 80-100 cm (sebelum berbatang keras). Cacah 5-10 cm untuk mudah dimakan</li>
                    <li>• <strong>Daun turi, lamtoro, gamal:</strong> Legum protein tinggi (18-22%), bagus untuk pertumbuhan. Tapi JANGAN berlebihan (max 30% dari hijauan) karena bisa kembung. Campur dengan rumput</li>
                    <li>• <strong>Daun singkong/ubi kayu:</strong> Protein 20-25%, vitamin A tinggi. Layu-layukan 4-6 jam sebelum kasih (daun segar ada HCN/racun sianida ringan)</li>
                    <li>• <strong>Daun kangkung, bayam, sawi:</strong> Sayuran tambahan. WAJIB dilayukan 2-3 jam (jangan kasih segar/basah = diare fatal!)</li>
                    <li>• <strong>Jerami padi/tebon jagung:</strong> Serat kasar tinggi, bagus untuk kesehatan gigi dan cerna. Lebih cocok untuk maintenance dewasa daripada pertumbuhan</li>
                  </ul>
                </div>

                <div>
                  <p class="font-semibold text-emerald-700">Konsentrat/Pelet (30% dari total pakan):</p>
                  <ul class="ml-6 mt-2 space-y-1">
                    <li>• <strong>Pelet kelinci komersial:</strong> Paling praktis! Pilih yang protein 16-18% (untuk grower/penggemukan) atau 18-20% (untuk indukan bunting/laktasi). Merek: CP, Comfeed, Japfa, dll. Harga Rp 8.000-10.000/kg</li>
                    <li>• <strong>Racikan sendiri (lebih murah 30-40%):</strong> Dedak halus 40% + jagung giling 30% + bungkil kedelai 15% + bungkil kelapa sawit 8% + tepung ikan 5% + premix vitamin mineral 1,5% + garam 0,5%. Protein target 16-18%, serat 12-14%</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Kebutuhan Pakan Berdasarkan Fase</h4>
              <div class="overflow-x-auto">
                <table class="min-w-full border-collapse border border-emerald-200">
                  <thead>
                    <tr class="bg-emerald-100 text-emerald-800">
                      <th class="border border-emerald-200 px-4 py-3 text-left font-semibold">Fase/Kategori</th>
                      <th class="border border-emerald-200 px-4 py-3 text-left font-semibold">Umur</th>
                      <th class="border border-emerald-200 px-4 py-3 text-left font-semibold">Hijauan/Hari</th>
                      <th class="border border-emerald-200 px-4 py-3 text-left font-semibold">Konsentrat/Hari</th>
                      <th class="border border-emerald-200 px-4 py-3 text-left font-semibold">Keterangan</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-emerald-200">
                    <tr class="bg-white hover:bg-emerald-50 transition-colors">
                      <td class="border border-emerald-200 px-4 py-3 font-medium text-gray-800">Anak Lepas Sapih</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">6-12 minggu</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">50-80 gram</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">30-50 gram</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">Fase kritis! Butuh protein tinggi 18% untuk pertumbuhan cepat. Hijauan halus/muda</td>
                    </tr>
                    <tr class="bg-gray-50 hover:bg-emerald-50 transition-colors">
                      <td class="border border-emerald-200 px-4 py-3 font-medium text-gray-800">Grower (Penggemukan)</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">12 minggu - panen</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">120-150 gram</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">50-70 gram</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">Target ADG (Average Daily Gain) 25-35 gram/hari. Panen umur 10-12 minggu (2-2,5 kg)</td>
                    </tr>
                    <tr class="bg-white hover:bg-emerald-50 transition-colors">
                      <td class="border border-emerald-200 px-4 py-3 font-medium text-gray-800">Indukan Dewasa</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">>6 bulan</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">150-180 gram</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">60-80 gram</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">Maintenance. Jangan terlalu gemuk (susah bunting). Body score ideal 3/5</td>
                    </tr>
                    <tr class="bg-gray-50 hover:bg-emerald-50 transition-colors">
                      <td class="border border-emerald-200 px-4 py-3 font-medium text-gray-800">Indukan Bunting & Laktasi</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">-</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">180-220 gram</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">80-120 gram</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">Kebutuhan nutrisi tinggi! Protein 18-20%. Tambah 20-30% saat menyusui (produksi susu banyak)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Jadwal Pemberian Pakan</h4>
              <div class="space-y-3 text-gray-700">
                <ul class="ml-6 space-y-2">
                  <li>• <strong>Pagi (06:00-07:00):</strong> Hijauan segar (sudah dilayukan semalam) + konsentrat/pelet. Porsi 40% dari total harian</li>
                  <li>• <strong>Sore (17:00-18:00):</strong> Hijauan segar + konsentrat/pelet. Porsi 60% dari total harian (kelinci lebih aktif malam, berikan porsi lebih besar di sore)</li>
                  <li>• <strong>Air minum:</strong> SELALU tersedia 24/7! Ganti 2-3x/hari saat panas. Kelinci minum banyak (100-150 ml/kg bobot badan/hari). Dehidrasi = mati cepat!</li>
                  <li>• <strong>PENTING:</strong> Jangan beri sayuran basah/berkelebihan air → DIARE FATAL! Layu-layukan semua hijauan 2-4 jam sebelum kasih ke kelinci. Hijauan yang sudah layu: kadar air turun, serat lebih padat, aman untuk pencernaan</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- III. Kesehatan dan Pencegahan Penyakit -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-200">
            III. Kesehatan dan Pencegahan Penyakit
          </h2>
          
          <!-- A. Penyakit Umum -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">A. Penyakit Umum pada Kelinci</h3>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">1. Snuffles (Pilek/Flu Kelinci) - Penyakit Pernapasan #1</h4>
              <div class="space-y-3 text-gray-700">
                <p><strong class="text-emerald-700">Penyebab:</strong> Bakteri Pasteurella multocida (paling umum), kadang Bordetella bronchiseptica atau Staphylococcus. Penularan lewat udara (bersin kelinci sakit ke kelinci sehat), kontak langsung (hidung ke hidung), atau dari induk ke anak. Faktor pemicu: kandang lembap, amonia tinggi dari kotoran, stress, suhu ekstrem, ventilasi buruk</p>
                <p><strong class="text-emerald-700">Gejala Klinis:</strong> Bersin-bersin terus menerus (>10x/hari), hidung berlendir putih kental atau hijau kekuningan (nanah = infeksi sekunder), mata berair atau keluar air mata putih keruh, napas berbunyi "ngik-ngik" atau mendengkur (nasal discharge blok saluran napas), kelinci sering garuk-garuk hidung dengan kaki depan (gatal dan tidak nyaman), nafsu makan turun (sulit napas = tidak mood makan), lemas dan tidak aktif. Stadium lanjut: pneumonia (radang paru), abses di hidung/telinga, torticollis (kepala miring karena infeksi telinga dalam = inner ear infection)</p>
                <p><strong class="text-emerald-700">Penanganan dan Pengobatan:</strong> Segera isolasi kelinci sakit (jangan campur dengan kelinci sehat, Pasteurella sangat menular!). Antibiotik spektrum luas: Enrofloxacin (Baytril) 5-10 mg/kg sekali sehari selama 7-14 hari, atau Doxycycline 2,5-5 mg/kg dua kali sehari 10-14 hari. Bersihkan hidung kelinci dengan kapas basah air hangat 2-3x/hari. Nebulizer/steam therapy: uap air hangat + essential oil eucalyptus 5 menit 2x/hari untuk bantu buka saluran napas. Vitamin C 50 mg/hari untuk boost imun. PENTING: Snuffles kronis sulit sembuh total (Pasteurella bersembunyi di sinus), bisa kambuh saat stress/imun turun</p>
                <p><strong class="text-emerald-700">Pencegahan:</strong> Ventilasi kandang MAKSIMAL (ini kunci utama!), buang kotoran setiap hari untuk hindari amonia tinggi, jaga kelembapan rendah <70% (kandang kering), hindari kandang overcrowding (max 1 ekor/0,3 m²), karantina kelinci baru 14 hari sebelum gabung dengan koloni, cuci tangan setelah pegang kelinci sakit sebelum pegang yang sehat, desinfeksi kandang rutin mingguan</p>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">2. Bloat/Kembung (Gastrointestinal Stasis) - Pembunuh Diam-Diam</h4>
              <div class="space-y-3 text-gray-700">
                <p><strong class="text-emerald-700">Penyebab:</strong> Penumpukan gas berlebihan di saluran cerna akibat fermentasi tidak terkontrol. Penyebab umum: hijauan basah/berkelebihan air (sayur segar langsung tanpa dilayukan), perubahan pakan mendadak (sistem cerna kelinci butuh adaptasi bertahap 7-10 hari), pemberian legum segar berlebihan (turi, lamtoro → fermentasi cepat), dehidrasi (air minum habis/tidak tersedia), hairball/bola rambut di lambung (kelinci grooming telan bulu), stress akut (pindah kandang, predator), penyakit gigi (gigi terlalu panjang/malocclusion → tidak bisa kunyah serat panjang)</p>
                <p><strong class="text-emerald-700">Gejala Klinis:</strong> Perut membesar dan keras seperti balon (timpani/drum sound saat ditepuk ringan), kelinci tidak mau makan sama sekali (anoreksia total = tanda bahaya!), tidak ada kotoran keluar atau kotoran sangat sedikit dan kecil-kecil (ileus = usus berhenti kontraksi), kelinci gelisah, mondar-mandir, posisi hunched/membungkuk (sakit perut), grinding teeth/gigi gemeretak (tanda sakit parah), rebahan terus dengan napas cepat dangkal, mata sayu/setengah tertutup. Stadium kritis: shock, hypothermia (suhu tubuh drop <37°C), kejang, MATI dalam 6-12 jam jika tidak ditangani!</p>
                <p><strong class="text-emerald-700">Penanganan Darurat:</strong> HARUS CEPAT! Bloat adalah EMERGENCY! Pijat perut kelinci perlahan dan lembut searah jarum jam 5-10 menit untuk stimulasi peristaltik usus. Jalan-jalankan kelinci di ruangan (gerakan bantu gas bergerak dan keluar). Beri minum air hangat dengan gula sedikit (rehidrasi + energi). Suntik Metoclopramide 0,5 mg/kg subkutan (stimulasi motilitas usus) atau Simethicone 1-2 ml oral (pecah gelembung gas). Jika perut sangat kembang = trocar/pungsi gas oleh dokter hewan (jarum masuk ke lambung keluarkan gas). Antibiotik Enrofloxacin untuk cegah infeksi sekunder. JANGAN beri pakan padat dulu sampai kelinci mau makan sendiri, cukup air dan hay saja</p>
                <p><strong class="text-emerald-700">Pencegahan:</strong> JANGAN PERNAH beri hijauan basah/segar langsung! Layu-layukan 2-4 jam atau angin-anginkan sampai sedikit layu. Ganti pakan bertahap 7-10 hari (campur pakan lama-baru dengan proporsi bertahap). Legum segar (turi, lamtoro) max 30% dari total hijauan, campur dengan rumput. Sediakan air minum 24/7 tanpa putus. Berikan hay/jerami kering ad libitum (bantu motilitas usus). Cegah stress (jangan pindah-pindah kandang sembarangan, jauhkan dari anjing/kucing)</p>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">3. Scabies/Kudis (Mange) - Gatal Menular</h4>
              <div class="space-y-3 text-gray-700">
                <p><strong class="text-emerald-700">Penyebab:</strong> Tungau/mite Sarcoptes scabiei atau Psoroptes cuniculi (ear mite khusus telinga kelinci). Penularan: kontak langsung kelinci ke kelinci, kandang/alat terinfeksi (tungau survive 2-3 minggu di lingkungan), grooming tools berbagi, dari induk ke anak. Faktor pemicu: higiene buruk, kandang kotor, kelembapan tinggi, overcrowding, imun lemah</p>
                <p><strong class="text-emerald-700">Gejala Klinis:</strong> Gatal luar biasa! Kelinci garuk-garuk terus menerus sampai luka berdarah (self-trauma), kulit kerak tebal berwarna abu-abu/putih kekuningan terutama di telinga bagian dalam (ear mite), muka (hidung, sekitar mata), kaki, dan kelamin, bulu rontok di area terinfeksi (alopecia), kulit menebal, kering, dan pecah-pecah (hyperkeratosis), telinga kelinci turun lemas (berat karena kerak tebal), secondary infection bakteri di luka garukan (bau busuk, nanah). Kelinci stress, tidak nafsu makan, kurus, pertumbuhan terhambat. Scabies sangat gatal dan menyiksa, kelinci bisa trauma</p>
                <p><strong class="text-emerald-700">Penanganan dan Pengobatan:</strong> Isolasi kelinci sakit segera! Ivermectin 0,2-0,4 mg/kg injeksi subkutan atau oral, ulangi setelah 10-14 hari (untuk bunuh tungau generasi baru yang menetas dari telur). Selamectin (Revolution) 6-18 mg/kg spot-on di tengkuk, ulangi 4 minggu kemudian. Oleskan salep belerang (sulfur ointment) atau minyak kelapa pada area kerak (melunakkan kerak, bunuh tungau). Untuk ear mite: bersihkan telinga dengan cotton bud + baby oil, keluarkan kerak perlahan, teteskan ivermectin 1-2 tetes ke telinga. Antibiotik jika ada infeksi sekunder. Vitamin E + Selenium untuk regenerasi kulit</p>
                <p><strong class="text-emerald-700">Pencegahan:</strong> Karantina kelinci baru 14-21 hari + treatment ivermectin preventif sebelum gabung koloni, jaga kebersihan kandang maksimal (buang kotoran harian, cuci mingguan, desinfeksi bulanan), jangan pinjam-meminjam alat grooming antar peternak (sisir, gunting bulu), hindari overcrowding (stress = imun turun = rentan scabies), treatment ivermectin masal 6 bulan sekali untuk preventif (terutama saat musim hujan = kelembapan tinggi = tungau berkembang biak cepat)</p>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">4. Diare (Enteritis/Diarrhea) - Penyebab Kematian #1 Anak Kelinci</h4>
              <div class="space-y-3 text-gray-700">
                <p><strong class="text-emerald-700">Penyebab:</strong> Multi-faktorial! Bakteri patogen (E. coli, Clostridium, Salmonella), virus (Rotavirus pada anak kelinci), parasit usus (Coccidia/koksidiosis, cacing), pakan berkualitas buruk (pakan berjamur = mikotoksin, pelet kadaluarsa), hijauan basah/kotor, perubahan pakan mendadak (disbiosis = ketidakseimbangan mikrobiota usus), stress (sapih terlalu cepat <6 minggu, pindah kandang, suhu ekstrem)</p>
                <p><strong class="text-emerald-700">Gejala Klinis:</strong> Kotoran cair seperti bubur atau air (normal: kotoran kelinci bulat keras kering), bulu sekitar anus kotor basah dan berbau busuk (wet tail = dirty bottom), perut kembung ringan sampai sedang, dehidrasi progresif (mata cekung, kulit tidak elastis/turgor lambat, selaput lendir mulut kering), kelinci lemas, tidak mau makan, rebahan terus, bobot turun drastis, hypothermia (suhu tubuh drop). Stadium terminal: kejang, koma, mati dalam 24-48 jam (terutama anak kelinci <8 minggu). Koksidiosis: diare berdarah/coklat tua, bau khas amis menyengat</p>
                <p><strong class="text-emerald-700">Penanganan dan Pengobatan:</strong> Hentikan hijauan total 1-2 hari (beri pelet berkualitas + hay kering saja untuk solidkan feses). Rehidrasi agresif: oralit/elektrolit oral 20-50 ml setiap 2-3 jam (critical!), atau infus subkutan Ringer Laktat jika dehidrasi parah. Antibiotik: Neomycin 10-20 mg/kg dua kali sehari 5-7 hari (untuk enteritis bakterial), atau Metronidazole untuk Clostridium. Untuk koksidiosis: Sulfadimethoxine 50 mg/kg hari pertama, lalu 25 mg/kg/hari 5 hari. Probiotik (Lactobacillus, Bifidobacterium) untuk restore mikrobiota usus. Vitamin K jika ada perdarahan. Jaga suhu hangat 28-30°C (kelinci diare mudah hypothermia)</p>
                <p><strong class="text-emerald-700">Pencegahan:</strong> Hijauan WAJIB dilayukan/diangin-anginkan 2-4 jam sebelum kasih (kadar air turun, aman pencernaan), jangan beri sayur basah/berkelebihan air, cuci bersih semua hijauan sebelum kasih (hilangkan tanah/kotoran), ganti pakan bertahap 7-10 hari (beri waktu mikrobiota adaptasi), jaga kandang kering dan bersih (kotoran harian, desinfeksi mingguan), sapih anak kelinci minimal 6 minggu (jangan terburu-buru, sistem cerna belum mature), treatment anti-koksidiosis preventif untuk anak lepas sapih (Sulfaquinoxaline dalam air minum 0,05% 2-3 hari/bulan)</p>
              </div>
            </div>
          </div>

          <!-- B. Program Kesehatan Rutin -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">B. Program Kesehatan dan Vaksinasi</h3>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Jadwal Kesehatan Rutin</h4>
              <div class="overflow-x-auto">
                <table class="min-w-full border-collapse border border-emerald-200">
                  <thead>
                    <tr class="bg-emerald-100 text-emerald-800">
                      <th class="border border-emerald-200 px-4 py-3 text-left font-semibold">Program</th>
                      <th class="border border-emerald-200 px-4 py-3 text-left font-semibold">Frekuensi</th>
                      <th class="border border-emerald-200 px-4 py-3 text-left font-semibold">Produk/Dosis</th>
                      <th class="border border-emerald-200 px-4 py-3 text-left font-semibold">Keterangan</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-emerald-200">
                    <tr class="bg-white hover:bg-emerald-50 transition-colors">
                      <td class="border border-emerald-200 px-4 py-3 font-medium text-gray-800">Vitamin B-Complex</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">Setiap 2 minggu</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">Vitastress/Vita-B12, 0,3-0,5 ml/ekor IM atau 1 ml/liter air minum</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">Boost nafsu makan, metabolisme, anti-stress. PENTING saat cuaca ekstrem panas/hujan</td>
                    </tr>
                    <tr class="bg-gray-50 hover:bg-emerald-50 transition-colors">
                      <td class="border border-emerald-200 px-4 py-3 font-medium text-gray-800">Obat Cacing (Deworming)</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">Setiap 3-4 bulan</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">Albendazole 10-20 mg/kg oral atau Ivermectin 0,2 mg/kg SC/oral</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">Basmi cacing gelang, cacing pita, tungau internal. Puasakan 6 jam sebelum obat</td>
                    </tr>
                    <tr class="bg-white hover:bg-emerald-50 transition-colors">
                      <td class="border border-emerald-200 px-4 py-3 font-medium text-gray-800">Anti-Koksidiosis</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">Bulanan (anak lepas sapih)</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">Sulfaquinoxaline 0,05% dalam air minum 2-3 hari</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">Koksidiosis = pembunuh #1 anak kelinci umur 6-12 minggu. Preventif sangat penting!</td>
                    </tr>
                    <tr class="bg-gray-50 hover:bg-emerald-50 transition-colors">
                      <td class="border border-emerald-200 px-4 py-3 font-medium text-gray-800">Cek Kesehatan Harian</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">Setiap hari!</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">Observasi visual + palpasi</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">Cek nafsu makan, kotoran (bentuk, warna, konsistensi), perilaku, mata, hidung. Deteksi dini = survival!</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Tanda Kelinci Sehat vs Sakit</h4>
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 class="font-semibold text-emerald-700 mb-2">✅ Kelinci Sehat:</h5>
                  <ul class="space-y-1 text-gray-700 text-sm ml-6">
                    <li>• Mata cerah bersinar, tidak berair</li>
                    <li>• Hidung kering bersih, tidak berlendir</li>
                    <li>• Bulu halus mengkilap, tidak kusam</li>
                    <li>• Nafsu makan baik, habiskan pakan</li>
                    <li>• Kotoran bulat keras kering</li>
                    <li>• Aktif bergerak, lincah, alert</li>
                    <li>• Bobot stabil/naik sesuai target ADG</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-semibold text-red-700 mb-2">❌ Kelinci Sakit (Segera Isolasi!):</h5>
                  <ul class="space-y-1 text-gray-700 text-sm ml-6">
                    <li>• Mata sayu/setengah tertutup, berair/bernanah</li>
                    <li>• Hidung berlendir/basah, bersin-bersin</li>
                    <li>• Bulu kusam, rontok, kotor</li>
                    <li>• Tidak mau makan >6 jam (BAHAYA!)</li>
                    <li>• Diare (kotoran cair) atau tidak ada kotoran</li>
                    <li>• Lemas, rebahan terus, tidak responsif</li>
                    <li>• Bobot turun drastis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- IV. Manajemen Reproduksi -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-200">
            IV. Manajemen Reproduksi dan Pembibitan
          </h2>
          
          <!-- A. Perkawinan -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">A. Perkawinan dan Breeding</h3>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Persiapan Breeding</h4>
              <div class="space-y-3 text-gray-700">
                <ul class="ml-6 space-y-2">
                  <li>• <strong class="text-emerald-700">Usia kawin ideal:</strong> Betina 6-8 bulan (bobot min 3 kg untuk ras medium), jantan 7-9 bulan (lebih matang fisik dan sperma berkualitas). JANGAN kawinkan terlalu muda (<5 bulan) = betina kesulitan melahirkan, anak lahir kecil lemah, pertumbuhan induk terhambat</li>
                  <li>• <strong class="text-emerald-700">Seleksi indukan:</strong> Betina: sehat, tidak ada cacat fisik, body score ideal 3/5 (tidak terlalu kurus atau gemuk), riwayat reproduksi baik (jika sudah pernah beranak). Jantan: postur besar dan berotot, testis turun sempurna (tidak cryptorchid), libido tinggi (agresif saat didekati betina), tidak ada penyakit genetik (malocclusion/gigi bengkok, splay leg)</li>
                  <li>• <strong class="text-emerald-700">Ratio jantan:betina:</strong> 1 jantan bisa layani 8-10 betina maksimal. Kawinkan jantan max 2-3x/minggu (jangan setiap hari = kualitas sperma turun, jantan kelelahan)</li>
                </ul>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Proses Perkawinan</h4>
              <div class="space-y-3 text-gray-700">
                <ul class="ml-6 space-y-2">
                  <li>• <strong class="text-emerald-700">Teknik kawin:</strong> BAWA BETINA KE KANDANG JANTAN (bukan sebaliknya!). Jantan lebih agresif dan percaya diri di territorinya sendiri. Betina di kandang jantan = lebih receptive. Jika sebaliknya, jantan sibuk explore kandang baru, tidak fokus kawin</li>
                  <li>• <strong class="text-emerald-700">Waktu kawin terbaik:</strong> Pagi (06:00-09:00) atau sore (16:00-18:00) saat suhu sejuk. HINDARI siang hari panas >30°C (libido turun, stress, kualitas sperma menurun). Kelinci adalah crepuscular (aktif subuh dan senja)</li>
                  <li>• <strong class="text-emerald-700">Tanda betina siap kawin (estrus/birahi):</strong> Vulva bengkak dan berwarna merah keunguan (vulva pucat/kering = tidak birahi), gelisah dan aktif bergerak, mengangkat pantat saat disentuh punggung (lordosis reflex), nafsu makan sedikit turun. Kelinci betina = induced ovulator (ovulasi dipicu oleh perkawinan, tidak ada siklus estrus tetap seperti anjing/kucing)</li>
                  <li>• <strong class="text-emerald-700">Ciri perkawinan berhasil:</strong> Jantan jatuh ke samping atau ke belakang setelah ejakulasi (fall-off = tanda kopulasi sukses). Jantan grunting/suara geram halus. Kawinkan lagi setelah 8-12 jam untuk double mating (tingkatkan conception rate jadi 90-95%)</li>
                  <li>• <strong class="text-emerald-700">Jika betina menolak:</strong> Betina lari, menendang, atau agresif menggigit = belum siap/tidak birahi. Jangan paksa! Coba lagi 2-3 hari kemudian. Atau coba jantan berbeda (kadang betina pilih-pilih jantan tertentu)</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- B. Kebuntingan -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">B. Kebuntingan (Gestation)</h3>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Manajemen Induk Bunting</h4>
              <div class="space-y-3 text-gray-700">
                <ul class="ml-6 space-y-2">
                  <li>• <strong class="text-emerald-700">Masa bunting:</strong> 28-32 hari (rata-rata 30-31 hari). Kelinci = masa bunting tersingkat dibanding ternak lain! Ini yang bikin reproduksi kelinci super cepat</li>
                  <li>• <strong class="text-emerald-700">Cek kebuntingan (pregnancy check):</strong> Hari ke-10-14 post-mating, palpasi perut betina dengan lembut. Jika bunting = teraba benjolan bulat sebesar kelereng (embrio) di perut bagian bawah. Atau: betina agresif/defensif saat didekati, puting susu membesar dari hari ke-15, perut membesar jelas dari hari ke-20, berat badan naik 15-20%</li>
                  <li>• <strong class="text-emerald-700">Nutrisi induk bunting:</strong> Tingkatkan pakan 20-30% dari normal terutama trimester akhir (minggu ke-3-4). Protein target 18-20% (butuh untuk pertumbuhan janin). Tambah konsentrat/pelet berkualitas. Sediakan air minum 24/7 ad libitum (kebutuhan air naik 50%)</li>
                  <li>• <strong class="text-emerald-700">Hindari stress:</strong> JANGAN pegang perut kasar (bisa keguguran), jangan pindah-pindah kandang (betina bunting sangat sensitive stress), jauhkan dari predator (anjing, kucing, musang), hindari suara bising/tiba-tiba. Stress = abortion, makan anak (kanibalisasi), kematian induk</li>
                  <li>• <strong class="text-emerald-700">Persiapan glodok:</strong> Hari ke-25-27 (3-5 hari sebelum melahirkan), sediakan kotak glodok/nest box ukuran 40x30x30 cm dengan alas jerami kering/serutan kayu/sekam. Betina akan cabuti bulu dadanya sendiri untuk bikin sarang empuk dan hangat (normal behavior, jangan khawatir!)</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- C. Kelahiran dan Perawatan Anak -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">C. Kelahiran dan Perawatan Anak Kelinci</h3>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Proses Kelahiran (Kindling)</h4>
              <div class="space-y-3 text-gray-700">
                <ul class="ml-6 space-y-2">
                  <li>• <strong class="text-emerald-700">Waktu kelahiran:</strong> Biasanya malam hari atau dini hari (02:00-06:00) saat tenang. Proses cepat 10-30 menit untuk semua anak. Induk melahirkan sendiri tanpa bantuan (jangan ganggu kecuali ada komplikasi!)</li>
                  <li>• <strong class="text-emerald-700">Jumlah anak:</strong> NZW 6-8 ekor, Rex 5-7 ekor, Lokal 4-6 ekor. First time mother (induk pertama kali) biasanya 4-6 ekor (lebih sedikit, normal)</li>
                  <li>• <strong class="text-emerald-700">Kondisi anak lahir:</strong> Lahir buta, tuli, tidak berbulu (altricial = sangat bergantung induk). Bobot lahir 50-70 gram. Mata tertutup, telinga terlipat. Sangat rentan hypothermia (harus dijaga hangat 28-32°C!)</li>
                  <li>• <strong class="text-emerald-700">Perawatan post-partum:</strong> Cek semua anak hidup (gerak, bernapas normal). Buang anak yang mati/cacat parah (hindari induk makan anak). Hitung jumlah anak dan catat. JANGAN pegang anak terlalu banyak (bau manusia bisa bikin induk reject/makan anak). Cukup cek visual dari jauh</li>
                  <li>• <strong class="text-emerald-700">Kolostrum:</strong> Anak HARUS minum kolostrum (susu pertama) dalam 12 jam pertama kehidupan! Kolostrum kaya antibodi (immunoglobulin IgG) vital untuk imunitas pasif 4-6 minggu pertama. Anak yang tidak dapat kolostrum = survival rate <30%</li>
                </ul>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Perawatan Anak Kelinci (Kits/Bunnies)</h4>
              <div class="space-y-3 text-gray-700">
                <ul class="ml-6 space-y-2">
                  <li>• <strong class="text-emerald-700">Penyusuan:</strong> Induk menyusui hanya 1-2x/hari (biasanya tengah malam dan subuh), masing-masing 3-5 menit! Ini NORMAL untuk kelinci (beda dengan anjing/kucing yang menyusui berkali-kali). Susu kelinci sangat kental dan bernutrisi tinggi (12% protein, 15% lemak), 1-2x cukup untuk 24 jam. Jangan paksa induk menyusui lebih sering!</li>
                  <li>• <strong class="text-emerald-700">Ciri anak kenyang:</strong> Perut bulat penuh (seperti balon kecil), kulit perut pink terang (tidak kusut/keriput), anak tenang tidur berkelompok (tidak menjerit kelaparan). Cek 1x/hari di pagi hari</li>
                  <li>• <strong class="text-emerald-700">Perkembangan anak:</strong> Umur 7-10 hari: mata mulai terbuka (jangan paksa buka!), bulu mulai tumbuh. Umur 10-14 hari: telinga tegak, mulai keluar dari sarang/glodok. Umur 18-21 hari: mulai coba-coba makan pakan induk (hijauan lembut, pelet). Umur 4 minggu: aktif lari-lari, makan mandiri 50% (masih nyusu 50%)</li>
                  <li>• <strong class="text-emerald-700">Penyapihan (weaning):</strong> Umur 6-8 minggu (JANGAN lebih cepat! <6 minggu = diare fatal). Pisahkan anak dari induk secara bertahap: umur 6 minggu pisahkan jantan (lebih agresif), umur 7-8 minggu pisahkan betina. Beri pakan pelet berkualitas tinggi (protein 18%) + hijauan muda yang halus + air minum ad libitum</li>
                  <li>• <strong class="text-emerald-700">Anti-koksidiosis anak:</strong> WAJIB! Umur 4-12 minggu = golden period koksidiosis (coccidia berkembang biak di usus). Treatment preventif Sulfaquinoxaline 0,05% dalam air minum 2-3 hari setiap bulan atau Toltrazuril (Baycox) 7 mg/kg oral umur 4 dan 8 minggu</li>
                </ul>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Re-Breeding Induk</h4>
              <div class="space-y-3 text-gray-700">
                <ul class="ml-6 space-y-2">
                  <li>• <strong class="text-emerald-700">Sistem semi-intensif (DIREKOMENDASIKAN):</strong> Kawinkan induk lagi 3-4 minggu setelah melahirkan (saat anak masih menyusu). Anak disapih umur 6 minggu, induk melahirkan lagi 1-2 minggu kemudian. Jadi 1 induk = 8-10 kelahiran/tahun = 60-80 anak/tahun! Induk dapat recovery 1-2 minggu sebelum melahirkan lagi</li>
                  <li>• <strong class="text-emerald-700">Sistem intensif (untuk peternak aggressive):</strong> Kawinkan induk 1-7 hari post-partum (langsung setelah melahirkan). Induk bunting sambil menyusui (double burden). Produksi maksimal 10-12 kelahiran/tahun = 80-100 anak/tahun! Tapi: induk cepat drop body condition, rentan sakit, umur produktif lebih pendek (2-3 tahun vs 4-5 tahun sistem semi-intensif). Butuh pakan berkualitas sangat tinggi!</li>
                  <li>• <strong class="text-emerald-700">Rest period:</strong> Setiap 5-6 kelahiran, istirahatkan induk 2-3 bulan untuk recovery body condition. Beri pakan maintenance, vitamin E+Selenium untuk reproduksi. Jangan eksploitasi induk terus-menerus = produktivitas drop, mudah sakit, mati muda!</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- V. Lampiran dan Sumber Daya -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-200">
            V. Lampiran dan Sumber Daya
          </h2>
          
          <!-- A. Direktori Kontak Penting -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">A. Direktori Kontak Penting di Balikpapan</h3>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Instansi Pemerintah</h4>
              <div class="space-y-3">
                <div class="text-gray-700">
                  <p class="font-semibold text-emerald-700">Dinas Ketahanan Pangan dan Peternakan Kota Balikpapan</p>
                  <p>Alamat: Jl. Jend. Sudirman No. 1, Balikpapan Kota</p>
                  <p>Telepon: (0542) 421714</p>
                  <p>Layanan: Penyuluhan beternak kelinci, bantuan bibit kelinci unggul (program GERPARI), konsultasi teknis pemeliharaan, perizinan usaha peternakan kelinci, informasi pasar dan harga kelinci</p>
                </div>
                <div class="text-gray-700">
                  <p class="font-semibold text-emerald-700">UPT Puskeswan (Pusat Kesehatan Hewan) Balikpapan</p>
                  <p>Alamat: Jl. MT Haryono, Sepinggan</p>
                  <p>Telepon: (0542) 761234</p>
                  <p>Layanan: Pemeriksaan kesehatan kelinci gratis, treatment penyakit (snuffles, bloat, scabies, diare), obat-obatan dan vitamin, konsultasi reproduksi dan breeding, bedah minor (abses, tumor), autopsy/necropsy untuk diagnosa penyakit</p>
                </div>
                <div class="text-gray-700">
                  <p class="font-semibold text-emerald-700">Balai Karantina Pertanian Kelas II Balikpapan</p>
                  <p>Alamat: Jl. Soekarno Hatta KM 3, Sepinggan Baru</p>
                  <p>Telepon: (0542) 8731144</p>
                  <p>Layanan: Sertifikat kesehatan kelinci untuk perdagangan antar daerah/pulau, inspeksi bibit kelinci dari luar Kaltim, karantina hewan impor</p>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Supplier Pakan & Peralatan</h4>
              <div class="space-y-3">
                <div class="text-gray-700">
                  <p class="font-semibold text-emerald-700">Toko Pakan Ternak Borneo Jaya</p>
                  <p>Alamat: Jl. Soekarno Hatta KM 8, Kariangau</p>
                  <p>Telepon: (0542) 7654321</p>
                  <p>Produk: Pelet kelinci komersial (CP, Comfeed, Japfa), konsentrat protein tinggi, dedak, jagung giling, bungkil kedelai/sawit, vitamin kelinci (Vitastress, B-Complex), obat-obatan (Enrofloxacin, Ivermectin, Sulfaquinoxaline), probiotik (EM4, Biovet)</p>
                </div>
                <div class="text-gray-700">
                  <p class="font-semibold text-emerald-700">CV Mitra Peternak Sejahtera</p>
                  <p>Alamat: Jl. MT Haryono RT 35, Sepinggan</p>
                  <p>Telepon: 0812-5xxx-xxxx</p>
                  <p>Produk: Bibit kelinci NZW/Rex/lokal berkualitas, kandang baterai kelinci jadi, kawat RAM untuk lantai kandang, tempat pakan dan minum otomatis (nipple drinker), glodok/nest box beranak</p>
                </div>
                <div class="text-gray-700">
                  <p class="font-semibold text-emerald-700">Toko Hijauan Pakan Ternak Pak Budi</p>
                  <p>Alamat: Jl. Padat Karya, Kariangau</p>
                  <p>Telepon: 0821-6xxx-xxxx</p>
                  <p>Produk: Rumput gajah segar/kering (Rp 500-800/kg), daun turi/lamtoro/gamal, daun singkong, jerami padi, tebon jagung. Delivery gratis minimal 100 kg</p>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Pasar & Pembeli</h4>
              <div class="space-y-3">
                <div class="text-gray-700">
                  <p class="font-semibold text-emerald-700">Restoran Sate Kelinci "Kelinci Emas"</p>
                  <p>Alamat: Jl. Ahmad Yani, Balikpapan Baru</p>
                  <p>Telepon: 0813-4xxx-xxxx</p>
                  <p>Info: Beli kelinci hidup 30-50 ekor/bulan, bobot 2-2,5 kg, harga Rp 100.000-120.000/kg hidup. Pembayaran tunai, ambil di lokasi peternak atau delivery (ongkir ditanggung pembeli)</p>
                </div>
                <div class="text-gray-700">
                  <p class="font-semibold text-emerald-700">Pasar Tradisional Klandasan</p>
                  <p>Alamat: Jl. Jend. Sudirman, Klandasan Ulu</p>
                  <p>Info: Pasar kelinci hidup dan karkas setiap hari. Harga fluktuatif Rp 70.000-100.000/kg tergantung supply. Ramai Jumat-Minggu. Bisa sewa lapak Rp 50.000/hari</p>
                </div>
                <div class="text-gray-700">
                  <p class="font-semibold text-emerald-700">Pet Shop "Hewan Lucu Balikpapan"</p>
                  <p>Alamat: Plaza Balikpapan, Lt. 2</p>
                  <p>Telepon: (0542) 8765432</p>
                  <p>Info: Beli anak kelinci (anakan 2-3 bulan) untuk pet/hewan peliharaan. Rex dan NZW putih paling laku. Harga beli Rp 80.000-120.000/ekor, jual ke konsumen Rp 200.000-400.000/ekor. Konsinyasi bisa diatur</p>
                </div>
                <div class="text-gray-700">
                  <p class="font-semibold text-emerald-700">Pengepul Kelinci Pak Haji Bambang</p>
                  <p>Telepon: 0822-8xxx-xxxx</p>
                  <p>Layanan: Beli kelinci partai besar (minimal 20 ekor), harga Rp 90.000-110.000/kg live weight, ambil di lokasi peternak, bayar tunai/transfer. Rutin seminggu 2x (Rabu dan Sabtu)</p>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Kelompok Tani & Komunitas</h4>
              <div class="space-y-3">
                <div class="text-gray-700">
                  <p class="font-semibold text-emerald-700">Kelompok Peternak Kelinci Kalimantan Timur (KPKKT)</p>
                  <p>Kontak Ketua: Bapak Agus Susanto - 0811-5xxx-xxxx</p>
                  <p>Kegiatan: Pertemuan rutin bulanan (sharing knowledge, problem solving), pelatihan manajemen kelinci dan breeding, kerjasama pembelian pakan patungan (harga grosir 15-20% lebih murah), pemasaran bersama dengan sistem pre-order kolektif, kunjungan studi banding ke farm kelinci sukses</p>
                </div>
                <div class="text-gray-700">
                  <p class="font-semibold text-emerald-700">Forum Peternak Kecil Balikpapan (FPKB)</p>
                  <p>Kontak: Ibu Rina Wati - 0823-6xxx-xxxx</p>
                  <p>Kegiatan: Advokasi kebijakan pemerintah pro-peternak kecil, lobby bantuan bibit/pakan subsidi dari Dinas Peternakan, koordinasi dengan bank untuk akses kredit usaha ternak (KUR), pelatihan marketing digital dan branding produk kelinci</p>
                </div>
              </div>
            </div>
          </div>

          <!-- B. Glosarium -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">B. Glosarium (Istilah Penting)</h3>
            
            <div class="bg-gray-50 rounded-lg p-6">
              <div class="space-y-3">
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">ADG (Average Daily Gain):</strong> Pertambahan bobot badan harian rata-rata dalam gram/hari. Kelinci NZW target ADG 25-35 gram/hari untuk penggemukan optimal</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">FCR (Feed Conversion Ratio):</strong> Rasio konversi pakan = kg pakan untuk menghasilkan 1 kg pertambahan bobot. Kelinci FCR ideal 3,5-4,5 (sangat efisien dibanding ternak besar seperti sapi FCR 8-10)</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Altricial:</strong> Kondisi anak kelinci lahir sangat tidak berdaya (buta, tuli, tidak berbulu) dan sangat bergantung pada induk. Kebalikan dari precocial (seperti anak ayam yang lahir berbulu dan bisa jalan)</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Bloat (Kembung):</strong> Penumpukan gas berlebihan di saluran pencernaan akibat fermentasi tidak terkontrol. Sangat berbahaya, bisa mati dalam 6-12 jam jika tidak ditangani. Pencegahan: jangan beri hijauan basah!</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Cecotropes (Soft Pellets):</strong> Kotoran khusus kelinci berupa kotoran lunak yang langsung dimakan kembali (coprophagy normal behavior). Mengandung vitamin B, protein mikroba, dan nutrisi penting hasil fermentasi cecum. JANGAN dibuang!</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Estrus/Birahi:</strong> Masa subur betina siap kawin. Kelinci = induced ovulator (ovulasi dipicu perkawinan, tidak ada siklus estrus tetap). Tanda: vulva bengkak merah keunguan, gelisah, lordosis reflex</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Hindgut Fermenter:</strong> Sistem pencernaan kelinci dengan fermentasi di usus belakang (cecum besar) bukan di lambung depan seperti sapi/kambing. Makanya kelinci butuh serat tinggi tapi bisa makan konsentrat lebih banyak</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Kindling:</strong> Proses kelahiran anak kelinci. Biasanya malam/dini hari, 10-30 menit, tanpa bantuan. Induk langsung makan plasenta (normal untuk dapat nutrisi kembali)</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Kolostrum:</strong> Susu pertama dari induk dalam 12-24 jam pertama setelah melahirkan. Mengandung antibodi (IgG) vital untuk imunitas pasif anak 4-6 minggu pertama. Tanpa kolostrum = survival rate <30%</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Malocclusion:</strong> Kondisi gigi kelinci tidak rata/bengkok sehingga tidak bisa mengikis dengan normal. Gigi kelinci tumbuh terus 10-12 cm/tahun, harus terus terkikis saat kunyah. Malocclusion = gigi terlalu panjang, tidak bisa makan, mati kelaparan</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Nest Box/Glodok:</strong> Kotak beranak untuk induk kelinci melahirkan dan merawat anak. Ukuran 40x30x30 cm, alas jerami/serutan kayu, dinding 30 cm (cegah anak keluar terlalu cepat dan kedinginan)</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Pasteurellosis (Snuffles):</strong> Penyakit pernapasan kronis paling umum pada kelinci disebabkan bakteri Pasteurella multocida. Gejala: bersin, hidung berlendir, mata berair, napas berbunyi. Sulit sembuh total, bisa relapse saat stress</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Weaning (Penyapihan):</strong> Proses pemisahan anak dari induk. Kelinci ideal 6-8 minggu (JANGAN <6 minggu = diare dan kematian tinggi karena sistem cerna belum mature). Gradual weaning lebih baik dari abrupt weaning</p>
                </div>
              </div>
            </div>
          </div>

          <!-- C. Referensi -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">C. Referensi dan Bacaan Lanjutan</h3>
            
            <div class="bg-gray-50 rounded-lg p-6">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Jurnal & Penelitian</h4>
              <ul class="space-y-2 text-gray-700 mb-4">
                <li>• <strong>"Performa Produksi Kelinci New Zealand White di Dataran Rendah Tropis"</strong> - Jurnal Ilmu Ternak Universitas Brawijaya (2022)</li>
                <li>• <strong>"Efek Suhu Lingkungan terhadap Produktivitas dan Kesejahteraan Kelinci"</strong> - Jurnal Veteriner Tropis Vol. 18 (2023)</li>
                <li>• <strong>"Manajemen Reproduksi Kelinci Sistem Intensif dan Semi-Intensif"</strong> - Jurnal Peternakan Indonesia Vol. 25 (2023)</li>
                <li>• <strong>"Analisis Ekonomi Usaha Ternak Kelinci Pedaging Skala Rumah Tangga"</strong> - Jurnal Agribisnis Universitas Padjadjaran (2024)</li>
                <li>• <strong>"Prevalensi dan Pengendalian Koksidiosis pada Kelinci Muda"</strong> - Jurnal Parasitologi Veteriner Vol. 12 (2024)</li>
              </ul>

              <h4 class="text-lg font-semibold text-gray-800 mb-3">Buku & Manual</h4>
              <ul class="space-y-2 text-gray-700 mb-4">
                <li>• <strong>"Beternak Kelinci Pedaging untuk Pemula"</strong> - Kementerian Pertanian RI (Download gratis di Cybex Kementan)</li>
                <li>• <strong>"Petunjuk Teknis Budidaya Kelinci NZW dan Rex"</strong> - Balai Penelitian Ternak Ciawi, Bogor</li>
                <li>• <strong>"Panduan Lengkap Kesehatan dan Penyakit Kelinci"</strong> - Direktorat Kesehatan Hewan Kementan</li>
                <li>• <strong>"Rabbit Housing and Management Manual"</strong> - FAO (Food and Agriculture Organization) - gratis download online</li>
                <li>• <strong>"The Complete Guide to Raising Rabbits for Meat"</strong> - Eric Rapp (Bahasa Inggris, sangat komprehensif)</li>
                <li>• <strong>"Teknologi Pakan Fermentasi untuk Kelinci"</strong> - BPTP Kalimantan Timur</li>
              </ul>

              <h4 class="text-lg font-semibold text-gray-800 mb-3">Website & Portal</h4>
              <ul class="space-y-2 text-gray-700 mb-4">
                <li>• <strong>Cybex Kementan:</strong> cybex.pertanian.go.id - Artikel lengkap budidaya kelinci, penyakit, pakan, reproduksi, pemasaran</li>
                <li>• <strong>Info Harga Ternak:</strong> siskaperbapo.pertanian.go.id - Info harga kelinci hidup, bibit, pakan real-time per daerah se-Indonesia</li>
                <li>• <strong>Trobos Livestock:</strong> troboslivestock.com - Berita terkini industri peternakan kelinci, tren pasar, teknologi terbaru</li>
                <li>• <strong>The Nature Trail (Rabbit Section):</strong> thenaturetrail.com/rabbits - Database penyakit kelinci lengkap dengan foto, diagnosa, treatment (Bahasa Inggris)</li>
                <li>• <strong>Rabbit.org (House Rabbit Society):</strong> rabbit.org - Panduan kesehatan dan kesejahteraan kelinci, cara handling yang benar</li>
                <li>• <strong>Portal Peternak:</strong> ditjenpkh.pertanian.go.id - Regulasi, standar, subsidi, dan program pemerintah untuk peternak kelinci</li>
              </ul>

              <h4 class="text-lg font-semibold text-gray-800 mb-3">Video & Tutorial YouTube</h4>
              <ul class="space-y-2 text-gray-700 mb-4">
                <li>• Channel <strong>"Kelinci Berkah"</strong> - Tutorial lengkap beternak kelinci dari persiapan kandang, breeding, perawatan anak, panen. Fokus kelinci NZW dan Rex. Analisis usaha detail dan tips marketing</li>
                <li>• Channel <strong>"Peternakan Kelinci Modern"</strong> - Sistem kandang battery modern, manajemen suhu di daerah panas, teknologi pakan fermentasi, reproduksi intensif, tips panen dan pemotongan</li>
                <li>• Channel <strong>"Dokter Hewan Kelinci"</strong> - Khusus kesehatan kelinci: diagnosa penyakit (snuffles, bloat, scabies, diare), cara treatment mandiri, vaksinasi dan vitamin, first aid untuk kelinci sakit</li>
                <li>• Channel <strong>"Kelinci Untung Maksimal"</strong> - Strategi bisnis kelinci: analisis BEP, timing panen optimal, diversifikasi produk (daging, bibit, pet, kulit), marketing online dan offline, negosiasi dengan pembeli</li>
                <li>• Channel <strong>"Rabbit Farming for Beginners"</strong> - Tutorial Bahasa Inggris yang sangat detail dan visual bagus tentang breeding, kindling, weaning, culling. Recommended untuk deepening knowledge</li>
              </ul>

              <h4 class="text-lg font-semibold text-gray-800 mb-3">Grup WhatsApp & Forum</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• <strong>WA Group "Peternak Kelinci Kalimantan Timur"</strong> - Sharing info harga kelinci lokal Balikpapan, tanya jawab penyakit, info pakan murah, buyer/supplier terpercaya. Kontak admin via Dinas Peternakan Balikpapan</li>
                <li>• <strong>Facebook Group "Komunitas Peternak Kelinci Indonesia"</strong> - 80.000+ members se-Indonesia, sangat aktif 24/7, banyak thread berguna tentang problem solving, marketplace jual-beli bibit/pakan/kelinci, event dan kontes kelinci</li>
                <li>• <strong>Telegram Group "Kelinci NZW & Rex Lovers"</strong> - Fokus breeder kelinci ras murni, tips breeding berkualitas, standard kelinci show/kontes, networking antar breeder premium</li>
                <li>• <strong>Forum Kaskus "Peternakan Kelinci"</strong> - Sub-forum khusus kelinci dengan ribuan thread archived sejak 2010. Banyak pengalaman peternak senior, troubleshooting penyakit jarang, review produk pakan/obat</li>
                <li>• <strong>WhatsApp Group "Kelinci Pedaging Balikpapan"</strong> - Lokal Balikpapan only, koordinasi supply-demand kelinci, info pasar dan harga terkini, sharing pembeli/restoran yang lagi butuh kelinci, group buying pakan patungan</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Penutup -->
        <section class="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-8 mb-8">
          <h3 class="text-2xl font-semibold text-emerald-900 mb-4">Kesimpulan</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Beternak kelinci di Balikpapan adalah peluang bisnis sangat menguntungkan dengan <strong>ROI (Return on Investment) tertinggi</strong> dibanding ternak lain 
            karena reproduksi super cepat (1 induk = 60-80 anak/tahun!), siklus panen pendek (hanya 10-12 minggu dari lahir ke panen), FCR efisien (3,5-4,5), 
            dan tidak butuh lahan luas (bisa skala rumahan/urban farming). Dengan modal Rp 15-20 juta untuk 10 indukan + kandang + pakan 3 bulan, 
            bisa balik modal dalam 4-6 bulan dengan keuntungan bersih Rp 6-8 juta/bulan setelah itu! Pasar kelinci terus berkembang: restoran sate kelinci, 
            pasar tradisional, pet shop untuk hewan peliharaan, bahkan olahan frozen (sate beku, nugget, abon) dengan margin 2-3x lipat.
          </p>
          <p class="text-gray-700 leading-relaxed mb-4">
            Kunci sukses beternak kelinci di Balikpapan: <strong>(1) Manajemen suhu adalah prioritas #1!</strong> Kelinci sangat sensitif panas (>28°C stress, >32°C heat stroke fatal). 
            WAJIB investasi sistem pendingin: ventilasi maksimal, kipas angin/exhaust fan, fogging/mist spray, teduh alami, lantai keramik dingin. 
            Ini NON-NEGOTIABLE! <strong>(2) Kandang baterai individual</strong> adalah must (jangan kandang koloni = berkelahi, stress, susah kontrol). 
            <strong>(3) Pakan berkualitas</strong> dengan formula 70% hijauan (WAJIB dilayukan 2-4 jam, jangan basah = diare fatal!) + 30% konsentrat protein 16-18%. 
            <strong>(4) Deteksi penyakit dini</strong> dengan observasi harian (kelinci cepat sakit tapi cepat mati jika telat ditangani). Penyakit umum: snuffles, bloat, scabies, diare - harus tau gejala dan treatment!
          </p>
          <p class="text-gray-700 leading-relaxed">
            Mulai dari skala kecil 5-10 indukan untuk belajar manajemen dan timing market. Bergabung dengan kelompok peternak kelinci untuk sharing knowledge, 
            pembelian pakan patungan (lebih murah 15-20%), dan koordinasi pemasaran. Manfaatkan pendampingan Dinas Peternakan dan Puskeswan untuk konsultasi gratis. 
            Fokus pada breeding berkualitas (pilih indukan NZW/Rex terbaik) dan manajemen reproduksi optimal (sistem semi-intensif = kawin lagi 3-4 minggu post-partum, 
            1 induk bisa 8-10 kelahiran/tahun). Diversifikasi produk: jual daging untuk pasar pedaging, jual anak untuk pet shop, jual kulit Rex untuk pengrajin leather. 
            Dengan manajemen yang benar, usaha kelinci bisa jadi sumber pendapatan utama yang sangat menguntungkan dan berkelanjutan!
          </p>
        </section>

      </div>
    </article>

    <Footer />
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
