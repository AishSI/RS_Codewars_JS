// decodeMorse = function (morseCode) {

//    let morseString = morseCode.trim().split("   ");
//    let result = [];
//    let phrase = '';

//    for (let i = 0; i < morseString.length; i++) {
//       result[i] = morseString[i].split(" ");
//    }

//    for (let i = 0; i < result.length; i++) {
//       let normWord = '';
//       for (let j = 0; j < result[i].length; j++) {
//          normWord += MORSE_CODE[result[i][j]];
//       }
//       normWord += " ";
//       phrase += normWord;
//    }

//    return phrase.trim();
// }

// function dontGiveMeFive(start, end) {
//    let count = 0;
//    for (let index = start; index < end + 1; index++) {
//       ("s" + index).includes('5') ? count++ : count;
//    }

//    return count;
// }


// isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']);
// function isValidWalk(walk) {
//    (walk.count == 10)
// }

function isValidWalk_oneVariant(walk) {
   return ((walk.length == 10) && ((windRose(walk, "w") - windRose(walk, "e")) == 0) && ((windRose(walk, "n") - windRose(walk, "s")) == 0));
}
function windRose(walk, azimuth) {
   return walk.filter(item => item == azimuth).length;
}


// function isValidWalk(walk) {
//    let countMinute = walk.length;
//    if (countMinute == 10) {
//       let ns = 0, we = 0;
//       for (let i = 0; i <= countMinute; i++) {
//          switch (walk[i]) {
//             case "n":
//                ns += 1;
//                break;
//             case "s":
//                ns -= 1;
//                break;
//             case "w":
//                we += 1;
//                break;
//             case "e":
//                we -= 1;
//                break;
//          }
//       }
//       return (ns == 0 && we == 0) ? true : false;
//    }
//    return false;
// }


// function procedure(n) {
//    let endIterations = 100 - n;
//    let sum = n;
//    let multiple = [n];

//    while (sum <= endIterations) {
//       sum += n;
//       multiple.push(sum);
//    }

//    let multiSum = multiple.map(item => digital_root(item));
//    return multiSum.reduce((a, b) => a + b, 0);
// }
// function digital_root(n) {
//    n = eval(n.toString().split('').join('+'));
//    return n;
// }

// String.prototype.toJadenCase = function () {
//    let input = this.replace(/^[a-z]|\s[a-z]/g, u => u.toUpperCase());
//    return input;
// };



// function findChildren(dancingBrigade) {
//    let moms = dancingBrigade.match(/[A-Z]/g).sort();
//    let teleport = [];
//    for (let i = 0; i < moms.length; i++) {
//       var mom = moms[i];
//       var pattern = new RegExp(mom, "gi");
//       teleport[i] = dancingBrigade.match(pattern).sort().join('');
//    }//
//    return teleport.join('');
// }

// Очистить строку от цифр. 
// взял регулярку "не цифры" - \D b сджойнил обратно в строку, проверив, что есть что слеплять.
// а мог бы сделать проще простого:
// function stringClean(s){
//    return s.replace(/\d/g, "");
//  }

function stringClean(s) {
   // debugger;
   let noNum = s.match(/\D/g);
   let clearText = (noNum != null) ? noNum.join('') : '';
   return clearText;
}



// Вам нужно написать регулярное выражение, которое будет проверять пароль, чтобы убедиться, что он соответствует следующим критериям:
// Не менее шести символов
// содержит строчную букву
// содержит заглавную букву
// содержит число
// Действительные пароли могут состоять только из буквенно-цифровых символов.

// function validate(password) {
//    return /((?!.*[\W])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{6,})/.test(password);
// }


// deleteNth([20,37,20,21], 1)
//===============================================================================================
// Учитывая список и число, создайте новый список, который содержит каждое число listне более Nраз, без изменения порядка.
// Например, если входной номер равен 2, а входной список — [1,2,3,1,2,1,2,3], вы берете [1,2,3,1,2], отбрасываете следующий, [1,2]поскольку это приведет к 1и 2будет в результате 3раз, а затем берете 3, что приводит к [1,2,3,1,2,3].
// Со списком [20,37,20,21]и числом 1результатом будет [20,37,21].

// человеки решают ее за пару строк кода. О_О ((((
//мое решение
// function deleteNth(arr, n) {
//    let arr2 = [];
//    for (let i = 0; i < arr.length; i++) {
//       let limiter = 0;
//       if ((arr[i] !== null) && (arr[i] !== arr2[i])) {
//          arr2[i] = arr[i];
//          limiter++;
//          for (let j = i + 1; j < arr.length; j++) {
//             if ((arr[j] == arr[i]) && (arr[j] != arr2[j]) && (limiter < n)) {
//                arr2[j] = arr[j];
//                limiter++;
//             }
//             if ((arr[j] == arr[i]) && (limiter >= n)) {
//                arr[j] = null;
//                // limiter++;
//             }
//          }
//       }
//    }
//    return arr2.filter(Number);
// }


//===================================================
// ЗАДАЧА
// Давайте используем строку mapдля представления этих комнат, например: "xo oxox".
// "x"означает, что в комнате есть лампочка, и ее начальное состояние равно off;
// "o"означает, что в комнате есть лампочка, и ее начальное состояние равно on;
// " "(пробел) означает комнату без лампочки, в ней всегда темно.
// Ваша задача — определить, сможете ли вы пройти лабиринт. Вернись true, если сможешь, falseиначе.
// Примечание
// Ваша начальная позиция — самая левая, позиция выхода — самая правая.
// Ваша скорость передвижения составляет 1 минуту за шаг. Вы не можете остановиться, прежде чем начать движение, пока не дойдете до выхода.

// мое решение:

// function bulbMaze(map) {
//    let toggle = 1
//    for (let i = 0; i < map.length; i++) {
//       if ((toggle == 1) && (map[i] == 'o')) {
//          return false;
//       }
//       if ((toggle == -1) && (map[i] == 'x')) {
//          return false;
//       }
//       toggle *= -1;
//    }
//    return true;
// }

// а это то решение, которое я хотел выразить, но не сумел:
// автор - Shaloban
function bulbMaze(map) {
   return [...map].every((item, index) => item == ' ' ? true : index % 2 == 0 ? item == 'x' : item == 'o')
}


function sortByGuide(arr, guide) {
   let arrSort = [];
   for (let i = 0; i < arr.length; i++) {
      (guide[i] == -1) ? guide[i] = arr[i] : (arrSort[guide[i] - 1] = arr[i], guide[i] = "?");
   }
   for (let j in arrSort) {
      guide[guide.indexOf("?")] = arrSort[j];
   }
   return guide;
}

function fact(x) {
   debugger;
   if (x == 1) {
      return x;
   }
   else {
      return x * fact(x - 1);
   }
}

//Функция вычисления суммы элементов масива рекурсией:

function sumrecurs(arr) {
   debugger;
   let size = arr.length;
   let sumItem = 0;
   return recursSum(arr, size, sumItem);
}

function recursSum(arr, size, sumItem = 0) {
   return (size == 0) ? sumItem + 0 : recursSum(arr, size - 1, sumItem += arr[size - 1]);
}

//===================================================================
// Реализуйте метод length , который принимает связанный список (заголовок) и возвращает длину списка.
// Например: Учитывая список: 1 -> 2 -> 3 -> 4длина должна возвращать 4.

function length(head) {
   let count = list;

   while (count) {
      alert(count.value);
      count = count.next;
   }
   return count;
}


function indexOf(head, value) {
   debugger;
   let count = 0;

   while (head) {
      if (head.head.value === value) {
         return count;
      }
      head = head.head.next;
      count++;
   }
   return -1;
}

function length(head) {
   let count = 0;

   while (head) {
      head = head.next;
   }
   return head;
}

class LinkedListNode {
   constructor(value, next = null) {
      this.value = value;
      this.next = next;
   }

   toString(callback) {
      return callback ? callback(this.value) : `${this.value}`;
   }
}


class LinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
   }

   prepend(value) {
      // Создаём новый узел, который будет новым head,
      // при создании передаем второй аргумент, который указывает
      // что его "next" будет текущий head,
      // так как новый узел будет стоять перед текущем head.
      const newNode = new LinkedListNode(value, this.head);

      // Переназначаем head на новый узел
      this.head = newNode;

      // Если ещё нет tail, делаем новый узел tail.
      if (!this.tail) {
         this.tail = newNode;
      }

      // Возвращаем весь список.
      return this;
   }

   append(value) {
      // Создаём новый узел.
      const newNode = new LinkedListNode(value);

      // Если нет head или tail, делаем новым узлом head и tail.
      if (!this.head || !this.tail) {
         this.head = newNode;
         this.tail = newNode;

         return this;
      }

      // Присоединяем новый узел к концу связного списка.
      // Берём последний узел и указываем, что его next будет новым узлом.
      this.tail.next = newNode;

      // Переназначаем tail на новый узел.
      this.tail = newNode;

      return this;
   }


   delete(value) {
      // Если нет head значит список пуст.
      if (!this.head) {
         return null;
      }

      let deletedNode = null;

      // Если head должен быть удален, то делаем следующий узел новым head.
      while (this.head && this.head.value === value) {
         deletedNode = this.head;

         // Переназначаем следующий за head узел на новый head.
         this.head = this.head.next;
      }

      let currentNode = this.head;

      // Если следующий узел должен быть удален,
      // делаем узел через один, следующим для проверки.
      // Перебираем все узлы и удаляем их, если их значение равно указанному.
      if (currentNode !== null) {
         while (currentNode.next) {
            if (currentNode.next.value === value) {
               deletedNode = currentNode.next;
               // Перезаписываем, чтобы узел через один стал следующим узлом.
               currentNode.next = currentNode.next.next;
            } else {
               currentNode = currentNode.next;
            }
         }
      }

      // Проверяем, должен ли tail быть удален.
      // Так как, если в цикле мы удаляем последний узел,
      // то с предпоследнего узла убираем только ссылку на него.
      // Поэтому делаем проверку на его удаление с "tail".
      if (this.tail && this.tail.value === value) {
         // в данном случае currentNode это или предпоследний узел или head.
         this.tail = currentNode;
      }

      return deletedNode;
   }

   find(value) {
      // Если нет head значит список пуст.
      if (!this.head) {
         return null;
      }

      let currentNode = this.head;

      // Перебираем все узлы в поиске значения.
      while (currentNode) {
         // Если указано значение, пробуем сравнить его по значению.
         if (value !== undefined && currentNode.value === value) {
            return currentNode;
         }

         // Перематываем на один узел вперед.
         currentNode = currentNode.next;
      }

      return null;
   }

   deleteTail() {
      // Если нет tail, значит список пуст.

      if (!this.tail) {
         return null;
      }

      // Сохраняем значение последнего узла.
      const deletedTail = this.tail;

      // Если head и tail равны, значит в списке только один узел.
      if (this.head === this.tail) {
         this.head = null;
         this.tail = null;

         return deletedTail;
      }

      // Если в связном списке много узлов.
      // Перебираем все узлы и находим предпоследний узел,
      // убираем ссылку «next» на последний узел.
      let currentNode = this.head;
      while (currentNode.next) {
         // Если у следующего узла нет следующего узла,
         // значит текущий узел предпоследний.
         if (!currentNode.next.next) {
            // убираем ссылку «next» на последний узел.
            currentNode.next = null;
         } else {
            // Перематываем на один узел вперед.
            currentNode = currentNode.next;
         }
      }

      // В данном случае currentNode - это предпоследний узел или head,
      // который становится последним узлом.
      this.tail = currentNode;

      return deletedTail;
   }

   deleteHead() {
      // Если нет head значит список пуст.
      if (!this.head) {
         return null;
      }

      const deletedHead = this.head;

      // Если у head есть ссылка на следующий "next" узел
      // то делаем его новым head.
      if (this.head.next) {
         this.head = this.head.next;
      } else {
         // Если у head нет ссылки на следующий "next" узел
         // то мы удаляем последний узел.
         this.head = null;
         this.tail = null;
      }

      return deletedHead;
   }

   // Создаём новые узлы из массива и добавляем в конец списка.
   fromArray(values) {
      values.forEach(value => this.append(value));

      return this;
   }

   // Создаём массив из всех узлов
   toArray() {
      const nodes = [];

      let currentNode = this.head;

      // Перебираем все узлы и добавляем в массив.
      while (currentNode) {
         nodes.push(currentNode);
         currentNode = currentNode.next;
      }

      // Возвращаем массив из всех узлов.
      return nodes;
   }

   toString(callback) {
      // Сначала создаём массив из всех узлов.
      return this.toArray()
         // На каждом узле вызываем метод toString
         // что бы получить значение в виде строки.
         .map(node => node.toString(callback))
         // Вызываем метод toString на массиве строк.
         .toString();
   }

   // Обратный список
   reverse() {
      let currNode = this.head;
      let prevNode = null;
      let nextNode = null;

      // Перебираем все узлы.
      while (currNode) {
         // Сохраняем следующий узел.
         nextNode = currNode.next;

         // Меняем ссылку на следующий "next" узел текущего узла,
         // чтобы он ссылался на предыдущий узел.
         // Так как мы меняем их местами, нужно поменять и ссылки на узлы.
         // Изначально, первый узел не имеет предыдущего узла,
         // поэтому после перестановки его "next" станет "null".
         currNode.next = prevNode;

         // Перемещаем узлы prevNode и currNode на один шаг вперед.

         // Текущий узел делаем предыдущим.
         prevNode = currNode;

         // Следующий узел становится текущим.
         currNode = nextNode;
      }

      // Меняем head и tail местами.
      this.tail = this.head;

      // В данном случае prevNode это последний узел,
      // поэтому, после reverse, он становится первым.
      this.head = prevNode;

      // Возвращаем список.
      return this;
   }
}

// function squareDigits(num) {
//    debugger;
//    let str = '' + num;
//    return str.replace(/\d/g, u => Number(u) * Number(u));
// }

function squareDigits(num) {
   // return String(num).replace(/\d/g, u => Math?.pow(u, 2));
   return +("" + num).replace(/\d/g, u => Math.pow(u, 2));
}


//===============================================================
// Функция перевода представления цвета из rgb в hex формат
function rgb(r, g, b) {
   // let hexColor = r.toString(16) + g.toString(16) + b.toString(16);
   let hexColor = hexRgb(r) + hexRgb(g) + hexRgb(b);
   return hexColor.toUpperCase();
}
function hexRgb(a) {
   a < 0 ? a = 0 : a > 255 ? a = 255 : a;
   return a < 16 ? "0" + a.toString(16) : a.toString(16);
}


//=============================================================================
// // Вычислить наименьшее кол-во шагов от 1 до заданного числа. Можно прибавлять 1 и умножать на 2
// function shortestStepsToNum(num) {
//    debugger;
//    let count = 0;
//    while (num > 1) {
//       num % 2 ? num-- : num /= 2;
//       count++;
//    }
//    return count;
// }

// //============================================
// // Напишите функцию validSolutionкоторая принимает двумерный массив,
// // представляющий доску судоку, и возвращает true, если это допустимое решение, или false в противном случае. 

// // let board = [[5, 3, 4, 6, 7, 8, 9, 1, 2],
// // [6, 7, 2, 1, 9, 5, 3, 4, 8],
// // [1, 9, 8, 3, 4, 2, 5, 6, 7],
// // [8, 5, 9, 7, 6, 1, 4, 2, 3],
// // [4, 2, 6, 8, 5, 3, 7, 9, 1],
// // [7, 1, 3, 9, 2, 4, 8, 5, 6],
// // [9, 6, 1, 5, 3, 7, 2, 8, 4],
// // [2, 8, 7, 4, 1, 9, 6, 3, 5],
// // [3, 4, 5, 2, 8, 6, 1, 7, 9]];

// function validSolution(board) {
//    let lengthBoard = board.length;
//    // horizontal check
//    for (let i = 0; i < lengthBoard; i++) {
//       let count = [0, 0, 0, 0, 0, 0, 0, 0, 0];
//       for (let j = 0; j < lengthBoard; j++) {
//          if (board[i][j] == 0) {
//             return false;
//          }
//          count[board[i][j] - 1]++;
//       }
//       if (count.filter(x => x != 1).length > 0) {
//          return false;
//       }
//    }
//    // vertical  check
//    for (let j = 0; j < lengthBoard; j++) {
//       let count = [0, 0, 0, 0, 0, 0, 0, 0, 0];
//       for (let i = 0; i < lengthBoard; i++) {
//          if (board[i][j] == 0) {
//             return false;
//          }
//          count[board[i][j] - 1]++;
//       }
//       if (count.filter(x => x != 1).length > 0) {
//          return false;
//       }
//    }

//    // squares check
//    for (let x = 0; x < 9; x = x + 3) {
//       for (let y = 0; y < 9; y = y + 3) {
//          let count = [0, 0, 0, 0, 0, 0, 0, 0, 0];
//          for (let i = x; i < x + 3; i++) {
//             for (let j = y; j < y + 3; j++) {
//                count[board[i][j] - 1]++;
//             }
//          }
//          debugger;
//          if (count.filter(x => x != 1).length > 0) {
//             return false;
//          }
//       }
//    }
//    return true;
// }

// А вот самое заплюсованное решение этой задачки на кодварсе:
function equals45(n) {
   return n == 45;
}

function validSolution(board) {
   debugger;
   var sumh = [0, 0, 0, 0, 0, 0, 0, 0, 0];
   var sumv = [0, 0, 0, 0, 0, 0, 0, 0, 0];
   var osums = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
   for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
         sumh[i] += board[i][j];
         sumv[j] += board[i][j];
         osums[Math.floor(i / 3)][Math.floor(j / 3)] += board[i][j];
      }
   }
   for (var i = 0; i < 3; i++) if (!osums[i].every(equals45)) return false;
   return (sumh.every(equals45) && sumv.every(equals45));
}



// Лучший матч — это матч, который они проиграли с минимальной разницей мячей. Если есть несколько матчей с одинаковой разницей, выберите тот, в котором «Замалек» забил больше голов.
// Учитывая информацию обо всех сыгранных матчах, вернуть indexлучший матч ( 0-based). Если более одного действительного результата, вернуть наименьший индекс.

function bestMatch(ALAHLYGoals, zamalekGoals) {
   let Difference = [];
   let minDifference;
   let maxGoal = -1;
   let indexMaxGoal;
   debugger;

   for (i in ALAHLYGoals) {
      Difference[i] = ALAHLYGoals[i] - zamalekGoals[i];
   }

   minDifference = Math.min(...Difference);

   for (var j = 0; j < Difference.length; j++) {
      if (Difference[j] == minDifference && zamalekGoals[j] > maxGoal) {
         maxGoal = zamalekGoals[j];
         indexMaxGoal = j;
      }
   }
   return indexMaxGoal;
}


// более элегантное решение с кодвардса:
// автор - раа2121

// function bestMatch(ALAHLYGoals, zamalekGoals) {
//   var best = {
//     zScoreIndex : 0,
//     lowestdiff : ALAHLYGoals[0] - zamalekGoals[0]
//   };
//   for (i = 0; i < ALAHLYGoals.length; i++)  {
//     var diff = ALAHLYGoals[i] - zamalekGoals[i];
//     if (diff < best.lowestdiff) {
//       best.lowestdiff = diff;
//       best.zScoreIndex = i;
//     } else  {
//       if (diff == best.lowestdiff && zamalekGoals[i] >  zamalekGoals[best.zScoreIndex]) {
//       best.zScoreIndex = i;
//       }
//     }
//   }
//   return best.zScoreIndex;
// }

function isDivideBy(number, a, b) {
   // good luck
   debugger;
   return !Boolean(number % a) && !Boolean(number % b);
}


function fakeBin(x) {
   return x.replace(/[0-4]/g, '0').replace(/[5-9]/g, '1');
}
//более изячное решение:
// function fakeBin(x) {
//    return x.replace(/\d/g, d => d < 5 ? 0 : 1);
//  }


// Удалить из строки первый и последний символ
function removeChar(str) {
   return str.substring(1, str.length - 1);
};
//Более изячно решено:
// function removeChar(str) {
//    return str.slice(1, -1);
//  }

//Найти, заканчивается ли строка подстрокой
function solution(str, ending) {
   return str.lastIndexOf(ending) < 0 ? false : str.lastIndexOf(ending) + ending.length == str.length;
}
// Методы str.startsWith и str.endsWith проверяют, соответственно, начинается ли и заканчивается ли строка определённой строкой:
// alert( "Widget".startsWith("Wid") ); // true, "Wid" — начало "Widget"
// alert( "Widget".endsWith("get") ); // true, "get" — окончание "Widget"


function repeatStr(n, s) {
   // let newArray = new Array(n).fill(s);
   // return newArray.join('');
   return n.fill(s).join('');
}


function finalGrade(exam, projects) {
   return (exam > 90 || projects > 10) ? 100 :
      (exam > 75 && projects >= 5) ? 90 :
         (exam > 50 && projects >= 2) ? 75 :
            0;
}


function switchItUp(number) {
   let numStr = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
   return numStr[number];

   // "If your language supports it, try using a switch statement."
   // Shurik, this is not our method!

   //    let str = '';
   //    switch (number) {
   //       case 0:
   //          str = "Zero";
   //          break;
   //       case 1:
   //          str = "One";
   //          break;
   //       case 2:
   //          str = "Two";
   //          break;
   //       case 3:
   //          str = "Three";
   //          break;
   //       case 4:
   //          str = "Four";
   //          break;
   //       case 5:
   //          str = "Five";
   //          break;
   //       case 6:
   //          str = "Six";
   //          break;
   //       case 7:
   //          str = "Seven";
   //          break;
   //       case 8:
   //          str = "Eight";
   //          break;
   //       case 9:
   //          str = "Nine";
   //          break;
   //       default:
   //          str = "don't mess around";
   //    }
   //    return str;
}

function rentalCarCost(d) {
   debugger;
   let costs = d * 40;
   return d > 3 ? d > 7 ? costs - 50 : costs - 20 : costs;
}

// В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны вернуть наибольшее и наименьшее число.
function highAndLow(numbers) {
   debugger;

   // этот код возвращает массив с цифрами (map пробегает по всем элементам и Number конвертирует строки в цифры)
   // let numArr = numbers.split(' ').map(Number);

   // этот код возвращает массив с подстроками
   let numArr = numbers.split(' ');
   return Math.max(...numArr) + " " + Math.min(...numArr);
}

function disemvowel(str) {
   debugger;
   return str.replace(/[AEIOUaeiou]/g, '')
   // Правильнее было бы использовать ключ /i - игнорирование регистра букв
   // return str.replace(/[AEIOUaeiou]/g, '')
}

// Поиск есть ли повторяющиеся символы в строке.
function isIsogram(str) {
   let set = new Set([...str.toUpperCase()]);
   return set.size == str.length;
   // ! то же самое, чуть более изячно:
   // return new Set(str.toUpperCase()).size == str.length;
}
// * решение через регулярку:
// function isIsogram(str){
//    return !/(\w).*\1/i.test(str)
//  }



// Учитывая строку, состоящую из цифр [0-9], вернуть строку, в которой каждая цифра повторяется количество раз, равное ее значению.
function explode(s) {
   let arr_s = [];
   for (let i = 0; i < s.length; i++) {
      arr_s[i] = s[i].repeat(s[i]);
   }
   return arr_s.join('');
}

// ! Как я бы хотел, но не смог:
// function explode(s) {
//    return s.split("").map((e) => e.repeat(+e)).join("");
//  }
// ? А это через регулярку:
// const explode = s => s.replace(/\d/g, d => d.repeat(d));


function getParticipants(handshakes) {
   debugger;

   let human = 1;
   let press = 0;
   while (press < handshakes) {
      press += human;
      human += 1;
   }
   return human;
}

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
//похожее решение, как по мне, изящнее выглядит
// function nthFibo(n) {
//    let [prev, curr] = [0, 1];
//    for (let i = 1; i < n; i++) [prev, curr] = [curr, prev + curr];
//    return prev;
//  }



// !Сумма масива одной строкой
// * let result = arr.reduce((sum, current) => sum + current, 0);
// Завершите решение так, чтобы оно возвращало сумму всех чисел, кратных 3 или 5 , меньше переданного числа.
// Кроме того, если число отрицательное, верните 0 (для языков, в которых они есть).

function solution(number) {
   let sum = 0;
   for (let i = 0; i < number; i++) {
      (i % 3 === 0 || i % 5 === 0) ? sum += i : '';
   }
   return sum;
}
