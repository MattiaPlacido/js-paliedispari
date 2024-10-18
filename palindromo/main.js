// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//FUNZIONI

function isPalindrome(string) {
  let reverse = string.split("").reverse().join("");
  return reverse.toLowerCase() === string ? true : false;
}

//MAIN

const userWord = prompt("Inserisci una parola per verificare sia palindroma");

isPalindrome(userWord)
  ? console.log("La tua parola è palindroma!")
  : console.log("La tua parola non è palindroma!");
