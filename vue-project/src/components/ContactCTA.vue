<template>
  <section class="bg-white py-12">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-10">
        <h2 class="text-2xl font-bold text-green-800">Ingin Menghubungi Kami?</h2>
        <p class="mt-1 text-gray-600"> Dapat menghubungi kami melalui cara yang tersedia di bawah ini!</p>
      </div>

      <!-- Get In Touch Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Developer Contact -->
        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 text-center transition border border-gray-100">
          <div class="flex h-11 w-11 mx-auto flex-none items-center justify-center rounded-lg bg-green-600 shadow-sm mb-4">
            <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900">Kontak Tim Pengembang</h3>
          <p class="mt-2 text-sm text-gray-600">Hubungi tim pengembang melalui email berikut:</p>
          <a href="mailto:11231028@student.itk.ac.id" class="mt-4 inline-block text-sm font-semibold text-green-600 hover:text-green-700">
            11231028@student.itk.ac.id
          </a>
        </div>

        <!-- Support -->
        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 text-center transition border border-gray-100">
          <div class="flex h-11 w-11 mx-auto flex-none items-center justify-center rounded-lg bg-green-600 shadow-sm mb-4">
            <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 19H18C16.8954 19 16 18.1046 16 17V15C16 13.8954 16.8954 13 18 13H20M20 19V13M20 19V19C20 20.6569 18.6569 22 17 22H11M4 13V17C4 18.1046 4.89543 19 6 19V19C7.10457 19 8 18.1046 8 17V15C8 13.8954 7.10457 13 6 13H4ZM4 13V10C4 5.58172 7.58172 2 12 2V2C16.4183 2 20 5.58172 20 10V13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900">Kontak Customer Service</h3>
          <p class="mt-2 text-sm text-gray-600">Hubungi tim customer service melalui email berikut:</p>
          <a href="mailto:support11231028@student.itk.ac.id" class="mt-4 inline-block text-sm font-semibold text-green-600 hover:text-green-700">
            support11231028@student.itk.ac.id
          </a>
        </div>

        <!-- Visit Us -->
        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 text-center transition border border-gray-100">
          <div class="flex h-11 w-11 mx-auto flex-none items-center justify-center rounded-lg bg-green-600 shadow-sm mb-4">
            <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900">Lokasi Kantor</h3>
          <p class="mt-2 text-sm text-gray-600">Kantor Pusat Ternak Balikpapan dapat dikunjungi di alamat berikut:</p>
          <a href="#" class="mt-4 inline-block text-sm font-semibold text-green-600 hover:text-green-700">
            Tunjukkan di Peta
          </a>
        </div>

        <!-- Call Us -->
        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 text-center transition border border-gray-100">
          <div class="flex h-11 w-11 mx-auto flex-none items-center justify-center rounded-lg bg-green-600 shadow-sm mb-4">
            <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900">Layanan Panggilan</h3>
          <p class="mt-2 text-sm text-gray-600">Layanan panggilan tersedia Senin - Jumat, 08:00 Pagi – 17:00 Sore</p>
          <a href="tel:+6254234753984" class="mt-4 inline-block text-sm font-semibold text-green-600 hover:text-green-700">
            +62 542-3475-3984
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
