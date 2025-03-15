// CHAPTER NO. 17-20

// Question No.1
// var arr =[];

// Question No.2
// var matrix = [
//     [0 ,1, 2 ,3  , "<br />"],
//     [1, 0, 1, 2 ,"<br />"],
//     [2, 1, 0, 1]
//   ];
//   document.write(matrix);

// Question No.3
// for(var i=1;i<=10;i++){
//     document.write(i ,"<br>")}

// Question No.4
// var user_table =prompt("Enter the Table number :");
// var user_length = prompt("What is the length you want :");
//     document.write("Multiplication table of " , user_table , "<br>");
//     document.write("Length " , user_length , "<br>")
// for (i=1 ; i<=user_length; i++){
//     document.write(user_table,"*",i , "=" , user_table * i ,"<br>");
// }

// Question No.5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i], "<br>" )
// }
// document.write("Element at index 0 is " , fruits[0] ,"<br>" ,"Element at index 1 is " , fruits[1] ,"<br>",  "Element at index 2 is " , fruits[2] , "<br>", "Element at index 3 is " ,fruits[3] ,"<br>", "Element at index 4 is " , fruits[4]  );

// Question No.6
// document.write("Counting : ")
// for (var i = 1; i <= 15; i++) {
//     document.write( i , "," , "<br>" );
// }
// document.write("Reverse : ")
// for (var i = 15; i >= 1; i--) {  
//       document.write( i , "," );
// }
// document.write("Even : ")
// for (var i = 0; i <= 20; i += 2) {  
//       document.write(i , ",")
// }

// document.write("Odd : ")
// for (var i = 1; i <= 20; i += 2) {
//     document.write(i , ",") }

// document.write("Series : ")
// for (var i = 2; i <= 20; i += 2) {  
//             document.write(i , "k,") }
    

// Question No.7

// var arr = ["cake" , "appepie" ,"cookie" ,"chips" , "patties"];
// var userInput = prompt("Enter bakers items : ");

// var flag = false;
// for (var i = 0; i < arr.length; i++) {
//   if (userInput.toLowerCase() === arr[i]) {
//     flag = true;
//     console.log(userInput, "is available at index" , i , "in our bakery");
//   }
// }
// if (flag === false) {
//   console.log("We are sorry" , userInput ,"is not available in our bakery");
// }

// Question No.8
// var numbers = [24, 53, 78, 91, 12];
// var largestNumber = numbers[0];
// for (var i = 1; i < numbers.length; i++) { 
//     if (numbers[i] > largestNumber) {
//         largestNumber = numbers[i];  
//     }
// }

// document.write(largestNumber);  

// Question No.9
// var numbers = [24, 53, 78, 91, 12];
// var smallestNumber = numbers[0];
// for (var i = 1; i < numbers.length; i++) { 
//         if (numbers[i] < smallestNumber) {
//             smallestNumber = numbers[i];  
//         }
//     }
//     document.write(smallestNumber);  
    

// Question No.10
// for (var i = 1 ; i<=100 ; i++){
//     if(i % 5 === 0){
//         document.write(i ,",")
//     }
// }