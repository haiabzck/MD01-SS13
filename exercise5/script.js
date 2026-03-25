let arr = [];
let chan = 0;
let le = 0;
const n = Math.floor(Math.random() * (20 - 10 + 1)) + 10; 
for (let i = 0; i < n; i++) {
  arr.push(Math.floor(Math.random() * 100) + 1);
  
}
console.log(arr);
for (let j = 0; j < arr.length; j++) {

  if(Number(arr[j]) % 2 === 0){
    chan += Number(arr[j])
  
  } else{
    le += Number(arr[j])
    
  }

} 

 alert('Tổng các số chẵn là :' + chan);
 alert('Tổng các số lẻ là :' + le);
