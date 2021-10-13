
// function frankenSplice(arr1, arr2, n) {
//     console.log(arr1);
//     console.log(arr2);
//     console.log(n);

//   }
  
//   frankenSplice([1, 2, 3], [, 5, 6], 1);


// function bouncer(arr) {
//     console.log(arr);
//     let count = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i]) count.push(arr[i])
//     }
//     return count;
//   }
  
//   console.log(bouncer([false, null, 0, NaN, undefined, ""]));



// function getIndexToIns(arr, num) {
//     console.log(arr)
//     console.log(num);
//     let count = 0;
//     for(let val of arr){
//         if(val < num){
//             count++;
//         }
//     }
//     return count;
//   }
  
//   console.log(getIndexToIns([40,30,10, 60], 50));




// function mutation(arr) {
//     return arr[1]
//     .toLowerCase()
//     .split('')
//     .every((letter) => {
//         return arr[0].toLowerCase().indexOf(letter) != -1;
//     })
//   }
  
  console.log(mutation(["hello", "hey"]));




function chunkArrayInGroups(arr, size) {
    let sum = [];
    sum.push(arr.length/size)
    console.log(sum)

  }
  
  chunkArrayInGroups(["a", "b", "c", "d","b"], 2);


