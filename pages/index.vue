<template>
  <div class="min-h-screen bg-background">
    <!-- Navigation -->
    <NavHeader />

    <!-- Hero Section -->
    <HeroSection />

    <!-- Services Section -->
    <ServicesSection />

    <!-- About Section -->
    <AboutSection />

    <!-- Testimonials Section -->
    <TestimonialsSection />

    <!-- Contact Section -->
    <ContactSection />

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import NavHeader from '../components/NavHeader.vue'
import HeroSection from '../components/HeroSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import AboutSection from '../components/AboutSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import ContactSection from '../components/ContactSection.vue'
import FooterSection from '../components/FooterSection.vue'

useSeoMeta({
  title: 'A.H Entrümpelung & Umzüge - Professionelle Umzugsdienstleistungen',
  description: 'Professionelle Umzugsdienstleistungen in ganz Deutschland. Von Entrümpelung über Firmen- und Haushaltsauflösung bis hin zu Transport und Renovierung.',
  ogTitle: 'A.H Entrümpelung & Umzüge - Ihr zuverlässiger Umzugspartner',
  ogDescription: 'Professionelle Umzugsdienstleistungen in ganz Deutschland. Entrümpelung, Haushaltsauflösung, Transport, Renovierung und mehr.',
  ogImage: '/og-image.jpg',
  ogUrl: 'https://mukhtar-umzuge.de',
  twitterCard: 'summary_large_image',
  twitterTitle: 'A.H Entrümpelung & Umzüge - Professionelle Umzugsdienstleistungen',
  twitterDescription: 'Professionelle Umzugsdienstleistungen in ganz Deutschland. Entrümpelung, Haushaltsauflösung, Transport, Renovierung und mehr.',
  twitterImage: '/og-image.jpg',
})

useHead({
  htmlAttrs: {
    lang: 'de'
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://mukhtar-umzuge.de'
    }
  ]
})
</script>
