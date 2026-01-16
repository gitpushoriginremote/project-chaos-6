const eventList = document.getElementById('event-list');
const injectBtn = document.getElementById('inject-btn');

const CHAOS_TYPES = ['Quantum Glitch', 'Gravity Failure', 'Logic Loop', 'Atmospheric Static'];

const state = {
    incidents: [
        { id: 1, type: 'Initial Breach', severity: 'Critical' }
    ]
};

function renderEvents() {
    // TODO: The UI isn't clearing before re-rendering. It just appends duplicates!
    state.incidents.forEach(incident => {
        const card = document.createElement('div');
        card.className = 'event-card';
        card.innerHTML = `<strong>${incident.type}</strong> - Severity: ${incident.severity}`;
        eventList.appendChild(card);
    });
}

injectBtn.addEventListener('click', () => {
    const newIncident = {
        id: Date.now(),
        type: CHAOS_TYPES[Math.floor(Math.random() * CHAOS_TYPES.length)],
        severity: 'High'
    };

    // LOGIC BUG: The developer forgot to actually add the incident to the state array
    console.log('Attempting to inject chaos...', newIncident);
    
    // state.incidents.push(newIncident); // Oops, I commented this out? Or did I?
    
    renderEvents();
});

// Initial boot
document.addEventListener('DOMContentLoaded', renderEvents);