<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import bebekImage from '@/assets/images/Bebek.jpeg';

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
        :src="bebekImage" 
        alt="Ternak Bebek"
        class="w-full h-full object-cover"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 p-8 md:p-12">
        <div class="max-w-6xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
            Panduan Lengkap Beternak Bebek di Balikpapan
          </h1>
          <p class="text-gray-200 text-lg">
            Panduan praktis untuk usaha peternakan bebek pedaging dan petelur yang menguntungkan
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
            Beternak bebek di Balikpapan memiliki potensi yang sangat menjanjikan mengingat tingginya permintaan daging dan telur bebek, 
            terutama untuk industri kuliner seperti bebek goreng, telur asin, dan telur pindang. Bebek memiliki keunggulan berupa daya tahan 
            tinggi terhadap penyakit, adaptasi baik di iklim tropis, dan produktivitas telur yang stabil. Panduan ini dirancang khusus untuk 
            membantu peternak di Balikpapan mengoptimalkan usaha peternakan bebek mereka dengan manajemen modern dan efisien.
          </p>
        </section>

        <!-- I. Pengenalan Ternak Bebek -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-200">
            I. Pengenalan Ternak Bebek
          </h2>
          
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">A. Jenis-Jenis Bebek Ternak</h3>
            
            <!-- Bebek Pedaging -->
            <div class="bg-emerald-50 rounded-lg p-6 mb-4">
              <h4 class="text-xl font-semibold text-emerald-900 mb-3">1. Bebek Pedaging (Peking/Hibrida)</h4>
              <p class="text-gray-700 mb-3">
                Bebek pedaging adalah jenis bebek yang dipelihara khusus untuk produksi daging dengan pertumbuhan cepat dan bobot badan tinggi.
              </p>
              <ul class="ml-6 mt-2 space-y-2">
                <li class="text-gray-700"><strong class="text-emerald-700">Ciri Fisik:</strong> Bulu putih bersih (Peking) atau coklat (hibrida), postur besar dan gemuk, dada lebar berisi, kaki pendek kokoh, pertumbuhan sangat cepat</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Keunggulan:</strong> Masa panen singkat (45-60 hari), bobot panen 2,5-3,5 kg, konversi pakan efisien (FCR 2,5-2,8), daging empuk dan gurih cocok untuk bebek goreng/panggang, permintaan pasar tinggi terutama untuk kuliner</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Kelemahan:</strong> Butuh pakan berkualitas tinggi (protein 18-20%), harga DOD (Day Old Duck) lebih mahal Rp 8.000-10.000/ekor, memerlukan kandang dengan kolam atau tempat air, margin keuntungan lebih tipis dibanding ayam</li>
              </ul>
            </div>

            <!-- Bebek Petelur -->
            <div class="bg-emerald-50 rounded-lg p-6 mb-4">
              <h4 class="text-xl font-semibold text-emerald-900 mb-3">2. Bebek Petelur (Mojosari, Alabio, Campbell)</h4>
              <p class="text-gray-700 mb-3">
                Bebek petelur dipelihara khusus untuk produksi telur konsumsi dan olahan (telur asin, pindang) dengan masa produktif panjang.
              </p>
              <ul class="ml-6 mt-2 space-y-2">
                <li class="text-gray-700"><strong class="text-emerald-700">Ciri Fisik:</strong> Tubuh ramping dan tegak, aktif dan gesit, bulu coklat kehitaman (Mojosari/Alabio) atau abu-abu (Campbell), leher panjang, mata tajam</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Keunggulan:</strong> Produksi telur sangat tinggi (280-320 butir/tahun atau 80-90% duck day), ukuran telur besar 65-75 gram (lebih besar dari telur ayam 55-60g), tahan penyakit lebih baik dari ayam, masa produktif panjang (18-80 minggu), cocok untuk telur asin premium (harga tinggi)</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Kelemahan:</strong> Investasi awal besar (kandang, kolam, DOD mahal Rp 12.000-15.000), butuh waktu 18-22 minggu mulai bertelur (no income 5 bulan), memerlukan air banyak untuk mandi dan minum (biaya air tinggi), kotoran lebih basah dan bau (butuh manajemen sanitasi ketat)</li>
              </ul>
            </div>

            <!-- Bebek Lokal -->
            <div class="bg-emerald-50 rounded-lg p-6 mb-4">
              <h4 class="text-xl font-semibold text-emerald-900 mb-3">3. Bebek Lokal (Bebek Kampung/Semi Intensif)</h4>
              <p class="text-gray-700 mb-3">
                Bebek lokal yang dipelihara secara tradisional atau semi intensif, cocok untuk skala kecil dan integrasi dengan pertanian.
              </p>
              <ul class="ml-6 mt-2 space-y-2">
                <li class="text-gray-700"><strong class="text-emerald-700">Ciri Fisik:</strong> Bulu beragam warna (hitam, coklat, belang), ukuran sedang 1,5-2 kg, sangat adaptif dengan lingkungan</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Keunggulan:</strong> Sangat tahan penyakit (jarang sakit), bisa digembalakan (system free range) untuk hemat pakan, biaya produksi rendah, cocok untuk pemula atau sebagai usaha sampingan, bisa makan sisa dapur/limbah pertanian</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Kelemahan:</strong> Produksi telur rendah (150-200 butir/tahun), pertumbuhan lambat (3-4 bulan untuk 2 kg), telur ukuran kecil 55-65 gram, harga jual rendah</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- II. Manajemen Pemeliharaan Dasar -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-200">
            II. Manajemen Pemeliharaan Dasar
          </h2>
          
          <!-- A. Kandang dan Lingkungan -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">A. Kandang dan Lingkungan</h3>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Persyaratan Kandang</h4>
              <ul class="space-y-3">
                <li class="text-gray-700"><strong class="text-emerald-700">Ukuran per ekor:</strong> Bebek pedaging 4-5 ekor/m², bebek petelur 5-6 ekor/m² (bebek butuh space lebih luas dari ayam karena lebih aktif). Overcrowding menyebabkan stress dan kanibalisme (patuk-patukan)</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Ventilasi:</strong> Sangat penting! Bebek mengeluarkan amonia tinggi dari kotoran. Ventilasi minimal 40% dari luas dinding. Sistem open house dengan ventilasi silang (cross ventilation) ideal. Kipas exhaust untuk kandang closed house</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Lantai:</strong> Sistem panggung/slat lebih baik! Lantai kayu/bambu dengan celah 2-3 cm agar kotoran jatuh ke bawah. Tinggi panggung 50-80 cm dari tanah. Alternatif: lantai semen miring 3-5° dengan saluran pembuangan air + litter (sekam tebal 10-15 cm)</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Kolam/Tempat Air:</strong> Wajib! Bebek butuh air untuk mandi (preening untuk bersihkan bulu agar tetap waterproof), minum banyak, dan bermain (mental health). Sediakan kolam mini 1-2 m² per 20 ekor atau ember besar ganti air 2x/hari</li>
              </ul>
            </div>
          </div>

          <!-- B. Pakan dan Nutrisi -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">B. Pakan dan Nutrisi</h3>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Kebutuhan Pakan Berdasarkan Fase</h4>
              
              <p class="text-gray-700 mb-3 font-semibold">Bebek Pedaging (Masa Pemeliharaan 45-60 hari):</p>
              <div class="overflow-x-auto mb-6">
                <table class="w-full text-sm">
                  <thead>
                    <tr class="bg-emerald-100 text-emerald-800">
                      <th class="p-3 text-left">Fase</th>
                      <th class="p-3 text-left">Umur</th>
                      <th class="p-3 text-left">Protein</th>
                      <th class="p-3 text-left">Konsumsi/Ekor/Hari</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y">
                    <tr class="bg-white">
                      <td class="p-3">Starter</td>
                      <td class="p-3">0-21 hari</td>
                      <td class="p-3">20-21%</td>
                      <td class="p-3">30-80 gram</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-3">Grower</td>
                      <td class="p-3">22-45 hari</td>
                      <td class="p-3">18-19%</td>
                      <td class="p-3">80-150 gram</td>
                    </tr>
                    <tr class="bg-white">
                      <td class="p-3">Finisher</td>
                      <td class="p-3">46-60 hari</td>
                      <td class="p-3">16-17%</td>
                      <td class="p-3">150-180 gram</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p class="text-gray-700 mb-3 font-semibold">Bebek Petelur (Masa Produktif 22-80 minggu):</p>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead>
                    <tr class="bg-emerald-100 text-emerald-800">
                      <th class="p-3 text-left">Fase</th>
                      <th class="p-3 text-left">Umur</th>
                      <th class="p-3 text-left">Protein</th>
                      <th class="p-3 text-left">Konsumsi/Ekor/Hari</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y">
                    <tr class="bg-white">
                      <td class="p-3">Starter</td>
                      <td class="p-3">0-8 minggu</td>
                      <td class="p-3">18-19%</td>
                      <td class="p-3">40-90 gram</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-3">Grower</td>
                      <td class="p-3">9-20 minggu</td>
                      <td class="p-3">16-17%</td>
                      <td class="p-3">90-140 gram</td>
                    </tr>
                    <tr class="bg-white">
                      <td class="p-3">Pre-layer</td>
                      <td class="p-3">21-22 minggu</td>
                      <td class="p-3">17-18%</td>
                      <td class="p-3">140-160 gram</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-3">Layer (Produksi)</td>
                      <td class="p-3">23-80 minggu</td>
                      <td class="p-3">17-18%</td>
                      <td class="p-3">160-180 gram</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Pakan Alternatif Lokal Balikpapan</h4>
              <ul class="space-y-3">
                <li class="text-gray-700"><strong class="text-emerald-700">Keong mas/tutut fermentasi:</strong> Kumpulkan keong mas dari sawah/rawa (gratis!), rebus 10 menit, giling halus, campur dedak 20%, EM4 0,5%, fermentasi 3-5 hari. Hasilnya protein 45-50%! Gantikan 10-15% tepung ikan. Hemat biaya Rp 1.000-1.500/kg!</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Azolla segar/fermentasi:</strong> Budidaya azolla (tanaman air protein tinggi 25-30%) di kolam kecil. Panen setiap 7-10 hari. Kasih langsung segar 15-20% dari total pakan atau fermentasi dulu dengan EM4. Bebek suka banget azolla!</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Limbah ikan fermentasi:</strong> Kepala/isi perut ikan dari pasar (murah Rp 2.000-3.000/kg), giling, campur dedak 20%, EM4 1%, fermentasi 5-7 hari. Protein 30-35%, gantikan 10% tepung ikan</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Kangkung/bayam cincang:</strong> Kangkung murah di Balikpapan (Rp 2.000-3.000/ikat), cincang halus, kasih 10-15% dari total pakan sebagai vitamin dan serat. Bebek petelur suka sayuran!</li>
              </ul>
            </div>
          </div>

          <!-- C. Reproduksi dan Pembibitan -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">C. Reproduksi dan Pembibitan</h3>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Masa Dewasa Kelamin dan Produksi</h4>
              <ul class="space-y-3">
                <li class="text-gray-700"><strong class="text-emerald-700">Umur dewasa kelamin:</strong> 20-24 minggu (lebih lama dari ayam 18-20 minggu). Bebek Mojosari/Alabio mulai bertelur umur 22-24 minggu. Campbell lebih cepat 20-22 minggu. Telur pertama biasanya kecil 50-55 gram</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Peak production:</strong> Umur 28-40 minggu, produksi mencapai puncak 85-90% duck day (DD). Pertahankan dengan nutrisi optimal (protein 17-18%, kalsium 3-3,5%), air melimpah, dan stress minimal</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Pencahayaan:</strong> Bebek butuh cahaya 14-16 jam/hari untuk produksi optimal. Gunakan timer otomatis. Intensitas 10-20 lux (1 lampu 40-60 watt untuk 20 m²)</li>
              </ul>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Manajemen Air untuk Bebek</h4>
              <ul class="space-y-3">
                <li class="text-gray-700"><strong class="text-emerald-700">Air minum:</strong> Bebek petelur minum 0,5-0,8 liter/ekor/hari (3-4x lebih banyak dari ayam!). Pastikan tempat minum tidak pernah kosong. Gunakan tempat minum otomatis (nipple drinker atau trough besar)</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Air mandi (kolam):</strong> Wajib harus ada! Bebek butuh mandi untuk: (1) Membersihkan bulu (preening) agar waterproof, (2) Membersihkan mata/hidung dari debu/kotoran, (3) Cooling down saat panas, (4) Mental health (bebek senang main air = stress rendah = produksi tinggi). Kolam minimal 1-2 m² per 20 ekor atau ember besar per 5 ekor</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Ganti air kolam:</strong> Wajib 2x/hari (pagi jam 7 & sore jam 16). Air kolam cepat kotor (kotoran, ludah, sisa pakan). Air kotor = sarang bakteri (E.coli, Salmonella) = diare massal = kematian</li>
              </ul>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Pembibitan dan Penetasan</h4>
              <ul class="space-y-3">
                <li class="text-gray-700"><strong class="text-emerald-700">Rasio jantan:betina:</strong> 1 jantan untuk 6-8 betina (rasio 1:6-8). Terlalu banyak jantan = betina stress (dikejar-kejar terus). Terlalu sedikit jantan = fertilitas rendah (banyak telur tidak terbuahi)</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Pengumpulan telur tetas:</strong> Ambil telur pagi hari (bersih, tidak retak), pilih ukuran sedang-besar (65-75 gram). Jangan pilih terlalu kecil (<60g) atau terlalu besar (>80g = double yolk = gagal menetas). Simpan di suhu 15-18°C, kelembaban 75%, posisi tumpul di atas. Maksimal simpan 7 hari sebelum tetaskan</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Penetasan:</strong> Gunakan mesin tetas (inkubator). Suhu 37,8°C, kelembaban 60-65% (hari 1-25), naikkan jadi 70-75% (hari 26-28). Balik telur 3-4x/hari sampai hari 25. Hari 28 DOD mulai menetas. Fertilitas normal 85-90%, daya tetas 75-85%</li>
              </ul>
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
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">A. Penyakit Umum pada Bebek</h3>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Duck Plague / Duck Viral Enteritis (DVE)</h4>
              <p class="text-gray-700 mb-3">Penyakit viral sangat berbahaya dengan mortalitas hingga 90-100%, disebabkan oleh Virus Herpes (Anatid Herpesvirus 1)</p>
              <ul class="space-y-3">
                <li class="text-gray-700"><strong class="text-emerald-700">Gejala:</strong> Bebek lesu mendadak, nafsu makan hilang total, diare berdarah hijau kehitaman, discharge (cairan) dari mata/hidung, kesulitan bernapas, tremor (gemetar), kelumpuhan kepala/leher, kematian massal 24-48 jam setelah gejala muncul</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Penanganan:</strong> Tidak ada obat! Isolasi bebek sakit segera, afkir dan bakar/kubur dalam. Desinfeksi total kandang dan kolam dengan formalin/kaporit. Wajib lapor ke Dinas Peternakan untuk bantuan vaksinasi massal</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Pencegahan:</strong> Vaksinasi wajib! Vaksin Duck Plague (inactivated vaccine) umur 8-10 minggu, booster 18-20 minggu. Vaksinasi ulang setiap 6 bulan untuk bebek petelur. Biosekuriti ketat: ganti air kolam teratur, hindari bebek kontak dengan bebek lain/burung liar, desinfeksi rutin</li>
              </ul>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Riemerella anatipestifer (New Duck Disease)</h4>
              <p class="text-gray-700 mb-3">Infeksi bakteri yang menyerang bebek umur 2-8 minggu dengan mortalitas 50-75% tanpa pengobatan</p>
              <ul class="space-y-3">
                <li class="text-gray-700"><strong class="text-emerald-700">Gejala:</strong> Bebek lesu, mata berair/bengkak, bersin, discharge hidung hijau, diare kuning kehijauan, berjalan sempoyongan, kepala/leher bengkok (tortikolis), gemetar, kelumpuhan</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Penanganan:</strong> Antibiotik Sulfadimethoxine + Trimethoprim (2 gram/liter air minum 5-7 hari), atau Enrofloxacin (0,5-1 ml/liter 5-7 hari). Isolasi bebek sakit, ganti air kolam segera, semprot kandang dengan desinfektan</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Pencegahan:</strong> Sanitasi air kolam krusial! Ganti air 2x/hari tanpa kompromi. Hindari overcrowding. Vaksinasi (autovaksin dari isolat lokal) di daerah endemik. Berikan vitamin C + E untuk boost imunitas</li>
              </ul>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Colibacillosis (E. coli)</h4>
              <p class="text-gray-700 mb-3">Infeksi bakteri usus akibat sanitasi buruk, terutama air kolam kotor</p>
              <ul class="space-y-3">
                <li class="text-gray-700"><strong class="text-emerald-700">Gejala:</strong> Diare berair putih/kuning berbau busuk, dehidrasi (mata cekung, kulit kering), lesu, nafsu makan hilang, pertumbuhan terhambat (untuk pedaging), produksi turun (untuk petelur), mortalitas 20-40%</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Penanganan:</strong> Antibiotik Neomycin (2 gram/liter air minum 3-5 hari), atau Colistin, atau Enrofloxacin. Berikan elektrolit + vitamin untuk rehidrasi. Ganti air kolam segera, bersihkan tempat makan/minum</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Pencegahan:</strong> Sanitasi air nomor satu! Ganti air kolam 2x/hari, cuci tempat minum dengan desinfektan setiap hari. Hindari overcrowding. Probiotik (EM4, Bacillus subtilis) dalam air minum 2x/minggu untuk sehatkan usus</li>
              </ul>
            </div>
          </div>

          <!-- B. Program Vaksinasi -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">B. Program Vaksinasi</h3>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Program Vaksinasi Bebek</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead>
                    <tr class="bg-emerald-100 text-emerald-800">
                      <th class="p-3 text-left">Umur</th>
                      <th class="p-3 text-left">Vaksin</th>
                      <th class="p-3 text-left">Penyakit Target</th>
                      <th class="p-3 text-left">Metode</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y">
                    <tr class="bg-white">
                      <td class="p-3">1 hari (DOD)</td>
                      <td class="p-3">DVH Antiserum</td>
                      <td class="p-3">Duck Viral Hepatitis</td>
                      <td class="p-3">Suntik subkutan</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-3">8-10 hari</td>
                      <td class="p-3">Duck Plague (DVE)</td>
                      <td class="p-3">Duck Plague / Viral Enteritis</td>
                      <td class="p-3">Suntik IM (intramuscular)</td>
                    </tr>
                    <tr class="bg-white">
                      <td class="p-3">18-20 minggu</td>
                      <td class="p-3">Duck Plague (Booster)</td>
                      <td class="p-3">Duck Plague / Viral Enteritis</td>
                      <td class="p-3">Suntik IM</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-3">Setiap 6 bulan</td>
                      <td class="p-3">Duck Plague (Booster Rutin)</td>
                      <td class="p-3">Duck Plague / Viral Enteritis</td>
                      <td class="p-3">Suntik IM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <!-- IV. Manajemen Pasca Panen dan Pemasaran -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-200">
            IV. Manajemen Pasca Panen dan Pemasaran
          </h2>
          
          <!-- A. Pemotongan dan Standar Karkas -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">A. Pemotongan dan Standar Karkas</h3>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Persiapan Sebelum Pemotongan</h4>
              <ul class="space-y-3">
                <li class="text-gray-700"><strong class="text-emerald-700">Puasa sebelum potong:</strong> 8-12 jam sebelum pemotongan, bebek dipuasakan (hanya air). Tujuan: kosongkan saluran pencernaan agar tidak kotor saat dikeluarkan jeroan, mengurangi kontaminasi bakteri</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Sortasi bebek siap potong:</strong> Bobot ideal 2,5-3,0 kg (umur 45-60 hari). Bebek sehat, tidak sakit, tidak cacat. Bebek sakit/lemah dipisahkan dan tidak boleh dijual konsumsi</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Transportasi ke RPH:</strong> Gunakan keranjang plastik berlubang, maksimal 5-6 ekor/keranjang (bebek lebih besar dari ayam). Transportasi malam/pagi hari (sejuk). Stress = daging keras, bulu susah cabut</li>
              </ul>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Standar Kualitas Karkas</h4>
              <ul class="space-y-3">
                <li class="text-gray-700"><strong class="text-emerald-700">Grade A (Premium):</strong> Kulit utuh kuning cerah, daging dada berisi tebal, tidak ada memar/luka/patah tulang, lemak subkutan merata. Untuk restoran premium (bebek goreng, bebek panggang/peking duck)</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Grade B (Standar):</strong> Kulit sedikit cacat minor, daging cukup berisi, warna kulit agak pucat. Untuk warung makan bebek, bebek bakar</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Grade C (Reject):</strong> Kulit robek/rusak, memar, daging kurus, warna gelap. Untuk olahan (sosis bebek, nugget, abon bebek) atau dijual murah ke pasar tradisional</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Rendemen Karkas:</strong> Bobot hidup 2,5 kg → Karkas 1,6-1,8 kg (rendemen 65-72%, lebih tinggi dari ayam 65-70%)</li>
              </ul>
            </div>
          </div>

          <!-- B. Pemasaran dan Ekonomi -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">B. Pemasaran dan Ekonomi</h3>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Saluran Pemasaran di Balikpapan</h4>
              <ul class="space-y-3">
                <li class="text-gray-700"><strong class="text-emerald-700">Restoran Bebek Goreng/Bakar:</strong> Target utama! Restoran bebek goreng (Bebek Tepi Sawah, Bebek Kaleyo, dll) butuh supply rutin. Harga Rp 37.000-40.000/kg hidup. Kontrak jangka panjang, volume stabil, pembayaran kredit 1-2 minggu</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Industri Telur Asin:</strong> Target utama untuk telur! Produsen telur asin butuh supply telur mentah rutin. Harga Rp 2.600-2.800/butir. Volume besar, kontrak bulanan, pembayaran 2 minggu. Atau produksi telur asin sendiri (margin 80-120%!)</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Pasar Tradisional:</strong> Jual langsung ke pedagang daging/telur. Harga bebek Rp 35.000-37.000/kg hidup, telur Rp 2.500-2.700/butir. Paling mudah tapi margin tipis</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Olahan Sendiri:</strong> Goreng/presto sendiri, jual bebek goreng siap saji Rp 90.000-120.000/ekor. Margin 100-150%! Atau bebek asap, bebek presto kaleng, telur asin, telur pindang. Butuh tenaga kerja + perizinan P-IRT</li>
              </ul>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Pemanfaatan Limbah</h4>
              <ul class="space-y-3">
                <li class="text-gray-700"><strong class="text-emerald-700">Kotoran bebek (duck manure):</strong> Pupuk organik super kualitas (N 1,5-2%, P 1,5-2%, K 0,8-1% - lebih tinggi dari kotoran ayam!). Jual Rp 600-1.000/kg kering atau Rp 250.000-400.000/pickup basah. Permintaan sangat tinggi dari petani sawah, tambak ikan, petani sayur</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Bulu bebek (duck feather):</strong> Bernilai tinggi! Bulu bebek untuk: (1) Isi bantal/guling (bulu halus), (2) Jaket musim dingin (down feather), (3) Shuttlecock (bulu sayap), (4) Kerajinan (hiasan). Harga Rp 5.000-8.000/kg kering (3-4x lipat dari bulu ayam Rp 2.000-3.000!)</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Jeroan bebek:</strong> Hati dan empedal/gizzard bebek sangat enak! Jual terpisah Rp 60.000-80.000/kg (lebih mahal dari daging). Pasar: restoran Chinese food, sate jeroan, soto/bakso jeroan</li>
              </ul>
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
                  <p>Layanan: Penyuluhan bebek, bantuan DOD/pakan, vaksinasi gratis (Duck Plague, AI), perizinan usaha peternakan bebek</p>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Poultry Shop & Supplier</h4>
              <div class="space-y-3">
                <div class="text-gray-700">
                  <p class="font-semibold text-emerald-700">UD Mitra Tani Sejahtera</p>
                  <p>Alamat: Jl. MT Haryono RT 35, Sepinggan</p>
                  <p>Telepon: (0542) 7654321</p>
                  <p>Produk: DOD bebek Peking/Mojosari, pakan bebek komplit, vaksin Duck Plague/DVH, vitamin, peralatan kandang</p>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Pembeli/Mitra Usaha</h4>
              <div class="space-y-3">
                <div class="text-gray-700">
                  <p class="font-semibold text-emerald-700">Restoran Bebek Goreng "Sari Rasa"</p>
                  <p>Alamat: Jl. Ahmad Yani, Balikpapan Tengah</p>
                  <p>Kebutuhan: 50-80 ekor bebek pedaging/minggu, bobot 2,5-3 kg, grade A. Harga Rp 38.000-40.000/kg hidup. Kontrak rutin</p>
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
                  <p><strong class="text-emerald-700">DOD (Day Old Duck):</strong> Anak bebek umur 1 hari yang baru menetas dari hatchery. Lebih besar dari DOC ayam</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">FCR (Feed Conversion Ratio):</strong> Rasio konversi pakan = kg pakan untuk menghasilkan 1 kg pertambahan bobot. Bebek FCR 2,5-2,8 (lebih tinggi dari ayam 1,6-1,8)</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">DD (Duck Day Production):</strong> Persentase produksi telur per hari = (jumlah telur/jumlah bebek) × 100%. DD 85% = dari 100 bebek dapat 85 butir telur/hari</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Preening:</strong> Aktivitas bebek membersihkan dan merawat bulu dengan paruh. Butuh air/kolam untuk preening agar bulu tetap waterproof</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Duck Plague (DVE):</strong> Penyakit viral paling fatal pada bebek, mortalitas 90-100%. Pencegahan wajib vaksinasi!</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Telur Asin:</strong> Telur bebek yang diawetkan dengan cara direndam/dilumuri campuran garam dan abu/tanah liat selama 10-14 hari. Produk olahan utama telur bebek</p>
                </div>
              </div>
            </div>
          </div>

          <!-- C. Referensi -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">C. Referensi dan Bacaan Lanjutan</h3>
            
            <div class="bg-gray-50 rounded-lg p-6">
              <ul class="space-y-3">
                <li class="text-gray-700"><strong class="text-emerald-700">Buku:</strong> "Beternak Bebek Petelur dan Pedaging" - Kementerian Pertanian RI</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Website:</strong> cybex.pertanian.go.id - Artikel lengkap budidaya bebek, penyakit, pemasaran</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Video:</strong> Channel YouTube "Bebek Milenial" - Tutorial lengkap dari DOD sampai panen</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Grup:</strong> Facebook Group "Peternak Itik Indonesia" - Komunitas 30.000+ peternak bebek</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Penutup -->
        <section class="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-8 mb-8">
          <h3 class="text-2xl font-semibold text-emerald-900 mb-4">Kesimpulan</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Beternak bebek di Balikpapan memiliki prospek sangat menjanjikan dengan permintaan daging bebek untuk kuliner dan telur untuk telur asin yang terus meningkat. 
            Kunci sukses dalam usaha peternakan bebek adalah: <strong>(1) Manajemen air yang sempurna</strong> - ganti air kolam 2x/hari tanpa kompromi karena air adalah kehidupan bebek, 
            <strong>(2) Sanitasi ketat</strong> untuk cegah penyakit bakteri yang berkembang di lingkungan basah, 
            <strong>(3) Vaksinasi wajib</strong> terutama Duck Plague untuk proteksi dari penyakit fatal, 
            <strong>(4) Pemanfaatan nilai tambah</strong> dengan mengolah telur jadi telur asin (margin 80-120%) dan memanfaatkan bulu bebek yang bernilai tinggi, 
            <strong>(5) Networking pemasaran</strong> dengan restoran bebek dan industri telur asin untuk stabilitas income.
          </p>
          <p class="text-gray-700 leading-relaxed">
            Mulai dari skala kecil 100-300 ekor untuk belajar dinamika usaha. Manfaatkan pendampingan Dinas Peternakan dan bergabung dengan kelompok peternak bebek. 
            Fokus pada kualitas air dan sanitasi sebagai prioritas utama. Dengan dedikasi, disiplin, dan inovasi produk olahan, 
            usaha peternakan bebek bisa menjadi sumber penghasilan yang sangat menguntungkan dan berkelanjutan!
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
