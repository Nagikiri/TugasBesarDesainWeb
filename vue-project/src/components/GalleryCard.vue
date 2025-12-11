<template>
  <router-link 
    :to="`/gallery/${itemId}`"
    class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl group cursor-pointer transition-transform duration-300 hover:scale-105 h-80 block"
  >
    <img :src="image" :alt="title" class="absolute inset-0 h-full w-full object-cover">
    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 group-hover:from-black/80 group-hover:via-black/50 transition-all duration-300"></div>
    <div class="relative z-10 p-6">
      <span v-if="tag" class="inline-block px-3 py-1 mb-2 text-xs font-semibold text-white bg-green-600 rounded-full">{{ tag }}</span>
      <h3 class="text-2xl font-bold text-white">{{ title }}</h3>
      <p class="mt-2 text-sm leading-6 text-gray-200">{{ description }}</p>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  description: String,
  tag: String,
  itemId: {
    type: String,
    required: true
  }
});
</script>