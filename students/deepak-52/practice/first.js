/*let y2cd = 12;
console.log((y2cd));
let ab2c=12;
console.log((ab2c));
hhfhf*/
/*
let sets = new Set([1,2,2,3,3,3,4,4,5,5,6]);
console.log(sets);
sets.add(10);
console.log(sets);
console.log(sets.has(5));
sets.delete(10);
console.log(sets);
sets.clear();
console.log(sets.size);
let arr = [1,3,3,4,4,4,5];
const set2 = new Set(arr);
console.log(set2);
let sets3 = new Set();
sets3.add({name:"Sam"});
sets3.add({name:"Sam"});
console.log(sets3);
let map = new Map();
map.set("Name", "Deepak");
console.log(map);
function greet(name,callback) {
  console.log("Hello " + name);
  callback();
}
function callMe() {
    console.log("I am called");

}
greet("Deepak", callMe);
let promi = new Promise((resolve, reject) => {

})
function f(callback){
    console.log("Washing Cloths");
    callback();
}
function f1(){
    console.log("Dry Cloths");
}
f(f1);*/

/*function washcloth(){
    return new Promise((resolve, reject) => {
        console.log("Washing Cloths");
        resolve();
    });
}
function drycloth(){
    return new Promise((resolve, reject) => {
        console.log("Drying Cloths");
        resolve();
    });
}
console.log(typeof(NaN));
let arr1 = [1,2,3];
let arr2 =[arr1,4,5];
console.log(arr2);
*/
const user = {name:"Deepak",age:21};
const newUser = {...user, city:"Delhi"};
console.log(newUser);
