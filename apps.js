// data types :
/*//multiline comment in javascript
1-strings,2-integer/number,3-booleans(true/false),4-arrays,5-objects
*/

let name = "Mike"
let height = 50

function submit(){
var input = document.getElementById(inputField).value
var input =parseInt(input);//data type conversion
var input = input + 1
console.log(typeof(input))
}

let adult = true;//boolean
let fruit = ['mango','banana','apple',90,false]//list|array|
console.log(typeof(fruit[4]))

let person = {
    firstname:'Ada',
    lastname:'lovelace',
    age : 18,
    address :{
        country :'Kenya',
        city :'Nairobi',
        street : 'Haile',

    },
    children :["stan","Mary"]

}
function saveItem(){
    var input = document.getElementById("inputField").value
    localStorage.setItem('inputField',input);
    showwelcomeMessage(input)
}

function showwelcomeMessage(input){
    var messageElement = document.getElementById("showmessage")
    messageElement.textContent = "we have saved your input as " + inputField;
}

var storage = localStorage.getItem("inputField");
if(storage){
    showwelcomeMessage(saveItem)
}
