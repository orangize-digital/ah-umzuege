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
  title: 'A.H Entrümpelung & Umzüge - Professionelle Entrümpelung & Entsorgung',
  description: 'Professionelle Entrümpelung und Entsorgung in ganz Deutschland. Von Wohnungsauflösung über Haushaltsauflösung bis hin zu Keller- und Dachbodenräumung.',
  ogTitle: 'A.H Entrümpelung & Umzüge - Ihr zuverlässiger Entrümpelungspartner',
  ogDescription: 'Professionelle Entrümpelung und Entsorgung in ganz Deutschland. Haushaltsauflösung, Wohnungsräumung, Entsorgung und mehr.',
  ogImage: '/og-image.jpg',
  ogUrl: 'https://mukhtar-umzuge.de',
  twitterCard: 'summary_large_image',
  twitterTitle: 'A.H Entrümpelung & Umzüge - Professionelle Entrümpelung & Entsorgung',
  twitterDescription: 'Professionelle Entrümpelung und Entsorgung in ganz Deutschland. Haushaltsauflösung, Wohnungsräumung, Entsorgung und mehr.',
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
