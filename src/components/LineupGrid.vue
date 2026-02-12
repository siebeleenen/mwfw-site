<template>
  <div class="max-w-2xl mx-auto space-y-4">
    <article 
      v-for="(item, idx) in items" 
      :key="idx" 
      @click="openModal(item)"
      class="bg-white/10 ring-1 ring-white/10 rounded-xl p-5 flex items-center gap-4 hover:bg-accent/20 hover:ring-accent/50 hover:scale-[1.02] transition-all cursor-pointer group shadow-lg hover:shadow-accent/20"
    >
      <img :src="item.img" :alt="item.name" class="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover object-center flex-shrink-0 ring-2 ring-white/20 group-hover:ring-accent transition-all" />
      <div class="min-w-0 flex-1">
        <h3 class="text-xl font-bold text-white group-hover:text-accent transition-colors">{{ item.name }}</h3>
        <p class="text-accent/80 font-medium text-lg">{{ item.time }}</p>
        <p class="text-accent/60 text-sm mt-1 group-hover:text-accent transition-colors">
          Klik voor meer info →
        </p>
      </div>
      <div class="flex-shrink-0 bg-accent/20 group-hover:bg-accent group-hover:scale-110 rounded-full p-3 transition-all">
        <svg class="w-6 h-6 text-accent group-hover:text-mwfw transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </article>

    <!-- Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div 
          v-if="selectedDJ" 
          @click="closeModal"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <div 
            @click.stop
            class="bg-gradient-to-br from-mwfw via-mwfw to-black max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ring-2 ring-accent/30"
          >
            <!-- Header with Image -->
            <div class="relative h-48 md:h-64 overflow-hidden">
              <img 
                :src="selectedDJ.detailImg || selectedDJ.img" 
                :alt="selectedDJ.name" 
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-mwfw via-mwfw/50 to-transparent"></div>
              
              <!-- Close Button -->
              <button 
                @click="closeModal"
                class="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <!-- DJ Name & Time -->
              <div class="absolute bottom-4 left-6 right-6">
                <h2 class="text-3xl md:text-4xl font-black text-accent mb-1">{{ selectedDJ.name }}</h2>
                <p class="text-accent/90 font-semibold text-lg">{{ selectedDJ.time }}</p>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6 md:p-8 space-y-6">
              <!-- Genres -->
              <div v-if="selectedDJ.genres && selectedDJ.genres.length" class="flex flex-wrap gap-2">
                <span 
                  v-for="genre in selectedDJ.genres" 
                  :key="genre"
                  class="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium ring-1 ring-accent/30"
                >
                  {{ genre }}
                </span>
              </div>

              <!-- Bio -->
              <div v-if="selectedDJ.bio">
                <h3 class="text-accent font-bold text-lg mb-3">Over</h3>
                <p class="text-accent/80 leading-relaxed">{{ selectedDJ.bio }}</p>
              </div>

              <!-- Highlights -->
              <div v-if="selectedDJ.highlights && selectedDJ.highlights.length">
                <h3 class="text-accent font-bold text-lg mb-3">Highlights</h3>
                <ul class="space-y-2">
                  <li 
                    v-for="highlight in selectedDJ.highlights" 
                    :key="highlight"
                    class="flex items-start gap-3 text-accent/80"
                  >
                    <svg class="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span>{{ highlight }}</span>
                  </li>
                </ul>
              </div>

              <!-- Socials -->
              <div v-if="selectedDJ.socials && Object.keys(selectedDJ.socials).length">
                <h3 class="text-accent font-bold text-lg mb-3">Volg {{ selectedDJ.name }}</h3>
                <div class="flex flex-wrap gap-3">
                  <a 
                    v-if="selectedDJ.socials.instagram"
                    :href="selectedDJ.socials.instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-accent/10 hover:bg-accent/20 text-accent px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ring-1 ring-accent/20"
                  >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                  <a 
                    v-if="selectedDJ.socials.soundcloud"
                    :href="selectedDJ.socials.soundcloud"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-accent/10 hover:bg-accent/20 text-accent px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ring-1 ring-accent/20"
                  >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.255-2.154c-.009-.057-.049-.1-.099-.1zm1.983.645c-.058 0-.103.046-.113.1l-.209 1.509.209 1.449c.01.057.055.098.113.098.05 0 .09-.041.099-.098l.241-1.449-.241-1.509c-.009-.057-.049-.1-.099-.1zm1.984.645c-.058 0-.106.046-.113.1l-.197 1.509.197 1.449c.007.057.055.098.113.098.058 0 .099-.041.107-.098l.226-1.449-.226-1.509c-.008-.057-.049-.1-.107-.1zm1.984.645c-.058 0-.102.046-.114.1l-.182 1.509.182 1.449c.012.057.056.098.114.098.062 0 .108-.041.117-.098l.207-1.449-.207-1.509c-.009-.057-.055-.1-.117-.1zM9.11 14.2c-.063 0-.109.046-.118.1l-.184 1.449.184 1.509c.009.057.055.098.118.098.058 0 .101-.041.11-.098l.218-1.509-.218-1.449c-.009-.057-.052-.1-.11-.1zm1.984.645c-.063 0-.108.046-.118.1l-.181 1.449.181 1.509c.01.057.055.098.118.098.058 0 .102-.041.11-.098l.2-1.509-.2-1.449c-.008-.057-.052-.1-.11-.1zm1.98.645c-.063 0-.109.046-.118.1l-.182 1.449.182 1.509c.009.057.055.098.118.098.058 0 .102-.041.11-.098l.2-1.509-.2-1.449c-.008-.057-.052-.1-.11-.1zm1.925.645c-.063 0-.108.046-.118.1l-.181 1.449.181 1.509c.01.057.055.098.118.098.063 0 .108-.041.118-.098l.199-1.509-.199-1.449c-.01-.057-.055-.1-.118-.1zm1.914-.645c-.063 0-.109.046-.118.1l-.182 1.449.182 1.509c.009.057.055.098.118.098.063 0 .108-.041.117-.098l.2-1.509-.2-1.449c-.009-.057-.054-.1-.117-.1z"/>
                    </svg>
                    SoundCloud
                  </a>
                  <a 
                    v-if="selectedDJ.socials.youtube"
                    :href="selectedDJ.socials.youtube"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-accent/10 hover:bg-accent/20 text-accent px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ring-1 ring-accent/20"
                  >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    YouTube
                  </a>
                  <a 
                    v-if="selectedDJ.socials.website"
                    :href="selectedDJ.socials.website"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-accent/10 hover:bg-accent/20 text-accent px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ring-1 ring-accent/20"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  items: { type: Array, required: true }
})

const selectedDJ = ref(null)

const openModal = (dj) => {
  selectedDJ.value = dj
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedDJ.value = null
  document.body.style.overflow = ''
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .bg-gradient-to-br,
.modal-leave-active .bg-gradient-to-br {
  transition: transform 0.3s ease;
}

.modal-enter-from .bg-gradient-to-br {
  transform: scale(0.9);
}

.modal-leave-to .bg-gradient-to-br {
  transform: scale(0.9);
}
</style>
