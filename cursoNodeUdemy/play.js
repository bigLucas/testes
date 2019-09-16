const name = 'Lucao';
let age = 23;
const hasHobbies = true;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return ('Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby);
};

// Essa arrow function pode ser reduzida
const add = (a,b) => {
    return a + b;
};
// Essa é a forma reduziada da arrow function
const addSmall = (a,b) => a + b;


console.log(add(1,2));
console.log(addSmall(1,2));

console.log(summarizeUser(name, age, hasHobbies));