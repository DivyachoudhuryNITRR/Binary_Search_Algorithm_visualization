// script.js

const arraySize = 20;
let array = [];
let targetValue = null;

function generateRandomArray(size) {
    const arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * 100) + 1);
    }
    return arr.sort((a, b) => a - b);
}

function createBars() {
    const arrayContainer = document.getElementById('array');
    const arrayValuesContainer = document.getElementById('array-values');
    arrayContainer.innerHTML = '';
    arrayValuesContainer.innerHTML = '';

    array.forEach(value => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${value * 3}px`;
        bar.textContent = value;
        arrayContainer.appendChild(bar);

        arrayValuesContainer.textContent += value + ' ';
    });

    // Display the target value
    arrayValuesContainer.textContent += `\nTarget: ${targetValue}`;
}

async function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        updateBars(left, right, mid);

        if (arr[mid] === target) {
            updateBars(left, right, mid, true);
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }

        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    return -1;
}

function updateBars(left, right, mid, found = false) {
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        bar.style.backgroundColor = '#aaa';
        if (index === mid) {
            bar.style.backgroundColor = found ? 'green' : 'blue';
        } else if (index === left || index === right) {
            bar.style.backgroundColor = 'red';
        }
    });
}

function startSearch() {
    array = generateRandomArray(arraySize);
    targetValue = Math.floor(Math.random() * 100) + 1; // Set a random target value
    createBars();
    console.log(`Target: ${targetValue}`);
    binarySearch(array, targetValue).then(index => {
        if (index !== -1) {
            console.log(`Target found at index: ${index}`);
        } else {
            console.log('Target not found');
        }
    });
}

document.addEventListener('DOMContentLoaded', createBars);
