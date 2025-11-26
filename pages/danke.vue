<template>
  <div class="min-h-screen flex items-center justify-center px-4 py-20">
    <div class="max-w-2xl mx-auto text-center">
      <!-- Logo & Company Name -->
      <div class="mb-8 flex justify-center items-center gap-4">
        <img src="/logo.svg" alt="A.H Entrümpelung & Umzüge Logo" class="h-16 w-auto" />
        <div class="flex flex-col leading-tight text-left">
          <span class="text-xl font-bold text-foreground">A.H Entrümpelung</span>
          <span class="text-lg font-semibold text-primary">& Umzüge</span>
        </div>
      </div>

      <!-- Success Icon -->
      <div class="mb-8 flex justify-center">
        <div class="bg-orange-100 dark:bg-orange-900/30 p-6 rounded-full">
          <CheckCircle class="h-20 w-20 text-orange-600 dark:text-orange-400" />
        </div>
      </div>

      <!-- Heading -->
      <h1 class="text-4xl md:text-5xl font-bold text-foreground mb-4">
        Vielen Dank für Ihre Anfrage!
      </h1>

      <!-- Description -->
      <p class="text-xl text-muted-foreground mb-8">
        Wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich bei Ihnen melden.
        In der Regel antworten wir innerhalb von 24 Stunden.
      </p>

      <!-- Info Cards -->
      <div class="grid md:grid-cols-2 gap-6 mb-12 text-left">
        <div class="bg-card p-6 rounded-xl border border-border">
          <div class="flex items-start space-x-3">
            <Phone class="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 class="font-semibold text-foreground mb-1">Dringende Anfragen?</h3>
              <p class="text-sm text-muted-foreground mb-2">Rufen Sie uns direkt an:</p>
              <a href="tel:+491630182135" class="text-primary font-medium hover:underline">
                +49 163 0182135
              </a>
            </div>
          </div>
        </div>

        <div class="bg-card p-6 rounded-xl border border-border">
          <div class="flex items-start space-x-3">
            <Mail class="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 class="font-semibold text-foreground mb-1">E-Mail</h3>
              <p class="text-sm text-muted-foreground mb-2">Oder schreiben Sie uns:</p>
              <a href="mailto:kontakt@ah-umzuge.de" class="text-primary font-medium hover:underline">
                kontakt@ah-umzuge.de
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink
          to="/"
          class="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          <Home class="mr-2 h-5 w-5" />
          Zur Startseite
        </NuxtLink>

        <NuxtLink
          to="/leistungen"
          class="inline-flex items-center justify-center px-6 py-3 bg-card text-card-foreground border border-border rounded-lg font-semibold hover:bg-accent transition-colors"
        >
          <Briefcase class="mr-2 h-5 w-5" />
          Unsere Leistungen
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckCircle, Phone, Mail, Home, Briefcase } from 'lucide-vue-next'

useSeoMeta({
  title: 'Danke für Ihre Anfrage - A.H Entrümpelung & Umzüge',
  description: 'Vielen Dank für Ihre Kontaktaufnahme. Wir melden uns schnellstmöglich bei Ihnen.',
  ogTitle: 'Danke für Ihre Anfrage - A.H Entrümpelung & Umzüge',
  ogDescription: 'Vielen Dank für Ihre Kontaktaufnahme. Wir melden uns schnellstmöglich bei Ihnen.',
  ogImage: '/og-image.jpg',
  ogUrl: 'https://mukhtar-umzuge.de/danke',
  twitterCard: 'summary_large_image',
  robots: 'noindex, nofollow' // Prevent indexing of thank you page
})

useHead({
  htmlAttrs: {
    lang: 'de'
  },
  link: [
    { rel: 'canonical', href: 'https://mukhtar-umzuge.de/danke' }
  ]
})
</script>
