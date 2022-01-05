// // 1. Synchronous JavaScript
// const fun2 = () => {
// 	console.log('I am fun2');
// };

// const fun1 = () => {
// 	console.log('I am fun1');
// 	fun2();
// 	console.log('fun1 Ends');
// };

// fun1();

// // ☝️ The above is the example of Synchronous JavaScript.
// // first fun2() executes then console.log('fun1 Ends') executes.

// // 2. Asynchronous JavaScript

// const fun2_ = () => {
// 	setTimeout(() => {
// 		console.log('I am fun2_');
// 	}, 1000);
// };

// const fun1_ = () => {
// 	console.log('I am fun1_');
// 	fun2_();
// 	console.log('fun1_ Ends');
// };

// fun1_();

//  The above is the example of Aynschronous JavaScript
// setTimeout() is a Asynchronous method.

//============================================================

// 3. Async / Await for promises =>
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

// promise1
// 	.then((rollNo) => {
// 		console.log(rollNo);
// 		return getBioData(rollNo[1]);
// 	})
// 	.then((kuchbhi) => {
// 		console.log(kuchbhi);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// ☝️ We will write the above promise consume statment using async await.
async function getData() {
	const rollData = await promise1;
	console.log(rollData);

	const bioData = await getBioData(rollData[1]);
	console.log(bioData);
}

getData();
// ☝️ See how easy it became to consume promises. 😀 Wow!
