const a=document.getElementById("a"); //header
const b=document.getElementById("b");
const c=document.getElementById("c");
const d=document.getElementById("d");
const e=document.getElementById("e");

// const num=2022;
// const arr=[7,3,21,12,13,48,43,31,15,2,33];
let counter = 0;
const num=5;
let arr=[1,2,3];

// function cycle(){
//     for(let el = 0; el < arr.length; el++){
//         const division = Math.ceil( num / el );
    
//         for (let x = division; x > 0; x--){

//             if (x * el > num) continue;

//             if (x * el === num){
//                 counter++;
//                 continue;
//             }

//                 // tikriname ar dar yra masyve kitų skaičių

//             if(x * el < num && arr[arr.indexOf(el)+1]){

//                 let sum = x * el;         //suskaiciuojame kiek turime sumos
//                 let difference = num - sum; //skaiciuojam kiek truksta iki 2022
        
//                 const div = Math.ceil( difference / el ); //surandame kiek trūksta iki 2022

//                 for (let y = arr[arr.indexOf(el)+1]; y<arr.length; y++){
            
//                 }
                
//                 // cia turime kartoti visa forEacha nuo el+1;

//             } 
                
//         }
//     }
//     return counter;
// }

// class Node{

//     cosntructor(value, index, sum){
//         this.value = value;
//         this.next = arr[index];
//         this.sum = 0;
//     }

//     insert(value){
//         value=0;
//     }

// }

const tree = [0];
let temp =[];


function add(){
    for(let i = 0; i < tree.length; i++ ){
        
        for(let el = 0; el < arr.length; el++){
            let sum = arr[el]+tree[i];
            console.log(sum)
            if(sum > num){
                continue;
            }else if(sum < num){
                temp.push(sum);    
            }else if (sum === num){
                counter ++;
            }
            console.log(temp)
        }
        tree.splice(i, 1, temp);
        temp = [];
    }
    c.innerHTML=tree[0];
    
    return tree;
}


add();
add();




// function count(){
//     for(let el = 0; el < arr.length; el++){
//         console.log("paimtas elemenetas - ", arr[el], " ", num);
//         for (let x = 0; x < tree.length; x++){
//             tree.push(arr[el]+1)
//         }

//         if (arr[el] > num){
//             arr.splice(el, 1);
//             el=el-1;
//         } else if (arr[el] === num){
//             arr.splice(el, 1);
//             el=el-1;
//             counter++;
//         } else{
//             count();
//         }
//         console.log(arr);
//     }
//     return counter;
// }

// console.log("working");
// console.log(count());