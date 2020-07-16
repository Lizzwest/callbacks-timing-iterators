function greeting(name, callback){
    let sentence= "hello my name is " + name;
    let otherSentence = callback();
    return sentence + otherSentence;
}

function anotherGreeting(){
    let sentence = " I forgot my last name";
    return sentence;
}

let myName = "lizz"
console.log(greeting(myName, anotherGreeting));