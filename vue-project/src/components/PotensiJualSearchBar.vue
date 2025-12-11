<script setup>
import { ref, computed } from 'vue';

const emit = defineEmits(['search']);

const searchQuery = ref('');
const showSuggestions = ref(false);

// Data komoditas yang bisa dicari
const komoditas = [
  { name: 'Ayam Petelur', keywords: ['ayam', 'chicken', 'petelur', 'unggas'] },
  { name: 'Sapi Brahman', keywords: ['sapi', 'cattle', 'beef', 'brahman'] },
  { name: 'Kambing Etawa', keywords: ['kambing', 'goat', 'etawa', 'susu'] },
  { name: 'Bebek Petelur', keywords: ['bebek', 'duck', 'petelur', 'telur'] },
  { name: 'Kelinci Pedaging', keywords: ['kelinci', 'rabbit', 'pedaging', 'daging'] },
  { name: 'Domba Garut', keywords: ['domba', 'sheep', 'garut', 'qurban', 'kurban'] },
  { name: 'Telur Ayam', keywords: ['telur', 'ayam', 'egg', 'chicken'] },
  { name: 'Telur Bebek', keywords: ['telur', 'bebek', 'egg', 'duck'] },
  { name: 'Susu Sapi', keywords: ['susu', 'sapi', 'milk', 'cattle'] },
  { name: 'Susu Kambing', keywords: ['susu', 'kambing', 'milk', 'goat'] },
  { name: 'Daging Sapi', keywords: ['daging', 'sapi', 'meat', 'beef'] },
  { name: 'Daging Kelinci', keywords: ['daging', 'kelinci', 'meat', 'rabbit'] },
  { name: 'Daging Domba', keywords: ['daging', 'domba', 'meat', 'sheep'] }
];

// Filter komoditas berdasarkan search query
const filteredKomoditas = computed(() => {
  if (!searchQuery.value) return [];
  
  const query = searchQuery.value.toLowerCase();
  return komoditas.filter(item => 
    item.keywords.some(keyword => keyword.includes(query))
  );
});

// Handle search input
const handleSearch = () => {
  showSuggestions.value = true;
  emit('search', searchQuery.value);
  
  // Scroll ke komoditas section
  setTimeout(() => {
    const section = document.getElementById('komoditas-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 100);
};

const handleInput = () => {
  showSuggestions.value = true;
  emit('search', searchQuery.value);
};

const selectKomoditas = (item) => {
  searchQuery.value = item.name;
  emit('search', item.name);
  showSuggestions.value = false;
  
  setTimeout(() => {
    const section = document.getElementById('komoditas-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 100);
};
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 py-8">
    <!-- Search Bar -->
    <div class="max-w-2xl mx-auto relative">
      <div class="relative">
        <input
          v-model="searchQuery"
          @input="handleInput"
          @focus="showSuggestions = true"
          @keypress.enter="handleSearch"
          type="text"
          placeholder="Cari komoditas (bebek, kelinci, domba, telur, susu, daging)..."
          class="w-full border-2 border-gray-300 rounded-full px-6 py-4 pr-12 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent shadow-lg"
        />
        <svg 
          class="absolute right-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      </div>

      <!-- Suggestions Dropdown -->
      <div 
        v-if="showSuggestions && filteredKomoditas.length > 0"
        class="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden"
      >
        <div
          v-for="item in filteredKomoditas"
          :key="item.name"
          @click="selectKomoditas(item)"
          class="flex items-center justify-between px-6 py-4 hover:bg-green-50 cursor-pointer transition border-b border-gray-100 last:border-0"
        >
          <div class="flex-1">
            <h4 class="font-semibold text-gray-900">{{ item.name }}</h4>
          </div>
          <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </div>
      </div>

      <!-- No Results -->
      <div 
        v-if="showSuggestions && searchQuery && filteredKomoditas.length === 0"
        class="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-6 text-center"
      >
        <p class="text-gray-600">Tidak ada hasil untuk "{{ searchQuery }}"</p>
        <p class="text-sm text-gray-500 mt-1">Coba: bebek, kelinci, domba, telur, susu, atau daging</p>
      </div>
    </div>
  </div>
</template>
