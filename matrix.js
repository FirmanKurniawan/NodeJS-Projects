const matcal = (matrix) => {
    let him = [];
    for (j = 0; j < matrix.length; j++) {
        awal = matrix[j][0];
        for (i = 0; i < matrix[0].length - 1; i++) {
            let n = i + 1;
            awal = awal.map((res, i) => res + matrix[j][n][i]);
        }
        him.push(awal);
    }
    return him;
};

const example = [
    [
        [1, 1, 1],
        [3, 4, 5],
        [6, 7, 8],
    ],
    [
        [1 / 5, 1 / 4, 1 / 3],
        [1, 1, 1],
        [4, 5, 6],
    ],
    [
        [1 / 8, 1 / 7, 1 / 6],
        [1 / 6, 1 / 5, 1 / 4],
        [1, 1, 1],
    ],
];

const result = matcal(example);
console.log(result);
