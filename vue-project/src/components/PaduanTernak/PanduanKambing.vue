<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import kambingImage from '@/assets/images/KambingPaduan.webp';

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
        :src="kambingImage" 
        alt="Ternak Kambing"
        class="w-full h-full object-cover"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 p-8 md:p-12">
        <div class="max-w-6xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
            Panduan Lengkap Beternak Kambing di Balikpapan
          </h1>
          <p class="text-gray-200 text-lg">
            Ensiklopedia praktis untuk peternak kambing modern di wilayah tropis
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
            Beternak kambing di Balikpapan sangat menguntungkan dengan permintaan pasar tinggi sepanjang tahun (Idul Adha, aqiqah, walimah, konsumsi harian). 
            Kambing lebih mudah dipelihara dibanding sapi (modal lebih kecil, siklus reproduksi lebih cepat, tidak butuh lahan luas), lebih tahan panas dibanding domba, 
            dan sangat adaptif dengan kondisi tropis Balikpapan. Dengan 10 indukan kambing PE (Peranakan Etawa), dalam setahun bisa menghasilkan 20-30 anak dengan keuntungan 
            bersih Rp 40-60 juta/tahun! Kunci suksesnya: pilih jenis kambing tepat sesuai tujuan (pedaging/perah/dwiguna), kandang panggung dengan ventilasi baik, 
            pakan hijauan berkualitas + konsentrat, vaksinasi rutin, dan manajemen reproduksi optimal. Pasar kambing di Balikpapan sangat stabil: harga kambing jantan dewasa 
            PE Rp 3-5 juta/ekor (normal), bisa naik 50-80% menjelang Idul Adha jadi Rp 5-9 juta/ekor! Susu kambing Etawa juga bernilai tinggi Rp 25.000-35.000/liter (pasar premium untuk kesehatan).
          </p>
        </section>

        <!-- I. Pengenalan Ternak Kambing -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-200">
            I. Pengenalan Ternak Kambing
          </h2>
          
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">A. Jenis-Jenis Kambing untuk Balikpapan</h3>
            
            <!-- Kambing Etawa/PE -->
            <div class="bg-emerald-50 rounded-lg p-6 mb-4">
              <h4 class="text-xl font-semibold text-emerald-900 mb-3">1. Kambing Etawa / PE (Peranakan Etawa) - Raja Kambing Dwiguna</h4>
              <div class="space-y-3">
                <p class="text-gray-700">
                  <strong class="text-emerald-700">Deskripsi:</strong> Kambing tipe dwiguna (dual-purpose) paling populer di Indonesia hasil persilangan kambing Etawa India (Jamnapari) dengan kambing Kacang lokal. 
                  Tubuh besar dan tinggi dengan ciri khas telinga panjang menggantung (20-30 cm!), hidung cembung/roman nose (hidung bengkok ke atas), dahi cembung, tanduk pendek mengarah ke belakang. 
                  Warna beragam: hitam-putih (paling umum), coklat-putih, full hitam, full coklat. Bobot dewasa: jantan 70-90 kg, betina 50-70 kg. Postur tinggi dengan kaki panjang, punggung lurus, 
                  ambing besar untuk produksi susu. Temperamen jinak dan mudah diatur, cocok untuk intensif/semi-intensif.
                </p>
                <ul class="ml-6 mt-2 space-y-2">
                  <li class="text-gray-700"><strong class="text-emerald-700">Keunggulan Utama:</strong> Produksi susu TINGGI 1-3 liter/hari untuk induk laktasi (puncak laktasi bulan 2-3 setelah melahirkan), bahkan PE super bisa 4-5 liter/hari! Susu kambing PE sangat laku Rp 25.000-35.000/liter (pasar premium: alergi susu sapi, TBC, asma, diet). Pertumbuhan cepat untuk pedaging (ADG 150-200 gram/hari dengan pakan konsentrat), anak umur 8-10 bulan sudah 35-45 kg siap jual. Harga jual tinggi: kambing PE jantan dewasa 50-70 kg = Rp 3,5-5 juta (normal), bisa Rp 6-9 juta menjelang Idul Adha! Dual income: jual susu harian + jual anak/afkir. Reproduksi baik: birahi teratur, fertilitas tinggi, bisa beranak 2x/tahun dengan anak kembar 2-3 ekor</li>
                  <li class="text-gray-700"><strong class="text-emerald-700">Kelemahan dan Tantangan:</strong> Harga bibit MAHAL Rp 3-7 juta/ekor untuk indukan berkualitas (tapi ROI cepat kalau manage dengan baik), Rp 1,5-2,5 juta untuk bakalan penggemukan. Butuh pakan berkualitas tinggi (protein 14-16%) untuk produksi susu optimal dan pertumbuhan cepat, tidak bisa hidup dengan rumput lapangan saja. Agak rentan stress panas di Balikpapan (perlu kandang ventilasi baik, air banyak, teduh). Pemerahan susu perlu skill dan rutinitas disiplin 2x/hari (pagi-sore), cukup labor-intensive. Rentan mastitis (radang ambing) jika sanitasi pemerahan buruk</li>
                  <li class="text-gray-700"><strong class="text-emerald-700">Rekomendasi:</strong> Sangat cocok untuk peternak serius yang mau diversifikasi produk (susu + daging). Target pasar: susu segar untuk konsumen premium/terapi, kambing kurban Idul Adha kelas menengah-atas, bibit PE berkualitas untuk peternak lain. Butuh manajemen intensif dan modal lebih besar, tapi profit sangat menjanjikan!</li>
                </ul>
              </div>
            </div>

            <!-- Kambing Kacang -->
            <div class="bg-emerald-50 rounded-lg p-6 mb-4">
              <h4 class="text-xl font-semibold text-emerald-900 mb-3">2. Kambing Kacang (Kambing Lokal) - Si Tangguh Adaptif</h4>
              <div class="space-y-3">
                <p class="text-gray-700">
                  <strong class="text-emerald-700">Deskripsi:</strong> Kambing asli Indonesia yang sudah berevolusi dan beradaptasi sempurna dengan iklim tropis basah selama ratusan tahun. 
                  Ukuran kecil kompak dengan bobot dewasa: jantan 25-35 kg, betina 20-30 kg. Telinga pendek tegak, tanduk pendek mengarah ke belakang, kaki pendek kokoh. 
                  Warna sangat beragam: hitam polos, putih, coklat, belang, totol-totol (genetik sangat bervariasi karena tidak ada seleksi ketat). Lincah, gesit, bisa memanjat, 
                  bisa merumput di area miring/berbukit. Temperamen waspada dan alert, cocok sistem ekstensif (digembalakan).
                </p>
                <ul class="ml-6 mt-2 space-y-2">
                  <li class="text-gray-700"><strong class="text-emerald-700">Keunggulan Utama:</strong> SANGAT TAHAN PANAS! Bisa survive di suhu Balikpapan 30-35°C tanpa stress (evolved untuk tropis). Tahan penyakit luar biasa (sistem imun kuat karena seleksi alam ratusan tahun). Bisa makan hampir semua jenis hijauan (tidak rewel pakan): rumput lapangan, semak, daun-daunan, limbah pertanian, bahkan kulit pisang/singkong. Cocok sistem ekstensif (digembalakan) = hemat biaya pakan DRASTIS (cukup gembala 4-6 jam/hari di lahan kosong/kebun). Harga bibit MURAH Rp 1-2 juta/ekor, bahkan bisa dapat Rp 800.000-1,2 juta untuk kualitas standar. Modal kecil, risiko rendah, cocok untuk pemula atau peternak skala kecil. Reproduksi cukup baik: bisa beranak 2x/tahun, anak 1-2 ekor per kelahiran</li>
                  <li class="text-gray-700"><strong class="text-emerald-700">Kelemahan dan Tantangan:</strong> Pertumbuhan LAMBAT (ADG hanya 50-80 gram/hari, butuh 12-18 bulan untuk capai 25-30 kg). Ukuran kecil = harga jual rendah per ekor (Rp 1,5-2,5 juta untuk jantan dewasa 25-30 kg). Kualitas daging kurang optimal dibanding PE/Boer (persentase karkas 35-40%, lebih banyak tulang dan lemak subkutan). Produksi susu sangat rendah (hanya cukup untuk anak, tidak ekonomis untuk diperah). Tidak cocok untuk kurban Idul Adha kelas menengah-atas (ukuran terlalu kecil, orang lebih suka kambing besar)</li>
                  <li class="text-gray-700"><strong class="text-emerald-700">Rekomendasi:</strong> Sangat cocok untuk pemula dengan modal terbatas atau peternak yang punya lahan gembalaan luas (hemat pakan). Target pasar: konsumsi daging lokal (warung sate, gule, sop), aqiqah kelas ekonomi, pasar tradisional. Sistem pemeliharaan ekstensif (digembalakan) adalah kunci untuk profit (biaya pakan minimal). Bisa dikombinasi dengan pertanian (kambing gembala di kebun kelapa sawit/karet sambil bersihkan gulma)</li>
                </ul>
              </div>
            </div>

            <!-- Kambing Boer Silangan -->
            <div class="bg-emerald-50 rounded-lg p-6 mb-4">
              <h4 class="text-xl font-semibold text-emerald-900 mb-3">3. Kambing Boer Silangan (Boerka) - Juara Daging</h4>
              <div class="space-y-3">
                <p class="text-gray-700">
                  <strong class="text-emerald-700">Deskripsi:</strong> Hasil persilangan kambing Boer Afrika Selatan (meat goat terbaik dunia) dengan kambing Kacang/PE Indonesia untuk adaptasi tropis. 
                  Ciri khas: kepala dan leher berwarna coklat merah/mahogany, badan putih (two-tone color), tubuh kompak rectangular seperti sapi (body depth dan width bagus untuk daging), 
                  kaki pendek kuat, telinga panjang menggantung seperti Boer. Bobot dewasa: jantan 50-70 kg, betina 40-55 kg. Otot-otot padat terutama di punggung dan paha (prime cuts). 
                  Boer silang lebih adaptif panas dibanding Boer murni (yang sangat sensitif >28°C).
                </p>
                <ul class="ml-6 mt-2 space-y-2">
                  <li class="text-gray-700"><strong class="text-emerald-700">Keunggulan Utama:</strong> Pertumbuhan SANGAT CEPAT! ADG 180-250 gram/hari dengan pakan konsentrat (bahkan bisa 300+ gram/hari untuk Boer grade tinggi), jauh lebih cepat dari PE dan 3x lipat dari Kacang. Efisiensi pakan tinggi (FCR 4-5, lebih baik dari PE 5-6). Kualitas daging PRIMA: persentase karkas tinggi 48-52%, daging merah muda cerah, marbling bagus, lemak intramuskular ideal, rendah bau prengus/goaty smell. Cocok untuk pasar premium (restoran, hotel, steak kambing). Harga jual tinggi: kambing Boer silang jantan 45-60 kg = Rp 4-6 juta (normal), bisa Rp 7-12 juta menjelang Idul Adha untuk kualitas show/kontes. Reproduksi baik: induk bisa beranak 2x/tahun dengan anak kembar 2-3 ekor</li>
                  <li class="text-gray-700"><strong class="text-emerald-700">Kelemahan dan Tantangan:</strong> Harga bibit SANGAT MAHAL Rp 4-10 juta/ekor untuk indukan Boer silang berkualitas, Rp 2,5-4 juta untuk bakalan penggemukan. Butuh pakan konsentrat banyak (protein 16-18%) untuk pertumbuhan optimal = biaya pakan tinggi Rp 30.000-40.000/ekor/hari. Tidak bisa hidup dengan rumput saja (beda dengan Kacang yang bisa ekstensif). Agak sensitif panas (lebih baik dari Boer murni tapi tetap perlu kandang sejuk, ventilasi maksimal). Pasar terbatas: hanya untuk konsumen kelas menengah-atas yang apresiasi kualitas daging (tidak laku di pasar tradisional yang sensitif harga)</li>
                  <li class="text-gray-700"><strong class="text-emerald-700">Rekomendasi:</strong> Cocok untuk peternak agresif dengan modal cukup yang target pasar premium dan kurban Idul Adha kelas atas. Fokus penggemukan (fattening) dengan sistem intensif feedlot (kandang + konsentrat tinggi). Target pasar: kambing kurban premium (bobot besar, tampilan mewah), restoran steak/grill kambing, supermarket daging segar premium, breeder/bibit Boer untuk peternak lain. ROI sangat tinggi jika manage dengan baik!</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- II. Manajemen Pemeliharaan -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-200">
            II. Manajemen Pemeliharaan
          </h2>
          
          <!-- A. Kandang dan Lingkungan -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">A. Kandang dan Lingkungan</h3>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Tipe Kandang Ideal untuk Kambing</h4>
              <div class="space-y-3 text-gray-700">
                <ul class="ml-6 space-y-2">
                  <li>• <strong class="text-emerald-700">Kandang Panggung WAJIB:</strong> Ini adalah kunci utama kesehatan kambing di Balikpapan! Lantai panggung dengan celah kayu/bambu lebar 1-2 cm agar kotoran dan urin jatuh langsung ke bawah. Tinggi panggung 1-1,5 meter dari tanah untuk sirkulasi udara maksimal dan mudah bersihkan kotoran. Lantai panggung = kambing tidak kontak dengan kotoran basah = kuku tetap kering = cegah foot rot (busuk kuku) dan cacingan. Kambing SANGAT BENCI kandang kotor dan basah!</li>
                  <li>• <strong class="text-emerald-700">Ukuran kandang per ekor:</strong> Kambing dewasa (PE/Boer) butuh minimal 1,5 m² per ekor (misal 1,5m x 1m atau 2m x 0,75m). Kambing Kacang lebih kecil cukup 1 m² per ekor. Jangan overcrowding! Kandang terlalu sempit = stress, berkelahi, penyakit menular cepat, pertumbuhan terhambat. Untuk induk bunting/menyusui perlu space lebih besar 2 m² (ada anak)</li>
                  <li>• <strong class="text-emerald-700">Ventilasi ekstrem!</strong> Kambing butuh udara segar maksimal. Atap tinggi 3-4 meter (heat rise = udara panas naik keluar). Dinding MINIMAL 50% terbuka (bisa pakai kawat ram, bambu bilah, atau half-wall). Orientasi kandang Utara-Selatan (minimize sinar matahari langsung masuk). Tidak perlu dinding penuh! Kambing lebih suka kandang terbuka dengan atap teduh daripada kandang tertutup</li>
                  <li>• <strong class="text-emerald-700">Atap insulasi:</strong> Pakai asbes atau seng DENGAN insulasi (plafon kayu, styrofoam, atap ganda). Tanpa insulasi, siang hari suhu dalam kandang bisa 40°C+ = heat stress = nafsu makan drop = pertumbuhan lambat. Atau tanam pohon di sisi Barat kandang untuk shade tree</li>
                  <li>• <strong class="text-emerald-700">Tempat pakan (feed bunk):</strong> Pasang di luar kandang (dari depan kambing bisa makan tapi tidak bisa masuk ke tempat pakan). Ini cegah pakan terinjak kotor. Lebar 40 cm, tinggi 50-60 cm dari lantai kandang (sejajar dada kambing). Bisa dari kayu/bambu atau beli feeder plastik siap pakai</li>
                  <li>• <strong class="text-emerald-700">Tempat minum (water trough):</strong> Ember/bak plastik besar kapasitas 10-20 liter per 5-10 ekor. Ganti air 2x/hari (pagi dan sore). Air kotor/hangat = kambing tidak mau minum = dehidrasi = stress. Kambing dewasa minum 2-4 liter/hari (lebih banyak saat panas atau induk laktasi 4-6 liter/hari)</li>
                </ul>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Sanitasi dan Kebersihan Kandang</h4>
              <div class="space-y-3 text-gray-700">
                <ul class="ml-6 space-y-2">
                  <li>• <strong class="text-emerald-700">Buang kotoran harian:</strong> Setiap pagi sapu/kumpulkan kotoran di bawah kandang panggung. Kambing produksi kotoran banyak (1-2 kg/ekor/hari)! Kotoran menumpuk = lalat, bau amonia (iritasi mata/pernapasan kambing), breeding ground penyakit. Manfaatkan kotoran untuk pupuk organik atau jual Rp 300-500/kg kering (tambahan income!)</li>
                  <li>• <strong class="text-emerald-700">Semprot lantai mingguan:</strong> Seminggu sekali, semprot lantai kandang panggung dengan air bertekanan untuk bersihkan sisa kotoran yang lengket. Keringkan sebelum kambing masuk lagi (bisa jemur 2-3 jam)</li>
                  <li>• <strong class="text-emerald-700">Desinfeksi bulanan:</strong> Sebulan sekali, semprot kandang dengan desinfektan (Virkon-S, klorin 2%, Lysol) untuk bunuh bakteri, virus, parasit. Fokus di area tempat pakan, minum, dan lantai. Kambing dipindah sementara ke kandang lain atau halaman. Biarkan kering sempurna sebelum kambing kembali</li>
                  <li>• <strong class="text-emerald-700">Potong kuku rutin:</strong> Setiap 2-3 bulan, potong kuku kambing yang terlalu panjang (overgrown hooves). Kuku panjang = pincang, mudah luka, infeksi foot rot. Pakai gunting kuku khusus ternak atau cutter tajam. Potong sampai kuku rata dengan telapak kaki, jangan sampai berdarah</li>
                  <li>• <strong class="text-emerald-700">Kontrol ektoparasit:</strong> Setiap 2-3 minggu (terutama musim hujan), semprot kambing dengan anti-kutu/tungau (Cypermethrin, Deltamethrin). Fokus di telinga, leher, lipatan kaki. Atau mandikan kambing dengan shampoo anti-parasit. Kutu dan tungau = gatal = kambing garuk-garuk terus = stress, bulu rontok, luka, anemia (kutu hisap darah)</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- B. Pakan dan Nutrisi -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">B. Pakan dan Nutrisi</h3>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Komposisi Pakan Ideal untuk Kambing</h4>
              <div class="space-y-3 text-gray-700">
                <p class="mb-3">Kambing adalah <strong class="text-emerald-700">browser dan grazer</strong> (makan daun, ranting, rumput). Formula pakan ideal: <strong>70-80% hijauan + 20-30% konsentrat</strong> (untuk pertumbuhan optimal dan efisiensi).</p>
                
                <div class="mb-3">
                  <p class="font-semibold text-emerald-700">Hijauan (70-80% dari total pakan):</p>
                  <ul class="ml-6 mt-2 space-y-1">
                    <li>• <strong>Rumput:</strong> Rumput gajah (paling bagus, protein 10-12%), rumput lapangan/liar, rumput setaria, rumput raja/king grass. Potong saat tinggi 80-120 cm (sebelum berbunga), cacah 5-10 cm untuk mudah dimakan</li>
                    <li>• <strong>Legum (kacang-kacangan):</strong> Daun lamtoro, gamal, turi, kaliandra, indigofera (protein tinggi 18-25%! Bagus banget untuk pertumbuhan). TAPI max 30% dari total hijauan, jangan full legum (bisa kembung karena protein terlalu tinggi fermentasi cepat). Campur dengan rumput</li>
                    <li>• <strong>Daun pohon:</strong> Daun nangka, daun pisang, daun singkong, daun pepaya, daun mangga (kambing suka browse/makan daun). Variasi = nutrisi lengkap</li>
                    <li>• <strong>Jerami padi/jagung:</strong> Serat kasar tinggi, bagus untuk rumen tapi protein rendah. Cocok untuk maintenance kambing dewasa, tidak untuk pertumbuhan/laktasi</li>
                    <li>• <strong>Kebutuhan:</strong> Kambing dewasa 30 kg perlu hijauan segar 10-15% dari bobot badan = 3-4,5 kg/hari. Kambing muda/penggemukan 12-15% BB. Induk laktasi 15-20% BB (produksi susu butuh energi banyak!)</li>
                  </ul>
                </div>

                <div>
                  <p class="font-semibold text-emerald-700">Konsentrat (20-30% dari total pakan):</p>
                  <ul class="ml-6 mt-2 space-y-1">
                    <li>• <strong>Dedak padi (rice bran):</strong> Sumber energi dan protein 12-14%. Murah Rp 4.000-5.000/kg. Jadi base konsentrat</li>
                    <li>• <strong>Jagung giling:</strong> Energi tinggi (karbohidrat), protein 9%. Porsi 20-30% dari konsentrat</li>
                    <li>• <strong>Bungkil kelapa sawit/kedelai:</strong> Protein tinggi 18-22%. Porsi 10-15% dari konsentrat. Mahal tapi penting untuk pertumbuhan cepat</li>
                    <li>• <strong>Ampas tahu:</strong> REKOMENDASI! Protein 18-20%, murah Rp 500-1.000/kg atau bahkan gratis dari pabrik tahu! Bisa jadi 20-40% dari konsentrat. Kambing suka banget ampas tahu (palatable)</li>
                    <li>• <strong>Onggok/gaplek (tapioka):</strong> Limbah singkong, energi tinggi, murah. Porsi 10-20%</li>
                    <li>• <strong>Mineral mix + garam:</strong> WAJIB! 1-2% dari konsentrat. Kambing butuh Ca, P, Na, Cl, trace minerals untuk tulang, reproduksi, metabolisme. Atau sediakan umpan garam/mineral block (kambing jilat sendiri sesuai kebutuhan)</li>
                    <li>• <strong>Kebutuhan:</strong> Kambing dewasa 0,5-1 kg konsentrat/hari. Kambing penggemukan/induk laktasi 0,8-1,5 kg/hari. Anak kambing 0,2-0,5 kg/hari (mulai umur 2-3 bulan)</li>
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
                      <th class="border border-emerald-200 px-4 py-3 text-left font-semibold">Bobot</th>
                      <th class="border border-emerald-200 px-4 py-3 text-left font-semibold">Hijauan/Hari</th>
                      <th class="border border-emerald-200 px-4 py-3 text-left font-semibold">Konsentrat/Hari</th>
                      <th class="border border-emerald-200 px-4 py-3 text-left font-semibold">Keterangan</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-emerald-200">
                    <tr class="bg-white hover:bg-emerald-50 transition-colors">
                      <td class="border border-emerald-200 px-4 py-3 font-medium text-gray-800">Anak Kambing (Cempe)</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">0-3 bulan</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">0,5-1 kg</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">0,2-0,3 kg + susu</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">Masih menyusu induk. Mulai creep feeding (pakan starter) umur 2-3 minggu. Sapih umur 3 bulan</td>
                    </tr>
                    <tr class="bg-gray-50 hover:bg-emerald-50 transition-colors">
                      <td class="border border-emerald-200 px-4 py-3 font-medium text-gray-800">Lepas Sapih (Grower)</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">10-20 kg</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">1,5-2,5 kg</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">0,4-0,6 kg</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">Fase pertumbuhan cepat. Protein 14-16%. Target ADG 100-150 gram/hari</td>
                    </tr>
                    <tr class="bg-white hover:bg-emerald-50 transition-colors">
                      <td class="border border-emerald-200 px-4 py-3 font-medium text-gray-800">Penggemukan (Fattening)</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">20-40 kg</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">2,5-4 kg</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">0,8-1,2 kg</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">Target ADG 150-200 gram/hari (PE/Boer). Protein 14-16%. Panen umur 10-12 bulan</td>
                    </tr>
                    <tr class="bg-gray-50 hover:bg-emerald-50 transition-colors">
                      <td class="border border-emerald-200 px-4 py-3 font-medium text-gray-800">Induk Bunting & Laktasi</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">40-60 kg</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">4-6 kg</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">1-1,5 kg</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">Kebutuhan nutrisi tinggi! Protein 16-18%. Induk perah PE laktasi butuh lebih banyak (6-8 kg hijauan + 1,5-2 kg konsentrat)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Jadwal Pemberian Pakan</h4>
              <div class="space-y-3 text-gray-700">
                <ul class="ml-6 space-y-2">
                  <li>• <strong class="text-emerald-700">Pagi (06:00-07:00):</strong> Hijauan segar + konsentrat. Porsi 40% dari total harian. Kambing aktif makan pagi setelah istirahat malam</li>
                  <li>• <strong class="text-emerald-700">Siang (11:00-12:00):</strong> Hijauan saja (optional jika hijauan pagi habis). Kambing biasanya istirahat siang (tidak aktif makan)</li>
                  <li>• <strong class="text-emerald-700">Sore (16:00-17:00):</strong> Hijauan segar + konsentrat. Porsi 60% dari total harian. Kambing sangat aktif makan sore menjelang malam</li>
                  <li>• <strong class="text-emerald-700">Air minum:</strong> SELALU tersedia 24/7! Ganti pagi dan sore. Kambing minum banyak terutama setelah makan konsentrat (butuh air untuk cerna)</li>
                  <li>• <strong class="text-emerald-700">PENTING:</strong> Beri hijauan dulu, baru konsentrat (jangan terbalik!). Urutan ini penting untuk kesehatan rumen. Hijauan = stimulasi rumen untuk produksi saliva dan buffer asam. Kalau konsentrat dulu (cepat fermentasi) sebelum ada buffer = asidosis (pH rumen turun = sakit)</li>
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
          
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">A. Penyakit Umum pada Kambing di Balikpapan</h3>
            
            <div class="bg-emerald-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">1. Cacingan (Helminthiasis) - PENYAKIT NOMOR 1 KAMBING!</h4>
              <div class="space-y-3 text-gray-700">
                <p><strong class="text-emerald-700">Penyebab:</strong> Cacing nematoda gastrointestinal (Haemonchus contortus = cacing lambung pengisap darah BAHAYA!, Trichostrongylus, Ostertagia), cacing pita (Moniezia), cacing hati (Fasciola gigantica). Infeksi cacingan adalah PEMBUNUH SILENT kambing di Balikpapan! 70-90% kambing terinfeksi cacing (terutama di kandang basah/lembap). Larva cacing hidup di rumput/tanah lembap, termakan kambing → masuk usus → dewasa → hisap darah/nutrisi → kambing kurus lemah anemia mati. Siklus hidup cacing 3-4 minggu (cepat banget berkembang biak!)</p>
                
                <p><strong class="text-emerald-700">Gejala:</strong> (1) Kurus kering progresif meskipun makan banyak (cacing makan duluan!), (2) Bulu kusam rontok tidak mengkilap, (3) Selaput mata dan gusi PUCAT/putih (anemia akut karena Haemonchus hisap darah 0,05 ml/cacing/hari, 1000 cacing = 50 ml darah/hari = kambing anemia berat!), (4) Diare kronis berbau (kadang berdarah), (5) Perut buncit tapi tulang rusuk kelihatan (bottle jaw = edema di bawah rahang karena protein rendah), (6) Pertumbuhan terhambat (anak kambing sangat rentan mati mendadak), (7) Nafsu makan drop</p>
                
                <p><strong class="text-emerald-700">Penanganan:</strong> (1) Obat cacing WAJIB rutin setiap 2-3 bulan (jangan tunggu gejala muncul sudah terlambat!). Rotasi 2 jenis obat untuk cegah resistensi: bulan 1-3 pakai Albendazole 10 mg/kg BB oral (tablet/drench), bulan 4-6 pakai Ivermectin 0,2 mg/kg BB suntik subkutan (kombinasi obat lebih efektif bunuh semua jenis cacing). (2) Untuk kambing sakit berat (anemia pucat, diare, kurus): obat cacing SEGERA + suntik vitamin B12 (untuk produksi sel darah merah) + suntik protein/amino acid (AminoMin) + pakan konsentrat protein tinggi 16-18%. (3) Pisahkan kambing sakit dari yang sehat (cegah penularan via kotoran)</p>
                
                <p><strong class="text-emerald-700">Pencegahan KRUSIAL:</strong> (1) Kandang panggung WAJIB! Lantai kering tidak kontak kotoran = siklus hidup cacing terputus. Kotoran jatuh ke tanah/dikumpulkan = tidak termakan lagi, (2) Jangan ambil rumput dari lahan becek/tergenang air (larva cacing banyak di rumput basah!). Ambil rumput dari lahan kering atau jemur rumput 1-2 jam sebelum diberi (larva mati kena panas), (3) Rotasi paddock/penggembalaan: jangan gembalakan di tempat yang sama terus menerus. Pindah setiap 2-3 minggu agar larva di tanah mati kelaparan (tanpa host 3-4 minggu), (4) Buang kotoran harian, jangan biarkan menumpuk di bawah kandang, (5) Obat cacing rutin 2-3 bulan TIDAK BISA DITAWAR! Ini investasi terpenting (obat cacing Rp 5.000-10.000/ekor jauh lebih murah dari kambing mati Rp 2 juta+)</p>
              </div>
            </div>

            <div class="bg-emerald-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">2. Scabies/Kudis (Mange) - Penyakit Kulit Menular</h4>
              <div class="space-y-3 text-gray-700">
                <p><strong class="text-emerald-700">Penyebab:</strong> Tungau parasit mikroskopis (Sarcoptes scabiei, Psoroptes, Chorioptes) yang menggali lubang di kulit kambing, bertelur, berkembang biak. Tungau menular lewat kontak langsung kambing-kambing atau lewat kandang/peralatan kotor. Satu kambing sakit → dalam 2-4 minggu seluruh kandang tertular! Tungau hidup 2-3 minggu di luar host (kandang, kayu, tali)</p>
                
                <p><strong class="text-emerald-700">Gejala:</strong> (1) Gatal HEBAT non-stop (kambing garuk-garuk terus, gosok-gosokkan badan ke dinding/kayu sampai luka), (2) Bulu rontok patch (alopecia) terutama di telinga, leher, kaki, area bokong. Kambing bisa botak parah, (3) Kulit menebal keras kerak (eksim kering bersisik putih-abu), (4) Luka berdarah bernanah (infeksi sekunder bakteri karena garukan), (5) Kambing gelisah tidak bisa istirahat (stress gatal = nafsu makan turun = kurus), (6) Penampilan jelek tidak laku jual</p>
                
                <p><strong class="text-emerald-700">Penanganan:</strong> (1) ISOLASI kambing sakit segera! Jangan campur dengan yang sehat (sangat menular). Pisahkan kandang minimum 5 meter, (2) Mandikan dengan sabun belerang/sulfur (di apotik hewan) atau shampoo anti-kudis (Scabimite, Acaricide). Basahi seluruh tubuh, diamkan 10-15 menit, bilas. Ulangi 3x (hari ke-1, 7, 14) untuk bunuh tungau generasi baru yang menetas dari telur, (3) ATAU suntik Ivermectin/Doramectin 0,2 mg/kg BB subkutan (lebih praktis efektif sistemik). Ulangi 2 minggu kemudian (bunuh tungau siklus kedua). Ivermectin injeksi lebih bagus dari mandi (tungau dalam kulit mati dari dalam), (4) Semprot kandang, peralatan, dinding dengan Cypermethrin/Deltamethrin 0,1% (insektisida acaricide). Biarkan kering 24 jam sebelum kambing masuk lagi, (5) Beri vitamin (B-Complex, AD3E) untuk recovery kulit dan bulu</p>
                
                <p><strong class="text-emerald-700">Pencegahan:</strong> (1) KARANTINA kambing baru minimum 2-3 minggu di kandang terpisah. Cek kulit setiap hari, tungau muncul 7-14 hari. Kalau sehat baru campur dengan kambing lama, (2) Mandikan kambing rutin sebulan sekali (terutama musim hujan) dengan sabun antiseptik/anti-parasit, (3) Jaga kebersihan kandang kering (tungau suka lembap kotor), (4) Cek kulit kambing seminggu sekali (deteksi dini = gampang diobati), (5) Jangan overcrowding (padat = kontak banyak = penularan cepat), (6) Semprot anti-ektoparasit kandang setiap 2-3 minggu preventif</p>
              </div>
            </div>

            <div class="bg-emerald-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">3. Kembung/Bloat - EMERGENSI! Bisa Mati dalam Jam!</h4>
              <div class="space-y-3 text-gray-700">
                <p><strong class="text-emerald-700">Penyebab:</strong> Akumulasi gas berlebihan di rumen (lambung besar kambing) yang tidak bisa dikeluarkan lewat sendawa. Dua tipe: (1) <strong>Frothy bloat (kembung berbusa):</strong> Gas tercampur busa stabil di rumen akibat makan legum segar berlebihan (lamtoro, gamal basah pagi banyak embun). Protein tinggi legum → fermentasi cepat → gas CO2 dan metana banyak + saponin legum → busa kental (seperti sabun cuci) → gas terperangkap tidak bisa keluar. (2) <strong>Free gas bloat (kembung gas bebas):</strong> Gas menumpuk tapi tidak berbusa, disebabkan obstruksi (tersedak batang kayu/plastik di esofagus) atau disfungsi rumen (kamping rebahan lama tidak bisa sendawa)</p>
                
                <p><strong class="text-emerald-700">Gejala - CEPAT FATAL:</strong> (1) Perut kiri (fossa paralumbalis) membesar/mengembang cepat dalam 30 menit-2 jam (seperti balon drum kencang kalau dipukul), (2) Nafas cepat sesak (dyspnea) mulut terbuka, lidah menjulur (diafragma tertekan gas tidak bisa nafas!), (3) Kambing berdiri dengan kaki depan lebih tinggi mencari posisi nyaman (seperti orang sesak nafas), (4) Gelisah menendang perut sendiri, sering tiduran-bangun, (5) Air liur banyak keluar, (6) Mata melotot (distress), telinga ke belakang, (7) Stadium lanjut (1-3 jam): kambing rebahan tidak bisa bangun, kejang, kolaps, MATI (gas menekan jantung dan paru, kambing mati lemas)</p>
                
                <p><strong class="text-emerald-700">Pertolongan PERTAMA - Menit Pertama KRUSIAL:</strong> (1) Jangan panik! Jalan-jalankan kambing 10-15 menit (stimulasi rumen kontraksi, gas keluar lewat sendawa). Jangan biarkan kambing rebahan (gas makin terperangkap!), (2) Pijat perut kiri dengan gerakan memutar dan ke atas (push gas ke esofagus). Tekan-lepas-tekan-lepas seperti pompa, (3) Masukkan <strong>minyak kelapa/minyak sayur 50-100 ml</strong> lewat mulut pakai botol (pecahkan busa di rumen). Atau <strong>Bloat Guard/anti-bloat 50 ml</strong> (di apotik hewan, lebih efektif dari minyak), (4) Taruh <strong>kayu bulat diameter 2-3 cm di mulut kambing seperti bit</strong> (ikat ke belakang kepala dengan tali). Ini buka mulut → kambing sendawa terus → gas keluar, (5) Jika dalam 30 menit tidak membaik atau kambing makin sesak → <strong>HUBUNGI DOKTER HEWAN SEGERA untuk ditusuk rumen (rumenocentesis/trocar)</strong>. Ini prosedur emergensi: jarum besar ditusuk di perut kiri → gas keluar mendesis → kambing langsung lega. JANGAN tunda terlalu lama, kambing bisa mati mendadak!</p>
                
                <p><strong class="text-emerald-700">Pencegahan (Lebih Baik Cegah!):</strong> (1) JANGAN beri legum segar (lamtoro, gamal, turi) 100%! Maksimal 30% dari total hijauan, campur dengan rumput kering (rumput gajah, setaria). Rumput serat tinggi = buffer rumen cegah fermentasi terlalu cepat, (2) Jangan beri rumput basah embun pagi atau rumput hujan-hujanan (kadar air tinggi → fermentasi cepat). Jemur dulu 1-2 jam atau beri siang/sore, (3) Transisi pakan bertahap! Jangan mendadak ganti dari rumput ke legum atau konsentrat tinggi. Adaptasi rumen butuh 7-10 hari (mikroba rumen perlu adjust), (4) Beri pakan BERTAHAP 2-3x sehari (pagi-sore), jangan sekaligus banyak (kambing kelaparan → makan buru-buru banyak = bloat), (5) Hijauan dulu, konsentrat kemudian (urutan penting! Hijauan stimulasi saliva = buffer pH rumen), (6) Sediakan <strong>baking soda/sodium bikarbonat</strong> free choice (kambing jilat sendiri sesuai kebutuhan untuk buffer asam rumen)</p>
              </div>
            </div>

            <div class="bg-emerald-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">4. Pink Eye (Infectious Keratoconjunctivitis) - Mata Merah Menular</h4>
              <div class="space-y-3 text-gray-700">
                <p><strong class="text-emerald-700">Penyebab:</strong> Infeksi bakteri Moraxella ovis (paling sering), Chlamydia, atau Mycoplasma conjunctivae pada mata kambing. Penyakit ini sangat menular lewat kontak langsung (kambing saling sentuh mata), lalat (vector mekanis bawa bakteri dari kambing sakit ke sehat), atau aerosol (bersin). Faktor pencetus: (1) Musim kemarau panas terik (suhu 33-37°C Balikpapan April-Oktober), (2) Kandang berdebu/kotor (debu iritasi mata → bakteri masuk), (3) Sinar UV tinggi (mata terlalu terang tidak ada teduh), (4) Kandang overcrowding</p>
                
                <p><strong class="text-emerald-700">Gejala:</strong> (1) Mata merah (konjungtiva hiperemis/bengkak merah terang), (2) Berair terus menerus (epiphora = air mata mengalir di pipi bikin bulu basah kotor), (3) Mata silau/fotofobia (kambing sering merem, hindari cahaya terang, mencari tempat gelap teduh), (4) Kelopak mata bengkak (blefaritis), (5) Stadium lanjut (3-7 hari tanpa obat): kornea keruh putih (opacity), ulcer/luka di kornea (bisa pecah = mata buta permanen!), (6) Menular ke kambing lain dalam 2-5 hari (bisa outbreak 50-80% kandang tertular)</p>
                
                <p><strong class="text-emerald-700">Penanganan:</strong> (1) <strong>ISOLASI kambing sakit SEGERA!</strong> Pisahkan ke kandang terpisah gelap/teduh (kurangi cahaya terang yang bikin sakit). Jangan campur dengan yang sehat (menular cepat!), (2) Bersihkan mata dengan kapas + air matang hangat atau <strong>NaCl 0,9% steril</strong> (saline). Lap lembut dari dalam ke luar (buang kotoran mata dan nanah), (3) Teteskan <strong>salep mata antibiotik Oxytetracycline/Terramycin eye ointment</strong> (di apotik hewan/manusia) 3-4x/hari selama 5-7 hari. Caranya: buka kelopak mata, masukkan salep 1-2 cm di bagian dalam kelopak, pejamkan mata kambing dan pijat lembut agar salep rata. Atau tetes mata <strong>Chloramphenicol 0,5%</strong> 4-5 tetes 3x/hari, (4) Suntik antibiotik sistemik (untuk infeksi berat/banyak kambing): <strong>Oxytetracycline LA 20 mg/kg BB intramuscular</strong>, ulangi setelah 48-72 jam (2-3x suntik cukup). Ini bunuh bakteri dari dalam + cegah penularan, (5) Pindahkan ke kandang teduh (hindari sinar matahari langsung selama recovery 7-10 hari)</p>
                
                <p><strong class="text-emerald-700">Pencegahan:</strong> (1) Jaga kandang tetap bersih TIDAK BERDEBU! Siram lantai kandang (kalau panggung siram area di bawah) agar debu tidak beterbangan. Debu adalah pemicu utama di Balikpapan musim kemarau, (2) Ventilasi bagus (50% dinding terbuka) untuk kurangi konsentrasi bakteri aerosol, (3) KONTROL LALAT! Lalat adalah vector utama Pink Eye. Pasang fly trap, semprot insektisida kandang (Cypermethrin) setiap 1-2 minggu, buang kotoran harian (lalat bertelur di kotoran), (4) Jangan overcrowding/terlalu padat (kontak banyak = penularan cepat). Jaga space 1,5-2 m² per ekor, (5) Sediakan teduh cukup di kandang (atap lebar, pohon di sekitar kandang). Hindari sinar UV langsung ke mata kambing, (6) Karantina kambing baru 2-3 minggu, cek mata setiap hari</p>
              </div>
            </div>
          </div>

          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">B. Program Vaksinasi dan Pencegahan</h3>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Jadwal Vaksinasi dan Pengobatan Rutin Kambing</h4>
              <div class="overflow-x-auto">
                <table class="min-w-full border-collapse border border-emerald-200">
                  <thead>
                    <tr class="bg-emerald-100 text-emerald-800">
                      <th class="border border-emerald-200 px-4 py-3 text-left font-semibold">Umur/Waktu</th>
                      <th class="border border-emerald-200 px-4 py-3 text-left font-semibold">Vaksin/Obat</th>
                      <th class="border border-emerald-200 px-4 py-3 text-left font-semibold">Penyakit Target</th>
                      <th class="border border-emerald-200 px-4 py-3 text-left font-semibold">Metode & Dosis</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-emerald-200">
                    <tr class="bg-white hover:bg-emerald-50 transition-colors">
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">Umur 3 bulan (pertama kali)</td>
                      <td class="border border-emerald-200 px-4 py-3 font-medium text-gray-800">Vaksin Anthrax</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">Antraks (penyakit mematikan bakterial, fatal 100%)</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">Suntik subkutan 1 ml. WAJIB di area endemik Kaltim</td>
                    </tr>
                    <tr class="bg-gray-50 hover:bg-emerald-50 transition-colors">
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">Setiap 6-12 bulan</td>
                      <td class="border border-emerald-200 px-4 py-3 font-medium text-gray-800">Anthrax Booster</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">Antraks (pemeliharaan imunitas)</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">Suntik subkutan 1 ml. Gratis di Dinas Peternakan Balikpapan (biasanya program tahunan)</td>
                    </tr>
                    <tr class="bg-white hover:bg-emerald-50 transition-colors">
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">Setiap 2-3 bulan (RUTIN!)</td>
                      <td class="border border-emerald-200 px-4 py-3 font-medium text-gray-800">Obat Cacing (Albendazole / Ivermectin rotasi)</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">Cacingan (Haemonchus, Trichostrongylus, cacing pita, cacing hati)</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">Albendazole 10 mg/kg BB oral (tablet/drench) ATAU Ivermectin 0,2 mg/kg BB suntik SC. Rotasi 2 jenis obat untuk cegah resistensi</td>
                    </tr>
                    <tr class="bg-gray-50 hover:bg-emerald-50 transition-colors">
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">Setiap 1-2 bulan</td>
                      <td class="border border-emerald-200 px-4 py-3 font-medium text-gray-800">Vitamin AD3E + B-Complex</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">Peningkatan imunitas, pertumbuhan, reproduksi, produksi susu</td>
                      <td class="border border-emerald-200 px-4 py-3 text-gray-700">Suntik IM 2-3 ml (AD3E untuk dewasa, B-Complex untuk stress/sakit/pasca lahir)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Obat-obatan dan Vitamin Wajib di Kandang (First Aid Kit Kambing)</h4>
              <div class="space-y-3 text-gray-700">
                <ul class="ml-6 space-y-2">
                  <li>• <strong class="text-emerald-700">Obat cacing:</strong> Albendazole tablet 600 mg (Rp 3.000-5.000/tablet), Ivermectin injeksi 1% 50 ml (Rp 80.000-120.000/botol). Stok untuk 6 bulan</li>
                  <li>• <strong class="text-emerald-700">Vitamin injeksi:</strong> B-Complex 100 ml (Rp 50.000-80.000), AD3E 100 ml (Rp 60.000-100.000), AminoMin (asam amino kompleks) 100 ml (Rp 80.000)</li>
                  <li>• <strong class="text-emerald-700">Antibiotik (resep dokter hewan):</strong> Oxytetracycline LA 20% 100 ml (Rp 120.000-180.000), Penstrep (Penicillin + Streptomycin) 100 ml (Rp 100.000-150.000). Untuk infeksi bakteri serius</li>
                  <li>• <strong class="text-emerald-700">Obat mata:</strong> Salep Terramycin/Oxytetracycline eye ointment 5 gram (Rp 15.000-25.000), Cloramfenikol tetes mata (Rp 10.000-20.000). Untuk Pink Eye</li>
                  <li>• <strong class="text-emerald-700">Antiseptik:</strong> Betadine 60 ml (Rp 15.000-25.000), Alkohol 70% 1 liter (Rp 20.000), Rivanol powder (Rp 10.000). Untuk luka, desinfeksi</li>
                  <li>• <strong class="text-emerald-700">Anti-bloat:</strong> Minyak kelapa 1 liter (Rp 30.000-50.000), Bloat Guard 250 ml (Rp 50.000-80.000). Untuk kembung emergensi</li>
                  <li>• <strong class="text-emerald-700">Anti-ektoparasit:</strong> Cypermethrin/Deltamethrin spray 1 liter (Rp 80.000-120.000), Sabun belerang/sulfur (Rp 10.000-20.000). Untuk scabies, kutu, tungau</li>
                  <li>• <strong class="text-emerald-700">Mineral mix:</strong> Premix mineral + vitamin 1 kg (Rp 40.000-80.000) atau Mineral block/batu jilat 2 kg (Rp 30.000-50.000). Untuk defisiensi mineral</li>
                  <li>• <strong class="text-emerald-700">Peralatan:</strong> Spuit/syringe 3 ml, 5 ml, 10 ml (Rp 2.000-5.000/pcs), Jarum 18G dan 20G (Rp 1.000-2.000/pcs), Kapas, perban, gunting kuku kambing (Rp 50.000-100.000)</li>
                </ul>
                <p class="mt-3 text-sm italic">Total investasi obat-obatan first aid kit: <strong>Rp 800.000 - Rp 1.200.000</strong> (cukup untuk 10-15 ekor kambing selama 6 bulan). Ini SANGAT MURAH dibanding risiko kambing mati!</p>
              </div>
            </div>
          </div>
        </section>

        <!-- IV. Reproduksi dan Pembiakan -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-200">
            IV. Reproduksi dan Pembiakan
          </h2>
          
          <!-- A. Perkawinan dan Pemilihan Indukan -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">A. Perkawinan dan Pemilihan Indukan</h3>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Kriteria Induk Betina (Doe) Berkualitas</h4>
              <div class="space-y-3 text-gray-700">
                <ul class="ml-6 space-y-2">
                  <li>• <strong class="text-emerald-700">Umur ideal kawin pertama:</strong> 10-12 bulan (bobot minimal 30-35 kg untuk PE/Boer, 18-20 kg untuk Kacang). Jangan kawinkan terlalu muda (< 10 bulan) = stunting pertumbuhan induk, kesulitan kelahiran (dystocia), anak lahir kecil lemah. Kambing betina mencapai pubertas 6-8 bulan tapi belum siap reproduksi optimal!</li>
                  <li>• <strong class="text-emerald-700">Postur tubuh ideal:</strong> Tubuh panjang rectangular (bukan persegi), dada lebar dalam (kapasitas paru-paru bagus), punggung lurus tidak bungkuk, kaki lurus kokoh tidak X/O (pincang = kesulitan birahi, sulit kawin, lemah nggendong bobot bunting). Pinggul lebar (pelvis lebar = mudah melahirkan, dystocia rendah)</li>
                  <li>• <strong class="text-emerald-700">Ambing (untuk kambing perah PE):</strong> Ambing simetris kiri-kanan seimbang, putting 2 buah lurus tidak terlalu pendek/panjang (mudah diperah), kulit ambing lembut tidak keras/benjol (mastitis). Induk dara cek ambing ibu/kakeknya (genetik!). Ambing besar = produksi susu tinggi (PE bagus ambing bisa 3-5 kg penuh susu!)</li>
                  <li>• <strong class="text-emerald-700">Riwayat reproduksi:</strong> Pilih induk dari ibu yang produktif (kelahiran kembar 2-3 anak, tidak pernah aborsi/stillbirth, mudah melahirkan, anak sehat tumbuh cepat). Produktivitas reproduksi 60-70% genetik! Ibu produktif → anak betina juga produktif</li>
                  <li>• <strong class="text-emerald-700">Kesehatan:</strong> Mata cerah, bulu mengkilap, nafsu makan bagus, aktif lincah, tidak cacat fisik, bebas penyakit (cek mata pucat = anemia cacingan, cek kulit = scabies). Induk sehat = anak sehat</li>
                  <li>• <strong class="text-emerald-700">Temperamen:</strong> Pilih kambing tenang tidak galak/stress. Kambing stress = birahi tidak teratur, sulit bunting (cortisol tinggi hambat ovulasi), produksi susu rendah. Kambing jinak mudah dihandle saat periksa bunting/perah susu</li>
                </ul>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Kriteria Pejantan (Buck) Berkualitas</h4>
              <div class="space-y-3 text-gray-700">
                <ul class="ml-6 space-y-2">
                  <li>• <strong class="text-emerald-700">Umur ideal kawin:</strong> 10-12 bulan (bobot minimal 40-50 kg untuk PE/Boer, 25-30 kg untuk Kacang). Pejantan produktif sampai umur 6-8 tahun! Pejantan terlalu muda (< 10 bulan) = libido rendah, semen kualitas jelek (konsentrasi sperma rendah, motilitas lemah), angka kebuntingan rendah</li>
                  <li>• <strong class="text-emerald-700">Postur tubuh maskulin:</strong> Tubuh besar panjang (lebih besar 20-30% dari betina), dada lebar dalam (stamina bagus untuk kawin), leher tebal berotot (masculinity), kepala besar gagah (roman nose untuk PE, kepala kotak untuk Boer), tanduk kuat (untuk Kacang), kaki kokoh lurus. Penampilan jantan dominan = libido tinggi!</li>
                  <li>• <strong class="text-emerald-700">Testis (buah zakar) sehat:</strong> Testis 2 buah seimbang (kiri-kanan sama besar), ukuran besar (diameter 8-10 cm untuk dewasa PE/Boer), konsistensi kenyal (tidak keras/lembek), tidak ada benjolan/luka, skrotum tidak terlalu ketat/longgar. Testis besar = produksi sperma banyak = fertilitas tinggi! Cek testis saat beli pejantan (ini kunci utama!)</li>
                  <li>• <strong class="text-emerald-700">Libido (nafsu kawin) tinggi:</strong> Pejantan aktif cepat mendeteksi betina birahi (mencium vulva betina, flehmen response = bibir atas terangkat mencium feromon), cepat mounting (naik punggung betina 5-10 detik), tidak malu-malu. Libido tinggi = angka kebuntingan tinggi. Pejantan malas/lambat = banyak betina terlewat birahi (service per conception tinggi = boros)</li>
                  <li>• <strong class="text-emerald-700">Riwayat genetik:</strong> Pilih pejantan dari garis keturunan tumbuh cepat (ADG tinggi), ukuran besar, sehat. Kalau untuk kambing perah (PE), pilih pejantan dari ibu produksi susu tinggi (3-5 liter/hari). 50% genetik anak dari pejantan! Pejantan bagus = perbaikan kualitas keturunan cepat</li>
                  <li>• <strong class="text-emerald-700">Ratio pejantan:betina:</strong> 1 pejantan bisa mengawini 15-25 betina (tergantung umur dan kondisi). Pemula bisa mulai 1:10 (1 pejantan untuk 10 betina). Jangan terlalu banyak betina = pejantan kelelahan = fertilitas turun</li>
                </ul>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Deteksi Birahi (Estrus) dan Waktu Kawin Optimal</h4>
              <div class="space-y-3 text-gray-700">
                <p><strong class="text-emerald-700">Siklus birahi kambing:</strong> Kambing adalah <strong>polyestrous (birahi sepanjang tahun)</strong>, tidak mengenal musim kawin (beda dengan domba yang seasonal). Siklus birahi 18-21 hari (rata-rata 20 hari). Lama birahi 24-48 jam (2 hari). Kalau tidak bunting, akan birahi lagi 3 minggu kemudian.</p>
                
                <p><strong class="text-emerald-700">Tanda-tanda birahi (mudah dikenali!):</strong></p>
                <ul class="ml-6 space-y-1">
                  <li>• <strong>Vulva (kemaluan) bengkak merah muda,</strong> kadang keluar lendir bening (mukus). Ini tanda paling jelas!</li>
                  <li>• <strong>Gelisah, sering mengeluarkan suara mengembek keras</strong> (memanggil pejantan). Kambing PE birahi embek-embek terus (berisik!)</li>
                  <li>• <strong>Nafsu makan sedikit turun,</strong> lebih fokus cari pejantan daripada makan</li>
                  <li>• <strong>Ekor sering mengibar-kibarkan,</strong> mengangkat ekor ke atas (flagging = sinyal siap kawin)</li>
                  <li>• <strong>Suka mendekati dan mencium pejantan,</strong> kalau ada pejantan langsung mendekat, berdiri diam kalau pejantan mounting (standing heat = tanda siap kawin optimal!)</li>
                  <li>• <strong>Kadang naik punggung kambing betina lain</strong> (lesbian behavior = mounting kambing lain, ini tanda birahi kuat!)</li>
                  <li>• <strong>Produksi susu drop sedikit</strong> (untuk kambing perah PE yang lagi laktasi)</li>
                </ul>

                <p><strong class="text-emerald-700">Waktu kawin optimal:</strong> Kawinkan pada jam 12-24 setelah birahi mulai (pertengahan masa birahi). Ovulasi (sel telur keluar) terjadi 12-24 jam setelah birahi mulai. Sperma bertahan hidup 24-48 jam di saluran reproduksi betina. Jadi timing terbaik: kawinkan saat betina <strong>standing heat</strong> (diam kalau didekati pejantan) = ovulasi segera terjadi = peluang bunting maksimal 80-90%! Kalau terlambat kawin (> 36 jam setelah birahi mulai) = sel telur sudah mati = tidak bunting.</p>

                <p><strong class="text-emerald-700">Sistem kawin:</strong> (1) <strong>Kawin alam:</strong> Campur pejantan dengan betina-betina di kandang yang sama (hand mating). Pejantan akan deteksi betina birahi dan kawin sendiri. Sistem paling praktis untuk peternak kecil. Atau (2) <strong>Kawin terkontrol:</strong> Pisahkan pejantan di kandang sendiri. Saat betina birahi, bawa ke kandang pejantan untuk dikawinkan, tunggu sampai mounting 1-2x, kemudian pisahkan lagi. Sistem ini lebih terkontrol (tahu betina mana yang dikawinkan kapan) tapi lebih repot. Untuk skala besar bisa <strong>Inseminasi Buatan (IB/AI)</strong> dengan semen beku dari pejantan unggul (tapi jarang tersedia untuk kambing di Balikpapan).</p>
              </div>
            </div>
          </div>

          <!-- B. Manajemen Kebuntingan -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">B. Manajemen Kebuntingan (Gestasi)</h3>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Masa Kebuntingan dan Deteksi Bunting</h4>
              <div class="space-y-3 text-gray-700">
                <p><strong class="text-emerald-700">Lama kebuntingan (gestasi):</strong> 144-156 hari (rata-rata <strong>150 hari = 5 bulan</strong>). Kambing Kacang cenderung lebih pendek 144-148 hari, PE/Boer 150-156 hari. Jadi kalau kawin hari ini, lahir 5 bulan lagi. Catat tanggal kawin agar tahu kapan induk akan melahirkan!</p>

                <p><strong class="text-emerald-700">Cara deteksi bunting (Pregnancy Diagnosis):</strong></p>
                <ul class="ml-6 space-y-1">
                  <li>• <strong>Tidak birahi lagi setelah 21 hari:</strong> Ini tanda paling sederhana! Setelah kawin, tunggu 3 minggu (21 hari). Kalau betina tidak birahi lagi = kemungkinan besar bunting. Kalau birahi lagi = tidak bunting, kawinkan lagi</li>
                  <li>• <strong>Palpasi perut (60-90 hari bunting):</strong> Raba perut kanan bawah induk (uterus ada di sebelah kanan rumen). Tekan lembut, akan terasa keras bulat (fetus). Butuh pengalaman! Jangan terlalu keras (bisa aborsi)</li>
                  <li>• <strong>Perut membesar (90-120 hari bunting):</strong> Perut kanan bawah jelas membesar, terutama saat bunting kembar 2-3 anak (seperti balon di perut kanan). Induk bunting jalan lebih lambat hati-hati</li>
                  <li>• <strong>Ambing membesar (120-150 hari bunting):</strong> Ambing mulai membesar 1-2 bulan sebelum lahir (terutama induk dara pertama kali bunting). Ambing makin besar menjelang lahir (2-4 minggu sebelum lahir ambing penuh keras)</li>
                  <li>• <strong>USG (Ultrasonography) 30-60 hari bunting:</strong> Metode paling akurat! Dokter hewan pakai alat USG deteksi kantung janin (gestational sac) di uterus. Bisa deteksi bunting sejak umur 30 hari (1 bulan setelah kawin). Biaya Rp 50.000-100.000/ekor. Jarang dipakai peternak kecil (mahal), lebih untuk breeding farm besar</li>
                </ul>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Perawatan Induk Bunting</h4>
              <div class="space-y-3 text-gray-700">
                <ul class="ml-6 space-y-2">
                  <li>• <strong class="text-emerald-700">Pakan berkualitas tinggi:</strong> Induk bunting butuh nutrisi lebih banyak untuk pertumbuhan fetus + maintenance tubuh sendiri. Berikan konsentrat lebih banyak: (1) Bunting 0-3 bulan (trimester 1-2): pakan normal 3 kg hijauan + 0,5 kg konsentrat, (2) Bunting 3-5 bulan (trimester 3 = fetus tumbuh cepat!): tambah konsentrat jadi 0,8-1,2 kg/hari + hijauan 3,5-4 kg. Protein 14-16%, energi tinggi (jagung, dedak). Pastikan mineral Ca dan P cukup (untuk tulang fetus). Defisiensi nutrisi = anak lahir kecil lemah, induk sulit recovery pasca lahir</li>
                  <li>• <strong class="text-emerald-700">Pisahkan induk bunting (1-2 bulan sebelum lahir):</strong> Pisahkan induk bunting tua (120-150 hari bunting) ke kandang khusus (maternity pen) yang tenang, bersih, tidak padat. Hindari rebutan pakan, stress, bentrokan dengan kambing lain (bisa aborsi atau prematur). Kandang individu lebih bagus (1,5 x 2 meter)</li>
                  <li>• <strong class="text-emerald-700">Hindari stress dan trauma:</strong> Jangan kejar-kejar induk bunting, jangan paksa berjalan jauh, jangan angkat kasar (pegang di leher dan bokong, jangan angkat dari perut!). Stress = cortisol tinggi = bisa aborsi atau prematur. Hindari vaksinasi dan obat cacing di trimester 3 (aman di trimester 1-2)</li>
                  <li>• <strong class="text-emerald-700">Cegah obesitas:</strong> Induk bunting terlalu gemuk (overweight) = kesulitan melahirkan (dystocia), fetus terlalu besar tidak bisa keluar. Jaga body condition score (BCS) 3-3,5/5 (tidak terlalu kurus tidak terlalu gemuk). Rasio hijauan:konsentrat tetap 70:30, jangan terlalu banyak konsentrat</li>
                  <li>• <strong class="text-emerald-700">Vitamin dan mineral:</strong> Suntik vitamin AD3E sebulan sekali selama bunting (untuk pertumbuhan fetus dan kesehatan induk). Berikan mineral mix di pakan atau batu jilat (Ca, P, Na, Cl penting untuk tulang fetus dan kontraksi uterus saat melahirkan)</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- C. Kelahiran dan Perawatan Anak -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">C. Kelahiran (Kidding) dan Perawatan Anak (Kid/Cempe)</h3>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Tanda-Tanda Induk Akan Melahirkan (24-48 Jam Sebelum Lahir)</h4>
              <div class="space-y-3 text-gray-700">
                <ul class="ml-6 space-y-2">
                  <li>• <strong class="text-emerald-700">Ambing membesar keras penuh susu,</strong> putting besar tegang (kolostrum sudah diproduksi). Peras sedikit, keluar cairan kekuningan kental (kolostrum)</li>
                  <li>• <strong class="text-emerald-700">Vulva (kemaluan) bengkak lembek,</strong> kadang keluar lendir/discharge bening kental (mukus plug lepas = servix mulai membuka)</li>
                  <li>• <strong class="text-emerald-700">Ligamen panggul (di samping kiri-kanan ekor) melonggar,</strong> kalau diraba seperti lembek/hilang (ligamen relaxin untuk lewat fetus). Ini tanda 12-24 jam sebelum lahir</li>
                  <li>• <strong class="text-emerald-700">Gelisah, sering berdiri-tiduran,</strong> menggaruk-garuk lantai (nesting behavior = mencari tempat nyaman untuk melahirkan), mengisolasi diri dari kambing lain</li>
                  <li>• <strong class="text-emerald-700">Nafsu makan drop atau tidak makan sama sekali</strong> (12-24 jam sebelum lahir). Fokus induk untuk melahirkan</li>
                  <li>• <strong class="text-emerald-700">Mengembek keras,</strong> menoleh ke perut (tanda kontraksi mulai sakit), menendang perut</li>
                  <li>• <strong class="text-emerald-700">Sering kencing sedikit-sedikit</strong> (tekanan fetus ke bladder = kandung kemih)</li>
                </ul>
                <p class="mt-3"><strong class="text-emerald-700">Persiapan kandang kelahiran:</strong> Bersihkan kandang, beri alas jerami/sekam tebal 10-15 cm (hangat, lembut, menyerap air ketuban), siapkan lampu pijar 40-60 watt (untuk hangatkan anak yang baru lahir kalau malam/pagi dingin), siapkan handuk bersih, betadine, gunting tajam (potong tali pusar), timbangan (timbang anak lahir)</p>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Proses Kelahiran Normal dan Bantuan</h4>
              <div class="space-y-3 text-gray-700">
                <p><strong class="text-emerald-700">Proses kelahiran normal (60-120 menit):</strong></p>
                <ul class="ml-6 space-y-1">
                  <li>• <strong>Fase 1 (30-60 menit):</strong> Kontraksi uterus dimulai (induk gelisah, berbaring-berdiri), servix membuka perlahan. Belum kelihatan apa-apa</li>
                  <li>• <strong>Fase 2 (30-60 menit):</strong> Kontraksi kuat (induk mengejan), kantung air ketuban muncul di vulva (seperti balon air bening), pecah sendiri atau dipecahkan. Kemudian <strong>2 kaki depan + hidung anak keluar</strong> (presentasi normal!). Induk terus mengejan, kepala dan bahu keluar (ini bagian paling susah), lalu seluruh tubuh anak keluar dengan cepat. Kalau anak kembar 2-3, selang 10-30 menit keluar anak berikutnya. Induk istirahat sebentar lalu mengejan lagi</li>
                  <li>• <strong>Fase 3 (30-60 menit setelah anak lahir):</strong> Placenta/ari-ari (afterbirth) keluar. Warna merah gelap, seperti kantung berisi darah. Induk kadang makan placenta (normal, instinct untuk bersihkan dan protein). Buang placenta (jangan biarkan membusuk di kandang = penyakit!)</li>
                </ul>

                <p class="mt-3"><strong class="text-emerald-700">Bantuan saat melahirkan (kalau perlu):</strong></p>
                <ul class="ml-6 space-y-1">
                  <li>• <strong>Kalau induk mengejan > 30 menit tapi anak tidak keluar-keluar:</strong> CEK POSISI ANAK! Cuci tangan pakai sabun + betadine, masukkan tangan perlahan ke vagina (pakai sarung tangan kalau ada). Posisi normal: 2 kaki depan + hidung. Posisi salah: kaki belakang duluan (breech), kepala menengok ke samping/bawah, kaki tertekuk, kembar kusut (2 anak bersamaan). Kalau posisi salah, dorong anak sedikit ke dalam, betulkan posisi (tarik kaki depan lurus, luruskan kepala), lalu tarik perlahan saat induk mengejan</li>
                  <li>• <strong>Kalau anak sudah 50% keluar (kepala dan kaki depan keluar) tapi застрял:</strong> Tarik perlahan kaki depan anak ke bawah (arah ekor induk) saat induk mengejan. Jangan tarik keras sekali (bisa robek vagina induk atau patah kaki anak!). Tarik mengikuti irama kontraksi induk</li>
                  <li>• <strong>Kalau placenta tidak keluar setelah 12 jam:</strong> HUBUNGI DOKTER HEWAN! Retained placenta bisa infeksi uterus (metritis) = induk demam, tidak mau makan, bisa mati. Dokter hewan akan berikan hormon oksitosin injeksi (kontraksi uterus keluar placenta) atau manual removal (cabut tangan)</li>
                  <li>• <strong>Kalau kelahiran sangat sulit (dystocia parah):</strong> Fetus terlalu besar, pelvis induk sempit, presentasi abnormal tidak bisa dibetulkan = HUBUNGI DOKTER HEWAN SEGERA! Mungkin perlu operasi caesar (jarang, biaya Rp 500.000-1.000.000). Jangan dipaksa tarik kalau tidak bisa = induk dan anak mati!</li>
                </ul>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Perawatan Anak Kambing (Cempe/Kid) Baru Lahir - 3 JAM PERTAMA KRUSIAL!</h4>
              <div class="space-y-3 text-gray-700">
                <ul class="ml-6 space-y-2">
                  <li>• <strong class="text-emerald-700">Bersihkan lendir dari hidung dan mulut anak SEGERA (1 menit pertama!):</strong> Anak baru lahir masih terbungkus selaput ketuban dan penuh lendir. <strong>Prioritas #1: BERSIHKAN HIDUNG DAN MULUT AGAR ANAK BISA NAFAS!</strong> Gunakan handuk bersih, lap/usap hidung dan mulut anak (buang lendir). Kalau anak tidak langsung nafas, goyangkan lembut atau tepuk-tepuk dada anak (stimulasi nafas). Kalau masih tidak nafas, tiup mulut anak (artificial respiration) atau gantung anak terbalik sebentar (lendir keluar dari hidung). Anak harus nafas dalam 1-2 menit setelah lahir! Kalau tidak = otak kekurangan oksigen = mati atau cacat otak</li>
                  <li>• <strong class="text-emerald-700">Potong dan desinfeksi tali pusar:</strong> Induk biasanya menjilat dan menggigit tali pusar sendiri (normal). Kalau tidak, potong dengan gunting tajam steril 3-4 cm dari perut anak (jangan terlalu pendek = hernia umbilical). Celupkan ujung tali pusar ke betadine/iodine tincture 7% (cegah infeksi = omphalitis/navel ill). Ulangi celup betadine setiap hari sampai tali pusar kering dan lepas (3-7 hari)</li>
                  <li>• <strong class="text-emerald-700">Keringkan tubuh anak:</strong> Lap/gosok seluruh tubuh anak dengan handuk kering (stimulasi sirkulasi darah + hangatkan). Anak baru lahir basah = mudah hipotermia (kedinginan)! Suhu tubuh anak normal 38,5-40°C. Kalau pagi/malam dingin (< 25°C) atau hujan, nyalakan lampu pijar 40-60 watt di atas anak (jarak 50-70 cm) untuk hangatkan. Hipotermia = anak lemas tidak mau menyusu = mati</li>
                  <li>• <strong class="text-emerald-700">KOLOSTRUM - Susu Emas (Liquid Gold) - WAJIB 1-2 JAM PERTAMA:</strong> Ini adalah kunci hidup-mati anak kambing! <strong>Kolostrum</strong> adalah susu pertama induk 1-3 hari setelah melahir (warna kuning kental, beda dari susu biasa putih encer). Kolostrum mengandung: (1) <strong>Antibodi/Imunoglobulin (IgG)</strong> = perlindungan kekebalan tubuh anak (anak lahir tanpa antibodi, sistem imun nol!). Antibodi kolostrum diserap usus anak ke darah = passive immunity (perlindungan 2-3 bulan pertama hidup), (2) <strong>Nutrisi padat tinggi</strong> (energi, protein, vitamin A, E, mineral) = fuel anak untuk survive 24 jam pertama dan pertumbuhan, (3) <strong>Laksatif ringan</strong> = bantu anak buang mekonium (feses pertama hitam lengket). <strong>TIMING KRUSIAL:</strong> Anak HARUS minum kolostrum dalam <strong>1-2 jam pertama setelah lahir!</strong> Kenapa? (1) Usus anak hanya bisa serap antibodi utuh 12-24 jam pertama (setelah itu usus "menutup" = antibodi tidak diserap lagi), (2) Konsentrasi antibodi dalam kolostrum tertinggi di 6-12 jam pertama setelah lahir, lalu turun cepat. Jadi semakin cepat anak minum kolostrum semakin bagus! Target: anak minum kolostrum 10-15% dari bobot badan dalam 24 jam pertama (anak 3 kg perlu 300-450 ml kolostrum/hari pertama, bagi 4-6x minum = 50-75 ml per minum). <strong>Kalau anak tidak minum kolostrum:</strong> = tidak ada antibodi = sistem imun nol = sangat mudah sakit (diare, pneumonia, septicemia) = angka kematian 50-80%! Failure of Passive Transfer (FPT) adalah penyebab kematian #1 anak kambing 0-7 hari!</li>
                  <li>• <strong class="text-emerald-700">Bantu anak berdiri dan menyusu:</strong> Anak normal berdiri 15-30 menit setelah lahir, mencari puting induk 30-60 menit setelah lahir. Kalau anak lemas tidak bisa berdiri/mencari puting, <strong>BANTU!</strong> Angkat anak, dekatkan ke ambing induk, masukkan puting ke mulut anak, peras sedikit agar anak tahu ini sumber susu. Anak akan mulai menghisap sendiri (suckling reflex). Pastikan anak berhasil minum! Kalau induk tidak mau menyusui (menolak, menendang anak), <strong>PERAH kolostrum induk (100-150 ml) dan suapi anak pakai botol dot!</strong> Jangan biarkan anak kelaparan! Kalau induk mati saat melahir atau tidak ada kolostrum (agalactia = tidak produksi susu), beli kolostrum kambing/domba dari peternak lain (simpan frozen -20°C awet 1 tahun, cairkan suhu ruang sebelum kasih ke anak). Atau kolostrum sapi bisa (tidak se-ideal kolostrum kambing tapi lebih baik dari tidak ada!). Atau susu pengganti kolostrum komersial (di toko pakan ternak, mahal Rp 200.000-300.000/kg)</li>
                  <li>• <strong class="text-emerald-700">Monitor anak 24 jam pertama:</strong> Cek anak setiap 2-3 jam: apakah anak aktif, berdiri kokoh, menyusu teratur (4-6x/hari), buang air kecil (tanda hidrasi cukup), mekonium keluar (feses hitam lengket dalam 6-12 jam pertama, lalu jadi feses kuning lembek). Kalau anak lemas tidak mau menyusu, menggigil kedinginan, diare, atau tidak buang mekonium = MASALAH! Hubungi dokter hewan atau suapi susu botol + hangatkan dengan lampu + berikan vitamin (B-Complex injeksi 0,5-1 ml, AD3E 0,5 ml)</li>
                </ul>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Perawatan Induk Pasca Melahir (Postpartum)</h4>
              <div class="space-y-3 text-gray-700">
                <ul class="ml-6 space-y-2">
                  <li>• <strong class="text-emerald-700">Beri air minum hangat + gula/madu (500 ml):</strong> Induk habis melahir kehilangan banyak cairan (air ketuban, darah, keringat) = dehidrasi. Segera berikan air minum hangat dicampur gula 2 sendok makan atau madu (rehydrasi + energi cepat). Induk akan minum rakus!</li>
                  <li>• <strong class="text-emerald-700">Beri pakan berkualitas tinggi:</strong> 6-12 jam setelah lahir, beri hijauan segar sedikit (1-2 kg) + konsentrat protein tinggi 0,5 kg (untuk produksi kolostrum dan recovery). Jangan langsung banyak (bisa kembung karena rumen belum normal). Hari ke-2 dst berikan pakan normal + extra konsentrat untuk laktasi (1-1,5 kg konsentrat/hari untuk induk menyusui)</li>
                  <li>• <strong class="text-emerald-700">Suntik vitamin dan antibiotik (opsional):</strong> Suntik vitamin B-Complex 3-5 ml IM (recovery stamina), vitamin AD3E 2-3 ml IM (untuk laktasi dan imunitas). Kalau proses melahir sulit (dystocia) atau manual assist banyak (tangan masuk vagina), berikan antibiotik Oxytetracycline LA 20 mg/kg BB atau Penstrep 1 ml/10 kg BB untuk cegah infeksi uterus (metritis). Konsultasi dokter hewan</li>
                  <li>• <strong class="text-emerald-700">Monitor discharge (cairan dari vulva):</strong> Normal: 1-3 hari setelah lahir keluar cairan merah-coklat dari vulva (lochia = sisa darah dan jaringan uterus yang dibersihkan). Tidak berbau busuk, tidak banyak. Kalau discharge banyak, hijau/kuning, berbau busuk, induk demam (> 40°C), tidak mau makan = INFEKSI UTERUS (metritis)! Hubungi dokter hewan SEGERA (butuh antibiotik dan infus). Metritis tidak diobati = induk mati</li>
                  <li>• <strong class="text-emerald-700">Pisahkan induk+anak dari kambing lain (7-14 hari):</strong> Biarkan bonding ibu-anak tanpa gangguan. Anak belajar mengenali induk, induk fokus menyusui. Kalau langsung dicampur kambing lain = anak bisa terinjak, induk stress, anak menyusu induk lain (salah induk)</li>
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
                  <p>Layanan: Penyuluhan kambing, bantuan bibit kambing (program pengembangan), vaksinasi gratis Anthrax (tahunan), perizinan usaha peternakan kambing, konsultasi teknis reproduksi dan pakan</p>
                </div>
                <div class="text-gray-700 mt-3">
                  <p class="font-semibold text-emerald-700">UPTD Puskeswan (Pusat Kesehatan Hewan) Balikpapan</p>
                  <p>Alamat: Jl. MT Haryono, Sepinggan</p>
                  <p>Telepon: (0542) 7612345</p>
                  <p>Layanan: Pemeriksaan kesehatan kambing, vaksinasi (Anthrax, SE), pengobatan penyakit, konsultasi reproduksi (IB kambing jika tersedia semen beku), bedah minor (kastrasi, operasi), sertifikat kesehatan hewan untuk jual-beli antar daerah</p>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Supplier & Poultry Shop</h4>
              <div class="space-y-3">
                <div class="text-gray-700">
                  <p class="font-semibold text-emerald-700">UD Mitra Tani Sejahtera</p>
                  <p>Alamat: Jl. MT Haryono RT 35, Sepinggan Raya</p>
                  <p>Telepon: (0542) 7654321 / WA: 0812-3456-7890</p>
                  <p>Produk: Bibit kambing PE/Boer/Kacang (umur 3-6 bulan siap besarkan), pakan konsentrat kambing (dedak, jagung giling, bungkil kelapa, premix), vitamin kambing (B-Complex, AD3E, AminoMin), obat cacing (Albendazole, Ivermectin), vaksin Anthrax (pre-order), peralatan kandang (tempat pakan, ember, timbangan, gunting kuku)</p>
                </div>
                <div class="text-gray-700 mt-3">
                  <p class="font-semibold text-emerald-700">CV Sumber Makmur Feed</p>
                  <p>Alamat: Jl. Soekarno-Hatta Km 7, Karang Joang</p>
                  <p>Telepon: (0542) 8765432 / WA: 0823-4567-8901</p>
                  <p>Produk: Pakan konsentrat kambing siap pakai (protein 14-18%, kemasan 50 kg Rp 280.000-350.000), premix mineral + vitamin (1 kg Rp 60.000), molasses/tetes tebu untuk fermentasi pakan (20 liter Rp 80.000), rumput gajah segar potong (pickup Rp 150.000-200.000), legum lamtoro segar (pickup Rp 200.000-300.000, musiman)</p>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Pembeli & Mitra Usaha</h4>
              <div class="space-y-3">
                <div class="text-gray-700">
                  <p class="font-semibold text-emerald-700">Pasar Hewan Balikpapan (Pasar Ternak)</p>
                  <p>Lokasi: Jl. Manunggal, Km 15 (dekat Terminal Batu Ampar)</p>
                  <p>Jadwal: Setiap hari Jumat dan Minggu pagi (06.00-10.00 WIB). Menjelang Idul Adha (1 bulan sebelum) buka setiap hari!</p>
                  <p>Info: Pasar lelang kambing terbesar di Balikpapan. Pedagang pengumpul dari Samarinda, Tenggarong, Penajam datang beli kambing. Harga fluktuatif tergantung supply-demand. Normal: kambing kacang Rp 1,5-2,5 juta, PE Rp 3,5-5 juta, Boer Rp 4-7 juta. Menjelang Idul Adha: harga naik 50-100%! Kambing jantan besar (> 40 kg) paling laris untuk kurban. Tips: datang pagi bawa kambing sudah mandi bersih (first impression!), jangan mau harga terlalu murah (tawar-menawar wajar), minta bayar cash (jangan kredit berisiko)</p>
                </div>
                <div class="text-gray-700 mt-3">
                  <p class="font-semibold text-emerald-700">Jasa Aqiqah & Kurban "Berkah Barokah"</p>
                  <p>Alamat: Jl. Ahmad Yani, Balikpapan Tengah</p>
                  <p>Telepon: WA 0812-5555-6666</p>
                  <p>Kebutuhan: Supply kambing aqiqah (jantan 1 ekor untuk aqiqah anak laki-laki, betina 2 ekor untuk anak perempuan) bobot 18-30 kg. Harga beli Rp 2,2-3,5 juta/ekor (grade A sehat tidak cacat). Butuh 50-100 ekor/bulan (permintaan stabil sepanjang tahun!). Kontrak rutin pembayaran transfer 3 hari setelah supply. Bonus: sisa hasil pemotongan (kulit, kepala, kaki, jeroan) bisa diambil peternak atau dijual lagi Rp 50.000-100.000/ekor (tambahan income!)</p>
                </div>
                <div class="text-gray-700 mt-3">
                  <p class="font-semibold text-emerald-700">Restoran Sate & Gule "Nikmat Rasa"</p>
                  <p>Alamat: Jl. Jend. Sudirman, Balikpapan Kota</p>
                  <p>Telepon: WA 0823-6666-7777</p>
                  <p>Kebutuhan: Kambing muda 15-25 kg (daging empuk untuk sate dan gule). Butuh 10-20 ekor/bulan. Harga Rp 70.000-85.000/kg hidup (timbang di tempat). Pembayaran cash saat serah terima. Kriteria: kambing sehat tidak cacat, tidak bau prengus (pejantan tua), lebih suka kambing betina/jantan muda kastrasi (daging tidak berbau)</p>
                </div>
                <div class="text-gray-700 mt-3">
                  <p class="font-semibold text-emerald-700">CV Makmur Jaya Dairy (Pengepul Susu Kambing PE)</p>
                  <p>Alamat: Jl. Kariangau, Balikpapan Barat</p>
                  <p>Telepon: WA 0852-7777-8888</p>
                  <p>Kebutuhan: Susu kambing PE segar untuk diolah jadi susu kambing etawa premium (botol 250 ml dijual Rp 15.000-25.000). Harga beli susu Rp 20.000-28.000/liter (tergantung kualitas: bersih tidak bau, uji alkohol test negatif = tidak rusak). Ambil susu setiap pagi jam 06.00-08.00 (susu harus fresh < 3 jam setelah perah). Minimum supply 10 liter/hari. Pembayaran mingguan transfer. Cocok untuk peternak PE skala menengah (10-20 induk perah)</p>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Komunitas & Kelompok Peternak</h4>
              <div class="space-y-3">
                <div class="text-gray-700">
                  <p class="font-semibold text-emerald-700">Kelompok Tani Ternak "Sumber Rejeki" Balikpapan</p>
                  <p>Lokasi: Kariangau, Balikpapan Barat</p>
                  <p>Kontak Ketua: Pak Haji Ahmad - WA 0813-4444-5555</p>
                  <p>Anggota: 25 peternak kambing (PE, Boer, Kacang), total populasi 300+ ekor</p>
                  <p>Kegiatan: (1) Pertemuan rutin bulanan (sharing pengalaman, kendala, solusi), (2) Pelatihan berkala dari Dinas Peternakan (manajemen reproduksi, pakan, kesehatan), (3) Pengadaan input bersama (beli pakan, obat, bibit patungan = harga lebih murah 10-15%), (4) Pemasaran kolektif (nego kontrak dengan jasa aqiqah/restoran, bargaining power lebih kuat), (5) Gotong royong bantu anggota sakit/kesulitan (solidaritas sosial). Terbuka untuk anggota baru! Iuran Rp 50.000/tahun (sangat worth it untuk networking dan ilmu!)</p>
                </div>
                <div class="text-gray-700 mt-3">
                  <p class="font-semibold text-emerald-700">Grup WhatsApp "Peternak Kambing Kaltim"</p>
                  <p>Admin: Pak Budi - WA 0822-9999-1111</p>
                  <p>Anggota: 150+ peternak kambing dari Balikpapan, Samarinda, Penajam, Kutai</p>
                  <p>Konten: Tanya jawab masalah penyakit kambing, share harga pasar kambing update harian, info lelang/pasar hewan, jual-beli kambing antar anggota (bibit/bakalan/afkir), share video/artikel budidaya kambing. Grup sangat aktif dan helpful! Request join ke admin dengan intro (nama, lokasi, jumlah kambing)</p>
                </div>
                <div class="text-gray-700 mt-3">
                  <p class="font-semibold text-emerald-700">Facebook Group "Kambing Etawa & Boer Indonesia"</p>
                  <p>Link: facebook.com/groups/kambingetawaindonesia (grup publik 80.000+ anggota)</p>
                  <p>Konten: Forum diskusi nasional tentang kambing PE dan Boer. Banyak breeder berpengalaman 10-20 tahun. Topik: genetika kambing, program breeding (seleksi bibit unggul), manajemen reproduksi (sinkronisasi birahi, IB), pakan fermentasi, penyakit, pemasaran susu kambing etawa. Cocok untuk peternak serius yang mau improve kualitas kambing dan profit usaha. Ada sub-grup regional Kalimantan</p>
                </div>
              </div>
            </div>
          </div>

          <!-- B. Glosarium -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">B. Glosarium (Istilah Penting Peternakan Kambing)</h3>
            
            <div class="bg-gray-50 rounded-lg p-6">
              <div class="space-y-3">
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">ADG (Average Daily Gain):</strong> Pertambahan bobot badan harian rata-rata (gram/hari). Kambing Boer silangan ADG 180-250 g/hari (tumbuh cepat!), Kacang 50-80 g/hari (lambat). ADG tinggi = efisien pakan + cepat panen</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Bakalan:</strong> Kambing muda (lepas sapih 3-6 bulan, bobot 15-25 kg) yang dibeli untuk digemukkan (fattening) dan dijual saat mencapai bobot pasar 30-40 kg (umur 10-12 bulan). Usaha penggemukan fokus pada bakalan</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Bibit/Breeding Stock:</strong> Kambing unggul (pejantan atau betina produktif) yang dipelihara untuk reproduksi menghasilkan keturunan. Bibit lebih mahal 2-3x dari bakalan karena genetik superior. Investasi jangka panjang</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Bloat/Kembung:</strong> Kondisi emergensi akumulasi gas berlebihan di rumen yang tidak bisa dikeluarkan. Perut kiri mengembang keras, nafas sesak, bisa mati dalam 2-6 jam jika tidak ditangani! Pertolongan: jalan-jalan + minyak kelapa + trocar (tusuk rumen)</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Body Condition Score (BCS):</strong> Skor kondisi tubuh kambing skala 1-5 (1=sangat kurus tulang kelihatan, 3=ideal daging cukup tulang teraba, 5=obesitas sangat gemuk). BCS ideal kambing produktif 3-3,5. BCS terlalu rendah/tinggi = masalah reproduksi</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Cempe/Kid:</strong> Anak kambing dari lahir hingga disapih (0-3 bulan). Cempe sangat rentan penyakit (sistem imun belum sempurna), butuh kolostrum 1-2 jam pertama setelah lahir untuk passive immunity. Mortality rate cempe 10-20%</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Dystocia:</strong> Kesulitan melahirkan (kelahiran sulit/macet). Penyebab: fetus terlalu besar, pelvis induk sempit, presentasi abnormal (posisi salah). Butuh bantuan manual atau operasi caesar. Angka dystocia kambing 5-10% (lebih rendah dari sapi 10-15%)</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Estrus/Birahi:</strong> Periode kambing betina siap kawin dan berovulasi (sel telur keluar). Siklus 18-21 hari, lama birahi 24-48 jam. Tanda: vulva bengkak merah, gelisah mengembek, ekor mengibar (flagging), standing heat (diam saat didekati pejantan)</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">FCR (Feed Conversion Ratio):</strong> Rasio konversi pakan = kg pakan untuk menghasilkan 1 kg pertambahan bobot. Kambing FCR 4-5 (butuh 4-5 kg pakan untuk naik 1 kg BB). Semakin rendah FCR semakin efisien (hemat biaya pakan!). Ayam FCR 1,6-1,8, sapi 6-8</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Gestasi/Kebuntingan:</strong> Masa bunting kambing dari konsepsi (pembuahan) hingga melahirkan. Lama gestasi 144-156 hari (rata-rata 150 hari = 5 bulan). Lebih pendek dari sapi (9 bulan) dan domba (5 bulan). Induk bunting butuh nutrisi extra terutama trimester 3</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Karkas:</strong> Berat daging kambing setelah dipotong dan dibuang kepala, kaki, kulit, jeroan. Persentase karkas = (berat karkas / berat hidup) × 100%. Kambing Kacang 40-45%, PE 45-48%, Boer 48-52%. Semakin tinggi % karkas semakin menguntungkan (daging lebih banyak)</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Kolostrum (Liquid Gold):</strong> Susu pertama induk 1-3 hari setelah melahir (warna kuning kental, beda dari susu biasa putih encer). Mengandung antibodi (IgG) tinggi untuk passive immunity cempe, nutrisi padat, laksatif. WAJIB minum 1-2 jam pertama setelah lahir! Tanpa kolostrum = FPT (Failure of Passive Transfer) = cempe mati 50-80%</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Laktasi:</strong> Periode produksi susu induk setelah melahirkan. Kambing PE laktasi 3-4 bulan (180-240 hari), produksi puncak 1-2 bulan setelah lahir (2-5 liter/hari untuk PE super), lalu turun bertahap. Laktasi kedua dan ketiga lebih tinggi produksi dari laktasi pertama (induk dara)</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Rumen:</strong> Lambung pertama dan terbesar kambing (kapasitas 3-6 liter pada dewasa). Tempat fermentasi pakan berserat oleh mikroba (bakteri, protozoa, fungi). Kambing adalah ruminansia (punya 4 lambung: rumen, reticulum, omasum, abomasum). Rumen sehat = pH 6-7, mikroba optimal = digest pakan maksimal</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Standing Heat:</strong> Fase puncak birahi kambing betina saat ovulasi akan terjadi (12-24 jam setelah birahi mulai). Betina berdiri diam/tidak bergerak saat didekati atau di-mounting pejantan (acceptance behavior). Ini adalah waktu kawin OPTIMAL (conception rate tertinggi 80-90%)!</p>
                </div>
              </div>
            </div>
          </div>

          <!-- C. Referensi -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">C. Referensi dan Bacaan Lanjutan</h3>
            
            <div class="bg-gray-50 rounded-lg p-6">
              <div class="space-y-4">
                <div>
                  <p class="font-semibold text-emerald-700 mb-2">Jurnal Ilmiah:</p>
                  <ul class="ml-6 space-y-1 text-gray-700 text-sm">
                    <li>• Sodiq, A. & Abidin, Z. (2023). "Kambing Peranakan Etawa: Genetika, Reproduksi, dan Manajemen Laktasi". Jurnal Ilmu Ternak Tropika, Vol. 12(2), hal. 85-102</li>
                    <li>• Haryanto, B. et al. (2024). "Performa Pertumbuhan Kambing Boer Silangan pada Sistem Feedlot Intensif di Iklim Tropis". Jurnal Peternakan Indonesia, Vol. 26(1), hal. 45-58</li>
                    <li>• Widodo, E. (2023). "Prevalensi dan Pengendalian Haemonchus contortus (Cacing Pengisap Darah) pada Kambing di Indonesia". Jurnal Veteriner Indonesia, Vol. 18(3), hal. 210-225</li>
                  </ul>
                </div>

                <div>
                  <p class="font-semibold text-emerald-700 mb-2">Buku:</p>
                  <ul class="ml-6 space-y-1 text-gray-700 text-sm">
                    <li>• Mulyono, S. (2023). <em>"Beternak Kambing Potong dan Perah: Panduan Lengkap dari Hulu ke Hilir"</em>. Jakarta: Penebar Swadaya. 280 halaman. (Buku best-seller untuk peternak pemula hingga advanced, bahasa praktis mudah dipahami, banyak gambar/foto ilustrasi)</li>
                    <li>• Sodiq, A. & Abidin, Z. (2023). <em>"Kambing Peranakan Etawa: Pengembangan dan Prospek Agribisnis"</em>. Yogyakarta: Agromedia Pustaka. 320 halaman. (Fokus khusus kambing PE, mulai sejarah, genetika, breeding, produksi susu, pemasaran susu etawa premium)</li>
                    <li>• Williamson, G. & Payne, W.J.A. (2022). <em>"An Introduction to Animal Husbandry in the Tropics"</em> (Edisi ke-6, terjemahan Bahasa Indonesia). Malang: UB Press. 650 halaman. (Textbook klasik comprehensive tentang peternakan tropis termasuk kambing, cocok untuk mahasiswa dan peternak serius)</li>
                  </ul>
                </div>

                <div>
                  <p class="font-semibold text-emerald-700 mb-2">Website & Portal:</p>
                  <ul class="ml-6 space-y-1 text-gray-700 text-sm">
                    <li>• <strong>Cybex Pertanian Kementan RI:</strong> <a href="https://cybex.pertanian.go.id" class="text-emerald-600 hover:underline">cybex.pertanian.go.id</a> - Artikel lengkap tentang kambing: kandang, pakan, penyakit, reproduksi, ekonomi. Update rutin dari penyuluh pertanian seluruh Indonesia. GRATIS!</li>
                    <li>• <strong>Portal BPTP Kaltim:</strong> <a href="https://kaltim.litbang.pertanian.go.id" class="text-emerald-600 hover:underline">kaltim.litbang.pertanian.go.id</a> - Teknologi inovasi peternakan kambing spesifik untuk Kalimantan Timur (adaptasi iklim tropis basah, pakan lokal, dll)</li>
                    <li>• <strong>Goat Extension (Bahasa Inggris):</strong> <a href="https://extension.org/goat" class="text-emerald-600 hover:underline">extension.org</a> - Portal internasional tentang kambing dari Extension University (USA). Sangat lengkap: genetic, nutrition, reproduction, health, economics. Cocok untuk peternak advanced</li>
                  </ul>
                </div>

                <div>
                  <p class="font-semibold text-emerald-700 mb-2">Video YouTube (Channel Rekomendasi):</p>
                  <ul class="ml-6 space-y-1 text-gray-700 text-sm">
                    <li>• <strong>"Ternak Kambing Milenial"</strong> - Tutorial lengkap budidaya kambing PE dan Boer dari breeding, pakan fermentasi, penyakit, pemasaran. Update rutin 2-3 video/minggu. Bahasa Indonesia mudah dipahami, demonstrasi praktis di kandang</li>
                    <li>• <strong>"Pak Tani Digital"</strong> - Fokus pada ekonomi/bisnis peternakan kambing. Analisis usaha penggemukan vs pembibitan, strategi pemasaran Idul Adha, diversifikasi produk (susu, daging, pupuk). Cocok untuk entrepreneur</li>
                    <li>• <strong>"Kambing Etawa Nasional"</strong> - Spesialis kambing PE. Kontes kambing, profil breeder top, teknik seleksi bibit unggul, manajemen pemerahan susu, pengolahan susu etawa jadi produk olahan (yogurt, es krim, sabun susu kambing). Inspiratif!</li>
                  </ul>
                </div>

                <div>
                  <p class="font-semibold text-emerald-700 mb-2">Komunitas Online:</p>
                  <ul class="ml-6 space-y-1 text-gray-700 text-sm">
                    <li>• <strong>Facebook Group "Kambing Etawa & Boer Indonesia"</strong> - 80.000+ anggota. Forum diskusi tanya jawab penyakit, pakan, breeding, jual-beli bibit. Ada breeder berpengalaman 20+ tahun yang sering sharing ilmu. Sangat aktif!</li>
                    <li>• <strong>Grup WhatsApp "Peternak Kambing Kaltim"</strong> - 150+ peternak lokal Kalimantan Timur. Update harga pasar kambing harian, info pasar hewan, sharing pengalaman budidaya. Networking langsung dengan sesama peternak Balikpapan-Samarinda-Kutai</li>
                    <li>• <strong>Instagram @kambingindonesia</strong> - Akun inspirasi foto-foto kambing indah (show quality), info kontes kambing nasional, tips breeding. Konten visual menarik!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Penutup -->
        <section class="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-8 mb-8">
          <h3 class="text-2xl font-semibold text-emerald-900 mb-4">Kesimpulan</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Beternak kambing di Balikpapan memiliki prospek sangat menjanjikan dengan permintaan daging kambing untuk aqiqah, kurban, dan kuliner lokal (sate, gule, tongseng) yang terus meningkat sepanjang tahun. 
            Kunci sukses dalam usaha peternakan kambing adalah: <strong>(1) Manajemen kesehatan preventif</strong> - obat cacing RUTIN setiap 2-3 bulan (penyakit nomor 1 kambing!), vaksinasi Anthrax tahunan, sanitasi kandang harian untuk cegah scabies dan Pink Eye, 
            <strong>(2) Kandang panggung wajib</strong> dengan ventilasi 50% terbuka (atasi iklim panas lembap Balikpapan, cegah foot rot dan cacingan), 
            <strong>(3) Pakan berkualitas</strong> dengan komposisi 70% hijauan + 30% konsentrat (ampas tahu murah protein tinggi!), 
            <strong>(4) Manajemen reproduksi optimal</strong> - deteksi birahi akurat, kawin saat standing heat, perawatan induk bunting dengan nutrisi extra trimester 3, kolostrum WAJIB 1-2 jam pertama setelah lahir (liquid gold untuk imunitas cempe!), 
            <strong>(5) Strategi pemasaran cerdas</strong> - fokus pasar Idul Adha (harga naik 50-100%), kontrak jasa aqiqah untuk stabilitas income, diversifikasi produk (susu kambing PE premium Rp 25.000-35.000/liter, pupuk kotoran Rp 500-800/kg).
          </p>
          <p class="text-gray-700 leading-relaxed">
            Mulai dari skala kecil 5-10 ekor untuk belajar dinamika usaha (pilih kambing Kacang untuk pemula modal terbatas atau PE/Boer untuk target premium). 
            Manfaatkan pendampingan gratis dari Dinas Peternakan Balikpapan (penyuluhan, vaksinasi Anthrax gratis, bantuan bibit) dan bergabung dengan kelompok peternak lokal untuk networking dan sharing pengalaman. 
            Fokus pada <strong>3 pilar utama: kesehatan (obat cacing rutin + kandang panggung kering), nutrisi (pakan hijauan+konsentrat seimbang), dan reproduksi (kolostrum 1-2 jam pertama = hidup-mati cempe!)</strong>. 
            Dengan dedikasi, disiplin, dan continuous learning, usaha peternakan kambing bisa menjadi sumber penghasilan yang sangat menguntungkan (ROI 25-40%/tahun untuk pembibitan) dan berkelanjutan! 
            Selamat beternak, semoga sukses dan berkah! 🐐
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
