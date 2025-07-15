// // Переміні\\ ОБОВЯЗКОВО крапка з комою

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

// const x1 = 10;
// const x2 = 30;
// const Number = 15;

// console.log(`Число ${Number} попаде в відрізок до &{x1} ?`, Number < x1);
// console.log(`Число ${Number} попаде в відрізок до &{x2} ?`, Number > x2);
// const res1 = Number > x1 && Number < x2;
// 50>10 && 50<30
// true && false
// false
// console.log(`Число ${Number} попаде в відрізок от &{x1} и до  &{x2} ?`, res1);

// const res2 = Number < x1 || Number > x2;
// 50<10 || 50>30
// false || true
// true
// console.log(`Число ${Number} попаде в відрізок от &{x1} и до  &{x2} ?`, res2);
 
// const sub = "pro";
// const canAccesseContent = sub === "pro"|| sub === "vip";
// console.log(`Є доступ до контенту ?`, canAccesseContent)

// Оператор if "якщо так виконувати як що ні ігнорувати " далі покаже усе за дужками {}
// if (2) {
//     console.log("Якщо правда це покаже");
// }
 
// Операор if ..... else
// if (5 < 6) {
//     console.log("Якщо");
// } else { "Може показати " };

// Оператор else.....if до першрго співпадіння

// const salary = 1000;
// if (salary < 500) {
//     console.log("Рівень 1");
// } else if (salary > 500 && salary < 1500)
//  { console.log ("Рівень 2") };
// //  Тернарні оператори
// const balance = 1000;


// if (balance <= 0) {
//     message = "позитивний баланс";
// } else{
//     message = "негативний баланс";
// }
// const message = balance <=0 ? "позитивний баланс"  : "негативний  баланс";
// console.log(message);

// Switch тільки на рівність

// const stars = 3;
// let price;

// // if (stars === 1) { price = 20; }
// // else if (stars === 2) { price = 30; }
// // else if (stars === 3) { price = 50; }
// // else if (stars === 4) { price = 70; }
// // else if (stars === 5) { price = 120; }
// // else {
// //     'немає такої оцінки';
// // };
// switch (stars) {
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = 50;
//         console.log("Найвигідніший вибір");
//         break;
//     case 4:
//         price = 70;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default:
//         price = 'Немає такої зірки ';
// }
// console.log(price);

// якщо одинакові case (1,2=20$), (3,4=50$), (5=120$)
// const stars = 1;

// let price;

// if (stars === 1 || stars === 2) { price = 20; }
// else if (stars === 3 || stars === 4) { price = 50; }
// else if (stars === 5) { price = 120; }
// else { "немає такої оцінки" };

// console.log(price);

// switch (stars) {
//     case 1:
//     case 2:
//         price = 20;
//         break;
    
//     case 3:
//     case 4:
//         price = 50;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default:
//         price = 'Немає такої зірки ';
// }
// console.log(price);

// Задача
//  1 - самовивіз 2 - курєр 3 - відправлення поштою
// messege = "Ви можете забрати товар завтра о 13:00"
// messege = "Курєр доставить товар завтра до 10:00"
// messege = "Товар буде відправлено сьогодні"
// messege = "Вам зателефонує менеджер"

// // 1 зробити переміні

// const option = "3";
// let message = "";

// // 2. використати switch
// // 3. кожен message записати в перемінну
// // 4. вивести в консоль

// switch (option) {
//     case "1":
//         message = "Ви можете забрати товар завтра о 13:00";
//         break;
//     case "2":
//         message = "Курєр доставить товар завтра до 10:00";
//         break;
//     case "3":
//         message = "Товар буде відправлено сьогодні";
//         break;
//     default:
//         message = "Вам зателефонує менеджер";
// }

// console.log(message);

// Цикл for

// for(ініціалізація; умова; ітерація) { тіло циклу }

// for (let i = 0; i < 6; i += 1){
//     console.log(i);
// }
// console.log("Цикл завершено");

// // // 1 зробити вар
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 7;
// let totalSalary = 0;

// // 2 Зробти цикл
// for (let i = 1; i <= employees; i += 1){
//     // 3 згенерувати випадкову зарплату
//     const salary = Math.round(
//         Math.random() * (maxSalary - minSalary) + minSalary,
//     );

//     console.log(`Зп робітника ${i} - ${salary}`);
//     // 4 додати до тотала

//     totalSalary += salary;
    
// // console.log (`totalSalary` , totalSalary );
// }

// // 5 Log

// console.log (`totalSalary` , totalSalary );


// написати алгоритм якій підщитає суму усіх 4 чисел
// які входять діапазон чисел в переміні від min до max
//  наприклад якщо min=0 a max=5  то діапазон 0-5 і у ньому 2 парних числа 2 и 4 і їх сума 6

// 1 Вари
// const min = 0;
// const max = 5;
// let total = 0;

// // for от min до max c шагом в 1

// for (let i = min; i <= max; i += 1) {
//     console.log(i);

//     // перевіряємо залишок від діляння

//     if (i % 2 !== 0) {
//         console.log(`непарне:`, i);
//         continue;
//         }
//     // записуємо суму

//     console.log(`парне:`, i);
//         total += i;

// }



// console.log(`total:`, total);



// 1 вари
// let balance = 10000;
// const payment = 2000;

// console.log(
//     `Загальна вартісьть заказу ${payment} кредитів , Перевірка доступних коштів на рахунку `
// );
// if (balance >= payment) {
//     console.log(`ok`);

//      balance -= payment;
//     //  balance = balance-payment
//     console.log(`Кошти зняти , дякую за покупку `);
//     console.log(`На рахунку осталось ${balance} кредитів `);
// } else {
//     console.log(`На рахунку недостатньо коштів! `);
// }
// console.log('Операція завершина ');
// // 2 висновок сума <= баланс

//  скрипт підрахунку суми покупки зі снижкою в залежності від потраченої суми за весь час (партнерська програма )
// - Загальна сума пораченого у totalSpent
// - Сума теперішньої оплати зберіжається у payment
// - Знижка у discount

// Якщо від (100-1000)-бронза 2%
//  Якщо від(1000-5000)-срібло 5%
//  Якщо більше 5000 -золото 10%
// Якщо менше 100 - ви не у клубі знижка не надається

//  У підсумку ввести : Оформлення заказу на суму (...) зі знижкою(....)


// let totalSpent = 2000;
// let payment = 400;
// let discount = 0;

// if (totalSpent < 100) {
//     console.log(`Ви не у клубі знижка не надається
// `);
// }
// else if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log(`Бронза 2%`);
//     discount = 0.02;
// } else if(totalSpent >= 1000 && totalSpent < 5000) {
//     console.log(`Срібло 5%`);
//     discount = 0.05;
// } else {
//     console.log(`Золото 10%`);
//     discount = 0.1;
// }

// payment -= payment * discount;
// // payment = payment - payment * discount;

// console.log(`Заказ на суму ${payment} зі знижкою ${discount * 100}%`);

// totalSpent += payment

// console.log(`Загальна сума витрачена ${totalSpent}`);

// // Цепочка може бути різна потрібно робити її логічною


// Масиви

// const fruits = ["apple", "banana", "cherry", "orange"];
// console.table(fruits);
// fruits[3] = 'pineapple';
// console.table(fruits);
// // console.log(fruits[3]);

// передача по значенню
// let a = 10;
// let b = a;

// console.log(a);
// console.log(b);

// a = 20;
// console.log(a);
// console.log(b);

// передача по посиланню

// const a = [1,2,3];
// const b = a;

// console.log(a);
// console.log(b);
// a[0] = 100;
// console.log(a);
// console.log(b);

// const fruits = ["apple", "banana", "cherry", "orange"];
// console.table(fruits);
// for (let i = 0; i < fruits.length; i += 1) {
//     fruits[i] = 'penal';
// }

// for ( const fruit of fruits) {
//     console.log(fruit);
// }

// const fruits = ["apple", "banana", "cherry", "orange"];

// порахувати загальну суму покупок у корзині

// const cart = [54, 28, 105, 70, 92, 17, 120,56,100];
// переміна total до цикла
// let total = 0;
// // перебір масиву

// // for (let i = 0; i < cart.length; i += 1) {
// //     console.log(cart[i]);
// //     total += cart[i];
// // }
// for (const item of cart) {
   
//     total += item;
// }
// // кожний елемент приплюсуємо до total
// console.log('total', total);


// добавити такс 20%

// for (let i = 0; i < cart.length; i += 1) {
//     cart[i] = Math.round(cart[i] * 1.2);
// }


// console.log(cart);

//  for з І змінити у середини , про for дає клона попереднього числа


// написати скріпт  перерахувати суму усіх чисел парних  у масиві 

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

// total

// let total = 0;
// перебрати масив

// for (let i = 0; i < numbers.length; i += 1)
// {
//     console.log(numbers[i]);
    // у кожній ітерації перевірити єлемент на парнісьть
    // if (numbers[i] % 2 === 0) {
    //     console.log("Парне");
    //      // якщо парне плюсуїм до тотала 
    //     total += numbers[i];
    // }
   
    
// }

// for (const number of numbers) {
//     console.log(number);

// if (number % 2 === 0) {
//         console.log("Парне");
//          // якщо парне плюсуїм до тотала 
//         total += number;
//     }
// }

// console.log("Total", total);
// continue- коли вписуєш це наступні дії не додаються у кінці він замикає цепочку дія називається "логіка від обратного"


 


