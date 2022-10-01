// A salesman has a number of cities to visit. They want to calculate the total number of possible paths they could take, visiting each city once before returning home. Return the total number of possible paths a salesman can travel, given n cities.

// this uses a factorial to solve it.

function paths(n) {
	if (n < 0) return;
    if (n === 0) return 1;
    return n * paths(n - 1);
}

console.log(paths(4)) // 24
console.log(paths(1)) // 1
console.log(paths(9)) // 362880
