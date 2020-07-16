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


function superHero(power1, power2, superPower1, superPower2){

    let resul= callback1(power1) + callback2(power2);
    return resul;

}

function superPower1(power1){
    let power1= "x-ray vision";
    return power1;

}

function superPower2(power2){
    let power2="telepathy";
    return power2;

}

console.log(superHero( superPower1, superPower2));
