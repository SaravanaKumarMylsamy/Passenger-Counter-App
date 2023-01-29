let saveEl = document.getElementById("entry")
let count = 0
let countEl = document.getElementById("count-el")
console.log(countEl)

function increment(){
    count = count + 1
    countEl.innerText = count 
}


function save(){
    let total = count + " + "
    saveEl.textContent += "  " + total
    console.log(count)
console.log(saveEl.innerText)
countEl.innerText = 0
count = 0
}