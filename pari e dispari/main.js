// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

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

  while (!isNumberValid || userNumber === NaN) {
    userNumber = parseInt(prompt(message));
    if (min === 0 && max === 0)
      isNumberValid = true; //se i valori sono di default == non vengono inseriti non controllo per minimo e massimo
    else if (userNumber >= min && userNumber <= max) isNumberValid = true;
  }

  return userNumber;
}

const userChoice = askString(
  ["Pari", "pari", "p", "P", "Dispari", "dispari", "D", "d"],
  "Scegli tra pari e dispari"
);

const userNumber = askNumber();

console.log("Il tuo numero è", userNumber);
