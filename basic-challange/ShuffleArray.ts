export function shuffleArray<T>(array: Array<T>): Array<T> {
  let currentIndex = array.length,
    randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}
  
// Consume utility
interface People {
  name: string;
  gender: "M" | "F";
}
  
const peoples = [{name: "Pangeran", gender: "M"}, {name: "Raja", gender: "M"}, {name: "Ratu", gender: "F"}];

// The result will shuffle the array
console.log(shuffleArray<People>(peoples))
