// Big O Notation

// Binary search tree using O(log n)
let arr=[];
let start=0;
let target=10000;

for(let i=1; i<=2048; i++){
    arr.push(i);
}

let end=arr.length - 1;
function binarySearch(arr,start,end,target){
    console.log(arr.slice(start,end));
        if(start > end) return false
         let midIndex=Math.floor((start+end)/2);
        if(arr[midIndex]===target) return true;
        if(arr[midIndex]>target) return binarySearch(arr,start,midIndex-1,target);
        else return binarySearch(arr,midIndex+1,end,target);

}
// binarySearch(arr,start,end,target)
// console.log(binarySearch(arr,start,end,target));

// Merge sort and O(n log n)

function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }else{
        const midIndex=Math.floor(arr.length/2);
        const leftArr=arr.slice(0, midIndex);
        const rightArr=arr.slice(midIndex, arr.length);

        return merge(mergeSort(leftArr), mergeSort(rightArr));
    }
}

function merge(leftArr, rightArr){
    let resultArr=[];
    let leftIndex=0;
    let rightIndex=0;

    while(leftIndex<leftArr.length &&  rightIndex<rightArr.length){
        if(leftArr[leftIndex]<rightArr[rightIndex]){
            resultArr.push(leftArr[leftIndex]);
            leftIndex+=1;
        }else{
           resultArr.push(rightArr[rightIndex]);
           rightIndex+=1; 
        }
    }
    
    return resultArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

let nums=[23,47,1,5,2,4,245,12,0,900,19,1999,76,35,89,100,95];
// let nums=[23,56,5,3];


// console.log(mergeSort(nums));

// Fibonacci with Exponential Complexity O(2**n)

function fib(n){
    console.log(n);
    if(n===0){
        return 0;
    }
    if(n===1){
        return 1;
    }

    return fib(n-1)+fib(n-2)
}

// fib(4);

// Factorial

function f(n){
    if(n===0){
        console.log("**************************");
        return;
    }

    for(let i=0; i<n; i++){
        f(n-1);
    }
}

// f(3)


// Space Complexity and Common Mistakes

// space complexity of O(n)
function countDown(n){
    console.log(n);
    if(n==0) return;
    return countDown(n-1);
}

// countDown(5);

// Common mistake with big O

// O(n)
function twoLoops(a){
    for(let i=0; i<a; i++){
        // do something
    }

    for(let i=0; i<a; i++){
        // do something
    }
}

// O(a+b)
function twoInputsAdd(a,b){
    for(let i=0; i<a; i++){
        // do something
    }

    for(let i=0; i<b; i++){
        // do something
    }
}

// O(a*b)
function twoInputsMult(a,b){
    for(let i=0; i<a; i++){
        for(let i=0; i<b; i++){
            // do something
        }
    }
}





