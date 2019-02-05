//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance

function Car(brand, color){
    this.brand = brand;
    this.colour = color;
}; 

var Car1 = new Car("Toyota", "Red");

console.log(Car1);

Car.prototype.type = function(){
    console.log( " Electric ");
}



//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

let myArray = [1,2,3,4,5,6,7,8,9,10];
let myArraySlice = myArray.slice(4,5);
console.log(myArraySlice); 


//3. Delete the last number in the array that you created above.

myArray.splice(9,1);

console.log(myArray);


//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 

function replaceMyFruits (){
var myText = "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied."

var myNewText = myText.replace(/Strawberries/, "Bananas").replace(/strawberry/gi, "bananas").replace(/strawberries/gi, "bananas"); 
console.log(myNewText);
}

replaceMyFruits();
Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.


//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

var randomClubs = ["AIK", "Arsenal", "Manchester United", "Milan"]; 

console.log(randomClubs); 

function randomCars(){
    var randomClubs = ["Tesla", "Audi", "Fiat", "Toyota"];
    console.log(randomClubs);
}


//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

let myPeople =[ 
    {
      Name:"Bob Mareley",
      Profession:"Singer"
    },
    {
      Name:"Barack Obama",
      Profession:"President"
    },
    {
      Name:"Alexander Sem",
      Style:"Student"
    }
  ];

function searchName(Name){
    return myPeople.filter(function(who){
        return who.Name.toLowerCase().includes(Name.toLowerCase());
});
};

let findTheName = searchName("Obama");
console.log(findTheName);  


//7. Create a simple function that logs the date.


function whatDateIs() {
    let today = new Date();
    console.log(today); 
} 
whatDateIs();
