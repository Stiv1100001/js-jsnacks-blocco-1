const result = document.getElementById('result');

const numbers = prompt('Inserisci un numero di 6 cifre').split('');
let sum = 0;

for (let number of numbers) {
  sum += parseInt(number);
}

result.innerHTML = `La somma è: ${sum}`;
