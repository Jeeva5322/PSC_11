
const database = {
    rm: [],
    m: [],
    d: [],
    r: []
};

let idCounter = 1;

function register(type) {
    const address = document.getElementById(`${type}-address`).value;
    const name = document.getElementById(`${type}-name`).value;
    const place = document.getElementById(`${type}-place`).value;

    if (!address || !name || !place) {
        alert('Please fill in all fields');
        return;
    }

    const entity = {
        id: `${type.toUpperCase()}${idCounter++}`,
        name,
        place,
        address
    };

    database[type].push(entity);

    updateTable(type);

    document.getElementById(`${type}-address`).value = '';
    document.getElementById(`${type}-name`).value = '';
    document.getElementById(`${type}-place`).value = '';
}
function updateTable(type) {
    const tbody = document.getElementById(`${type}-list`);
    tbody.innerHTML = '';

    database[type].forEach(entity => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entity.id}</td>
            <td>${entity.name}</td>
            <td>${entity.place}</td>
            <td>${entity.address}</td>
        `;
        tbody.appendChild(row);
    });
}
function connectWallet() {
    const mockAddress = '0x' + Array(40).fill(0).map(() => 
        Math.floor(Math.random() * 16).toString(16)
    ).join('');
    
    document.getElementById('accountAddress').textContent = 
        mockAddress.slice(0, 6) + '...' + mockAddress.slice(-4);
}

document.addEventListener('DOMContentLoaded', () => {
    ['rm', 'm', 'd', 'r'].forEach(type => updateTable(type));
    document.querySelector('.logo-btn').addEventListener('click', connectWallet);
});