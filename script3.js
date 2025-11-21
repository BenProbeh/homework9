function modifyInputText(input = '') {
    let result = '';
    console.log('input value received:', input);
    for (let index = 0; index < input.length; index++) {
        const current = input[index];
        console.log('current character:', current);
        if (current == current.toUpperCase()) {
            console.log('character is uppercase, adding space before it.');
            result += ' ' + current;
        }
        else {
            result += current;
        }
        console.log('result so far:', result);
    }
    return result;
}
function onSubmit() {
    const input = document.querySelector('input');
    const value = input.value;
    const result = modifyInputText(value);
    alert('modified text: ' + result);
} 