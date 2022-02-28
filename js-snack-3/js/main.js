const parola1 = prompt('Inserisci una parola').trim();
const parola2 = prompt("Inserisci un'altra parola").trim();

const result = document.getElementById('result');

if (parola1.length > parola2.length) {
  result.innerHTML = `È più lunga la parola ${parola1}`;
} else if (parola1.length < parola2.length) {
  result.innerHTML = `È più lunga la parola ${parola2}`;
} else {
  result.innerHTML = `Le parole sono lunghe uguali`;
}
