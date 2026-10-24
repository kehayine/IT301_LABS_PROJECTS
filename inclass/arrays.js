let colors = ['red', 'green'];
let newcolors = colors;
colors[2] = 'blue';
console.log(newcolors);

let fruits = [
    {name: 'apple', color: 'red', calories: 42}, 
    {name: 'banana', color: 'yellow', calories: 89},
    {name: 'orange', color: 'orange', calories: 62}
];
console.log(fruits);

const myColor = 'color';
console.log(fruits[0][myColor]);

fruits[2].calories = 105;
console.log(fruits[2].calories);

fruits[0].type = 'fruit';
console.log(fruits[0].type);

console.log(fruits);

const classroom = {
    teacher: {name: 'Mr. Smith', subject: 'Math'},
    students: [
        {name: 'John', age: 15},
        {name: 'Jane', age: 14},
        {name: 'Jim', age: 16}
    ]
};
console.log(classroom.teacher.name);
console.log(classroom.students[0].name);

for (let i = 0; i < fruits.length; i++) {
    console.log('Fruit name is: ' +fruits[i].name);
    console.log('Color of ' + fruits[i].name + ' is ' + fruits[i].color);
    console.log('Calories of ' + fruits[i].name + ' is ' + fruits[i].calories);
}

for (let color of colors) {
    console.log(color);
}

const array = [1,2,3,4,5];
array.forEach(i=>console.log(i+5));

let newarray = array.map(i=>i+5)
console.log(newarray);

let item = array.find(i => i > 4);
console.log(item);