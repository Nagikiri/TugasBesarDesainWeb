<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import dombaImage from '@/assets/images/Domba.jpeg';

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
        :src="dombaImage" 
        alt="Ternak Domba"
        class="w-full h-full object-cover"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 p-8 md:p-12">
        <div class="max-w-6xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
            Panduan Lengkap Beternak Domba di Balikpapan
          </h1>
          <p class="text-gray-200 text-lg">
            Panduan praktis ternak domba pedaging untuk investasi jangka pendek yang menguntungkan
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
            Beternak domba di Balikpapan memiliki potensi yang sangat menjanjikan terutama menjelang hari raya Idul Adha. 
            Domba adalah ternak ruminansia yang cocok untuk investasi jangka pendek dengan timing yang tepat. Mirip dengan kambing 
            tetapi lebih jinak dan mudah dikelola. Dengan strategi penggemukan yang baik dan pemasaran yang tepat, beternak domba 
            bisa memberikan keuntungan 30-50% dalam waktu 3-4 bulan.
          </p>
        </section>

        <!-- I. Pengenalan Ternak Domba -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-200">
            I. Pengenalan Ternak Domba
          </h2>
          
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">A. Jenis-Jenis Domba Ternak</h3>
            
            <!-- Domba Ekor Tipis -->
            <div class="bg-emerald-50 rounded-lg p-6 mb-4">
              <h4 class="text-xl font-semibold text-emerald-900 mb-3">1. Domba Ekor Tipis (DET/Jawa)</h4>
              <p class="text-gray-700 mb-3">
                Domba lokal Indonesia yang paling umum dipelihara dan sangat cocok untuk iklim tropis Balikpapan.
              </p>
              <ul class="ml-6 mt-2 space-y-2">
                <li class="text-gray-700"><strong class="text-emerald-700">Ciri Fisik:</strong> Tubuh kecil-sedang (30-40 kg), ekor tipis, bulu putih/coklat/hitam, tidak bertanduk atau tanduk kecil, postur ramping dan lincah</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Keunggulan:</strong> Sangat tahan panas dan lembap (ideal untuk Balikpapan), tahan penyakit, tidak rewel pakan (bisa makan hijauan lokal), jinak dan mudah dikelola, harga bibit murah (Rp 1,5-2,5 juta/ekor), cocok untuk pemula</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Kelemahan:</strong> Ukuran relatif kecil (30-40 kg), pertumbuhan lebih lambat dari domba silangan, harga jual lebih rendah (Rp 2,5-3,5 juta menjelang Idul Adha), kurang diminati untuk kurban kolektif</li>
              </ul>
            </div>

            <!-- Domba Garut -->
            <div class="bg-emerald-50 rounded-lg p-6 mb-4">
              <h4 class="text-xl font-semibold text-emerald-900 mb-3">2. Domba Garut</h4>
              <p class="text-gray-700 mb-3">
                Domba lokal unggul dari Garut, Jawa Barat dengan ukuran tubuh besar, cocok untuk kurban kolektif dan kontes domba.
              </p>
              <ul class="ml-6 mt-2 space-y-2">
                <li class="text-gray-700"><strong class="text-emerald-700">Ciri Fisik:</strong> Tubuh sangat besar (50-90 kg jantan, 40-60 kg betina), tanduk besar melingkar (jantan), ekor gemuk berisi lemak, bulu tebal putih/coklat/belang, postur tegap berotot</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Keunggulan:</strong> Ukuran sangat besar ideal untuk kurban kolektif 7 orang, pertumbuhan cepat dengan pakan berkualitas, daging berkualitas tinggi (empuk dan tidak bau), harga jual premium (Rp 5-10 juta menjelang Idul Adha), prestisius untuk kontes/lomba domba</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Kelemahan:</strong> Harga bibit sangat mahal (Rp 4-10 juta/ekor), butuh pakan konsentrat banyak (biaya tinggi), sensitif terhadap panas dan stress (perlu kandang nyaman), tidak cocok untuk pemula karena butuh perawatan ekstra</li>
              </ul>
            </div>

            <!-- Domba Merino Silang -->
            <div class="bg-emerald-50 rounded-lg p-6 mb-4">
              <h4 class="text-xl font-semibold text-emerald-900 mb-3">3. Domba Merino Silang/Komposit</h4>
              <p class="text-gray-700 mb-3">
                Domba hasil persilangan antara domba impor (Merino, Dorper) dengan domba lokal untuk mendapatkan ukuran besar dengan adaptasi tropis yang baik.
              </p>
              <ul class="ml-6 mt-2 space-y-2">
                <li class="text-gray-700"><strong class="text-emerald-700">Ciri Fisik:</strong> Tubuh sedang-besar (40-65 kg), postur kompak berotot, bulu lebih tebal dari lokal tapi tidak sepadat Merino murni, warna bervariasi (putih, coklat, belang), tidak bertanduk atau tanduk kecil</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Keunggulan:</strong> Pertumbuhan sangat cepat (ADG 120-180 gram/hari dengan pakan optimal), konversi pakan efisien (FCR 6-8, lebih baik dari lokal), kualitas daging sangat baik (marbling bagus, empuk), adaptasi cukup baik di tropis, harga jual menarik (Rp 3-5 juta menjelang Idul Adha)</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Kelemahan:</strong> Harga bibit cukup mahal (Rp 2,5-4 juta/ekor), butuh pakan berkualitas tinggi (konsentrat protein 14-16%), perlu perhatian ekstra saat cuaca sangat panas, tidak se-tahan domba lokal murni</li>
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
                <li class="text-gray-700"><strong class="text-emerald-700">Ukuran per ekor:</strong> Domba dewasa butuh 1-1,5 m² per ekor. Domba muda/bakalan 0,8-1 m². Jangan terlalu padat karena domba mudah stress dan berebut pakan</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Tipe Kandang:</strong> Kandang panggung (lantai bambu/kayu dengan celah 2 cm, tinggi 1-1,5 m dari tanah) paling ideal - higienis, kotoran jatuh ke bawah, domba tetap kering. Alternatif: kandang postal dengan alas jerami tebal 15-20 cm (ganti setiap minggu)</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Ventilasi:</strong> Atap tinggi 3-4 meter dengan ventilasi baik (bukaan 30-40% dari luas dinding). Di Balikpapan yang panas, ventilasi sangat krusial! Tanam pohon di sekitar kandang (jarak 5 meter) untuk teduh alami</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Air minum:</strong> Domba butuh 2-5 liter/hari per ekor (lebih banyak saat panas). Sediakan tempat minum bersih yang selalu terisi. Ganti air 2x/hari (pagi & sore)</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Sanitasi:</strong> Buang kotoran setiap hari (kandang panggung) atau ganti litter setiap minggu (kandang postal). Jaga lantai tetap kering - lantai basah = sarang penyakit kuku (foot rot). Potong kuku domba rutin 2-3 bulan sekali</li>
              </ul>
            </div>
          </div>

          <!-- B. Pakan dan Nutrisi -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">B. Pakan dan Nutrisi</h3>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Kebutuhan Pakan Berdasarkan Fase</h4>
              
              <div class="overflow-x-auto mb-6">
                <table class="w-full text-sm">
                  <thead>
                    <tr class="bg-emerald-100 text-emerald-800">
                      <th class="p-3 text-left">Fase</th>
                      <th class="p-3 text-left">Hijauan/Hari</th>
                      <th class="p-3 text-left">Konsentrat/Hari</th>
                      <th class="p-3 text-left">Catatan</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y">
                    <tr class="bg-white">
                      <td class="p-3">Cempe (0-4 bulan)</td>
                      <td class="p-3">0,5-1 kg</td>
                      <td class="p-3">0,2-0,3 kg + susu</td>
                      <td class="p-3">Susu induk 0,5-1 liter/hari hingga umur 3 bulan</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-3">Lepas Sapih (4-8 bulan)</td>
                      <td class="p-3">1,5-3 kg</td>
                      <td class="p-3">0,3-0,5 kg</td>
                      <td class="p-3">Fokus pertumbuhan kerangka tubuh</td>
                    </tr>
                    <tr class="bg-white">
                      <td class="p-3">Penggemukan</td>
                      <td class="p-3">3-5 kg</td>
                      <td class="p-3">0,5-1 kg</td>
                      <td class="p-3">Periode 3-4 bulan untuk capai bobot jual optimal</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-3">Induk Bunting</td>
                      <td class="p-3">3-4 kg</td>
                      <td class="p-3">0,5-0,7 kg</td>
                      <td class="p-3">Tambah 0,2 kg konsentrat di bulan terakhir kebuntingan</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Pakan Alternatif Lokal Balikpapan</h4>
              <ul class="space-y-3">
                <li class="text-gray-700"><strong class="text-emerald-700">Hijauan lokal (70-80% dari total pakan):</strong> Rumput gajah (protein 8-10%, sangat produktif), rumput lapangan/liar, rumput setaria. Legum: daun lamtoro (protein 20-25%!), gamal, kaliandra, turi. Limbah pertanian: jerami padi fermentasi, daun singkong, daun pisang. Kebutuhan: 3-5 kg hijauan segar per ekor per hari (sekitar 10% dari bobot badan)</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Konsentrat (20-30% untuk penggemukan):</strong> Pakan komersial domba (protein 14-16%) atau racikan sendiri: dedak padi 40%, jagung giling 30%, bungkil sawit 20%, tepung ikan 5%, mineral 5%. Ampas tahu fermentasi sebagai sumber protein murah (bisa gantikan 30% konsentrat, hemat biaya!). Kebutuhan: 0,5-1 kg konsentrat per ekor per hari untuk penggemukan intensif</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Fermentasi jerami padi:</strong> Cacah jerami, campur molase 2-3% dan probiotik (EM4), masukkan karung tertutup rapat selama 14-21 hari. Hasilnya lebih mudah dicerna, nutrisi meningkat, tahan lama hingga 6 bulan. Hemat biaya pakan 20-30%!</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Fermentasi ampas tahu:</strong> Campur ampas tahu dengan dedak 10%, probiotik (EM4) 0,5%, inkubasi 3-5 hari. Protein meningkat dari 15% jadi 20-25%, bau hilang, domba lebih suka. Bisa gantikan 30% konsentrat!</li>
              </ul>
            </div>
          </div>

          <!-- C. Reproduksi dan Pembibitan -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">C. Reproduksi dan Pembibitan</h3>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Masa Birahi dan Perkawinan</h4>
              <ul class="space-y-3">
                <li class="text-gray-700"><strong class="text-emerald-700">Siklus birahi:</strong> Domba betina birahi setiap 17 hari sekali (rentang 14-21 hari). Berbeda dengan kambing yang 21 hari. Durasi birahi 24-36 jam</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Tanda-tanda birahi:</strong> Gelisah dan sering mengembik, ekor bergoyang-goyang (flagging), vulva bengkak dan kemerahan, nafsu makan turun sedikit, mau didekati pejantan dan posisi siap kawin</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Waktu optimal kawin:</strong> 6-12 jam setelah tanda birahi pertama muncul. Kawinkan 2 kali dengan jarak 12 jam untuk tingkat keberhasilan maksimal (konsepsi 80-90%)</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Metode perkawinan:</strong> Kawin alam dengan pejantan unggul (rasio 1 pejantan : 20-30 betina) atau Inseminasi Buatan (IB) untuk genetik terbaik dari pejantan elit (biaya Rp 50.000-100.000/IB di Puskeswan)</li>
              </ul>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Manajemen Induk Bunting</h4>
              <ul class="space-y-3">
                <li class="text-gray-700"><strong class="text-emerald-700">Masa kebuntingan:</strong> Sekitar 145-155 hari (rata-rata 150 hari atau ± 5 bulan). Lebih pendek 5 hari dari kambing</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Trimester 1 (bulan 1-3):</strong> Berikan pakan seimbang hijauan + konsentrat standar. Hindari stress (kebisingan, dipukul, dipaksa lari). Pisahkan dari domba agresif yang suka tanduk-tandukan</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Trimester 2 (bulan 4):</strong> Pakan normal, boleh dicampur dengan domba lain yang tenang. Cek kondisi tubuh - jangan terlalu kurus atau gemuk</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Trimester 3 (bulan 5 - menjelang lahir):</strong> Tingkatkan konsentrat +0,2 kg/hari untuk perkembangan janin optimal. Siapkan kandang melahirkan khusus yang bersih, kering, tenang, dan hangat (alas jerami tebal). Awasi 24 jam terutama malam hari. Tanda mau lahir: gelisah, sering rebahan-bangun, vulva bengkak, keluar lendir</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Vaksinasi & kesehatan:</strong> Vaksin Anthrax sebelum dikawinkan (2-4 minggu sebelum). Obat cacing umur 3-4 bulan kebuntingan dengan dosis aman untuk bunting</li>
              </ul>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Perawatan Anak Domba (Cempe)</h4>
              <ul class="space-y-3">
                <li class="text-gray-700"><strong class="text-emerald-700">Kolostrum (susu pertama):</strong> Sangat krusial! Berikan kolostrum dalam 1 jam pertama setelah lahir. Kolostrum mengandung antibodi (immunoglobulin) vital untuk imunitas cempe 3 bulan pertama. Tanpa kolostrum = cempe mudah sakit dan mati</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Pemberian susu:</strong> 0,5-1 liter/hari selama 3 bulan pertama dari induk (susui langsung). Jika induk mati/susu kurang, beri susu kambing/sapi/susu bubuk khusus ruminansia sebagai pengganti. Jangan susu formula bayi - komposisi berbeda!</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Starter pakan padat:</strong> Mulai umur 2 minggu berikan rumput muda yang lembut dan konsentrat starter halus (protein 16-18%). Rumen domba mulai berkembang di usia ini - penting untuk transisi dari susu ke pakan padat</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Penyapihan:</strong> Umur 3-4 bulan atau saat bobot minimal 15 kg. Penyapihan bertahap (kurangi susu selama 1-2 minggu) untuk mengurangi stress. Cempe siap mandiri makan hijauan dan konsentrat</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Vaksinasi awal cempe:</strong> Umur 3 bulan: Vaksin Anthrax pertama. Umur 4 bulan: Obat cacing pertama (Albendazole/Ivermectin). Umur 6 bulan: Vaksin Anthrax booster (ulangan)</li>
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
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">A. Penyakit Umum pada Domba</h3>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Cacingan (Parasit Internal)</h4>
              <p class="text-gray-700 mb-3">Penyakit paling umum pada domba, disebabkan cacing nematoda (cacing bulat), trematoda (cacing hati), dan cestoda (cacing pita)</p>
              <ul class="space-y-3">
                <li class="text-gray-700"><strong class="text-emerald-700">Gejala:</strong> Domba kurus progresif meski makan banyak, bulu kusam dan mudah rontok, diare kronis (kadang berdarah), mata pucat (anemia), nafsu makan turun, pertumbuhan sangat lambat, perut membesar (ascites), domba lemah dan mudah berbaring</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Penanganan:</strong> Obat cacing Albendazole (dosis 5-10 mg/kg bobot badan) atau Ivermectin (dosis 0,2 mg/kg). Berikan sesuai petunjuk, jangan overdosis. Rutin setiap 3 bulan untuk pencegahan. Cacing hati butuh obat khusus Triclabendazole</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Pencegahan:</strong> Jaga kandang kering (cacing berkembang di tempat lembab), rotasi penggembalaan (jangan di tempat yang sama terus), potong rumput pendek (larva cacing di ujung rumput tinggi), obat cacing rutin 3 bulan sekali, pisahkan domba sakit dari yang sehat</li>
              </ul>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Kembung (Bloat/Timpani)</h4>
              <p class="text-gray-700 mb-3">Penumpukan gas berlebihan di rumen akibat fermentasi pakan yang tidak terkontrol, sangat darurat!</p>
              <ul class="space-y-3">
                <li class="text-gray-700"><strong class="text-emerald-700">Gejala:</strong> Perut kiri membesar sangat cepat (seperti balon), gelisah dan menendang perut sendiri, napas sesak dan cepat, mata melotot, mulut berbusa, domba tidak mau berbaring, jika tidak ditangani 2-4 jam bisa mati (rumen menekan paru-paru dan jantung)</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Penanganan darurat:</strong> Jalan-jalan paksa 15-30 menit (gerakan bantu keluarkan gas), pijat perut bagian kiri dengan gerakan memutar, cekok minyak kelapa/minyak sayur 100-200 ml lewat mulut (pecah gelembung gas), masukkan selang plastik ke mulut sampai rumen (gas keluar lewat selang). Jika sangat parah: trokar rumen (tusuk rumen dengan jarum khusus) - harus dokter hewan!</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Pencegahan:</strong> Jangan beri legum segar (lamtoro, gamal) berlebihan atau dalam kondisi basah hujan/embun (legum basah = bloat tinggi!). Campur legum dengan rumput kering 50:50. Berikan hijauan bertahap jangan langsung kenyang. Hindari perubahan pakan mendadak. Sediakan baking soda/kapur bebas (domba jilat sendiri untuk buffer pH rumen)</li>
              </ul>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Scabies/Kudis (Parasit Eksternal)</h4>
              <p class="text-gray-700 mb-3">Penyakit kulit menular sangat cepat disebabkan tungau Sarcoptes scabiei, sangat gatal dan mengganggu produktivitas</p>
              <ul class="space-y-3">
                <li class="text-gray-700"><strong class="text-emerald-700">Gejala:</strong> Gatal hebat (domba garuk-garuk terus di kandang/pohon), bulu rontok patch demi patch (biasanya mulai dari telinga, muka, leher), kulit menebal dengan kerak tebal keputihan/kekuningan, luka berdarah karena garukan, domba kurus karena stress dan nafsu makan turun, menular cepat ke domba lain</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Penanganan:</strong> Mandi sabun belerang (sulfur soap) 2x/minggu selama 3-4 minggu berturut-turut. Suntik Ivermectin 0,2 mg/kg bobot badan (repeat 2 minggu kemudian). Semprot kandang dengan acaricide (obat anti tungau). Isolasi domba sakit sampai sembuh total</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Pencegahan:</strong> Karantina domba baru 2-3 minggu sebelum digabung dengan domba lain. Mandikan domba sehat 1 bulan sekali dengan sabun antiseptik. Semprot kandang rutin dengan desinfektan. Jaga kebersihan kandang - tungau berkembang di tempat kotor. Potong dan bakar bulu rontok (jangan biarkan di kandang)</li>
              </ul>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Foot Rot (Busuk Kuku)</h4>
              <p class="text-gray-700 mb-3">Infeksi bakteri Fusobacterium necrophorum pada kuku dan jaringan sekitarnya, sangat menyakitkan dan bikin pincang</p>
              <ul class="space-y-3">
                <li class="text-gray-700"><strong class="text-emerald-700">Gejala:</strong> Pincang (domba tidak mau jalan, suka berbaring terus), kuku bengkak kemerahan dan terasa panas, bau busuk sangat menyengat dari kuku, nanah keluar dari celah kuku, kulit di atas kuku membusuk, nafsu makan turun drastis (karena sakit untuk jalan ke tempat pakan), bobot turun cepat</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Penanganan:</strong> Bersihkan kuku dengan air mengalir, buang jaringan mati dan busuk dengan pisau bersih (hati-hati jangan potong bagian sehat). Rendam kuku dalam larutan formalin 5-10% atau betadine selama 5-10 menit. Oleskan salep antibiotik (Terramycin, Oxytetracycline). Suntik antibiotik Penicillin/Oxytetracycline jika infeksi parah. Isolasi di kandang kering sampai sembuh</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Pencegahan:</strong> Potong kuku rutin 2-3 bulan sekali (kuku panjang mudah retak dan kotor masuk). Jaga lantai kandang kering - lantai basah = sarang bakteri foot rot. Sediakan foot bath (kolam rendah berisi desinfektan) di pintu masuk kandang - domba lewati setelah dari luar. Jangan biarkan domba berdiri di lumpur/genangan air lama</li>
              </ul>
            </div>
          </div>

          <!-- B. Program Vaksinasi -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">B. Program Vaksinasi</h3>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Program Vaksinasi Domba</h4>
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
                      <td class="p-3">3 bulan</td>
                      <td class="p-3">Anthrax</td>
                      <td class="p-3">Antraks</td>
                      <td class="p-3">Suntik subkutan</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-3">4 bulan</td>
                      <td class="p-3">Obat cacing pertama</td>
                      <td class="p-3">Cacingan</td>
                      <td class="p-3">Oral (cekok)</td>
                    </tr>
                    <tr class="bg-white">
                      <td class="p-3">6 bulan</td>
                      <td class="p-3">Anthrax booster</td>
                      <td class="p-3">Antraks</td>
                      <td class="p-3">Suntik subkutan</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-3">Setiap 6-12 bulan</td>
                      <td class="p-3">Anthrax ulangan</td>
                      <td class="p-3">Antraks</td>
                      <td class="p-3">Suntik subkutan</td>
                    </tr>
                    <tr class="bg-white">
                      <td class="p-3">Setiap 3 bulan</td>
                      <td class="p-3">Obat cacing rutin</td>
                      <td class="p-3">Cacingan</td>
                      <td class="p-3">Oral (cekok)</td>
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
                <li class="text-gray-700"><strong class="text-emerald-700">Puasa sebelum potong:</strong> 12-24 jam sebelum pemotongan, domba dipuasakan (hanya air). Tujuan: kosongkan saluran pencernaan agar tidak kotor saat dikeluarkan jeroan, mengurangi kontaminasi bakteri pada daging, daging lebih bersih dan tahan lama</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Sortasi domba siap potong:</strong> Bobot ideal 35-50 kg untuk domba lokal, 45-70 kg untuk domba silangan/Garut (tergantung jenis). Domba sehat, tidak sakit, tidak cacat fisik, tidak bunting (untuk betina). Domba sakit/lemah dipisahkan dan tidak boleh dijual untuk konsumsi</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Transportasi ke RPH:</strong> Gunakan kendaraan pick-up dengan kandang transportasi, maksimal 10-15 ekor/trip (jangan terlalu penuh). Transportasi malam/subuh hari (sejuk, stress minimal). Stress saat transportasi = daging keras (pH tinggi), kualitas turun, harga jual rendah</li>
              </ul>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Standar Kualitas Karkas</h4>
              <ul class="space-y-3">
                <li class="text-gray-700"><strong class="text-emerald-700">Grade A (Premium):</strong> Daging merah cerah segar, lemak putih bersih, marbling (lemak dalam daging) baik, tidak ada memar/luka/patah tulang, bau khas daging segar (tidak bau pesing/amis). Untuk pasar premium, restoran, hotel</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Grade B (Standar):</strong> Daging merah segar, lemak putih, sedikit cacat minor (memar kecil), marbling cukup. Untuk pasar tradisional, warung makan, sate/gule</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Grade C (Reject):</strong> Daging gelap kecoklatan (stress/sakit), lemak kekuningan, memar banyak, bau tidak normal. Untuk olahan (bakso, sosis) atau dijual murah ke pasar basah</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Rendemen Karkas:</strong> Bobot hidup 40 kg → Karkas 18-20 kg (rendemen 45-50%). Sisanya: kulit 8-10%, kepala+kaki 8%, jeroan 12-15%, darah+bulu 8-10%. Rendemen domba lebih rendah dari kambing karena bulu lebih tebal dan lemak subkutan lebih banyak</li>
              </ul>
            </div>
          </div>

          <!-- B. Pemasaran dan Ekonomi -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">B. Pemasaran dan Ekonomi</h3>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Saluran Pemasaran di Balikpapan</h4>
              <ul class="space-y-3">
                <li class="text-gray-700"><strong class="text-emerald-700">Pasar Hewan Menjelang Idul Adha:</strong> Target utama! Jual 1-2 minggu sebelum Idul Adha saat harga puncak. Domba lokal DET Rp 2,5-3,5 juta/ekor, domba silangan Rp 3,5-5 juta/ekor, domba Garut premium Rp 5-10 juta/ekor. Volume transaksi sangat besar, cash langsung</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Pre-Order/Indent (Sistem DP):</strong> Tawarkan domba 2-3 bulan sebelum Idul Adha dengan sistem DP 30-50%. Konsumen bisa lihat domba sejak kecil, memonitor pertumbuhan. Keuntungan: cash flow lebih baik (dapat modal di awal), konsumen puas (domba sesuai harapan), harga lebih tinggi (karena custom)</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Masjid/Pengajian/Komunitas:</strong> Tawarkan paket kurban kolektif (1 domba untuk 1 orang atau 1 keluarga). Potensi order banyak sekaligus dari jamaah masjid. Bangun relasi dengan takmir/DKM masjid. Bisa repeat order setiap tahun</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Online Marketing:</strong> Promosi di Facebook, Instagram, WhatsApp Group dengan foto/video progress penggemukan. Show testimoni pelanggan tahun lalu. Live streaming kondisi domba untuk build trust. Sistem pre-order online dengan DP transfer</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Aqiqah/Syukuran/Walimah:</strong> Pasar sepanjang tahun (tidak musiman seperti Idul Adha). Domba aqiqah biasanya 2 ekor (untuk anak laki-laki) atau 1 ekor (anak perempuan). Harga stabil Rp 2-3 juta/ekor. Jangan fokus hanya satu musim - diversifikasi!</li>
              </ul>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Pemanfaatan Limbah</h4>
              <ul class="space-y-3">
                <li class="text-gray-700"><strong class="text-emerald-700">Kotoran domba (sheep manure):</strong> Pupuk organik berkualitas sangat baik (N 1,5-2%, P 1,2-1,5%, K 1,0-1,2%). Jual Rp 500-800/kg kering atau Rp 200.000-300.000/pickup basah. Permintaan tinggi dari petani sayur (cabai, tomat, terong), petani buah, petani hias. Atau fermentasi dengan EM4 → jual Rp 1.000-1.500/kg (margin 80-100%!)</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Bulu domba (wool/fleece):</strong> Bulu domba garut/merino bisa dijual! Dicukur 2x/tahun (sebelum musim hujan). Harga Rp 8.000-15.000/kg untuk bulu berkualitas (bersih, tidak kusut). Pasar: industri karpet, selimut, benang rajut, kerajinan felt. 1 domba dewasa = 2-4 kg bulu/tahun. Domba lokal DET bulunya pendek kurang ekonomis</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Kulit domba:</strong> Kulit domba untuk jaket kulit, tas, sepatu, kerajinan. Jual kulit mentah Rp 80.000-150.000/lembar ke pengrajin kulit. Atau proses sendiri jadi kerajinan (margin lebih tinggi tapi butuh skill)</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Jeroan dan organ:</strong> Hati, jantung, paru-paru, usus domba sangat laku! Jual terpisah Rp 50.000-80.000/kg. Pasar: sate jeroan, gulai jeroan, soto babat. Kepala domba utuh jual Rp 80.000-150.000 untuk sup kepala domba (spesial Timur Tengah/India)</li>
                <li class="text-gray-700"><strong class="text-emerald-700">Domba afkir (culled sheep):</strong> Domba induk tua/tidak produktif (umur >7 tahun) atau pejantan tua masih bisa dijual untuk daging. Harga lebih murah Rp 1,5-2,5 juta/ekor. Pasar: gule kambing, sate, rendang, empal. Daging lebih alot tapi rasa lebih strong (disukai untuk masakan berbumbu kuat)</li>
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
                  <p>Layanan: Penyuluhan domba, bantuan bibit domba unggul, vaksinasi Anthrax gratis, inseminasi buatan (IB), perizinan usaha peternakan domba</p>
                </div>
                <div class="text-gray-700">
                  <p class="font-semibold text-emerald-700">UPT Puskeswan (Pusat Kesehatan Hewan) Balikpapan</p>
                  <p>Alamat: Jl. MT Haryono, Sepinggan</p>
                  <p>Telepon: (0542) 761234</p>
                  <p>Layanan: Pemeriksaan kesehatan domba gratis, vaksinasi Anthrax, obat cacing, konsultasi penyakit domba, penanganan wabah, bedah minor</p>
                </div>
                <div class="text-gray-700">
                  <p class="font-semibold text-emerald-700">Balai Karantina Pertanian Kelas II Balikpapan</p>
                  <p>Alamat: Jl. Soekarno Hatta KM 3, Sepinggan Baru</p>
                  <p>Telepon: (0542) 8731144</p>
                  <p>Layanan: Sertifikat kesehatan domba untuk perdagangan antar daerah/pulau, inspeksi bibit domba impor dari luar Kaltim</p>
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
                  <p>Produk: Konsentrat domba/kambing, jagung, dedak, bungkil sawit, mineral, vitamin, obat cacing (Albendazole, Ivermectin), probiotik (EM4)</p>
                </div>
                <div class="text-gray-700">
                  <p class="font-semibold text-emerald-700">CV Mitra Peternak Sejahtera</p>
                  <p>Alamat: Jl. MT Haryono RT 35, Sepinggan</p>
                  <p>Telepon: 0812-5xxx-xxxx</p>
                  <p>Produk: Bibit domba Garut/Merino silang, domba bakalan siap gemuk, pakan komplit, vaksin Anthrax, alat kandang</p>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Pasar & Pembeli</h4>
              <div class="space-y-3">
                <div class="text-gray-700">
                  <p class="font-semibold text-emerald-700">Pasar Hewan Balikpapan</p>
                  <p>Alamat: Jl. Soekarno Hatta KM 8, Kariangau</p>
                  <p>Operasional: Ramai menjelang Idul Adha (2 bulan sebelum), sepi di bulan lain</p>
                  <p>Info: Tempat jual-beli domba/kambing terbesar di Balikpapan. Harga fluktuatif tergantung supply-demand</p>
                </div>
                <div class="text-gray-700">
                  <p class="font-semibold text-emerald-700">Pengepul Domba Pak Haji Usman</p>
                  <p>Telepon: 0821-7xxx-xxxx</p>
                  <p>Layanan: Beli domba hidup partai besar (minimal 10 ekor), ambil di lokasi peternak, pembayaran tunai/transfer</p>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Kelompok Tani & Komunitas</h4>
              <div class="space-y-3">
                <div class="text-gray-700">
                  <p class="font-semibold text-emerald-700">Kelompok Peternak Domba Kalimantan Timur</p>
                  <p>Kontak Ketua: Bapak Suryadi - 0813-3xxx-xxxx</p>
                  <p>Kegiatan: Pertemuan rutin bulanan, pelatihan manajemen domba, kerjasama pembelian pakan patungan (harga grosir lebih murah), pemasaran bersama, sharing knowledge dan problem solving</p>
                </div>
                <div class="text-gray-700">
                  <p class="font-semibold text-emerald-700">Forum Peternak Ruminansia Balikpapan</p>
                  <p>Kontak: Ibu Siti Aminah - 0822-5xxx-xxxx</p>
                  <p>Kegiatan: Advokasi harga domba/kambing yang adil, lobby pemerintah untuk bantuan vaksin/bibit/pakan subsidi, kunjungan studi banding ke farm domba sukses (Jawa Barat, Jawa Tengah)</p>
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
                  <p><strong class="text-emerald-700">ADG (Average Daily Gain):</strong> Pertambahan bobot badan harian rata-rata dalam gram/hari. Domba penggemukan target ADG 100-180 gram/hari</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">FCR (Feed Conversion Ratio):</strong> Rasio konversi pakan = kg pakan untuk menghasilkan 1 kg pertambahan bobot. Domba FCR 6-9 (lebih tinggi dari ayam tapi lebih baik dari sapi)</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Bakalan:</strong> Domba muda umur 6-10 bulan yang dibeli khusus untuk digemukkan (fattening) selama 3-4 bulan kemudian dijual</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Cempe:</strong> Anak domba dari lahir sampai umur 4 bulan (sebelum disapih dari induk)</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Bloat (Kembung):</strong> Penumpukan gas berlebihan di rumen akibat fermentasi pakan yang tidak terkontrol. Sangat berbahaya bisa mati dalam 2-4 jam jika tidak ditangani</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Foot rot (Busuk Kuku):</strong> Penyakit infeksi bakteri Fusobacterium necrophorum pada kuku dan jaringan sekitarnya, menyebabkan pincang dan bau busuk</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Legum:</strong> Tanaman kacang-kacangan (lamtoro, gamal, kaliandra, turi) dengan protein tinggi 18-25%, sangat bagus untuk domba tapi harus hati-hati pemberian (bisa kembung)</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Rumen:</strong> Lambung pertama (dari 4 lambung) domba/kambing/sapi tempat fermentasi pakan oleh mikroba. Volume rumen domba dewasa 15-25 liter</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Scabies (Kudis):</strong> Penyakit kulit menular yang disebabkan tungau Sarcoptes scabiei, sangat gatal dan menyebabkan bulu rontok</p>
                </div>
                <div class="text-gray-700">
                  <p><strong class="text-emerald-700">Kolostrum:</strong> Susu pertama dari induk dalam 24 jam pertama setelah melahirkan. Mengandung antibodi (immunoglobulin) vital untuk imunitas cempe 3 bulan pertama kehidupan</p>
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
                <li>• <strong>"Performa Produksi Domba Garut di Dataran Rendah Tropis"</strong> - Jurnal Ilmu Ternak Universitas Padjadjaran (2022)</li>
                <li>• <strong>"Efektivitas Pakan Fermentasi Jerami Padi terhadap Pertambahan Bobot Domba"</strong> - Jurnal Peternakan Indonesia Vol. 24 (2023)</li>
                <li>• <strong>"Analisis Ekonomi Usaha Penggemukan Domba Menjelang Idul Adha"</strong> - Jurnal Agribisnis Universitas Brawijaya (2023)</li>
                <li>• <strong>"Prevalensi Penyakit Parasitik pada Domba di Kalimantan Timur"</strong> - Jurnal Veteriner Tropis Vol. 15 (2024)</li>
              </ul>

              <h4 class="text-lg font-semibold text-gray-800 mb-3">Buku & Manual</h4>
              <ul class="space-y-2 text-gray-700 mb-4">
                <li>• <strong>"Beternak Domba Potong untuk Pemula"</strong> - Kementerian Pertanian RI (Download gratis di Cybex Kementan)</li>
                <li>• <strong>"Petunjuk Teknis Budi Daya Domba Garut"</strong> - Balai Penelitian Ternak Ciawi, Bogor</li>
                <li>• <strong>"Panduan Lengkap Penggemukan Domba Sistem Intensif"</strong> - Dinas Peternakan Jawa Barat</li>
                <li>• <strong>"Sheep Health and Production Manual"</strong> - FAO (Food and Agriculture Organization) - gratis online</li>
                <li>• <strong>"Teknologi Pakan Fermentasi untuk Ruminansia Kecil"</strong> - BPTP Kalimantan Timur</li>
              </ul>

              <h4 class="text-lg font-semibold text-gray-800 mb-3">Website & Portal</h4>
              <ul class="space-y-2 text-gray-700 mb-4">
                <li>• <strong>Cybex Kementan:</strong> cybex.pertanian.go.id - Artikel lengkap budidaya domba, penyakit, pakan fermentasi, pemasaran</li>
                <li>• <strong>Info Harga Ternak:</strong> siskaperbapo.pertanian.go.id - Info harga domba hidup, bibit, pakan real-time per daerah</li>
                <li>• <strong>Trobos Livestock:</strong> troboslivestock.com - Berita terkini, tren pasar, teknologi peternakan domba/kambing</li>
                <li>• <strong>The Sheep Site:</strong> thesheepsite.com - Database penyakit domba lengkap dengan foto, treatment, prevention (Bahasa Inggris)</li>
                <li>• <strong>Portal Peternak:</strong> ditjenpkh.pertanian.go.id - Regulasi, standar, subsidi pemerintah untuk peternak domba</li>
              </ul>

              <h4 class="text-lg font-semibold text-gray-800 mb-3">Video & Tutorial YouTube</h4>
              <ul class="space-y-2 text-gray-700 mb-4">
                <li>• Channel <strong>"Domba Gemuk Sukses"</strong> - Tutorial lengkap penggemukan domba dari beli bakalan sampai panen, analisis usaha detail, tips timing jual menjelang Idul Adha</li>
                <li>• Channel <strong>"Peternakan Modern Indonesia"</strong> - Fokus domba Garut dan Merino silang, teknologi pakan fermentasi, kandang modern, pemasaran online</li>
                <li>• Channel <strong>"Pak Dokter Hewan"</strong> - Diagnosa penyakit domba (cacingan, bloat, scabies, foot rot), cara vaksinasi, pengobatan mandiri</li>
                <li>• Channel <strong>"Agribisnis Cerdas"</strong> - Profil peternak domba sukses, studi kasus pemasaran, strategi untung besar dari domba, diversifikasi produk</li>
                <li>• Channel <strong>"Ternak Domba Kampung"</strong> - Tutorial untuk pemula, domba lokal DET, pakan murah meriah, kandang sederhana, cocok untuk skala kecil</li>
              </ul>

              <h4 class="text-lg font-semibold text-gray-800 mb-3">Grup WhatsApp & Forum</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• <strong>WA Group "Peternak Domba Kalimantan Timur"</strong> - Sharing info harga domba lokal, tanya jawab penyakit, info pakan murah, buyer/supplier. Kontak admin via Dinas Peternakan Balikpapan</li>
                <li>• <strong>Facebook Group "Peternak Domba & Kambing Indonesia"</strong> - Komunitas 50.000+ peternak domba se-Indonesia, sangat aktif, banyak thread berguna, marketplace jual-beli domba</li>
                <li>• <strong>Telegram Group "Domba Garut Lovers"</strong> - Fokus domba Garut premium, tips kontes domba, pemasaran high-end, breeder networking</li>
                <li>• <strong>Forum Kaskus "Peternakan Ruminansia"</strong> - Sub-forum khusus domba/kambing, banyak thread lama yang informatif, archived knowledge</li>
                <li>• <strong>WhatsApp Group "Penggemukan Domba Menjelang Kurban"</strong> - Aktif 3-4 bulan sebelum Idul Adha, sharing tips beli bakalan murah, strategi jual saat peak price</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Penutup -->
        <section class="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-8 mb-8">
          <h3 class="text-2xl font-semibold text-emerald-900 mb-4">Kesimpulan</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Beternak domba di Balikpapan sangat menjanjikan terutama menjelang Idul Adha dengan potensi keuntungan 30-50% dalam waktu 3-4 bulan. 
            Kunci suksesnya adalah: <strong>(1) Timing yang tepat</strong> - beli bakalan 2-3 bulan sebelum Idul Adha saat harga rendah, gemukkan dengan pakan konsentrat berkualitas, 
            jual saat puncak permintaan (harga naik 30-50%!), <strong>(2) Pemilihan jenis domba</strong> sesuai modal dan target pasar - DET untuk pemula dengan modal kecil, 
            Merino silang untuk penggemukan cepat dan efisien, Garut untuk pasar premium dan kontes, <strong>(3) Manajemen pakan efisien</strong> dengan memanfaatkan hijauan lokal 
            dan fermentasi jerami/ampas tahu untuk hemat 20-30% biaya pakan, <strong>(4) Kesehatan preventif</strong> dengan vaksinasi Anthrax rutin, obat cacing setiap 3 bulan, 
            jaga kandang kering dan bersih.
          </p>
          <p class="text-gray-700 leading-relaxed mb-4">
            Strategi pemasaran yang sukses meliputi: pre-order dengan sistem DP untuk cash flow lebih baik, kerjasama dengan masjid/pengajian untuk paket kurban kolektif, 
            promosi online dengan dokumentasi progress penggemukan, diversifikasi ke pasar aqiqah/walimah sepanjang tahun (jangan hanya fokus Idul Adha). 
            Manfaatkan limbah domba untuk tambahan income: kotoran untuk pupuk organik premium (Rp 500-1.000/kg), bulu domba untuk industri tekstil (Rp 8.000-15.000/kg untuk Garut/Merino), 
            kulit untuk kerajinan kulit, jeroan dan kepala bernilai tinggi.
          </p>
          <p class="text-gray-700 leading-relaxed">
            Mulai dari skala kecil 5-10 ekor untuk belajar dinamika pasar dan timing yang tepat. Bergabung dengan kelompok peternak domba untuk sharing knowledge dan pembelian pakan patungan (lebih murah). 
            Manfaatkan pendampingan Dinas Peternakan dan Puskeswan untuk vaksinasi gratis dan konsultasi. Fokus pada kualitas domba (sehat, gemuk, tidak stress) = harga jual tinggi. 
            Dengan strategi yang benar dan timing tepat, usaha penggemukan domba bisa sangat menguntungkan dan berkelanjutan setiap tahun!
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
