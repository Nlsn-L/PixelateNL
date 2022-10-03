// Your code here

const table = document.getElementsByTagName('table')[0]

function makeRow() {
    const row = document.createElement('tr')
    for (let i = 0; i < 20; i++) {
        const td = document.createElement('td')
        row.appendChild(td)
    }
    table.appendChild(row)
}

makeRow();
makeRow();

const addRowButton = document.getElementById('add-row');
addRowButton.addEventListener('click', function() {
    makeRow();
});

table.addEventListener('click', function (colorize) {
    console.log('clicked')
})