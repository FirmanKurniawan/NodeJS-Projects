function circle_area(radius) {
    return Math.PI * Math.pow(radius, 2);
}

function circle_perimeter(radius) {
    return 2 * Math.PI * radius;
}

module.exports = {
    circle_area,
    circle_perimeter,
}