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

    <!-- Team Section -->
    <TeamSection />

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
import TeamSection from '../components/TeamSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import ContactSection from '../components/ContactSection.vue'
import FooterSection from '../components/FooterSection.vue'

useSeoMeta({
  title: 'A.H Entrümpelung & Umzüge - Professionelle Umzüge & Entrümpelung',
  description: 'Professionelle Umzüge, Entrümpelung und Entsorgung in Berlin & Umgebung. Von Wohnungsauflösung über Haushaltsauflösung bis hin zu Keller- und Dachbodenräumung.',
  ogTitle: 'A.H Entrümpelung & Umzüge - Ihr zuverlässiger Partner für Umzüge & Entrümpelung',
  ogDescription: 'Professionelle Umzüge, Entrümpelung und Entsorgung in Berlin & Umgebung. Haushaltsauflösung, Wohnungsräumung und mehr.',
  ogImage: '/logo.svg',
  ogUrl: 'https://ah-umzuege.de',
  twitterCard: 'summary_large_image',
  twitterTitle: 'A.H Entrümpelung & Umzüge - Professionelle Umzüge & Entrümpelung',
  twitterDescription: 'Professionelle Umzüge, Entrümpelung und Entsorgung in Berlin & Umgebung. Haushaltsauflösung, Wohnungsräumung und mehr.',
  twitterImage: '/logo.svg',
})

useHead({
  htmlAttrs: {
    lang: 'de'
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://ah-umzuege.de'
    }
  ]
})
</script>
