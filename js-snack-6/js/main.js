const result = document.getElementById('result');

const number = prompt('Inserisci un numero di 6 cifre');

let sum = 0;

for (let i = 0; i < number.length; i++) {
  sum += parseInt(number.charAt(i));
}

result.innerHTML = `La somma è: ${sum}`;
