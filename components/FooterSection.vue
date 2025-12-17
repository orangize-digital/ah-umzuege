<template>
  <footer class="bg-sidebar text-sidebar-foreground py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <img src="/logo.svg" alt="A.H Entrümpelung & Umzüge Logo" class="h-10 w-auto" />
            <div class="flex flex-col leading-tight">
              <span class="text-base font-bold">A.H Entrümpelung</span>
              <span class="text-sm font-semibold text-sidebar-accent">& Umzüge</span>
            </div>
          </div>
          <p class="text-sidebar-foreground/80 leading-relaxed">
            Ihr zuverlässiger Partner für professionelle Entrümpelung und Entsorgung in Berlin & Umgebung.
          </p>
          <div class="flex space-x-4">
            <div class="bg-sidebar-accent/10 p-2 rounded-full">
              <Phone class="h-5 w-5 text-sidebar-accent" />
            </div>
            <div class="bg-sidebar-accent/10 p-2 rounded-full">
              <Mail class="h-5 w-5 text-sidebar-accent" />
            </div>
          </div>
        </div>
        
        <!-- Services -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Leistungen</h3>
          <ul class="space-y-2">
            <li><a href="/leistungen#entruempelung" class="text-sidebar-foreground/80 hover:text-sidebar-accent transition-colors">Entrümpelung</a></li>
            <li><a href="/leistungen#umzuege" class="text-sidebar-foreground/80 hover:text-sidebar-accent transition-colors">Umzüge</a></li>
            <li><a href="/leistungen#firmenumzug" class="text-sidebar-foreground/80 hover:text-sidebar-accent transition-colors">Firmenumzug</a></li>
            <li><a href="/leistungen#haushaltsaufloesung" class="text-sidebar-foreground/80 hover:text-sidebar-accent transition-colors">Haushaltsauflösung</a></li>
            <li><a href="/leistungen#wohnungsaufloesung" class="text-sidebar-foreground/80 hover:text-sidebar-accent transition-colors">Wohnungsauflösung</a></li>
            <li><a href="/leistungen#entsorgung" class="text-sidebar-foreground/80 hover:text-sidebar-accent transition-colors">Entsorgung</a></li>
            <li><a href="/leistungen#transport" class="text-sidebar-foreground/80 hover:text-sidebar-accent transition-colors">Transport</a></li>
            <li><a href="/leistungen#renovierung" class="text-sidebar-foreground/80 hover:text-sidebar-accent transition-colors">Renovierungsarbeiten</a></li>
          </ul>
        </div>
        
        <!-- Company -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Unternehmen</h3>
          <ul class="space-y-2">
            <li><a href="/ueber-uns" class="text-sidebar-foreground/80 hover:text-sidebar-accent transition-colors">Über uns</a></li>
            <li><a href="/referenzen" class="text-sidebar-foreground/80 hover:text-sidebar-accent transition-colors">Referenzen</a></li>
          </ul>
        </div>
        
        <!-- Contact -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Kontakt</h3>
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <Phone class="h-4 w-4 text-sidebar-accent" />
              <a href="tel:+491630182135" class="text-sidebar-foreground/80 hover:text-sidebar-accent transition-colors">+49 163 0182135</a>
            </div>
            <div class="flex items-center space-x-3">
              <Mail class="h-4 w-4 text-sidebar-accent" />
              <a href="mailto:kontakt@ah-umzuege.de" class="text-sidebar-foreground/80 hover:text-sidebar-accent transition-colors">kontakt@ah-umzuege.de</a>
            </div>
            <div class="flex items-center space-x-3">
              <MapPin class="h-4 w-4 text-sidebar-accent" />
              <span class="text-sidebar-foreground/80">Hermannstr 15, 12049 Berlin</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="border-t border-sidebar-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-sidebar-foreground/60 text-sm">
          © 2025 A.H Entrümpelung & Umzüge. Alle Rechte vorbehalten.
        </p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <NuxtLink to="/impressum" class="text-sidebar-foreground/60 hover:text-sidebar-accent text-sm transition-colors">Impressum</NuxtLink>
          <NuxtLink to="/datenschutz" class="text-sidebar-foreground/60 hover:text-sidebar-accent text-sm transition-colors">Datenschutz</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Phone, Mail, MapPin } from 'lucide-vue-next'
</script>