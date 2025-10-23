// Javascript Topics
// 1. Data types
// 2. Variable Declaration
// 3. Operator
// 4. Looping statement
// 5. Conditional statement
// 6. Functions
// 7. Array and string methods
// 8. DOM
// 9. Project.

// 1. Data types -> str,int,float,boolean,Biginit,null, and undefined.

// alert()
// console.log()
// console.log(10);
// console.log(10.25);
// console.log("wajid@!@##!122344");
// console.log('wajid@!##2333');
// console.log(BigInt(151564));
// console.log(null);
// console.log(undefined);
// console.log(15>6);


// 2. Variable Declaration -> var,let and const

// var anyname = datatype;
// let anyname = datatype;
// const anyname = datatype;

// Temperal Dead Zone.
// console.log(myname);
// var myname = 'wajid';
// var myname = 'darani';
// var myname = 10;

// console.log(myname);
// let myname = 'wajid';
// let myname1 = 10;


// const myname = 'wajid';
// const myname1 = 10;
// console.log(myname,myname1);


// 3. Operator -> Assignment, Arithmetic, Logical, Conditional,and Bitwise Operator.

// Assignment operator -> =
// var myname = 'wajid';
// console.log(myname);


// Arithmetic operator -> +,-,*,/,%
// console.log(5+'5');
// console.log(5-'5');
// console.log(5*'5');
// console.log(5/5);
// console.log(7%5);


// Conditional Operator -> >,<,>=,<=,==,===,!==
// console.log(5>5);
// console.log(5<5);
// console.log(5>=5);
// console.log(5<=5);
// console.log('5'==='5');
// console.log(6!==5);


// Logical Operator -> &&,||,!
// console.log(15>5 && 5<15 && 5<13);
// console.log(5>5 || 5<5);
// console.log(5>5 || !(5<15));


// Bitwise operator -> &,|,!
// console.log(15>5 & 5<15);
// console.log(5>5 | 5<5);
// console.log(5>5 | !(5<5));

// User Data
// let firstdata = prompt('enter your name');
// console.log(firstdata);

// let firstnumber = Number(prompt("enter your age"));
// console.log(firstnumber);


// let firstdata = Number(prompt("Enter your firstdata:"));
// let seconddata = Number(prompt("Enter your seconddata:"))
// console.log(firstdata+seconddata);
// console.log(firstdata-seconddata);
// console.log(firstdata*seconddata);
// console.log(firstdata/seconddata);
// console.log(firstdata%seconddata);

// 4. Looping statement -> if,if-else, if-else if or switch statments

// let myage = Number(prompt('enter your age:'))

// if (myage > 18) {
//     alert('eligible for vote')
// }

// if (myage > 18) {
//     alert('eligible for vote')
// } else {
//     alert('not eligible for vote')
// }

// if (myage > 18 && myage <35) {
//     alert('eligible for vote')
// } 
// else if (myage>=35){
//     alert('eligible for online')
// }
// else {
//     alert('not eligible for vote')
// }


// 10000 to 20000 -> loan upto 1 lakhs eligible
// 20001 to 30000 -> loan upto 2 lakhs eligible
// > 30001-> loan upto any amount eligible
//  <10000 -> not eligible


// name - wajid
// password -> 123
// logged in successfully
// something went wrong.


// let mysalary = Number(prompt('enter your salary:'))
// if (mysalary >=10000 && mysalary <=20000) {
//     alert('loan upto 1 lakhs eligible')
// } 
// else if (mysalary >20000 && mysalary<=30000){
//     alert('loan upto 2 lakhs eligible')
// }
// else if (mysalary > 30000){
//     alert('loan upto any amount eligible')
// }
// else {
//    alert('not eligible') 
// }

// let myname = prompt('enter your name:')
// let password = Number(prompt('enter your password (example:number):'))

// if (myname == 'wajid' && password == 123) {
//     alert('logged in successfully')
// } else {
//     alert('something went wrong.')
// }


// let myage = Number(prompt('enter your age:'))

// switch (true) {
//     case myage > 18 && myage <35:
//         alert('eligible for vote')
//         break;
//     case myage>=35:
//         alert('eligible for online')
//         break;
//     default:
//         alert('not eligible for vote')
//         break;
// }

// all the above example try with switch
// 1. find out odd or even.

// let findingnumber = Number(prompt('enter your number to find odd or even:'));

// if (findingnumber % 2 == 0) {
//     console.log(`${findingnumber} even number`);
// } else {
//     console.log(`${findingnumber} odd number`);  
// }

// 5. Conditional statement - for,forin,forof,while,do-while
// 6. Functions

// for(let firstvalue = 10; firstvalue < 20; firstvalue++){
//     console.log(firstvalue);
// }

// let myname = 'webdschool';
// console.log(myname.length);

// for (let index = 0; index < myname.length; index++) {
//     const element = myname[index];
//     console.log(element);   
// }

// for (const index of myname) {
//     console.log(index);
// }

// let index = 10;
// do{
//     const element = myname[index];
//     console.log(element);  
//     index++;
// }
// while(index < myname.length)

// let index = 10;
// while(index < myname.length){
//     const element = myname[index];
//     console.log(element);  
//     index++;
// }


// const mydetails = {
//     myname:'darani',
//     myage:20,
//     myrole:'full stack developer'
// }
// console.log(mydetails.myname);
// console.log(mydetails.myname + mydetails.myage);
// for (const key in mydetails) {
//     console.log(mydetails[key]);
// }


// function variabledeclaration() {
//     let myname = 'darani';
//     console.log(myname);
// }
// variabledeclaration()


// function variabledeclaration() {
//     let myname = 'darani';
//     let myage = 20;
//     return myname+myage
// }
// console.log(variabledeclaration());


// 7. Array and string methods
// 8. DOM


// 7. Array and string methods


// Array declaration has two types :
// First:
// const myname = ['kaliyaperumal',10,true,10.25,{myage:25,myrole:'developer'}];


// for (let index = 0; index < myname.length; index++) {
//     const element = myname[index];
//     console.log(element);
// }


// Second:Hoisting.

// const myname = [];
// myname[0]='kaliaperumal';
// myname[1] = 10;
// myname[2] = null;
// console.log(myname);


// let myname;
// myname = 'wajid';
// console.log(myname);


// const mynumbers =  [1,2,3,4,5,11,1,true,[false],10.25,[10],25,66,77];
// const mytext = ['wajid','darani']

// console.log(mynumbers);
// console.log(mynumbers.indexOf(true));
// console.log(mynumbers.join(''));
// console.log(mynumbers.sort());
// console.log(mynumbers.reverse());
// console.log(mynumbers.push('kaliyaperumal'));
// console.log(mynumbers.unshift('kaliyaperumal'));
// console.log(mynumbers.unshift('rohith'));
// console.log(mynumbers.pop());
// console.log(mynumbers.shift());
// mynumbers.splice(15,0,'rohith')
// console.log(mynumbers.slice(2,6));
// console.log(mynumbers.flat());
// console.log(mynumbers.concat(mytext));
// console.log(mytext.concat(mynumbers));
// console.log(mytext.concat(mynumbers).join('-'));
// console.log(mynumbers);


// const myname = 'rohith';
// console.log(myname.length);
// console.log(myname[0]);
// console.log(myname.charAt(5));
// console.log(myname.toLocaleLowerCase());
// console.log(myname.toLocaleUpperCase());
// console.log(myname.match('hi'));
// console.log(myname.replace('hi','hello'));
// console.log(myname.replaceAll('hi','hello'));
// console.log(myname.replace(/hi/,'hello'));
// console.log(myname.replace(/hi/,'hello'));
// console.log(myname.trim());
// console.log(myname.trimStart());
// console.log(myname.trimEnd());
// console.log(myname.padStart(5,'abcd'));
// console.log(myname.slice(1,2));
// console.log(myname.split(''));

// DOM -> Document Object Modeling or Manipulation.

// let firstptag = document.getElementById("thirdone");
// let firstptag = document.querySelector("#thirdone");
// firstptag.innerHTML += "firstone - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos earum dolore provident porro corporis sit in deserunt, voluptates fugiat, sunt pariatur sequi totam libero? Natus facere enim ut quae voluptatum?"
// console.log(firstptag.innerHTML);

// let ptagcall = document.getElementsByTagName("p")[0];
// let ptagcall = document.querySelectorAll("#firstone")[1];
// let ptagcall = document.getElementsByClassName("thirdone")[1];
// ptagcall.innerHTML = ptagcall.innerHTML +  'firstone - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos earum dolore provident porro corporis sit in deserunt, voluptates fugiat, sunt pariatur sequi totam libero? Natus facere enim ut quae voluptatum?'


// let myname = prompt("enter ur name");
// let ptagcall = document.getElementById("namepass");
// ptagcall.innerHTML += myname;

// for (let index = 0; index < myname.length; index++) {
//     const element = myname[index];
//     console.log(element);
//     let ptagcall = document.getElementById("namepass");
//     ptagcall.innerHTML += element;
// }

let formtag = document.getElementById("formtag");
let myname = document.getElementById("myname");
let myage = document.getElementById("myage")
let displaydiv = document.getElementById("displaydiv");

// formtag.addEventListener("submit",function submitfunction(e) {
//     e.preventDefault();
//     console.log(myname.value);
//     const merge = myname.value + myage.value
//     displaydiv.innerHTML += merge;  
// })