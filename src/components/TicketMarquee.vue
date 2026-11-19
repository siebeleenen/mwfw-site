<template>
  <!-- Lopende band (zoals bij Dour); tekst volgt automatisch uit src/tickets.json -->
  <div class="mwfw-marquee">
    <div class="mwfw-marquee__track">
      <div v-for="n in 2" :key="n" class="mwfw-marquee__group">
        <template v-for="(item, i) in items" :key="i">
          <span>{{ item }}</span>
          <svg viewBox="0 0 24 24" fill="currentColor"><path :d="SPARKLE" /></svg>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { fases, actieveFase, verkoopStatus } from '../tickets.js'

const SPARKLE = 'M12 0c.6 5.6 6.4 11.4 12 12-5.6.6-11.4 6.4-12 12-.6-5.6-6.4-11.4-12-12 5.6-.6 11.4-6.4 12-12Z'

const status = {
  online: 'Tickets nu online',
  uitverkocht: 'Uitverkocht!',
  binnenkort: 'Voorverkoop start binnenkort'
}[verkoopStatus]

const faseInfo = []
if (actieveFase) {
  faseInfo.push(actieveFase.prijs ? `${actieveFase.naam} ${actieveFase.prijs}` : `${actieveFase.naam} nu te koop`)
  fases.filter((fase) => fase.status === 'uitverkocht').forEach((fase) => faseInfo.push(`${fase.naam} uitverkocht`))
}

const items = [status, ...faseInfo, 'Za 06.03.2027', 'Industrieterrein Herk-de-Stad', 'Vanaf 21:00']
</script>
