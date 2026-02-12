<template>
  <div class="max-w-5xl mx-auto px-6 py-12 md:py-20">
    
    <!-- Winner Announcement -->
    <section class="text-center space-y-8">
      <!-- Closed Badge -->
      <div class="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full border border-accent/30 shadow-lg">
        <svg class="w-4 h-4 text-mwfw" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        <span class="text-mwfw font-bold text-sm uppercase tracking-wide">Contest Gesloten</span>
      </div>
      
      <!-- Title -->
      <div class="space-y-4">
        <h1 class="text-4xl md:text-6xl font-black text-accent leading-tight">
          LAX is de winnaar! 🏆
        </h1>
        
        <p class="text-xl md:text-2xl text-accent/90 max-w-3xl mx-auto font-semibold">
          De allereerste MWFW DJ Contest 2026
        </p>
      </div>
    </section>
        <!-- Line-up Link (Mobile only) -->
    <section class="block md:hidden mt-12 text-center">
      <a href="lineup.html" class="inline-block w-full md:w-auto">
        <div class="bg-gradient-to-br from-blue-500/20 to-blue-600/10 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30 hover:scale-[1.02] transition-transform">
          <p class="text-accent/90 text-sm font-semibold mb-1">Bekijk de volledige</p>
          <p class="text-accent text-2xl font-black">Line-up 🎵</p>
        </div>
      </a>
    </section>
    <!-- Winner Card -->
    <section class="mt-12">
      <div class="bg-gradient-to-br from-accent/20 via-accent/10 to-accent/5 backdrop-blur-sm rounded-2xl overflow-hidden ring-2 ring-accent/40 shadow-2xl">
        <!-- Winner Image -->
        <div class="relative h-64 md:h-96 overflow-hidden bg-gradient-to-b from-blue-600/20 to-black/60">
          <img 
            src="/src/assets/djs/LAX.jpg" 
            alt="LAX - DJ Contest Winnaar" 
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-mwfw via-transparent to-transparent"></div>
          
          <!-- Trophy Badge -->
          <div class="absolute top-6 right-6 bg-accent rounded-full p-4 shadow-2xl animate-pulse">
            <svg class="w-8 h-8 text-mwfw" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
        
        <!-- Winner Info -->
        <div class="p-8 md:p-12 text-center space-y-6">
          <div>
            <h2 class="text-4xl md:text-5xl font-black text-accent mb-3">
              LAX
            </h2>
            <p class="text-accent/80 text-lg md:text-xl">
              Winnaar MWFW DJ Contest 2026
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Thank You Message -->
    <section class="mt-16 text-center space-y-6">
      <div class="max-w-3xl mx-auto space-y-4">
        <h3 class="text-2xl md:text-3xl font-bold text-accent">
          Bedankt aan iedereen! 🙌
        </h3>
        
        <div class="text-accent/80 text-base md:text-lg space-y-3 leading-relaxed">
          <p>
            Wat een onvergetelijke avond! De allereerste MWFW DJ Contest is een feit en wat was het close. 
            Jullie hebben massaal gestemd en de sfeer was elektrisch.
          </p>
          <p>
            <strong class="text-accent">Proficiat LAX</strong> met deze geweldige overwinning! 
            Je hebt het publiek compleet meegenomen met je set.
          </p>
          <p>
            Een dikke merci aan <strong class="text-accent">alle deelnemende DJ's</strong> die de dansvloer lieten shaken. 
            Jullie hebben er samen voor gezorgd dat deze eerste editie onvergetelijk was!
          </p>
        </div>
      </div>
    </section>

    

    <!-- Call to action for next year -->
    <section class="mt-16 text-center">
      <div class="inline-block bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 backdrop-blur-sm rounded-xl px-8 py-6 ring-1 ring-accent/20">
        <p class="text-accent/90 text-lg font-semibold">
          Tot volgend jaar bij MWFW 2027! 🎉
        </p>
        <p class="text-accent/60 text-sm mt-2">
          Misschien wordt het dan jouw moment om te shinen?
        </p>
      </div>
    </section>

  </div>
</template>

<script setup>
// Winner page - no interactive logic needed
</script>
