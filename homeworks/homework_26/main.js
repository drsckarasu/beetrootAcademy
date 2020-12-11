//Подсчитать сумму всех чисел в заданном пользователем диапазоне.

let max = 10;
let min = 5;
let result = 0;

for (let i = min; i <= max; i++) {
   result += i;
}
console.log(result)

//Запросить 2 числа и найти только наибольший общий делитель.

let number1 = 30;
let number2 = 18;

while (number1 != 0 && number2 != 0) {
  if (number1 > number2) {
    number1 = number1 % number2;
  } else{
    number2 = number2 % number1;
  }
}
console.log(number1 + number2); 

//Запросить у пользователя число и вывести все делители этого числа.

let number = 27;
let i = 1;
while (i > 0) {
  if (number % i == 0) {
  console.log(i); 
  }
  i++;
}

//Определить количество цифр в введенном числе.

let number = 123;
let i = 0;

do {
  number /= 10;
  i++;
} while (number >= 1)
console.log(i);

//Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

let pos = 0;
let neg = 0;
let zero = 0;
let odd = 0;
let even = 0;
let num;
for (let i = 0; i < 10; i++){
  num = +prompt(`enter your number`);
  if ( num > 0){
    pos++;
  } else if (num < 0) {
    neg++;
  } else {
    zero++;
  }
  if (num % 2 == 0){
    even++;
  } else {
    odd++;
  }
}
console.log( `postive numbers: ${pos}; negative numbers: ${neg}; zeros: ${zero}; even numbers: ${even}; odd numbers: ${odd}` )

//Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.

do {
  let number1 = 12;
  let number2 = 14;
  let result;
  let i = "-";
  switch (i) {
    case '+':
       result = number1 + number2;
       break;
    case '-':
       result = number1 - number2;
       break;
    case '/':
       result = number1 / number2;
       break;
    case '*':
       result = number1 * number2;
       break;
    default:
       break;
    }
  console.log(result);
} while (confirm('want another example?'))

//Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).

let number = "147578";
let shift = 2;

for (let i = 0; i < shift; i++){
  number = number.slice(1) + number[0];
}
console.log(number)

//Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

let day;
let i = 1;
do {
    switch (i) {
      case 1: day = "Monday";
      break;
      case 2: day = "Tuesday"; 
      break;
      case 3: day = "Wednesday"; 
      break;
      case 4: day = "Thursday"; 
      break;
      case 5: day = "Friday";
      break;
      case 6: day = "Saturday"; 
      break;
      case 7: day = "Sunday";
      break;
      default:
      break;
    }
    i++;
    if (i == 8) { 
      i = 1; 
    };
} while (confirm(`Today is ${day}. Do you want to see the next day?`))

//Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.

let sum;
for (i=2; i<=9; i++) {
  for (j=1; j<=10; j++){
    sum = i * j;
    console.log(sum);
   
  }
}

//Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.

alert("Guess a number from 0 to 100");
let guess;
let max = 100;
let min = 0;
let n;

do {
  n = Math.floor((max + min) / 2);
  guess = prompt(`Your number > ${n} or < ${n} or = ${n}?`);

  if (guess == ">") {
    min = n;
  } else if (guess == "<") {
    max = n;
  }
} while (guess != "=");

console.log(`Your number is ${n}`);
