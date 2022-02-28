const result = document.getElementById('result');

document.getElementById('submit').addEventListener('click', () => {
  const parola1 = document.getElementById('input-uno').value.trim();
  const parola2 = document.getElementById('input-due').value.trim();

  if (parola1.length > parola2.length) {
    result.innerHTML = `${parola1} ${parola2}`;
  } else if (parola1.length < parola2.length) {
    result.innerHTML = `${parola2} ${parola1}`;
  } else {
    result.innerHTML = `Le parole sono lunghe uguali`;
  }
});
