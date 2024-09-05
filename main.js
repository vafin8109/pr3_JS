'use strict';

// Задание 1
let a = prompt('Стоимость товара');
let b = prompt('Количество денег клиента');
if (a > 0 && b > 0) {
    if (a == b) {
        alert('Покупка совершена');
    } else if (a > b) {
        alert(`Для покупки не хватает ${a - b}р.`);
    } else if (a < b) {
        alert(`Покупка совершена. Сдача: ${b - a}р.`);
    }
} else {
    alert('Неверный формат данных');
}

// Задание 2 

let c = prompt('Введите число:');
if (c > 0) {
    alert ('1');
} else if (c < 0) {
    alert('-1');
} else if (c == 0){
    alert('0');
} else {
    alert('Неверный формат данных');
} 

//Задание 3

let d = prompt('Введите число:');
let e = prompt('Введите число:');
let result = (d + e <4) ? 'Мало' : 'Много';
alert(result);

// Задание 4

let login = prompt('Введите login:');

let message = login == 'Сотрудник' ? 'Привет' :
    login == 'Директор' ? 'Здравствуйте' :
        login == '' ? 'Нет логина' : '';

alert(message);

//Задание 5

let log = prompt("Введите логин");
if (log == 'Админ') {
    let pass = prompt('Введите пароль');
    if (pass == 'Я главный'){
        alert('Здравствуйте')
    }else if (pass === null || pass === '') {
        alert('Отменено')
    }else {
        alert('Неверный пароль');
    }
}else if (log === null || log === ''){
    alert('Отменено')
}else {
    alert('Я вас незнаю');
}

