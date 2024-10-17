console.log('hello console')

/* 1) Esercizio Mail 

Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

Descrizione del problema

Cosa facciamo fare a js? 
Quali passaggi servono? 

Operazioni da svolgere 

1 - abbiamo come input l'utente che scrive la sua email 
2 - abbiamo poi una lista di nomi 
    per controllare se il nome dell' utente è sulla lista.

3 - eseguiamo un operazione di controllo sulla lista 
       per ogni elemento e stampiamo il risultato su una variabile. 
*/

const emails = 
['fede.ferri@live.com','john.wave@gmail.com','marco.celago@live.com','luigi.songino@gmail.com']

console.log(emails)

const userMail = prompt('inserisci la tua email')
console.log(userMail)

for( let i=0; i < emails.length; i++ ) {     
    
    if (emails[i] === userMail) {

        controllo = true
    } else {

        controllo = false
    }

}

console.log(controllo)
