/*
  Visualizzare in pagina 5 numeri casuali. 
  Da lì parte un timer di 5 secondi.
  Dopo 5 secondi l’utente deve inserire, uno alla volta, i numeri che ha 
  visto precedentemente, tramite il prompt().
  Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali 
  dei numeri da indovinare sono stati individuati.

  1. stampo in pagina 5 numeri casuali
  2. parte il timer di 5 secondi
  3. allo scadere del timer chiedo 5 volte con prompt di inserire i 5 numeri
  4. confronto i 5 numeri inseriti con quelli di partenza
  5. stampo quanti e quali sono stati individuati
*/


const fiveNumbersOutput = document.querySelector('.five-numbers');

const countDownOutput = document.querySelector('.count-down');

// console.log('bottoni', document.querySelector('.button-start'));

document.querySelector('.button-start').addEventListener('click', btnInizia);

let counter = 5;

let timer;

function btnInizia(){

  reset();

  const numeri = generateNumbers();

  console.log('numeri generati', numeri);

  for (let index = 0; index < numeri.length; index++) {

    // console.log(numeri[index]); 
    fiveNumbersOutput.innerHTML = fiveNumbersOutput.innerHTML + ' ' + numeri[index];
    
  }

  timer = setInterval( countDown, 1000 );
  countDownOutput.innerHTML = timer;
}


// Funzione conto alla rovescia
function countDown(){

  console.log(counter);
  counter--

  if( counter < 0 ){
    clearInterval( timer );
    console.log('TEMPO SCADUTO');
  }

}



// Funzione che genera i 5 numeri
function generateNumbers(){

  const numeriGenerati = [];

  while( numeriGenerati.length < 5 ){
    const num = getRndInteger(1, 10)

    if( !numeriGenerati.includes(num )){
      numeriGenerati.push(num);
    }
  }

  return numeriGenerati;
}


// funzione numeri random
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// Funzione di reset numeri e conto alla rovescia
function reset(){
  fiveNumbersOutput.innerHTML = '';
  countDownOutput.innerHTML = '';
}