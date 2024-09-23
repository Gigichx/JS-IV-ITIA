// Qui scriviamo il codice JS

let firstName = prompt("Qual è il tuo nome?")


while (firstName === null) {
    firstName = prompt("Inserisci un nome valido")
}

// prompt è una funzione che chiede un input all'utente 

// alert mnostra un popup nella finestre del browser; blocca il codice
alert("Benvenuto " + firstName)

// console.log() logga in console il messaggio passato come  
console.log("Benvenuto " + firstName)

/*
    Chiediamo un nome all'utente+
        - Se l'utente non insersce il nome continuiamo a chiederlo finchè non inserisce il nome
   
    Facciamo 7 domande all'utente:
    - A ciascuna domanda l'utente può rispondere con una parola
    - Prendere in input la risposta dell'utente
    - fare un sanitize di base della risposta utente
    - controllare se la risposta è quella giusta
    - in caso affermativo incrementare il numero di risposte corrette
    - in caso negativo mostrare la risposta corretta all'utente

    Al termine delle sette domande mostrare con console.log la percentuale di risposte esatte
*/
let correctAns = 0;
let wrongAns = 0;
let questions = 7;

let firstAns = prompt("Chi ha scritto la divina commedia?")
while (firstAns === null) {
    firstName = prompt("Compilare di nuovo la risposta")
}
firstAns = firstAns.toLowerCase()
firstAns = firstAns.trim()
if (firstAns === "dante") {
    alert("risposta esatta")
    correctAns++
} else {
    alert("risposta sbagliata, la risposta corretta è Dante")
    wrongAns++
}

let secondAns = prompt("Qual è la capitale dell'Italia?")
while (secondAns === null) {
    secondAns = prompt("Compilare di nuovo la risposta")
}
secondAns = secondAns.toLowerCase()
secondAns = secondAns.trim()
if (secondAns === "roma") {
    alert("risposta esatta")
    correctAns++
} else {
    alert("risposta sbagliata, la risposta corretta è roma")
    wrongAns++
}

let thirdAns = prompt("Come si chiama il portiere della nazionale?")
while (thirdAns === null) {
    thirdAnsAns = prompt("Compilare di nuovo la risposta")
}
thirdAns = thirdAns.toLowerCase()
thirdAns = thirdAns.trim()
if (thirdAns === "donnarumma") {
    alert("risposta esatta")
    correctAns++
} else {
    alert("risposta sbagliata, la risposta corretta è donnarumma")
    wrongAns++
}

let fourthdAns = prompt("Come si chiama il coordinatore di classe della IV ITIA/A?")
while (fourtAns === null) {
    fourtAns = prompt("Compilare di nuovo la risposta")
}
fourtAns = fourtAns.toLowerCase()
fourtAns = fourtAns.trim()
if (fourtAns === "mastrofilippo") {
    alert("risposta esatta")
    correctAns++
} else {
    alert("risposta sbagliata, la risposta corretta è mastrofilippo")
    wrongAns++
}

let fifthdAns = prompt("Il retropassaggio è fallo?")
while (fifthAns === null) {
    fifthAns = prompt("Compilare di nuovo la risposta")
}
fifthtAns = fifthAns.toLowerCase()
fifthAns = fifthAns.trim()
if (fifthAns === "si") {
    alert("risposta esatta")
    correctAns++
} else {
    alert("risposta sbagliata, la risposta corretta è si")
    wrongAns++
}