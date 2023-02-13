"use strict";

// const getBirthdayYear = age =>{
//     let date =new Date();
//     let year =date.getFullYear(); //hazirdaki il
//     let month =date.getMonth() + 1;  //indiki ayi ama yanvar=0; oncun herdfe +1
//     let daymonth =date.getDate();   //indiki ayin gunu
//     let dayweek =date.getDay();
//     return year - age ;


// }
// console.log(getBirthdayYear(22));

// let date=new Date(); //type=object;




//STRING - METHODS

// let address ="Ehmedli";

//console.log(address.length) //stringin icindeki herflerin sayi
// console.log(address[0])  //stringin biirnci herfin verir

// for(let i =0;i<address.length;i++){
//     console.log(address[i])   //stringin icindeki butun herfleri bize verir
// }


// console.log(address.charAt(0)); //stringin birinci herfi

// console.log(address.charCodeAt(0)) //birnci herfin arxa planda isleyen kodun verir

// console.log(address.toLowerCase())   ///butun herfleri kicildir

// console.log(address.toUpperCase())  //butun herfleri boyudur


// console.log(address.split(""))  //herfler arrayine cevirir stringi

// let adres ="Ehmedli,merkez,seherdir";
// console.log(adres.split(","))  //vergule gore sozden ibaret arraye cevirir stringi

// console.log(address.trim())  //bolsuqlari goturmur sagdan soldan

// console.log(address.trimStart())  //basliqda olan bosluqu goturmeyecek

// console.log(address.trimEnd()) //arxadaki bosluqu legv edir

// console.log(address.slice(1,3))  //baslangic ve son index isteyir -stringin icinden datani goturur
//                                   //1 index goturur 3-e kimi

//  console.log(address.slice(1))  //birinci indexden sora hamsin goturur

//  console.log(address.slice(-2)) //sondan iki datani goturur

//  console.log(address.substring(1,3))  //yene slice kimi datani goturur stringden ama - eded gebul etmir ferqi budur

//  let text ="dddddddddddddddddddddddddddddddddddddd";
//  if(text.length>10){
//     console.log(text.substring(1,10) + "...")
//  }

// console.log(address.substr(1,3)) //slice ve substring kimidi sadece axrinci index daxil olmaqla goturur datani

// let text ="Salam Anar bey"

// console.log(text.replace("Anar","Mubariz"))  //stringin icindekini deyismek ucun 

//                                               //birinci Anari deyisecek yene varsa Anar deyismeyecek

// console.log(text.replaceAll("Anar","Mubariz")) //butun stringde olan Anar yazilarini deyisecek

// let text1 ="Hello";
// let text2 ="World";

// let res =text1.concat(text2); //bu method text1 nen text2-ni birlesdirir

// console.log(res);

// let text="5";
// console.log(text.padStart(4,"x")) // deyirki 4 dene herif olacaq sonda bes baslangicda 3 dene X

// console.log(text.padEnd(5,"x")) //evvelde 5 sora  4 dene x 



// const strToUpper = str =>{   //sozun ilk herfin boyuden method
///return str.charAt(0).toUpperCase().concat(str.slice(1));
//     return str.charAt(0).toUpperCase() + str.slice(1)
// }

// console.log(strToUpper("hello"));


// let text= "salam";
// let result = text[0].toUpperCase();     //buda ayri bir variant string herfin boyutmekde
// let res = text.replace(text.charAt(0),result);
// console.log(res);

let students = ["Cavid", "Jale", "Roya", "Konul", "Cinare", "Anar"]

//  console.log(students.length) //array icindeki item sayi
//  console.log(students[students.length-1]); //axrinci itemi verir

// let result = students.join(); //arraydaki itemlari birlesdirir yazsan join"/" /-bunla birlesdirecek meselen

//  console.log(result) 

// console.log(students)
// // students.push("Elekber") //elave edir itemi

// students.pop() //axrinci itemi silir
// students.shift() //birinci itemi silir
// students.unshift("Hacker") //evele item elave edir
// console.log(students)

// function filter (arr,text){
//     let result =[]
//  for (const item of arr) {
//     if(item.includes("l")){
//     //if(item.toLowerCase.startsWith(text.toLowerCase()) -bu bas herfi R olanlari qaytarir 
//         result.push(item);
//     }
//  }
//  return result;          //console edende hamsin verir return edende birdene icinde -l herfi olani qaytarir ona gore bos arr yaradib tapdiqlarimizi ora push edirik

// }
// console.log(filter(students,text));

// console.log(students.indexOf("Jale"))   //gonderdiyimiz item hansi indexde dururrsa o indexi bize verir tapmayanda -1 verir
//                                         //yalniz birinci itemin indexin verir 
// console.log(students.lastIndexOf("Jale"))  //bu axrinci itemin durduqu indexi verir

// let result =students.find(m=>m=="Jale"); //birdene item tapacaq ama filter methodu hamsin itemlarin

// students.sort();  //bize elifba sirasinda qaytaracaq stringi
// students.reverse(); //tersine yazdirir itemlari arxadan qabaqa yani axrincini -birinci

// console.log(students);

// let nums=[1,2,3,4,5];
// console.log(nums.sort((a,b)=>a-b)); //bu reqemleri azdan coxa sort edir
// console.log(nums.sort((a,b)=>b-a));  //bu reqemleri coxdan aza sort edir

// students.fill("Eli")  //fill yani doldurmaq tercumede arrayin butun itemlarini deyisib edir "Eli"
// students.fill("Eli",0,2) // 0 daxil olmaqla 2-e kimi deyisir
// console.log(students)

// console.log(students.every(m=>m=="Cinare")) //every sert isteyir arrayin icindekiler hamisi eynidirmi sertle?true veya false verir

// let arr=[10,20,30,40,5,6,7];

// console.log(arr.every(m=>m>4)) //arrayda hamsi 4 den boyukdur?true or false

// const fruits =["Banana","Orange","Apple","Mango"];
// const f =fruits.entries();   //array item ve yaninda indexlerini gorsedir
// for (const iterator of f) {
//     console.log(iterator)
// }

// console.log(arr.findIndex(m=>m>20)) //gonderdiyimiz ededden birinci boyuk olan  elementin indexin

// console.log(arr.includes(10)) //numberden ibaret olan arraydede string kimi tapmaq olur var yox-true or false?
// console.log(Array.isArray(arr)) //bize gelen arraydi ya yox gorsedir

// console.log(arr.slice(2,5))  //arraydan datalari goturur verdiyin reqeme gore

// const fruits=["Banana","Orange","Apple","Mango"]

// fruits.splice(2,1, "Lemon","Kiwi");  //var olan arraye 2 den sonra bu stringleri qoy 1-geder sil(Apple)
// console.log(fruits);

// console.log(arr.toString()) //arrayi stringe cevirir -join kimi

// let age=55;
// console.log(age.toString())  //number stringe cevirmek ucun
//  let age="55"
//  console.log(typeof Number(age)) //stringi numbere cevirmek ucun
// let age="55";
// let age2="33";
// console.log(Number(age) + Number(age2));
// console.log(parseInt(age) + parseInt(age2))  //stringi numbere cevirir Number kimi


// function getNums(num1,...arr){   // ... 3 noqte sprid operatorudu argument kimi gebul edir parametr olaraq datani ve arraya cevirir ,yaninda num1 yazsaq 1 =olacaq  number,qalani array
//     console.log(arr)
// }
// getNums(1,2,3,4,5,6)

// let test=(...arr)=>{   //sprid operatoru arrow functiondada isleyir
//     console.log(arr)
// }
// test(1,2,3)

// let arr1 = [1,2,3,4,5];



// let copyArr = [...arr1];  //sprid operatoruynan arrayi kopyalamaq olur ve evelki arrayde deyisiklik edende bu deyismir
// console.log(copyArr)
// arr1[0]=10;           
// console.log(arr1)

// let user1 ={
//     name:"Shaiq",
//     address:"Ehmedli"
// }
// console.log(user1)

// let copyUser1={...user1};  //sprid oper. objectide kopyalayir
// console.log(copyUser1)




