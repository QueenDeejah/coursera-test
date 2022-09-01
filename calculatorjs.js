let screen;
let buttons;
let symButtons;
let calmethod;
let clearAll;
			
screen = document.getElementById('textBox');
screen2 = document.getElementById('answerBox');
buttons = document.getElementsByClassName('obj');
symButtons = document.getElementsByClassName('obj1');
calmethod = document.getElementById('descriptionBox');
clearAll = document.getElementById('clearHistory');

function bLeft(){
    screen.value += "(";
}

function bRight(){
    screen.value += ")";
}
/*function back(){
    screen.value = "";
}*/
function clear(){
    screen.value = "";
    screen2.value = "";
}
function num7(){
    screen.value += "7";
}
function num8(){
    screen.value += "8";
}
function num9(){
    screen.value += "9";
}
function divis(){
    screen.value += "/";
}
function num4(){
    screen.value += "4";
}
function num5(){
    screen.value += "5";
}
function num6(){
    screen.value += "6";
}
function times(){
    screen.value += "*";
}
function num1(){
    screen.value += "1";
}
function num2(){
    screen.value += "2";
}
function num3(){
    screen.value += "3";
}
function minus(){
    screen.value += "-";
}
function num0(){
    screen.value += "0";
}
function point(){
    screen.value += ".";
}

function plus(){
    screen.value += "+";
}

buttons[0].addEventListener('click', num7);
buttons[1].addEventListener('click', num8);
buttons[2].addEventListener('click', num9);
buttons[3].addEventListener('click', num4);
buttons[4].addEventListener('click', num5);
buttons[5].addEventListener('click', num6);
buttons[6].addEventListener('click', num1);
buttons[7].addEventListener('click', num2);
buttons[8].addEventListener('click', num3);
buttons[9].addEventListener('click', num0);
buttons[10].addEventListener('click', point);

symButtons[0].addEventListener('click', bLeft);
symButtons[1].addEventListener('click', bRight);
/*symButtons[2].addEventListener('click', back);*/
symButtons[3].addEventListener('click', clear);
symButtons[4].addEventListener('click', divis);
symButtons[5].addEventListener('click', times);
symButtons[6].addEventListener('click', minus);
symButtons[7].addEventListener('click', plus);

/*
symButtons[8].addEventListener('click', equalTo);


secondRow.map( obj => {
    obj.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                textBox.innerText = '';
                break;
            case '=':
                try{
                    textBox.innerText = eval(textBox.innerText);
                } catch {
                    textBox.innerText = "Error";
                }
                break;
            case '&larr;':
                if (textBox.innerText){
                    textBox.innerText = textBox.innerText.slice(0, -1);
                }
                break;
            default:
                textBox.innerText += e.target.innerText;

        }
    });
}); 
*/
function calculate() {
    var p = screen.value;
    var q = eval(p);
    document.getElementById("answerBox").value = q;
}

function backspace(){
    screen.value = screen.value.slice(0, -1);
    
}

function showcalc() {
    var p = screen.value;
    var q = screen2.value;
    if (p == ""){
        document.getElementById("descriptionBox").value = "Null - No Input\n";
    }
    else{
    document.getElementById("descriptionBox").value +="You calculated " + p + "  to give  " + q + "\n"; 
    }
}

function wipeHistory(){
    document.getElementById("descriptionBox").value = "";
    
}

function tellOpenBracket(){
    document.getElementById("descriptionBox").value += "You opened a bracket\n";
}

function tellCloseBracket(){
    document.getElementById("descriptionBox").value += "You closed a bracket\n";
}

function tellClearField(){
    document.getElementById("descriptionBox").value += "You cleared the text field\n";
}

function tellNumSeven(){
    document.getElementById("descriptionBox").value += "You pressed button 7\n";
}

function tellNumEight(){
    document.getElementById("descriptionBox").value += "You pressed button 8\n";
}

function tellNumNine(){
    document.getElementById("descriptionBox").value += "You pressed button 9\n";
}
function tellNumSix(){
    document.getElementById("descriptionBox").value += "You pressed button 6\n";
}
function tellNumFive(){
    document.getElementById("descriptionBox").value += "You pressed button 5\n";
}
function tellNumFour(){
    document.getElementById("descriptionBox").value += "You pressed button 4\n";
}
function tellNumThree(){
    document.getElementById("descriptionBox").value += "You pressed button 3\n";
}
function tellNumTwo(){
    document.getElementById("descriptionBox").value += "You pressed button 2\n";
}
function tellNumOne(){
    document.getElementById("descriptionBox").value += "You pressed button 1\n";
}
function tellNumZero(){
    document.getElementById("descriptionBox").value += "You pressed zero button\n";
}
function tellPoint(){
    document.getElementById("descriptionBox").value += "You inserted a point\n";
}
function tellDivide(){
    document.getElementById("descriptionBox").value += "You pressed the division button\n";
}
function tellMultiply(){
    document.getElementById("descriptionBox").value += "You pressed the multiplication button\n";
}
function tellSubtract(){
    document.getElementById("descriptionBox").value += "You pressed the subtraction button\n";
}
function tellAdd(){
    document.getElementById("descriptionBox").value += "You pressed the addition button\n";
}













