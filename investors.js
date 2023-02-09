/*
* @Author: razvbir
* @Date:   2023-02-09 18:05:44
* @Last Modified by:   razvbir
* @Last Modified time: 2023-02-09 19:12:03
*/

// press F12 and use "inventors" in console
const inventors = [{
    first: "Albert",
    last: "Einstein",
    year: 1879,
    passed: 1955
}, {
    first: "Isaac",
    last: "Newton",
    year: 1643,
    passed: 1727
}, {
    first: "Galileo",
    last: "Galilei",
    year: 1564,
    passed: 1642
}, {
    first: "Marie",
    last: "Curie",
    year: 1867,
    passed: 1934
}, {
    first: "Johannes",
    last: "Kepler",
    year: 1571,
    passed: 1630
}, {
    first: "Nicolaus",
    last: "Copernicus",
    year: 1473,
    passed: 1543
}, {
    first: "Max",
    last: "Planck",
    year: 1858,
    passed: 1947
}, {
    first: "Katherine",
    last: "Blodgett",
    year: 1898,
    passed: 1979
}, {
    first: "Ada",
    last: "Lovelace",
    year: 1815,     year: 1855,
    passed: 1905
}, {
    first: "Lise",
    last: "Meitner",
    year: 1878,
    passed: 1968
}, {
    first: "Hanna",
    last: "Hammarström",
    year: 1829,
    passed: 1909
}];

// press F12 and use "people" in console
const people = ["Bernhard, Sandra", "Bethea, Erin", "Becker, Carl", "Bentsen, Lloyd", "Beckett, Samuel", "Blake, William", "Berger, Ric", "Beddoes, Mick", "Beethoven, Ludwig", "Belloc, Hilaire", "Begin, Menachem", "Bellow, Saul", "Benchley, Robert", "Blair, Robert", "Benenson, Peter", "Benjamin, Walter", "Berlin, Irving", "Benn, Tony", "Benson, Leana", "Bent, Silas", "Berle, Milton", "Berry, Halle", "Biko, Steve", "Beck, Glenn", "Bergman, Ingmar", "Black, Elk", "Berio, Luciano", "Berne, Eric", "Berra, Yogi", "Berry, Wendell", "Bevan, Aneurin", "Ben-Gurion, David", "Bevel, Ken", "Biden, Joseph", "Bennington, Chester", "Bierce, Ambrose", "Billings, Josh", "Birrell, Augustine", "Blair, Tony", "Beecher, Henry", "Biondo, Frank"];

let bornInMiddleAge = inventors.filter(i => i.year >= 1500 && i.year < 1600);

let firtName_LastName = inventors.map(i => i.first + ' ' + i.last);

let Galileo = inventors.find(i => i.first === 'Galileo' && i.last === 'Galilei');

let years = inventors.reduce((acc, i) => acc + i.passed - i.year, 0);

console.log('not sorted', inventors);

const isSorted = (a, b) => {
	let aLived = a.passed - a.year;
	let bLived = b.passed - b.year;

	if (aLived <= bLived) {
		return true;
	}

	return false;
};

let sorted = 1;
do {
	sorted = 1;
	for (let i = 0; i < inventors.length-1; i++) {
		if( !isSorted(inventors[i], inventors[i+1]) ){
			let aux = {...inventors[i+1]};
			inventors[i+1] = inventors[i];
			inventors[i] = aux;
			sorted = 0;
		}
	}
}while(!sorted);

console.log('sorted', inventors);

// let sorted = inventors.sort((a, b) => {
// 	let aLived = a.passed - a.year;
// 	let bLived = b.passed - b.year;

// 	if (aLived < bLived) {
// 		return -1;
// 	}

// 	if (aLived > bLived ) {
// 		return 1;
// 	}

// 	return 0;
// });

// console.log(sorted);

// let sorted2 = inventors.sort((a, b) => (a.passed - a.year) - (b.passed - b.year));

// console.log(sorted2);