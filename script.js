const userNumInput = prompt("Enter an integer");
if (userNumInput === null) {
    alert(`You're canceled`);
} else if (userNumInput.trim() === '') {
    alert('You entered empty numbers');
} else if (isNaN(Number(userNumInput))) {
    alert(`It's must be a number`);
} else {
    const num = Number(userNumInput)
    if (num <= 1) {
        alert("It's not a prime number");
    } else if (!Number.isInteger(num)) {
        alert("It's not an integer");
    } else {
        let isPrime = true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            alert("It's a prime number");
        } else {
            alert("It's not a prime number");
        }
    }
}