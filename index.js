import sum from './sum/index.js'

function sumCalculator () {
  const [ firstNumber, secondNumber ] = process.argv
    .map((val) => parseInt(val))
    .filter(argument => !isNaN(argument))

  function isValidNumber(number) {
    return !isNaN(number)
  }
  
  if (isValidNumber(firstNumber) && isValidNumber(secondNumber)) {
    return sum(firstNumber, secondNumber)
  }
}

console.log(sumCalculator(10, 5))