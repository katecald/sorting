function split(arr) {
     if (arr.length===1) return arr;
     var splitInd = Math.floor(arr.length/2);
     return [arr.slice(0, splitInd),arr.slice(splitInd)];
 }

function merge(arrs) {

    var arr1 = arrs[0]; var arr2 = arrs[1];
     var output = [];

    while(arr1.length > 0 || arr2.length > 0) {
         if (arr1[0] > arr2[0]) {
             output.push(arr2.shift());

         } else {
             output.push(arr1.shift());
         }
     }
     return output;
 }

 function mergeSort(arr) {
     if (arr.length===1) {
        return arr;
     } else {
        var superSplit = split(arr).map(mergeSort)
        console.table(superSplit)
        console.log(superSplit)
     }
     
 }