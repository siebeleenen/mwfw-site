<template>
  <!-- Swipe-kaarten met DJ-foto's (homepage) -->
  <ul class="dj-rail">
    <li v-for="dj in lineup" :key="dj.name">
      <a :href="`lineup.html#${dj.slug}`" class="dj-card">
        <img :src="dj.img" :alt="dj.name" loading="lazy" class="dj-card__img" :class="dj.imagePosition || 'object-center'" />
        <span class="dj-card__time">{{ dj.time }}</span>
        <span class="dj-card__name">{{ dj.name }}</span>
      </a>
    </li>
    <li>
      <a href="lineup.html" class="dj-card dj-card--more">
        <span class="dj-card__more-label">Bekijk de volledige line-up</span>
        <span class="dj-card__more-arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </span>
      </a>
    </li>
  </ul>
</template>

<script setup>
import { lineup } from '../lineup-data.js'
</script>
