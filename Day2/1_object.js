const dog = {
    name: '루시',
    age: 10,
    weight: 3.5
};

console.log(dog.name);
console.log(dog.age);
console.log(dog.weight);

const student = {
    'class number': 1,
    'first name': 'kim',
    'last name': 'apple'
};

function print({name, age, weight}){
    console.log(`우리집 강아지 이름은 ${name}이며 나이가 ${age}살이고, 몸무게는 ${weight}kg 입니다.`);
}

print(dog);

const member = {'apple':'김사과', 'banana':'반하나', 'orange':'오렌지'};
const {apple, banana, orange} = member;
console.log(apple);
console.log(banana);
console.log(orange);

const users = ['김사과', '반하나', '오렌지'];
const [kim, ban, oh] = users;
console.log(kim);
console.log(ban);
console.log(oh);
