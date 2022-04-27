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



let secondsToWait = 5;
const totalNumbers = 5;
const randomNumbers = [];



// FUNZIONI

// funzione numeri random
function getRandomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// funzione che stampa i messaggi
const printMessages = (message, numbers) => {
  document.getElementById('message').innerHTML = message;
  document.getElementById('numbers').innerHTML = numbers;
}


// Funzione che mi restituisce i numeri inseriti dall'utente
const getUserNumbers = () => {

  const numbers = [];

  while(numbers.length < totalNumbers){
    const newNumber = parseInt(prompt('Inserisci il numero che ricordi'));
    if(!numbers.includes(newNumber)){
      numbers.push(newNumber)
    }else{
      alert('Numero già inserito!')
    }
  }

  return numbers;
}


// Funzione di confronto numeri random con i numeri dell'utente
const getCorrectNumbers = (numbersToCheck) => {

  const correctNumbers= [];

  for(let i = 0; i < randomNumbers.length; i++){
    console.log('Verifico se ',randomNumbers[i], 'è presente in ', numbersToCheck);
    if(numbersToCheck.includes(randomNumbers[i])){
      correctNumbers.push(randomNumbers[i])
    }
  }

  return correctNumbers;
}



// Quando l'utente clicca sul bottone inizia parte il gioco 
document.querySelector('.button-start').addEventListener('click', btnStart);

function btnStart() {

  reset()

  // TIMING FUNCTIONS
  // stampo un nuovo messaggio ad ogni secondo, attendendo un secondo prima di partire
  const countDown = setInterval(function(){
  printMessages(`Hai ${--secondsToWait} secondi per indovinare i seguenti numeri`, randomNumbers);
  },1000);


  // Quando scadono i secondi nascondo i numeri, scrivo un messaggio e interrompo il countdown
  setTimeout(function(){

  clearInterval(countDown);
  printMessages("Quali ricordi?", '');

  }, secondsToWait * 1000);


  // Allo scadere dei secondi + 1 (per dare il tempo di leggere il messaggio) faccio partire l'interazione con l'utente
  setTimeout(function(){

  printMessages("Scrivi tutti i numeri", '');
  
  const userNumbers = getUserNumbers();
  
  const correctNumbers = getCorrectNumbers(userNumbers);
  
  if(correctNumbers.length === 0){
    printMessages('Non hai indovinato nulla!','');
  }else{
    printMessages(`Hai indovinato ${correctNumbers.length} numeri su ${totalNumbers}`, correctNumbers);
  }
  console.log(correctNumbers);

  }, (secondsToWait + 1) * 1000)


  // INIZIO
  // Genero i numeri random e li stampo
  while(randomNumbers.length < totalNumbers){

  const newRandomNumber = getRandomNumbers(1,10);

  if(!randomNumbers.includes(newRandomNumber)){
    randomNumbers.push(newRandomNumber);
  }
  }

  printMessages(`Hai ${secondsToWait} secondi per indovinare i seguenti numeri`, randomNumbers);


}


// Funzione di reset numeri e conto alla rovescia
function reset(){
  printMessages('');
}



