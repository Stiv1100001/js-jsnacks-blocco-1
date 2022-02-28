const result = document.getElementById('result');
const invites = [
  'Stefano',
  'Mario',
  'Luca',
  'Paolo',
  'Piero',
  'Franco',
  'Luigi',
  'Sandra',
  'Maria',
];

const name = prompt('Inserisci il tuo nome').trim();

if (invites.includes(name)) {
  result.innerHTML = `Benvenuto ${name}! Sei nella lista degli inviati`;

  const img = document.createElement('img');
  img.src = 'img/gatsby.jpg';
  document.querySelector('main').appendChild(img);
} else {
  result.innerHTML = `Chi sei, chi ti conosce? Guardiieeeeee`;
}
