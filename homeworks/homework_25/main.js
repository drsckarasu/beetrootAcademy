//Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
let age = 32;
if (age >=0 && age <=12){
  console.log("you are child");
} else if (age > 12 && age <=18){
    console.log("you are teenager");
} else if (age > 18 && age <=60){
  console.log("you are grownup");
} else if (age > 60){
  console.log("you are old");
} else{
  console.log("it's not correct age");
}

//Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

let number = 9;
switch(number) {
  case 1: console.log("!");
     break;
  case 2: console.log("@");
      break;
  case 3: console.log("#");
      break;
  case 4: console.log("$");
      break;
  case 5: console.log("%");
      break;
  case 6: console.log("^");
      break;
  case 7: console.log("&");
      break;
  case 8: console.log("*");
      break;
  case 9: console.log("(");
      break;
  case 0: console.log(")");
      break;
  default: console.log("not correct number");
}

//Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

let number = "888";
 if (number[0] == number[1] && number[0] == number[2]){
  console.log("you have the same numbers");   
} else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]){
  console.log("you have the same two digits");  
} else {
   console.log("you dont have same numbers");
}

//Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

let year = 1988;
 if (year % 4 == 0 && year % 100 !==0 || year % 400 == 0) {
 console.log("leap year");
} else {
  console.log("not a leap year");
}

//Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

let number = "55155";
 if (number[0] == number[4] && number[1] == number[3]){
  console.log("your number is palindrome");   
} else {
   console.log("your number is not palindrome");
}

//Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

let amountUsd = 10;
let currencyTransfer = "EUR";
let result;
switch (currencyTransfer) {
   case "UAN": result = amountUsd * 28.44;
    break;
    case "EUR": result = amountUsd * 0.83;
    break;
    case "AZN": result = amountUsd * 1.70;
    break;
  default: result = "not correct currency";
}
console.log(result)

//Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

let purchaseAmount = 100;
if (purchaseAmount >= 200 && purchaseAmount < 300){
  console.log( `the amount to be paid with a discount is ${purchaseAmount - purchaseAmount*0.03}` );
} else if (purchaseAmount >= 300 && purchaseAmount < 500){
  console.log( `the amount to be paid with a discount is ${purchaseAmount - purchaseAmount*0.05}` );
} else if (purchaseAmount >= 500){
  console.log( `the amount to be paid with a discount is ${purchaseAmount - purchaseAmount*0.07}` );
} else {
  console.log("you dont have discount")
}

//Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

let circumference = 18;
let squarePerimeter = 16;
const Pi = 3.14;
let diametr = circumference / Pi;
let side = squarePerimeter / 4;
if (diametr <= side) {
  console.log("circle can fit into the specified square");
} else {
    console.log("circle cannot fit into the specified square");
}

//Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

let questionFirst = 2; // what is melon: 1 - vegatable; 2 - fruit; 3 - candy;
let questionSecond = 2; // the main color of FC Chelsea: 1- red; 2-blue; 3-green;
let questionThird = 2; // how many seas have Ukraine: 1-1; 2-2; 3-3;
let score = 0;
if (questionFirst = 2){
  score +=2;
}
if (questionSecond = 2){
  score +=2;
}
if (questionThird = 2){
  score +=2;
}
console.log(  `your score is ${score}` )

//Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.

let day = 30;
let month = 2;
let year = 1988;
let date;
if (month > 0 && month <= 12) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
      if (day < 31) {
        day++;
      } else if (day == 31) {
        day = 1;
        month++;
      } else {
         date = false; 
      }
        break;     
    case 2:
      if ((day < 29 && year % 4 == 0) || (day < 28 && year % 4 !== 0)) {
        day++;
      } else if ((day == 29 && year % 4 == 0) || (day == 28 && year % 4 !== 0)) {
        month++;
        day = 1;
      } else {
          date = false; 
      }
      break;   
    case 4:
    case 6:
    case 9:
    case 11:
      if (day < 30) {
        day++;
      } else if (day == 30) {
          day = 1;
          month++;
      } else {
          date = false; 
      }
      break;
    case 12: 
      if (day < 31) {
        day++;
      } else if (day == 31) {
        day = 1;
        month = 1;
        year++;
      } else {
         date = false;  
      }
       break;
    default:
       break;
  }
}
if (date != false) {
 console.log(  `next data is: ${day}.${month}.${year}` );
} else {
  console.log( `not correct date` )
}
