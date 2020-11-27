/* Работа с переменными
важность: 2
1.	Объявите две переменные: admin и name.
2.	Запишите строку "Джон" в переменную name.
3.	Скопируйте значение из переменной name в admin.
4.	Выведите на экран значение admin, используя функцию alert (должна показать «Джон»). */

let admin, name;
name = "Джон";
admin = name;
alert( admin);

/* Исправьте сложение
Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.
Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).
В чём ошибка? Исправьте её. Результат должен быть 3.  */

let a = +prompt("Первое число?", 1);
let b = +prompt("Второе число?", 2);
alert(a + b);

// 1. Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».

let name = prompt("what is your name?", "");
alert(`Hello, ${name}`);

// 2. Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.

let birthYear = prompt("what is your birth year?", "");
const currentYear = 2020;
let age = currentYear - birthYear;
alert( `Your age is ${age}` );

// 3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

let squareSide = prompt("lenght of one side of a square", "");
let squareArea = squareSide ** 2;
alert(squareArea);

// 4. Запросите у пользователя радиус окружности и выведите площадь такой окружности.

let circleRadius = prompt("radius of a circle", "");
const Pi = 3.14159265359;
let circleArea = Pi * circleRadius ** 2;
alert(circleArea);

// 5. Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
 let distance = prompt("distance between cities", "");
 let time = prompt("how much time do you want to spend", "");
 let speed = distance / time;
 alert(speed);

// 6. Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.

let dollar = prompt("how much dollars do you want to change?", "");
const currencyRate = 0.84;
let euro = dollar * currencyRate;
alert(euro);

// 7. Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.

let flashDrive = prompt("size of the flash drive in GB", "");
let files = Math.floor(flashDrive * 1024 / 820) ;
alert(files);

// 8. Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.

let total = prompt('enter how much money do yo have');
let chockolade = prompt('enter the price of the chocolade');
let amount = Math.trunc(total / chockolade);
let change = total % chockolade;
alert( `you can buy ${amount} chocolate bars and have change of ${change}`);

// 9. Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).

let number = prompt("enter 3 numbers", "");
let reverseFirst = number % 10;
let reverseSecond = ((number % 100) - (number % 10)) / 10;
let reverseThird = (number - (number % 100)) / 100;
let result =  String(reverseFirst) + String(reverseSecond) + String(reverseThird);
alert( result );

// 10. Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.

let deposit = prompt("the amount of deposit", "");
const interest = 0.05;
const timeInterest = 2 / 12;
let accuredInterest = deposit * interest * timeInterest;
alert(accuredInterest);
