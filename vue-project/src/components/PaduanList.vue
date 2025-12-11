<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import PaduanCardComponent from './PaduanCard.vue';
import ayamImage from '@/assets/images/AyamPaduan.webp';
import sapiImage from '@/assets/images/SapiPaduan.webp';
import kambingImage from '@/assets/images/KambingPaduan.webp';
import bebekImage from '@/assets/images/Bebek.jpeg';
import kelinciImage from '@/assets/images/Kelinci.jpg';
import dombaImage from '@/assets/images/Domba.jpeg';

const router = useRouter();

const props = defineProps({
  searchQuery: {
    type: String,
    default: ''
  }
});

const navigateTo = (route) => {
  router.push(route);
};

const allPanduan = [
  { id: 'ayam', title: 'Panduan Ternak Ayam', image: ayamImage, keywords: ['ayam', 'chicken', 'unggas', 'petelur', 'broiler'], route: '/paduan/ayam', terpopuler: true },
  { id: 'sapi', title: 'Panduan Ternak Sapi', image: sapiImage, keywords: ['sapi', 'cattle', 'beef', 'brahman'], route: '/paduan/sapi', terpopuler: true },
  { id: 'kambing', title: 'Panduan Ternak Kambing', image: kambingImage, keywords: ['kambing', 'goat', 'etawa'], route: '/paduan/kambing', terpopuler: true },
  { id: 'bebek', title: 'Panduan Ternak Bebek', image: bebekImage, keywords: ['bebek', 'duck', 'itik'], route: '/paduan/bebek', terpopuler: false },
  { id: 'kelinci', title: 'Panduan Ternak Kelinci', image: kelinciImage, keywords: ['kelinci', 'rabbit'], route: '/paduan/kelinci', terpopuler: false },
  { id: 'domba', title: 'Panduan Ternak Domba', image: dombaImage, keywords: ['domba', 'sheep'], route: '/paduan/domba', terpopuler: false }
];

const filteredPanduan = computed(() => {
  if (!props.searchQuery) return allPanduan;
  
  const query = props.searchQuery.toLowerCase();
  return allPanduan.filter(item => 
    item.keywords.some(keyword => keyword.includes(query))
  );
});

const terpopulerItems = computed(() => filteredPanduan.value.filter(item => item.terpopuler));
const lainnyaItems = computed(() => filteredPanduan.value.filter(item => !item.terpopuler));
</script>

<template>
  <div id="panduan-section" class="relative bg-white py-12">
    <!-- Decorative green accents -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Search Result Info -->
      <div v-if="searchQuery" class="text-center mb-8">
        <p class="text-gray-700">
          Ditemukan <span class="font-bold text-green-700">{{ filteredPanduan.length }}</span> 
          panduan untuk pencarian "<span class="font-semibold">{{ searchQuery }}</span>"
        </p>
      </div>

      <!-- Empty State -->
      <div v-if="filteredPanduan.length === 0" class="text-center py-12">
        <svg class="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="text-gray-500 text-lg">Panduan tidak ditemukan</p>
        <p class="text-gray-400 text-sm mt-2">Coba gunakan kata kunci lain</p>
      </div>
      
      <!-- Section: Panduan Terpopuler -->
      <div v-if="terpopulerItems.length > 0" class="mb-16">
        <div class="text-center mb-8">
          <h2 class="text-2xl md:text-3xl font-bold text-green-800">Panduan Terpopuler</h2>
          <p class="mt-1 text-gray-600">Panduan pilihan untuk memulai beternak</p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <PaduanCardComponent 
            v-for="item in terpopulerItems"
            :key="item.id"
            :image="item.image"
            :title="item.title"
            description="Teknik beternak modern dengan panduan lengkap dari pemilihan bibit hingga pemasaran."
            @navigate="navigateTo(item.route)"
          />
        </div>
      </div>

      <!-- Section: Panduan Lainnya -->
      <div v-if="lainnyaItems.length > 0">
        <div class="text-center mb-8">
          <h2 class="text-2xl md:text-3xl font-bold text-green-800">Panduan Lainnya</h2>
          <p class="mt-1 text-gray-600">Koleksi lengkap panduan ternak</p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <PaduanCardComponent 
            v-for="item in lainnyaItems"
            :key="item.id"
            :image="item.image"
            :title="item.title"
            description="Panduan lengkap beternak dengan tips dan trik untuk pemula hingga profesional."
            @navigate="navigateTo(item.route)"
          />
        </div>
      </div>

    </div>
  </div>
</template>
