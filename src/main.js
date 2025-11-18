import './main.css'
// Kleine interactive helpers (alpine is optioneel; je kunt ook plain JS gebruiken).


// Keyboard shortcuts (T -> tickets, G -> gallery)
document.addEventListener('keydown', (e) => {
if (e.key.toLowerCase() === 't') location.hash = '#tickets';
if (e.key.toLowerCase() === 'g') location.hash = '#gallery';
});