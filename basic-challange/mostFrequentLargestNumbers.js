/**
 * Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui
 * berapa kali angka tersebut muncul di dalam arrNumber.
 * Dilarang mengubah mengubah 2 lines di dalam function mostFrequentLargestNumbers yaitu lines:
 * let listSort = sorting(arrNumber)
 * let countHighest = getTotal(listSort)
 */
function sorting(arrNumber) {
  return arrNumber.sort((a, b) => b - a);
}

function getTotal(arrNumber) {
  if (arrNumber.length === 0) {
    return "";
  }

  let count = 0;
  let largestNumber = arrNumber[0];

  arrNumber.forEach((element) => {
    if (element === largestNumber) {
      count += 1;
    }
  });

  return `angka paling besar adalah ${largestNumber} dan jumlah kemunculan sebanyak ${count} kali`;
}

function mostFrequentLargestNumbers(arrNumber) {
  let listSort = sorting(arrNumber);
  let countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(
  mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150])
);
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
