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
<div id="overview" class="w-full py-20 lg:py-28 bg-gradient-to-b from-white via-green-50/30 to-white">
	<div class="container mx-auto px-4 lg:px-8 max-w-7xl">	
		<div class="text-center mb-16">
			<h2 class="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
				Galeri <span class="text-emerald-600">Hewan Ternak</span> Unggulan
			</h2>
			<p class="text-lg lg:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
				Dokumentasi visual peternakan, produk, dan aktivitas peternak di Balikpapan. Temukan informasi lengkap mengenai setiap jenis hewan ternak lokal.
			</p>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">	
			<!-- Card 1: Ayam Petelur -->
			<div class="bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
				<div class="relative h-56 overflow-hidden">
					<img :src="ayamImg"
						 class="w-full h-full object-cover object-center rounded-t-3xl transition-transform duration-300 hover:scale-110" 
						 title="Ayam Petelur" 
						 alt="Ayam Petelur" />
					<div class="absolute z-20 bg-emerald-600 uppercase px-4 py-2 top-4 right-4 text-white text-xs font-bold rounded-full shadow-lg">
						#1 Terpopuler
					</div>
					<div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
				</div>
				<div class="p-6">
				<p class="text-xs uppercase tracking-wider text-emerald-600 font-bold mb-2">
					Hewan Ternak Unggulan
				</p>
				<h3 class="text-2xl font-bold text-gray-800 mb-3">
					<span class="text-emerald-600">Ayam</span> Petelur
				</h3>
				<p class="text-sm leading-relaxed text-gray-600 text-justify mb-4 line-clamp-3 hover:line-clamp-none transition-all duration-300">
					Ayam adalah salah satu unggas ternak yang paling banyak dibudidayakan di Balikpapan karena potensinya sebagai penghasil protein hewani yang efisien. Dari ayam pedaging yang cepat panen hingga ayam petelur dengan produksi konstan, setiap jenis memiliki keunggulan tersendiri.
				</p>
					<div class="flex items-center justify-between pt-4 border-t border-gray-100">
						<div class="flex flex-col">
							<span class="text-xs text-gray-500 mb-1">Harga Pasar</span>
							<span class="text-lg font-bold text-emerald-600">Rp 20.000/kg</span>
						</div>
						<div class="flex items-center space-x-1">
							<svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
								<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
							</svg>
							<span class="text-sm font-semibold text-gray-700">4.0</span>
						</div>
					</div>
				</div>
			</div>
			
			<!-- Card 2: Sapi Brahman -->
			<div class="bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
				<div class="relative h-56 overflow-hidden">
					<img :src="sapiImg"
						 class="w-full h-full object-cover object-center rounded-t-3xl transition-transform duration-300 hover:scale-110" 
						 title="Sapi Brahman" 
						 alt="Sapi Brahman" />
					<div class="absolute z-20 bg-emerald-600 uppercase px-4 py-2 top-4 right-4 text-white text-xs font-bold rounded-full shadow-lg">
						#2 Terpopuler
					</div>
					<div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
				</div>
				<div class="p-6">
				<p class="text-xs uppercase tracking-wider text-emerald-600 font-bold mb-2">
					Hewan Ternak Unggulan
				</p>
				<h3 class="text-2xl font-bold text-gray-800 mb-3">
					<span class="text-emerald-600">Sapi</span> Brahman
				</h3>
				<p class="text-sm leading-relaxed text-gray-600 text-justify mb-4 line-clamp-3 hover:line-clamp-none transition-all duration-300">
					Sapi Brahman (Bos indicus) adalah salah satu ras sapi potong yang sangat populer di Indonesia, dikenal karena kualitas dagingnya yang tinggi dan ketahanan adaptasinya terhadap iklim tropis. Berasal dari India, sapi ini telah berhasil dibudidayakan di Balikpapan.
				</p>
					<div class="flex items-center justify-between pt-4 border-t border-gray-100">
						<div class="flex flex-col">
							<span class="text-xs text-gray-500 mb-1">Harga Pasar</span>
							<span class="text-lg font-bold text-emerald-600">Rp 119.000/kg</span>
						</div>
						<div class="flex items-center space-x-1">
							<svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
								<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
							</svg>
							<span class="text-sm font-semibold text-gray-700">4.5</span>
						</div>
					</div>
				</div>
			</div>
			
			<!-- Card 3: Kambing Etawa -->
			<div class="bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
				<div class="relative h-56 overflow-hidden">
					<img :src="kambingImg"
						 class="w-full h-full object-cover object-center rounded-t-3xl transition-transform duration-300 hover:scale-110" 
						 title="Kambing Etawa" 
						 alt="Kambing Etawa" />
					<div class="absolute z-20 bg-emerald-600 uppercase px-4 py-2 top-4 right-4 text-white text-xs font-bold rounded-full shadow-lg">
						#3 Terpopuler
					</div>
					<div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
				</div>
				<div class="p-6">
				<p class="text-xs uppercase tracking-wider text-emerald-600 font-bold mb-2">
					Hewan Ternak Unggulan
				</p>
				<h3 class="text-2xl font-bold text-gray-800 mb-3">
					<span class="text-emerald-600">Kambing</span> Etawa
				</h3>
				<p class="text-sm leading-relaxed text-gray-600 text-justify mb-4 line-clamp-3 hover:line-clamp-none transition-all duration-300">
					Kambing Etawa (Capra aegagrus hircus) adalah salah satu jenis kambing dwi-fungsi yang populer di Indonesia, dikenal sebagai penghasil susu dan daging berkualitas. Ras ini berasal dari India dan kini banyak dibudidayakan di Balikpapan karena kemampuannya beradaptasi dengan iklim tropis.
				</p>
					<div class="flex items-center justify-between pt-4 border-t border-gray-100">
						<div class="flex flex-col">
							<span class="text-xs text-gray-500 mb-1">Harga Pasar</span>
							<span class="text-lg font-bold text-emerald-600">Rp 149.000/kg</span>
						</div>
						<div class="flex items-center space-x-1">
							<svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
								<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
							</svg>
							<span class="text-sm font-semibold text-gray-700">5.0</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>