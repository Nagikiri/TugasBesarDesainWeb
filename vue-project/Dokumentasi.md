Nama : Gihon Endrios Aruan
NIM : 11231028
Laporann 

<script>
import ayamImg from '@/assets/images/JK (1).jpeg'
import sapiImg from '@/assets/images/JK (2).jpeg'
import kambingImg from '@/assets/images/JK (3).jpeg'
//INI COTS
export default {
  data() {
    return {
      ayamImg,
      sapiImg,
      kambingImg
    }
  }
}
</script>

<template>
<div id="overview" class="w-full py-20 lg:py-28 bg-gradient-to-b from-white via-green-50/30 to-white">
    <div class="container mx-auto px-4 lg:px-8 max-w-7xl">   
        <div class="text-center mb-16">
            <h2 class="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Skill <span class="text-emerald-600">Saya Yang</span> Unggulan
            </h2>
            <p class="text-lg lg:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
                Tiga jenis skill yang paling diminati dan menguntungkan untuk bekerja yang dimiliki
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">   
            <!-- Card 1: Ayam Petelur -->
            <div class="bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div class="relative h-56 overflow-hidden">
                    <img :src="ayamImg"
                         class="w-full h-full object-cover object-center rounded-t-3xl transition-transform duration-300 hover:scale-110" 
                         title="Ayam Petelur" 
                         alt="Ayam Petelur" />
                    <div class="absolute z-20 bg-emerald-600 uppercase px-4 py-2 top-4 right-4 text-white text-xs font-bold rounded-full shadow-lg">
                        #1 Koding Java
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                <div class="p-6">
                <p class="text-xs uppercase tracking-wider text-emerald-600 font-bold mb-2">
                    Koding unggulan
                </p>
                <h3 class="text-2xl font-bold text-gray-800 mb-3">
                    <span class="text-emerald-600">Java</span> <Script></Script>
                </h3>
                <p class="text-sm leading-relaxed text-gray-600 text-justify mb-4 line-clamp-3 hover:line-clamp-none transition-all duration-300">
                    Saya dapat melakukan koding javascript dan pengetahuan 100%
                </p>
                    <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div class="flex flex-col">
                            <span class="text-xs text-gray-500 mb-1">Kemampuan</span>
                            <span class="text-lg font-bold text-emerald-600">100%</span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                            <span class="text-sm font-semibold text-gray-700">4.0</span>
                        </div>
                    </div>
                    <router-link to="/gallery/ayam" class="mt-4 block w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-3 rounded-xl font-semibold transition-colors duration-300">
                        Lihat Biodata Lengkap
                    </router-link>
                </div>
            </div>
            
            <!-- Card 2: Sapi Brahman -->
            <div class="bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div class="relative h-56 overflow-hidden">
                    <img :src="sapiImg"
                         class="w-full h-full object-cover object-center rounded-t-3xl transition-transform duration-300 hover:scale-110" 
                         title="Sapi Brahman" 
                         alt="Sapi Brahman" />
                    <div class="absolute z-20 bg-emerald-600 uppercase px-4 py-2 top-4 right-4 text-white text-xs font-bold rounded-full shadow-lg">
                        #2 Koding Python
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                <div class="p-6">
                <p class="text-xs uppercase tracking-wider text-emerald-600 font-bold mb-2">
                    Koding Unggulan
                </p>
                <h3 class="text-2xl font-bold text-gray-800 mb-3">
                    <span class="text-emerald-600">Koding</span> Python
                </h3>
                    <p class="text-sm leading-relaxed text-gray-600 text-justify mb-4 line-clamp-3 hover:line-clamp-none transition-all duration-300">
                        Koding python jago banget
                    </p>
                    <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div class="flex flex-col">
                            <span class="text-xs text-gray-500 mb-1">Python</span>
                            <span class="text-lg font-bold text-emerald-600">100%</span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                            <span class="text-sm font-semibold text-gray-700">4.5</span>
                        </div>
                    </div>
                    <router-link to="/gallery/sapi" class="mt-4 block w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-3 rounded-xl font-semibold transition-colors duration-300">
                        Lihat Biodata Lengkap
                    </router-link>
            
            <!-- Card 3: Kambing Etawa -->
            <div class="bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div class="relative h-56 overflow-hidden">
                    <img :src="kambingImg"
                         class="w-full h-full object-cover object-center rounded-t-3xl transition-transform duration-300 hover:scale-110" 
                         title="Kambing Etawa" 
                         alt="Kambing Etawa" />
                    <div class="absolute z-20 bg-emerald-600 uppercase px-4 py-2 top-4 right-4 text-white text-xs font-bold rounded-full shadow-lg">
                        #3 Koding Java
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                <div class="p-6">
                <p class="text-xs uppercase tracking-wider text-emerald-600 font-bold mb-2">
                    Koding Unggulan
                </p>
                <h3 class="text-2xl font-bold text-gray-800 mb-3">
                    <span class="text-emerald-600">Java</span> Kodingan
                </h3>
                <p class="text-sm leading-relaxed text-gray-600 text-justify mb-4 line-clamp-3 hover:line-clamp-none transition-all duration-300">
                    Saaya dapat ngoding java
                </p>
                    <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div class="flex flex-col">
                            <span class="text-xs text-gray-500 mb-1">Java</span>
                            <span class="text-lg font-bold text-emerald-600">100%</span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                            <span class="text-sm font-semibold text-gray-700">5.0</span>
                        </div>
                    </div>
                    <router-link to="/gallery/kambing" class="mt-4 block w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-3 rounded-xl font-semibold transition-colors duration-300">
                        Lihat Biodata Lengkap
                    </router-link>
                   </div>
               </div>
           </div>
        </div>
</div>
</template>

Hero.Vue 
<script>
import heroImg from '@/assets/images/CVku.png'
// INI COTS
export default {
  data() {
    return {
      heroImg
    }
  }
}
</script>

<template>
<!-- Hero Section - Modern Design -->
<div class="relative overflow-hidden bg-white">
  <!-- Background Pattern -->
  <div class="absolute inset-0">
    <div class="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50/30 to-white"></div>
    <div class="absolute top-0 right-0 w-1/2 h-full opacity-5">
      <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" stroke-width="0.5"/>
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" stroke="currentColor"/>
      </svg>
    </div>
  </div>

  <div class="relative container mx-auto px-4 lg:px-8 max-w-7xl py-12 lg:py-20">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      
      <!-- Left Content - 7 columns -->
      <div class="lg:col-span-7 space-y-6 lg:space-y-8">
        <!-- Main Title -->
        <h1 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-gray-900">
          Gihon Endrios Aruan
          <span class="block text-green-600 mt-2">11231028</span>
          <span class="block text-gray-800 mt-2">Informatika</span>
          <span class="block text-gray-800 mt-2">Institut Teknologi Kalimantan</span>
        </h1>

        <!-- Description -->
        <p class="text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl">
          Saya adalah Mahasiswa Informatika angkatan 2023 dari Institut Teknlogi Kalimantan dengan kemampunan melakukan 
          pembelajaran dengan mode yang tidak biasa dan juga dapat melakukan hal yang diberikan oleh Jokowi dengan kecepatan
          dengan baik dan mampu melakukan pertanian.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 pt-2">
          <router-link to="/contact" 
            class="group inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Hubungi Saya Sekarang
            <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </router-link>
          <router-link to="/potensi-jual" 
            class="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-green-600 font-bold rounded-xl shadow-md border-2 border-green-100 hover:border-green-200 transition-all duration-300">
            Lihat Hasil Penjualan
          </router-link>
        </div>

        <!-- Stats Bar -->
        <div class="grid grid-cols-3 gap-4 pt-6 lg:pt-8 border-t-2 border-green-100">
          <div>
            <div class="text-2xl lg:text-3xl font-bold text-green-600">100%</div>
            <div class="text-xs lg:text-sm text-gray-600 mt-1">Dapat melakukan bersih-bersih</div>
          </div>
          <div>
            <div class="text-2xl lg:text-3xl font-bold text-green-600">20%</div>
            <div class="text-xs lg:text-sm text-gray-600 mt-1">Dapat melakukan koding</div>
          </div>
          <div>
            <div class="text-2xl lg:text-3xl font-bold text-green-600">99,9%</div>
            <div class="text-xs lg:text-sm text-gray-600 mt-1">Dapat melakukan belajar mandiri</div>
          </div>
        </div>
      </div>

      <!-- Right Image - 5 columns -->
      <div class="lg:col-span-5">
        <div class="rounded-2xl overflow-hidden shadow-xl bg-white">
          <img 
            :src="heroImg" 
            alt="CV ku ini keknya" 
            class="w-full h-64 sm:h-80 lg:h-96 object-cover"
          />
        </div>
      </div>

    </div>
  </div>
</div>
</template>
Navbar. 
<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import logoWeb from '@/assets/images/LogoWeb.png';

const router = useRouter();
const route = useRoute();
const isSidebarOpen = ref(false);

// fungsi toggle sidebar mobile
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

// tutup sidebar
const closeSidebar = () => {
  isSidebarOpen.value = false;
};

// navigasi ke halaman tertentu
const navigateTo = (path) => {
  router.push(path);
  closeSidebar();
};

// cek apakah route aktif
const isActive = (path) => {
  if (path === '/galeri') {
    return route.path === path || route.path.startsWith('/gallery/');
  }
  return route.path === path;
};

// cek apakah di halaman panduan ternak termasuk detail
const isPaduanTernakSection = () => {
  return route.path === '/paduan-ternak' || route.path.startsWith('/paduan/');
};
</script>

<template>
  <div>
    <!-- Sidebar untuk Mobile -->
    <div 
      :class="[
        'fixed bg-gradient-to-b from-green-800 to-green-900 text-white w-64 min-h-screen overflow-y-auto transition-transform transform ease-in-out duration-300 z-50',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      ]"
    >
      <div class="p-4">
        <div class="flex items-center gap-3 mb-6">
          <img :src="logoWeb" alt="Logo" class="w-12 h-12 object-cover rounded-full" style="filter: brightness(1.2) contrast(1.1);" />
          <h1 class="text-xl font-semibold">Ternak Balikpapan</h1>
        </div>
        < class="space-y-2">
          <li>
            <a
              @click.prevent="navigateTo('/')"
              :class="[
                'block py-2 px-4 rounded transition cursor-pointer',
                isActive('/') ? 'bg-green-700' : 'hover:bg-green-700'
              ]"
            >
              Home
            </a>
          </li>
          <li>
            <a
              @click.prevent="navigateTo('/galeri')"
              :class="[
                'block py-2 px-4 rounded transition cursor-pointer',
                isActive('/galeri') ? 'bg-green-700' : 'hover:bg-green-700'
              ]"
            >
              Galeri
            </a>
          </li>
          <li>
            <a
              @click.prevent="navigateTo('/paduan-ternak')"
              :class="[
                'block py-2 px-4 rounded transition cursor-pointer',
                isPaduanTernakSection() ? 'bg-green-700' : 'hover:bg-green-700'
              ]"
            >
              Panduan Ternak
            </a>
          </li>
          <li>
            <a
              @click.prevent="navigateTo('/potensi-jual')"
              :class="[
                'block py-2 px-4 rounded transition cursor-pointer',
                isActive('/potensi-jual') ? 'bg-green-700' : 'hover:bg-green-700'
              ]"
            >
              Potensi Jual
            </a>
          </li>
          <li>
            <a
              @click.prevent="navigateTo('/contact')"
              :class="[
                'block py-2 px-4 rounded transition cursor-pointer',
                isActive('/contact') ? 'bg-green-700' : 'hover:bg-green-700'
              ]"
            >
              Contact
            </a>
          </li>
        </li>
          <a
           @click.prevent="navigateTo('/MyGwejh')"
              :class="[
                'block py-2 px-4 rounded transition cursor-pointer',
                isActive('/MyGwejh') ? 'bg-green-700' : 'hover:bg-green-700'
              ]"
          >
          MyGwejh
        </a>
      </ul>
    </div>
  </div>

    <!-- Desktop Navbar -->
    <nav class="hidden lg:block fixed top-0 left-0 right-0 z-40 bg-green-800/90 backdrop-blur-md shadow-lg border-b border-green-700">
      <div class="container mx-auto px-6">
        <div class="flex items-center justify-between py-3">
          <div class="flex items-center gap-2">
            <img :src="logoWeb" alt="Logo" class="w-10 h-10 object-cover rounded-full" style="filter: brightness(1.2) contrast(1.1);" />
            <span class="text-white font-semibold text-lg">Ternak Balikpapan</span>
          </div>
          
          < class="flex items-center space-x-2">
            <li>
              <a
                @click.prevent="navigateTo('/')"
                :class="[
                  'px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer',
                  isActive('/') ? 'bg-white text-green-800' : 'text-white hover:bg-green-700'
                ]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                @click.prevent="navigateTo('/galeri')"
                :class="[
                  'px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer',
                  isActive('/galeri') ? 'bg-white text-green-800' : 'text-white hover:bg-green-700'
                ]"
              >
                Galeri
              </a>
            </li>
            <li>
              <a
                @click.prevent="navigateTo('/paduan-ternak')"
                :class="[
                  'px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer',
                  isPaduanTernakSection() ? 'bg-white text-green-800' : 'text-white hover:bg-green-700'
                ]"
              >
                Panduan Ternak
              </a>
            </li>
            <li>
              <a
                @click.prevent="navigateTo('/potensi-jual')"
                :class="[
                  'px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer',
                  isActive('/potensi-jual') ? 'bg-white text-green-800' : 'text-white hover:bg-green-700'
                ]"
              >
                Potensi Jual
              </a>
            </li>
            <li>
              <a
                @click.prevent="navigateTo('/contact')"
                :class="[
                  'px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer',
                  isActive('/contact') ? 'bg-white text-green-800' : 'text-white hover:bg-green-700'
                ]"
              >
                Contact
              </a>
            </li>
          </li>
          MyGwejh
              </a>
            </li>
            <li>
           <a
              @click.prevent="navigateTo('/mygwejh')"
              :class="[
                  'px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer',
                  isActive('/mygwejh') ? 'bg-white text-green-800' : 'text-white hover:bg-green-700'
                ]"
          </ul>
        </div>
      </div>
    </nav>

    <!-- Navbar Mobile dengan Burger Menu -->
    <nav class="lg:hidden bg-gradient-to-r from-green-800 to-green-900 shadow-lg sticky top-0 z-30">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-4">
          <button 
            @click="toggleSidebar"
            class="text-white hover:text-green-200 transition"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          
          <div class="flex items-center gap-2">
            <img :src="logoWeb" alt="Logo" class="w-9 h-9 object-cover rounded-full" style="filter: brightness(1.2) contrast(1.1);" />
            <h1 class="text-lg font-semibold text-white">Ternak Balikpapan</h1>
          </div>
          
          <div class="w-6"></div>
        </div>
      </div>
    </nav>

    <!-- Overlay -->
    <div 
      v-if="isSidebarOpen"
      @click="closeSidebar"
      class="fixed inset-0 bg-black opacity-50 z-40"
    ></div>
  </div>
</template>

Page
<script setup>
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/CVHero.vue';
import Overview from '@/components/CVSkill.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <Navbar/>
  <Hero/>
  <Overview/>
  <Footer/>
</template>

// Ini COTS
Router
import { createWebHistory, createRouter } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ContactPage from '@/views/ContactPage.vue';
import GalleryPage from '@/views/GalleryPage.vue';
import PaduanTernakPage from '@/views/PaduanTernakPage.vue';
import PotensiJualPage from '@/views/PotensiJualPage.vue';
import MyGwejhPage from '@/views/MyGwejhPage.vue';

// Import komponen panduan 
import PanduanSapi from '@/components/PaduanTernak/PanduanSapi.vue';
import PanduanKambing from '@/components/PaduanTernak/PanduanKambing.vue';
import PanduanAyam from '@/components/PaduanTernak/PanduanAyam.vue';
import PanduanBebek from '@/components/PaduanTernak/PanduanBebek.vue';
import PanduanKelinci from '@/components/PaduanTernak/PanduanKelinci.vue';
import PanduanDomba from '@/components/PaduanTernak/PanduanDomba.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
  },
  {
    path: '/galeri',
    name: 'Galeri',
    component: GalleryPage,
  },
  {
    path: '/gallery/:id',
    name: 'gallery',
    component: () => import('@/components/GalleryDetailLayout.vue')
  },
  {
    path: '/paduan-ternak',
    name: 'PaduanTernak',
    component: PaduanTernakPage,
  },
  {
    path: '/potensi-jual',
    name: 'PotensiJual',
    component: PotensiJualPage,
  },
  // Routes untuk detail panduan ternak
  {
    path: '/paduan/sapi',
    name: 'PanduanSapi',
    component: PanduanSapi,
  },
  {
    path: '/paduan/kambing',
    name: 'PanduanKambing',
    component: PanduanKambing,
  },
  {
    path: '/paduan/ayam',
    name: 'PanduanAyam',
    component: PanduanAyam,
  },
  {
    path: '/paduan/bebek',
    name: 'PanduanBebek',
    component: PanduanBebek,
  },
  {
    path: '/paduan/kelinci',
    name: 'PanduanKelinci',
    component: PanduanKelinci,
  },
  {
    path: '/paduan/domba',
    name: 'PanduanDomba',
    component: PanduanDomba,
  },
  {
    path: '/mygwejh',
    name: 'Mygwejh',
    component: MyGwejhPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

