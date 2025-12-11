<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import sapiImage from '@/assets/images/SapiPaduan.webp';

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
        :src="sapiImage" 
        alt="Ternak Sapi"
        class="w-full h-full object-cover"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 p-8 md:p-12">
        <div class="max-w-6xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
            Panduan Lengkap Beternak Sapi di Balikpapan
          </h1>
          <p class="text-gray-200 text-lg">
            Ensiklopedia praktis untuk peternak sapi modern di wilayah tropis
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
            Beternak sapi di Balikpapan memiliki tantangan tersendiri karena iklim tropis yang panas dan lembap. 
            Namun dengan manajemen yang tepat, usaha peternakan sapi bisa sangat menguntungkan. Panduan ini 
            dirancang khusus untuk membantu peternak di Balikpapan mengoptimalkan produktivitas ternak sapi mereka.
          </p>
        </section>

        <!-- I. Pengenalan Ternak Sapi -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-200">
            I. Pengenalan Ternak Sapi
          </h2>
          
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">A. Jenis-Jenis Sapi yang Cocok untuk Balikpapan</h3>
            
            <!-- Sapi Brahman -->
            <div class="bg-emerald-50 rounded-lg p-6 mb-6">
              <h4 class="text-xl font-semibold text-emerald-900 mb-3">1. Sapi Brahman</h4>
              <p class="text-gray-700 mb-3">
                Sapi Brahman adalah pilihan utama untuk wilayah tropis seperti Balikpapan karena daya adaptasinya yang luar biasa.
              </p>
              <ul class="space-y-2 mb-4">
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <span class="text-gray-700"><strong>Ciri Fisik:</strong> Memiliki punuk besar di bagian pundak, kulit longgar bergelambir, telinga besar menggantung, dan warna bulu abu-abu hingga kemerahan</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <span class="text-gray-700"><strong>Keunggulan:</strong> Sangat tahan terhadap cuaca panas dan kelembapan tinggi, tahan terhadap parasit seperti caplak dan kutu, pertumbuhan cepat dengan bobot dewasa 600-900 kg</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <span class="text-gray-700"><strong>Kelemahan:</strong> Kualitas daging agak alot dibanding sapi Eropa, temperamen cukup galak sehingga perlu penanganan hati-hati</span>
                </li>
              </ul>
            </div>

            <!-- Sapi Bali -->
            <div class="bg-emerald-50 rounded-lg p-6 mb-6">
              <h4 class="text-xl font-semibold text-emerald-900 mb-3">2. Sapi Bali</h4>
              <p class="text-gray-700 mb-3">
                Sapi asli Indonesia yang sudah beradaptasi sempurna dengan iklim tropis nusantara.
              </p>
              <ul class="space-y-2 mb-4">
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <span class="text-gray-700"><strong>Ciri Fisik:</strong> Warna coklat kemerahan dengan bagian kaki putih (seperti kaos kaki), tubuh kompak dan berotot</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <span class="text-gray-700"><strong>Keunggulan:</strong> Persentase karkas tinggi (sekitar 56%), efisien dalam mengkonversi pakan, cocok untuk sistem pemeliharaan ekstensif, daging berkualitas baik</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <span class="text-gray-700"><strong>Kelemahan:</strong> Ukuran tubuh relatif kecil (400-600 kg), pertumbuhan lebih lambat dibanding Brahman</span>
                </li>
              </ul>
            </div>

            <!-- Sapi Limousin Silang -->
            <div class="bg-emerald-50 rounded-lg p-6 mb-6">
              <h4 class="text-xl font-semibold text-emerald-900 mb-3">3. Sapi Limousin Silang (Limosin x Lokal)</h4>
              <p class="text-gray-700 mb-3">
                Hasil persilangan yang menggabungkan kualitas daging sapi Eropa dengan ketahanan sapi lokal.
              </p>
              <ul class="space-y-2 mb-4">
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <span class="text-gray-700"><strong>Ciri Fisik:</strong> Warna coklat kekuningan, tubuh lebih besar dari sapi lokal, otot padat terutama di bagian belakang</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <span class="text-gray-700"><strong>Keunggulan:</strong> Pertumbuhan cepat, kualitas daging sangat baik dengan marbling memadai, lebih adaptif dibanding Limousin murni</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <span class="text-gray-700"><strong>Kelemahan:</strong> Memerlukan pakan konsentrat lebih banyak, rentan stres panas jika manajemen kurang baik, harga bibit lebih mahal</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- B. Manajemen Pemeliharaan Dasar -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-200">
            II. Manajemen Pemeliharaan Dasar
          </h2>
          
          <!-- Kandang dan Lingkungan -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">A. Kandang dan Lingkungan</h3>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">1. Syarat Kandang Ideal</h4>
              <ul class="space-y-3">
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <div>
                    <strong class="text-gray-800">Ukuran per ekor:</strong>
                    <span class="text-gray-700"> Sapi dewasa memerlukan ruang minimal 2,5 x 3 meter untuk kandang individu. Untuk kandang kelompok, sediakan 3-4 m² per ekor</span>
                  </div>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <div>
                    <strong class="text-gray-800">Ventilasi:</strong>
                    <span class="text-gray-700"> Sangat krusial di Balikpapan. Buat bukaan ventilasi minimal 30% dari luas dinding. Idealnya gunakan sistem kandang terbuka dengan atap tinggi (4-5 meter) untuk sirkulasi udara maksimal</span>
                  </div>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <div>
                    <strong class="text-gray-800">Lantai:</strong>
                    <span class="text-gray-700"> Gunakan lantai semen dengan kemiringan 3-5% menuju saluran pembuangan. Tambahkan alas dari kayu atau bambu untuk kenyamanan sapi</span>
                  </div>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <div>
                    <strong class="text-gray-800">Atap:</strong>
                    <span class="text-gray-700"> Pilih bahan yang tidak menyerap panas seperti asbes atau genteng metal berwarna terang. Tambahkan insulator atau beri jarak antara atap dan plafon</span>
                  </div>
                </li>
              </ul>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">2. Manajemen Suhu dan Kelembaban</h4>
              <p class="text-gray-700 mb-3">
                Stres panas adalah masalah utama di Balikpapan. Suhu ideal untuk sapi adalah 18-24°C, sedangkan Balikpapan rata-rata 26-32°C.
              </p>
              <ul class="space-y-3">
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <span class="text-gray-700"><strong>Kipas angin:</strong> Pasang kipas besar untuk kandang tertutup, operasikan saat suhu di atas 28°C</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <span class="text-gray-700"><strong>Penyemprotan/misting:</strong> Semprotkan air kabut pada siang hari paling panas untuk menurunkan suhu kandang</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <span class="text-gray-700"><strong>Naungan tambahan:</strong> Tanam pohon di sekitar kandang atau buat kanopi untuk mengurangi radiasi matahari langsung</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <span class="text-gray-700"><strong>Air minum:</strong> Sediakan air minum segar dalam jumlah cukup (30-50 liter/ekor/hari). Sapi yang kepanasan akan minum lebih banyak</span>
                </li>
              </ul>
            </div>

            <div class="bg-gray-50 rounded-lg p-6">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">3. Pencegahan Hama dan Predator</h4>
              <ul class="space-y-3">
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <span class="text-gray-700"><strong>Sanitasi rutin:</strong> Bersihkan kotoran setiap hari, semprot kandang dengan desinfektan seminggu sekali</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <span class="text-gray-700"><strong>Pengaturan limbah:</strong> Buat bak penampungan kotoran tertutup jauh dari kandang untuk mengurangi lalat dan bau</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-1">•</span>
                  <span class="text-gray-700"><strong>Kontrol caplak dan kutu:</strong> Mandikan sapi dengan larutan antiparasit setiap 2-3 minggu sekali</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Pakan dan Nutrisi -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4 mt-8">B. Pakan dan Nutrisi</h3>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">1. Jenis Pakan Utama</h4>
              
              <div class="mb-4">
                <strong class="text-emerald-700">Hijauan (70% dari total pakan):</strong>
                <ul class="ml-6 mt-2 space-y-2 text-gray-700">
                  <li>• Rumput gajah, rumput raja, rumput brachiaria</li>
                  <li>• Legum: lamtoro, gamal, turi</li>
                  <li>• Limbah pertanian: jerami padi, tongkol jagung, daun singkong</li>
                  <li>• Kebutuhan: 35-40 kg hijauan segar per ekor per hari</li>
                </ul>
              </div>

              <div class="mb-4">
                <strong class="text-emerald-700">Konsentrat (30% dari total pakan):</strong>
                <ul class="ml-6 mt-2 space-y-2 text-gray-700">
                  <li>• Bungkil kelapa sawit (sumber protein lokal Balikpapan)</li>
                  <li>• Dedak padi, jagung giling, bungkil kedelai</li>
                  <li>• Mineral dan vitamin premix</li>
                  <li>• Kebutuhan: 3-5 kg konsentrat per ekor per hari (untuk sapi penggemukan)</li>
                </ul>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">2. Kebutuhan Pakan Berdasarkan Fase</h4>
              
              <div class="overflow-x-auto">
                <table class="w-full text-sm text-gray-700">
                  <thead class="bg-emerald-100 text-emerald-800">
                    <tr>
                      <th class="p-3 text-left">Fase</th>
                      <th class="p-3 text-left">Hijauan/Hari</th>
                      <th class="p-3 text-left">Konsentrat/Hari</th>
                      <th class="p-3 text-left">Catatan</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y">
                    <tr class="bg-white">
                      <td class="p-3">Pedet (0-8 bulan)</td>
                      <td class="p-3">2-5 kg</td>
                      <td class="p-3">0,5-1 kg + susu</td>
                      <td class="p-3">Susu 4-6 liter/hari hingga umur 3 bulan</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-3">Dara/Muda (8-18 bulan)</td>
                      <td class="p-3">15-25 kg</td>
                      <td class="p-3">1-2 kg</td>
                      <td class="p-3">Fokus pada pertumbuhan tulang dan otot</td>
                    </tr>
                    <tr class="bg-white">
                      <td class="p-3">Penggemukan</td>
                      <td class="p-3">35-40 kg</td>
                      <td class="p-3">3-5 kg</td>
                      <td class="p-3">Periode 4-6 bulan untuk mencapai bobot jual</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-3">Induk Bunting</td>
                      <td class="p-3">35-40 kg</td>
                      <td class="p-3">2-3 kg</td>
                      <td class="p-3">Tambah 1 kg konsentrat di trimester akhir</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">3. Teknik Pengolahan Pakan Lokal</h4>
              <p class="text-gray-700 mb-3">
                Untuk menekan biaya pakan, manfaatkan bahan lokal Balikpapan dan teknik fermentasi:
              </p>
              <ul class="space-y-3 text-gray-700">
                <li><strong class="text-emerald-700">Silase jerami padi:</strong> Cacah jerami, campur molase 3-5%, masukkan drum tertutup rapat selama 21 hari. Hasilnya lebih mudah dicerna dan tahan lama</li>
                <li><strong class="text-emerald-700">Fermentasi tongkol jagung:</strong> Giling kasar, campur dedak 10%, probiotik (EM4), air secukupnya. Inkubasi 5-7 hari dalam plastik tertutup</li>
                <li><strong class="text-emerald-700">Pemanfaatan limbah sawit:</strong> Bungkil sawit lokal bisa difermentasi untuk meningkatkan nilai gizi dan palatabilitas</li>
              </ul>
            </div>
          </div>

          <!-- Reproduksi dan Pembibitan -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4 mt-8">C. Reproduksi dan Pembibitan</h3>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">1. Masa Birahi dan Perkawinan</h4>
              <ul class="space-y-3 text-gray-700">
                <li><strong class="text-emerald-700">Siklus birahi:</strong> Sapi betina birahi setiap 21 hari sekali (rentang 18-24 hari)</li>
                <li><strong class="text-emerald-700">Tanda-tanda birahi:</strong> Gelisah, sering melenguh, vulva bengkak dan keluar lendir, nafsu makan menurun, mau dinaiki sapi lain</li>
                <li><strong class="text-emerald-700">Waktu optimal kawin/IB:</strong> 12-18 jam setelah tanda birahi muncul (pagi lihat birahi, sore kawinkan)</li>
                <li><strong class="text-emerald-700">Metode:</strong> Inseminasi Buatan (IB) lebih direkomendasikan karena dapat memilih genetik unggul dan mencegah penyakit menular</li>
              </ul>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">2. Manajemen Induk Bunting</h4>
              <ul class="space-y-3 text-gray-700">
                <li><strong class="text-emerald-700">Masa kebuntingan:</strong> Sekitar 280-285 hari (± 9 bulan)</li>
                <li><strong class="text-emerald-700">Perawatan trimester awal (0-3 bulan):</strong> Berikan pakan seimbang, hindari stres dan kandang licin</li>
                <li><strong class="text-emerald-700">Trimester tengah (4-6 bulan):</strong> Pakan normal, boleh dipekerjakan ringan</li>
                <li><strong class="text-emerald-700">Trimester akhir (7-9 bulan):</strong> Tingkatkan konsentrat 1 kg/hari, hentikan pekerjaan fisik, kandang bersih dan kering</li>
                <li><strong class="text-emerald-700">Vaksinasi:</strong> Vaksin ND dan brucellosis sebelum bunting. Cacing umur 6-7 bulan kebuntingan</li>
              </ul>
            </div>

            <div class="bg-gray-50 rounded-lg p-6">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">3. Perawatan Anak Ternak (Pedet)</h4>
              <ul class="space-y-3 text-gray-700">
                <li><strong class="text-emerald-700">Kolostrum:</strong> Sangat penting! Berikan kolostrum (susu pertama induk) dalam 1 jam pertama, minimal 2 liter. Kolostrum mengandung antibodi vital</li>
                <li><strong class="text-emerald-700">Pemberian susu:</strong> 4-6 liter/hari selama 3 bulan pertama, bisa dari induk atau susu pengganti</li>
                <li><strong class="text-emerald-700">Starter pakan padat:</strong> Mulai umur 2 minggu berikan rumput muda dan konsentrat starter. Rumen mulai berkembang di usia ini</li>
                <li><strong class="text-emerald-700">Penyapihan:</strong> Umur 8 bulan atau bobot minimal 100 kg. Penyapihan bertahap mengurangi stres</li>
                <li><strong class="text-emerald-700">Vaksinasi awal:</strong>
                  <ul class="ml-6 mt-2">
                    <li>• Umur 1 bulan: Vaksin Anthrax</li>
                    <li>• Umur 2 bulan: Vaksin SE dan HS</li>
                    <li>• Umur 6 bulan: Vaksin ulang</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- C. Kesehatan dan Pencegahan Penyakit -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-200">
            III. Kesehatan dan Pencegahan Penyakit
          </h2>
          
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">A. Penyakit Umum pada Sapi di Balikpapan</h3>
            
            <!-- Kembung -->
            <div class="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-red-900 mb-3">1. Kembung (Bloat/Tympani)</h4>
              <p class="text-gray-700 mb-2"><strong>Penyebab:</strong> Gas berlebih di rumen akibat makan hijauan muda (legum) atau biji-bijian berlebihan</p>
              <p class="text-gray-700 mb-2"><strong>Gejala:</strong> Perut kiri membesar cepat, nafas sesak, gelisah, kadang menjulurkan lidah</p>
              <p class="text-gray-700 mb-2"><strong>Pertolongan pertama:</strong></p>
              <ul class="ml-6 text-gray-700 space-y-1">
                <li>• Jalan-jalankan sapi 15-20 menit untuk merangsang sendawa</li>
                <li>• Masukkan kayu/selang ke mulut untuk memaksa sendawa</li>
                <li>• Berikan 200-300 ml minyak kelapa melalui mulut</li>
                <li>• Jika parah, segera hubungi dokter hewan untuk dilakukan penusukan rumen</li>
              </ul>
              <p class="text-gray-700 mt-2"><strong>Pencegahan:</strong> Jangan beri legum muda berlebihan, beri rumput kering dulu sebelum hijauan basah</p>
            </div>

            <!-- PMK -->
            <div class="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-red-900 mb-3">2. Penyakit Mulut dan Kuku (PMK)</h4>
              <p class="text-gray-700 mb-2"><strong>Penyebab:</strong> Virus, sangat menular</p>
              <p class="text-gray-700 mb-2"><strong>Gejala:</strong> Demam tinggi, leleran air liur berlebih, lepuh di mulut, lidah, dan kuku, pincang, nafsu makan hilang</p>
              <p class="text-gray-700 mb-2"><strong>Penanganan:</strong></p>
              <ul class="ml-6 text-gray-700 space-y-1">
                <li>• Isolasi segera sapi yang terinfeksi</li>
                <li>• Bersihkan luka dengan antiseptik (Betadine/PK)</li>
                <li>• Beri antibiotik untuk cegah infeksi sekunder</li>
                <li>• Pakan lunak dan mudah dicerna</li>
              </ul>
              <p class="text-gray-700 mt-2"><strong>Pencegahan:</strong> Vaksinasi rutin setiap 6 bulan. Karantina sapi baru minimal 2 minggu</p>
            </div>

            <!-- Cacingan -->
            <div class="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-red-900 mb-3">3. Cacingan</h4>
              <p class="text-gray-700 mb-2"><strong>Penyebab:</strong> Parasit cacing (cacing hati, cacing pita, cacing gelang)</p>
              <p class="text-gray-700 mb-2"><strong>Gejala:</strong> Pertumbuhan lambat, bulu kusam, perut membuncit, diare kadang berdarah, anemia</p>
              <p class="text-gray-700 mb-2"><strong>Penanganan:</strong> Beri obat cacing (Albendazole, Ivermectin) sesuai dosis dokter hewan</p>
              <p class="text-gray-700 mt-2"><strong>Pencegahan:</strong> Obat cacing rutin setiap 3-4 bulan. Jaga kebersihan kandang dan pakan. Rotasi padang penggembalaan</p>
            </div>
          </div>

          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">B. Program Vaksinasi dan Obat-obatan</h3>
            
            <div class="bg-emerald-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Jadwal Vaksinasi Rutin</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm text-gray-700">
                  <thead class="bg-emerald-100 text-emerald-800">
                    <tr>
                      <th class="p-3 text-left">Umur/Waktu</th>
                      <th class="p-3 text-left">Jenis Vaksin</th>
                      <th class="p-3 text-left">Penyakit yang Dicegah</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y">
                    <tr class="bg-white">
                      <td class="p-3">1 bulan</td>
                      <td class="p-3">Anthrax</td>
                      <td class="p-3">Penyakit Antraks</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-3">2 bulan</td>
                      <td class="p-3">SE, HS</td>
                      <td class="p-3">Septicemia Epizootica, Hemoragic Septicemia</td>
                    </tr>
                    <tr class="bg-white">
                      <td class="p-3">6 bulan</td>
                      <td class="p-3">Booster SE, HS, PMK</td>
                      <td class="p-3">Ulangan + Penyakit Mulut dan Kuku</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-3">Setiap 6 bulan</td>
                      <td class="p-3">PMK</td>
                      <td class="p-3">Penyakit Mulut dan Kuku</td>
                    </tr>
                    <tr class="bg-white">
                      <td class="p-3">Setiap tahun</td>
                      <td class="p-3">Anthrax, HS</td>
                      <td class="p-3">Booster rutin</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="bg-emerald-50 rounded-lg p-6">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Obat-obatan Wajib di Kandang</h4>
              <ul class="space-y-2 text-gray-700">
                <li><strong>Obat cacing:</strong> Albendazole, Ivermectin (setiap 3-4 bulan)</li>
                <li><strong>Vitamin:</strong> B-Complex, AD3E (saat stres, sakit, atau pasca melahirkan)</li>
                <li><strong>Antibiotik:</strong> Oxytetracycline, Penicillin (hanya atas petunjuk dokter hewan)</li>
                <li><strong>Antiseptik:</strong> Betadine, PK, Alkohol 70% untuk luka</li>
                <li><strong>Anti-kembung:</strong> Bloat Guard, minyak kelapa</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- D. Manajemen Pasca Panen dan Pemasaran -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-200">
            IV. Manajemen Pasca Panen dan Pemasaran
          </h2>
          
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">A. Pemotongan dan Karkas</h3>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">1. Standar Pemotongan Halal di Balikpapan</h4>
              <p class="text-gray-700 mb-3">
                Pemotongan sapi di Balikpapan harus dilakukan di RPH (Rumah Potong Hewan) resmi yang tersertifikasi halal.
              </p>
              <ul class="space-y-2 text-gray-700">
                <li>• <strong>Lokasi RPH:</strong> RPH Balikpapan berlokasi di daerah Kariangau dan Sepinggan</li>
                <li>• <strong>Prosedur:</strong> Sapi dipuasakan 12-24 jam sebelum potong, penyembelihan sesuai syariat Islam, proses higienis</li>
                <li>• <strong>Biaya retribusi:</strong> Sekitar Rp 100.000 - Rp 150.000 per ekor (tahun 2024)</li>
              </ul>
            </div>

            <div class="bg-gray-50 rounded-lg p-6">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">2. Kualitas Daging</h4>
              <p class="text-gray-700 mb-3">
                Faktor-faktor yang mempengaruhi harga jual:
              </p>
              <ul class="space-y-2 text-gray-700">
                <li><strong>Persentase karkas:</strong> Sapi Bali 54-56%, Brahman 52-54%, Limousin silang 55-58%</li>
                <li><strong>Marbling:</strong> Sebaran lemak di antara serabut otot. Semakin baik marbling, harga lebih tinggi</li>
                <li><strong>Warna daging:</strong> Merah cerah (segar), hindari warna gelap (stres sebelum potong)</li>
                <li><strong>Tekstur:</strong> Kenyal, tidak lembek, tidak bau</li>
              </ul>
            </div>
          </div>

          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">B. Pemasaran dan Ekonomi</h3>
            
            <div class="bg-emerald-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">1. Analisis Usaha Sederhana (Penggemukan 1 Ekor)</h4>
              <div class="space-y-3 text-gray-700">
                <div class="bg-white p-4 rounded">
                  <p class="font-semibold mb-2">Modal Awal:</p>
                  <ul class="ml-6 space-y-1">
                    <li>• Beli sapi bakalan 250 kg: Rp 15.000.000</li>
                    <li>• Pakan 6 bulan: Rp 6.000.000</li>
                    <li>• Obat & Vaksin: Rp 500.000</li>
                    <li>• Tenaga kerja: Rp 2.000.000</li>
                    <li><strong>Total: Rp 23.500.000</strong></li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded">
                  <p class="font-semibold mb-2">Pendapatan:</p>
                  <ul class="ml-6 space-y-1">
                    <li>• Jual sapi 400 kg @ Rp 70.000/kg: Rp 28.000.000</li>
                    <li>• Keuntungan bersih: Rp 4.500.000</li>
                    <li>• ROI: 19% dalam 6 bulan</li>
                  </ul>
                </div>
              </div>
              <p class="text-sm text-gray-600 mt-3 italic">*Harga dapat bervariasi tergantung musim dan kualitas sapi</p>
            </div>

            <div class="bg-emerald-50 rounded-lg p-6 mb-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">2. Saluran Pemasaran di Balikpapan</h4>
              <ul class="space-y-3 text-gray-700">
                <li><strong>Pasar Tradisional:</strong> Pasar Klandasan, Pasar Kebun Sayur, Pasar Kariangau - jual langsung ke pedagang daging</li>
                <li><strong>Pasar Modern:</strong> Supplier untuk supermarket (Hypermart, Transmart) - butuh sertifikat kesehatan hewan</li>
                <li><strong>Kemitraan Aqiqah/Kurban:</strong> Jual langsung ke konsumen atau jasa aqiqah menjelang Idul Adha dan acara keagamaan</li>
                <li><strong>Pedagang Pengumpul:</strong> Biasanya datang ke kandang, harga sedikit lebih rendah tapi praktis</li>
                <li><strong>Online/Media Sosial:</strong> Promosi lewat Facebook Marketplace, Grup WA peternak Balikpapan</li>
              </ul>
            </div>

            <div class="bg-emerald-50 rounded-lg p-6">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">3. Pemanfaatan Limbah</h4>
              <p class="text-gray-700 mb-3">
                Kotoran sapi adalah sumber pendapatan tambahan:
              </p>
              <ul class="space-y-2 text-gray-700">
                <li><strong>Pupuk kompos:</strong> 1 ekor sapi menghasilkan 10-15 kg kotoran/hari. Difermentasi jadi kompos, dijual Rp 500-800/kg</li>
                <li><strong>Biogas:</strong> Untuk skala 10 ekor ke atas, instalasi biogas bisa menghemat gas LPG untuk rumah tangga atau memasak pakan</li>
                <li><strong>Larva BSF (Black Soldier Fly):</strong> Kotoran bisa dibudidayakan maggot BSF untuk pakan unggas, nilai ekonomi tinggi</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- IV. Lampiran dan Sumber Daya -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-200">
            V. Lampiran dan Sumber Daya
          </h2>
          
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">A. Direktori Kontak Penting</h3>
            
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-gray-50 rounded-lg p-5">
                <h4 class="font-semibold text-emerald-800 mb-2">Dinas Pertanian dan Peternakan Balikpapan</h4>
                <p class="text-sm text-gray-700">Jl. Mulawarman No.76, Balikpapan</p>
                <p class="text-sm text-gray-700">Telp: (0542) 421234</p>
              </div>
              
              <div class="bg-gray-50 rounded-lg p-5">
                <h4 class="font-semibold text-emerald-800 mb-2">UPTD Kesehatan Hewan</h4>
                <p class="text-sm text-gray-700">Pelayanan vaksinasi dan konsultasi kesehatan ternak</p>
                <p class="text-sm text-gray-700">Telp: (0542) 422345</p>
              </div>
              
              <div class="bg-gray-50 rounded-lg p-5">
                <h4 class="font-semibold text-emerald-800 mb-2">Kelompok Peternak Sapi Balikpapan</h4>
                <p class="text-sm text-gray-700">Sharing informasi, harga pakan, dan pemasaran</p>
                <p class="text-sm text-gray-700">Kontak via WA Group</p>
              </div>
              
              <div class="bg-gray-50 rounded-lg p-5">
                <h4 class="font-semibold text-emerald-800 mb-2">Toko Pakan Ternak</h4>
                <p class="text-sm text-gray-700">Toko pakan di area Sepinggan dan Gunung Bahagia</p>
                <p class="text-sm text-gray-700">Sediakan konsentrat, vitamin, obat-obatan</p>
              </div>
            </div>
          </div>

          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">B. Glosarium</h3>
            <div class="bg-gray-50 rounded-lg p-6">
              <dl class="space-y-3">
                <div>
                  <dt class="font-semibold text-emerald-800">Karkas</dt>
                  <dd class="text-gray-700 ml-4">Bagian tubuh ternak setelah dipisahkan kepala, kaki, kulit, dan jeroan. Berat karkas menjadi patokan harga daging.</dd>
                </div>
                <div>
                  <dt class="font-semibold text-emerald-800">FCR (Feed Conversion Ratio)</dt>
                  <dd class="text-gray-700 ml-4">Rasio konversi pakan. Jumlah pakan yang dibutuhkan untuk menaikkan 1 kg bobot badan. Semakin kecil FCR, semakin efisien.</dd>
                </div>
                <div>
                  <dt class="font-semibold text-emerald-800">Kolostrum</dt>
                  <dd class="text-gray-700 ml-4">Susu pertama induk yang keluar 1-3 hari setelah melahirkan. Kaya antibodi, sangat penting untuk imunitas pedet.</dd>
                </div>
                <div>
                  <dt class="font-semibold text-emerald-800">Marbling</dt>
                  <dd class="text-gray-700 ml-4">Sebaran lemak halus di antara serabut otot daging. Marbling bagus membuat daging empuk dan lezat.</dd>
                </div>
                <div>
                  <dt class="font-semibold text-emerald-800">Rumen</dt>
                  <dd class="text-gray-700 ml-4">Lambung pertama sapi (dari 4 lambung) tempat fermentasi pakan berserat. Volume rumen sapi dewasa bisa 100-150 liter.</dd>
                </div>
                <div>
                  <dt class="font-semibold text-emerald-800">IB (Inseminasi Buatan)</dt>
                  <dd class="text-gray-700 ml-4">Teknik mengawinkan sapi dengan memasukkan semen pejantan unggul menggunakan alat, tanpa perkawinan alami.</dd>
                </div>
              </dl>
            </div>
          </div>

          <div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">C. Referensi</h3>
            <div class="bg-gray-50 rounded-lg p-6">
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>1. Badan Pusat Statistik Kaltim. (2024). Statistik Peternakan Kalimantan Timur 2024.</li>
                <li>2. Dinas Pertanian dan Peternakan Balikpapan. (2024). Laporan Tahunan Populasi Ternak.</li>
                <li>3. Sugeng, Y. B. (2023). Beternak Sapi Potong. Penebar Swadaya.</li>
                <li>4. Siregar, S.B. (2023). Penggemukan Sapi Potong. Penebar Swadaya.</li>
                <li>5. Balai Pengkajian Teknologi Pertanian Kaltim. (2024). Panduan Teknis Peternakan Sapi Tropis.</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Penutup -->
        <div class="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-8 text-center">
          <h3 class="text-2xl font-bold text-emerald-800 mb-3">
            Selamat Beternak!
          </h3>
          <p class="text-gray-700 max-w-2xl mx-auto">
            Panduan ini adalah dasar untuk memulai usaha ternak sapi di Balikpapan. 
            Praktik langsung dan konsultasi rutin dengan sesama peternak serta petugas penyuluh 
            akan memperkaya pengalaman Anda. Sukses selalu!
          </p>
        </div>

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
