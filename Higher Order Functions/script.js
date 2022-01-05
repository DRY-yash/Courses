// From Traversy media : https://www.youtube.com/watch?v=rRgD1yVwIvE&list=WL&index=6&t=1s

const companies = [
	{ name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
	{ name: 'Company Two', category: 'Retail', start: 1984, end: 2003 },
	{ name: 'Company Three', category: 'Retail', start: 2000, end: 2003 },
	{ name: 'Company Four', category: 'Finance', start: 1999, end: 2003 },
	{ name: 'Company Five', category: 'Finance', start: 1981, end: 2003 },
	{ name: 'Company Six', category: 'Finance', start: 1981, end: 2003 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 45, 25, 64, 32];

//For Loop v/s For Each
// Basic For Loop
// for (let i = 0; i < companies.length; i++) {
// 	console.log(companies[i]);
// }

//For Each
// companies.forEach(function (company) {
// 	console.log(company.name);
// });

//Filtering using for loop
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
// 	if (ages[i] >= 21) {
// 		canDrink.push(ages[i]);
// 	}
// }
// console.log(canDrink);

//Filter function
// const canDrink = ages.filter(function (age) {
// 	if (age >= 21) {
// 		return true;
// 	}
// });

//Same using ES6
// const canDrink = ages.filter((age) => age >= 21);

// console.log(canDrink);

//Filter Retail companies
// const retailCompanies = companies.filter(
// 	(company) => company.category == 'Retail'
// );

// console.log(retailCompanies);

//Map
//Create array of company names
// const companyNames = companies.map((company) => company.name);

// console.log(companyNames);

// const agesSquare = ages.map((age) => Math.sqrt(age));
// console.log(agesSquare);

//sort
// const sortedCompanies = companies.sort((c1, c2) =>
// 	c1.start > c2.start ? 1 : -1
// );
// console.log(sortedCompanies);

//Sort ages
// const sortAges = ages.sort((a, b) => (b > a ? 1 : -1));
// console.log(sortAges);

//Reduce
//Add ages

const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);

//Get total years for all companies
const totalYears = companies.reduce(
	(total, company) => total + (company.end - company.start),
	0
);
console.log(totalYears);
