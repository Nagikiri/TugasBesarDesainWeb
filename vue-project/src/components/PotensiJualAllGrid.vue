<script setup>
import { computed } from 'vue';
import ayamImage from '@/assets/images/Ayam.jpg';
import sapiImage from '@/assets/images/Sapi.webp';
import kambingImage from '@/assets/images/Kambing.webp';
import bebekImage from '@/assets/images/Bebek.jpeg';
import kelinciImage from '@/assets/images/Kelinci.jpg';
import dombaImage from '@/assets/images/Domba.jpeg';
import telurAyamImage from '@/assets/images/Telur.jpg';
import telurBebekImage from '@/assets/images/TelurBebek.jpeg';
import susuSapiImage from '@/assets/images/Susu.jpg';
import susuKambingImage from '@/assets/images/SusuKambing.jpeg';
import dagingSapiImage from '@/assets/images/Daging.jpg';
import dagingKelinciImage from '@/assets/images/DagingKelinci.jpeg';
import dagingDombaImage from '@/assets/images/DagingDomba.jpeg';

const props = defineProps({
  searchQuery: {
    type: String,
    default: ''
  }
});

const allKomoditas = [
  // Hewan Original
  { name: 'Ayam Petelur', price: 'Rp 45.000/kg', trend: '↑ Naik 12%', trendColor: 'green', region: 'Balikpapan Utara', image: ayamImage },
  { name: 'Sapi Brahman', price: 'Rp 95.000/kg', trend: '↑ Naik 8%', trendColor: 'green', region: 'Balikpapan Selatan', image: sapiImage },
  { name: 'Kambing Etawa', price: 'Rp 75.000/kg', trend: '↑ Naik 15%', trendColor: 'green', region: 'Balikpapan Barat', image: kambingImage },
  
  // Hewan Baru
  { name: 'Bebek Petelur', price: 'Rp 52.000/kg', trend: '↑ Naik 14%', trendColor: 'green', region: 'Balikpapan Utara', image: bebekImage },
  { name: 'Kelinci Pedaging', price: 'Rp 65.000/kg', trend: '↑ Naik 18%', trendColor: 'green', region: 'Balikpapan Selatan', image: kelinciImage },
  { name: 'Domba Garut', price: 'Rp 85.000/kg', trend: '↑ Naik 16%', trendColor: 'green', region: 'Balikpapan Barat', image: dombaImage },
  
  // Produk
  { name: 'Telur Ayam', price: 'Rp 28.000/kg', trend: '↓ Turun 3%', trendColor: 'red', region: 'Balikpapan Timur', image: telurAyamImage },
  { name: 'Telur Bebek', price: 'Rp 32.000/kg', trend: '↑ Naik 9%', trendColor: 'green', region: 'Balikpapan Timur', image: telurBebekImage },
  { name: 'Susu Sapi', price: 'Rp 12.000/liter', trend: '↑ Naik 5%', trendColor: 'green', region: 'Balikpapan Tengah', image: susuSapiImage },
  { name: 'Susu Kambing', price: 'Rp 18.000/liter', trend: '↑ Naik 10%', trendColor: 'green', region: 'Balikpapan Tengah', image: susuKambingImage },
  { name: 'Daging Sapi', price: 'Rp 120.000/kg', trend: '↑ Naik 10%', trendColor: 'green', region: 'Balikpapan Utara', image: dagingSapiImage },
  { name: 'Daging Kelinci', price: 'Rp 75.000/kg', trend: '↑ Naik 13%', trendColor: 'green', region: 'Balikpapan Utara', image: dagingKelinciImage },
  { name: 'Daging Domba', price: 'Rp 90.000/kg', trend: '↑ Naik 12%', trendColor: 'green', region: 'Balikpapan Selatan', image: dagingDombaImage },
];

// Filter berdasarkan search query
const filteredKomoditas = computed(() => {
  if (!props.searchQuery) {
    return allKomoditas;
  }
  
  const query = props.searchQuery.toLowerCase();
  return allKomoditas.filter(item => 
    item.name.toLowerCase().includes(query) ||
    item.region.toLowerCase().includes(query)
  );
});
</script>

<template>
  <div id="komoditas-section" class="bg-gray-50 py-12">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Section Title -->
      <div class="text-center mb-8">
        <h2 class="text-2xl font-bold text-green-800">Daftar Semua Komoditas</h2>
        <p class="mt-1 text-gray-600">Koleksi lengkap komoditas ternak di Balikpapan</p>
      </div>

      <!-- Search Result Info -->
      <div v-if="searchQuery" class="text-center mb-6">
        <p class="text-gray-600">
          Menampilkan <span class="font-semibold text-green-600">{{ filteredKomoditas.length }}</span> 
          hasil untuk "<span class="font-semibold text-green-600">{{ searchQuery }}</span>"
        </p>
      </div>

      <!-- Empty State -->
      <div v-if="filteredKomoditas.length === 0" class="text-center py-16">
        <svg class="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Tidak ada hasil ditemukan</h3>
        <p class="text-gray-600">Coba kata kunci lain atau lihat semua koleksi</p>
      </div>

      <!-- Grid All Komoditas -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(item, index) in filteredKomoditas" 
          :key="index"
          class="rounded-lg bg-white shadow-sm hover:shadow-lg transition transform hover:scale-105 overflow-hidden border border-gray-100"
        >
          <img :src="item.image" :alt="item.name" class="w-full h-44 object-cover" />
          <div class="p-4">
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ item.name }}</h3>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-600">Harga Rata-rata:</span>
                <span class="font-semibold text-gray-900">{{ item.price }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Lokasi Utama:</span>
                <span class="font-semibold text-gray-900">{{ item.region }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Tren:</span>
                <span 
                  :class="[
                    'px-2 py-1 rounded text-xs font-semibold',
                    item.trendColor === 'green' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  ]"
                >
                  {{ item.trend }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
