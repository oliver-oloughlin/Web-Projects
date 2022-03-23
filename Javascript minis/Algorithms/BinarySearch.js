function search(target, arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let mid = Math.round((start + end) / 2);
        console.log(found + "   " + mid);
        if (found == target) return mid;
        if (found < target) start = mid;
        else end = mid;
    }
    return -1;
}