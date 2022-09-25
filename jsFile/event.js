// added backgroundColor
// Option: 2 [We will use this ***********]
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// Option: 3 (Prat One)
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// Option: 3 (Part Two)
const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

// Option: 4 (Part One)
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// Option: 4 (Part Two)
const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})
// Option: 4 (Final) [We will use this sometimes **********]
// document.getElementById('id-name').addEventListener('click', function(){})
document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})

// Added color to the h1 tag
document.getElementById('heading').addEventListener('click', function () {
    document.body.style.color = 'red';
})