const result = document.getElementById('result');

document.getElementById('submit').addEventListener('click', () => {
  const parola1 = document.getElementById('input-uno').value;
  const parola2 = document.getElementById('input-due').value;

  if (parola1.length > parola2.length) {
    result.innerHTML = `È più lunga la parola ${parola1}`;
  } else if (parola1.length < parola2.length) {
    result.innerHTML = `È più lunga la parola ${parola2}`;
  } else {
    result.innerHTML = `Le parole sono lunghe uguali`;
  }
});
