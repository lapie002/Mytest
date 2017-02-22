//exo 1

"bruno".length
"cake".length;
"I'm coding like a champ!".length>10; -> true;

// modal window to confirm renvoie true when clicked
confirm("I feel awsome!");
//similaire
alert("Let's go down the first road!");
// ask an entry from user
prompt("Where are you from");


// ecrire dans le dom
console.log(2*5);
console.log("Hello");


// modulo
console.log(14%3);
console.log(99%8);
console.log(11%3);

//substring  "derf" de 3 a jusqu'a 6 inclu
"wonderful day".substring(3,7);
//autre exemple
console.log("January".substring(0,3));

// declare your variable here:
var myAge=30;
console.log(myAge);

/*************************************************PART II******************************************************************/

// FUNCTION SYNTAX
var sayHello = function(name) {
    console.log('Hello ' + name);
};
sayHello("bruno");




// function
var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};
divideByThree(6);




//avec un return :
// Parameter is a number, and we do math with that parameter
var timesTwo = function(number) {
    return number * 2;
};
// Call timesTwo here!
var newNumber = timesTwo(7);
console.log(newNumber);






// global vs local
var my_number = 7; //this has global scope

var timesTwo = function(number) {
    var my_number = number * 2;
    console.log("Inside the function my_number is: ");
    console.log(my_number);
};
timesTwo(7);

console.log("Outside the function my_number is: ")
console.log(my_number);

/********************************************PART III******************************************************************************************/
// Write your very own for loop!
for(var i=1; i<11; i++){
    console.log(i);
    }



// Write your very own for loop!
for(var i=100; i<=100 && i>0; i=i-5){
    console.log(i);
    }


// array
var names = ["Melbourne", "Amman", "Helsinki", "NYC", "Paris"];

for(var i = 0; i < names.length; i++){

    console.log("I know someone called "+names[i]);
    };




// while vs for
var ps4 = 0;
while(ps4<4){
    console.log("We still sell the playstation four!!!");
    ps4=ps4+1;
    }
for (var i=0;i<4;i++){
    console.log("We still sell the playstation four!!!");
    i=i+1;
    }





// do while
var loopCondition = false;

do {
	console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");
} while (loopCondition);





//sum up do while while et for loops
// Write your code below!
for(var i = 0; i<3; i++){
    console.log("i am at "+i);
    };

var j = 3;
while(j<6){
    console.log("i am at "+j);
    j++;
    };

var k = 6;
do{
    console.log("i am at "+k);
    k++;
    }
while(k<9);


/**************************recap for et while************************************************/
var isEven = function(number) {
// isNaN(undefined); // => true
if(isNaN(number)){
return "Your input was not a number!"
}
else if(number%2 === 0){  // else if( !(number%2) )
return true;
}
else{
return false;
}
};
isEven(13);






/*****************************************switch*********************************************************************/
var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}




// exemple switch dans une function
// Write your code below!
var why = prompt("hello","name");

var question = function(param){

    switch(param){

        case'bruno':
            console.log("bruno");
            break;
        case'paul':
            console.log("paul");
            break;
        case'mat':
            console.log("mat");
            break;
        case'phil':
            console.log("phil");
            break;
        default:
            console.log("don't know you, sorry");
            break;
        };
    };
question(why);



/************************************object***************************************************/
var phonebookEntry = {};

phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
  console.log('Calling ' + this.name + ' at ' + this.number + '...');
};

phonebookEntry.phone();


//exo 1
var me = new Object();
me.name="Test";
me.age=30;

//exemple create an object in a different way sans instance
var myObj = {
    type: 'fancy',
    disposition: 'sunny'
};



//exo 2
var object1 = new Object();
var object2 = new Object();
var object3 = new Object();

object1.name="Test 1";
object1.age=1;

object2.name="Test 2";
object2.age=2;


object3.name="Test 3";
object3.age=3;





/****************************************************switch projetc************************************************************************/

var user = prompt("You encounter a troll. What do you want to do?(FIGHT, RUN, PAY)").toUpperCase();
var userStats = prompt("Are you STRONG, FAST, or WEALTHY?").toUpperCase();
var userStats2 = prompt("What items do you have? (SWORD, CAR, MONEY)").toUpperCase();

switch(user) {
    case 'FIGHT':
        console.log("You decide to fight!");
        if (userStats === "STRONG" && userStats2 === "SWORD") {
            console.log("You beat the troll!");
        }
        else {
            console.log("The troll defeats you!");
        }
        break;
    case 'RUN':
        console.log("You decide to run!");
        if (userStats === "FAST" && userStats2 === "CAR") {
            console.log("You run away from the troll!");
        }
        else {
            console.log("The troll catches and defeats you!");
        }
        break;
    case 'PAY':
        console.log("You decide to bribe the troll!");
        if (userStats === "WEALTHY" && userStats2 === "MONEY") {
            console.log("You succesfully bribe the troll!");
        }
        else {
            console.log("You don't have enough money to bribe the troll!");
        }
        break;
    default:
        console.log("Command not recognized!");
}

/***************************************************************************************************************************************/



/************************************ARRAY AND OBJECTS**********************************/

//Create an array, myArray. Its first element should be a number, its second should be a boolean, its third should be a string, and its fourth should be... an object!
var me = new Object();
me.name="Bruno";
me.age=30;

var myArray = [1,true,"string",me];


//exo
// Here is an array of multiples of 8. But is it correct?
var multiplesOfEight = [8,16,24,32,40,58];

// Test to see if a number from the array is NOT a true
// multiple of eight. Real multiples will return false.
var answer = multiplesOfEight[5] % 8 !== 0;


/********************************CONTACT LIST***********************************************/


var friends = {};
friends.bill = {
  firstName: "Bill",
  lastName: "Gates",
  number: "(206) 555-5555",
  address: ['One Microsoft Way','Redmond','WA','98052']
};
friends.steve = {
  firstName: "Steve",
  lastName: "Jobs",
  number: "(408) 555-5555",
  address: ['1 Infinite Loop','Cupertino','CA','95014']
};

var list = function(obj) {
  for(var prop in obj) {
    console.log(prop);
  }
};

var search = function(name) {
  for(var prop in friends) {
    if(friends[prop].firstName === name) {
      console.log(friends[prop]);
      return friends[prop];
    }
  }
};

list(friends);
search("Steve");

/**********************mon exo list avec des objets****************************************************/
var friends = new Object();

friends.bill = new Object();
friends.steve = new Object();

friends.bill.firstName = "Bill";
friends.bill.lastName = "Gates";
friends.bill.number = "(206) 555-5555";
friends.bill.address = ['One Microsoft Way','Redmond','WA','98052'];

friends.steve.firstName = "Steve";
friends.steve.lastName = "Jobs";
friends.steve.number = "(408) 555-5555";
friends.steve.address = ['1 Infinite Loop','Cupertino','CA','95014'];

var list = function(objectParam){

    for(var key in objectParam){
        console.log(key);
        };
    };

var search = function(name) {
  for(var prop in friends) {
    if(friends[prop].firstName === name) {
      console.log(friends[prop]);
      return friends[prop];
    }
  }
};

list(friends);
search("Steve");
/**********************************************************************************************************/



/***************************************OBJETC I**************************************************************/
//exo 1 Print out the numbers from 1 - 20
// The rules:
//For numbers divisible by 3, print out "Fizz".
//For numbers divisible by 5, print out "Buzz".
//For numbers divisible by both 3 and 5, print out "FizzBuzz" in the console.
//Otherwise, just print out the number.

for(var i = 1; i<=20; i++){
    if((i%3 == 0) && (i%5 == 0)){
        console.log("FizzBuzz");
        }
    else if(i%3 == 0){
        console.log("Fizz");
        }
    else if(i%5 == 0){
        console.log("Buzz");
        }
    else{
        console.log(i);
        }
    };



// EXO FILM
var answer = prompt("Toy Story 2, Finding Nemo, or Lion King");

var getReview = function (movie){
    switch(movie){
        case "Toy Story 2":
            return "Great story. Mean prospector.";
            break;
        case "Finding Nemo":
            return "Cool animation, and funny turtles.";
            break;
        case "The Lion King":
            return "Great songs.";
            break;
        default:
            return "I don't know!";
            break;
        };
};

getReview(answer);







//methods in JS
// here is bob again, with his usual properties

var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;
// this time we have added a method, setAge
bob.setAge = function (newAge){
  bob.age = newAge;
};
// here we set bob's age to 40
bob.setAge(40);
// bob's feeling old.  Use our method to set bob's age to 20
bob.setAge(20);






// autre exemple de methode
var bob = new Object();
bob.age = 17;
// this time we have added a method, setAge
bob.setAge = function (newAge){
  bob.age = newAge;
};

bob.getYearOfBirth = function () {
  return 2014 - bob.age;
};
console.log(bob.getYearOfBirth());


//The keyword this acts as a placeholder, and will refer to whichever object called that method when the method is actually used.
// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
// and down here we just use the method we already made
bob.setAge = setAge;

// change bob's age to 50 here
bob.setAge(50);


//exo
// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
bob.setAge = setAge;

// make susan here, and first give her an age of 25
var susan = new Object();
susan.age = 25;
susan.setAge = setAge;

// here, update Susan's age to 35 using the method
susan.setAge(35);








//exo rectangle Attention ici la methode n est pas une varibale elle directement applique a l'objet pas besoin de rectangle.setHeight = setHeight; contarirement a bob.
var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;
// here is our method to set the height
rectangle.setHeight = function (newHeight) {
  this.height = newHeight;
};
// help by finishing this method
rectangle.setWidth = function(newWidth){
    this.width = newWidth;
    };

// here change the width to 8 and height to 6 using our new methods
rectangle.setHeight(6);
rectangle.setWidth(8);






//exo power of
var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function() {
  return this.sideLength * 4;
};
// help us define an area method here
square.calcArea = function(){
    return Math.pow(this.sideLength,2);
    };

var p = square.calcPerimeter();
var a = square.calcArea();





//objetc with self made constuctor
function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob and susan again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
// help us make george, whose name is "George Washington" and age is 275
var george = new Person("George Washington",275);





//exo cat 'n dog
function Cat(age, color) {
  this.age = age;
  this.color = color;
}

// make a Dog constructor here
function Dog(name, age, color, breed) {
  this.name = name;
  this.age = age;
  this.color = color;
  this.breed = breed;
}





//exo homosapien
function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}

var sally = new Person("Sally Bowles",39);
var holden = new Person("Holden Caulfield",16);
console.log("sally's species is " + sally.species + " and she is " + sally.age);
console.log("holden's species is " + holden.species + " and he is " + holden.age);






//exo rectangle
function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
      return this.height * this.width;
  };
  // put our perimeter function here!
  this.calcPerimeter = function(){
      return ((this.height*2)+(this.width*2));
      };
}

var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();






//exo rabbit
function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

// now we can easily make all of our rabbits
var rabbit1 = new Rabbit("fluffy");
var rabbit2 = new Rabbit("happy");
var rabbit3 = new Rabbit("sleepy");








// array of objects
// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
// add the last family member, "timmy", who is 6 years old
family[3] = new Person("timmy", 6);







//exo Person
// Our Person constructor
function Person(name,age){
    this.name = name;
    this.age = age;
    };

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice",40);
family[1] = new Person("bob",42);
family[2] = new Person("michelle",8);
family[3] = new Person("timmy",6);
// loop through our new array
for(var i = 0; i<family.length; i++){
    console.log(family[i].name);
    };




//Passing Objects into Functions
// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
}

var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

// get the difference in age between alice and billy using our function
var diff = ageDifference(alice,billy);





// alice et billy
// Define a function called olderAge. We want the function to return the age of the person who is older.
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
};

// Make a new function, olderAge, to return the age of
// the older of two people
var olderAge = function(person1, person2) {
    var diff = person1.age - person2.age;
    if(diff>0){
        return person1.age;
        }
    else if(diff<0){
        return person2.age;
        }
    else{
        return person1.age;
        }
};

// Let's bring back alice and billy to test our new function
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

console.log("The older person is " + olderAge(alice, billy));





//refresher Literal Notation vs Constructor Notation
var spencer = {
  age: 22,
  country: "United States"
};

// make spencer2 here with constructor notation
var spencer2 = new Object();
spencer2.age = 22;
spencer2.country = "United States";




//cercle
function Circle (radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;

    };
    // define a perimeter method here
    this.perimeter = function(){
        return Math.PI * 2 * this.radius;
        };
};







/******************For In loop*****************************************************************/
var JavaScript = {
  name: "JavaScript",
  courseTime: 10
}

for(var placeholder in JavaScript) {
  console.log(placeholder);
}







/******************************************OBJETCS PART II**************************************************/
var james = {
    // add properties to this object!
    job : "programmer",
    married : false
};

function Person(job, married) {
    this.job = job;
    this.married = married;
}

// create a "gabby" object using the Person constructor!
var gabby = new Person("student",true);





//exo user
function Person(job, married) {
    this.job = job;
    this.married = married;
    // add a "speak" method to Person!
    this.speak = function(){
        console.log("Hello!");
        };
}

var user = new Person("Codecademy Student",false);
user.speak();




//exo metode literal
var james = {
    job: "programmer",
    married: false,
    speak: function(word) {
        console.log("Hello, I am feeling " + word);
    }
};

james.speak("great");
james.speak("just okay");






//exo on methods job
var james = {
    job: "programmer",
    married: false,
    sayJob: function() {
        // complete this method
        console.log("Hi, I work as a "+this.job);
    }
};

// james' first job
james.sayJob();

// change james' job to "super programmer" here
james.job = "super programmer";

// james' second job
james.sayJob();











//exo literal call of method Example:
//var someObj = {propName: someValue};
//var myProperty = "propName";
//someObj[myProperty];

var james = {
    job: "programmer",
    married: false
};

// set to the first property name of "james"
var aProperty = "job";

// print the value of the first property of "james"
// using the variable "aProperty"
console.log(james[aProperty]);






// typeof -> give the type of the variable
// complete these definitions so that they will have
// the appropriate types
var anObj = { job: "I'm an object!" };
var aNumber = 42;
var aString = "I'm a string!";

console.log(typeof anObj); // should print "object"
console.log(typeof aNumber); // should print "number"
console.log(typeof  aString); // should print "string"





//how to use hasOwnProperty in the last two lines. It returns true or false, based on whether an object has a certain property.
var myObj = {
    // finish myObj
    name: "bruno"
};

console.log( myObj.hasOwnProperty('name') ); // should print true
console.log( myObj.hasOwnProperty('nickname') ); // should print false



//exo hasOwnProperty
var suitcase = {
    shirt: "Hawaiian"
};

//console.log(suitcase.shorts);

if(suitcase.hasOwnProperty('shorts')){
    console.log(suitcase.shorts);
    }
else{
    suitcase.shorts = "Running Shorts";
    console.log(suitcase.shorts);
    }




//print each property [key] of an object
var dog = {
species: "bulldog",
age: 3,
color: brown
};
//et on conlose log
for(var property in dog) {
  console.log(property);
}




//print each value of an object
var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};
// write a for-in loop to print the value of nyc's properties
for(var property in nyc) {
  var myIndex = property;
  console.log(nyc[myIndex]);
}




//object memo
function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 35);





// make your own class here
function Circle(radius){
    this.radius = radius;
    };






//exo
function Person(name,age) {
  this.name = name;
  this.age = age;
}
// a function that prints the name of any given person
var printPersonName = function (p) {
  console.log(p.name);
};

var bob = new Person("Bob Smith", 30);
printPersonName(bob);

// make a person called me with your name and age
// then use printPersonName to print your name
var me = new Person("Bruno Lapierre",34);
printPersonName(me);







//prototype
function Dog (breed) {
  this.breed = breed;
};

// here we make buddy and teach him how to bark
var buddy = new Dog("golden Retriever");
Dog.prototype.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
/// this time it works!
snoopy.bark();







//exo prototype
function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
}
// let's make some cats!
var cheshire = new Cat("Cheshire Cat", "British Shorthair");
var gary = new Cat("Gary", "Domestic Shorthair");
// add a method "meow" to the Cat class that will allow
// all cats to print "Meow!" to the console
Cat.prototype.meow = function() {
  console.log("Meow!");
};
// add code here to make the cats meow!
cheshire.meow();
gary.meow();







//exo constructor
// create your Animal class here
function Animal(name,numLegs){
    this.name = name;
    this.numLegs = numLegs;
    };
// create the sayName method for Animal
Animal.prototype.sayName = function(){
    console.log("Hi my name is " + this.name);
    };
// provided code to test above constructor and method
var penguin = new Animal("Captain Cook", 2);
penguin.sayName();







//exo pre-heritage
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};
// create a Penguin constructor here
function Penguin(name, numLegs){
    this.name = name;
    this.numLegs = numLegs;
    };
// create a sayName method for Penguins here
Penguin.prototype.sayName = function(){
    console.log("Hi my name is " + this.name);
    };
// our test code
var theCaptain = new Penguin("Captain Cook", 2);
theCaptain.sayName();






//"DRY" principle of programming: Don't Repeat Yourself.
// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};
// define a Penguin class
function Penguin(name){
    this.name = name;
    this.numLegs = 2;
    };
// set its prototype to be a new instance of Animal
Penguin.prototype = new Animal();








//exo penguin
// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};
// define a Penguin class
function Penguin(name){
    this.name = name;
    this.numLegs = 2;
    };
// set its prototype to be a new instance of Animal
Penguin.prototype = new Animal();
var penguin = new Penguin("Boby");
penguin.sayName();





//exo Emperor prototype
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}
// create your Emperor class here and make it inherit from Penguin
function Emperor(name) {
    this.name = name;
};
Emperor.prototype = new Penguin();
// create an "emperor" object and print the number of legs it has
var mao = new Emperor("Mao");
console.log(mao.numLegs);






// Up the Food-I-mean-Prototype Chain
// original classes
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.isAlive = true;
}
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}
function Emperor(name) {
    this.name = name;
    this.saying = "Waddle waddle";
}
// set up the prototype chain
Penguin.prototype = new Animal();
Emperor.prototype = new Penguin();
var myEmperor = new Emperor("Jules");
console.log(myEmperor.saying); // should print "Waddle waddle"
console.log(myEmperor.numLegs); // should print 2
console.log(myEmperor.isAlive); // should print true





//In JavaScript all properties of an object are automatically public. Public means that they can be accessed outside the class. Think of these properties as the information a class is willing to share:
function Person(first,last,age) {
   this.firstName = first;
   this.lastName = last;
   this.age = age;
}
var john = new Person('John','Smith',30);
var myFirst = john.firstName;
var myLast = john.lastName;
//declare variable myAge set to the age of the john object.
var myAge = john.age;







// Private Variables kind of:
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
}

// create your Person
var john = new Person("John","Smith",39);

// try to print his bankBalance
console.log(john.bankBalance);
// it prints undefined to the screen







//
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;

   this.getBalance = function() {
      // your code should return the bankBalance
      return bankBalance;
   };
}

var john = new Person('John','Smith',30);
console.log(john.bankBalance);

// create a new variable myBalance that calls getBalance()
var myBalance = john.getBalance();
console.log(myBalance);








//Private Methods var private vs this public
/*Create a method called askTeller within the Person class that returns the returnBalance method. This means that it returns the method itself and NOT the result of calling that method. So you should NOT have parentheses after returnBalance.
Because askTeller returns a method, we need to call it to make it any use. This is what var myBalance = myBalanceMethod(); does.*/
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;

   var returnBalance = function() {
      return bankBalance;
   };

   // create the new function here
//askTeller should return the method itself. You should not have parentheses after returnBalance!
   this.askTeller = function(){
       return returnBalance;
       };
}
var john = new Person('John','Smith',30);
console.log(john.returnBalance);
var myBalanceMethod = john.askTeller();
var myBalance = myBalanceMethod();
console.log(myBalance);








//exo bank
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;

   this.askTeller = function(pass) {
     if (pass == 1234) return bankBalance;
     else return "Wrong password.";
   };
}
var john = new Person('John','Smith',30);
/* the variable myBalance should access askTeller()
   with a password as an argument  */
var myBalance = john.askTeller(1234);












//Looks For-In To Me
var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};
// print hello in the 3 different languages
for(var key in languages){
    if(isNaN(languages[key]))
    {
        console.log(languages[key]);
    }
    };





//Hello? Yes, This is Dog
function Dog (breed) {
    this.breed = breed;
};

// add the sayHello method to the Dog class
// so all dogs now can say hello
Dog.prototype.sayHello = function(){
    console.log("Hello this is a "+ this.breed +" dog");
    };

var yourDog = new Dog("golden retriever");
yourDog.sayHello();

var myDog = new Dog("dachshund");
myDog.sayHello();








// So Meta I Can't Take It!
// what is this "Object.prototype" anyway...?
var prototypeType = typeof Object.prototype;
console.log(prototypeType);

// now let's examine it!
var hasOwn = Object.prototype.hasOwnProperty("hasOwnProperty");
console.log(hasOwn);









//Public -> this
//Private -> var
/*
Public properties can be accessed from outside the class Public -> this
Private properties can only be accessed from within the class Private -> var
*/
function StudentReport() {
    var grade1 = 4;
    var grade2 = 2;
    var grade3 = 1;
    this.getGPA = function() {
        return (grade1 + grade2 + grade3) / 3;
    };
}
var myStudentReport = new StudentReport();

for(var x in myStudentReport) {
    if(typeof myStudentReport[x] !== "function") {
        console.log("Muahaha! " + myStudentReport[x]);
    }
}
console.log("Your overall GPA is " + myStudentReport.getGPA());





/****************************************REvision sur objet*******************************************************************/

//More People
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = new Array();
contacts[0] = bob;
contacts[1] = mary;

console.log(mary.phoneNumber);






//Displaying People
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};
var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};
var contacts = [bob, mary];
// printPerson added here
var printPerson = function(person){
    console.log(person.firstName+" "+person.lastName);
    };

 for(var i = 0;i<contacts.length;i++){
     printPerson(contacts[i]);
     };






//Displaying People  II
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};
var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};
var contacts = [bob, mary];
function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}
function list(){
    var contactsLength = contacts.length;
     for(var i = 0;i<contactsLength;i++){
     printPerson(contacts[i]);
     };
    };
list();





//Finding that Special Someone
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};
var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};
var contacts = [bob, mary];
function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}
function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}
/*Create a search function
then call it passing "Jones"*/
function search(name){
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        if(contacts[i].lastName === name){
            printPerson(contacts[i]);
            }
	}
    };
search("Jones");











//6 - We Made a Friend!
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/
function search(name){

    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        if(contacts[i].lastName === name){
            printPerson(contacts[i]);
            }
	}
    };
//search("Jones");

function add(firstName,lastName,email,phoneNumber){
    contacts[contacts.length] = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email
    };
};
add("Paul","Smith","(650) 999-9999","paul.smith@example.com");
list();






/*******************************projet Cash Register******************************************************************/

//Create the object called cashRegister
//and initialize its total property
function cashRegister(total){

    this.total = total;

    };

//Using dot notation change the total property
var cashRegister = new cashRegister(2.99);











//step 2 Manually Add It Up
var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    }
};

var panier = { "Eggs" : 0.98, "Milk" : 1.23, "Magazine": 4.99, "Chocolate": 0.45 };

//call the add method for our items
function add(panier){
    for(var i in panier){
       cashRegister.total += panier[i];
    }
    return cashRegister.total;
    };

//Show the total bill
add(panier);
console.log('Your bill is '+cashRegister.total);




















// 3 - Short-Term Memory
var cashRegister = {
    total: 0,
//insert the add method here
    add: function(itemCost){
        this.total += itemCost;
    },
    scan: function (item) {
        switch (item) {
        case "eggs":
            this.add(0.98);
            break;

        case "milk":
            this.add(1.23);
            break;

        //Add other 2 items here
        case "magazine":
            this.add(4.99);
            break;

        case "chocolate":
            this.add(0.45);
            break;

        }
        return true;
    }
};


//Scan 2 eggs and 3 magazines
cashRegister.scan ("eggs");
cashRegister.scan ("eggs");
cashRegister.scan ("magazine");
cashRegister.scan ("magazine");
cashRegister.scan ("magazine");
//Show the total bill
console.log('Your bill is '+cashRegister.total);






















// 4 - I Have to Scan It More Than Once?
var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    },
    scan: function(item,qte) {
        switch (item) {
        case "eggs": this.add(0.98*qte); break;
        case "milk": this.add(1.23*qte); break;
        case "magazine": this.add(4.99*qte); break;
        case "chocolate": this.add(0.45*qte); break;
        }
    }
};

// scan each item 4 times
cashRegister.scan ("eggs",4);
cashRegister.scan ("milk",4);
cashRegister.scan ("magazine",4);
cashRegister.scan ("chocolate",4);

//Show the total bill
console.log('Your bill is '+cashRegister.total);










// 5 - Bleep Bleep
var cashRegister = {
    total:0,
    lastTransactionAmount:0,

    //Dont forget to add your property
    add: function(itemCost) {
        this.total +=  itemCost;
    },
    scan: function(item,quantity) {
        switch (item) {
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },


    rescan: function(item) {
        switch (item) {
        case "eggs": this.voidLastTransaction(0.98); break;
        case "milk": this.voidLastTransaction(1.23); break;
        case "magazine": this.voidLastTransaction(4.99); break;
        case "chocolate": this.voidLastTransaction(0.45); break;
        }
        return true;
    },
    //Add the voidLastTransaction Method here
    voidLastTransaction: function(itemCost) {
        this.total -=  itemCost;
    }

};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',1);
cashRegister.scan('chocolate',4);

//Void the last transaction and then add 3 instead
cashRegister.rescan('chocolate');

//Show the total bill
console.log('Your bill is '+cashRegister.total);


















// 6 - Over the Moon
// create a constructor for the StaffMember class
function StaffMember(name, discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);

//Create a StaffMember for yourself called me
var me = new StaffMember("Bruno",20);












// 7 - You Deserved It!
function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);

// Create yourself again as 'me' with a staff discount of 20%
var me = new StaffMember("me",20);

var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // Create a new method applyStaffDiscount here
    applyStaffDiscount: function(employee) {
        this.total -= this.total * (employee.discountPercent/100);
    }
    };



cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
// Apply your staff discount by passing the 'me' object
// to applyStaffDiscount
cashRegister.applyStaffDiscount(me)

// Show the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));
