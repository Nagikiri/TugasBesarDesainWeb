<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import ayamImage from '@/assets/images/AyamPaduan.webp';

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
        :src="ayamImage" 
        alt="Ternak Ayam"
        class="w-full h-full object-cover"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 p-8 md:p-12">
        <div class="max-w-6xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
            Panduan Lengkap Beternak Ayam di Balikpapan
          </h1>
          <p class="text-gray-200 text-lg">
            Panduan praktis untuk usaha peternakan ayam broiler dan layer yang menguntungkan
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
            Beternak ayam di Balikpapan memiliki prospek yang sangat menjanjikan mengingat tingginya permintaan daging dan telur ayam. 
            Dengan manajemen yang tepat dan pemahaman yang baik tentang karakteristik ayam broiler dan layer, usaha peternakan ayam 
            bisa memberikan keuntungan yang stabil. Panduan ini dirancang khusus untuk membantu peternak di Balikpapan mengoptimalkan 
            produktivitas ternak ayam mereka.
          </p>
        </section>

        <!-- I. Pengenalan Ternak Ayam -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-200">
            I. Pengenalan Ternak Ayam
          </h2>
          
          <div class="mb-8">
            <p class="text-gray-700 mb-6 leading-relaxed">
              Ayam adalah ternak unggas paling populer di Indonesia dengan permintaan pasar yang sangat stabil sepanjang tahun. 
              Di Balikpapan, usaha peternakan ayam (broiler dan layer) memiliki prospek sangat menjanjikan dengan ROI 15-25% per siklus untuk broiler (35 hari) 
              dan 30-40% per tahun untuk layer (masa produktif 18-80 minggu). Kunci sukses: manajemen suhu (heat stress = musuh utama di iklim tropis Balikpapan!), 
              biosekuriti ketat (cegah penyakit viral fatal), dan efisiensi pakan (FCR optimal = profit maksimal).
            </p>

            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Dua Jenis Ayam Ternak Utama</h3>
            
            <!-- Ayam Broiler -->
            <div class="bg-emerald-50 rounded-lg p-6 mb-4">
              <h4 class="text-xl font-semibold text-emerald-900 mb-3">1. Ayam Broiler (Pedaging) - Raja Pertumbuhan Cepat</h4>
              
              <p class="text-gray-700 mb-3">
                <strong class="text-emerald-700">Deskripsi:</strong> Ayam broiler adalah hibrida modern hasil persilangan genetik untuk produksi daging maksimal dalam waktu singkat. 
                Strain populer: Cobb 500, Ross 308, Arbor Acres. Ciri khas: pertumbuhan super cepat 40-50 gram/hari (umur 35 hari = 2 kg!), 
                dada lebar berisi (breast meat 30-35% dari bobot hidup), kaki pendek kokoh, bulu putih dominan (kulit kuning cerah setelah dipotong), 
                nafsu makan sangat tinggi.
              </p>

              <div class="space-y-3 mb-3">
                <div>
                  <p class="font-semibold text-emerald-700">Keunggulan Utama:</p>
                  <ul class="ml-6 mt-2 space-y-2 text-gray-700">
                    <li>• <strong>Turnover super cepat:</strong> Masa panen 28-35 hari (1 bulan!). Siklus 8-10 kali/tahun = cash flow sangat cepat. Cocok untuk modal terbatas (putaran cepat)</li>
                    <li>• <strong>FCR sangat efisien:</strong> FCR 1,5-1,8 (butuh 1,5-1,8 kg pakan untuk naik 1 kg bobot). Ini termasuk paling efisien di semua ternak! Bandingkan: bebek FCR 2,5-2,8, kambing FCR 4-5, sapi FCR 6-8</li>
                    <li>• <strong>Bobot panen ideal:</strong> 1,5-2,0 kg hidup (umur 32-35 hari). Ukuran ini paling laris di pasar Balikpapan (1 ekor cukup untuk 3-4 porsi keluarga). Harga Rp 23.000-27.000/kg hidup</li>
                    <li>• <strong>Permintaan sangat stabil:</strong> Daging ayam = protein hewani termurah (Rp 35.000-45.000/kg daging, jauh lebih murah dari sapi Rp 120.000-150.000/kg). Konsumsi per kapita Indonesia 7-8 kg/tahun (naik terus!). Pasar tidak pernah sepi</li>
                    <li>• <strong>Skala fleksibel:</strong> Bisa mulai 500 ekor (modal Rp 15-20 juta), scale up ke 5.000-10.000 ekor. Cocok untuk pemula dan profesional</li>
                  </ul>
                </div>

                <div>
                  <p class="font-semibold text-emerald-700">Kelemahan dan Tantangan:</p>
                  <ul class="ml-6 mt-2 space-y-2 text-gray-700">
                    <li>• <strong>Sangat rentan penyakit:</strong> Sistem imun lemah (trade-off pertumbuhan cepat). Penyakit viral (ND, AI, IBD) bisa wipe out 50-80% populasi dalam 3-5 hari! Biosekuriti ketat dan vaksinasi presisi WAJIB</li>
                    <li>• <strong>Heat stress kritis:</strong> Ayam broiler sangat sensitif panas (metabolisme tinggi = produksi panas internal banyak). Suhu >32°C = nafsu makan drop 30-50% = pertumbuhan lambat = FCR jelek. Balikpapan suhu 28-34°C = butuh cooling system (kipas + fogging)</li>
                    <li>• <strong>Butuh pakan berkualitas:</strong> Protein 20-22% (starter), 19-21% (grower), 18-20% (finisher). Pakan murah kualitas rendah = pertumbuhan lambat = FCR buruk = rugi. Biaya pakan 60-70% dari total biaya produksi!</li>
                    <li>• <strong>Margin tipis kompetitif:</strong> Harga DOC dan pakan fluktuatif, harga jual ayam hidup juga naik-turun (Rp 22.000-28.000/kg). Profit net hanya Rp 3.000-7.000/ekor (15-25% ROI per siklus). Butuh efisiensi tinggi dan volume besar untuk untung signifikan</li>
                    <li>• <strong>Mortalitas 3-5%:</strong> Angka kematian normal 3-5% (dari 1000 ekor, 30-50 mati). Penyakit/heat stress bisa naikkan sampai 10-20% = rugi besar</li>
                  </ul>
                </div>

                <div>
                  <p class="font-semibold text-emerald-700">Rekomendasi:</p>
                  <p class="text-gray-700 ml-6 mt-2">
                    Cocok untuk: Peternak yang ingin cash flow cepat (putaran 1 bulan), modal terbatas tapi mau skala up bertahap, fokus pada efisiensi operasional dan biosekuriti. 
                    Target pasar: Pedagang ayam potong pasar tradisional, rumah makan, restoran cepat saji (fried chicken), katering. 
                    Kunci profit: Tekan mortalitas <3%, FCR <1,7, beli DOC dan pakan kontrak (harga stabil), jual langsung ke end user (skip tengkulak).
                  </p>
                </div>
              </div>
            </div>

            <!-- Ayam Layer -->
            <div class="bg-emerald-50 rounded-lg p-6 mb-4">
              <h4 class="text-xl font-semibold text-emerald-900 mb-3">2. Ayam Layer (Petelur) - Mesin Telur Produktif</h4>
              
              <p class="text-gray-700 mb-3">
                <strong class="text-emerald-700">Deskripsi:</strong> Ayam layer adalah ayam petelur hibrida diseleksi genetik untuk produksi telur maksimal dengan efisiensi pakan tinggi. 
                Strain populer: Hy-Line Brown (telur coklat), Lohmann Brown, ISA Brown (telur coklat besar), Hy-Line W-36 (telur putih kecil). 
                Ciri khas: tubuh ramping ringan 1,4-1,8 kg (berat daging rendah = energi fokus ke produksi telur), jengger merah besar cerah (hormon estrogen tinggi), 
                mata tajam, aktif lincah, bulu rapi, kloaka lebar merah muda (tanda produksi aktif).
              </p>

              <div class="space-y-3 mb-3">
                <div>
                  <p class="font-semibold text-emerald-700">Keunggulan Utama:</p>
                  <ul class="ml-6 mt-2 space-y-2 text-gray-700">
                    <li>• <strong>Produksi telur sangat tinggi:</strong> Hen Day Production (HDP) 80-95% pada puncak (umur 24-40 minggu). Artinya dari 100 ekor dapat 80-95 butir telur/hari! Total produksi 280-320 butir/ekor/tahun (masa produktif 18-80 minggu = 62 minggu = 14 bulan)</li>
                    <li>• <strong>Income stabil jangka panjang:</strong> Telur produksi harian = cash flow harian. Harga telur relatif stabil Rp 1.600-2.200/butir (fluktuasi musiman kecil, tidak seperti ayam broiler yang naik-turun drastis). Cocok untuk perencanaan keuangan jangka panjang</li>
                    <li>• <strong>ROI menarik:</strong> Meskipun investasi awal besar (kandang baterai + DOC pullet mahal), ROI 30-40%/tahun setelah mencapai puncak produksi. Payback period 18-24 bulan (2 tahun balik modal + profit)</li>
                    <li>• <strong>Afkir tetap ada nilai:</strong> Setelah masa produktif (umur 80-90 minggu), ayam layer afkir masih bisa dijual Rp 30.000-45.000/ekor untuk kaldu ayam, soto ayam, ayam suwir. Tidak total loss seperti broiler habis panen</li>
                    <li>• <strong>Pasar telur luas:</strong> Telur = bahan pangan pokok rumah tangga + industri (roti, kue, mie, snack). Permintaan sangat besar dan stabil. Konsumsi per kapita Indonesia 100-120 butir/tahun (naik terus sejalan peningkatan ekonomi)</li>
                  </ul>
                </div>

                <div>
                  <p class="font-semibold text-emerald-700">Kelemahan dan Tantangan:</p>
                  <ul class="ml-6 mt-2 space-y-2 text-gray-700">
                    <li>• <strong>Investasi awal sangat besar:</strong> Kandang baterai sistem cage (battery cage) mahal Rp 150.000-250.000/unit untuk 3-4 ekor. Untuk 1000 ekor butuh 250-330 unit = Rp 40-80 juta kandang saja! Belum DOC pullet (siap bertelur) Rp 65.000-85.000/ekor = Rp 65-85 juta untuk 1000 ekor. Total investasi 1000 ekor layer: Rp 150-200 juta (10x lipat dari broiler!)</li>
                    <li>• <strong>Periode rearing panjang:</strong> DOC layer harus dipelihara 0-18 minggu (4,5 bulan) sebelum mulai bertelur. Selama periode ini = TIDAK ADA INCOME, hanya keluar biaya pakan, obat, listrik. Butuh modal kerja besar untuk bertahan 5 bulan tanpa pemasukan</li>
                    <li>• <strong>Sangat sensitif stress:</strong> Stress = penurunan produksi telur drastis. Penyebab stress: suhu panas >30°C (HDP drop 10-30%), kekurangan air/pakan (produksi langsung stop), penyakit (ND, IB, EDS), kebisingan mendadak, predator (tikus, ular). Manajemen harus ekstra hati-hati!</li>
                    <li>• <strong>Nutrisi presisi wajib:</strong> Kalsium 3,5-4% untuk kualitas cangkang telur (kalsium kurang = telur retak banyak = reject = rugi). Protein 16-18%, energi 2700-2800 kkal/kg. Pakan layer mahal Rp 6.500-7.500/kg (lebih mahal dari broiler Rp 6.000-7.000/kg)</li>
                    <li>• <strong>Penyakit reproduksi:</strong> EDS (Egg Drop Syndrome = produksi drop tiba-tiba), IB (Infectious Bronchitis = telur abnormal cangkang tipis/tidak ada kuning), Salpingitis (infeksi oviduct = ayam tidak bertelur). Vaksinasi lengkap dan biosekuriti ketat WAJIB!</li>
                  </ul>
                </div>

                <div>
                  <p class="font-semibold text-emerald-700">Rekomendasi:</p>
                  <p class="text-gray-700 ml-6 mt-2">
                    Cocok untuk: Investor dengan modal besar (minimum Rp 150-200 juta untuk 1000 ekor), orientasi jangka panjang (2-3 tahun), cash flow stabil harian. 
                    Target pasar: Pedagang telur pasar tradisional (grosir), toko kelontong, minimarket, industri kue/roti, hotel/restoran (kontrak bulanan). 
                    Kunci profit: Pertahankan HDP >80% sepanjang masa produktif (manajemen nutrisi + environment optimal), tekan telur retak <3%, jual telur langsung ke retailer (margin lebih besar dari jual ke pengepul).
                  </p>
                </div>
              </div>
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
              <h4 class="text-lg font-semibold text-gray-800 mb-3">1. Syarat Kandang Ideal</h4>
              <ul class="space-y-3">
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <div>
                    <strong class="text-gray-800">Ukuran per ekor:</strong>
                    <span class="text-gray-700"> Broiler postal 10-12 ekor/m², layer baterai 3-4 ekor/sangkar (40x40 cm). Kepadatan berlebih = stress = penyakit</span>
                  </div>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <div>
                    <strong class="text-gray-800">Ventilasi:</strong>
                    <span class="text-gray-700"> KRUSIAL di Balikpapan! Pasang ventilasi minimal 30% dari luas dinding. Sistem open house dengan kipas exhaust atau ventilasi natural dengan bukaan lebar. Sirkulasi udara = kunci mencegah heat stress</span>
                  </div>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <div>
                    <strong class="text-gray-800">Lantai:</strong>
                    <span class="text-gray-700"> Broiler postal: semen + litter (sekam/serbuk gergaji) tebal 5-10 cm. Layer baterai: lantai kawat RAM (ukuran lubang 1,5x1,5 cm) agar kotoran jatuh. Kemiringan 5% ke saluran pembuangan</span>
                  </div>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <div>
                    <strong class="text-gray-800">Atap:</strong>
                    <span class="text-gray-700"> Tinggi minimal 3-4 meter. Gunakan insulasi (asbes + plafon atau atap ganda) untuk kurangi radiasi panas. Atap terang (putih/silver) reflect panas lebih baik</span>
                  </div>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <div>
                    <strong class="text-gray-800">Pemanas DOC:</strong>
                    <span class="text-gray-700"> DOC 0-7 hari butuh suhu 32-35°C. Gunakan lampu pemanas 100-150 watt atau gas brooder. 1 pemanas untuk 100-150 DOC</span>
                  </div>
                </li>
              </ul>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">2. Manajemen Suhu dan Kelembaban</h4>
              <p class="text-gray-700 mb-3">
                Heat stress adalah musuh utama ayam di Balikpapan. Suhu ideal 18-24°C, Balikpapan rata-rata 26-32°C. Ayam mulai stress >28°C, produksi drop drastis >32°C.
              </p>
              <ul class="space-y-3">
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <span class="text-gray-700"><strong>Kipas angin:</strong> Pasang kipas exhaust besar (36-48 inch) untuk kandang closed house. Operasikan saat suhu >28°C. 1 kipas untuk 100-150 m² kandang</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <span class="text-gray-700"><strong>Cooling system:</strong> Fogging/misting system semprot kabut air halus saat siang panas (11:00-15:00). Turunkan suhu 3-5°C instantly. Pastikan tidak basahi litter</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <span class="text-gray-700"><strong>Naungan tambahan:</strong> Tanam pohon rindang di sekitar kandang (minimal 5 meter dari kandang). Atau pasang shade net untuk kurangi sinar matahari langsung</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <span class="text-gray-700"><strong>Air minum:</strong> Selalu tersedia! Ayam heat stress minum 2-3x lebih banyak. Ganti air 2-3x/hari agar tetap dingin dan segar. Air hangat = ayam tidak mau minum = dehidrasi</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <span class="text-gray-700"><strong>Kelembaban ideal:</strong> 60-70%. Kelembaban tinggi + panas = heat stress parah. Ventilasi baik bantu kontrol kelembaban</span>
                </li>
              </ul>
            </div>

            <div class="bg-gray-50 rounded-lg p-6">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">3. Pencegahan Hama dan Sanitasi</h4>
              <ul class="space-y-3">
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <span class="text-gray-700"><strong>Sanitasi rutin:</strong> Buang litter basah/kotor setiap hari. Cuci tempat makan/minum setiap hari dengan desinfektan. Semprot kandang dengan desinfektan (Virkon, Rodalon) seminggu sekali</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <span class="text-gray-700"><strong>Fumigasi kandang kosong:</strong> Setelah panen, bersihkan total kandang, semprot desinfektan, fumigasi dengan formalin 40% (1 ml/m³) + KMnO4. Istirahat kandang 14 hari sebelum isi ayam baru</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <span class="text-gray-700"><strong>Kontrol tikus:</strong> Pasang perangkap tikus dan racun tikus di luar kandang. Tikus = vector penyakit (Salmonella) dan pemakan pakan (rugi)</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <span class="text-gray-700"><strong>Biosekuriti:</strong> Batasi orang keluar masuk kandang. Sediakan foot dip (desinfektan) di pintu masuk. Ganti baju/sepatu khusus kandang. Karantina DOC baru di kandang terpisah 3-5 hari</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- B. Pakan dan Nutrisi -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">B. Pakan dan Nutrisi</h3>
            
            <p class="text-gray-700 mb-4">
              Pakan adalah <strong class="text-emerald-700">biaya terbesar</strong> (60-70% total biaya produksi) dan faktor utama penentu performa ayam. 
              FCR (Feed Conversion Ratio) adalah indikator efisiensi: FCR 1,7 berarti butuh 1,7 kg pakan untuk naik 1 kg bobot. 
              <strong class="text-emerald-700">Semakin rendah FCR, semakin efisien dan menguntungkan!</strong> Broiler target FCR <1,8, Layer target konsumsi stabil 100-120 gram/hari.
            </p>

            <div class="overflow-x-auto mb-4">
              <table class="w-full border-collapse border border-emerald-200">
                <thead>
                  <tr class="bg-emerald-100 text-emerald-800">
                    <th class="border border-emerald-200 px-4 py-3 text-left">Kategori Ayam</th>
                    <th class="border border-emerald-200 px-4 py-3 text-left">Jenis Pakan</th>
                    <th class="border border-emerald-200 px-4 py-3 text-left">Komposisi Nutrisi</th>
                    <th class="border border-emerald-200 px-4 py-3 text-left">Jumlah/Hari</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="hover:bg-emerald-50">
                    <td class="border border-emerald-200 px-4 py-3 align-top">
                      <strong class="text-emerald-700">Broiler Starter</strong><br>
                      <span class="text-sm text-gray-600">(0-14 hari)</span>
                    </td>
                    <td class="border border-emerald-200 px-4 py-3">
                      Voer starter crumble BR-1 (halus, mudah dicerna DOC)
                    </td>
                    <td class="border border-emerald-200 px-4 py-3">
                      <strong>Protein 22-23%</strong> (tinggi untuk pertumbuhan cepat awal), energi 3000-3100 kkal/kg, lisin 1,2%, metionin 0,5%. 
                      <span class="text-emerald-700">Tambahan: vitamin chick booster (A, D3, E) + elektrolit untuk cegah stress DOC</span>
                    </td>
                    <td class="border border-emerald-200 px-4 py-3">
                      20-40 gram/ekor naik bertahap setiap hari. Total fase: 420 gram/ekor (14 hari)
                    </td>
                  </tr>
                  <tr class="hover:bg-emerald-50">
                    <td class="border border-emerald-200 px-4 py-3 align-top">
                      <strong class="text-emerald-700">Broiler Grower</strong><br>
                      <span class="text-sm text-gray-600">(15-24 hari)</span>
                    </td>
                    <td class="border border-emerald-200 px-4 py-3">
                      Voer grower pellet BR-2 (bentuk pellet kecil, efisien dimakan)
                    </td>
                    <td class="border border-emerald-200 px-4 py-3">
                      <strong>Protein 20-21%</strong>, energi 3100-3200 kkal/kg. Fase pertumbuhan otot cepat (ADG = Average Daily Gain 50-60 gram/hari). 
                      Lemak 5-6% untuk energi tinggi, calcium 1%, phosphor 0,6%
                    </td>
                    <td class="border border-emerald-200 px-4 py-3">
                      50-80 gram/ekor/hari. Total fase: 650 gram/ekor (10 hari)
                    </td>
                  </tr>
                  <tr class="hover:bg-emerald-50">
                    <td class="border border-emerald-200 px-4 py-3 align-top">
                      <strong class="text-emerald-700">Broiler Finisher</strong><br>
                      <span class="text-sm text-gray-600">(25-35 hari panen)</span>
                    </td>
                    <td class="border border-emerald-200 px-4 py-3">
                      Voer finisher pellet BR-3 (fokus pada finishing bobot dan efisiensi pakan)
                    </td>
                    <td class="border border-emerald-200 px-4 py-3">
                      <strong>Protein 19-20%</strong> (turun sedikit, fokus deposit lemak untuk daging juicy), energi 3150-3250 kkal/kg. 
                      <span class="text-emerald-700">KUNCI: FCR fase ini menentukan profit! Target FCR total <1,7 = sangat bagus, 1,7-1,8 = bagus, >1,9 = perlu evaluasi</span>
                    </td>
                    <td class="border border-emerald-200 px-4 py-3">
                      90-110 gram/ekor/hari. Total fase: 1.100 gram/ekor (11 hari). <strong>Total pakan 0-35 hari: 2,17 kg/ekor → Bobot panen 2 kg = FCR 1,69 (excellent!)</strong>
                    </td>
                  </tr>
                  <tr class="hover:bg-emerald-50">
                    <td class="border border-emerald-200 px-4 py-3 align-top">
                      <strong class="text-emerald-700">Layer Rearing</strong><br>
                      <span class="text-sm text-gray-600">(0-18 minggu sebelum bertelur)</span>
                    </td>
                    <td class="border border-emerald-200 px-4 py-3">
                      Voer grower layer (fokus pertumbuhan rangka + organ reproduksi optimal, bukan deposit daging)
                    </td>
                    <td class="border border-emerald-200 px-4 py-3">
                      <strong>Protein 16-17%</strong> (lebih rendah dari broiler, pertumbuhan lambat steady), energi 2700-2800 kkal/kg, <strong>calcium 1-1,5%</strong> (rendah dulu, nanti naik drastis saat produksi). 
                      Fase kritis: umur 16-18 minggu = stimulasi ovarium dengan cahaya 14-16 jam/hari
                    </td>
                    <td class="border border-emerald-200 px-4 py-3">
                      40-90 gram/ekor/hari (naik bertahap dari DOC sampai 18 minggu). Total konsumsi fase rearing: ~7-8 kg/ekor (18 minggu). <span class="text-emerald-700">Fase ini NO INCOME, pure investasi!</span>
                    </td>
                  </tr>
                  <tr class="bg-emerald-50">
                    <td class="border border-emerald-200 px-4 py-3 align-top">
                      <strong class="text-emerald-700">Layer Produksi</strong><br>
                      <span class="text-sm text-gray-600">(19-80 minggu masa produktif)</span>
                    </td>
                    <td class="border border-emerald-200 px-4 py-3">
                      Voer layer khusus produksi telur (nutrisi presisi untuk HDP = Hen Day Production tinggi)
                    </td>
                    <td class="border border-emerald-200 px-4 py-3">
                      <strong>Protein 17-18%</strong>, energi 2750-2850 kkal/kg, <strong class="text-emerald-700">CALCIUM 3,5-4,0% (SANGAT TINGGI!)</strong> untuk kerabang telur kuat + cegah keropos tulang ayam, 
                      phosphor 0,65%, <strong>oyster shell supplement ad libitum</strong> (cangkang tiram giling tersedia terpisah, ayam makan sesuai kebutuhan). 
                      Kalsium kurang = kerabang tipis/retak = reject telur 10-30% = rugi besar!
                    </td>
                    <td class="border border-emerald-200 px-4 py-3">
                      <strong>110-120 gram/ekor/hari</strong> (KONSISTEN! Jangan naik-turun, bikin stress = drop produksi). 
                      Masa produktif 62 minggu (19-80 minggu) = ~50 kg pakan/ekor total. Produksi target 280-300 butir/ekor = <strong>FCR telur: 2,1-2,3 kg pakan per kg telur</strong> (1 butir 60 gram)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="bg-gray-50 rounded-lg p-6">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Tips Hemat Pakan Lokal Balikpapan</h4>
              <ul class="ml-6 space-y-2 text-gray-700">
                <li>• <strong class="text-emerald-700">Limbah ikan fermentasi:</strong> Kepala/jeroan ikan dari Pasar Klandasan, giling + dedak 20% + EM4, fermentasi 5-7 hari = protein 30-35%. Ganti 10-15% tepung ikan komersial. Hemat Rp 500-800/kg pakan!</li>
                <li>• <strong class="text-emerald-700">Bungkil sawit fermentasi:</strong> Bungkil kelapa sawit lokal murah (Rp 2.000-3.000/kg), fermentasi dengan Aspergillus 3-5 hari naikkan protein 15% jadi 18-20%. Ganti 15-20% jagung. Hemat signifikan!</li>
                <li>• <strong class="text-emerald-700">Cangkang telur recycle (khusus layer):</strong> Giling cangkang telur bekas jadi powder, campur 5-7% sebagai sumber calcium gratis. Kurangi ketergantungan limestone mahal</li>
                <li>• <strong class="text-emerald-700">Pakan komersial kontrak:</strong> Beli pakan dari distributor dengan kontrak 3-6 bulan (harga fixed, tidak terpengaruh fluktuasi jagung/kedelai). Stabilkan biaya produksi!</li>
              </ul>
              <p class="text-sm text-emerald-700 font-semibold mt-3">
                ⚠️ Perhatian: Racikan pakan sendiri butuh keahlian formulasi + mixer + timbangan presisi. Pemula SANGAT DISARANKAN pakai pakan komersial dulu (profit lebih stabil, risiko rendah). 
                Setelah 3-5 siklus baru coba racikan bertahap (mulai 20-30% pakan racikan + 70-80% komersial, monitor FCR ketat!).
              </p>
            </div>
          </div>

          <!-- C. Reproduksi dan Pembibitan (Khusus Layer) -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">C. Reproduksi dan Pembibitan (Khusus Ayam Layer)</h3>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">1. Masa Dewasa Kelamin dan Awal Produksi</h4>
              <ul class="space-y-3 text-gray-700">
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <div>
                    <strong>Umur dewasa kelamin:</strong> 18-20 minggu. Ayam mulai bertelur pertama kali (point of lay). Telur awal biasanya kecil (30-40 gram), kerabang tipis, banyak yang double yolk
                  </div>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <div>
                    <strong>Peak production:</strong> Umur 25-35 minggu, produksi mencapai puncak 90-95% hen day (HD). Pertahankan dengan nutrisi optimal dan manajemen stress minimal
                  </div>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <div>
                    <strong>Penurunan produksi:</strong> Setelah 40 minggu, produksi turun bertahap 0,5-1% per minggu. Umur 80 minggu produksi tinggal 60-70% HD. Saatnya afkir dan ganti dengan pullet baru
                  </div>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <div>
                    <strong>Faktor mempengaruhi produksi:</strong> Pencahayaan (14-16 jam/hari untuk layer produktif), nutrisi (protein 17-18%, kalsium 3,5-4%), suhu (heat stress = drop produksi), stress (kebisingan, predator, perubahan mendadak)
                  </div>
                </li>
              </ul>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">2. Manajemen Pencahayaan</h4>
              <p class="text-gray-700 mb-3">
                Pencahayaan adalah faktor KRUSIAL untuk stimulasi produksi telur. Light = hormon = ovulasi = telur.
              </p>
              <ul class="space-y-3 text-gray-700">
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <div>
                    <strong>Fase starter-grower (0-16 minggu):</strong> Cahaya natural saja atau 8-10 jam/hari. JANGAN terlalu banyak cahaya = dewasa kelamin terlalu cepat = telur kecil = produksi tidak optimal
                  </div>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <div>
                    <strong>Pre-layer (17-18 minggu):</strong> Mulai tingkatkan bertahap ke 14 jam/hari. Stimulasi ayam mulai bertelur
                  </div>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <div>
                    <strong>Layer produktif (19-80 minggu):</strong> Cahaya 14-16 jam/hari KONSISTEN! Gunakan timer otomatis. Intensitas 10-15 lux (1 lampu 40 watt untuk 15-20 m²). Nyalakan jam 4 pagi - 8 malam untuk manfaatkan cahaya natural siang hari
                  </div>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <div>
                    <strong>JANGAN:</strong> Ubah durasi cahaya mendadak! Pengurangan cahaya = stress = molt paksa = produksi drop drastis. Jika harus kurangi, lakukan bertahap 15 menit per minggu
                  </div>
                </li>
              </ul>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">3. Forced Molting (Rontok Bulu Paksa)</h4>
              <p class="text-gray-700 mb-3">
                Teknik untuk "restart" produksi ayam tua (70-80 minggu) agar bisa produksi lagi 6-8 bulan.
              </p>
              <ul class="space-y-3 text-gray-700">
                <li><strong>Kapan dilakukan:</strong> Umur 70-80 minggu saat produksi turun ke 60-65% HD. Atau saat harga DOC pullet mahal, lebih ekonomis molting daripada beli pullet baru</li>
                <li><strong>Cara tradisional:</strong> Puasakan ayam 7-10 hari (hanya air), cahaya dikurangi drastis. Ayam rontok bulu total, produksi stop. Setelah 10 hari, beri pakan bertahap, cahaya dinaikkan. 4-6 minggu kemudian ayam mulai bertelur lagi</li>
                <li><strong>Cara modern:</strong> Ganti pakan dengan pakan rendah protein (8-10%), zinc oxide 20.000 ppm selama 10 hari. Lebih humanis dan hasil lebih konsisten</li>
                <li><strong>Hasil molting:</strong> Produksi kedua bisa mencapai 70-80% HD selama 6-8 bulan. Telur lebih besar. Total ekonomi bisa lebih menguntungkan daripada afkir dan beli pullet baru</li>
              </ul>
              <p class="text-sm text-gray-600 mt-3"><strong>Catatan:</strong> Forced molting butuh keahlian. Kegagalan = mortalitas tinggi. Konsultasi dengan PPL atau dokter hewan sebelum melakukan</p>
            </div>

            <div class="bg-gray-50 rounded-lg p-6">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">4. Pengelolaan Telur Konsumsi</h4>
              <ul class="space-y-3 text-gray-700">
                <li><strong>Pengumpulan telur:</strong> Ambil telur 3-4x per hari (pagi, siang, sore, malam). Telur terlalu lama di kandang = kotor, pecah terinjak, dimakan ayam</li>
                <li><strong>Sortasi:</strong> Pisahkan telur normal (50-65 gram, kerabang utuh, bersih) dari telur reject (kerabang tipis/pecah, bentuk aneh, terlalu kecil <45g atau besar >75g, kotor)</li>
                <li><strong>Pembersihan:</strong> JANGAN cuci telur kecuali sangat kotor! Cuci = hilangkan lapisan kutikula = bakteri mudah masuk = telur cepat busuk. Kalau harus cuci, gunakan air hangat 40°C + desinfektan, keringkan cepat</li>
                <li><strong>Penyimpanan:</strong> Simpan di ruang sejuk 18-22°C, kelembaban 70-80%. Jangan tumpuk lebih dari 5 tray. Telur tahan 7-10 hari dalam kondisi optimal. Jual secepat mungkin untuk freshness maksimal</li>
                <li><strong>Grading:</strong> Grade AA (>60g, kerabang mulus), Grade A (55-60g), Grade B (50-55g), Reject (<50g atau cacat). Harga beda 5-15% antar grade</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- III. Kesehatan dan Pencegahan Penyakit -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-200">
            III. Kesehatan dan Pencegahan Penyakit
          </h2>

          <p class="text-gray-700 mb-6 leading-relaxed">
            Penyakit jadi masalah utama di peternakan ayam. Kalau sampai ada wabah bisa langsung habis semua dalam beberapa hari. 
            Makanya vaksinasi itu wajib banget, meski biayanya cuma sekitar 3-5% tapi bisa cegah kerugian besar. 
            Di Balikpapan cuacanya panas dan lembab jadi penyakit pernapasan sering banget muncul.
          </p>
          
          <!-- A. Penyakit Umum -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Penyakit yang Sering Muncul</h3>
            
            <!-- 1. Newcastle Disease (ND/Tetelo) -->
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-xl font-semibold text-gray-800 mb-3">1. Newcastle Disease (ND/Tetelo)</h4>
              
              <p class="text-gray-700 mb-3">
                Ini penyakit paling bahaya buat ayam. Penyebarannya cepet banget lewat udara dan kontak langsung. 
                Kalau satu ayam kena, bisa jadi satu kandang ikut kena dalam beberapa hari. Tingkat kematiannya bisa sampai 80-100% kalau gak divaksin.
              </p>

              <p class="text-gray-700 mb-2"><strong>Gejala yang keliatan:</strong></p>
              <ul class="ml-6 space-y-1 text-gray-700 mb-3">
                <li>• Ayam sesak napas, ngorok, bersin-bersin</li>
                <li>• Kepala bengkok ke samping atau belakang, sayap turun lemas</li>
                <li>• Diare hijau kehitaman, nafsu makan hilang</li>
                <li>• Ayam terlihat lesu, bulu kusam, bisa mati mendadak</li>
              </ul>

              <p class="text-gray-700 mb-2"><strong>Cara mengatasi:</strong></p>
              <p class="text-gray-700 mb-3">
                Sayangnya gak ada obat khusus untuk virus ini. Kalau udah kena, pisahkan ayam yang sakit terus desinfeksi kandang secara menyeluruh. 
                Yang paling penting adalah pencegahan dengan vaksinasi rutin sejak ayam masih kecil.
              </p>

              <p class="text-gray-700 mb-2"><strong>Pencegahan:</strong></p>
              <ul class="ml-6 space-y-1 text-gray-700">
                <li>• Vaksin ND wajib umur 4-5 hari, booster umur 21-28 hari</li>
                <li>• Jaga kebersihan kandang dan batasi tamu masuk kandang</li>
                <li>• Desinfeksi rutin dan istirahatkan kandang setelah panen</li>
              </ul>
            </div>

            <!-- 2. Gumboro (IBD) -->
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-xl font-semibold text-gray-800 mb-3">2. Gumboro (IBD)</h4>
              
              <p class="text-gray-700 mb-3">
                Penyakit ini nyerang sistem kekebalan tubuh ayam, jadi meski sembuh ayam bakal gampang sakit lagi. 
                Biasanya muncul pas ayam umur 3-6 minggu. Tingkat kematiannya sekitar 20-50% dan ayam yang selamat sering tumbuhnya lambat.
              </p>

              <p class="text-gray-700 mb-2"><strong>Ciri-ciri ayam kena Gumboro:</strong></p>
              <ul class="ml-6 space-y-1 text-gray-700 mb-3">
                <li>• Ayam tiba-tiba lesu dan bulu kusam</li>
                <li>• Diare putih kayak kapur</li>
                <li>• Suka duduk dengan mata setengah nutup</li>
                <li>• Kematian puncaknya biasanya hari ke 4-6</li>
              </ul>

              <p class="text-gray-700 mb-3">
                <strong>Pengobatan:</strong> Gak ada obat khusus, paling cuma dikasih vitamin sama antibiotik biar gak kena infeksi lain. 
                Yang penting vaksinasi pas umur 10-14 hari terus booster lagi umur 21 hari.
              </p>
            </div>

            <!-- 3. CRD (Penyakit Pernapasan) -->
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-xl font-semibold text-gray-800 mb-3">3. CRD (Penyakit Pernapasan)</h4>
              
              <p class="text-gray-700 mb-3">
                Penyakit pernapasan kronis yang sering banget kejadian di Balikpapan karena udaranya lembab. 
                Memang gak langsung mematikan tapi bikin ayam tumbuh lambat dan produksi telur turun.
              </p>

              <p class="text-gray-700 mb-2"><strong>Gejalanya:</strong></p>
              <ul class="ml-6 space-y-1 text-gray-700 mb-3">
                <li>• Ayam ngorok terutama pas malam</li>
                <li>• Bengkak di bawah mata</li>
                <li>• Hidung berlendir</li>
                <li>• Nafsu makan turun</li>
              </ul>

              <p class="text-gray-700 mb-3">
                <strong>Pengobatan:</strong> Bisa pakai antibiotik Tylosin atau Enrofloxacin lewat air minum 3-5 hari. 
                Untuk pencegahan, pastikan kandang ventilasi bagus dan jaga kebersihan litter.
              </p>
            </div>

            <!-- 4. Coccidiosis (Berak Darah) -->
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-xl font-semibold text-gray-800 mb-3">4. Coccidiosis (Berak Darah)</h4>
              
              <p class="text-gray-700 mb-3">
                Penyakit ini disebabkan parasit yang nyerang usus ayam. Sering muncul kalau kandang lembab dan litter basah. 
                Ayam yang kena bisa mati 10-30%, terutama yang umur 3-6 minggu.
              </p>

              <p class="text-gray-700 mb-2"><strong>Ciri khasnya:</strong></p>
              <ul class="ml-6 space-y-1 text-gray-700 mb-3">
                <li>• Diare berdarah warna merah kehitaman</li>
                <li>• Ayam lesu dan gak mau makan</li>
                <li>• Berat badan turun drastis</li>
                <li>• Jengger dan pial jadi pucat</li>
              </ul>

              <p class="text-gray-700 mb-3">
                <strong>Cara ngobatin:</strong> Pakai obat anti-coccidia kayak Amprolium lewat air minum 3-5 hari. 
                Pencegahannya dengan jaga litter tetep kering dan cuci tempat minum tiap hari.
              </p>
            </div>
          </div>

          <!-- B. Program Vaksinasi -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Program Vaksinasi Wajib</h3>

            <p class="text-gray-700 mb-4">
              <strong class="text-emerald-700">Vaksinasi = investasi paling penting!</strong> Biaya vaksin hanya 3-5% dari total biaya produksi, 
              tapi <strong class="text-red-600">cegah kerugian 50-100% dari outbreak penyakit viral!</strong> 
              Broiler minimal 3 vaksin (ND 2x + IBD 1x), Layer lengkap 8-10 vaksin sepanjang hidup. JANGAN SKIP vaksinasi untuk hemat - ini bunuh diri ekonomi!
            </p>

            <div class="overflow-x-auto mb-4">
              <table class="w-full border-collapse border border-emerald-200">
                <thead>
                  <tr class="bg-emerald-100 text-emerald-800">
                    <th class="border border-emerald-200 px-4 py-3 text-left">Umur Ayam</th>
                    <th class="border border-emerald-200 px-4 py-3 text-left">Jenis Vaksin</th>
                    <th class="border border-emerald-200 px-4 py-3 text-left">Metode Pemberian</th>
                    <th class="border border-emerald-200 px-4 py-3 text-left">Keterangan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="hover:bg-emerald-50">
                    <td class="border border-emerald-200 px-4 py-3 align-top">
                      <strong class="text-emerald-700">Day 1 (DOC)</strong>
                    </td>
                    <td class="border border-emerald-200 px-4 py-3">
                      <strong>ND + IB</strong> (Newcastle Disease + Infectious Bronchitis) - Hitchner B1 atau Lasota + IB H120
                    </td>
                    <td class="border border-emerald-200 px-4 py-3">
                      Tetes mata/hidung (eye/nasal drop) atau spray kabin DOC. Biasanya sudah dari hatchery
                    </td>
                    <td class="border border-emerald-200 px-4 py-3">
                      Untuk BROILER & LAYER. Cek sertifikat vaksin DOC! Jika tidak ada, vaksinasi ulang umur 4-5 hari
                    </td>
                  </tr>
                  <tr class="hover:bg-emerald-50">
                    <td class="border border-emerald-200 px-4 py-3 align-top">
                      <strong class="text-emerald-700">4-5 hari</strong>
                    </td>
                    <td class="border border-emerald-200 px-4 py-3">
                      <strong>ND Lasota</strong> (Newcastle Disease live vaccine)
                    </td>
                    <td class="border border-emerald-200 px-4 py-3">
                      Tetes mata/hidung. 1 tetes per mata atau hidung
                    </td>
                    <td class="border border-emerald-200 px-4 py-3">
                      <strong class="text-red-600">WAJIB untuk Broiler & Layer!</strong> Perlindungan dasar ND (penyakit paling mematikan). Jangan skip!
                    </td>
                  </tr>
                  <tr class="hover:bg-emerald-50">
                    <td class="border border-emerald-200 px-4 py-3 align-top">
                      <strong class="text-emerald-700">10-14 hari</strong>
                    </td>
                    <td class="border border-emerald-200 px-4 py-3">
                      <strong>Gumboro/IBD</strong> (Infectious Bursal Disease) - Intermediate atau Intermediate Plus strain
                    </td>
                    <td class="border border-emerald-200 px-4 py-3">
                      Air minum. Puasakan ayam 2-3 jam sebelum vaksinasi agar semua ayam minum. Tambahkan susu skim 2 sdm/liter untuk netralkan klor air
                    </td>
                    <td class="border border-emerald-200 px-4 py-3">
                      <strong class="text-red-600">SANGAT PENTING!</strong> Umur 3-6 minggu paling rentan IBD. Telat vaksin = outbreak Gumboro (mortalitas 20-50% + ayam survive jadi stunted/immunocompromised)
                    </td>
                  </tr>
                  <tr class="hover:bg-emerald-50">
                    <td class="border border-emerald-200 px-4 py-3 align-top">
                      <strong class="text-emerald-700">21-28 hari</strong>
                    </td>
                    <td class="border border-emerald-200 px-4 py-3">
                      <strong>ND Lasota Booster</strong> (Newcastle Disease booster)
                    </td>
                    <td class="border border-emerald-200 px-4 py-3">
                      Air minum atau tetes mata. Air minum lebih praktis untuk skala besar
                    </td>
                    <td class="border border-emerald-200 px-4 py-3">
                      Booster untuk tingkatkan titer antibodi ND. Broiler cukup sampai sini (panen 28-35 hari). Layer lanjut vaksinasi berikutnya
                    </td>
                  </tr>
                  <tr class="bg-emerald-50">
                    <td class="border border-emerald-200 px-4 py-3 align-top">
                      <strong class="text-emerald-700">14-16 minggu (khusus Layer)</strong>
                    </td>
                    <td class="border border-emerald-200 px-4 py-3">
                      <strong>ND Killed + IB Killed</strong> (inactivated vaccine oil emulsion) + <strong>EDS</strong> (Egg Drop Syndrome)
                    </td>
                    <td class="border border-emerald-200 px-4 py-3">
                      Injeksi intramuskular (IM) di dada atau paha. Vaksin mati (killed) = imunitas kuat & tahan lama
                    </td>
                    <td class="border border-emerald-200 px-4 py-3">
                      <strong>KRUSIAL sebelum masuk masa produksi!</strong> ND Killed = proteksi kuat sepanjang produksi. EDS cegah drop telur mendadak 20-40%. Jangan skip - ini investasi untuk 60 minggu produksi!
                    </td>
                  </tr>
                  <tr class="bg-blue-50">
                    <td class="border border-emerald-200 px-4 py-3 align-top">
                      <strong class="text-emerald-700">Setiap 3-4 bulan (Layer produktif 19-80 minggu)</strong>
                    </td>
                    <td class="border border-emerald-200 px-4 py-3">
                      <strong>ND Lasota Booster Rutin</strong>
                    </td>
                    <td class="border border-emerald-200 px-4 py-3">
                      Air minum atau spray kandang (kabut halus). Spray lebih merata untuk kandang besar
                    </td>
                    <td class="border border-emerald-200 px-4 py-3">
                      Booster berkala untuk jaga titer antibodi ND tetap tinggi. Titer turun = ayam rentan ND outbreak. Jadwal ketat: minggu ke-28, 40, 52, 64, 76
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="bg-gray-50 rounded-lg p-6">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Tips Vaksinasi Sukses</h4>
              <ul class="ml-6 space-y-2 text-gray-700">
                <li>• <strong class="text-emerald-700">Beli vaksin terpercaya:</strong> Dari distributor resmi (Medion, Romindo, Bayer, Boehringer). Cek exp date! Vaksin kadaluarsa = tidak efektif = buang uang</li>
                <li>• <strong class="text-emerald-700">Cold chain wajib:</strong> Simpan vaksin 2-8°C di kulkas. Bawa ke kandang pakai cool box + ice pack. Vaksin panas >25°C = rusak = tidak efektif (ayam tidak terlindungi!)</li>
                <li>• <strong class="text-emerald-700">Timing pagi:</strong> Vaksinasi 06:00-09:00 pagi (suhu sejuk, ayam tenang). Siang/sore = stress panas + stress vaksinasi = immunosuppression</li>
                <li>• <strong class="text-emerald-700">Jangan vaksinasi ayam sakit:</strong> Ayam sakit/stress = respons imun buruk = vaksin gagal. Sembuhkan dulu dengan antibiotik + vitamin, baru vaksinasi 3-5 hari kemudian</li>
                <li>• <strong class="text-emerald-700">Support vitamin:</strong> 3 hari sebelum & sesudah vaksinasi berikan vitamin + elektrolit (stress formula). Bantu pembentukan antibodi optimal</li>
                <li>• <strong class="text-emerald-700">Catat record:</strong> Buat logbook vaksinasi (tanggal, jenis vaksin, batch number, umur ayam, jumlah dosis). Untuk tracking jika ada masalah + persiapan booster</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- IV. Pasca Panen dan Pemasaran -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-200">
            IV. Pasca Panen dan Pemasaran
          </h2>

          <p class="text-gray-700 mb-6 leading-relaxed">
            Setelah panen, proses pemotongan dan pemasaran yang bagus bisa bikin untung maksimal. 
            Ayam broiler biasanya dipanen umur 32-35 hari dengan berat sekitar 1,8-2 kg. Untuk ayam layer yang penting produksi telurnya stabil di atas 80%.
          </p>
          
          <!-- A. Pemotongan Ayam -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">A. Pemotongan Ayam Broiler</h3>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <p class="text-gray-700 mb-3">
                Ayam broiler dipanen pas umur 32-35 hari dengan berat sekitar 1,8-2 kg. 
                Sebelum dipotong ayam dipuasakan dulu 8-12 jam biar saluran pencernaannya kosong.
              </p>

              <p class="text-gray-700 mb-2"><strong>Proses pemotongannya:</strong></p>
              <p class="text-gray-700 mb-3">
                Pemotongan dilakukan secara halal dengan memotong bagian leher, darahnya harus keluar sempurna. 
                Terus ayam direndam air panas sekitar 60 derajat biar bulunya gampang dicabut. Setelah itu keluarin jeroannya hati-hati jangan sampai usus atau empedunya pecah. 
                Terakhir cuci bersih dengan air dingin dan simpan di kulkas kalau gak langsung dijual.
              </p>

              <p class="text-gray-700 mb-2"><strong>Kualitas karkas:</strong></p>
              <ul class="ml-6 space-y-1 text-gray-700">
                <li>• Grade A: kulit mulus, daging berisi, warna kuning cerah. Harga Rp 45-50rb/kg untuk hotel atau supermarket</li>
                <li>• Grade B: kulit ada cacat dikit, daging cukup. Harga Rp 38-42rb/kg untuk pasar tradisional</li>
                <li>• Grade C: kualitas kurang bagus. Harga Rp 30-35rb/kg biasa buat olahan</li>
              </ul>
            </div>
          </div>

          <!-- B. Ekonomi dan Pemasaran -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">B. Analisis Ekonomi dan Pemasaran</h3>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Analisis Usaha Broiler (1000 ekor)</h4>
              
              <p class="text-gray-700 mb-3">
                <strong>Investasi awal:</strong> Kandang 100 m² sekitar Rp 30 juta, peralatan Rp 8 juta. Total Rp 38 juta yang bisa dipakai 5 tahun.
              </p>

              <p class="text-gray-700 mb-3">
                <strong>Biaya per periode (35 hari):</strong> DOC 1000 ekor Rp 6,5 juta, pakan sekitar Rp 16 juta, vaksin dan vitamin Rp 500rb, 
                listrik air sekam dll Rp 2,7 juta, tenaga kerja 2 orang Rp 5,25 juta, lain-lain Rp 500rb. Total biaya sekitar Rp 32 juta.
              </p>

              <p class="text-gray-700 mb-3">
                <strong>Pendapatan:</strong> Penjualan 970 ekor (30 mati) dengan berat rata-rata 1,9 kg dijual Rp 25rb/kg dapat Rp 46 juta. 
                Plus jual kotoran sekitar Rp 250rb.
              </p>

              <p class="text-gray-700 mb-2">
                <strong class="text-emerald-700">Keuntungan bersih: sekitar Rp 14-15 juta per periode</strong> atau kalau 10 kali panen setahun bisa dapat Rp 140-150 juta.
              </p>

              <p class="text-sm text-gray-600 mt-3">
                <em>Catatan: Harga bisa naik turun jadi harus pantau pasar. Kalau ayam banyak yang sakit bisa langsung rugi.</em>
              </p>
            </div>

            <div class="bg-gray-50 rounded-lg p-6">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Tempat Jual di Balikpapan</h4>
              
              <ul class="ml-6 space-y-2 text-gray-700">
                <li>• <strong>Pasar tradisional:</strong> Kayak Pasar Klandasan atau Manggar. Bisa jual ayam hidup Rp 25-27rb/kg atau karkas Rp 40-45rb/kg. Pembayaran cash langsung</li>
                <li>• <strong>Warung makan:</strong> Kontrak supply rutin tiap minggu. Harganya Rp 26-28rb/kg. Pembayarannya biasa telat 1-2 minggu tapi lebih stabil</li>
                <li>• <strong>Hotel dan restoran:</strong> Segment yang paling mahal bisa sampai Rp 45-50rb/kg. Tapi syaratnya ketat harus ada sertifikat halal dan packaging rapi</li>
                <li>• <strong>Minimarket:</strong> Volume besar tapi marginnya tipis. Butuh izin P-IRT dan packaging modern. Sistemnya konsinyasi jadi bayarnya pas barang laku</li>
                <li>• <strong>Sistem kemitraan:</strong> Kerjasama sama perusahaan kayak CP atau Japfa. Kita cuma sediain kandang dan tenaga, mereka kasih DOC dan pakan. Untungnya lebih kecil sekitar Rp 5-8rb/ekor tapi gak ribet cari pembeli</li>
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
              <div class="space-y-3 text-gray-700">
                <div class="border-l-4 border-emerald-500 pl-4">
                  <p class="font-semibold">Dinas Ketahanan Pangan dan Peternakan Kota Balikpapan</p>
                  <p>Alamat: Jl. Jend. Sudirman No. 1, Balikpapan Kota</p>
                  <p>Telepon: (0542) 421714</p>
                  <p>Layanan: Penyuluhan, bantuan bibit/pakan, vaksinasi gratis, perizinan usaha peternakan</p>
                </div>
                <div class="border-l-4 border-emerald-500 pl-4">
                  <p class="font-semibold">UPT Puskeswan (Pusat Kesehatan Hewan) Balikpapan</p>
                  <p>Alamat: Jl. MT Haryono, Sepinggan</p>
                  <p>Telepon: (0542) 761234</p>
                  <p>Layanan: Pemeriksaan hewan gratis, vaksinasi massal, konsultasi kesehatan ternak, penanganan wabah penyakit</p>
                </div>
                <div class="border-l-4 border-emerald-500 pl-4">
                  <p class="font-semibold">Balai Karantina Pertanian Kelas II Balikpapan</p>
                  <p>Alamat: Jl. Soekarno Hatta KM 3, Sepinggan Baru</p>
                  <p>Telepon: (0542) 8731144</p>
                  <p>Layanan: Sertifikat kesehatan hewan untuk perdagangan antar daerah/pulau</p>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Poultry Shop & Supplier Pakan</h4>
              <div class="space-y-3 text-gray-700">
                <div class="border-l-4 border-emerald-500 pl-4">
                  <p class="font-semibold">UD Mitra Tani Sejahtera</p>
                  <p>Alamat: Jl. MT Haryono RT 35, Sepinggan</p>
                  <p>Telepon: (0542) 7654321 / WA: 0812-5xxx-xxxx</p>
                  <p>Produk: Pakan BR-1, BR-2, Layer, DOC, vaksin, obat-obatan, peralatan kandang</p>
                </div>
                <div class="border-l-4 border-emerald-500 pl-4">
                  <p class="font-semibold">Toko Ternak Sejahtera</p>
                  <p>Alamat: Jl. Jend. Sudirman, Klandasan Ulu</p>
                  <p>Telepon: 0821-6xxx-xxxx</p>
                  <p>Produk: Pakan komplit semua merek, vaksin, vitamin, DOC broiler & layer</p>
                </div>
                <div class="border-l-4 border-emerald-500 pl-4">
                  <p class="font-semibold">CV Agro Borneo</p>
                  <p>Alamat: Jl. Marsma Iswahyudi, Sepinggan Baru</p>
                  <p>Telepon: (0542) 8765432</p>
                  <p>Produk: Distributor resmi pakan Japfa, Charoen Pokphand. Harga grosir, delivery gratis minimal 1 ton</p>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Dokter Hewan & Klinik Hewan</h4>
              <div class="space-y-3 text-gray-700">
                <div class="border-l-4 border-emerald-500 pl-4">
                  <p class="font-semibold">Drh. Budi Santoso (Praktik Mandiri)</p>
                  <p>Telepon/WA: 0813-4xxx-xxxx</p>
                  <p>Layanan: Konsultasi kesehatan unggas, bedah, autopsi, program vaksinasi. Visit ke kandang (call min. H-1)</p>
                </div>
                <div class="border-l-4 border-emerald-500 pl-4">
                  <p class="font-semibold">Klinik Hewan Balikpapan Veterinary</p>
                  <p>Alamat: Jl. Jend. Ahmad Yani No. 78</p>
                  <p>Telepon: (0542) 8877665 / WA: 0856-4xxx-xxxx</p>
                  <p>Layanan: Pemeriksaan lab (feses, darah), diagnosa penyakit, obat resep</p>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Kelompok Tani & Asosiasi</h4>
              <div class="space-y-3 text-gray-700">
                <div class="border-l-4 border-emerald-500 pl-4">
                  <p class="font-semibold">Gabungan Kelompok Peternak Unggas (GPPU) Balikpapan</p>
                  <p>Kontak Ketua: Bapak Hendra - 0822-5xxx-xxxx</p>
                  <p>Kegiatan: Pertemuan rutin, pelatihan, kerjasama pembelian pakan, pemasaran bersama</p>
                </div>
                <div class="border-l-4 border-emerald-500 pl-4">
                  <p class="font-semibold">Forum Peternak Ayam Broiler Kalimantan Timur</p>
                  <p>Kontak Sekretaris: Ibu Siti - 0821-6xxx-xxxx</p>
                  <p>Kegiatan: Advokasi harga, lobby ke pemerintah, sharing knowledge antar peternak</p>
                </div>
              </div>
            </div>
          </div>

          <!-- B. Glosarium -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">B. Glosarium (Istilah Penting)</h3>
            
            <div class="bg-gray-50 rounded-lg p-6">
              <dl class="space-y-3">
                <div>
                  <dt class="font-semibold text-gray-800">Broiler</dt>
                  <dd class="text-gray-700 ml-4">Ayam pedaging yang dipelihara untuk produksi daging dengan masa panen singkat 28-35 hari</dd>
                </div>
                <div>
                  <dt class="font-semibold text-gray-800">Layer</dt>
                  <dd class="text-gray-700 ml-4">Ayam petelur yang dipelihara khusus untuk produksi telur konsumsi</dd>
                </div>
                <div>
                  <dt class="font-semibold text-gray-800">DOC (Day Old Chick)</dt>
                  <dd class="text-gray-700 ml-4">Anak ayam umur 1 hari yang baru menetas dari hatchery</dd>
                </div>
                <div>
                  <dt class="font-semibold text-gray-800">FCR (Feed Conversion Ratio)</dt>
                  <dd class="text-gray-700 ml-4">Rasio konversi pakan = jumlah pakan yang dibutuhkan untuk menghasilkan 1 kg pertambahan bobot badan. FCR rendah = efisien. Target broiler FCR 1,6-1,8</dd>
                </div>
                <div>
                  <dt class="font-semibold text-gray-800">HD (Hen Day Production)</dt>
                  <dd class="text-gray-700 ml-4">Persentase produksi telur per hari = (jumlah telur/jumlah ayam) × 100%. HD 85% artinya dari 100 ekor ayam menghasilkan 85 butir telur per hari</dd>
                </div>
                <div>
                  <dt class="font-semibold text-gray-800">Mortalitas</dt>
                  <dd class="text-gray-700 ml-4">Tingkat kematian ayam selama masa pemeliharaan. Target broiler <3%, layer <5%</dd>
                </div>
                <div>
                  <dt class="font-semibold text-gray-800">Biosekuriti</dt>
                  <dd class="text-gray-700 ml-4">Sistem keamanan hayati untuk mencegah masuknya penyakit ke kandang (desinfeksi, karantina, batasi kunjungan)</dd>
                </div>
                <div>
                  <dt class="font-semibold text-gray-800">Starter, Grower, Finisher</dt>
                  <dd class="text-gray-700 ml-4">Fase pertumbuhan ayam. Starter (0-14 hari), Grower (15-28 hari), Finisher (29-panen)</dd>
                </div>
                <div>
                  <dt class="font-semibold text-gray-800">Litter</dt>
                  <dd class="text-gray-700 ml-4">Alas lantai kandang postal (sekam, serbuk gergaji) untuk serap kotoran dan jaga suhu</dd>
                </div>
                <div>
                  <dt class="font-semibold text-gray-800">Heat Stress</dt>
                  <dd class="text-gray-700 ml-4">Kondisi stress akibat suhu terlalu panas (>30°C). Gejala: napas cepat ngos-ngosan, sayap terbuka, produksi/nafsu makan turun drastis</dd>
                </div>
                <div>
                  <dt class="font-semibold text-gray-800">Molting</dt>
                  <dd class="text-gray-700 ml-4">Proses rontok bulu alami atau dipaksa (forced molting) pada layer untuk restart produksi telur</dd>
                </div>
                <div>
                  <dt class="font-semibold text-gray-800">Pullet</dt>
                  <dd class="text-gray-700 ml-4">Ayam layer muda umur 16-18 minggu yang hampir mulai bertelur (point of lay)</dd>
                </div>
                <div>
                  <dt class="font-semibold text-gray-800">Karkas</dt>
                  <dd class="text-gray-700 ml-4">Tubuh ayam setelah dipotong, dibuang bulu, jeroan, kepala, dan kaki. Berat karkas = 65-70% dari bobot hidup</dd>
                </div>
                <div>
                  <dt class="font-semibold text-gray-800">Afkir</dt>
                  <dd class="text-gray-700 ml-4">Ayam yang sudah tidak produktif atau sakit parah, dikeluarkan dari populasi (dijual murah atau dimusnahkan)</dd>
                </div>
                <div>
                  <dt class="font-semibold text-gray-800">Fumigasi</dt>
                  <dd class="text-gray-700 ml-4">Proses desinfeksi kandang kosong dengan uap formalin untuk bunuh semua mikroorganisme patogen</dd>
                </div>
              </dl>
            </div>
          </div>

          <!-- C. Referensi dan Bacaan Lanjutan -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">C. Referensi dan Bacaan Lanjutan</h3>
            
            <div class="bg-gray-50 rounded-lg p-6">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Buku & Manual</h4>
              <ul class="space-y-2 text-gray-700 mb-4">
                <li>• <strong>"Beternak Ayam Pedaging"</strong> - Kementerian Pertanian RI (Download gratis di website Ditjen PKH)</li>
                <li>• <strong>"Petunjuk Teknis Budi Daya Ayam Ras Petelur"</strong> - Balai Penelitian Ternak Ciawi, Bogor</li>
                <li>• <strong>"Manajemen Kesehatan Unggas"</strong> - Fakultas Kedokteran Hewan UGM</li>
                <li>• <strong>"Broiler Management Guide"</strong> - Ross, Cobb, Aviagen (gratis di website resmi breed company)</li>
              </ul>

              <h4 class="text-lg font-semibold text-gray-800 mb-3">Website & Portal Online</h4>
              <ul class="space-y-2 text-gray-700 mb-4">
                <li>• <strong>Cybex Kementan:</strong> cybex.pertanian.go.id - Portal penyuluhan online Kementerian Pertanian</li>
                <li>• <strong>Poultry Indonesia:</strong> poultryindonesia.com - Info harga DOC, pakan, ayam hidup real-time</li>
                <li>• <strong>Info Medion:</strong> medion.co.id - Artikel kesehatan unggas, diagnosa penyakit, tips manajemen</li>
                <li>• <strong>Trobos Livestock:</strong> troboslivestock.com - Berita, teknologi, dan tren industri peternakan</li>
              </ul>

              <h4 class="text-lg font-semibold text-gray-800 mb-3">Video & Tutorial YouTube</h4>
              <ul class="space-y-2 text-gray-700 mb-4">
                <li>• Channel "Belajar Ternak" - Tutorial lengkap manajemen broiler dari DOC sampai panen</li>
                <li>• Channel "Pak Dokter Hewan" - Diagnosa penyakit, bedah kasus, tips praktis</li>
                <li>• Channel "Ayam Kampus" - Sharing pengalaman peternak milenial, analisis bisnis</li>
              </ul>

              <h4 class="text-lg font-semibold text-gray-800 mb-3">Grup WhatsApp & Forum</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• <strong>WA Group "Peternak Ayam Balikpapan"</strong> - Sharing info, tanya jawab, info harga lokal. Kontak admin via Dinas Peternakan</li>
                <li>• <strong>Forum Diskusi Ternak (forumternak.com)</strong> - Forum online tanya jawab seputar peternakan ayam</li>
                <li>• <strong>Facebook Group "Broiler Farmer Indonesia"</strong> - Komunitas 50.000+ peternak, sangat aktif dan informatif</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Penutup -->
        <section class="bg-emerald-50 rounded-lg p-8 mb-8">
          <h3 class="text-2xl font-semibold text-gray-800 mb-4">Kesimpulan</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Beternak ayam di Balikpapan memiliki prospek yang sangat menjanjikan dengan permintaan pasar yang terus meningkat. 
            Kunci sukses dalam usaha peternakan ayam adalah: <strong>(1) Manajemen kesehatan yang ketat</strong> dengan program vaksinasi lengkap dan biosekuriti kuat, 
            <strong>(2) Efisiensi pakan</strong> dengan target FCR <1,8 untuk broiler dan konsumsi pakan optimal untuk layer, 
            <strong>(3) Kontrol suhu dan ventilasi</strong> yang sangat krusial menghadapi iklim tropis Balikpapan, 
            <strong>(4) Pemasaran yang tepat</strong> dengan membangun relasi dan jaringan distribusi yang kuat, dan 
            <strong>(5) Pembelajaran berkelanjutan</strong> untuk terus update pengetahuan dan teknologi terbaru.
          </p>
          <p class="text-gray-700 leading-relaxed">
            Jangan ragu untuk memulai dari skala kecil (200-500 ekor) untuk belajar dan memahami dinamika usaha. 
            Manfaatkan pendampingan dari Dinas Peternakan dan bergabung dengan kelompok peternak untuk saling berbagi pengalaman. 
            Dengan dedikasi, disiplin, dan manajemen yang tepat, usaha peternakan ayam bisa menjadi sumber penghasilan yang stabil dan menguntungkan!
          </p>
          <p class="text-emerald-700 font-semibold text-lg mt-4 text-center">
             Semoga Anda Sukses Memelihara Ayam! 
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
