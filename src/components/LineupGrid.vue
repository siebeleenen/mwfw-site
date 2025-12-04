<template>
  <div class="max-w-2xl mx-auto space-y-4">
    <article v-for="(item, idx) in items" :key="idx" class="bg-white/10 ring-1 ring-white/10 rounded-xl p-5 flex items-center gap-4 hover:bg-white/15 transition-colors">
      <img :src="item.img" :alt="item.name" class="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover object-center flex-shrink-0" />
      <div class="min-w-0 flex-1">
        <h3 class="text-xl font-bold text-white">{{ item.name }}</h3>
        <p class="text-accent/80 font-medium text-lg">{{ item.time }}</p>
      </div>
    </article>
  </div>
</template>

<script setup>
const props = defineProps({
  items: { type: Array, required: true }
})
</script>
