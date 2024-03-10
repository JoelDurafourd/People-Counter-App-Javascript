//document.getElementById("count-el").innerText = 5

let peopleCount = 0

let countEl = document.getElementById("count-el")

function increment() {
    peopleCount = peopleCount + 1
    countEl.innerText = peopleCount
    console.log(peopleCount)
}

function resetToNothing() {
    countEl.innerText = 0
    peopleCount = 0
}