// Ticketinfo voor de lopende band en het ticket. Aanpassen gebeurt in src/tickets.json.
import data from './tickets.json'

export const TICKET_URL = 'https://mwfw.eventsquare.store/nl/mdktue4sygby/9tnvdqwbiiwj'

export const fases = data.fases || []

export const actieveFase = fases.find((fase) => fase.status === 'beschikbaar') || null

// 'online' | 'uitverkocht' | 'binnenkort'
export const verkoopStatus = actieveFase
  ? 'online'
  : fases.length && fases.every((fase) => fase.status === 'uitverkocht')
    ? 'uitverkocht'
    : 'binnenkort'
