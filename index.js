// Задача 4. Печать треугольника
function printTriangle(size) {
  let s = 0;
  let i = 0;
  let j;
  let board = '';
  let out = '';
  while (s < size - 1) {
    out += ' ';
    s++;
  }
  while (i < size) {
    board += '# ';
    console.log(out, board);
    out = out.substring(0, out.length - 1);
    i++;
  }
}

printTriangle(5)

// Задача 5. Работа с массивом
let arr = [];

function fillArray(num) {
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  for (let i = 1; i <= num; i++) {
    arr.push(getRandomInt(-100, 100))
  }
  return arr;
}

const newArr = fillArray(5)
console.log(newArr)//массив, заполненный рандомными целыми числами (от -100 до 100)

const result = newArr.map(function (elem) {
  return elem < 0 ? elem * -0 : elem;
});
console.log(result)//Замена всех отрицательные чисел нулем

const changeZero =
  result.map(function (elem, index, result) {
    return elem === 0 && !(index % 2) ? -1 : elem
  });

const arrReplace = changeZero.join(',').replace(/-1/g, '0,-1').split(',')

const changeToNum = arrReplace.map(function (elem) {
  return Number(elem);
});
console.log(changeToNum);//После каждого элемента с четным индексом, который равен нулю, вставлен элемент равный -1.

// Задача 6. Работа с коллекциями
const model = [
  {
    id: 0,
    title: 'Title text 1',
    text: 'Some text 1',
    user: {
      id: 0,
      name: 'user 1',
    },
  }, {
    id: 1,
    title: 'Title text 2',
    text: 'Some text 2',
    user: {
      id: 1,
      name: 'user 2',
    },
  }, {
    id: 2,
    title: 'Title text 3',
    text: 'Some text 3',
    user: {
      id: 0,
      name: 'user 1',
    },
  }, {
    id: 3,
    title: 'Title text 4',
    text: 'Some text 4',
    user: {
      id: 2,
      name: 'user 3',
    },
  }, {
    id: 4,
    title: 'Title text 5',
    text: 'Some text 5',
    user: {
      id: 0,
      name: 'user 1',
    },
  }
]

let tmp = model.reduce((sum, curr) => {
  let tmp = sum[curr.user.id];
  if (tmp === undefined) {
    sum[curr.user.id] = tmp = {};
    tmp.id = curr.user.id;
    tmp.name = curr.user.name;
    tmp.posts = [];
  }
  
  tmp.posts.push({
    id: curr.id,
    title: curr.title,
    text: curr.text
  });
  return sum;
}, {});
const arr2 = Object.keys(tmp).map(key => tmp[key]);

console.log(JSON.stringify(arr2, null, 2));