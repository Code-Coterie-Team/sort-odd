function sortOdds(array) {

    const sortedOdds = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);

    return array.map(num => num % 2 === 0 ? num : sortedOdds.shift());
}

console.log(sortOdds([7, 1])); 