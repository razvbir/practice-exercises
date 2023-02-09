/*
* @Author: razvbir
* @Date:   2023-02-09 17:33:30
* @Last Modified by:   razvbir
* @Last Modified time: 2023-02-09 18:53:11
*/

// press F12 and use "employees" in console
//
// you can also import all constants in your project using:
//
//   <script src="https://nmatei.github.io/simple-quiz-app/public/js/questions/constants.js"></script>
//
var employees = [{
    id: 1,
    firstName: "Solly",
    lastName: "Coon",
    email: "scoon0@miitbeian.gov.cn",
    gender: "Male",
    salary: "293.27"
}, {
    id: 2,
    firstName: "Myron",
    lastName: "Clissold",
    email: "mclissold1@over-blog.com",
    gender: "Male",
    salary: "463.44"
}, {
    id: 3,
    firstName: "Perla",
    lastName: "Fauguel",
    email: "pfauguel2@discovery.com",
    gender: "Female",
    salary: "764.17"
}, {
    id: 4,
    firstName: "Aundrea",
    lastName: "Kegan",
    email: "akegan3@tripod.com",
    gender: "Female",
    salary: "574.63"
}, {
    id: 5,
    firstName: "Eadith",
    lastName: "Chene",
    email: "echene4@prnewswire.com",
    gender: "Female",
    salary: "417.37"
}, {
    id: 6,
    firstName: "Lorette",
    lastName: "Tuther",
    email: "ltuther5@admin.ch",
    gender: "Female",
    salary: "377.40"
}, {
    id: 7,
    firstName: "Robenia",
    lastName: "Robins",
    email: "rrobins6@networkadvertising.org",
    gender: "Female",
    salary: "206.26"
}, {
    id: 8,
    firstName: "Moe",
    lastName: "Bottoms",
    email: "mbottoms7@php.net",
    gender: "Male",
    salary: "425.70"
}, {
    id: 9,
    firstName: "Talia",
    lastName: "Cutsforth",
    email: "tcutsforth8@delicious.com",
    gender: "Female",
    salary: "711.72"
}, {
    id: 10,
    firstName: "Ives",
    lastName: "Crennan",
    email: "icrennan9@microsoft.com",
    gender: "Male",
    salary: "668.98"
}];

function collectFirstName(employees) {
	if (!employees) {
		console.info("you did not provide any value");
	}

	return employees.map(e => e.firstName);
}

function calculateAverageSalary(employees) {
	const numberOfEmployees = employees.length;
	const sumOfSalaries = employees.reduce((acc, curr) => acc + parseInt(curr.salary), 0);

	return sumOfSalaries / numberOfEmployees;
}

function calculateAverageFemSalary(employees) {
	return calculateAverageSalary(employees.filter(employee => employee.gender === "Female"));
}

function splitEmployees(employees) {
	return [employees.filter(e => e.gender === "Female"), employees.filter(e => e.gender === "Male")];
}

function convertToJson(employees) {
	const ret = {};

	for (const employee of employees) {
		ret[employee.lastName] = employee;
	}

	return ret;
}

function convert(employees) {
	return employees.reduce((acc, curr) => {
		// acc[curr.la|stName] = curr;
		// return acc;
		return {
			...acc,
			[curr.lastName]: curr
		}
	},{});
}

function convert2(employees) {
	return employees.reduce((acc, curr) => ({...acc, [curr.lastName]: curr }),{});
}

console.log(convert(employees));

