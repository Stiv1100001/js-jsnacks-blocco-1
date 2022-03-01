const result = document.getElementById('result');

const myArray = [];
let sum = 0,
  average;

for (let i = 0; i < 10; i++) {
  myArray.push(Math.floor(Math.random() * 100 + 1));
}

for (let num of myArray) {
  sum += num;
}

average = sum / myArray.length;

result.innerHTML = `Somma: ${sum}, Valor medio: ${average}`;
