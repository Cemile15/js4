//1. Funksiya yazacaqsız, funksiya 2 parametr qəbul edir, 1-cisi array 2-cisi number (ex. myFunc([1,2,3,4,5], 4)) . Həmin funksiyanın nəticəsi 0-cı indeks-dən number-in sayı qədər array-in içindən ədədləri götürüb yeni array-ə yığmalısız (myFunc([1,2,3,4,5], 4) => [1,2,3,4])

let arr=[1,2,3,4,5];
let number1=4;
const myFunc=function(arr,number1){
 let newarr=[];
  for(let i=0; i<number1;i++){
    newarr.push(arr[i])
  }
  return newarr;
}
console.log(myFunc(arr,number1) );


//2. findMultiples adlı funksiya yazacaqsız, 2 number parametri alır (ex. findMultiples(number, limit)) - number-dan limitə qədər limitdə daxil olmaqla yeni array-ə number-in 2-yə hasillərini əlavə edəcəksiz, taki limitə çatana qədər.
//(ex findMultiples(2, 6) = > result = [2, 4] or findMultiples(5, 30) = > result = [5, 10, 20])


const findMultiples=function(number2,limit1){
    let limit2=[];
    for(let i=number2; i<=limit1;i*=2){
      limit2.push(i);
    }
    return limit2;
}
console.log(findMultiples(5,30));


//3. Count funksiyası verilir, 1 number parametri alır, 1-dən həmin number-a qədər yeni array yaradın
//(ex. count(10) => result = [1,2,3,4,5,6,7,8,9,10])

let number3;
  const count=function(number3){
    let newArr2=[];
    for(let i=1;i<=number3;i++){
        newArr2.push(i);
    }
    return newArr2;
}
console.log(count(10));
