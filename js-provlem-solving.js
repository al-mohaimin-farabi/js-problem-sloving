// problem 01
// funtion for converting seer To Mon ⬇⬇⬇⬇;
function seerToMon(inputedNumber){
/* Main formula ⬇⬇⬇⬇
1Mon = 40Seer;
So, 40Seer = 40 /40;
= 1
*/
if(typeof inputedNumber != 'number'){
return 'Please give a number';
}
else if(inputedNumber <= 0){
return 'Please give a number bigger then 0';
}
const calculation = inputedNumber / 40 ;
return (parseFloat(calculation.toFixed(3)));
}
const seer = 160;
const result = seerToMon(seer);
console.log(result);
// funtion for converting seer To Mon END here;
// problem 02
// funtion for counting totalSales ⬇⬇⬇⬇;
function totalSales(iteamOne,iteamTwo,iteamThree){
if(typeof iteamOne !='number'|| typeof iteamTwo !='number' || typeof iteamThree !='number'){
return 'Please give a number';
}
else if(iteamOne < 0 || iteamTwo < 0 || iteamThree < 0){
return 'Please give a number bigger then 0';
}
const tshirtPrice = 100 * iteamOne;
const pantPrice = 200 * iteamTwo;
const shoePrice = 500 * iteamThree;
const totalPrice = tshirtPrice + pantPrice + shoePrice;
return totalPrice;
}
let tshirtQuantity = 5;
let pantQuantity = 3;
let shoeQuantity = 2;
const totalBill = totalSales(tshirtQuantity,pantQuantity,shoeQuantity);
console.log(totalBill);
// funtion for counting totalSales END here;
// problem 03
// funtion for counting deliveryCost ⬇⬇⬇⬇;
function deliveryCost(tshirtCount){
let costToDeliver100Tshirt = 100; //per tshirt
let costToDeliverover100Tshirt = 80; //per tshirt
let costToDeliverover200Tshirt = 50; //per tshirt
if(typeof tshirtCount !='number'){
return 'Please give a number';
}
else if(tshirtCount <= 0){
return 'Please give a number bigger then 0';
}
else if(tshirtCount <= 100){
let total = tshirtCount * costToDeliver100Tshirt;
return total;
}
else if (tshirtCount > 100 && tshirtCount <= 200){
let fristhandred = 100 * costToDeliver100Tshirt;
let restTshirt = tshirtCount - 100;
let totalOfRestTshirt = restTshirt * costToDeliverover100Tshirt;
let total = fristhandred + totalOfRestTshirt;
return total;
}
else{
let fristhandred = 100 * costToDeliver100Tshirt;
let overOneHandred = 100 * costToDeliverover100Tshirt;
let restTshirt = tshirtCount - 200;
let totalOfRestTshirt = restTshirt * costToDeliverover200Tshirt;
let total = fristhandred + overOneHandred + totalOfRestTshirt;
return total;
}
}
let tshirtToDeliver = 250;
const cost = deliveryCost(tshirtToDeliver);
console.log(cost);
// funtion for counting totalSales END here;
// problem 04
// funtion for perfectFriend ⬇⬇⬇⬇;
function perfectFriend(names,range){
if(typeof names =='number' || typeof names =='string' || typeof names =='boolean' || typeof names =='undefined'){
return 'Please give a correct input';
}
else if(typeof range !='number'){
return 'Please give a number';
}
else if(range < 0){
return 'Please give a number bigger then 0';
}
else if(typeof range =='number'){
let friendFinder = ' ';
for(const name of names){
if(name.length == range){
friendFinder = name;
break;
}
else if(name.length != range){
friendFinder ='Cant find any friend within this characterRange';
continue;
}
}
return friendFinder;
}
}
const characterRange = 5;
const nameOfFriends = ['Raha','Rafi','Nafi','Nahid','Joma','Jerin'];
const bestMatch = perfectFriend(nameOfFriends,characterRange)
console.log(bestMatch);
// funtion for perfectFriend END here;