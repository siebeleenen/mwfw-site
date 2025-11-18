<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <article v-for="(item, idx) in items" :key="idx" class="bg-white/10 ring-1 ring-white/10 rounded-xl p-4 flex items-center gap-4">
      <img :src="item.img" :alt="item.name" class="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover object-center flex-shrink-0" />
      <div class="min-w-0">
        <h3 class="text-lg font-bold text-white truncate">{{ item.name }}</h3>
        <p class="text-accent/80 font-medium">{{ item.time }}</p>
      </div>
    </article>
  </div>
</template>

<script setup>
const props = defineProps({
  items: { type: Array, required: true }
})
</script>
