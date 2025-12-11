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
        <ul class="space-y-2">
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
          <li>
            <a
              @click.prevent="navigateTo('/mygwejh')"
              :class="[
                'block py-2 px-4 rounded transition cursor-pointer',
                isActive('/mygwejh') ? 'bg-green-700' : 'hover:bg-green-700'
              ]"
            >
              MyGwejh
            </a>
          </li>
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
          
          <ul class="flex items-center space-x-2">
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
            <li>
              <a
                @click.prevent="navigateTo('/mygwejh')"
                :class="[
                  'px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer',
                  isActive('/mygwejh') ? 'bg-white text-green-800' : 'text-white hover:bg-green-700'
                ]"
              >
                MyGwejh
              </a>
            </li>
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
