let input = ""; 



function ShowValue(button){
   input = input + button.value;
   document.getElementById("results").innerHTML = input;
}

function quickMath(){
    document.querySelector("#results").innerHTML = eval(input);
}

function Reset(button){
   document.querySelector("#results").innerHTML = "0"
   input = "";
}

function rem1(button){
    input = input.replace(input.slice(-1), "");
    document.getElementById('results').innerHTML = input;
}