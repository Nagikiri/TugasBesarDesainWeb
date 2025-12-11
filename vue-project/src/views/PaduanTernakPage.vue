<script setup>
import { ref } from 'vue';
import Navbar from '@/components/Navbar.vue';
import PanduanHero from '@/components/PanduanHero.vue';
import PaduanSearchBar from '@/components/PaduanSearchBar.vue';
import PaduanList from '@/components/PaduanList.vue';
import Footer from '@/components/Footer.vue';

const searchQuery = ref('');

const handleSearch = (query) => {
  searchQuery.value = query;
};
</script>

<template>
  <Navbar/>
  <PanduanHero/>
  <PaduanSearchBar @search="handleSearch" />
  <PaduanList :search-query="searchQuery" />
  <Footer/>
</template>