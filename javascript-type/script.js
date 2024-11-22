const name ="han";

const age = 30;


const hasJob = true;

const car = null;

let anyting;

const sym = Symbol();

//참조 타입 
// Array 배열
const hobbies = ['walking', 'books']; //-> 배열도 결국은 Object의 하나의 형태, 배열인지 확인하는 방법은 Array.isArray를 쓰면됨

//Object 객체
const address = {
    province : '경기도',
    city : '성남시'
}

console.log(Array.isArray(hobbies));

