//! =============================================== !//
//! ===========  СODEWARS iNTERMEDIATE  =========== !//
//! =============================================== !//


//! 8 kyu https://www.codewars.com/kata/take-an-arrow-to-the-knee-functionally
//? Вам будет предоставлен массив чисел, который можно использовать с помощью метода
//?  String.fromCharCode()для преобразования числа в символ.

var ArrowFunc = function (arr) {
   return arr.map(n => String.fromCharCode(n)).join('');
}


//! 8 kyu https://www.codewars.com/kata/merge-two-sorted-arrays-into-one
//? Вам даны два отсортированных массива, оба из которых содержат только целые числа.
//? Ваша задача — найти способ объединить их в один, отсортированный по возрастанию.

function mergeArrays(arr1, arr2) {
   let arrSort = [...new Set(arr1.concat(arr2))];
   return arrSort.sort((a, b) => a - b);
}
//TODO      function mergeArrays(arr1, arr2) {
//TODO         return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
//TODO       }


//! 7 kyu https://www.codewars.com/kata/16-plus-18-equals-214

function add(num1, num2) {
   debugger;
   let str1 = String(num1);
   let str2 = String(num2);
   let long = Math.max(str1.length, str2.length);

   str1 = str1.padStart(long, '0');  // дополнить текущую строку пробельными символами до заданной длины
   str2 = str2.padStart(long, '0');

   let arr1 = Array.from(str1, Number);
   let arr2 = Array.from(str2, Number);
   for (let i = 0; i < arr1.length; i++) {
      arr1[i] += arr2[i];
   }
   return +arr1.join('');
}
//TODO      function add(a,b) {
//TODO         return a*b ? +`${add(a/10|0,b/10|0)}${a%10+b%10}` : a+b
//TODO       }
//TODO      подробные комментарии к этому решению:
//TODO      https://www.codewars.com/kata/reviews/5f469e7a15fbdc00013120c1/groups/5f49db2dbb992f00016bcad4


//! 7 kyu https://www.codewars.com/kata/add-property-to-every-object-in-array
//? Ваша задача — добавить новое свойство usersAnswerк каждому объекту в массиве questions.
//? Значение usersAnswerдолжно быть установлено равным null. Решение должно работать для массива любой длины.
function Answ() {
   for (let i of questions) {
      i['usersAnswer'] = null;
   }
}
//* Мне больше понравилось такое решение:
//TODO   questions.forEach(x => x.usersAnswer = null);


//! 7 kyu https://www.codewars.com/kata/colour-association
//? Вам дан двумерный массив, состоящий из цвета и его «общей» ассоциации в каждом элементе массива.
//? Функция, которую вы напишете, должна возвращать цвет как «ключ» и ассоциацию как «значение».

function colourAssociation(array) {
   debugger;
   let arrObj = [];
   for (let i of array) {
      let obj = {};
      obj[i[0]] = i[1];
      arrObj.push(obj);
   }
   return arrObj;
}
//* Как решают взрослые дяди:
//TODO   const colourAssociation = array => array.map(([colour, association]) => ({[colour]:association}))
//*
//* ОБРАТИ ВНИМАНИЕ!
//* как изячно двумерный массив переделать в объект ключ-значение.
//TODO    function colourAssociation(array){
//TODO       return array.map(x => ({ [x[0]]: x[1]}));
//TODO     }


//! 7 kyu https://www.codewars.com/kata/combine-objects
//? Ваша задача — написать функцию, которая принимает два или более объектов и возвращает новый объект, объединяющий все входные объекты.
//? Все свойства входного объекта будут иметь только числовые значения. Объекты объединяются вместе, так что значения совпадающих ключей складываются вместе.

function combine(...args) {  //(...args) - это "остаточные параметры" - буквально это означает "собери оставшиеся параметры и положи их в массив"
   debugger;
   let obj_comb = {};
   for (let arg of args) {
      for (let key in arg) {
         if (key in obj_comb) {
            obj_comb[key] += arg[key];
         } else {
            obj_comb[key] = arg[key];
         }
      }
   }
   return obj_comb;
}
//* Как решают синьоры-помидоры:
//TODO   const combine = (...params) => params.reduce((a, b) => {
//TODO    for (const x in b) { a[x] = x in a ? a[x] + b[x] : b[x] };
//TODO    return a;
//TODO   }, {});
//TODO


//! 7 kyu https://www.codewars.com/kata/count-the-digit
//?  Возьмите целое число n (n >= 0)и цифру d (0 <= d <= 9)как целое число.
//?  Возведите в квадрат все числа k (0 <= k <= n)от 0 до n.
//?  Подсчитайте количество цифр, d использованных при написании всех k**2.

function nbDig(n, d) {
   let count = '';
   for (let i = 0; i <= n; i++) {
      count += i ** 2;
   }
   return count.length - count.split(d).join('').length;
}
//* Вышло быстрее самого популярного решения. ;)


//! 7 kyu https://www.codewars.com/kata/find-the-missing-element-between-two-arrays
//? Даны два целочисленных массива, где второй массив представляет собой перетасованный 
//? дубликат первого массива с отсутствующим одним элементом, найдите отсутствующий элемент.

function findMissing(arr1, arr2) {
   function sumArrItem(arr) {
      return arr.reduce((sum, current) => sum + current, 0);
   }
   return sumArrItem(arr1) - sumArrItem(arr2);
}
//? Примерно то же самое в популярнейшем решении:
//TODO    function findMissing(arr1, arr2) {
//TODO       const reducer = (accumulator, currentValue) => accumulator + currentValue
//TODO    return arr1.reduce(reducer, 0) - arr2.reduce(reducer, 0);
//TODO    }


//! 7 kyu https://www.codewars.com/kata/get-decimal-part-of-the-given-number
//? Напишите функцию, которая возвращает только десятичную часть заданного числа.

//* прошло только это дибильное решение. (((
function getDecimal(n) {
   let mod = Math.abs(n);
   return (Math.trunc(mod * 10000000000000000)) / 10000000000000000 - Math.trunc(mod);
}

//    let dec = '' + n;
//    return Number(dec.match(/[.]\d{15}/g));
// }

//! 7 kyu https://www.codewars.com/kata/maximum-triplet-sum-array-series-number-7
//? Учитывая массив /список [] из n целых чисел , найти максимальную сумму троек в массиве без повторений .

function maxTriSum(numbers) {
   return [...new Set(numbers)].sort((a, b) => (b - a)).slice(0, 3).reduce((a, b) => a + b, 0);
}
//* ОБРАТИ ВНИМАНИЕ!
//* Самый популярный вариант решения:
//* не лишен элегантности: передаем отсортированный массив как аргументы функции,
//* причем только первые три аргумента указываем явно, а остальные пихаем в "остаточные параметры"
//* Ну и соответственно, при подсчете суммы обращаемся только к первым трем явным аргументам... )))
//TODO   const maxTriSum = numbers => {
//TODO      const [a,b,c,...rest] = [...new Set([...numbers])].sort((a,b)=>b-a)
//TODO      return a+b+c
//TODO    }


//! 7 kyu https://www.codewars.com/kata/whose-bicycle
//? Отец купит велосипед тому, кто принесет лучшие оценки в конце учебного года.
//? из трех обектов с оценками выбрать с наибольшей суммой оценок
//? если сумма одинакова, выбрать сына, который моложе  

function whoseBicycle(diary1, diary2, diary3) {
   let sons = ['first', 'second', 'third'];
   let sumMarks = [];
   for (let i = 0; i < 3; i++) {
      sumMarks[i] = Object.values(arguments[i]).reduce((a, b) => a + b, 0);
   }
   return `I need to buy a bicycle for my ${sons[sumMarks.lastIndexOf(Math.max(...sumMarks))]} son.`;
}
//* ОБРАТИ ВНИМАНИЕ!
//* Понравилось решение: третье по популярности, и логикой очень похоже на моё
//* но способ перебора объектов, переданных как аргументы функции, более элегантный.
//TODO    function whoseBicycle(a, b, c) {
//TODO       [a, b, c] = [a, b, c].map(x => Object.values(x).reduce((y, z) => y + z, 0));  // это вроде как "деструктурирующее присваивание"?
//TODO       let n = Math.max(a, b, c);
//TODO       return `I need to buy a bicycle for my ${n === c ? "third" : n === b ? "second" : "first"} son.`;
//TODO     }


//! 7 kyu https://www.codewars.com/kata/nickname-generator
//? Напишите функцию, nicknameGeneratorкоторая принимает имя строки в качестве аргумента и возвращает первые 3 или 4 буквы в качестве псевдонима.
//? Если 3 - я буква согласная, верните первые 3 буквы.   => nickname("Robert") //=> "Rob"
//? Если 3 - я буква гласная, верните первые 4 буквы.     => nickname("Jeannie") //=> "Jean"
//? Если строка содержит менее 4 символов, вернуть "Ошибка: имя слишком короткое".

function nicknameGenerator(name) {
   return name.length < 4 ? "Error: Name too short" : (/[aeiou]/gi).test(name[2]) ? name.slice(0, 4) : name.slice(0, 3);
}
//* ОБРАТИ ВНИМАНИЕ!
//* Прикольно решили (самое популярное...)
//* Если длинна имени больше 3-х, то отрезаем первые три символа, плюс результат проверки - включает ли в себя третья буква один из символов...
//* здесь использован трюк, что 1+true = 1+1, а  1+false = 1+0.
//TODO const nicknameGenerator = (name) => name.length > 3
//TODO   ? name.slice(0,  3 + 'aeiou'.includes(name[2]))
//TODO   : 'Error: Name too short'


//! 7 kyu https://www.codewars.com/kata/odd-even-string-sort
//? Дана строка s. Вы должны вернуть другую строку, чтобы символы s
//? с четным и нечетным индексом были сгруппированы, а группы разделены пробелами 
//? Например, задаем  sortMyString("CodeWars") получаем - 'CdWr oeas'

function sortMyString(S) {
   debugger;
   const [even, odd] = [...S].reduce((pV, char, i) => (pV[i % 2].push(char), pV), [[], []])
   return even.join('') + " " + odd.join('');
}
//*      Решение подсмотрел тут: https://question-it.com/questions/157368/kak-poluchit-nechetnye-i-chetnye-simvoly-pozitsii-iz-stroki
//*      "Вы могли бы reduce символы строки и сгруппировать их в отдельные массивы с помощью оператора %.
//*      Используйте деструктуризацию (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment),
//*      чтобы получить возвращенный 2D-массив разделять переменные"
//TODO      let str = "This is a test!";
//TODO      const [even, odd] = [...str].reduce((r,char,i) => (r[i%2].push(char), r), [[],[]])
//TODO      console.log(odd.join(''))
//TODO      console.log(even.join(''))
//*
//*      А это то, что я пытался изобразить регуляркой, но не смог...
//TODO      const sortMyString = s => s.replace(/(.)./g, '$1') + ' ' + s.replace(/.(.)?/g, '$1')
//*
//* Вот самое простое решение:
//TODO      function sortMyString(S) {
//TODO          odd = [],
//TODO          even = [];
//TODO      for (var i = 0; i < str.length; i++) {
//TODO        i % 2 === 0
//TODO          ? even.push(str[i])
//TODO          : odd.push(str[i])}
//TODO      }

//! 7 kyu https://www.codewars.com/kata/power-of-two
//? Завершите функцию power_of_two/ powerOfTwo(или эквивалентную, в зависимости от вашего языка),
//? которая определяет, является ли заданное неотрицательное целое число степенью двойки .

function isPowerOfTwo(n) {
   return n > 0 ? n && !(n & (n - 1)) : false;
}
//* То, что я хотел сделать с регуляркой (но решил с побитовым трюком)
//TODO      function isPowerOfTwo(n){
//TODO         return /^10*$/.test(n.toString(2));
//TODO       }


//! 7 kyu https://www.codewars.com/kata/string-reordering
//? Входными данными будет массив словарей.
//? Возвращает значения в виде предложения, разделенного строками, в порядке целочисленного эквивалента их ключей (в порядке возрастания).

function sentence(List) {
   debugger;
   let arr = [];
   for (let i = 0; i < List.length; i++) {
      for (let key in List[i]) {
         arr[1000 + Number(key)] = List[i][key];
      }
   }
   return arr.join(' ').replace(/\s+/g, ' ').trim();
}
//* Популярное решение:
//TODO      const sentence = list =>
//TODO        list
//TODO          .sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0])
//TODO          .map(item => Object.values(item)[0])
//TODO          .join(' ')
//* Вот это тоже стоит разбрать:
//TODO      function sentence(List) {
//TODO         return List
//TODO           .map(e => Object.entries(e)[0])
//TODO           .sort(([a], [b]) => a - b)
//TODO           .map(([a, b]) => b)
//TODO           .join(" ");
//TODO       }


//! 7 kyu https://www.codewars.com/kata/sum-with-arrows/
//? Суммируйте все значения в массиве, используя функцию стиля стрелки

var Sum = 'sum = function(arr){ return arr.reduce((a, b) => a + b ); }';
//* Говно, а не ката - фиг поймешь, чего автору надо. Тесты через задницу, вот и подстраивайся под них (((


//! 7 kyu https://www.codewars.com/kata/unpacking-arguments
//? Вы должны создать функцию spread, которая принимает функцию и список аргументов,
//? которые должны быть применены к этой функции. Вы должны заставить эту функцию 
//? возвращать результат вызова данной функции/лямбды с заданными аргументами.

function spread(func, args) {
   return func(...args);
}


//! 7 kyu https://www.codewars.com/kata/vowel-one
//? Напишите функцию, которая принимает строку и выводит строки из 1 и 0, где гласные становятся 1, а не гласные — 0.
//? Должны быть включены все негласные, включая небуквенные символы (пробелы, запятые и т. д.).

function vowelOne(s) {
   return s.replace(/[^aeiou]/gi, 0).replace(/[^0]/gi, 1);
}
//*      Всё, кроме "aeiou" меняем на 0, потом всё, кроме 0 меняем на 1
//*      как-то коряво, мне не ндравится... надо бы проверять симол на гласность и в зависимости от этого сразу менять на 0 или 1
//*      тем не менее, это популярнейшее решение, как оказалось. )))
//*      Почти то, что я хотел, через массив, на втором месте:
//TODO      function vowelOne(s){
//TODO         return s.split('').map(x => ('aeiouAEIOU'.includes(x)) ? 1 : 0).join('');
//TODO       }
//* А вот это именно то, что я хотел выразить сам:
//TODO      let vowelOne = (s) => [...s].map(c => /[aeiou]/i.test(c) ? '1' : '0').join('')


//! 6 kyu https://www.codewars.com/kata/data-reverse
//? Поток данных получен и должен быть реверсирован.
//? Каждый сегмент имеет длину 8 бит, что означает, что порядок этих сегментов должен быть обратным,
//? например:

//? 11111111  00000000  00001111  10101010
//?  (byte1)   (byte2)   (byte3)   (byte4)

//?  должно стать:
//? 10101010  00001111  00000000  11111111
//?  (byte4)   (byte3)   (byte2)   (byte1)

function dataReverse(data) {
   debugger;
   let arr8bit = [];

   //* Строка ниже - я облажался, т.к. то же самое дает:
   //* for (let i = 0; i < data.length; i += 8) {

   for (let i = 0; i <= data.length - 8; i += 8) {
      arr8bit[Math.floor(i / 8)] = data.slice(i, i + 8);
   }
   return [].concat(...arr8bit.reverse());
}
//*
//*      А вот как это сделал умный человек:
//TODO      function dataReverse(data) {
//TODO         let a = [];
//TODO         while (data.length)
//TODO           a.unshift(...data.splice(0, 8));
//TODO         return a;
//TODO       }
