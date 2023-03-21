// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

let numbersBox = document.getElementById('numbers');
let numberBtn = document.querySelector('button');
let userBox = document.getElementById('userBox');
let resultBtn = document.getElementById('checkResult');
let numberInput = document.getElementById('numberInput');
let resultBox = document.getElementById('result');

let availableNumbers = [];
    for (let i = 0; i < 5; i++){
    let number = rndNumber(1,100);
    availableNumbers.push(number);
}

numberBtn.addEventListener('click', initialNumbers);

resultBtn.addEventListener('click', checkResult);

