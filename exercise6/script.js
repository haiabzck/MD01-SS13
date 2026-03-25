let arr = [1,2,3,4,5,6,7,8,9,10,9,3,2,1,2,5,2,1];

let nhapk = Number(prompt('Mời bạn nhập 1 số nguyên bất kì :'));
let count = 0;
for (let i = 0; i < arr.length ; i++) {
  if(arr[i] === nhapk){
    count++;
  
  }
}
   alert('Số lần xuất hiện trong mảng là :' + count);


