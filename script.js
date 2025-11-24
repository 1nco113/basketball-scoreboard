let defaultHome = document.getElementById("scoreHome")
let defaultGuest = document.getElementById("scoreGuest")
let rez1 = 0
let rez2 = 0

function addOneHome() {
    rez1 += 1
    defaultHome.innerText = rez1
}

function addTwoHome() {
    rez1 += 2
    defaultHome.innerText = rez1
}

function addThreeHome() {
    rez1 += 3
    defaultHome.innerText = rez1
}


/* Guest */

function addOneGuest() {
    rez2 += 1
    defaultGuest.innerText = rez2
}

function addTwoGuest() {
    rez2 += 2
    defaultGuest.innerText = rez2
}

function addThreeGuest() {
    rez2 += 3
    defaultGuest.innerText = rez2
}

function resetScore() {
    rez1 = 0
    rez2 = 0
    defaultHome.innerText = rez1
    defaultGuest.innerText = rez2
}
