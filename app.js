// function greeting(name, callback){
//     let sentence= "hello my name is " + name;
//     let otherSentence = callback();
//     return sentence + otherSentence;
// }

// function anotherGreeting(){
//     let sentence = " I forgot my last name";
//     return sentence;
// }

// let myName = "lizz"
// console.log(greeting(myName, anotherGreeting));

// //make a function printArray
// //make a callback that 
// //exercise


// // function printArray(array, callback){
// // for(let i =0; i < array.length; i ++){//iterate through array
// //     let number = array[i];//declare a variable to show the indicies of the array
// //     console.log(number);
// // }
// // callback(array);//callback function, lets do it again

// // }
// // function printArrayAgain(array){
// // for( let i = 0; i < array.length; i++){
// //     let number = array[i];

// //     console.log(number);
// // }
// // }
// // const numbersArray = [1,2,3,4,5,6,7,8,9,];
// // printArray(numbersArray, printArrayAgain);





// function calculator(num1, num2, callbackOne, callbackTwo){
   
// let result = callbackOne(num1, num2) + callbackTwo(num1, num2);
// return result;

// }

// function addNumbers(num1, num2){
//     let result = num1 + num2;

//     return result;

// }
// function subtractNumbers(num1, num2){
//     let result = num1 - num2;

//     return result;

// }
// console.log(calculator(5,77, addNumbers, subtractNumbers));

//make a superhero function
//take in two callbacks

//return a string in each callback describing the super power


function gamora(superPower1, superPower2){

    let allSuperPowers3= superPower1() + " and " + superPower2();
    
    return allSuperPowers3;

}

function superPower1(){
    let power1= "Super strength";
    return power1;

}

function superPower2(){
    let power2="Kicking butt while looking cute";
    return power2;

}

console.log(gamora( superPower1, superPower2));


//Rome's example

function sonic(superPowerOne, superPowerTwo){
    let allSuperPowers = superPowerOne() + " and " + superPowerTwo();

    return allSuperPowers;
}
function superSpeed(){
    let power = "I can run 1000 mph";

    return power;
}
function superSpin(){
    let spin = "I can spin 1000 mph";

    return spin;
}
console.log(sonic(superSpeed, superSpin));