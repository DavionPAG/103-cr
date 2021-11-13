'use strict'

let results = document.getElementById('results')

document.getElementById("calc").addEventListener("click", calc);


function calc() {
  let num1 = prompt('Enter a number');
  let num2 = prompt('Enter anonther number');

  results.innerHTML = 
    `<ul>
      <li>${num1} + ${num2} = ${parseInt(num1) + parseInt(num2)}</li>
      <li>${num1} - ${num2} = ${num1 - num2}</li>
      <li>${num1} / ${num2} = ${num1 / num2}</li>
      <li>${num1} * ${num2} = ${num1 * num2}</li>
    </ul>`
}


