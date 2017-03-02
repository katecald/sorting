function bubbleSort(arr) {
    if (arr.length>0) {
        var isSorted = false;
        while (!isSorted) {
            var endPoint = arr.length-1;
            var wasChange = false;
            for (var i=0; i<endPoint; i++) {
                if (arr[i] > arr[i+1]) {
                    wasChange = true;
                    var greater = arr[i]
                    arr[i] = arr[i+1]
                    arr[i+1] = greater;
                }
            }
            endPoint--
            if(!wasChange) isSorted = true;
        }
        
    }
    return arr; 
}