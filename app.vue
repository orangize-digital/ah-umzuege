<template>
  <div>
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-M9RX32HS"
        height="0"
        width="0"
        style="display:none;visibility:hidden"
      ></iframe>
    </noscript>
    <NuxtPage />
  </div>
</template>

<script setup>
// Clixtell Tracking Code
onMounted(() => {
  const script = document.createElement('script')
  script.async = true
  script.type = 'text/javascript'
  const prefix = document.location.protocol
  script.src = prefix + '//scripts.clixtell.com/track.js'
  document.head.appendChild(script)
})
</script>
