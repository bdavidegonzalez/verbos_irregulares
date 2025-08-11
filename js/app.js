document.addEventListener('DOMContentLoaded', () => {
    const verbs = [
        ['be', 'was/were', 'been', 'ser, estar'],
        ['begin', 'began', 'begun', 'empezar'],
        ['buy', 'bought', 'bought', 'comprar'],
        ['choose', 'chose', 'chosen', 'elegir'],
        ['come', 'came', 'come', 'venir'],
        ['do', 'did', 'done', 'hacer'],
        ['drive', 'drove', 'driven', 'conducir'],
        ['drink', 'drank', 'drunk', 'beber'],
        ['eat', 'ate', 'eaten', 'comer'],
        ['feel', 'felt', 'felt', 'sentir'],
        ['find', 'found', 'found', 'encontrar'],
        ['get', 'got', 'gotten', 'obtener'],
        ['give', 'gave', 'given', 'dar'],
        ['go', 'went', 'gone', 'ir'],
        ['have', 'had', 'had', 'tener'],
        ['hear', 'heard', 'heard', 'oír'],
        ['know', 'knew', 'known', 'conocer'],
        ['learn', 'learned/learnt', 'learned/learnt', 'aprender'],
        ['leave', 'left', 'left', 'dejar, abandonar'],
        ['make', 'made', 'made', 'hacer'],
        ['read', 'read', 'read', 'leer'],
        ['run', 'ran', 'run', 'correr'],
        ['say', 'said', 'said', 'decir'],
        ['see', 'saw', 'seen', 'ver'],
        ['sing', 'sang', 'sung', 'cantar'],
        ['sit', 'sat', 'sat', 'sentarse'],
        ['sleep', 'slept', 'slept', 'dormir'],
        ['speak', 'spoke', 'spoken', 'hablar'],
        ['stand', 'stood', 'stood', 'estar de pie'],
        ['swim', 'swam', 'swum', 'nadar'],
        ['take', 'took', 'taken', 'tomar, coger'],
        ['tell', 'told', 'told', 'decir'],
        ['think', 'thought', 'thought', 'pensar'],
        ['win', 'won', 'won', 'ganar'],
        ['write', 'wrote', 'written', 'escribir']
    ];

    let currentPage = 0;
    const verbsPerPage = 5;
    const tableBody = document.querySelector('#verb-table tbody');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    function displayVerbs() {
        tableBody.innerHTML = '';
        const start = currentPage * verbsPerPage;
        const end = start + verbsPerPage;
        const verbsToDisplay = verbs.slice(start, end);

        verbsToDisplay.forEach(verb => {
            const row = document.createElement('tr');
            verb.forEach(item => {
                const cell = document.createElement('td');
                cell.textContent = item;
                row.appendChild(cell);
            });
            tableBody.appendChild(row);
        });
        updateButtons();
    }

    function updateButtons() {
        prevBtn.disabled = currentPage === 0;
        nextBtn.disabled = (currentPage + 1) * verbsPerPage >= verbs.length;
    }

    prevBtn.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            displayVerbs();
        }
    });

    nextBtn.addEventListener('click', () => {
        if ((currentPage + 1) * verbsPerPage < verbs.length) {
            currentPage++;
            displayVerbs();
        }
    });

    displayVerbs();
});
