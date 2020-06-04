// Il computer deve generare 16 numeri casuali tra 1 e 100.
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// chiedo al giocatore di inserire la difficolta.
// Mi accerto che il giocatore inserisca correttamente la scelta ( tra livello 1, 2 e 3)

var difficolta = prompt( " scegli il livello di difficolta del gioco [ 1 - 3]");
while ( (difficolta < 1) || (difficolta >= 4 )|| isNaN(difficolta)) {
  difficolta = prompt( " Errore scegli un livello di difficolta compreso tra 1 e 3");
  difficolta++;
}
console.log( " livello di difficoltà  scelto " + difficolta);


//  variabili

// rangeMax indica " la forbice " di numeri tra cui il giocatore può scegliere
var rangeMax = 100;
// mineNumber, rapp il numero di mine presenti nel gioco
var numeroMine = 16;

var messaggio;
// numTentativiGiocatore è uguale alla differenza tra il range di numeri ( es. 100) e il numero di mine ( 16)
var numTentativiGiocatore = rangeMax - numeroMine;
console.log( " numero Tentativi Giocatore " + numTentativiGiocatore );

// Genero un array di 16 numeri casuali. [mine]
var arrayMine = generoArrayMine(rangeMax, numeroMine); // ho invocato la mia funzione per generare il numero casuale
// console.log(arrayMine);




// creo una variabili che tenga conto del numero di input ( num inseriti) dall'utente per confrontarla al numTentativiGiocatore disponibili
// inizializzo la variabile inputUtente a 0
var inputUtente = 0;

// creo una variabile booleana, se minaPresente è true interrompo il ciclo

var minaPresente = false;

// WHILE. Devo chiedere all'utente di inserire un numero ad ogni ciclo.
// Le condizioni che devono verificarsi affinchè il ciclo si interrompa sono:
// a) L'utente inserisce un numero tra quelli presenti nell'array delle bombe ( e quindi perde).
// b) L'utente esaurisce i tentativi possibili  - vedi numTentativiGiocatore -  ( e quindi vince).

while ((inputUtente < numTentativiGiocatore ) && (minaPresente === false )) {

  var numeroGiocatore = parseInt( prompt ( "inserisci un numero da 1 a 100"));

  // validazione
  while (( numeroGiocatore < 1) || (numeroGiocatore > rangeMax )|| (isNaN(numeroGiocatore))) {
     numeroGiocatore = parseInt( prompt ( "Errore. inserisci un numero da 1 a 100"));

  } if ( controlloElementiArray(numeroGiocatore, arrayMine) === true) {
    minaPresente = true;
  }
  else {
    minaPresente = false;

  console.log("numero inserito: " + numeroGiocatore);

  //interrompo il ciclo
  inputUtente++;

}
}
console.log( " numero degli input " + inputUtente);

// output
// a) minPresente true, L'utente perde.
// b) minPresente false, L'utente  vince.

if ( minaPresente === true) {
  messaggio = " BOOOOM, purtroppo hai beccato la mina."
} else {
  messaggio = " Complimenti, hai vinto!"
}

alert(messaggio);
console.log(arrayMine);




//le mie funzioni

// #1 La Funzione  genera 16 numeri random
function generoArrayMine (rangeMax, numeroMine ) {
  // creo l'array dove  inserire i numeri generati dalla funzione
  var campoMinato = [];
  // la funzione deve creare 16 numeri casuali, SENZA ripetizioni.
  // il ciclo dura fino a quando la lunghezza di campoMinato è < 16
  while ( campoMinato.length < numeroMine ) {
    var numeroCasuale = Math.floor(Math.random() * (rangeMax - 1) ) + 1;
    // aggiungo il numero generato da numeroCasuale ad ogni ciclo a campoMinato[] .
    // !! Il numero generato viene aggiunto a campoMinato[] SOLO SE non è gia presente.
    // Se la funzione controlloElementiArray è false, cioè non ci sono ripetizioni di numeri allora eseguo il push.
    if (controlloElementiArray(numeroCasuale, campoMinato) === false) {
      campoMinato.push(numeroCasuale)
    }

  } // fine while

    // la funzione mi ritorna campoMinato, interrompo la funzion e.
    return campoMinato;

}


// #2 La funzione verifica se il numero generato è gia presente nell'array
// Utilizzo una variabile booleana. Se il numero generato  è già presente nell'array
// cioè se ( num === listaArray) allora controlloElementiArray è true, altrimenti è false.

function controlloElementiArray ( num, listaArray) {
  var numGeneratoPresente = false;

for ( var i = 0; i < listaArray.length; i++) {
  if ( num === listaArray [i]) {
    numGeneratoPresente = true;
  }

}

  return numGeneratoPresente;
}
