function validatePrimeNumber(input) {
    if (input >= 0) {
        console.log('input is a number', input);
        for (let index = 0; index <= Math.sqrt(input); index++) {
            if (index > 1 && index != input) {
                if (input % index == 0) {
                    console.log('found a factor:', index);
                    return false;
                }
            }
        }
        console.log('number is prime:', input)
        return true;
    }
    else {
        console.log('input value must be a number');
        return false;
    }
}
function onSubmit() {
    const input = document.querySelector('input');
    const value = input.value;
    const result = validatePrimeNumber(value);

    if (result == true) {
        alert('value is a prime number');
    }
    if (result == false) {
        alert('value is not a prime number');
    }
} 