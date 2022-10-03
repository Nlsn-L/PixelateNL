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

const addRowButton = document.getElementById('add-row');
addRowButton.addEventListener('click', function() {
    makeRow();
});

table.addEventListener('click', colorize)

const select = document.getElementsByTagName('select')[0]
let chosenColor = 'red'

select.addEventListener("change",function (event) {
    chosenColor = event.target.value
})

function colorize(event){
    const target = event.target

    if (target.className.length) {
        target.className = ''
    } else {
        target.className = chosenColor
    }
}
