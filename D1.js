/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/


let a="boolean";
console.log(a)
let composedString=a + 'ci sono solo "true" or "false" (non ce ne sono altre)';
console.log(composedString);
let b="string";
console.log(b);
let compstring=b + "è un testo tra virgolette";
console.log(compstring);
let c="number";
console.log(c);
let cstring=c + "Sono i numeri";
console.log(cstring);
let d="undefined";
console.log(d)
let cstring1=d + "l'assenza di valore";
console.log(cstring1);
let e="null";
console.log(e);
let cstring2=e + "è una variabile che è stata svuotata.";
console.log(cstring2);


/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName="Oleksandra";
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let num1=12;
let num2=20;
let somma= num1 + num2;
console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x=12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let num3=4;
let sottrazione= num3 - x;
console.log(sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";

if (name1 !== name2) {
    console.log("name1 è diverso da name2");
} else {
    console.log("name1 è uguale a name2");
}

if (name1.toLowerCase() === name2.toLowerCase()) {
    console.log("Dopo la trasformazione in lowercase, name1 è uguale a name2");
} else {
    console.log("Dopo la trasformazione in lowercase, name1 è diverso da name2");
}

