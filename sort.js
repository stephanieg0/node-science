'use strict'
//SORT ALGORITHMS
const chalk = require('chalk')

const arr = [6,5,3,1,8,7,2,4]

console.log('start', arr)

function swap (array, index1, index2) {
  const temp = array[index1]

  array[index1] = array[index2]
  array[index2] = temp
}

function bubbleSort (array) {

  for (let j = 1; j < array.length; j++) {
    for (let i = 0; i < array.length - j; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1)
        //console.log(array)
      }
    }
  }


  return array
}

//console.log('bubble', chalk.cyan(JSON.stringify(bubbleSort(arr))))

function insertionSort (array) {

  for (let j = 1; j < array.length; j ++){
    for (let i = j; i > 0; i--){
      //console.log(i)
      if (array[i - 1] > array[i]){
        swap(array, i - 1, i)
        console.log(array);
      }
    }
  }
  console.log(array)
  return array
}

function selectionSort (array) {
  //loop through and find the lowest and swap it at the front.
  //start loopting from the last swapped

   for (let i = 0; i < array.length - 1; i ++){
     let minIndex = i
     for (let j = i + 1; j < array.length; j++){
       if (array[minIndex] > array[j]){
        minIndex = j
        //console.log(minIndex);
        }
     }
     if (minIndex !== i) {
       swap(array, minIndex, i)
       console.log(array);
      }

     }

   console.log('last', array);
}

//console.log(insertionSort(arr));

console.log(selectionSort(arr))
