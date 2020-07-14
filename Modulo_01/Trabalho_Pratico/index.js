window.addEventListener('load', init);

let inputColorR,
  inputColorG,
  inputColorB,
  inputResultColorR,
  inputResultColorG,
  inputResultColorB,
  inputSquare;

function init() {
  // select imputs colors
  inputColorR = document.querySelector('#txtColorR');
  inputColorG = document.querySelector('#txtColorG');
  inputColorB = document.querySelector('#txtColorB');

  // select inputs Results
  inputResultColorR = document.querySelector('#txtResultColorR');
  inputResultColorG = document.querySelector('#txtResultColorG');
  inputResultColorB = document.querySelector('#txtResultColorB');

  // input square
  inputSquare = document.querySelector('#dvSquare');

  // set event listener
  inputColorR.addEventListener('input', setValueResult);
  inputColorG.addEventListener('input', setValueResult);
  inputColorB.addEventListener('input', setValueResult);

  setValueResult();
}

function setValueResult() {
  const r = inputColorR.value;
  const g = inputColorG.value;
  const b = inputColorB.value;

  inputResultColorR.value = r;
  inputResultColorG.value = g;
  inputResultColorB.value = b;

  console.log('r', r);
  console.log('g', g);
  console.log('b', b);

  setColorSquare(r, g, b);
}

function setColorSquare(r, g, b) {
  // document.querySelector('#dvSquare').classList.remove('square');

  let divSquare = document.querySelector('#dvSquare');

  divSquare.setAttribute('style', `background-color: rgb(${r},${g}, ${b})`);
  inputSquare;
}
