//Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

function smallerBigger (num1, num2) {
  if (num1 > num2) {
    return 1;
  } else if (num1 < num2) {
    return -1;
  } else {
    return 0;
  }
}

console.log(smallerBigger(16, 16));

//Написать функцию, которая вычисляет факториал переданного ей числа.

function factorial(n) {

  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(1));

//Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

function threeNumbers (a, b, c) {
  return a * 100 + b * 10 + c;
}

console.log(threeNumbers(1, 4, 9));

//Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

function area (a, b) {
  if (b === undefined) {
     b = a;
  }
  return a * b;
}

console.log(area(6));
console.log(area(6, 3));

//Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.

function perfectNum(num) {
  let result = 0;
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      result += i;
    }
  }

  if (result == num) {
    return "This number is a perfect number";
  } else {
    return "This number is not a perfect number";
  }
}
console.log(perfectNum(6));
console.log(perfectNum(12));
console.log(perfectNum(8128));

//Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 

function perfectRange(minRange, maxRange) {
  for (let i = minRange; i <= maxRange; i++) {
    if (perfectNum(i) == "This number is a perfect number") {
      console.log(`in this range ${i} is a perfect number`);
    }
  }
  return;
}

perfectRange(6, 99);

//Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

let time = setTime;
function setTime(hours) {
  return function setMinutes(minutes = 0) {
    return function setSeconds(seconds = 0) {
      if (hours < 10) {
        hours = `0${hours}`;
      }
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      return `${hours}:${minutes}:${seconds}`;
    };
  };
}

console.log(time(12)()(16));

//Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

function inSecs(hours, minutes, seconds) {
  return hours * 3600 + minutes * 60 + seconds;
}

console.log(inSecs(12, 14, 55));

//Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

function inTime(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds - hours * 3600) / 60);
  seconds = seconds - hours * 3600 - minutes * 60;
  if (hours < 10 && hours >= 0) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${hours}:${minutes}:${seconds}`;
}

console.log(inTime(5555));
console.log(inTime(80));
console.log(inTime(77555));

//Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»

function difference(hours1, minutes1, seconds1, hours2, minutes2, seconds2) {
  return inTime(inSecs(hours2, minutes2, seconds2) - inSecs(hours1, minutes1, seconds1));
}
 console.log(difference(23, 30, 0, 20, 15, 1));
 console.log(difference(2, 6, 0, 15, 15, 7));