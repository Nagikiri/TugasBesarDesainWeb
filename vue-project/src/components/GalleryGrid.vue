<script setup>
import { ref, computed } from 'vue';
import GalleryCard from '@/components/GalleryCard.vue';
import ayamImage from '@/assets/images/AyamGallery.webp';
import sapiImage from '@/assets/images/SapiGallery.jpeg';
import kambingImage from '@/assets/images/KambingGallery.webp';
import telurImage from '@/assets/images/Telur.jpg';
import susuImage from '@/assets/images/Susu.jpg';
import dagingImage from '@/assets/images/Daging.jpg';

const props = defineProps({
  searchQuery: {
    type: String,
    default: ''
  }
});

// Data semua item
const allItems = [
  {
    id: 'ayam',
    image: ayamImage,
    title: 'Ayam Petelur',
    description: 'Ayam ini sangat produktif dengan telur berkualitas',
    tag: 'HEWAN',
    type: 'hewan'
  },
  {
    id: 'sapi',
    image: sapiImage,
    title: 'Sapi Brahman',
    description: 'Sapi dengan daging berkualitas tinggi',
    tag: 'HEWAN',
    type: 'hewan'
  },
  {
    id: 'kambing',
    image: kambingImage,
    title: 'Kambing Etawa',
    description: 'Kambing dengan produksi susu tinggi',
    tag: 'HEWAN',
    type: 'hewan'
  },
  {
    id: 'telur',
    image: telurImage,
    title: 'Telur Ayam Kampung',
    description: 'Telur segar berkualitas tinggi',
    tag: 'PRODUK',
    type: 'produk'
  },
  {
    id: 'susu',
    image: susuImage,
    title: 'Susu Kambing',
    description: 'Susu segar dari peternakan lokal',
    tag: 'PRODUK',
    type: 'produk'
  },
  {
    id: 'daging',
    image: dagingImage,
    title: 'Daging Sapi',
    description: 'Daging sapi segar berkualitas premium',
    tag: 'PRODUK',
    type: 'produk'
  }
];

// Filter berdasarkan search query
const filteredItems = computed(() => {
  if (!props.searchQuery) return allItems;
  
  const query = props.searchQuery.toLowerCase();
  return allItems.filter(item => 
    item.title.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query) ||
    item.tag.toLowerCase().includes(query)
  );
});

const hewanItems = computed(() => filteredItems.value.filter(item => item.type === 'hewan'));
const produkItems = computed(() => filteredItems.value.filter(item => item.type === 'produk'));
</script>

<template>  
  <div id="gallery-section" class="bg-green-50/30 py-12">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Hasil Pencarian -->
      <div v-if="searchQuery" class="mb-8 text-center">
        <p class="text-gray-600">
          Menampilkan {{ filteredItems.length }} hasil untuk "<span class="font-semibold text-green-600">{{ searchQuery }}</span>"
        </p>
      </div>

      <!-- Pesan jika tidak ada hasil -->
      <div v-if="filteredItems.length === 0" class="text-center py-16">
        <svg class="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Tidak ada hasil ditemukan</h3>
        <p class="text-gray-600">Coba kata kunci lain atau lihat semua koleksi</p>
      </div>

      <!-- Section: Hewan Terpopuler -->
      <div v-if="hewanItems.length > 0" class="mb-16">
        <div class="text-center mb-8">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Hewan Terpopuler</h2>
          <p class="mt-2 text-gray-600">Dokumentasi hewan ternak unggulan di Balikpapan</p>
        </div>
        
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <GalleryCard 
            v-for="item in hewanItems"
            :key="item.id"
            :item-id="item.id"
            :image="item.image"
            :title="item.title"
            :description="item.description"
            :tag="item.tag"
          />
        </div>
      </div>

      <!-- Section: Produk Terpopuler -->
      <div v-if="produkItems.length > 0">
        <div class="text-center mb-8">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Produk Terpopuler</h2>
          <p class="mt-2 text-gray-600">Hasil produksi berkualitas dari peternak lokal</p>
        </div>
        
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <GalleryCard 
            v-for="item in produkItems"
            :key="item.id"
            :item-id="item.id"
            :image="item.image"
            :title="item.title"
            :description="item.description"
            :tag="item.tag"
          />
        </div>
      </div>

    </div>
  </div>
</template>
