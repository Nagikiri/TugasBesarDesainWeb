<script setup>
import { ref, computed } from 'vue';

const emit = defineEmits(['search']);

const searchQuery = ref('');
const showSuggestions = ref(false);

// Data items yang bisa dicari
const items = [
  { name: 'Ayam Petelur', type: 'HEWAN', keywords: ['ayam', 'petelur', 'unggas', 'chicken'] },
  { name: 'Sapi Brahman', type: 'HEWAN', keywords: ['sapi', 'brahman', 'daging', 'beef', 'cattle'] },
  { name: 'Kambing Etawa', type: 'HEWAN', keywords: ['kambing', 'etawa', 'goat', 'susu'] },
  { name: 'Telur Ayam Kampung', type: 'PRODUK', keywords: ['telur', 'ayam', 'egg', 'kampung'] },
  { name: 'Susu Kambing', type: 'PRODUK', keywords: ['susu', 'kambing', 'milk', 'etawa'] },
  { name: 'Daging Sapi', type: 'PRODUK', keywords: ['daging', 'sapi', 'beef', 'meat'] }
];

// Filter items berdasarkan search query
const filteredItems = computed(() => {
  if (!searchQuery.value) return [];
  
  const query = searchQuery.value.toLowerCase();
  return items.filter(item => 
    item.keywords.some(keyword => keyword.includes(query))
  );
});

// Handle search input
const handleSearch = () => {
  showSuggestions.value = true;
  emit('search', searchQuery.value);
  
  // Scroll ke gallery section
  setTimeout(() => {
    const section = document.getElementById('gallery-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 100);
};

const handleInput = () => {
  showSuggestions.value = true;
  emit('search', searchQuery.value);
};

const selectItem = (item) => {
  searchQuery.value = item.name;
  emit('search', item.name);
  showSuggestions.value = false;
  
  setTimeout(() => {
    const section = document.getElementById('gallery-section');
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
          placeholder="Cari hewan atau produk (ayam, sapi, kambing, telur, susu, daging)..."
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
        v-if="showSuggestions && filteredItems.length > 0"
        class="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden"
      >
        <div
          v-for="item in filteredItems"
          :key="item.name"
          @click="selectItem(item)"
          class="flex items-center justify-between px-6 py-4 hover:bg-green-50 cursor-pointer transition border-b border-gray-100 last:border-0"
        >
          <div class="flex-1">
            <h4 class="font-semibold text-gray-900">{{ item.name }}</h4>
            <p class="text-sm text-gray-600">{{ item.type }}</p>
          </div>
          <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </div>
      </div>

      <!-- No Results -->
      <div 
        v-if="showSuggestions && searchQuery && filteredItems.length === 0"
        class="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-6 text-center"
      >
        <p class="text-gray-600">Tidak ada hasil untuk "{{ searchQuery }}"</p>
        <p class="text-sm text-gray-500 mt-1">Coba: ayam, sapi, kambing, telur, susu, atau daging</p>
      </div>
    </div>
  </div>
</template>
