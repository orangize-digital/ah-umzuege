<template>
  <div class="min-h-screen py-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Impressum
        </h1>
        <p class="text-lg text-muted-foreground">
          Angaben gemäß § 5 TMG
        </p>
      </div>

      <!-- Content Section -->
      <div class="prose prose-lg max-w-none">
        <div class="bg-card rounded-xl p-8 border border-border space-y-6">
          <div>
            <h2 class="text-2xl font-bold text-foreground mb-4">Anbieter</h2>
            <p class="text-card-foreground">
              [Hier Ihre Firmendaten eintragen]
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-foreground mb-4">Kontakt</h2>
            <p class="text-card-foreground">
              [Hier Ihre Kontaktdaten eintragen]
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-foreground mb-4">Verantwortlich für den Inhalt</h2>
            <p class="text-card-foreground">
              [Hier verantwortliche Person eintragen]
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-foreground mb-4">Haftungsausschluss</h2>
            <p class="text-card-foreground">
              [Hier Haftungsausschluss eintragen]
            </p>
          </div>
        </div>
      </div>

      <!-- Back Button -->
      <div class="mt-12">
        <NuxtLink
          to="/"
          class="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft class="mr-2 h-5 w-5" />
          Zurück zur Startseite
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowLeft } from 'lucide-vue-next'

useSeoMeta({
  title: 'Impressum - A.H Entrümpelung & Umzüge',
  description: 'Impressum und rechtliche Angaben von A.H Entrümpelung & Umzüge',
  ogTitle: 'Impressum - A.H Entrümpelung & Umzüge',
  ogDescription: 'Impressum und rechtliche Angaben von A.H Entrümpelung & Umzüge',
  ogImage: '/og-image.jpg',
  ogUrl: 'https://mukhtar-umzuge.de/impressum',
  twitterCard: 'summary_large_image',
  robots: 'index, follow'
})

useHead({
  htmlAttrs: {
    lang: 'de'
  },
  link: [
    { rel: 'canonical', href: 'https://mukhtar-umzuge.de/impressum' }
  ]
})
</script>
