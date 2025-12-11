<template>
  <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
    <div class="relative h-64 overflow-hidden">
      <img 
        :src="image" 
        :alt="title"
        class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <h3 class="absolute bottom-4 left-4 text-white text-2xl font-bold">{{ title }}</h3>
    </div>
    
    <div class="p-6">
      <p class="text-gray-600 text-sm mb-4 line-clamp-3">{{ description }}</p>
      
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2 text-emerald-600">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
          </svg>
          <span class="text-sm font-medium">Panduan Lengkap</span>
        </div>
        
        <button 
          @click="$emit('navigate')"
          class="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center gap-2"
        >
          Selengkapnya
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

defineEmits(['navigate']);
</script>
