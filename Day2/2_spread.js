const dog = {
    name: '루시'
};

const cuteDog = {
    ...dog,
    age: 10
}

const whiteCuteDog = {
    ...cuteDog,
    color: 'white'
}

console.log(dog);
console.log(cuteDog);
console.log(whiteCuteDog);

const student = ['김사과', '오렌지', '반하나', '이메론'];
const student2 = [ ...student, '안카도'];
console.log(student);
console.log(student2);
