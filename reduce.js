/**
 * To run this file in Gitpod, use the
 * command node reduce.js in the terminal
 */

// Its just glorified cumulative sum
// Summing an array of numbers:
const numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, curr) => acc + curr, 0); // 0 is the initial value of the accumulator, it will start from 10 if u put 10 there
console.log(sum); // 10

const teamMembers = [
	{
		name: "Andrew",
		profession: "Developer",
		yrsExperience: 5,
	},
	{
		name: "Ariel",
		profession: "Developer",
		yrsExperience: 7,
	},
	{
		name: "Michael",
		profession: "Designer",
		yrsExperience: 1,
	},
	{
		name: "Kelly",
		profession: "Designer",
		yrsExperience: 3,
	},
    {
        name: "Mark",
        profession: "Manager",
		yrsExperience: 10,
    }
];

// Totaling a specific object property
let totalExp = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExp); // 16

// Grouping by a property, and totaling it too
let expByProfession = teamMembers.reduce((acc, curr) => {
	let key = curr.profession;
	if (!acc[key]) {
		acc[key] = curr.yrsExperience; // if the key doesn't exist, create it and set it to the current years of experience
	} else {
		acc[key] += curr.yrsExperience; // if the key exists, add the current years of experience to it
	}
	return acc;
}, {});

console.log(expByProfession); // { Developer: 12, Designer: 4, Manager: 10 }
