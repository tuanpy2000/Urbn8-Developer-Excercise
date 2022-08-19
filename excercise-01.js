function sumArr(arr){
    return (arr.length === 0) ? 0 : arr[0] + sumArr(arr.slice(1));
  }
console.log(sumArr([5,9,6,8,4,6]))