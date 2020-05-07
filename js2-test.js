// Name:
// Class:

// JavaScript1

/* 1. Create a function, named logObj, that:
    - Takes 1 argument: an object, with 3 properties
    - Loops over the object and put each value into a separate variable
    - Concatenates the values into a single string
    - Log to the console the string, including the following: '{NAME} is {AGE} and works as an {JOB}!'
    - Return the string

    Expected output:
    'Noer is 28 and works as an Education Director'
*/

const person = {
    name:"Zekiye",
    age:"29",
    job:"Software Developer"
}
function personInformation (person){

    const personStr =`${person.name} is ${person.age} works as an ${person.job}`
   
    return personStr;
}
console.log(personInformation(person));


/* 2. Create a function, named logNumbers, that:
      - Takes 2 arguments: a start number and an end number
      - Has a loop that starts from the start number and ends until the end number
      - Log to the console each number, however...
      - If the number is a multiple of 3 output the string “Fizz”,
      - If the number is a multiple of 5 output the string “Buzz”
      - If the number is a multiple of 3 AND 5 output the string “FizzBuzz”
      - Make use of the modulo operator and check for the remainder: %

      Expected output:
      logNumbers(1, 15);
      1
      2
      Fizz
      4
      Buzz
      6
      ...
      13
      14
      FizzBuzz

      Use the following values: 1 (start number) and 100 (end number)
*/

function logNumbers(start=0,end=0){

    for(let number = start; number<=end; number++){
        if(number % 3 === 0 && number % 5 === 0 ){
            console.log("FizzBuzz");
        }else if(number % 3 === 0 ){
            console.log("Fizz");
        }else if(number % 5 === 0){
            console.log("Buzz");
        }else{
            console.log(number);
        }
    }
}

logNumbers(1, 15);



// JavaScript2

/* 3. Create a function, named toNumbers, that:
      - Takes in 1 argument: an array of strings
      - Get the index position number of each value
      - Create a new array that includes all these numbers 
      - Make use of the map() function
      - Log to the console the array of numbers
      - Return the array of numbers

      Expected output:
      [1, 2, 3, 4]

      Use the following array: const letters = ['a', 'b', 'c', 'd'];
*/

const letters = ['a', 'b', 'c', 'd'];

function toNumbers(letters){
   return letters.map((item,index) => index+1);
}
console.log(toNumbers(letters));

/* 4. Create a function, called injectBooksToDOM, that:
      - Takes 1 argument: an array of objects
      - Loops over the array
      - Injects each object's content into the DOM in an unordered list
      - Make use of the forEach() function
      - Returns true if it works, false if it doesn't
  
      Target the '#root' element in 'index.html'.
      Use the following object: 
      const books = [
            {
                  bookName: "The Nature of Software Development",
                  author: "Ron Jeffries",
                  coverURL:
                        "https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png"
            },
            {
                  bookName: "Clean Code",
                  author: "Robert Cecil Martin",
                  coverURL:
                        "https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX258_BO1,204,203,200_.jpg"
            }
      ];
*/


/*       My Answer  
const books = [
    {
          bookName: "The Nature of Software Development",
          author: "Ron Jeffries",
          coverURL:
                "https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png"
    },
    {
          bookName: "Clean Code",
          author: "Robert Cecil Martin",
          coverURL:
                "https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX258_BO1,204,203,200_.jpg"
    }
];

function injectBooksToDOM(books){

    const root = document.getElementById("root");
    const list = document.createElement("ul");

    books.forEach(book => {

        const listItem = document.createElement("li");
        const img = document.createElement("img");
        img.src=book.coverURL;
        img.width="200"
        img.height="200"
        listItem.appendChild(img);

        const pTag = document.createElement("p");
        pTag.innerText = `${book.bookName}-${book.author}`;
        listItem.appendChild(pTag);

        list.appendChild(listItem);
        
    });

    root.appendChild(list);
}

injectBooksToDOM(books);

*/


/*
5. What's the output for this snippet? Is the output deterministic (always the same) or might it depend on the browser
we run this in? 
Explain your answer in less than 150 words. (The 'yes or no' answer doesn't really matter to us, 
the explanation why is the important part)

function test() {
    console.log('one');
    setTimeout(function() {
        console.log('two');
        setTimeout(function() {
            console.log('three');
        }, 0);
    }, 1000);
    setTimeout(function() {
        console.log('four');
        setTimeout(function() {
            console.log('five');
        }, 1000);
    }, 0);
    console.log('six');
}
test(); // ?
*/


function test() {
    console.log('one');
    setTimeout(function() {
        console.log('two');
        setTimeout(function() {
            console.log('three');
        }, 0);
    }, 1000); //I will be called this function as first setTimeout in order to explanation be easy// it will be wait 1 sec after that  this function will be run
    setTimeout(function() {
        console.log('four');
        setTimeout(function() {
            console.log('five');
        }, 1000);
    }, 0); // I will be called this function as second setTimeout // it will be immediatly because time is setted as 0.
    console.log('six');
}
test(); 

// First output should be one. First timeout will not be work. Because it must wait for a second. 
// it will go to the next step. It will be worked second setTimeout and it will output the console as four.
// Second settimeout doesnt have to wait because timeout is set to zero .
// inner secondTimeout function was setted as 1 sec  so  this function will not be worked at that moment
// firsttimeout will work and output will be two. inner function timeout was setted as 0 sec. but it will not work at that moment.
// Because secondtimeout inner function will worked and output will be five.
// and then firsttimeout inner function will be run and output will be three.

