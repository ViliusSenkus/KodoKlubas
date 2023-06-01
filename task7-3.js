const a=document.getElementById("a"); //header
const b=document.getElementById("b");
const c=document.getElementById("c");
const d=document.getElementById("d");
const e=document.getElementById("e");

// ------------------------------- //
//           ALGORITMAS            //
// ------------------------------- //
// 1.  nustatome pirmo tree elemento narių sumą  
//              --- checkFirst():
//              ištrinami ribą viršiję elementai,
//              priskaičiuojami pasiekę ribą elmenetai ir ištrinami
//              GRAŽINAMA - pirmas nepasiekęs ribos elementas(masyvas);
// 1.1 jeigu suma > num - triname elementą
// 1.2 jeigu suma === num - prie counterio pridedame 1 ir triname elementą
// 1.3 jeigu suma < num - perduodame tree.arr pirmą elementą Line objektui.
// 2.
// 3. nustatome paskutinio elemento reikšmę
// 4. pagal paskutinio elemento reikšmę surandame jo eilę pridedamų skaitmenų masyve
// 5. kuriame naują masyvą kiekvienam elementui prie nuskaityto masyvo pridedant po vis kitą pridedamų skaitmenų masyvo reikšmę(pradedant nuo )
// 6. pakeičiame tree.arr pirmą reikšmę masyvais iš line sukurto naujo masyvų masyvo

const num = 50;
const addArr = [7,3,21,12,13,48,43,31,15,2,33]
let counter = 0;

class Tree{
    
    arr = [7,3,21,12,13,48,43,31,15,2,33];

    checkFirstElementSum(){
        let sum = 0;
        if (Array.isArray(this.arr[0])){
            sum = this.getSum(this.arr[0])
        } else{
            sum = this.arr[0]
        }
        return sum;
    }
    
    getSum(array){
        let sum = 0;
        array.forEach(element => {
            sum +=element
        });
        return sum;
    }

    compareToNum(){
        let element = this.checkFirstElementSum()
        if (element > num){
            // this.arr.shift();
            return false;
        } else if (element === num){
            counter++;
            console.log(this.arr[0]);
            // this.arr.shift();
            return false;
        } else {
            return this.arr[0]
        }
    }
}

class List{
    constructor(value){
        this.arr=value;
    }

    branchIncreasing(){
        console.log("gautas elementas i pridejima - ", this.arr)
        const lastElement = this.arr[this.arr.length-1];
        let x = addArr.indexOf(lastElement);
        console.log("indeksas skaitmens ", lastElement, " yra ", x);
        let newArray = [];
        for ( x; x<addArr.length; x++){
            newArray.push([...this.arr, addArr[x]])
        }
        console.log("naujas masyvas - ", newArray);
        return newArray;
    }
}

// ----- PROCESAS --------

let tree = new Tree();

while(tree.arr.length > 0){
    console.log("tree arr whilo pradzioje - ", tree.arr, "pirmas elementas - ", tree.arr[0])
    if (!tree.compareToNum()){
        tree.arr.shift()
    } else {
        if (!Array.isArray(tree.arr[0])){
            tree.arr[0] = [tree.arr[0]];
        }
        const list = new List(tree.arr[0]);
        tree.arr.splice(0,1,...list.branchIncreasing());
        console.log("tree masyvas - ", tree.arr);
    }
    console.log("atitikimai - ", counter);
    console.log("------------------");   
} 

// console.log(tree.checkFirstElementSum());
// tree.compareToNum();
// console.log(tree.arr);
// console.log("counteris ", counter)


// ------------------

// imam ma=iausia, randam kiek jo telpa į 2022
// nuimam vieną, pridedam sekantį didesnį