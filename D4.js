/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/*
const l1 = parseFloat(prompt("Inserisci un numero"));
const l2 = parseFloat(prompt("Inserisci un numero"));

function area(l1, l2) {
  return l1 * l2;
}
console.log(area(l1, l2));
 */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/*
const n1 = parseInt(prompt("Inserisci un numero"));
const n2 = parseInt(prompt("Inserisci un numero"));

function crazySum(n1, n2) {
  if (n1 === n2) {
    return (n1 + n2) * 3;
  } else {
    return n1 + n2;
  }
}
console.log(crazySum(n1, n2));
*/

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/*
const n1 = parseInt(prompt("Inserisci un numero"));

function crazyDiff(n1) {
  if (n1 > 19) {
    return Math.abs((n1 - 19) * 3);
  } else {
    return Math.abs(n1 - 19);
  }
}
console.log(crazyDiff(n1));
 */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/*
const n = parseInt(prompt("Inserisci un numero"));

function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}
console.log(boundary(n));
 */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/*
let nome = "";

function epify(nome) {
  if (nome.indexOf("EPICODE") === 0) {
    return nome;
  } else {
    return "EPICODE " + nome;
  }
}
console.log(epify(nome));
 */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/*
const n = parseInt(prompt("Inserisci un numero"));

function check3and7(n) {
  if (n % 3 === 0 || n % 7 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(check3and7(n));
 */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/*
let nome = "EPICODE";

function reverseString(nome) {
  const rev = nome.split("");
  const revdone = rev.reverse();
  const newnome = revdone.join("");
  return newnome;
}
console.log(reverseString(nome));
 */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* 
const stringa = "non ho voglia di fare altro";

function upperFirst(stringa) {
  let div = stringa.split(" ");
  for (let i = 0; i < div.length; i++) {
    let maiuscola = div[i].charAt(0).toUpperCase();
    div[i] = maiuscola + div[i].slice(1);
  }
  return div.join(" ");
}
console.log(upperFirst(stringa));
*/

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/*
const stringa = "non aprite quel computer";

function cutString(stringa) {
  let div = stringa.split("");
  div.pop();
  div.shift();
  return div.join("");
}
console.log(cutString(stringa));
 */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/*
const n = parseInt(prompt("Inserisci la quantità di numeri per l'array"));
let random = [];

function giveMeRandom(n) {
  for (let i = 0; i < n; i++) {
    random[i] = Math.floor(Math.random() * 10);
  }
  return random;
}
console.log(giveMeRandom(n));
 */
