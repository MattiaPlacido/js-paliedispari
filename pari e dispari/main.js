// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//FUNZIONI

function askString(whitelist = [], message = "Inserisci una stringa") {
  let isStringValid = false;
  let userString;

  while (!isStringValid) {
    userString = prompt(message);
    if (whitelist.includes(userString) || whitelist.length === 0) {
      isStringValid = true;
    }
  }

  return userString;
}

function askNumber(min = 0, max = 0, message = "Inserisci un numero") {
  let isNumberValid = false;
  let userNumber;

  while (!isNumberValid) {
    userNumber = parseInt(prompt(message));

    if (min === 0 && max === 0 && !isNaN(userNumber))
      isNumberValid = true; //se i valori sono di default e quindi non vengono inseriti mini e massimi passo il numero a prescindere
    else if (userNumber >= min && userNumber <= max && !isNaN(userNumber))
      isNumberValid = true;
  }

  return userNumber;
}

function generateNumber(min, max) {
  return Math.floor(Math.random() * max + min);
}

function isEven(n) {
  return n % 2 == 0;
}

// MAIN

const userChoice = askString(["Pari", "Dispari"], "Scegli tra pari e dispari");

const userNumber = askNumber(1, 5, "Inserisci un numero da 1 a 5");

const cpuNumber = generateNumber(1, 5);

console.log("Il numero del computer è : ", cpuNumber);

(userChoice === "Pari" && isEven(userNumber + cpuNumber)) ||
(userChoice === "Dispari" && !isEven(userNumber + cpuNumber))
  ? console.log("Hai vinto!")
  : console.log("Hai perso!");
