const result = document.getElementById('result');
let value = 0;

for (let i = 0; i < 10; i++) {
  value += parseInt(prompt(`Inserisci un numero (${i + 1}/10)`));
}

result.innerHTML = `La somma è ${value}`;
