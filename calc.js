let number1 = '';
let number2 = '';
let result = '';
let operator = undefined;
const output = document.getElementById('calc-input');

document.querySelectorAll('.btn-number').forEach((btn) => btn.onclick = function (event) {
    const select = btn.getAttribute('data-value');
    console.log('btn-number clicked', { select, number1, number2, operator });

    if (operator == undefined) number1 += select;
    else number2 = select;

    result += select;
    output.value = result;
});
document.querySelectorAll('.btn-action').forEach((btn) => btn.onclick = function (event) {
    const select = btn.getAttribute('data-value');
    console.log('btn-action clicked', { select, number1, number2, operator });

    if (select == "C") {
        clearCalc();
        output.value = '';
    }
    else if (number1 != '') {
        operator = select;
        result = number1 + ' ' + operator + ' ' + number2;
        output.value = result;
    }
});
document.querySelectorAll('.btn-submit').forEach((btn) => btn.onclick = function (event) {
    const select = btn.getAttribute('data-value');
    console.log('btn-submit clicked', { select, number1, number2, operator });

    let message = '';
    if (operator == '/') message = Number(number1) / Number(number2);
    if (operator == '*') message = Number(number1) * Number(number2);
    if (operator == '-') message = Number(number1) - Number(number2);
    if (operator == '+') message = Number(number1) + Number(number2);


    if (operator == '/') {
        if (number1 == 0 || number2 == 0) {
            console.log('Error');
            message = 'ERROR!!!';
        }
    }
    output.value = message;
    clearCalc();
});

function clearCalc() {
    number1 = '';
    number2 = '';
    result = '';
    operator = undefined;
}