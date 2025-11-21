function inputTextCount(message = '', search = '') {
    console.log('input value received:', message);
    console.log('select value received:', search);
    let count = 0;
    while (message.includes(search)) {
        console.log('Found selected text in input');
        count++;
        message = message.replace(search, '');
        console.log('updating input value:', message);
    }
    return count;
}
function onSubmit() {
    const select = document.querySelector('input');
    const result = inputTextCount('Hello World! Hello Univers!', select.value);
    alert('count of selected text: ' + result);
}
