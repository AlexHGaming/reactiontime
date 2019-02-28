let startTime;
let endTime;
let diff;
let txt;
let x;
let random;

function gotogame() {
x = 0;
changeStyle(`game`, `display: block`);
changeStyle(`introduction`, `display: none`);
startGame();
}

function startGame() {
let randomms = Math.floor((Math.random() * 1000) + 3000);
let convert = String(randomms).charAt(1)
if (convert < 2) convert = 5;
random = `${convert}.${randomms}`;
x = setInterval(one, (random * 1000));
console.log(`${random} seconds`);
}

function one() {
turnlight();
startTime = Date.now();
document.getElementById(`clicknow`).innerHTML = "Click now!";
clearInterval(x)
}

function sub() {
endTime = Date.now();
diff = endTime - startTime;
if (isNaN(diff)) return failed();
result()
}

function turnlight() {
let usercolour = document.getElementById('usercolour').value.trim();
changeStyle(`changebackground`, `background-color: ${usercolour}`);
}

function failed() {
changeHTML(`header`, `FINAL RESULT<br>Too early!`);
document.getElementById('game').style = `display: none`;
document.getElementById(`tryagain`).style = "display: block";
clearInterval(x)
}

function result() {
changeStyle('changebackground', `background-color: #303030`)
document.getElementById(`game`).style = `display: none;`;
document.getElementById(`header`).innerHTML = `FINAL RESULT`;
document.getElementById(`time`).innerHTML = `${diff / 1000} seconds (${diff}ms)`;
document.getElementById(`tryagain`).style = `display: block`;
}

function tryagain() {
location.reload();
}

function changeHTML(id, content) {
return document.getElementById(id).innerHTML = content;
}

function changeStyle(id, content) {
return document.getElementById(id).style = content;
}
