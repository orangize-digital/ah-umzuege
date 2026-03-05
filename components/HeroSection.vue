<template>
  <section id="home" class="relative py-20 lg:py-32 overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        src="/ah-umzuege1.jpeg"
        alt="A.H Entrümpelung & Umzüge Team bei der Arbeit"
        class="w-full h-full object-cover"
      />
      <!-- Dark Overlay -->
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="space-y-8">
          <div class="space-y-4">
            <h1 class="text-4xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              Ihr Partner für <br>
              <span class="text-primary">Umzüge & Entrümpelung</span>
            </h1>
            <p class="text-xl text-white/90 leading-relaxed drop-shadow-md">
              Professionelle Umzüge und Entrümpelung in Berlin & Umgebung.
              Schnell, zuverlässig und stressfrei – mit Sorgfalt und Erfahrung.
            </p>
          </div>

          <!-- CTA Button -->
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="tel:+491630182135" class="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center shadow-xl">
              <Phone class="mr-2 h-5 w-5" />
              Kostenlos anfragen
            </a>
            <a href="https://wa.me/491630182135" target="_blank" rel="noopener noreferrer" class="bg-[#25D366] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#20BA5A] transition-colors flex items-center justify-center shadow-xl">
              <MessageCircle class="mr-2 h-5 w-5" />
              WhatsApp
            </a>
          </div>

          <!-- Trust Indicators -->
          <div class="flex items-center space-x-8 pt-8">
            <div class="flex items-center">
              <Shield class="h-6 w-6 text-primary mr-2 drop-shadow-md" />
              <span class="text-sm text-white/90 font-medium">Vollversichert</span>
            </div>
            <div class="flex items-center">
              <Clock class="h-6 w-6 text-primary mr-2 drop-shadow-md" />
              <span class="text-sm text-white/90 font-medium">24/7 Service</span>
            </div>
            <div class="flex items-center">
              <Star class="h-6 w-6 text-primary mr-2 drop-shadow-md" />
              <span class="text-sm text-white/90 font-medium">Top Qualität</span>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20">
          <h3 class="text-2xl font-bold text-white mb-6">Schnellanfrage</h3>
          <form @submit.prevent="submitForm" class="space-y-4">
            <div>
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                class="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white/10 text-white placeholder-white/60"
                placeholder="Ihr Name *"
              >
            </div>

            <div class="grid grid-cols-2 gap-4">
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white/10 text-white placeholder-white/60"
                placeholder="E-Mail *"
              >
              <input
                type="tel"
                id="phone"
                v-model="form.phone"
                class="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white/10 text-white placeholder-white/60"
                placeholder="Telefon"
              >
            </div>

            <div>
              <select
                id="service"
                v-model="form.service"
                required
                class="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white/10 text-white/60"
              >
                <option value="" class="text-gray-900">Service wählen</option>
                <option value="Entrümpelung" class="text-gray-900">Entrümpelung</option>
                <option value="Firmenumzug" class="text-gray-900">Firmenumzug</option>
                <option value="Haushaltsauflösung" class="text-gray-900">Haushaltsauflösung</option>
                <option value="Wohnungsauflösung" class="text-gray-900">Wohnungsauflösung</option>
                <option value="Entsorgung" class="text-gray-900">Entsorgung</option>
                <option value="Transport" class="text-gray-900">Transport</option>
                <option value="Renovierungsarbeiten" class="text-gray-900">Renovierungsarbeiten</option>
                <option value="Sonstiges" class="text-gray-900">Sonstiges</option>
              </select>
            </div>

            <div>
              <textarea
                id="message"
                v-model="form.message"
                rows="3"
                class="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white/10 text-white placeholder-white/60"
                placeholder="Beschreiben Sie kurz Ihr Projekt..."
              ></textarea>
            </div>

            <div class="flex items-start">
              <input
                type="checkbox"
                id="datenschutz-hero"
                v-model="form.datenschutz"
                required
                class="mt-1 h-4 w-4 text-primary focus:ring-primary border-white/30 rounded bg-white/10"
              >
              <label for="datenschutz-hero" class="ml-3 text-sm text-white/80">
                Ich stimme der
                <NuxtLink to="/datenschutz" target="_blank" class="text-primary hover:text-primary/80 underline">Datenschutzerklärung</NuxtLink> zu. *
              </label>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <Send class="mr-2 h-5 w-5" />
              {{ isSubmitting ? 'Wird gesendet...' : 'Anfrage senden' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Phone, Shield, Clock, Star, Send, MessageCircle } from 'lucide-vue-next'

const form = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  datenschutz: false
})

const isSubmitting = ref(false)

const submitForm = async () => {
  isSubmitting.value = true

  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: {
        subject: 'Neue Schnellanfrage von der Website',
        html: `
          <h2>Neue Schnellanfrage von A.H Entrümpelung & Umzüge Website</h2>
          <p><strong>Name:</strong> ${form.value.name}</p>
          <p><strong>E-Mail:</strong> ${form.value.email}</p>
          <p><strong>Telefon:</strong> ${form.value.phone}</p>
          <p><strong>Serviceart:</strong> ${form.value.service}</p>
          <p><strong>Nachricht:</strong></p>
          <p>${form.value.message || 'Keine Nachricht angegeben'}</p>
        `,
        text: `
Neue Schnellanfrage von A.H Entrümpelung & Umzüge Website

Name: ${form.value.name}
E-Mail: ${form.value.email}
Telefon: ${form.value.phone}
Serviceart: ${form.value.service}
Nachricht: ${form.value.message || 'Keine Nachricht angegeben'}
        `
      }
    })

    if (response.success) {
      // Reset form
      form.value = {
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        datenschutz: false
      }

      // Redirect to thank you page
      await navigateTo('/danke')
    }
  } catch (error) {
    console.error('Form submission error:', error)
    alert('Es gab einen Fehler beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

