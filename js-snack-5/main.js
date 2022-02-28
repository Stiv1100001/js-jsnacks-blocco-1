const result = document.getElementById('result');

const numbers = [];

for (let i = 0; i < 6; i++) {
  const number = parseInt(prompt('Inserisci un numero'));

  if (number % 2 !== 0) {
    numbers.push(number);
  }
}

result.innerHTML = `I numeri dispari inseriti sono: ${numbers.join(', ')}`;
