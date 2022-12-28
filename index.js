let homePts = document.getElementById("home-pts");
let guestPts = document.getElementById("guest-pts");
let guestScr = 0;
let homeScr = 0;

function add1Home() {
    homeScr += 1;
    homePts.innerText = homeScr;
}

function add2Home() {
    homeScr += 2;
    homePts.innerText = homeScr;
}

function add3Home() {
    homeScr += 3;
    homePts.innerText = homeScr;
}

function add1Guest() {
    guestScr += 1;
    guestPts.innerText = guestScr;
}

function add2Guest() {
    guestScr += 2;
    guestPts.innerText = guestScr;
}

function add3Guest() {
    guestScr += 3;
    guestPts.innerText = guestScr;
}