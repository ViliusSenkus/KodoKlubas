const a=document.getElementById("a"); //header
const b=document.getElementById("b");
const c=document.getElementById("c");
const d=document.getElementById("d");
const e=document.getElementById("e");

const num=2022;
const arr=[7,3,21,12,13,48,43,31,15,2,33];
let counter = 0;

arr.forEach(el =>{
    const division = Math.ceil( num / el );
  
    for (let x = division; x > 0; x--){

        if (x * el > num) continue;

        if (x * el === num){
            counter++;
            continue;
        }

            // tikriname ar dar yra masyve kitų skaičių

        if(x * el < num && arr[arr.indexOf(el)+1]){

            let sum = x * el;         //suskaiciuojame kiek turime sumos
            let difference = num - sum; //skaiciuojam kiek truksta iki 2022
      
            const div = Math.ceil( difference / el ); //surandame kiek trūksta iki 2022

            for (let y = arr[arr.indexOf(el)+1]; y<arr.length; y++){
        
            }
            
            // cia turime kartoti visa forEacha nuo el+1;

        } 
            
    }
    
    return counter;
})
