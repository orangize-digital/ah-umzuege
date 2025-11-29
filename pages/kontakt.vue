<template>
  <div class="min-h-screen bg-gray-50">
    <NavHeader />
    <KontaktHero />
    <KontaktForm />
    <FooterSection />
  </div>
</template>

<script setup>
import NavHeader from '../components/NavHeader.vue'
import KontaktHero from '../components/Kontakt/KontaktHero.vue'
import KontaktInfo from '../components/Kontakt/KontaktInfo.vue'
import KontaktForm from '../components/Kontakt/KontaktForm.vue'
import FooterSection from '../components/FooterSection.vue'

useSeoMeta({
  title: 'Kontakt - A.H Entrümpelung & Umzüge',
  description: 'Kontaktieren Sie uns für ein kostenloses und unverbindliches Angebot. Wir beraten Sie gerne persönlich zu Ihrem Umzug oder Ihrer Entrümpelung.',
  ogTitle: 'Kontakt - A.H Entrümpelung & Umzüge',
  ogDescription: 'Kostenloses Angebot anfordern. Rufen Sie uns an oder schreiben Sie uns - wir beraten Sie gerne!',
  ogImage: '/og-image.jpg',
  ogUrl: 'https://ah-umzuege.de/kontakt',
  twitterCard: 'summary_large_image',
})

useHead({
  htmlAttrs: {
    lang: 'de'
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://ah-umzuege.de/kontakt'
    }
  ]
})
</script>
