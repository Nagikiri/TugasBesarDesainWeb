<script>
import ayamImg from '@/assets/images/Ayam.jpg'
import sapiImg from '@/assets/images/Sapi.webp'
import kambingImg from '@/assets/images/Kambing.webp'

export default {
  data() {
    return {
      ayamImg,
      sapiImg,
      kambingImg
    }
  }
}
</script>

<template>
<div class="w-full flex flex-col md:flex-row py-24 dark:bg-gray-800">
	<div class="flex flex-col w-[90%] lg:w-4/5 2xl:w-3/5 mx-auto">	
		<div class="w-full md:w-4/5 md:mx-auto text-center pt-3 px-4 md:!px-0">
			<h1 class="text-3xl mt-2 md:text-4xl font-semibold text-gray-800">
			The <span class="text-emerald-600"> Galeri Ternak</span> component
			</h1>
			<p class="text-xl font-thin mb-4 line-clamp-4 mt-4 md:line-clamp-none text-gray-500">
				Dokumentasi visual peternakan, produk, dan aktivitas peternak di Balikpapan. Klik pada gambar hewan untuk melihat informasi lengkap.
			</p>
		</div>
		<div class="flex flex-col md:flex-row w-full">	
			<div class="basis-1/3 w-full border border-gray-100 dark:!border-gray-600 rounded-md pr-0 md:mr-4 mt-6">
				<div class="flex flex-col relative h-80 overflow-hidden">
					<img :src="ayamImg"
						 class="w-full h-full object-cover object-center" title="Ayam Petelur" alt="Ayam Petelur" />
					<div class="absolute z-20 bg-emerald-600 uppercase px-3 py-1 top-3 right-3 text-white text-sm">Hewan Ternak Terpopuler ke #1</div>
				</div>
				<div class="flex flex-col px-4">
					<p class="text-sm mt-3 text-gray-300 dark:text-gray-600 font-semibold">
						Hewan Ternak
					</p>
					<h1 class="text-2xl my-2 md:text-3xl font-bold text-gray-600 ">
						<span class="text-emerald-600"> Ayam </span> Petelur
					</h1>
					<p class="text-sm mb-3 line-clamp-3 hover:line-clamp-none text-gray-500 text-justify">
						Ayam adalah salah satu unggas ternak yang paling banyak dibudidayakan di Balikpapan karena potensinya sebagai penghasil protein hewani yang efisien. Dari ayam pedaging yang cepat panen hingga ayam petelur dengan produksi konstan, setiap jenis memiliki keunggulan tersendiri. Memahami manajemen pakan dan kandang yang tepat adalah kunci utama untuk mencapai produktivitas maksimal di wilayah tropis
					</p>
				</div>
				<div class="flex flex-row py-3 px-4 border-t border-gray-100 dark:!border-gray-600">
					<div class="w-1/2 flex flex-row dark:text-gray-400">
						<span class="mr-1">Rp</span>
						<span>20.000 ¬ Per kg</span>
					</div>
					<div class="w-1/2 text-yellow-400 text-right font-semibold">
						☆☆☆☆<span class="text-gray-500 font-normal">☆</span>
					</div>
				</div>
			</div>	
			<div class="basis-1/3 w-full border border-gray-100 dark:!border-gray-600 rounded-md pr-0 md:mx-4 mt-6">
				<div class="flex flex-col relative h-80 overflow-hidden">
					<img :src="sapiImg"
						 class="w-full h-full object-cover object-center" title="Sapi Brahman" alt="Sapi Brahman" />
					<div class="absolute z-20 bg-emerald-600 uppercase px-3 py-1 top-3 right-3 text-white text-sm">Hewan Ternak Terpopuler ke #2</div>
				</div>
				<div class="flex flex-col px-4">
					<p class="text-sm mt-3 text-gray-300 dark:text-gray-600 font-semibold">
						Hewan Ternak
					</p>
					<h1 class="text-2xl my-2 md:text-3xl font-bold text-gray-600 ">
						<span class="text-emerald-600">Sapi</span> Brahman
					</h1>
					<p class="text-sm mb-3 line-clamp-3 hover:line-clamp-none text-gray-500 text-justify">
						Sapi Brahman (Bos indicus) adalah salah satu ras sapi potong yang sangat populer di Indonesia, dikenal karena kualitas dagingnya yang tinggi dan ketahanan adaptasinya terhadap iklim tropis.  Berasal dari India, sapi Brahman telah berhasil dibudidayakan di Balikpapan dan menjadi pilihan favorit peternak karena performanya yang unggul.
					</p>
				</div>
				<div class="flex flex-row py-3 px-4 border-t border-gray-100 dark:!border-gray-600">
					<div class="basis-1/2 flex flex-row dark:text-gray-400">
						<span class="mr-1">Rp</span>
						<span>119.000 ¬ Daging Per Kg</span>
					</div>
					<div class="basis-1/2 text-yellow-400 text-end font-semibold">
						☆☆☆<span class="text-gray-500 font-normal">☆☆</span>
					</div>
				</div>
			</div>
			<div class="basis-1/3 w-full border border-gray-100 dark:!border-gray-600 rounded-md pr-0 md:ml-4 mt-6">
				<div class="flex flex-col relative h-80 overflow-hidden">
					<img :src="kambingImg"
						 class="w-full h-full object-cover object-center" title="Kambing Etawa" alt="Kambing Etawa" />
					<div class="absolute z-20 bg-emerald-600 uppercase px-3 py-1 top-3 right-3 text-white text-sm">Hewan Ternak Terpopuler ke #3</div>
				</div>
				<div class="flex flex-col px-4">
					<p class="text-sm mt-3 text-gray-300 dark:text-gray-600 font-semibold">
						Hewan Ternak
					</p>
					<h1 class="text-2xl my-2 md:text-3xl font-bold text-gray-600 ">
						<span class="text-emerald-600">Kambing</span> Etawa
					</h1>
					<p class="text-sm mb-3 line-clamp-3 hover:line-clamp-none text-gray-500 text-justify">
						Kambing Etawa (Capra aegagrus hircus) adalah salah satu jenis kambing dwi-fungsi yang populer di Indonesia, dikenal sebagai penghasil susu dan daging berkualitas. Ras ini berasal dari India dan kini banyak dibudidayakan di Balikpapan karena kemampuannya beradaptasi dengan iklim tropis.
					</p>
				</div>
				<div class="flex flex-row py-3 px-4 border-t border-gray-100 dark:!border-gray-600">
					<div class="w-1/2 flex flex-row dark:text-gray-400">
						<span class="mr-1">Rp</span>
						<span>149.000 ¬ Daging Per Kg</span>
					</div>
					<div class="w-1/2 text-yellow-400 text-end font-semibold">
						☆☆☆☆☆
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>