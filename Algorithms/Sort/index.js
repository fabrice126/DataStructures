import Tree from './Tree.js'
function checkError (tSort, funcName) {
  for (let i = 0; i < tSort.length - 1; i++) {
    if (tSort[i] > tSort[i + 1]) console.log('erreur = ' + funcName)
  }
}

function benchmarkSort (tToSort, funcName, callback) {
  var start = Date.now()
  var tSorted = callback(tToSort)
  console.log(funcName + ' = ' + (Date.now() - start))
  checkError(tSorted, funcName)
}

function bubbleSort (tSort) {
  for (var k = 0; k < tSort.length - 1; k++) {
    for (var i = 0; i < (tSort.length - k - 1); i++) {
      if (tSort[i] > tSort[i + 1]) {
        var tmp = tSort[i]
        tSort[i] = tSort[i + 1]
        tSort[i + 1] = tmp
      }
    }
  }
  return tSort
}

function selectionSort (tSort) {
  for (var i = 0; i < tSort.length - 1; i++) {
    var iMin = i
    for (var j = (i + 1); j < tSort.length; j++) {
      if (tSort[iMin] > tSort[j]) iMin = j
    }
    var tmp = tSort[i]
    tSort[i] = tSort[iMin]
    tSort[iMin] = tmp
  }
  return tSort
}

function insertionSort (tSort) {
  for (var i = 1; i < tSort.length; i++) {
    var value = tSort[i]
    var iSort = i
    while (iSort > 0 && tSort[iSort - 1] > value) {
      tSort[iSort] = tSort[iSort - 1]
      iSort--
    }
    tSort[iSort] = value
  }
  return tSort
}
// ___________________________________________________________________________________________
// ____________________________________________SORT___________________________________________
// ___________________________________________________________________________________________

var tSort = []
for (let i = 0; i < 60000; i++) tSort.push(Math.floor(Math.random() * 10001))
var tSortBubble = [...tSort]
var tSortSelection = [...tSort]
var tSortInsertion = [...tSort]

benchmarkSort(tSortInsertion, 'insertionSort', insertionSort)
benchmarkSort(tSortSelection, 'selectionSort', selectionSort)
benchmarkSort(tSortBubble, 'bubbleSort', bubbleSort)

// ___________________________________________________________________________________________
// ________________________________________Binary Tree________________________________________
// ___________________________________________________________________________________________

// Finding a value with for loop benchmark
function searchArray (myArray, nbSearch) {
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] === nbSearch) return true
  }
  return false
}
// Finding min value with for loop benchmark
function findMinArray (myArray) {
  var min = null
  for (let i = 0; i < myArray.length; i++) {
    if (min == null || myArray[i] < min) min = myArray[i]
  }
  return min
}
// Finding max value with for loop benchmark
function findMaxArray (myArray) {
  var max = null
  for (let i = 0; i < myArray.length; i++) {
    if (max == null || myArray[i] > max) max = myArray[i]
  }
  return max
}

const nbRandom = 20000000
const nbSearch = Math.floor(Math.random() * nbRandom)
const tree = new Tree()
tree.addValue(nbRandom / 2)
const tNumber = []
for (let i = 0; i < nbRandom; i++) {
  const toinsert = Math.floor(Math.random() * nbRandom)
  tNumber.push(toinsert)
  tree.addValue(toinsert)
}
// console.log(Math.min(...tNumber), Math.max(...tNumber));
var start = Date.now()

// ________________________________________Find Min And Max with for loop________________________________________
console.log(findMinArray(tNumber), findMaxArray(tNumber))
console.log('findMinMaxArray = ' + (Date.now() - start) + ' ms')
// ________________________________________Find Min And Max with binary tree________________________________________
start = Date.now()
console.log(tree.findMin(), tree.findMax())
console.log('findMinMax = ' + (Date.now() - start) + ' ms')
// ________________________________________Find a value with for loop________________________________________
start = Date.now()
var bFind = searchArray(tNumber, nbSearch)
console.log(nbSearch + ' = ' + bFind + ' = searchArray = ' + (Date.now() - start) + ' ms')

// ________________________________________Find a value with binary tree________________________________________
start = Date.now()
bFind = tree.search(nbSearch)
console.log(nbSearch + ' = ' + bFind.value + ' = search = ' + (Date.now() - start))
