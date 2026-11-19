import { createApp } from 'vue'
import App from './app.vue'
import LineupApp from './lineup-app.vue'
import LineupTeaser from './components/LineupTeaser.vue'
import TicketMarquee from './components/TicketMarquee.vue'
import TicketCard from './components/TicketCard.vue'

// Mount Sponsors app
const sponsorsEl = document.getElementById('app')
if (sponsorsEl) createApp(App).mount(sponsorsEl)

// Mount Lineup app
const lineupEl = document.getElementById('lineup-app')
if (lineupEl) createApp(LineupApp).mount(lineupEl)

// Mount Line-up teaser (swipe-kaarten op de homepage)
const teaserEl = document.getElementById('lineup-teaser')
if (teaserEl) createApp(LineupTeaser).mount(teaserEl)

// Mount lopende band + ticket (homepage; teksten uit src/tickets.json)
const marqueeEl = document.getElementById('ticket-marquee')
if (marqueeEl) createApp(TicketMarquee).mount(marqueeEl)

const ticketEl = document.getElementById('ticket-card')
if (ticketEl) createApp(TicketCard).mount(ticketEl)
