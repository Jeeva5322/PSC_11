const elementColors = {
    C: 'rgb(54, 162, 235)',
    H: 'rgb(255, 99, 132)',
    N: 'rgb(75, 192, 192)',
    O: 'rgb(255, 159, 64)',
    S: 'rgb(153, 102, 255)',
    F: 'rgb(255, 205, 86)',
    P: 'rgb(201, 203, 207)',
    Cl: 'rgb(255, 99, 71)',
    Na: 'rgb(46, 139, 87)',
    K: 'rgb(138, 43, 226)'
};

const chartOptions = {
    plugins: {
        legend: {
            position: 'right',
            labels: {
                font: {
                    size: 12
                }
            }
        },
        tooltip: {
            callbacks: {
                label: function(context) {
                    const label = context.label || '';
                    const value = context.raw || 0;
                    return `${label}: ${value} atoms`;
                }
            }
        }
    },
    maintainAspectRatio: false
};

function createDrugCard(drug) {
    const card = document.createElement('div');
    card.className = 'drug-card';

    card.innerHTML = `
        <h2>${drug.name}</h2>
        <p class="drug-code">Code: ${drug.code}</p>
        <div class="chart-container">
            <canvas></canvas>
        </div>
        <div class="composition-grid">
            ${Object.entries(drug.composition)
                .map(([element, count]) => `
                    <div class="composition-item">
                        <span>${element}:</span>
                        <span>${count}</span>
                    </div>
                `).join('')}
        </div>
        <div class="properties">
            <h3>Properties:</h3>
            <p><strong>Usage:</strong> ${drug.usage}</p>
            <p><strong>Side Effects:</strong> ${drug.sideEffects}</p>
        </div>
    `;

    const canvas = card.querySelector('canvas');
    const chartData = {
        labels: Object.keys(drug.composition),
        datasets: [{
            data: Object.values(drug.composition),
            backgroundColor: Object.keys(drug.composition).map(element => 
                elementColors[element] || '#777777'
            ),
            borderWidth: 1
        }]
    };

    new Chart(canvas, {
        type: 'pie',
        data: chartData,
        options: chartOptions
    });

    return card;
}

function filterDrugs(searchTerm) {
    const term = searchTerm.toLowerCase();
    return drugData.filter(drug => 
        drug.code.toLowerCase().includes(term) || 
        drug.name.toLowerCase().includes(term)
    );
}

function updateDisplay(searchTerm = '') {
    const drugGrid = document.getElementById('drugGrid');
    const noResults = document.getElementById('noResults');
    const filteredDrugs = filterDrugs(searchTerm);

    drugGrid.innerHTML = '';

    if (filteredDrugs.length === 0) {
        noResults.classList.remove('hidden');
        drugGrid.classList.add('hidden');
    } else {
        noResults.classList.add('hidden');
        drugGrid.classList.remove('hidden');
        filteredDrugs.forEach(drug => {
            drugGrid.appendChild(createDrugCard(drug));
        });
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', (e) => {
        updateDisplay(e.target.value);
    });

    updateDisplay();
});