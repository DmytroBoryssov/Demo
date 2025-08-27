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


 


// const logins = ['ab3c', 'zl5i', 'av2i', 'dbv1']
// const loginTofind = 'dbv1';
// let message = 'Логін ${loginTofind} не знайдено';

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];

//      if (login === loginTofind) {
//          message = `Логін ${loginTofind}  знайдений.`;
//          break;
//      }
//          message = `Логін ${loginTofind} не знайдено.`;
//     }



// console.log(message);

// перевірка на true або false
// console.log(logins.includes(`abc`));

// const message = logins.includes(loginTofind) ? 'Знайдено ${loginTofind}' : ' Не знайдено ${loginTofind}';
// console.log(message);


// сАме маленьке число в масиві , число унікальне не повторяється !

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smollesNumber = numbers[0];

// for (const number of numbers) {
//     if (number < smollesNumber) {
//         smollesNumber = number;
// }
// }

// console.log('smollesNumber:', smollesNumber);

// const string = 'JavaScript'
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//     console.log(letter);

//     const isEqual = letter === letter.toLowerCase();
//     invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
    
    
// } console.log(' invertedString ', invertedString);

// const title = 'Top 10 benefit of HP'
// // const normalizedTitle = title.toLowerCase();
// // const words = normalizedTitle.split('');
// // const slug = words.join('-');

// // декларативний код (простіший коротший код визивається з ліва на право )
// const slug = title.toLowerCase().split(' ').join('-');
// console.log(slug);

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30,];
// let total = 0;
// const numbers = array1.concat(array2);
// for (const number of numbers) {
//     total += number;
//         }

// console.log(total);

// const cards = [
//     'Карта-1',
//     'Карта-2',
//     'Карта-3',
//     'Карта-4',
//     'Карта-5',
// ];
// console.table(cards);

// const cardToRemove = 'Карта-3';

// const index = cards.indexOf(cardToRemove);

// console.log(index);

// cards.splice(index, 3);

// console.table(cards);

// додаваня
// const cardToInsept = 'Картка-6';
// const index = 3;

// cards.splice(1, 0, 'Карта-99');
// console.table(cards);

// Заміна
// const cardToUpdate = 'Карта-4';

// cards.splice(1, 2, 55)
// console.table(cards);

// ФУНКЦИЇ

// const add = function (d, a) {
//     console.log(d);
//     console.log(a);

   
    
//     console.log('Визиваєм назву функції add')

//     return d + a;
// };

// const result = add(33, 26);
// console.log('Відповідь', result);

// add(33,26);

// стек визова

// const fnA = function () {
//     console.log('Виконання функції А')


//     // fnB();
// };

// const fnB = function () {
//     console.log('Виконання функції Б')

//     // fnC();
// };

// const fnC = function () {
//     console.log('Виконання функції С')
// };

// //  console.log('Стек виконання функції A')
// fnA();

// //  console.log('Стек виконання функції B')
// fnB();
// //  console.log('Стек виконання функції С')
// fnC();

// const cart = [54, 28, 198, 70, 92, 17, 128, 12, 25, 90];
// let total = 0;
// for (const value of cart) {
//     total += value;

// }

// console.log('Загальна сума:', total);

// const calcTotalPrice = function (items) {
//     console.log('в середині ', items);

//     let total = 0;

//     for (const item of items  ) {
//         total += item;
//     }

//     return total;
// };

// console.log(calcTotalPrice([15, 20, 25]));
// console.log(calcTotalPrice([50, 10, 200]));


// const logItem = function (items) {
//     for ( const item of items)
//         console.log(item);

    
// };

// logItem(['Kiwi', 'Mango', 'Apple', 'Poly']);
// logItem([1, 2, 3, 4, 5]);
// logItem(['Часи', 'Мишка', 'Клавиатура']);



// const logins = ['ab3c', 'zl5i', 'av2i', 'dbv1']

// const findLogin = function (allLogins , loginToFind) {
//     for (const login of allLogins) {
//         if (login === loginToFind) {
//             return `Логін ${loginToFind} знайдено `;
//        }
//    }

//     return `Логін ${loginToFind} не знайдено`;
// };

// console.log( findLogin(logins, 'ab3c'));
// console.log( findLogin(logins, 'zl51'));
// console.log( findLogin(logins, 'av2i'));
// console.log( findLogin(logins, 'dbv1'));


// const logins = ['ab3c', 'zl5i', 'av2i', 'dbv1']

// const findLogin = function (allLogins, loginToFind) {
//     const message = allLogins.includes(loginToFind)
//         ? `Логін ${loginToFind} знайдено`
//         : `Логін ${loginToFind} не знайдено`;
    
//     return message;
// };


// console.log( findLogin(logins, 'ab3c'));
// console.log( findLogin(logins, 'zl51'));
// console.log( findLogin(logins, 'av2i'));
// console.log( findLogin(logins, 'dbv1'));


// false ? 1:2 // 2
// true ? 1:2 // 1


// const logins = ['ab3c', 'zl5i', 'av2i', 'dbv1']

// const findLogin = function (allLogins, loginToFind) {
//     return allLogins.includes(loginToFind)
//         ? `Логін ${loginToFind} знайдено`
//         : `Логін ${loginToFind} не знайдено`;
    
    
// };


// console.log( findLogin(logins, 'ab3c'));
// console.log( findLogin(logins, 'zl51'));
// console.log( findLogin(logins, 'av2i'));
// console.log( findLogin(logins, 'dbv1'));

// ОБЄКТИ

// const playlist = {
//     name: 'Супер плейліст',
//     rating: 5,
//     tracks: ['T-2', 'T-32', 'T-34'],
//     trackCount: 3,
// }; 
// console.log(playlist);
// console.log(playlist.tracks);
// console.log(playlist.rating);
// console.log(playlist.trackCount);
// console.log(playlist.name);


// const userName = 'name';
// console.log(playlist[userName]);

// Застосовується у 3 випадках "обласьть видимості"

// 1.
// const x = {};
// console.log({});
// 2.
// const fn = function (myObject) {
//     // myObject = { a: 10, b: 33 }
//     console.log(myObject);

// };
// fn({ a: 10, b: 33 });
// 3.
// const fm = function () {
//     return { d:-9 };
// };
// console.log(fm());

// Коротка запис свойства


// const username = 'Mango';
// const email = "mango@mail.com";

// const signupData = {
//     username,
//     // імя буде використання як імя значення якщо вони співпадають
//     email,
// };
// console.log(signupData);



// Вичисляємі свойства
// itput name = color - імя value = tomato - значення

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPikcerData = {
//     [inputName]: inputValue,
    


// };

// console.log(colorPikcerData);


// Силочний тип {} === {}

// const a = { x: 1, y: 2 };
// const b = a;

// console.log(b === a);

// Масиви и функції це обєкти


// const a = [1, 2, 4];
// a.hello = 'Dimka';

// console.log(a);

// const fn = function () {
//     console.log('Hello');
// };
// fn.Hello = 'Dimka';
// console.dir(fn.Hello);

// Методи обєкта и this при звертанню до свойств в методах
// THIS використовується тільки у функції

// const playlist = {
//     name: 'Супер плейліст',
//     rating: 5,
//     tracks: ['T-2', 'T-32', 'T-34'],
    // trackCount: 3,- необовязково зберіжати на масиві це кількісьть треків 
    // // Старий способ
    // getName: function () {
    //     console.log('Ага вийшло');
    // }
    // Метод обєктут новий способ
    //  getName() {
    //     console.log('Ага вийшло');
    // }

    // playlist.getName();
//     changeName(newName) {
//         // console.log('this всередині newName:', this);

//         this.name = newName;
//     },
//         addTrack(track){
//             this.tracks.push(track);
//             // this.trackCount = this.tracks.length;
//         },
//     updateRating(newRating) {
//         this.rating = newRating;
//         // getTrackCount(){
//         //     return this.tracks.length;
//         // },- це можна задати коли потрібно вернути кількісьть треків 
//   },
        

// }; 

// playlist.changeName('Play');


// playlist.addTrack('NT')

// playlist.updateRating(4);
// console.log(playlist);

// Перебор масива через for in u Object.keys/value/entries

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// };

// let totalFeelback = 0;


// const keys = Object.keys(feedback);
// console.log(keys);


// for (const key of keys) {
//     console.log(key);
//     console.log(feedback[key]);
//     totalFeelback += feedback[key];

// };

// console.log('totalFeedback :', totalFeelback);

// const values = Object.values(feedback);

// console.log(values);

// for (const value of values) {
//     console.log(value);
//     totalFeelback += value;
// }

// console.log('totalFeeback:', totalFeelback);


// Робота з колекцією 

// const friends = [
//     { name: 'Adam ', online: false },
//     { name: 'Jessi', online: true },
//     { name:  'Jim' , online: true },
//     { name: 'Ajax', online: true },
    
// ];

// console.table(friends);

// for ( const friend of friends) {
//     console.log(friend.online);
//     friend.slip = 999;
// }
// console.table(friends);

// const findFriendByName = function (allFriends, friendname) {


// };
//     for (const friend of allFriends) {
//         // console.log(friend);
//         // console.log(friend.name);

//         if (friend.name === friendname) {
//             return ' Знайшли ';
//         }
           
//     };
//     return ' Не знайшли ';
// };
// console.log(findFriendByName(friends, 'Ajax',));
// console.log(findFriendByName(friends, 'John'));
    

// const getonlineFriends = function (allFriends) {
//     const onlineFriends = [];

//     for (const friend of allFriends) {
//         console.log(friend);
//         console.log(friend.online);

//         if (friend.online)
//         if (!friend.online) - якщо не онлайнт тільки записати усе повністю у нову функцію
// {
//             onlineFriends.push(friend);
//         }
//     }
    
//     return onlineFriends;
// };

// console.log(getonlineFriends(friends));

    


// const getFriedsByOnlineStatus = function (allfriends) {
//     const friendsByStatus = {
//         online :[],
//         offline :[],
//     };
     
//     for (const friend of allfriends) {
//         if (friend.online) {
//             friendsByStatus.online.push(friend);
//             continue;
//         }
//         friendsByStatus.offline.push(friend);

//     }
//     return friendsByStatus;
// };
// // const key = friends online ? 'online' : 'offline';
// // friendsByStatus[key].push(fried);
// // };
// console.log(getFriedsByOnlineStatus(friends));



// Створена корзині товарів 

// { name : 'apple' , price : 50 }
// { name : 'lemon' , price : 60}
// { name : 'orange' , price : 70}
// { name : 'strawbeery' , price : 110 }

// const cart = {
//     items: [],
//     getItems() {
//         return this.items;
//     },
//     add(product) {
//         this.items.push(product);
//      },
//     remove(productName) { 
//         for (const item of this.items) {
//             console.log(item);

//             if (productName === item.name) {
//                 console.log('Знайшли', productName);
//             }
//         }
//     },
//     clear() { 
//         this.item = [];
//     },
//     countTotalPrice() {
//         const { items } = this;
//         let total = 0;

//         for (const {price} of items) {
//             total += price;
//         }

//         return total;
//     },
//     increaseQuantity(productName) { },
//     decreaseQuantity(productName) { },
    
// };



// console.table(cart.getItems());



// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'orange', price: 70 });
// cart.add({ name: 'strawbeery', price: 110 });

// console.table(cart.getItems());

// console.log('Total', cart.countTotalPrice());

// cart.remove('apple');


// спосіб розпилення spread замінна і бистриша функція 
// const numbers = [...[1, 2, 3]];
// console.log(numbers);

// const temps = [18, 14, 12, 21, 17, 29, 24, 767676];

// console.log(Math.max(...temps));


// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4,5,6];
// const nextWeekTemps = [7,8,9];

// const allTemps = [... lastWeekTemps, ...currentTemps, ...nextWeekTemps];

// console.log(allTemps);

// розпилення обєкту

// const a = { x: 1, y: 2 };
// const b = { x: 100, z: 3 };

// const c = {
//     ...a,
//     x:99,
//     ...b,
//     z:101,
// }
// // Object.assign({}, a, b);

// console.log(c);

// деструктиризація - const {} = 

// const playlist = {
//     name: 'Супер плейліст',
//     rating: 5,
//     tracks: ['T-2', 'T-32', 'T-34'],
//     trackCount: 3,
// }; 

// const { name } = playlist;  якщо свойства немає стамимо author = 'USER' після свойства , щоб змінити назва обєкта name : userName

// console.log(name);


// глубока деструктиризація 

// const profile = {
//     name: 'Jace Q',
//     tag: 'jq',
//     location: 'Ola-ola , Kongo',
//     avatar: 'http:', 
//     stats: {
//         followers: 7689,
//         views: 892,
//         likes: 787878,
//     },
// };

// const { name , tag, avatar, stats : { views}, } = profile;

// console.log( name , tag, avatar, views );


//  деструктиризація  масива


// const rgb = [256, 100,80];

// const [a, b, c] = rgb; якщо треба пропустиити потрібно поставити кому 
// console.log(rgb);


// const authors = {
//     Jake: 6,
//     Adam: 7,
//     Ajax: 9,
//     Eva: 4,
// };

// const entries = Object.entries(authors);
// for (const [name, rating] of entries) {
//     console.log(name, rating);
// }

// REST (resrProps)


// const profile = {
//     name: 'Jace Q',
//     tag: 'jq',
//     location: 'Ola-ola , Kongo',
//     avatar: 'http:', 
//     stats: {
//         followers: 7689,
//         views: 892,
//         likes: 787878,
//     },
// };
 
// const { name, tag, location, ... restProps } = profile;

// console.log(name, tag, location);
// console.log(restProps);
// console.log(profile);



// const showProfileInfo = function ( { name, tag, location, avatar, stats} ) {
//     console.log(name, tag, location, avatar, stats);
    
// };
// const profile = {
//     name: 'Jace  Q',
//     tag: 'jq',
//     location: 'Ola-ola , Kongo',
//     avatar: 'http:',
//     stats: {
//         followers: 7689,
//         views: 892,
//         likes: 787878,
//     },

// };

// showProfileInfo(profile);


// Callback функції `функція яка кідається в другу функцію `


// Концепція 'проба1'
// const fnA = function (message, Callback) {
//     console.log(Callback);
//     console.log(message);
//     Callback(999);
// };

// const fnB = function (number) {
//     console.log('спроба виклику фнБ :' , number);
// };

// fnA('gggghl' , fnB);
// 'проба2'
// const doMath = function ( a, b, callback ) {
//     const result = callback(a, b);
//     console.log(result);

    
// };


// doMath(9, 5,function (x, y) {
//     return x + y;
// });
// const add = function (x, y) {
//     return x + y;
// };

// const sub = function (x, y) {
//     return x - y;
// };

// doMath (add,9, 5, );
// doMath(sub,10, 8, );


// Приклад 

// const buttonRef = document.querySelector('.js-buttom');
// const handleBtnClick = function () {
//     console.log('Клік по кнопці');
// };

// buttonRef.addEventListener('click',handleBtnClick)

// геолокація
// const onGetPositionOff = function (position) {
//     console.log(position);
// }
// const onGetPositionOn = function (error) {
//     console.log(error);
// }
// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionOff,
//     onGetPositionOn,
// );

// Інтервали 

// const callback = function () {
//     console.log('Передаємо певний час 2 sek. ');
// };
// setTimeout(callback, 2000);

// http - запрос

// const onRegSes = function (resp) {
//     console.log('відповідь');
//     console.log(resp);
// };
// fetch('http://pokeapi.co/api/v2/pokemon') .then(res => res.json()).then(onRegSes);

// Замикання 


// const fnA = function (parameter) {
//     const innerVarieble = 'значення переміної функції fnA';

//     const innerFunction = function () {
//         console.log(innerVarieble);
//         console.log(parameter);
//         console.log('Виклик функції innerFunction');
//     };

//     return innerFunction;
// };

// const fnB = fnA(9999);
// fnB();

// console.log(fnB);

// 'Поварьонек' приклад 

// const makeDish = function (shefName, dish) {
//     console.log(`${shefName} готує ${dish}`);
// };
// // makeDish('Adam', 'Кава');
// // makeDish('Adam', 'Чай');
// // makeDish('Adam', 'Латте');

// // makeDish('Jack', 'Суп');
// // makeDish('Jack', 'Борщ');
// // makeDish('Jack', 'Омлет');

// const makeShef = function (name) {
//     const makeDish = function (dish) {
//         console.log(`${name} готує ${dish}`);
//     };

//     return makeDish;
// };


// const Adam = makeShef('Adam');


// Adam('Латте');
// Adam('Салатік');


// const Jack = makeShef('Jack');

// Jack('Яйце пашот !!!!');


// Заокруглення

// const floatingPoint = 3.6688;
// const someIt = Math.round(floatingPoint); // буде 3 без крапки
// const withDecimals = Number(floatingPoint.toFixed(2));// у () буде кількісьть цифр після крапкі 3.66

// стрілочні функції 
// const add = (a, b, c) => a, b, c;

// const add = (a, b, c) => {
//     console.log(a, b, c);

//     return a + b + c;
// };

// console.log(add(5, 10, 15));

// ПЕРЕБИРАННЯ МАСИВІВ

// forEach

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (numbers, index, array) {
//     console.log('naumber', numbers);
// });

// console.log(numbers);

// map

// const numbers = [5, 10, 15, 20, 25];
// const doubledNums = numbers.map(number => {
//     console.log(number);

//     return number * 2;
// });

// console.log('number', numbers);

// console.log('doubledNums', doubledNums);

// const players = [
//     { id: 'player-1', name: 'Jack', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Ajax', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Ron', timePlayed: 230, points: 50, online: true },
//     { id: 'player-4', name: 'Ebbi', timePlayed: 300, points: 64, online: false },
//     { id: 'player-5', name: 'Don', timePlayed: 198, points: 90, online: true },
// ];

// const playerName = players.map(player => {
//     // console.log(player);

//     return player.name;
// });
// console.log('playerName', playerName);

// const playerIds = players.map(player => player.id);
// console.log('playersIds', playerIds);


// const updatePlayers = players.map(player => ({
//      ...player,
//         points: player.points * 1.2,
    
// }));

// console.log(updatePlayers);
// // console.table(updatePlayers);

// const playerIdToUpdate = 'player-1';
// const updatePlayers = players.map(player => {
//     if (playerIdToUpdate === player.id) {
//         // console.log('OLD');
//         return {
//             ...player,
//             timePlayed: player.timePlayed + 25,
//         };
//     }
//     return player;
// });

// console.table(updatePlayers);

// const playerIdToUpdate = 'player-1';

// const updatePlayers = players.map(player =>
//     playerIdToUpdate === player.id
//         ? { ...player, timePlayed: player.timePlayed + 25,}
//     : player,
// );

// console.table(updatePlayers);


// Filter
// const filteredNumb = numbers.filter(number => number < 15);
// console.log(filteredNumb);



// const naumbers = [5, 10, 15, 20, 25];

// const players = [
//     { id: 'player-1', name: 'Jack', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Ajax', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Ron', timePlayed: 250, points: 50, online: true },
//     { id: 'player-4', name: 'Ebbi', timePlayed: 300, points: 64, online: false },
//     { id: 'player-5', name: 'Don', timePlayed: 198, points: 90, online: true },
// ];

// const onlinePlayers = players.filter(player => player.online);
// console.table(onlinePlayers);

// const offlinePlayers = players.filter(player => !player.online);
// console.table(offlinePlayers);

// const hardcorePlayers = players.filter(player => player.timePlayed >= 250);
// console.table(hardcorePlayers);

// find

// const numbers = [5, 10, 15, 20, 25];

// const players = [
//     { id: 'player-1', name: 'Jack', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Ajax', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Ron', timePlayed: 250, points: 50, online: true },
//     { id: 'player-4', name: 'Ebbi', timePlayed: 300, points: 64, online: false },
//     { id: 'player-5', name: 'Don', timePlayed: 198, points: 90, online: true },
// ];

// // const number = numbers.find(number => number > 10);
// // console.log(number);


// const playerIdToFind = 'player-5';

// const playerWithId = players.find(player => player.id === playerIdToFind);
// console.log(playerWithId);

// const playerNameFind = 'Don';

// const playerWithName = players.find(player => player.name === playerNameFind);
// console.log(playerNameFind);



// every

// const players = [
//     { id: 'player-1', name: 'Jack', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Ajax', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Ron', timePlayed: 250, points: 50, online: true },
//     { id: 'player-4', name: 'Ebbi', timePlayed: 300, points: 64, online: false },
//     { id: 'player-5', name: 'Don', timePlayed: 198, points: 90, online: true },
// ];

// const isAllonline = players.every(player => player.online)
// console.log(isAllonline);


// some


// const isAllonline = players.some(player => player.online);
// console.log(isAllonline);


// reduce

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce( (acc, number) =>  acc + number, 0 );
// console.log(total);

// const salary = {
//     adam: 100,
//     ewa: 80,
//     jack: 90,
// };

// const totalSalary = Object.values(salary).reduce((total, value) => total + value, 0);
// console.log(totalSalary);

// const players = [
//     { id: 'player-1', name: 'Jack', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Ajax', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Ron', timePlayed: 250, points: 50, online: true },
//     { id: 'player-4', name: 'Ebbi', timePlayed: 300, points: 64, online: false },
//     { id: 'player-5', name: 'Don', timePlayed: 198, points: 90, online: true },
// ]; 


// const totalTimePlayed = players.reduce((totalTime, player) => totalTime + player.timePlayed, 0);
// console.log(totalTimePlayed);


// const cart = [
//     { label: 'A', price: 100, quantity: 2 },
//     { label: 'B', price: 120, quantity: 3 },
//     { label: 'C', price: 70, quantity: 4},
// ];
    
// const totalAmount = cart.reduce((total, {price,quantity}) => total + price * quantity, 0);
// console.log(totalAmount);


// const tweets = [
//     { id: '00', like: 5, tag: ['js', 'nodejs'] },
//     { id: '01', like: 2, tag: ['html', 'css'] },
//     { id: '02', like: 17, tag: ['js', 'css'] },
//     { id: '03', like: 8, tag: ['js', 'nodejs','react'] },
//     { id: '04', like: 0, tag: ['js', 'nodejs','css'] },
        
// ];

// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tag],[]);

//     console.log(allTags);


// Sort

// const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// console.log('numbers:',numbers);

// const letters = ['b', 'B', 'a', 'A'];
// letters.sort();
// console.log(letters);

// numbers.sort((curEl, nextEl) => nextEl - curEl);
// console.log(numbers);

// const players = [
//     { id: 'player-1', name: 'Jack', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Ajax', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Ron', timePlayed: 250, points: 50, online: true },
//     { id: 'player-4', name: 'Ebbi', timePlayed: 300, points: 64, online: false },
//     { id: 'player-5', name: 'Don', timePlayed: 198, points: 90, online: true },
// ]; 

// const sortedBestPlayers = [...players].sort((prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed);
// console.table(sortedBestPlayers);

// const sortedBestpoint = [...players].sort((prevPlayer, nextPlayer) => nextPlayer.points - prevPlayer.points);
// console.table(sortedBestpoint);

// const sortedPlayers = [...players].sort((newPlayers, oldPlayers) => oldPlayers.id - newPlayers.id);
// console.table(sortedPlayers);

//    chaining

// const numbers=[1, 5, 2, 4, 3];
// const greatThenTwo = numbers.filter(num => num > 2);
// console.log(greatThenTwo);

// const myltByThree = greatThenTwo.map(num => num * 3);
// console.log(myltByThree);

// const sorted = myltByThree.sort((a, b) => a - b);
// console.log(sorted);

// const sorted = numbers.filter(num => num > 2).map(num => num * 3).sort((a, b) => a - b);
// console.log(sorted);

// const players = [
//     { id: 'player-1', name: 'Jack', points: 54, online: false },
//     { id: 'player-2', name: 'Ajax', points: 92, online: true },
//     { id: 'player-3', name: 'Ron', points: 50, online: true },
//     { id: 'player-4', name: 'Ebbi', points: 64, online: false },
// ];

// const onlineSorted = players.filter(player => player.online).sort((a, b) => a.points - b.points);
// console.table(onlineSorted);

// const element = {
//     class: '',
//     hovered: false,
//     changeClass(cls) {
//         this.class = cls;
//     return this;
// },
//     toggleHovered(){
//         this.hovered = !this.hovered;
//         return this;
//     },
// };

// element.toggleHovered().changeClass('open').toggleHovered();
// console.log(element);

// THIS


// У контексті USER.SHOWTAG(назва функції)

// const user1 = {
//     tag: 'Adam',
//     showTag() {
//         console.log('showTag -> this', this);
//     },

// };

// // user.showTag();

// // БЕЗ КОНТЕКСТУ TOO();

// // строгий режим - undefined 99.9998%
// // не встрогому режимі - window

// const too = function () {
//     console.log('too->this', this);
// };

// too();

// const showTag = function(){
//     console.log('tag',this);
//     console.log('Show',this.tag);
// };
// // showTag();

// const user = {
//     tag: 'Adam',
// };

// user.showUserTag = showTag;
// console.log('user', user);


// user.showUserTag();

// const user = {
//     tag: 'Ajax',
//     showTag(){
//         console.log('tag', this);
//         console.log('Name:', this.tag);
//     },
// };

// user.showTag();

// const outerSwohTeg = user.showTag;

// outerSwohTeg();

// const user = {
//     tag: 'Jack',
//     showTag() {
//         console.log('tag', this);
//         console.log('Name', this.tag);
//     },
    
// };

// const invoAction = function (action) {
//     console.log(action);
//     action();
// };

// invoAction(user.showTag);

// const coun = {
//     value: 10,
//     inc(value) {
//         console.log('inc', this),
//             this.value += 1;
//     },
//     dec(value) {
//         console.log('dec', this),
//             this.value -= 1;
//     },

// };
// const decBot = document.querySelector('.js-dec');
// const incBot = document.querySelector('.js-inc');
// const valueEl = document.querySelector('.js-value');
// console.log(incBot);
// console.log(decBot);
// console.log(valueEl);

// decBot.addEventListener('click', function() {
//     console.log('Пройшов клік-');

//     coun.dec();
//     console.log(coun);
// });

// incBot.addEventListener('click', function () {
//     console.log('Пройшов клік +');

// });
// const upCoun = function (value, oporet) {
//     oporet(value);
// };

// coun.inc(323);
// coun.dec(40);

// CALL метод функції одноразова акція

// const showThis = function () {
//     console.log('THIS', this);
// };

// showThis();

// const objA = {
//     a: 2,
//     b: 3,
// };

// showThis.call(objA);

// const objB = {
//     x:234,
//     y:845,
// };

// showThis.call(objB);

// showThis();

// // Aplly визиває масив []-різниця між CALL



// BIND робить окрему копію він не міняє оригінал часто юзається

// const changeColor = function (color) {
//     console.log('COLOR', this);
//     this.color = color;
// };

// const hat = {
//     color: 'black',
// };

// const sweater = {
//     color: 'white',
// };

// const changeHatColor = changeColor.bind(hat);
// const changeSwColor = changeColor.bind(sweater);

// changeSwColor();

// changeHatColor();


// const coun = {
//     value: 0,
//     inc(value) {
//         console.log('inc', this),
//             this.value += 1;
//     },
//     dec(value) {
//         console.log('dec', this),
//             this.value -= 1;
//     },

// };
// const decBot = document.querySelector('.js-dec');
// const incBot = document.querySelector('.js-inc');
// const valueEl = document.querySelector('.js-value');
// console.log(incBot);
// console.log(decBot);
// console.log(valueEl);

// decBot.addEventListener('click', function() {
//     console.log('Пройшов клік-');

//     coun.dec();
//     console.log(coun);

//     valueEl.textContent = coun.value;
// });

// incBot.addEventListener('click', function () {
//     console.log('Пройшов клік +');
//     coun.inc();
//     console.log(coun);

//      valueEl.textContent = coun.value;

// });




// ПРОТОТИПИ Object.creater 
  

// const objC = {
//     z: 3,
// };

// const objB = Object.create(objC);
// objB.dbv = 42;

// // console.log(objB);

// // console.log(objC);


// // console.log(objB.z);

// const objA = Object.create(objB);
// objA.ana = 2323232323;

// console.log(objC);

// const Car = function ({ brand, model, price } = {} ) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;    

//     this.chPr = function (newPr) {
//         this.price = newPr;
//     }
//  };

// const myCar = new Car({
//     brand: 'Audi',
//     model: 'Q5',
//     price: 45000,
// });
// console.log(myCar);

// const myCar2 = new Car({
//     brand: 'Opel',
//     model: 'Insignia',
//     price: 25000,
// });
// console.log(myCar2);

// const myCar3 = new Car({
//     brand: 'BMW',
//     model: 'X-7',
//     price: 50000,
// });
// console.log(myCar3);

// const myCar4 = new Car();
// console.log(myCar4);


// const Car = function ({ brand, model, price } ) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// };
// Car.prototype.sayHi = function () {
   
//     console.log('Hello');
// };


// const myCar = new Car({
//     brand: 'Audi',
//     model: 'Q5',
//     price: 45000,
// });
// console.log(myCar);

// myCar.sayHi();


// const User = function ({ email, password } = {}) {
//     this.email = email;
//     this.password = password;

// };

// User.prototype.changeEmail = function (newMail) {
//     this.email = newMail;
// };
 
// const ajax = new User({ email: 'ajax@mail.com', password: 22222 });

// ajax.changeEmail('new-email@mail.com');
// console.log(ajax);


// CLASS


// class Car {
//     static AAA = 'aaa'
    
//     constructor({ a, b },{}) { 
//         console.log('Конструктор')
//         console.log(this);
//         this.a = a;
//         this.b = b;

//     }
    
//     changeA(newA) {
//         this.a = newA;
//     }
// };
// console.dir(Car);


// Гетери и сетери 


// class Car {
//     static description = 'Клас опису авто ';
//     constructor({ brand, model } = {}) {
//         this.brand = brand;
//         this.model = model;
//     }
//     changeModel(newModel) {
//         this.model = newModel;
//     }
//     get model() {
//         return this._model;
// }
//     // getModel() {
//     //     return this.model;
//     // }
//     set model(newModel) {
//         this._model = newModel;
//     }
// }

// const carInst = new Car({
//     brand: 'BMW',
//     model: 'X7',
// });

// console.log(carInst);

// consol.log(carInst.model);-get
// carInst.model='X5"-set
// Вони лежать у конструкторі 


// Гетери и сетери працюють(так званий функціонал обєкта) з обєктами 

// const obj = {
//     _a: 99,
//     get a() {
//         return this._a;
//     },
//     set a(b) {
//         this._a = b;
//     },
// };

// console.log(obj);


// DOM !!!



// Обєкт document та window 

// querySelector - повертає ОДИН елемент колекції (перший елемент)
// querySelectorAll - повертає всі елементи колекції

// const navRef = document.querySelector('ul');
// console.log(navRef);

// const itemsRef = document.querySelectorAll('li');
// console.log(itemsRef);






const magicBtn = document.querySelector('.magic-btn');
// const addBtn = document.querySelector('.add-btn')
// Свойства елементів
// magicBtn.addEventListener('click', () => {
  
    // const imgRef = document.querySelector('.hero_img');
    // console.log(imgRef);
    // console.log(imgRef.src);
    // imgRef.src = 'фото/3.jpg';
    // imgRef.alt = 'Шугаринг';
    // const titleRef = document.querySelector('.hero_title');
    // console.log(titleRef.textContent);
    // titleRef.textContent = 'Заміна 2.0';
// });


// Атрибути елементів
// setAttribute - встановлює атрибут і його значення
// getAttribute - отримує значення атрибута
// removeAttribute - видаляє атрибут
// hasAttribute - перевіряє чи є атрибут
// attributes - отримує всі атрибути
// className - отримує і встановлює клас
// id - отримує і встановлює id
// innerHTML - отримує і встановлює вміст елемента


// Data-атрибути (actions)
// data-атрибути - це атрибути які починаються з data-
// data-атрибути - це атрибути які не відображаються в DOM
// data-атрибути - це атрибути які можна використовувати для власних атрибутів
// data-атрибути - це атрибути які можна використовувати для власних атрибутів

// const actions = document.querySelectorAll('.js-actions button');
// console.log( actions[2].dataset);

// addBtn.addEventListener('click',() => {
//     const inputEl = document.querySelector('.js-input');
//     console.log(inputEl.value);
// });



// ClassList

// magicBtn.addEventListener('click', () => {
  
    // const navEl = document.querySelector('.site-nav');
    // console.log(navEl.classList);
    // navEl.classList.add('super-coll'); -// можна добавити
    // navEl.classList.remove('super-coll'); // можна видалити
     // navEl.classList.toggle('dimka'); // можна при натискані добавити при наступному натискані він зникає
    // navEl.classList.replace('super-coll' , 'odl-class'); // заміна старого класу на новий  
    // console.log(navEl.classList.contains('dimka')); // перевірка наявності класу - повертає true або false
// });

// const currentPageUrl = '/about';
// const linkEl = document.querySelector(
//     `.site-item__link[href="${currentPageUrl}]`,
// ); 
// console.log(linkEl);
    
// const titleEl = document.createElement('h2');//createElement- створення елементу 
// titleEl.classList.add('page-title');
// titleEl.textContent = ('созданий елемент ');
// console.log(titleEl);

// document.body.appendChild(titleEl);//додаваня елементу

// const imgEl = document.createElement('img');
// imgEl.src="https://ru.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_27271706.htm#fromView=keyword&page=1&position=0&uuid=3e76c64f-7f00-4cf0-b59a-cc1f1d04921c&query=Jpg"
// imgEl.alt = 'mouse';
// imgEl.width = 360;
// console.log('imgEl', imgEl);

// document.body.appendChild(imgEl);

// const navItemEl = document.createElement('li');
// navItemEl.classList.add('site-nav__item');
// const navLinkEl = document.createElement('a');
// navLinkEl.classList.add('site-nav_-_link');
// navLinkEl.textContent = 'Кабінет';
// navLinkEl.href = '/portfolio';

// navItemEl.appendChild(navLinkEl);
// console.log(navItemEl);

// const navEl = document.querySelector('.site-nav');

// navEl.insertBefore(navItemEl, navEl.firstElementChild);// вставляє перешим елементом якщо потрібно перед 2 children[1]

// append метод у який можна подати одразу пару елементів важливий порядок передачі елементів

// const colorPikcerOptions = [
//     {label:'red',color: '#F44336'},
//     {label:'green',color: '#4CAF50'},
//     {label:'blue',color: '#2196F3'},
//     {label:'grey',color: '#607D8B'},
//     {label:'pink',color: '#E91E63'},
//     {label:'indigo',color: '#3F5185'},
// ];

// const colorPikcerConEl = document.querySelector('.js-color-picker');
// const element = colorPikcerOptions.map(option => {
//     const buttonEl = document.createElement('button');
//     buttonEl.classList.add('color-picker_option');
//     buttonEl.type = 'button';
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.label;

//     return buttonEl;
// });

// console.log(element);

// colorPikcerConEl.append(...element);

// const makeColorPicOpt = option => {
//     return option.map(option => {
//         const buttonEl = document.createElement('button');
//         buttonEl.classList.add('color-picker_option');
//         buttonEl.type = 'button';
//         buttonEl.textContent = option.label;
//         buttonEl.style.backgroundColor = option.label;

//         return buttonEl;
//     });
// };

// const element = makeColorPicOpt(colorPikcerOptions);

// colorPikcerConEl.append(...element);



// innerHTML повертає весь контекст 


// ПОДІЇ

// const targetBtn = document.querySelector('.js-target-btn');
// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenerBtn = document.querySelector('.js-remove-listener');

// // targetBtn.addEventListener('click',  onTargetButtonClick); // або targetButtonClickHandel або handelTargetButtonClick
// // function  onTargetButtonClick() {
// //     console.log('Клік');
// // };

// // function logMessage() {
// //     console.log('Клік по цільовій кнопці');
// // }

// addListenerBtn.addEventListener('click', () => {
//     console.log('Додаєм цільову кнопку ');

//     targetBtn.addEventListener('click', onTargetButtonClick);
    
// });
// removeListenerBtn.addEventListener('click', () => {
//     console.log('Забераємо цільву кнопку');

//     targetBtn.removeEventListener('click', onTargetButtonClick);
// });
// function onTargetButtonClick() {
//     console.log('Клік по цільовій кнопці ');
// }


// const form = document.querySelector('.js-register-form');

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//     event.preventDefault();//відміна дій браузера за замовчаням 
//     const formData = new FormData(event.currentTarget); // зберає усі дані formData
//     console.log(formData);
// }

// Події iput

//Патерн 'Обєкти ссилок ' можна зробити більш чительніше

// const input = document.querySelector('.js-input');
// const nameLabel = document.querySelector('.js-button > span');
// const license = document.querySelector('.js-license');
// const btn = document.querySelector('.js-button');

// const refs = {
// input : document.querySelector('.js-input'),
// nameLabel: document.querySelector('.js-button > span'),
// licenseCheckBox :document.querySelector('.js-license'),
// btn : document.querySelector('.js-button'),
// };

// // refs.input.addEventListener('focus', onInputFocus);
// // refs.input.addEventListener('blur', onInputBlur);
// refs.input.addEventListener('input', onInputChange);
// refs.licenseCheckBox.addEventListener('change', onLicenseChange);

// function onInputFocus() {
//     console.log('Инпут отримує фокус - подія focus')

// }
// function onInputBlur() {
//     console.log('Инпут втрачає фокус - подія blur')
    
// }

// function onInputChange(event) {
//     console.log(event.currentTarget.value);
//     refs.nameLabel.textContent = event.currentTarget.value;
//  }

// function onLicenseChange(event) {
   
//     refs.btn.disabled = !event.currentTarget.checked;
//  }

// KEY - місце на клавіатурі  CODE- позначення букви яку ввели
// const refs = {
//     output: document.querySelector('.js-output'),
//     crearBtn: document.querySelector('.js-clear'),
// };

// window.addEventListener('keypress', onKeypress);
// refs.crearBtn.addEventListener('click' , onClearOutput);

// function onKeypress(event) {
//     // console.log(event);
//     // console.log('event.key:', event.key);
//     // console.log('event.code', event.code);
//     refs.output.textContent += event.key;
// }

// function onClearOutput() {
//     refs.output.textContent = '';

    
// }


// const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseenter', onMouseEnter);
// boxRef.addEventListener('mouseleave', onMouseLeave);
// boxRef.addEventListener('mousemove', onMouseMove);

// function onMouseEnter(event) {
//     const box = event.curretTarget;
//     box.classList.add('box--active');
    
// }

// function onMouseLeave(event) {
//     const box = event.curretTarget;
//     box.classList.remove('box--active');
    
// }

// function onMouseMove(event) {
//     console.log(event);
// }
