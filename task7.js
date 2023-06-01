
let sum = 0;
let counter = 0;
let arr=[48,43,33,31,21,15,13,12,7,3,2];
const target = 2022;

let arrOfValues = [];

function check(val){
   let max = val * Math.floor(2022/val)
   return max;
}

function cycle(arrOfValues, prev){
   value = arrOfValues[0];
   max=arrOfValues[1];
   
   for(let x=max; x>0; x=x-value){
      sum=prev+x;
      if(sum === 2022){
         counter ++;
         break;
      }
      console.log(sum);

      // if(sum < 2022)
   }
}

arr.forEach(el => {
   arrOfValues.push([el, check(el)])
})
console.log(arrOfValues);
cycle(arrOfValues, 0);


class Line {
   constructor(number){
      this.arr=this.makeArray(number);
   }

   makeArray(number){
      let numberArray = [];
      let max = number * Math.floor(target/number);
      for (let x = number; x<=max; x=x+number){
         numberArray.push(x);
      }
      return numberArray
   }
}

const line7 = new Line(7);


// for (let j = 2022; j > 0; j=j-2){
//    if(j === 2022){
//       counter++;
//       continue;
//    }
//    for (let b = 2022; b > 0; b=b-3){
//       sum=j+b;
//       if(sum > 2022){
//          continue;
//          console.log("virsijom");
//       }
//       if(sum === 2022){
//          counter ++;
//          continue;
//       }
//       console.log(sum)
//       for (let a = 2016; a > 0; a=a-7){
//          if(j+b+a > 2022){
//             continue;
//          }
//          if(j+b+a === 2022){
//             counter ++;
//             continue;
//          }
//          for (let d = 2016; d > 0; d=d-12){
//             if(j+b+a+d > 2022){
//                continue;
//             }
//             if(j+b+a+d === 2022){
//                counter ++;
//                continue;
//             }
//             for (let e = 2015; e > 0; e=e-13){
//                if(j+b+a+d+e > 2022){
//                   continue;
//                }
//                if(j+b+a+d+e === 2022){
//                   counter ++;
//                   continue;
//                }
//                for (let i = 2010; i > 0; i=i-15){
//                   if(j+b+a+d+e+i > 2022){
//                      continue;
//                   }
//                   if(j+b+a+d+e+i === 2022){
//                      counter ++;
//                      continue;
//                   }       
//                   for (let c = 2016; c > 0; c=c-21){
//                      if(j+b+a+d+e+i+c > 2022){
//                         continue;
//                      }
//                      if(j+b+a+d+e+i+c === 2022){
//                         counter ++;
//                         continue;
//                      }
//                      for (let h = 2015; h > 0; h=h-31){
//                         if(j+b+a+d+e+i+c+h > 2022){
//                            continue;
//                         }
//                         if(j+b+a+d+e+i+c+h === 2022){
//                            counter ++;
//                            continue;
//                         }
//                         for (let k = 2013; k > 0; k=k-33){
//                            if(j+b+a+d+e+i+c+h+k > 2022){
//                               continue;
//                            }
//                            if(j+b+a+d+e+i+c+h+k === 2022){
//                               counter ++;
//                               continue;
//                            }
//                            for (let g = 2021; g > 0; g=g-43){
//                               if(j+b+a+d+e+i+c+h+k+g > 2022){
//                                  continue;
//                               }
//                               if(j+b+a+d+e+i+c+h+k+g === 2022){
//                                  counter ++;
//                                  continue;
//                               }
//                               for (let f = 2016; f > 0; f=f-48){
//                                  if(j+b+a+d+e+i+c+h+k+g+f > 2022){
//                                     continue;
//                                  }
//                                  if(j+b+a+d+e+i+c+h+k+g+f === 2022){
//                                     counter ++;
//                                     continue;
//                                  }
//                                  if(j+b+a+d+e+i+c+h+k+g+f < 2022)
//                                  break;
//                               }
//                            }
//                         }
//                      }
//                   }
//                }
//             }
//          }
//       }
//    }
// }

// console.log(counter);