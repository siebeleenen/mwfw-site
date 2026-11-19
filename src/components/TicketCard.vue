<template>
  <!-- Ticket (enkel desktop); teksten en fases volgen uit src/tickets.json -->
  <a :href="TICKET_URL" target="_blank" rel="noopener" class="mwfw-ticket">
    <div class="mwfw-ticket__paper">
      <div class="mwfw-ticket__main">
        <p class="mwfw-ticket__eyebrow">
          <span class="mwfw-live-dot" :class="{ 'is-off': verkoopStatus !== 'online' }"></span>{{ tekst.eyebrow }}
        </p>
        <h2 class="mwfw-ticket__title">{{ tekst.titel }}</h2>
        <dl class="mwfw-ticket__info">
          <div><dt>Datum</dt><dd>Za 06.03.2027</dd></div>
          <div><dt>Start</dt><dd>21:00</dd></div>
          <div><dt>Locatie</dt><dd>Industrieweg 1062, Herk-de-Stad</dd></div>
        </dl>
        <ul v-if="fases.length" class="mwfw-phases">
          <li v-for="fase in fases" :key="fase.naam" class="mwfw-phase" :class="`is-${fase.status}`">
            <span class="mwfw-phase__name">{{ fase.naam }}</span>
            <span class="mwfw-phase__dots" aria-hidden="true"></span>
            <span class="mwfw-phase__price">{{ fase.prijs || 'Prijs volgt' }}</span>
            <span class="mwfw-phase__badge">{{ BADGE[fase.status] || fase.status }}</span>
          </li>
        </ul>
      </div>
      <div class="mwfw-ticket__stub">
        <span class="mwfw-ticket__barcode" aria-hidden="true"></span>
        <span class="mwfw-ticket__cta">{{ tekst.cta }}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </span>
      </div>
    </div>
    <!-- draaiende stempel -->
    <span class="mwfw-ticket__stamp" aria-hidden="true">
      <svg viewBox="0 0 100 100">
        <defs><path id="mwfw-stamp-ring" d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0" /></defs>
        <circle cx="50" cy="50" r="49" fill="#2b2a20" />
        <circle cx="50" cy="50" r="45.5" fill="none" stroke="#f4e7c8" stroke-width="1" />
        <text font-size="11" fill="#f4e7c8"><textPath href="#mwfw-stamp-ring" textLength="216" lengthAdjust="spacing">{{ tekst.stempel }}</textPath></text>
        <path transform="translate(38 38)" fill="#f4e7c8" d="M12 0c.6 5.6 6.4 11.4 12 12-5.6.6-11.4 6.4-12 12-.6-5.6-6.4-11.4-12-12 5.6-.6 11.4-6.4 12-12Z" />
      </svg>
    </span>
  </a>
</template>

<script setup>
import { TICKET_URL, fases, verkoopStatus } from '../tickets.js'

const TEKSTEN = {
  online: { eyebrow: 'Online voorverkoop', titel: 'Koop je tickets', cta: 'Koop nu', stempel: 'Tickets nu online • MWFW 2027 •' },
  binnenkort: { eyebrow: 'Voorverkoop start binnenkort', titel: 'Tickets 2027', cta: 'Naar ticketshop', stempel: 'Tickets binnenkort • MWFW 2027 •' },
  uitverkocht: { eyebrow: 'Alle tickets zijn weg', titel: 'Uitverkocht!', cta: 'Naar ticketshop', stempel: 'Uitverkocht • MWFW 2027 • Bedankt •' }
}
const tekst = TEKSTEN[verkoopStatus]

const BADGE = { uitverkocht: 'Uitverkocht', beschikbaar: 'Nu te koop', binnenkort: 'Binnenkort' }
</script>
