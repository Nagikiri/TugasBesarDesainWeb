<script>
import heroImg from '@/assets/images/HeroImager.jpeg'

export default {
  data() {
    return {
      heroImg
    }
  }
}
</script>

<template>
<!-- Container -->
<div class="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl mb-12">

    <!-- Image Column -->
    <div class="w-full h-80 lg:w-1/2 lg:h-auto">
        <img class="h-full w-full object-cover" :src="heroImg" alt="Hero Image">
    </div>
    <!-- Close Image Column -->

    <!-- Text Column -->
    <div
        class="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:relative lg:w-3/5 lg:mr-8">
        <!-- Text Wrapper -->
        <div class="flex flex-col p-12 md:px-16">
            <h2 class="text-2xl font-medium uppercase text-green-800 lg:text-4xl">Ensiklopedia Hewan Ternak Lokal Balikpapan</h2>
            <p class="mt-4 text-justify">
                Selamat datang di Ensiklopedia Hewan Ternak Lokal Balikpapan! Jelajahi kekayaan hayati peternakan khas dari jantung Kalimantan Timur. Kami menghadirkan data lengkap mengenai Sapi Bali, Ayam Kampung Kalimantan, Itik Alabio, dan berbagai jenis ternak unggulan yang telah beradaptasi dan menjadi bagian penting dari ketahanan pangan serta budaya Balikpapan. Temukan karakteristik unik, potensi ekonomi, hingga peran ekologis mereka. Kenali, Lestarikan, dan Manfaatkan aset peternakan lokal kita!
            </p>
            <!-- Button Container -->
            <div class="mt-8">
                <a href="#"
                    class="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48">Read
                    More</a>
            </div>
        </div>
        <!-- Close Text Wrapper -->
    </div>
    <!-- Close Text Column -->

</div>
</template>