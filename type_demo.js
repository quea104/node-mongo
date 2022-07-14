var myNumber = 3;
console.log(myNumber);
console.log(typeof myNumber); // number

var myFloat = 3.1;
console.log(typeof myFloat); // number

var myBool = true;
console.log(typeof myBool); // boolean

var myArray = [1,2,3,4,5];
console.log(typeof myArray); // object

function myFunc(a,b){
    return a+b;
}

const myFunc2 = function(a,b){
    return a+b;
};
console.log(typeof myFunc2); // function

// Arrow Function <- ES6, 선호
const myFunc3 = (a,b) => {
    return a+b;
};
console.log(typeof myFunc3); // function

const article = {
    title: '제목입니다.',
    author: '이름',
    body: '본문',
    tags: ['good', 'today', 'kim'],
    replay: [
        {
            author: 'lee',
            likes: 10
        }
    ]
};
console.log(typeof article); // object