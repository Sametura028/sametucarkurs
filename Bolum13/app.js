// let value;
// const firstName="Louis";
// const lastName="Armstro";
// const lang = "Java, Python,C++";
// value = firstName +" "+ lastName;
// value=firstName.concat(" ",lastName," " , "Caz");
// // value=firstName.toLowerCase();
// value=firstName.toUpperCase();
// console.log(value,lang);

// const name = "Samet Uçar"
// const departman ="Bilişim"
// const salary = 4000

// const a = "İsim: "+ name +"\n"+ "Deparman: "+ departman +"\n"+ "Maaş: "+salary;
// const a=`İsim:${name}\nDepartman:${departman}`
// const html ="<ul>"+
// "<li>"+name+"</li>"+
// "</ul>"
// document.body.innerHTML= html;
// console.log(a)
// let value;
// const numbers = [521, 56, 654, 483, 545168, 54653, 465453, 57, 54684, 658, 4684, 6464542, 5, 544645, 4564, 56, 456, 45, 645, 654, 6, 456, 456, 645, 856, 7, 56, 4578, 4, 6, 78, 78, 978, 6, 786, 78, 78, 6, 78967]
// console.warn("al sana uyarı piç");
// console.log(numbers)

// let value;
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// langs = ["C++", "Javascript"]
// const a = ["Merhaba", 22, null, undefined, 3.14];
// value = numbers.length;
// value = numbers[0];
// value = numbers[2];
// numbers[2] = 1060;
// value = numbers.indexOf(1060);
// numbers.push(225225215525548565865852645);

// value = numbers;
// numbers.pop()
// value = numbers;
// numbers.shift()


// numbers.reverse();
// value = numbers;
// value = numbers.sort(function(x,y){ //küçükten büyüğe
// return x - y;
// })
// value = numbers.sort(function(x,y){//büyükten küçüğe
//     return y - x;
//     })
// console.log(value)

// let value;
// const developer = {
//     name: "Samet Uçar ",
//     age: 16,
//     email: "sameura028@gmail.com",
//     langs: ["HTML", "Css", "C#"],
//     address: {
//         city: "İstanbul",
//         street: "Sarıyer"
//     },
//     work: function () {
//         console.log("jehgrwebrfkjhwejfrfwenhrfjknn")
//     }
// }
// value = developer;
// value = developer.email
// value = developer.address.city;
// developer.work();
// const developers= [
//     {name:"Mustafa Murat" ,age:25},
//     {name:"Samet Uçar" ,age:16}
// ]
// value =developers[1];
// console.log(value)

// let value;
// const now = new Date();
// value=now.getMinutes()
// value=now.getSeconds()
// console.log(value);
// let value ="2";
// console.log(value==2)
// console.log(!(2!= 2));
// console.log((1 == 0) && ("namık" == "namık"))
// console.log((1 == 0) || ("namık" == "namık"))

// if(set==null){
//     console.log("geçerli")
// }
// else{
//     console.log("geçersiz")
// }
// let set = 1;
// switch (set) {
//     case 1:
//         console.log(1)
//         break;
//     case 2:
//         console.log(2)
//         break;

//         case 3:
//             console.log(3)
//             break;
//         case 4:
//             console.log(4)
//             break;
//             default:
//                 console.log("yok lan böyle birşey")
// }

// function merhaba(name = "Bilgi Yok", age = "Bilgi Yok") {
//     // if (typeof name === "undefined") name = "Bilgi Yok";
//     // if (typeof age === "undefined") age = "Bilgi Yok";
//     console.log(`isim ${name} Yaş ${age}`);
// }
// merhaba("Samet", 16);
// merhaba("Ayşe", 36)
// merhaba();

// function square(x){
// return x * x;
// }
// function cube(x) {
//     return x*x*x;
// }

// let a=cube(square(1253));

// console.log(a)
// const naber=function(name){
//     console.log("naber " + name)
// }
// naber("Kürdishan")

// class ZamatAyi{

//     zamatAyiGoster(zamatAd,zamatSoyad){
//         console.log(zamatAd,zamatSoyad)
//     }

// }

// const zamat = new ZamatAyi

// zamat.zamatAyiGoster("zamat","uçmaz")
// let i = 0;
// while (i < 10) {
//     console.log(i)
//     if (i == 5) {
//      break; 
//     }
//     i++;
// }

// do {i++
//     console.log(i)

// }while (i < 10)
// const langs = ["d1", "d2", "d3", "k", "d", "f", "fre"];

// for (let index = 0; index < langs.length; index++) {
//     console.log(langs[index])
// }
// langs.forEach(function(lang, index){
//     console.log(lang,index)
// })
// const users=[
//     {name:"Samet",age:16},
//     {name:"Kürdishan",age:16},
//     {name:"Transbaran",age:64},
// ]
// const names = users.map( function(user){
//     return user.name
// });
// const ages = users.map( function(user){
//     return user.age
// });

// console.log(names, ages)
// const user={
//     name:"Samet",
//     age:25
// }
// for ( let key in user){
//     console.log(key,user[key])
// }
// const cevap =confirm("Emin misiniz?");
// console.log(cevap);
//  if(cevap){
//     console.log(
//         "gçerli"
//     )
//  }
//  else{
//     console.log(
//         "gçersiz"
//     )
//  }
// const cevap = prompt( "2 + 2")
// console. log(cevap) ;
// console. log(typeof cevap);
// if(cevap==4)
// {
//     console.log("Tebrikler")
// }
// else{
//     console.log("Bilemedin")
// }
// let value;
// value = window;
// value = window.location;
// value = window.location.host;
// value = window.location.hostname;
// value = window.location.port;
// value = window.location.href;
// value = window.outerHeight;
// value = window.outerWidth;
// value = window.scrollX;
// value = window.scrollY;
// console.log(value)
var value1 = 10;
let value2 = 20;
const value3 = 30;
function Func(){
var value1 = 40;
let value2 = 50;
const value3 = 60;
console. log(value1 , value2, value3) ;
}
Func()
console. log(value1 , value2, value3) ;