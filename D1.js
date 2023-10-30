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

 
 /* SCRIVI QUI LA TUA RISPOSTA */

/*  I principali tipi di dati in Javascript sono 5: 
 - Numeri: è un tipo di dato che si scrive senza apici. Comprende sia i numeri interi che quelli con la virgola (ATTENZIONE! in Javascript invece della virgola si usa il punto) oppure negativi, cioè con un - davanti.
 - Stringhe: è un tipo di dato che si scrive tra apici doppi o singoli. Tra gli apici possiamo scrivere lettere, numeri, anche caratteri speciali come l'apostrofo, ma per fare ciò dobbiamo usare il simbolo \ davanti. Dentro agli apici può anche non esserci scritto nulla.
 - Booleani: è un tipo di dato che come valori ha solamente questi due: true (vero) e false (falso). Serve per prendere delle decisioni in base a quale dei due valori abbiamo.
 - Null: è un tipo di dato che non corrisponde agli altri dati che abbiamo descritto.
 - Undefined: è un tipo di dato a cui non abbiamo assegnato nessun valore. */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var name = "Melissa";

// console.log(name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

a = 12;
b = 20;

// console.log(a + b);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var name = "Canu";
// console.log(name);
const name3 = "Melissa";
// const name3 = "Canu";
// console.log(name3);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var sottrazione = x - 4;
// console.log(sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
let name2 = "John";
let verificaUguaglianza = name1 === name2;
// console.log(verificaUguaglianza);

let res = name1.toLowerCase() === name2.toLowerCase();
// console.log(res);
