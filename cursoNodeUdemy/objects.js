//Aula 15, seção 02
const person = {
    name: 'Lucao',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

person.greet();