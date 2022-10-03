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


function colorize(event){
    const target = event.target

    if (target.className.length) {
        target.className = ''
    } else {
        target.className = 'red'
    }
}

const select = document.createElement("SELECT")

select.addEventListener("change",changeColor)

function changeColor(event){
    console.log(event.target.value)
}