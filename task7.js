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

const num = 5;
const addArr = [4,5,6]
const arr = [7,8,9]
let counter = 0;

class Tree{
    
    arr = [[1,6],6];

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
            this.arr.shift();
        } else if (element === num){
            counter++;
            this.arr.shift();
        } else {
            return this.arr[0]
        }
    }
}

class List{
    constructor(value){
        this.arr=value;
    }
}

let tree = new Tree();

while(tree.arr.length > 0){
    tree.compareToNum();
    if (tree.arr.length > 0){
        const list = new List(tree.arr[0]);
        console.log("List - ", list.arr);
    }
    console.log(tree.arr);
    
} 

// console.log(tree.checkFirstElementSum());
// tree.compareToNum();
// console.log(tree.arr);
// console.log("counteris ", counter)