/*
Tasks -
1. 2s Roll no.
2. 2s name and age.
*/

// ☝️ We did using callback in callback basically callback hell but now we are going to use promises to make this easier.

// 👇 Using Promises Constructor =>
const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		let roll_ = [1, 2, 3, 4, 5];
		resolve(roll_);
		reject('Error while communicating');
	}, 2000);
});

const getBioData = (indexdata) => {
	return new Promise((resolve, reject) => {
		setTimeout(
			(indexdata) => {
				let biodata = {
					name: 'vinod',
					age: 26,
				};
				resolve(
					`My roll no is ${indexdata}. My name is ${biodata.name} and I am ${biodata.age} years old`
				);
			},
			2000,
			indexdata
		);
	});
};

promise1
	.then((rollNo) => {
		console.log(rollNo);
		return getBioData(rollNo[1]);
	})
	.then((kuchbhi) => {
		console.log(kuchbhi);
	})
	.catch((error) => {
		console.log(error);
	});

// 👇 Using Promises Object =>
