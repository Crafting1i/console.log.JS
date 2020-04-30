//Вывод одной строки с оформлением
var str = 'Главный вопрос жизни вселенной и всего такого';
console.log ( '%c%s', 'color: green; font: 1.2rem/1 Tahoma;', str );

// Вывод строки с CSS оформлением
var str = 'Главный вопрос жизни вселенной и всего такого';
var style = ['padding: 1rem;',
             'background: linear-gradient( gold, orangered);',
             'text-shadow: 0 2px orangered;',
             'font: 1.3rem/3 Georgia;',
             'color: white;'].join('');

console.log ( '%c%s', style, str );

//Стиль с функцией на h1, h2, h3, bold, warn
var consoleStyles = {
    'h1': 'font: 2.5em/1 Arial; color: crimson;',
    'h2': 'font: 2em/1 Arial; color: orangered;',
    'h3': 'font: 1.5em/1 Arial; color: olivedrab;',
    'bold': 'font: bold 1.3em/1 Arial; color: midnightblue;',
    'warn': 'padding: 0 .5rem; background: crimson; font: 1.6em/1 Arial; color: white;'
};
function log ( msg, style ) {
    if ( !style || !consoleStyles[ style ] ) {
        style = 'bold';
    }
    console.log ( '%c' + msg, consoleStyles[ style ] );
}
log ( 'Заголовок 1', 'h1' );
log ( 'Заголовок 2', 'h2' );
log ( 'Заголовок 3', 'h3' );
log ( 'Жирный текст', 'bold' );
log ( 'Ошибка', 'warn' );

//Раскраска строчки
var styles = [
'background: red',
'background: orange',
'background: gold',
'background: yellowgreen',
'background: skyblue',
'background: steelblue',
'background: darkviolet'
];
console.log ( '%c R %c A %c I %c N %c B %c O %c W ',
    styles[0], styles[1], styles[2], styles[3],
    styles[4], styles[5], styles[6] );

//Другие версии вывода оповещений в консоли
console.info ( 'your text' );
console.warn ( 'your text' );
console.error ( 'Houston, we have a problem' );

//Групповое оповещение
console.group ( 'Animals' );
console.log ( 'cat' );
console.log ( 'dog' );
console.groupEnd ();
