<template>
  <div class="max-w-4xl mx-auto px-6 py-12 md:py-20">
    
    <!-- Hero / Intro -->
    <section class="text-center space-y-8">
      <!-- Live Badge -->
      <div class="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full border border-accent/30">
        <span class="relative flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
        </span>
        <span class="text-accent font-semibold text-sm uppercase tracking-wide">Live</span>
      </div>
      
      <!-- Title -->
      <div class="space-y-4">
        <h1 class="text-4xl md:text-6xl font-black text-accent leading-tight">
          DJ Contest – Stem op jouw favoriet 🎧
        </h1>
        
        <p class="text-lg md:text-xl text-accent/80 max-w-2xl mx-auto">
          Stem tijdens de DJ Contest en bepaal wie wint.
        </p>
      </div>

      <!-- Main CTA Button -->
      <div class="pt-6">
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSco-9AvfFofTECl0gGhY7wPdc9AGpYAxtVlRuM4K3C91GG4Lg/viewform"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-accent text-mwfw px-8 py-5 md:py-6 rounded-xl font-bold text-lg md:text-xl hover:bg-accent/90 transition-all hover:scale-105 shadow-2xl touch-manipulation min-h-[56px]"
        >
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          </svg>
          Ga naar de stemming
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </section>

    <!-- Extra Info -->
    <section class="mt-16 bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 ring-1 ring-white/10">
      <div class="flex items-start gap-4">
        <div class="flex-shrink-0">
          <svg class="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        
        <div class="flex-1">
          <h3 class="text-accent font-semibold text-lg mb-2">
            Veilig stemmen
          </h3>
          <p class="text-accent/70 text-sm leading-relaxed">
            Stemmen verloopt veilig via Google Forms. Je stem blijft vertrouwelijk.
          </p>
        </div>
      </div>
    </section>

    <!-- Help section -->
    <section class="text-center mt-12">
      <div class="inline-block bg-white/5 backdrop-blur-sm rounded-xl px-6 py-4 ring-1 ring-white/10">
        <p class="text-accent/70 text-sm">
          Problemen met stemmen? Meld het bij de organisatie.
        </p>
      </div>
    </section>

  </div>
</template>

<script setup>
// Simple component - no complex logic needed
// Just redirects to Google Form
</script>
