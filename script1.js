function validateIdNumber(input) {
    if (input.length == 9) {
        console.log('input length is valid:', input);
        for (let index = 0; index < input.length; index++) {
            const current = input[index];
            if (current >= 0 && current <= 9) {
                console.log('character is a valid number', { current, index })
                if (index == 8) {
                    console.log('all characters are valid numbers');
                    return true;
                }
            }
            else return false;
        }
    }
    else {
        console.log('input value must be 9 charecters long');
        return false;
    }
}
function onSubmit() {
    const input = document.querySelector('input');
    const value = input.value;
    const result = validateIdNumber(value);

    if (result == true) {
        alert('id number is valid');
    }
    if (result == false) {
        alert('id number is invalid');
    }
} 