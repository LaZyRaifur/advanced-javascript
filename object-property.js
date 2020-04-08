const student = [
    {id: 21, name:'Omar Sunny'},
    {id: 31, name:'Maannaaaaaaa'},
    {id: 41, name: 'Moyori'},
    {id: 71, name: 'Deepjol'}
];
const name = student.map(s => s.name);
const ids = student.map(s =>s.id);
const bigger = student.filter(s => s.id>40);
const biggerOne = student.filter(s=>s.id>40);
console.log(biggerOne);