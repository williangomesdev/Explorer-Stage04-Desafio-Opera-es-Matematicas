let numberOne = Number(prompt("Digite o primeiro número: "));
let numberTwo = Number(prompt("Digite o segundo número: "));

const sum = numberOne + numberTwo;
const sub = numberOne - numberTwo;
const mult = numberOne * numberTwo;
const div = numberOne / numberTwo;
const rest = numberOne % numberTwo;
const restSum = sum % 2;
let evenOrOdd = "";
let identical = "";

const compareSum = function () {
  if (restSum != 0) {
    evenOrOdd = "A soma dos dois números é impar:";
  } else {
    evenOrOdd = "A soma dos dois números é par:";
  }

  if (numberOne == numberTwo) {
    identical = "Os números inseridos são iguais";
  } else {
    identical = "Os números inseridos são diferentes";
  }
};

compareSum();

alert(`A soma dos dois números é: ${sum} `);
alert(`A subtração dos dois números é: ${sub} `);
alert(`A multiplicação dos dois números é: ${mult} `);
alert(`A divisão dos dois números é: ${div} `);
alert(`O resto da divisão dos dois números é: ${rest} `);
alert(`${evenOrOdd} ${sum}`);
alert(`${identical} `);