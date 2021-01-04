//1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
//Функция для вывода на экран информации об автомобиле;
//Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

let car = {
  brand: "opel",
  model: "zafira",
  year: 2013,
  "average speed": "90 km/h",
}

function info(obj) {
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}

function timeTravel(obj, distance) {
  let hours = Math.floor(distance / Number.parseInt(obj["average speed"]));
  let minutes = Math.floor((distance / Number.parseInt(obj["average speed"]) - Math.floor(distance / Number.parseInt(obj["average speed"]))) * 60);
  if (hours % 4 >= 0) {
    hours += Math.floor(hours / 4);
  } 
  console.log(`Time in travel are ${hours} hours and ${minutes} minutes`);
}

info(car);
timeTravel(car, 840);

//2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 
//Функция сложения 2-х объектов-дробей;
//Функция вычитания 2-х объектов-дробей;
//Функция умножения 2-х объектов-дробей;
//Функция деления 2-х объектов-дробей;
//Функция сокращения объекта-дроби.

function fraction(numerator, denominator) {
  return { numerator: numerator, denominator: denominator };
}
let firstFraction = fraction(5, 20);
let secondFraction = fraction(2, 15);

function sumFraction(obj1, obj2) {
  let resultnumerator =
    obj1.numerator * obj2.denominator + obj2.numerator * obj1.denominator;
  let resultdenominator = obj1.denominator * obj2.denominator;
  console.log(`${resultnumerator}/${resultdenominator}`);
}
sumFraction(firstFraction, secondFraction);

function subFraction(obj1, obj2) {
  let resultnumerator =
    obj1.numerator * obj2.denominator - obj2.numerator * obj1.denominator;
  let resultdenominator = obj1.denominator * obj2.denominator;
  console.log(`${resultnumerator}/${resultdenominator}`);
}
subFraction(firstFraction, secondFraction);

function multiFraction(obj1, obj2) {
  let resultnumerator = obj1.numerator * obj2.numerator;
  let resultdenominator = obj1.denominator * obj2.denominator;
  console.log(`${resultnumerator}/${resultdenominator}`);
}
multiFraction(firstFraction, secondFraction);

function divFraction(obj1, obj2) {
  let resultnumerator = obj1.numerator * obj2.denominator;
  let resultdenominator = obj1.denominator * obj2.numerator;
  console.log(`${resultnumerator}/${resultdenominator}`);
}
divFraction(firstFraction, secondFraction);

function redFraction(obj) {
  let resultnumerator = obj.numerator;
  let resultdenominator = obj.denominator;
  for (let i = 2; i <= obj.numerator; i++) {
    if (obj.numerator % i == 0 && obj.denominator % i == 0) {
      resultnumerator = obj.numerator / i, resultdenominator = obj.denominator / i;
    }
  }
  console.log(`${resultnumerator}/${resultdenominator}`);
}
redFraction(firstFraction);

//3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 
//Функция вывода времени на экран;
//Функция изменения времени на переданное количество секунд;
//Функция изменения времени на переданное количество минут;
//Функция изменения времени на переданное количество часов. 
//Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

let date = new Date(Date.now());

let time = {
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds()
};

console.log(time);

function showTime(obj) {
  if (obj.hours < 10) {
    obj.hours = `0${obj.hours}`;
  }
  if (obj.minutes < 10) {
    obj.minutes = `0${obj.minutes}`;
  }
  if (obj.seconds < 10) {
    obj.seconds = `0${obj.seconds}`;
  }
  console.log(
    `Time is: ${obj.hours} hours, ${obj.minutes} minutes and ${obj.seconds} seconds`
  );
}

showTime(time);

function timeChangeSecs(obj, seconds) {
  let newTime = {};
  let inSecs = obj.hours * 3600 + obj.minutes * 60 + obj.seconds * 1 + seconds;
  newTime.hours = Math.floor(inSecs / 3600);
  newTime.minutes = Math.floor((inSecs - newTime.hours * 3600) / 60);
  newTime.seconds = inSecs - newTime.hours * 3600 - newTime.minutes * 60;
  if (newTime.hours % 24 > 0) {
    newTime.hours = newTime.hours - 24;
  }
  console.log(
    `New time with extra ${seconds} seconds is: ${newTime.hours} hours, ${newTime.minutes} minutes and ${newTime.seconds} seconds`
  );
}

timeChangeSecs(time, 88888);

function timeChangeMins(obj, minutes) {
  let newTime = {};
  let inMins = obj.hours * 60 + obj.minutes * 1 + minutes;
  newTime.hours = Math.floor(inMins / 60);
  newTime.minutes = Math.floor(inMins - newTime.hours * 60);
  newTime.seconds = obj.seconds;
  if (newTime.hours % 24 > 0) {
    newTime.hours = newTime.hours - 24;
  }
  console.log(
    `New time with extra ${minutes} minutes is: ${newTime.hours} hours, ${newTime.minutes} minutes and ${newTime.seconds} seconds`
  );
}

timeChangeMins(time, 2000);

function timeChangeHours(obj, hours) {
  let newTime = {};
  newTime.hours = obj.hours * 1 + hours;
  newTime.minutes = obj.minutes;
  newTime.seconds = obj.seconds;
  if (newTime.hours % 24 > 0) {
    newTime.hours = newTime.hours - 24;
  }
  console.log(
    `New time with extra ${hours} hours is: ${newTime.hours} hours, ${newTime.minutes} minutes and ${newTime.seconds} seconds`
  );
}

timeChangeHours(time, 20);
