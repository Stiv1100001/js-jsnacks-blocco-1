const number1 = parseInt(prompt(`Inserisci il primo numero`));
const number2 = parseInt(prompt(`Inserisci il secondo numero`));

const result = document.getElementById(`result`);

if (isNaN(number1) || isNaN(number2)) {
  result.innerHTML = `Uno dei due valori inseriti non è un numero`;
} else if (number1 > number2) {
  result.innerHTML = `Il primo numero è più grande (${number1})`;
} else if (number2 > number1) {
  result.innerHTML = `Il secondo numero è più grande (${number2})`;
} else {
  result.innerHTML = `I numeri sono uguali`;
}
