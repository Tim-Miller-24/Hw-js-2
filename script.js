
// Дз с часами 


var time = prompt('Введите время в часах от 0 до 24');

switch (time) {
    case '0':
        alert('12 часов ночи. Либо же 0 часов - начало суток');
        break;

    case '1':
        alert('Час ночи');
        break;

    case '2':
        alert('2 часа ночи');
        break;

    case '3':
        alert('3 часа ночи');
        break;

    case '4':
        alert('4 часа ночи');
        break;

    case '5':
        alert('5 часов ночи');
        break;

    case '6':
        alert('6 часов утра');
        break;

    case '7':
        alert('7 часов утра');
        break;

    case '8':
        alert('8 часов утра');
        break;

    case '9':
        alert('9 часов утра');
        break;

    case '10':
        alert('10 часов утра');
        break;

    case '11':
        alert('11 часов утра');
        break;

    case '12':
        alert('12 часов дня');
        break;

    case '13':
        alert('час дня');
        break;

    case '14':
        alert('2 часа дня');
        break;

    case '15':
        alert('3 часа дня');
        break;

    case '16':
        alert('4 часа дня');
        break;

    case '17':
        alert('5 часа дня');
        break;

    case '18':
        alert('6 часов вечера');
        break;

    case '19':
        alert('7 часов вечера');
        break;

    case '20':
        alert('8 часов вечера');
        break;

    case '21':
        alert('9 часов вечера');
        break;

    case '22':
        alert('10 часов ночи');
        break;
    case '23':
        alert('11 часов ночи');
        break;

    case '24':
        alert('12 часов ночи. Либо же 0 часов - начало суток');
        break;

    default:
        alert('Введены неверные данные');
        break;
}







// Дз с числами
/* 
alert('Введите 3 случайных числа');

var frst = +prompt('Первое число');

while (frst == '' || isNaN(+frst)) {
    var frst = +prompt('Первое число');
}

var scnd = +prompt('Второе число');

while (scnd == '' || isNaN(+scnd)) {
    var scnd = +prompt('Второе число');
}

var thrd = +prompt('Третье число');

while (thrd == '' || isNaN(+thrd)) {
    var thrd = +prompt('Третье число');
}

if ((frst < scnd && scnd < thrd) || (frst > scnd && scnd > thrd)) {
    alert(`Среднее число их этих трех: ${scnd}`);
} else if ((scnd < frst && frst < thrd) || (scnd > frst && frst > thrd)) {
    alert(`Среднее число их этих трех: ${frst}`);
} else if ((frst < thrd && thrd < scnd) || (frst > thrd && thrd > scnd)) {
    alert(`Среднее число их этих трех: ${thrd}`);
} else if (frst == scnd && scnd == thrd) {
    alert('Все числа равны');
} else {
    alert('Не удалось вычислить');
}

 */
