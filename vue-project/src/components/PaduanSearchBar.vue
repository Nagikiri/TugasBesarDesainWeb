<template>
  <div class="max-w-7xl mx-auto px-6 py-8">
    <!-- Search Bar -->
    <div class="max-w-2xl mx-auto relative">
      <div class="relative">
        <input
          v-model="searchQuery"
          @input="handleSearch"
          @focus="showSuggestions = true"
          type="text"
          placeholder="Cari panduan ternak (sapi, kambing, ayam, bebek, kelinci, domba)..."
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
        v-if="showSuggestions && filteredAnimals.length > 0"
        class="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden"
      >
        <div
          v-for="animal in filteredAnimals"
          :key="animal.name"
          @click="selectAnimal(animal)"
          class="flex items-center gap-4 px-6 py-4 hover:bg-green-50 cursor-pointer transition border-b border-gray-100 last:border-0"
        >
          <img :src="animal.image" :alt="animal.name" class="w-16 h-16 object-cover rounded-lg" />
          <div class="flex-1">
            <h4 class="font-semibold text-gray-900">{{ animal.name }}</h4>
            <p class="text-sm text-gray-600">{{ animal.description }}</p>
          </div>
          <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </div>
      </div>

      <!-- No Results -->
      <div 
        v-if="showSuggestions && searchQuery && filteredAnimals.length === 0"
        class="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-6 text-center"
      >
        <p class="text-gray-600">Tidak ada hasil untuk "{{ searchQuery }}"</p>
        <p class="text-sm text-gray-500 mt-1">Coba: sapi, kambing, ayam, bebek, kelinci, atau domba</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

// Import images
import sapiImage from '@/assets/images/SapiPaduan.webp';
import kambingImage from '@/assets/images/KambingPaduan.webp';
import ayamImage from '@/assets/images/AyamPaduan.webp';
import bebekImage from '@/assets/images/Bebek.jpeg';
import kelinciImage from '@/assets/images/Kelinci.jpg';
import dombaImage from '@/assets/images/Domba.jpeg';

const router = useRouter();
const searchQuery = ref('');
const showSuggestions = ref(false);

// Data hewan ternak
const animals = [
  {
    name: 'Sapi',
    description: 'Panduan lengkap beternak sapi pedaging dan perah',
    image: sapiImage,
    route: '/paduan/sapi',
    keywords: ['sapi', 'cattle', 'cow', 'lembu', 'brahman', 'limosin', 'simmental']
  },
  {
    name: 'Kambing',
    description: 'Panduan lengkap beternak kambing etawa dan kacang',
    image: kambingImage,
    route: '/paduan/kambing',
    keywords: ['kambing', 'goat', 'etawa', 'kacang', 'boer']
  },
  {
    name: 'Ayam',
    description: 'Panduan lengkap beternak ayam broiler dan layer',
    image: ayamImage,
    route: '/paduan/ayam',
    keywords: ['ayam', 'chicken', 'broiler', 'layer', 'petelur', 'pedaging']
  },
  {
    name: 'Bebek',
    description: 'Panduan lengkap beternak bebek petelur',
    image: bebekImage,
    route: '/paduan/bebek',
    keywords: ['bebek', 'duck', 'itik', 'petelur', 'pedaging']
  },
  {
    name: 'Kelinci',
    description: 'Panduan lengkap beternak kelinci pedaging',
    image: kelinciImage,
    route: '/paduan/kelinci',
    keywords: ['kelinci', 'rabbit', 'bunny']
  },
  {
    name: 'Domba',
    description: 'Panduan lengkap beternak domba pedaging',
    image: dombaImage,
    route: '/paduan/domba',
    keywords: ['domba', 'sheep', 'kurban', 'qurban']
  }
];

// Filter animals berdasarkan search query
const filteredAnimals = computed(() => {
  if (!searchQuery.value) return [];
  
  const query = searchQuery.value.toLowerCase();
  return animals.filter(animal => 
    animal.keywords.some(keyword => keyword.includes(query))
  );
});

const emit = defineEmits(['search']);

// Handle search input
const handleSearch = () => {
  showSuggestions.value = true;
  emit('search', searchQuery.value);
};

const handleInput = () => {
  showSuggestions.value = true;
  emit('search', searchQuery.value);
};

// Select animal dari suggestion
const selectAnimal = (animal) => {
  router.push(animal.route);
  searchQuery.value = '';
  showSuggestions.value = false;
};

// Close suggestions when clicking outside
const handleClickOutside = (event) => {
  const target = event.target;
  if (!target.closest('.relative')) {
    showSuggestions.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>