// Переміні\\ ОБОВЯЗКОВО крапка з комою

// const age = 26;
// const totalPrice = 2.5;
// const userName = "Anna";
// const jobs = "hours"
// const body = "Head"
// const isOpen = true;

// console.log(totalPrice);
// console.log(jobs);
// console.log("кипить", body);
// console.log(isOpen)

// // Мої замітки ))) \\
// // тип tipeof
// // const type = typeof true(може бути isOpen)

// // console.log(type) - браузер показує структуру що це (число , строка , буль)

// console.log("Потрібно нажати Ок");
// alert("це тільки перший день)");
// console.log("Нажали Ок");

// Інпути (Input) \\
 
// Метод Confirm
// const shouldRenew = confirm("Хочете продовжити дивитись ?")
// console.log(shouldRenew);
// Метод prompt
// let quantity = prompt("Скільки раз зайдете ще ?");
// quantity = Number(quantity)
// console.log(quantity);
// console.log(typeof quantity);
// PROMPT-переміна

// Числа \\

// let elementWidth = "50px";
// const result = Number.parseInt(elementWidth);
// console.log(typeof result);
// let elementHeight = "20.74px";
// elementHeight = Number.parseFloat(elementHeight);
// console.log("elementHeight", elementHeight);

// let salary = 1400.47747;

// console.log(Number(salary.toFixed(1)));
// console.log (Number(true));
// console.log(5/0);
 
// const base = 2;
// const power = 5;


// const result = Math.pow(base, power);
// console.log(result);

//оператор експонент **
// console.log(2 ** 5);
// math.sqrt - крвадратний корінь

// написати скрипт який попросить користувача ввести число и степінь
// возвести число у цю степінь і вивести результат в консоль
// ПЛАН:
// 1.попросити ввести число и зберегти в переміну

// let base = prompt("давай число");
// base = Number(base);
// console.log(base);

// // 2.ввести степінь и зберегти переміну

// let power = prompt("степінь")
// power=Number(power)
// console.log(power)
// // 3. возвести введені дані в степінь и вивести

// const result = base ** power
// console.log(result)
// const max = 2;
// const min = 33;

// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result)
// Math.random()*( max - min ) + min - формула
// math.round - заокруглює

// РЯДКИ

// const message = "скільки в рядку  символів ";

// console.log(message.length);

// const firstName = "Jack";
// const lastName = "West";
// const fullName = firstName + lastName;

// // console.log(fullName);


// const room = 99;
// const type = "VIP";
// const welcomMsg = `Госьть ${firstName} ${lastName} поселяється в ${type} номер ${room}`;
// console.log(welcomMsg);
// console.log("Госьть " + firstName + " " + lastName + " поселяється у "  + type +
// " номер "+ room ) старий метод
//  шаблона строка  напочатку ` ${ } у кінці `

// Нормализація с методом toLowerCase()

// const brand = "Apple";
// const normalizedBrand = brand.toLowerCase();
// const inDb = "apple";
// console.log(normalizedBrand);

// пошук в рядку метод includes()


// const blacklistWord1 = "спам";
// const blacklistWord2 = "реклама";

// const string1 = "Привіт , я принц Фахир , це не спам , дарю тобі мільйон!";
// const string2 = "Реклама магазину спорт інвентаря ! "
// const string3 = "Найбільший розпродаж сезону у нас "

// console.log(string1.includes(blacklistWord1));
// console.log(string1.includes(blacklistWord2));
// console.log(string2.toLowerCase().includes(blacklistWord2));

// Оператори порівнення
// console.log(16 < 4);

// Приведення до "буля" Boolean
// console.log(Boolean) - тількі 6 значень приводиться до false (0,nule , NaN)

// console.log(5 && 6)
// застрягає на брехні і повертає те що на чому запнуло далі не іде
// якщо не запнулось то повертає останій оперант
// console.log(5||6)
// застрягає на правді , це противоположна дія до верхньої
// console.log(!true)
// а виведе false

// скрипт якй перевіряє входження числа у відрізок х1 и х2
// до х1 , після х2,від х1дох2,до х1 чи після х2

const x1 = 10;
const x2 = 30;
const Number = 15;

console.log(`Число ${Number} попаде в відрізок до &{x1} ?`, Number < x1);
console.log(`Число ${Number} попаде в відрізок до &{x2} ?`, Number > x2);
const res1 = Number > x1 && Number < x2;
// 50>10 && 50<30
// true && false  
// false
console.log(`Число ${Number} попаде в відрізок от &{x1} и до  &{x2} ?`, res1);

const res2 = Number < x1 || Number > x2;
// 50<10 || 50>30
// false || true
// true
console.log(`Число ${Number} попаде в відрізок от &{x1} и до  &{x2} ?`, res2);
 
const sub = "pro";
const canAccesseContent = sub === "pro"|| sub === "vip";
console.log(`Є доступ до контенту ?`, canAccesseContent)

// Оператор if "якщо так виконувати як що ні ігнорувати " далі покаже усе за дужками {}
if (2) { 
    console.log("Якщо правда це покаже");
}
 
// Операор if ..... else
if (5 < 6) {
    console.log("Якщо");
} else { "Може показати " };

// Оператор else.....if до першрго співпадіння 

const salary = 1000;
if (salary < 500) {
    console.log("Рівень 1");
} else if (salary > 500 && salary < 1500)
 { console.log ("Рівень 2") };
//  Тернарні оператори 
const balance = 1000;


// if (balance <= 0) {
//     message = "позитивний баланс";
// } else{
//     message = "негативний баланс";
// }
const message = balance <=0 ? "позитивний баланс"  : "негативний  баланс";
console.log(message);