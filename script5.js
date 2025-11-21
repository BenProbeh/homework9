function inputTextSort(text = '') {
    console.log('input value received:', text);
    let select = text.split('');
    for (let outer = 0; outer < select.length; outer++) {
        console.log('outer loop iteration:', outer);
        for (let inner = 0; inner < select.length - 1; inner++) {
            if (select[inner] > select[inner + 1]) {
                console.log('swapping characters:', select[inner], select[inner + 1]);
                let temp = select[inner];
                select[inner] = select[inner + 1];
                select[inner + 1] = temp;
                console.log('updated array:', select);
            }
        }

    }
    return select.join('');
}
function onSubmit() {
    const select = document.querySelector('input');
    const result = inputTextSort(select.value);
    alert('sored text ' + result);
}
