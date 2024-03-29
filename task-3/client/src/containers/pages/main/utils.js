export function chooseDate(el){
    console.log(el)
    console.log(123)
}
export  function getDay(date) { // получить номер дня недели, от 0(пн) до 6(вс)
    var day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}
export  function createCalendar(id, year, month) {
    var elem = document.getElementById(id);
    var mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
    var d = new Date(year, mon);
    var table = `
      <table>
        <tr>
            <th>пн</th>
            <th>вт</th>
            <th>ср</th>
            <th>чт</th>
            <th>пт</th>
            <th>сб</th>
            <th>вс</th>
            </tr>
        <tr>`;
    // заполнить первый ряд от понедельника
    // и до дня, с которого начинается месяц
    // * * * | 1  2  3  4
    for (var i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }
    while (d.getMonth() == mon) {
        table += '<td data-date='+d.getTime()+' class="calendar-date-item" >' + d.getDate() + '</td>';
        if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
            table += '</tr><tr>';
        }
        d.setDate(d.getDate() + 1);
    }
    table += '</tr></table>';
    elem.innerHTML = table;
}