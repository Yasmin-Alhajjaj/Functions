/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children, 
partner's name, geographic location, job title.
outputs your fortune to the screen like so: 
"You will be a X in Y, and married to Z with N kids."
*/


function tellFortune(X,Y,Z,N){
  var t = "You will be a "+ X +" in "+ Y+ " , and married to "+ Z + " with "+ N + " kids."
 return t
 
 }
 
 console.log(tellFortune("qa","amman","marya",4))
 
 
 /*
 2
 Write a function named calculateDogAge that:
 takes 1 argument: your puppy's age.
 calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
 outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
 Ex: calculateDogAge(1);
 => "Your doggie is 7 years old in dog years!"
 */
 function calculateDogAge (x){
  var x= (x*7);
 return x;
 
 }
 console.log(calculateDogAge(10) )
 
 /*
 3
 Write a function named calculateSupply that:
 takes 2 arguments: age, amount per day.
 calculates the amount consumed for rest of the life (based on a constant max age 100).
 outputs the result to the screen like so:
 "You will need NN to last you until the ripe old age of X"
 Ex: calculateSupply(30, 3);
 => 'You will need 76650 cups of tea to last you until the ripe old age of 100;
 */
 function calculateSupply(x,y)
 {
   var x=((100-x)*365*y);
 
   return "You will need "+x+" cups of tea to last you until the ripe old age of 100"
 
 }
 
 console.log(calculateSupply(30,3))
 /*
 4
 Write a function called greet that:
 takes 1 argument: name.
 and it will return hello + name
 Ex: greet("Jouza")
 => "Hello Jouza"
 */
 
 function greet (name){
  
   return  console.log("hello "+name );
 }
 
 greet("mohammed");
 
 
 // 5
 // what is the error:
 function double(cat) {
   return 2 * x;
 }
 function double() {
   return 2 * 7;
 }
 function double() {
   return 2 * 'x';
 }
 
 
 
 
 // 6
 // fix these functions:
 function double1(x) {
   return 2 * x ;
 }
 function double2 (x){
 return 2 * x;
 }
 function double3 (x) {
   return 2 * x;}
 
 
 /*
 7
 Write a function called cube that:
 accept 1 parameter and calculate the cube of this number
 Ex: cube(4)
 => 64
 */
  
 function cube (x){
 var y = x**3;
 return y;
 
 }
 console.log(cube(5));
 
 /*
 Write a function called multiply that:
 accept 2 parameters and calculate the multiply of these 2 numbers
 Ex: multiply(3,4)
 => 12
 */
 
 
 function multiply(x,y){
   var z =x*y;
   return z;
 }
  console.log( multiply(5,6));
 
 /*
 Write a function called canIGetADrivingLicense that:
 accept 1 parameter represent the age
 and if the age greater than or equal to 20 return "yes you can"
 otherwise return "please come back after X years to get one"
 Ex: canIGetADrivingLicense(21)
 => "yes you can"
 Ex: canIGetADrivingLicense(17)
 => "please come back after 3 years to get one"
 */
 
 function canIGetADrivingLicense(x){
 
   if(x>=20){
 
     return "yes you can";
   }
   return "please come back after "+(20-x)+" years to get one";
 }
 console.log(canIGetADrivingLicense(15))
 
 
 /*
 10
 Write a function called sameLength
 that accepts two strings as arguments,
 and returns true if those strings have the same length, and false otherwise.
 **hint: how we can know string length   Ex: : "tree".length   => 4
 Ex: sameLength("tree","clue")
 => true
 Ex: sameLength("tree","car")
 => false
 */
 
 function sameLength(x ,y ){
 
   if(x.length === y.length ){
 
     return "true"
 
   }
   return "false"
 }
 console.log(sameLength("mohd","bbbbbn"));
 
 
 /*
 11
 Write a function called largerNubmer
 that accept two numbers as arguments,
 and return the first larger numbers
 Ex: largerNubmer(5,6)
 => 6
 Ex: largerNubmer(5,3)
 => 5
 */
 
 
 function largerNubmer(x,y){
 
   if(x>=y){
     return x;
   }
   return y;
 }
 
 console.log(largerNubmer(10,10));
 /*
 12
 Write a function called smallerNubmer
 that accept three numbers as arguments,
 and return the first smaller number
 Ex: smallerNubmer(8,6,7)
 => 6
 Ex: smallerNubmer(5,99,34)
 => 5
 */
 function smallerNubmer(x,y,z){
 
   if(x<y&&x<z){
 
     return x;
     
   }
   else if (y<x&&y<z){
 
     return y;
   }
   else{
     return z;
   }
 }
 console.log (smallerNubmer(3,-1,3));
 
 
 /*
 13
 Write a function called shorterString
 that accept five string as an arguments,
 and return the first shorter string
 Ex: shorterString("air","school","car","by","github")
 => by
 */
 
 function shorterString( a,b,c,d,e){
   var short=a;
   if (a.length<=b.length&&a.length<=c.length&&a.length<=d.length&&a.length<=e.length)
   {
     short=a;
     return short;
   }
 else if (b.length<=a.length&&b.length<=c.length&&b.length<=d.length&&b.length<=e.length)
 {
   short=b;
   return short;
 }
 else if (c.length<=a.length&&c.length<=b.length&&c.length<=d.length&&c.length<=e.length)
 {
   short=c;
   return short;
 }
 else if (d.length<=a.length&&d.length<=c.length&&d.length<=b.length&&d.length<=e.length)
 {
   short=d;
   return short;
 }
 else (e.length<=a.length&&e.length<=c.length&&e.length<=b.length&&e.length<=d.length)
 {
   short=e;
   return short;
 }
 }
 console.log(shorterString("sndn", "ghj", "wu", "a","tyt"));
 
 /*
 14
 Write a function called longerString
 that accept four string as an arguments,
 and return the first longer string
 Ex: shorterString("air","school","car","github")
 => school
 */
 
 function longerString(a,b,c,d){
 
   var longer=a;
   if (a.length>=b.length&&a.length>=c.length&&a.length>=d.length)
   {
     longer=a;
     return longer;
   }
 else if (b.length>=a.length&&b.length>=c.length&&b.length>=d.length)
 {
   longer=b;
   return longer;
 }
 else if (c.length>=a.length&&c.length>=b.length&&c.length>=d.length)
 {
   longer=c;
   return longer;
 }
 else(d.length>=a.length&&d.length>=c.length&&d.length>=b.length)
 {
   longer=d;
   return longer;
 }
 
 }
 console.log(longerString ("sndn", "ffff", "wf", "a","tyt"));
 
 
 
 
 
 
 /*
 15
 Write a function called isEven
 that accept 1 argument as a number,
 and return true if this number is even
 and false if this number is odd
 Ex: isEven(1)
 => false
 Ex: isEven(2)
 => true
 */
 function isEven(x){
   if(x%2==0){
     return "true";
   }
   return "fulse";
 }
 
 console.log(isEven(6));
 
 
 /*
 16
 Write a function called isOdd
 that accept 1 argument as a number,
 and return true if this number is Odd
 and false if this number is Even
 Ex: isOdd(4)
 => false
 Ex: isOdd(5)
 => true
 */
 function isOdd(x){
   if(x%2==0){
     return "fulse";
   }
   return "true";
 }
 
 console.log( isOdd(1));
 
 /*
 17
 Write a function called positive
 that accept 1 argument as a number,
 and return the positive version of the number passed
 Ex: positive(4)
 => 4
 Ex: positive(-5)
 => 5
 */
 function positive(x){
   if(x<0){
     return x*-1;
   }
   return x;
 }
 
 console.log( positive(-5));
 
 
 /*
 18
 Write a function called fullName
 that accept two parameters, firstName and lastName,
 and returns the firstName and lastName concatenated
 together with a space in between.
 Ex: fullName("Mohammad","Jouza")
 => "Mohammad Jouza"
 Ex: fullName("Alex", "Mercer")
 => "Alex Mercer"
 */
 
 function  fullName(x,y)
 {
   return x+y;
 }
 console.log(fullName("yasmin ","alhajjaj"))
 /*
 19
 Write a function called average
 that takes five numbers as inputs
 and returns the average of those numbers.
 Ex: average(1,2,3,4,5)
 => 3
 Ex: average(5,7,9,3,5)
 => 5.8
 */
 function average(a,b,c,d,e){
   var avg= (a+b+c+d+e)/5;
   return avg;
 }
 console.log(average(1,2,3,4,5));
 /*
 20
 Write a function called randomNumber
 that didnt takes any parameter
 and returns a random number between 0-1
 ** hint: you can seacrh using MDN
 Ex: randomNumber()
 => 0.2278
 Ex: randomNumber()
 => 0.475
 */
 function ran(){
   var random = Math.random(); 
 return random
 }
    console.log(ran());
 
 
 /*
 21
 Write a function called randomBetweenNumbers
 that takes 2 parameters
 and returns a random number between them
 ** hint: you can seacrh using MDN
 Ex: randomBetweenNumbers(1,8)
 => 7.5412
 Ex: randomBetweenNumbers(3,100)
 => 23
 */
 function ran1(x,y){
   var random = Math.random() * (+x - +y) + +y; 
 return random
 }
    console.log(ran1(1,3));
 
 /*
 22
 Write a function called scoreInUniversty
 that takes 1 parameters
 and returns the alpabet in the unevirsty
 A => 95-100
 B => 85-94
 C => 70-84
 D=> 50-69
 F=> 0-49
 Ex: scoreInUniversty(96)
 => "A"
 Ex: randomBetweenNumbers(3)
 => "F"
 */
 function scoreInUniversty(x){
 
   if (x>=0&&x<=49){
 
     return "F";
   }
   else if (x>=50&&x<=69){
 
     return "D";
   }
   else if (x>=70&&x<=84){
 
     return "C";
   }
   else if (x>=85&&x<=94){
 
     return "B";
   }
   else if (x>=95&&x<=100){
 
     return "A";
   }
  
 }
 
 console.log (scoreInUniversty(5))
 /*
 23
 Write a function called counter
 that will returns a number bigger
 than the one that returnd before
 and start from 0
 Ex: counter()
 => 1
 Ex: counter()
 => 2
 Ex: counter()
 => 3
 */
 var x=0;
 function counter()
 
 {
  
 
   x=x+1;
   return x;
 }
 console.log (counter());
 console.log (counter());
 console.log (counter());
 
 
 /*
 24
 Write a function called resetCounter
 that will reset the previuos function
 and return the number before reset and
 a string say that the counter reset
 Ex: counter()
 => 1
 Ex: counter()
 => 2
 Ex: counter()
 => 3
 Ex: resetCounter()
 => 3 and the counter reset now
 Ex: counter()
 => 1
 Ex: counter()
 => 2
 Ex: resetCounter()
 => 2 and the counter reset now
 Ex: counter()
 => 1
 */
 // var x=0;
 
 function resetCounter()
 {
   // var x=0;
 x=0;
  
   return x+" and the counter reset now";
 }
 
 console.log(resetCounter());
 console.log(resetCounter());
 console.log (counter());
 console.log (counter());
 console.log (counter());
 console.log(resetCounter());
 console.log (counter());
 console.log (counter());
 console.log (counter());
 console.log(resetCounter());
 console.log (counter());
 
 
 
 
 
 /*
 25
 // this question is in progress wait
 Write a function called guessMe
 that will take an argument (number)
 if the number not between 0 and 5 [0,1,2,3,4]
 it will return "Please insert a number between 0 and 5"
 if it is between 0 and 5, and guessed the correct number 0-5 [0,1,2,3,4]
 will return "you guess me correctly"
 if it is between 0 and 5, and not the same number randomly 0-5 [0,1,2,3,4]
 will return "you didnt guess me I was 3"
 Ex: guessMe(0)
 => "you didnt guess me I was 3"
 Ex: guessMe(10)
 =>"Please insert a number between 0 and 5"
 Ex: guessMe(-5)
 => "Please insert a number between 0 and 5"
 Ex: guessMe(3)
 => "you guess me correctly"
 */
 
 
 /*
 26
 // this question is in progress wait
 Write a function called guessMe
 that will take an argument (number)
 if the number not between 0 and 5 [0,1,2,3,4]
 it will return "Please insert a number between 0 and 5"
 if it is between 0 and 5, and guessed the correct number 0-5 [0,1,2,3,4]
 will return "you guess me correctly"
 if it is between 0 and 5, and not the same number randomly 0-5 [0,1,2,3,4]
 will return "you didnt guess me I was 3"
 Ex: guessMe(0)
 => "you didnt guess me I was 3"
 Ex: guessMe(10)
 =>"Please insert a number between 0 and 5"
 Ex: guessMe(-5)
 => "Please insert a number between 0 and 5"
 Ex: guessMe(3)
 => "you guess me correctly"
 */
 
 
 /*
 */
 
 
 /*
 */
 
 
 /*
 */
 
 
 /*
 */
 
 
 
 
 /////////// Advanced part
 