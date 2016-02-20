function merge(left, right) {
    var result = [];
    var leftIndex = 0;
    var rightIndex = 0;
    while (leftIndex < left.length) {
        if (rightIndex >= right.length) {
            break;
        }
        if (left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    result = result.concat(left.slice(leftIndex))
    return result.concat(right.slice(rightIndex));
}

function mergeSort(items) {
    if (items.length < 2) {
        return items;
    }
    var middle = Math.floor(items.length / 2);
    var left = items.slice(0, middle);
    var right = items.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}