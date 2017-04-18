"use strict";

var input = document.getElementById("input-field-1");
var height = document.getElementById("input-field-2");
var submit = document.getElementById("submit-button");
var resetButton = document.getElementById("reset");

function reload () {
    window.location.reload();
}

function treeRules (event) {
    var trees = {};
    trees.character = input.value;
    trees.height = height.value;
//assigning the key vars is not neccessary but helped me
    var key1 = trees.character;
    var key2 = trees.height;
    console.log(key2, "NO");

    if (key1 === "" || key2 === "") {
        alert("Both fields must have a value. Enter something Yo!");
    } else if (key1.length > 1) {
        alert("Please enter one character for Input");
    } else if (isNaN(key2) || key2.length > 1) {
        alert("Please enter single value or a number");
    } else {
        tree(trees);
    }
}
//when function is called pass object var name where something is, something is my placeholder
function tree (something) {
    var space = " "; //add a space to center your characters

    //this is the amount of characters that prints first then must be increased
    var charAmount = 1;

    //Just do this...it keeps the last line from having an additional space
    //Also this is how you tell your console how many spaces to add on each line
    var spaceAmount = something.height -1;
//loop through your line height then add 1 eah loop
    for (var i = 0; i < something.height; i++) {
        //take your empty string, use .repeat(spaceAmount) to add your spaces same for character
        var consoleOuput = space.repeat(spaceAmount) + something.character.repeat(charAmount);
        // now increment your character amount by two to make it look like the picture
        //otherwise it will not print out as many characters
        charAmount +=2;
        //now remove a space for each line that is displayed, just one!
        spaceAmount--;
        //now log that shit and drop the mic
        console.log(consoleOuput);
    }
}

function pressEnter (e){
    console.log("press enter");
    if (e.keyCode == 13) {
        treeRules();
    }
}

submit.addEventListener("click", treeRules);
input.addEventListener("keypress", pressEnter);
height.addEventListener("keypress", pressEnter);
resetButton.addEventListener("click", reload);



