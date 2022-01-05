/*
API

 Tasks
 1. 2s student roll no
 2. 2s 2nd name and age
 3. 2s gender
*/

const getRollNo = () => {
	setTimeout(() => {
		console.log('=> callback function');
		let roll_ = [1, 2, 3, 4, 5];
		console.log(roll_);
		setTimeout(
			(rollNo) => {
				console.log('=> callback in callback');
				const bioData = {
					name: 'vinod',
					age: 26,
				};
				console.log(
					`My roll no is ${rollNo}. My Name is ${bioData.name} and I am ${bioData.age} years old`
				);
				setTimeout(
					(name) => {
						console.log('=> This is callback hell');
						bioData.gender = 'male';
						console.log(
							`My roll no is ${rollNo}. My Name is ${bioData.name} and I am ${bioData.gender}`
						);
					},
					2000,
					bioData.name
				);
			},
			2000,
			roll_[1]
		);
	}, 2000);
};

getRollNo();

// This is callback hell and is very hard to organize and understand . This is also very dangerous while doing an actual project.
