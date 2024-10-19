function insertionSort(arr) {
    // Loop through the array starting from the second element (index 1)
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; // The element to be inserted into the sorted portion
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than key
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; // Shift element to the right
            j--;
        }

        // Insert the key at the correct position
        arr[j + 1] = key;
    }

    return arr;
}

// Example usage:
const arr = [8, 1, 4, 9, 6, 3, 5, 2, 7, 0];
console.log("Original Array:", arr);
const sortedArr = insertionSort(arr);
console.log("Sorted Array:", sortedArr);
