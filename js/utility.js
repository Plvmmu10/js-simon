function rndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}



//Function to pick initial numbers
function initialNumbers(){
    
    numbersBox.innerHTML=`<h4 class = "text-danger">${availableNumbers}</h4>`;

    setTimeout(pickNumbers,3000);
}

// Function to hide initials numbers and make an input appear where user will put his/her numbers
function pickNumbers(){
    numbersBox.innerHTML =``;
    userBox.classList.remove("invisible");
}

// Function to verify result
function checkResult(){

    let resultTry = numberInput.value;

    let resultSplitted = resultTry.split(" ");

    for (let i = 0; i < resultSplitted.length; i++){

        let resultVerified = resultSplitted.map(function(i){
            return  parseInt(i);
        })

        if (resultVerified[i] === availableNumbers[i]){
            resultBox.innerHTML=`<h2 class="text-success">I numeri sono giusti</h2>`;
        }else{
            resultBox.innerHTML=`<h2 class="text-danger">I numeri sono errati</h2>`;
        }
         
    }
    availableNumbers= [];
}

