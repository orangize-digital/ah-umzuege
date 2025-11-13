<template>
  <nav class="bg-white shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="flex items-center gap-3">
            <img src="/logo.svg" alt="A.H Entrümpelung & Umzüge Logo" class="h-12 w-auto" />
            <div class="flex flex-col leading-tight">
              <span class="text-lg font-bold text-gray-900">A.H Entrümpelung</span>
              <span class="text-base font-semibold text-[#ed7f11]">& Umzüge</span>
            </div>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <NuxtLink 
              to="/" 
              class="nav-link"
            >
              Startseite
            </NuxtLink>
            
            <!-- Leistungen Dropdown -->
            <div class="relative" @mouseenter="leistungenOpen = true" @mouseleave="leistungenOpen = false">
              <button class="nav-link flex items-center">
                Leistungen
                <ChevronDown class="ml-1 h-4 w-4" />
              </button>
              
              <!-- Dropdown Menu -->
              <div 
                v-show="leistungenOpen"
                class="absolute left-0 top-full pt-2 w-64"
              >
                <div class="bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                <a href="/leistungen#entruempelung" class="dropdown-link">
                  <Trash2 class="h-4 w-4" />
                  Entrümpelung
                </a>
                <a href="/leistungen#firmenumzug" class="dropdown-link">
                  <Building2 class="h-4 w-4" />
                  Firmenumzug
                </a>
                <a href="/leistungen#haushaltsaufloesung" class="dropdown-link">
                  <Home class="h-4 w-4" />
                  Haushaltsauflösung
                </a>
                <a href="/leistungen#wohnungsaufloesung" class="dropdown-link">
                  <KeyRound class="h-4 w-4" />
                  Wohnungsauflösung
                </a>
                <a href="/leistungen#entsorgung" class="dropdown-link">
                  <Recycle class="h-4 w-4" />
                  Entsorgung
                </a>
                <a href="/leistungen#transport" class="dropdown-link">
                  <TruckIcon class="h-4 w-4" />
                  Transport
                </a>
                <a href="/leistungen#renovierung" class="dropdown-link">
                  <Paintbrush class="h-4 w-4" />
                  Renovierungsarbeiten
                </a>
                <div class="border-t border-gray-100 my-2"></div>
                <NuxtLink to="/leistungen" class="dropdown-link font-semibold text-orange-600">
                  Alle Leistungen ansehen →
                </NuxtLink>
                </div>
              </div>
            </div>
            
            <NuxtLink 
              to="/ueber-uns" 
              class="nav-link"
            >
              Über uns
            </NuxtLink>
            <NuxtLink 
              to="/referenzen" 
              class="nav-link"
            >
              Referenzen
            </NuxtLink>
            <NuxtLink 
              to="/kontakt" 
              class="nav-link"
            >
              Kontakt
            </NuxtLink>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <a href="tel:+4915123456789" class="bg-[#ed7f11] text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors flex items-center">
            <PhoneIcon class="h-4 w-4 mr-2" />
            Jetzt anrufen
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-700 hover:text-orange-600">
            <MenuIcon v-if="!mobileMenuOpen" class="h-6 w-6" />
            <XIcon v-else class="h-6 w-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <ClientOnly>
        <div v-if="mobileMenuOpen" class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <NuxtLink to="/" class="mobile-nav-link" @click="mobileMenuOpen = false">Startseite</NuxtLink>
            
            <!-- Mobile Leistungen -->
            <div>
              <button 
                @click="mobileLeistungenOpen = !mobileLeistungenOpen"
                class="mobile-nav-link w-full text-left flex items-center justify-between"
              >
                Leistungen
                <ChevronDown class="h-4 w-4" :class="{ 'rotate-180': mobileLeistungenOpen }" />
              </button>
              <div v-show="mobileLeistungenOpen" class="pl-4 mt-1 space-y-1">
                <a href="/leistungen#entruempelung" class="mobile-sub-link" @click="mobileMenuOpen = false">Entrümpelung</a>
                <a href="/leistungen#firmenumzug" class="mobile-sub-link" @click="mobileMenuOpen = false">Firmenumzug</a>
                <a href="/leistungen#haushaltsaufloesung" class="mobile-sub-link" @click="mobileMenuOpen = false">Haushaltsauflösung</a>
                <a href="/leistungen#wohnungsaufloesung" class="mobile-sub-link" @click="mobileMenuOpen = false">Wohnungsauflösung</a>
                <a href="/leistungen#entsorgung" class="mobile-sub-link" @click="mobileMenuOpen = false">Entsorgung</a>
                <a href="/leistungen#transport" class="mobile-sub-link" @click="mobileMenuOpen = false">Transport</a>
                <a href="/leistungen#renovierung" class="mobile-sub-link" @click="mobileMenuOpen = false">Renovierungsarbeiten</a>
              </div>
            </div>
            
            <NuxtLink to="/ueber-uns" class="mobile-nav-link" @click="mobileMenuOpen = false">Über uns</NuxtLink>
            <NuxtLink to="/referenzen" class="mobile-nav-link" @click="mobileMenuOpen = false">Referenzen</NuxtLink>
            <NuxtLink to="/kontakt" class="mobile-nav-link" @click="mobileMenuOpen = false">Kontakt</NuxtLink>
          <a href="tel:+4915123456789" class="bg-[#ed7f11] text-white block px-3 py-2 rounded-md text-base font-medium mt-4">
            Jetzt anrufen
          </a>
        </div>
        </div>
      </ClientOnly>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { TruckIcon, PhoneIcon, MenuIcon, XIcon, ChevronDown, Trash2, Building2, Home, KeyRound, Recycle, Paintbrush } from 'lucide-vue-next'

const mobileMenuOpen = ref(false)
const leistungenOpen = ref(false)
const mobileLeistungenOpen = ref(false)
</script>

<style scoped>
.nav-link {
  @apply text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors;
}

.mobile-nav-link {
  @apply text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium;
}

.dropdown-link {
  @apply flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors;
}

.mobile-sub-link {
  @apply block px-3 py-2 text-sm text-gray-600 hover:text-orange-600 transition-colors;
}
</style>
