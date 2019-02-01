$( '#menu-tabs li' ).click( function() {
  var thisClass = this.className.slice( 0, 2 );
  $( 'div.t1' ).hide();
  $( 'div.t2' ).hide();
  $( 'div.t3' ).hide();
  $( 'div.t4' ).hide();
  $( 'div.t5' ).hide();
  $( 'div.t6' ).hide();
  $( 'div.t7' ).hide();
  $( 'div.' + thisClass ).fadeIn( 500 );
  $( '#menu-tabs li' ).removeClass( 'active' );
  $( this ).addClass( 'active' );
  return false;
});
$('li.t1').click();

task1();
task2();
time();
task4();
task5();
task6();
task7();
task8();
task9();
task9Add();
sum();
task10();

// document.addEventListener("DOMContentLoaded", function () {

var br = "<br>";
//задача № 1
// Напишите if..else, соответствующий следующему switch:

// switch (browser) {
// case 'IE':
// alert( 'О, да у вас IE!' )
// break;
// case 'Chrome':
// case 'Firefox':
// 	case 'Safari':
// case 'Opera':
// alert( 'Да, и эти браузеры мы поддерживаем' );
// break;
// default:
// alert( 'Мы надеемся, что и в вашем браузере все ок!' );
// }
//или так полное:
function task1() {
  var browser = prompt( "Какой у вас браузер?", "" );
  if ( browser == 'IE' ) {
    message = ( 'О, да у вас IE!' );
  } else if ( browser == 'Chrome' ) {
    message = ( 'Да, и эти браузеры мы поддерживаем' );
  } else if ( browser == 'Firefox' ) {
    message = ( 'Да, и эти браузеры мы поддерживаем' );
  } else if ( browser == 'Safari' ) {
    message = ('Да, и эти браузеры мы поддерживаем' );
  } else if ( browser == 'Opera' ) {
    message = ( 'Да, и эти браузеры мы поддерживаем' );
  } else {
    message = ( 'Мы надеемся, что и в вашем браузере все ок!' );
  }
  // if(  == 'IE' ) {
  //     message = ( 'О, да у вас IE!' );
  // } else if (
  //    browser == 'Chrome'
  // || browser == 'Firefox'
  // || browser == 'Safari'
  // || browser == 'Opera  {
  //     message = ( 'Да, и эти браузеры мы поддерживаем' );
  // } else {
  //     message = ( 'Мы надеемся, что и в вашем браузере все ок!' );
  // }
  alert( message );
}


//задача № 2
// Перепишите код с использованием одной конструкции switch:

// var a = +prompt( 'a?', '' );
// if ( a == 0 ) {
//     alert( 0 );
// }if ( a == 1 ) {
//         alert( 1 );
//     }
// if ( a == 2 || a == 3 ) {
//     alert( '2,3' );
// }

//решение
function task2() {
  var a = +prompt( 'a?', '' );
  //так как оператор + преобразовывает Number всё введенное,
  //то если ничего не вводить будет алерт 0(число 0 = false-Ничего)
  switch ( a ) {
    case 0:
      alert( 0 );
      break;

    case 1:
      alert( 1 );
      break;

    case 2:
    case 3:
      alert( '2,3' );
      break;
      // default:
      //  alert( "Why is that?" );
  }
}


//задача № 3
// Ваша задача, используя методы объекта date, вывести на экран
// время в формате: час:минута:секунда (пример: 14:23:11)
//При этом, если секунды и минуты попадают в интервал от 0 до 10,
// они должны выводиться с нулем впереди.
// т.е. вместо 18:7:3 у Вас должно выводиться 18:07:03
function time() {
  var br = " !<br>";
  var task3 = document.createElement( 'div' );
  task3.className = "task";
  var time = new Date();
  var hour = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  if ( minutes < 10 ) {
    minutes = "0" + minutes;
  }
  if ( seconds < 10 ) {
    seconds = "0" + seconds;
  }
  task3.innerHTML = ( hour + ':' + minutes + ":" + seconds +
    " - время вашего входа" + br );
  idTask3.appendChild( task3 );
}


//задача № 4

// Написать функцию, которая выводит на экран дату, которая наступит через n дней от сегодняшней.
// n - количество дней, которое нужно запросить у пользователя при загрузке страницы.
// Это значение передаете в функцию в качестве параметра.
// При этом итоговую дату надо вывести в нормальном формате на русском языке.
// Например так (пример для ввода числа 79):

// Через 79 дней будет вот такая дата:
// День недели: Воскресенье
// Число: 10
// Месяц: Октябрь
// Год: 2010

// При этом пользователь должен ввести число от 1 до 1000.
// Если он не попал в интервал или ввел не число, то надо вывести ошибку.
// Проверку можно осуществлять за пределами функции.
function task4() {

  var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

  //  var millsecNow = new Date().getTime(); //так не хочет
  var dayNow = new Date();
  var millsecNow = dayNow.getTime();
  var task4 = document.createElement( 'div' );
  task4.className = "task";
  var question = prompt( "Введите цифру и узнайте,что будет через столько дней?(во вкладке №4)", "" );
  var n = Math.round( question ); //округляем?
  var day_afterN = new Date( 1000 * 60 * 60 * 24 * n ); //после 1-го января 1970
  var millsecN = day_afterN.getTime(); // Число миллисекунд в n days
  var millsecNowPlusN = new Date( millsecNow + millsecN );
  if ( n == "0" && n <= 0 || isNaN(n) ) {
    alert( "Жаль что вам не интересно(((" );
    var answer = ( "Жаль(((" );

  } else {
    var answer = ("<h5>" + n + " - через указанное Вами число дней будет такая дата:</h5>" + br +
      "<p>Год: " + millsecNowPlusN.getFullYear() + br +
      "Месяц: " + months[millsecNowPlusN.getMonth()] + br +
      "День недели: " + days[millsecNowPlusN.getDay()] + br +
      "Число: " + millsecNowPlusN.getDate() + "</p>"
    );
  }
  task4.className = "task";
  var task4 = document.createElement( 'div' );

  task4.innerHTML = ( answer );
  idTask4.appendChild( task4 );

}


//задача № 5

// Написать функцию, которая получает в качестве
//параметра переменную содержащую строку
// и с помощью регулярного выражения проверяет,
//начинается ли содержимое этой переменной с цифры или нет.
// Результат своей работы функция выводит на экран.
// Переменная для передачи в функцию: var forTesting = "8 пингвинов и 9 карасей.";

function task5() {
	// var forTesting = prompt( 'Введите слово иль букву, иль число' );
  var forTesting = "8 пингвинов и 9 карасей.";
  // var task5 = document.createElement( 'div' );
  // task5.className = "taskAdd";
  function searchFirstSymbol( str ) {
    if ( str.search( /^\d/ ) ) {
      // message = ( 'Строка начинается НЕ с цифры' )
      alert( 'Строка начинается НЕ с цифры' );
    } else {
      // message = ( 'Строка начинается с цифры' )
      alert( 'Строка начинается с цифры' );
    }
  }
  // task5.innerHTML = ( message );
  // layout.appendChild( task5 );

  searchFirstSymbol( forTesting );
}





//задача № 6
// Вам нужно написать регулярное выражение для поиска в тексте номера кредитной карты.
// Текст: "Иван вчера потерял свою кредитку, ее номер 1178-9087-2384-8787.
// Поэтому он пошел в банк и описал ситуацию. Там пошли ему навстречу и выдали
// новую кредитку под номером: 1103-8899-0811-1722".
// Напомню, что кредитные карты имеют формат: xxxx-xxxx-xxxx-xxxx
// Например: 1178-9087-2384-8787
// При этом, вам нужно найти только те номера, в которых первые 4 цифры содержат только 0, или 1 или 2, или 3,
// т.е. вас, например,
//  устроит номер 1103-8899-0811-1722,
//  но не устроит 1490-8877-7345-8111
// (т.к. здесь присутствует цифры 4 и 9,
//     не удовлетворяющие нашим условиям).
// При этом номер кредитки нужно не просто найти, а вытащить в переменную result и вывести на экран.
function task6() {
  var card = "Иван вчера потерял свою кредитку, ее номер 1178-9087-2384-8787. Поэтому он пошел в банк и описал ситуацию. Там пошли ему навстречу и выдали новую кредитку под номером: 1103-8899-0811-1722";

  var regular_all = /[0-9-]{19}/g; //для поиска всех номеров
  var regular_select = /[0-3]{4}[0-9-]{15}/g; //первые четыре  до3
  var result_all = card.match( regular_all );
  var result_select = card.match( regular_select );
  var task6 = document.createElement( 'div' );
  task6.className = "task";

  result = ( "<p>" + result_all + " - Это все номера кредитных карт в строке </p>" + "<br>" +
    "<p>" + result_select + " - Номер кредитной карты, где первые четыре цифры находятся в диапазоне от 0 до 3 </p>" );
  task6.innerHTML = ( result );
  idTask6.appendChild( task6 );
}
// чтоб не запутаться idTask else task is ID
//WTF????!


//задача № 7
// Написать функцию, которая меняет слэши на дефисы.
// Ваша задача состоит в том, чтобы написать функцию, которая принимает два параметра.
// 1. Переменная, в которой содержится номер телефона, записанный с помощью слэшей.
// var tel = "8/927/31/10/765";
// 2. Знак, на который нужно заменить слэш.
// var sign = "-";
// Внутри этой функции, с помощью
// регулярного выражения и метода replace()
// вам надо заменить все слэши на указанный во втором параметре знак.
// В качестве результата, нужно вывести уже измененный телефонный номер на экран.
// Подсказка. Помните, что слэш это символ, который используется для создания регулярного выражения
// (также как и точка, скобки и т.д.) поэтому, чтобы сообщить JavaScript,
// что надо искать именно слэш,
// вы должны экранировать его обратным слэшем.
function task7() {
  var tel = "8/927/31/10/765";
  var sign = prompt( "Введите дефис или любой другой знак" );

  function reSlesh( tel, sign ) {
    var regular = /\//g;
    var result = tel.replace( regular, sign ); //находим и заменяем(слеши)
    var task7 = document.createElement( 'div' );
    task7.className = "task";
    idTask7.appendChild( task7 );
    conclusion = ( result ); // аккуратно с растановкой одигпковых переменных!!!
    task7.innerHTML = ( conclusion );
  }
	reSlesh( tel, sign );
}


//задача № 8
// 1. Напишите функцию, которая в качестве параметра получает строку,
// а как результат свой работы вычисляет, в строке больше 10 символов или меньше.
// 2. Запросите у пользователя ввод любого слова и поместите этот ввод в переменную.
// 3. Вызовите вашу функцию, а в качестве параметра передайте то самое слово,
// которое вы сохранили в переменную.
// 4. Напечатайте на экран сообщение о том, больше 10 символов в этом слове,
//  меньше или равно 10.
function task8() {

  function amountSimbol( stringSimple ) {

    if ( stringSimple < 10 ) {
      return `В слове ${stringSimple} меньше 10 символов`;
    } else {
      return `В слове ${stringSimple} больше 10 символов`;
    }
  }
  var task8 = document.createElement('div' );
  task8.className = "task";
  var question = prompt( 'Введите слово, узнаете больше ли в нем чем 10 символов', "" );
  var answer = amountSimbol( question );
  idTask8.appendChild( task8 );
  task8.innerHTML = ( answer );

}

// var browserType = 'mozilla';
// // browserType.length;
// console.log(browserType.length);

//задача № 9
// Написать цикл для вывода квадратов всех чисел от 1 до 7.
// В итоге вы должны получить такую картину:
// Квадрат 1 = 1
// Квадрат 2 = 4
// Квадрат 3 = 9
// Квадрат 4 = 16
// Квадрат 5 = 25
// Квадрат 6 = 36
// Квадрат 7 = 49
// Используйте цикл for

function task9() {
  for ( var i = 1; i < 8; i++ ) {
    var task9 = document.createElement( 'div' );
    task9.className = "task";
    task9.id = "task9Id";
    var conclusion = ( "Квадрат " + i + " = " + i * i );
    task9.innerHTML = ( conclusion );
    idTask9.appendChild( task9 );
  }
}

//После, создайте функцию,
//  которая предлагает ввести два числа и выводит их сумму.
// P.S. Решите эту задачу двумя способами.

function task9Add() {
  var a = +prompt( "Введите первое число", "" );
  var b = +prompt( "Введите второе число", "" );
  alert( 'option #1 -> ' + "Всего получилось: " + ( a + b ) );
}

function sum() {
  var c = prompt('Введите первое число', '');
  var d = prompt('Введите второе число', '');
  var resultSum = Number( c ) + Number( d ); {
    if ( c != Number( c ) || d != Number( d ) ) {
      alert( 'option #2 : ' + 'Мы просили числа!' );
    } else {
      alert( 'option #2 : ' + resultSum );
      alert( 'option #3 : ' + sumFor( +c, +d ) );
      alert( 'option #4 : ' + sumTo( +c, +d ) );
      alert( 'option #5 : ' + superSumClear(c, d) );
      alert( 'option #6 : ' + sumT( +c, +d ) );
    }
  }
}


function sumFor() {
  let result = 0;
  let elements = Array.from( arguments );
  for ( let i = elements.length - 1; i >= 0; i-- ) {
    result += elements[i];
  }
  return result;
}
// function sumFor(){
// return Array.from( arguments).reduce(( a, b ) => a + b, 0 );
// }

// console.log( sumFor() );
// console.log( sumFor(1,1) );
// console.log( sumFor(1,1) );


function sumTo( a, b, c = 0 ) {
  return a + b + c;
}
// console.log( sumTo(1 ,2) );
// console.log( sumTo(1 ,2 ,3) );


function sumT( a, b, c ) {
  if ( !c ) {
    c = 0;
  }
  return a + b + c;
}
// console.log( sumT(1,1) );
// console.log( sumT(1 ,2 ,3) );

function clear( elements ) //функция очистки
{
  return elements.filter( ( el ) => !isNaN( Number( el ) ) )
}

function superSumClear() {
  return clear( Array.from( arguments ) ).reduce( ( a, b ) => Number( a ) + Number( b ), 0 )
}


// function task9Add () {
//     var task9 = document.createElement( 'div' );
//     task9.className = "taskAdd";
//     layout.appendChild( task9 );
//     task9Id.innerHTML = ( result );
//     }
//         }
//task9Add();
//если чтот то в цсс вкл клаcс


//задача № 10
// Замените for на while
// for ( var i = 0; i < 3; i++ ) {
//     alert( "номер " + i + "!" );
// }

function task10() {

  var i = 0;
  while ( i < 3 ) {
    alert( "номер " + i + "!" );
    i++;
  }
}



// });

//the end
