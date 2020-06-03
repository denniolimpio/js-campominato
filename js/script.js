// Il computer deve generare 16 numeri casuali tra 1 e 100.
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.



// il computer genera 16 numeri casuali

function numberGenerator(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

for ( var i = 1; i <= 16; i++) {

  var computerNumber = numberGenerator(1, 100);
  console.log( computerNumber);

}


// chiedo all'utente di inserire un numero alla volta compreso tra 1 e 100

var numeroUtente = parseInt( prompt("Inserisci un numero compreso tra 1 e 100"));

while ( isNaN(numeroUtente) || (numeroUtente === 0) || (numeroUtente > 100) ) {

   numeroUtente = parseInt(prompt(" Houston c'è un problema..Inserisci un numero compreso tra 1 e 100"));

   console.log(numeroUtente);

}

console.log(numeroUtente);

// verifico se il numero inserito dall'utente è compreso tra l array dei numeri generati dal computer

// quando il giocatore inserisce un numero che è presente tra quelli generati dal computer, la partita finisce.

// comunico il vincitore della partita.
