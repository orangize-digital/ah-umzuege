<template>
  <section class="bg-gradient-to-br from-orange-50 to-amber-50 py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Über <span class="text-orange-600">A.H Entrümpelung & Umzüge</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            Seit über 15 Jahren sind wir Ihr vertrauensvoller Partner für Umzüge und Transporte in ganz Deutschland. 
            Mit Erfahrung, Professionalität und einem persönlichen Service machen wir Ihren Umzug stressfrei.
          </p>
          <div class="flex flex-wrap gap-6">
            <div class="flex items-center">
              <CheckCircleIcon class="h-6 w-6 text-orange-600 mr-2" />
              <span class="text-gray-700 font-medium">15+ Jahre Erfahrung</span>
            </div>
            <div class="flex items-center">
              <CheckCircleIcon class="h-6 w-6 text-orange-600 mr-2" />
              <span class="text-gray-700 font-medium">1000+ zufriedene Kunden</span>
            </div>
            <div class="flex items-center">
              <CheckCircleIcon class="h-6 w-6 text-orange-600 mr-2" />
              <span class="text-gray-700 font-medium">Deutschlandweit</span>
            </div>
          </div>
        </div>
        <div class="relative">
          <img 
            src="/public/umzug-team.png" 
            alt="A.H Entrümpelung & Umzüge Team" 
            class="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckCircleIcon } from 'lucide-vue-next'
</script>
