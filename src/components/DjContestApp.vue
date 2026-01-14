<template>
  <div class="max-w-6xl mx-auto px-6 py-12 space-y-12">
    
    <!-- Sectie 1: Intro met CTA -->
    <section class="text-center space-y-6">
      <div class="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full border border-accent/30">
        <span class="relative flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
        </span>
        <span class="text-accent font-semibold text-sm uppercase tracking-wide">Live</span>
      </div>
      
      <h1 class="text-4xl md:text-5xl font-black text-accent">
        DJ Contest – Live Stand
      </h1>
      
      <div class="max-w-2xl mx-auto space-y-4 text-accent/80">
        <p class="text-lg">
          Stem op je favoriete DJ via de officiële Google Form.
        </p>
        <p class="text-base">
          De tussenstand wordt hieronder <strong class="text-accent">live bijgewerkt</strong>.
        </p>
      </div>

      <!-- CTA Button -->
      <div class="pt-4">
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSco-9AvfFofTECl0gGhY7wPdc9AGpYAxtVlRuM4K3C91GG4Lg/viewform"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-3 bg-accent text-mwfw px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent/90 transition-all hover:scale-105 shadow-lg"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          </svg>
          Ga stemmen
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </section>

    <!-- Sectie 2: Live Resultaten -->
    <section class="space-y-4">
      <div class="text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-accent mb-2">
          Huidige Stand
        </h2>
        <p class="text-accent/70 text-sm">
          Resultaten worden automatisch bijgewerkt
        </p>
      </div>

      <!-- Iframe container -->
      <div class="bg-white rounded-2xl shadow-2xl ring-1 ring-white/10 overflow-hidden">
        <iframe
          ref="chartFrame"
          loading="lazy"
          :src="chartUrl"
          class="w-full h-[450px] border-0"
          title="DJ Contest Live Resultaten"
          @error="handleIframeError"
        ></iframe>
      </div>
      
      <!-- Fallback message (shown if iframe fails) -->
      <div 
        v-if="iframeError" 
        class="bg-white/5 backdrop-blur-sm rounded-2xl shadow-2xl ring-1 ring-white/10 p-8"
      >
        <div class="text-center space-y-3">
          <svg class="w-16 h-16 mx-auto text-accent/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p class="text-accent font-semibold">Live resultaten laden niet.</p>
          <p class="text-accent/70 text-sm">Probeer de pagina te verversen.</p>
          <button 
            @click="reloadPage" 
            class="mt-4 bg-accent text-mwfw px-6 py-2 rounded-md font-semibold hover:bg-accent/90 transition"
          >
            Refresh pagina
          </button>
        </div>
      </div>
    </section>

    <!-- Sectie 3: Fair Play & Info -->
    <section class="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 ring-1 ring-white/10">
      <h3 class="text-xl font-bold text-accent mb-4 flex items-center gap-2">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Wedstrijdregels
      </h3>
      
      <ul class="space-y-3 text-accent/80">
        <li class="flex items-start gap-3">
          <svg class="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span><strong class="text-accent">Eén stem per persoon</strong> – eerlijk spel voor iedereen</span>
        </li>
        <li class="flex items-start gap-3">
          <svg class="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span>Resultaten zijn <strong class="text-accent">live</strong> maar niet definitief</span>
        </li>
        <li class="flex items-start gap-3">
          <svg class="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span>Frauduleuze stemmen worden <strong class="text-accent">automatisch gefilterd</strong></span>
        </li>
      </ul>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Base chart URL
const baseChartUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQpBkiem-3nezLxa5Q_KCPhJiD1voqg3I77XuN0o3piiFfWcOMATdNmv3abKUZitlDvXz8OXfg_bMaB/pubchart?oid=527189744&format=interactive'

// Reactive chart URL with cache buster
const chartUrl = ref(baseChartUrl)

// State for iframe error handling
const iframeError = ref(false)

// Auto-refresh interval (30 seconds)
let refreshInterval = null

// Refresh the chart by updating the URL with a cache buster
const refreshChart = () => {
  chartUrl.value = `${baseChartUrl}&_t=${Date.now()}`
}

// Start auto-refresh when component mounts
onMounted(() => {
  refreshInterval = setInterval(refreshChart, 30000) // 30 seconden
})

// Clean up interval when component unmounts
onUnmounted(() => {
  if (refreshInterval) {
    clearInterval(refreshInterval)
  }
})

// Handle iframe loading errors
const handleIframeError = () => {
  iframeError.value = true
}

// Reload page function
const reloadPage = () => {
  window.location.reload()
}
</script>

<style scoped>
/* Smooth animations */
@keyframes pulse-glow {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

/* Ensure iframe fits properly on all devices */
iframe {
  display: block;
  max-width: 100%;
}
</style>
