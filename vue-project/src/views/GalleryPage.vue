<script setup>
import { ref } from 'vue';
import Navbar from '@/components/Navbar.vue';
import GalleryHero from '@/components/GalleryHero.vue';
import GallerySearchBar from '@/components/GallerySearchBar.vue';
import GalleryGrid from '@/components/GalleryGrid.vue';
import Footer from '@/components/Footer.vue';

const searchQuery = ref('');

const handleSearch = (query) => {
  searchQuery.value = query;
};
</script>

<template>
  <Navbar/>
  <GalleryHero/>
  <GallerySearchBar @search="handleSearch"/>
  <GalleryGrid :search-query="searchQuery"/>
  <Footer/>
</template>