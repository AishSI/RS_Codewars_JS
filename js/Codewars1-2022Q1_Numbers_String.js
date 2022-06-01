
//! Codewars1-2022Q1
//! Numbers, strings
//! 7 kyu https://www.codewars.com/kata/highest-and-lowest
function highAndLow(numbers) {
   let numArr = numbers.split(' ')
   return Math.max(...numArr) + ' ' + Math.min(...numArr)
}


//! 7 kyu https://www.codewars.com/kata/disemvowel-trolls
function disemvowel(str) {
   debugger;
   return str.replace(/[AEIOUaeiou]/g, '')
   // Правильнее было бы использовать ключ /i - игнорирование регистра букв
   // return str.replace(/[AEIOUaeiou]/g, '')
}

//! 7 kyu https://www.codewars.com/kata/isograms
// Поиск есть ли повторяющиеся символы в строке.
function isIsogram(str) {
   let set = new Set([...str.toUpperCase()]);
   return set.size == str.length;
   // ? то же самое, чуть более изячно:
   // * return new Set(str.toUpperCase()).size == str.length;
}
// ? решение через регулярку:
// * function isIsogram(str){
// *   return !/(\w).*\1/i.test(str)
// * }


//! 7 kyu https://www.codewars.com/kata/digits-explosion
// Учитывая строку, состоящую из цифр [0-9], вернуть строку, в которой каждая цифра повторяется количество раз, равное ее значению.
function explode(s) {
   let arr_s = [];
   for (let i = 0; i < s.length; i++) {
      arr_s[i] = s[i].repeat(s[i]);
   }
   return arr_s.join('');
}
//? Как я бы хотел, но не смог:
//* function explode(s) {
//*    return s.split("").map((e) => e.repeat(+e)).join("");
//*  }
//? А это через регулярку:
//* const explode = s => s.replace(/\d/g, d => d.repeat(d));

//! 6 kyu https://www.codewars.com/kata/handshake-problem
function getParticipants(handshakes) {
   let human = 1;
   let press = 0;
   while (press < handshakes) {
      press += human;
      human += 1;
   }
   return human;
}

//! 6 kyu https://www.codewars.com/kata/duplicate-encoder
function duplicateEncode(word) {
   word = word.toLowerCase();
   return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
}
// наверное, можно без ловеркейса сделать, просто добавить ключ i в регулярку...

//! 6 kyu https://www.codewars.com/kata/n-th-fibonacci
function nthFibo(n) {
   // Return the n-th number in the Fibonacci Sequence
   debugger;
   let a = 0, b = 1, c = 0;
   for (let i = 1; i < n; i++) {
      c = a + b;
      a = b;
      b = c;
   }
   return a;
}
//? похожее решение, как по мне, изящнее выглядит
//* function nthFibo(n) {
//*    let [prev, curr] = [0, 1];
//*    for (let i = 1; i < n; i++) [prev, curr] = [curr, prev + curr];
//*    return prev;
//*  }

//! 6 kyu https://www.codewars.com/kata/multiples-of-3-or-5
function solution(number) {
   let sum = 0
   for (let i = 0; i < number; i++) {
      i % 3 === 0 || i % 5 === 0 ? sum += i : ''
   }
   return sum
}


//!---------------------//
//!       ARRAYS        //
//!---------------------//

//! 7 kyu https://www.codewars.com/kata/head-tail-init-and-last
// Ваша задача — реализовать эти функции на данном языке.Убедитесь, что он не редактирует массив; это вызовет проблемы! Вот шпаргалка:
// | HEAD | < ----------- TAIL------------> |
//    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//    | < ----------- INIT------------> | LAST |

function head(arr) {
   return new arr.slice(0, 1);
}
function last(arr) {
   return arr.slice(-1);
}
function tail(arr) {
   debugger;
   return arr.slice(1);
}
function init(arr) {
   debugger;
   return arr.slice(0, arr.length - 1);
}
//? Популярное решение:
//* function head(a) {return a[0]}
//* function last(a) {return a[a.length - 1]}
//* function init(a) {return a.slice(0, -1)}
//* function tail(a) {return a.slice(1)}


//! 6 kyu https://www.codewars.com/kata/array-deep-count
function deepCount(a) {
   debugger;
   a.reduce(function(previousValue, currentValue) {
   return previousValue.concat(currentValue)
   },[])
   


   // var count = a.length;

   // a.forEach(element => {
   //    if (Array.isArray(element)) {
   //       count += element.length;
   //       deepCount(element);
   //    }
   // });
   // return count;


   // if (a.length == 0){
   //    return 1;
   // }else {
   //    a.array.forEach(a => {
   //       if (Array.isArray(a)){
   //          deepCount(a);
   //       }

   //    });
   // }
}


// Изучаю рекурсию на примере факториала:
function fact(n) {
   debugger;
   return (n == 1) ? 1 : (n * fact(n - 1));
   // if (n == 1) {
   //    return 1;
   // } else {
   //    return (n * fact(n - 1));
   // }
}

//! 6 kyu https://www.codewars.com/kata/length-of-missing-array

//! 6 kyu https://www.codewars.com/kata/pair-of-gloves

//! 6 kyu https://www.codewars.com/kata/sorting-by-bits


let ask = (question, yes, no) => confirm(question)? alert("Вы согласились."): alert("Вы отменили выполнение.");

// {
//    if (confirm(question)) yes()
//    else no();
//  }
 
//  ask(
//    "Вы согласны?",
//    function() { alert("Вы согласились."); },
//    function() { alert("Вы отменили выполнение."); }
//  );