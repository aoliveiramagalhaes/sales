function sum(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}
// "a" + "b" => "ab"
// 1 + 1 => 2

const buttonSum = document.getElementById("button-sum")
const buttonSubtract = document.getElementById("button-subtract")
const buttonMultiply = document.getElementById("button-multiply")
const buttonDivide = document.getElementById("button-divide")

buttonSum.addEventListener("click", function(event) {
    const inputA = document.getElementById("input-a")
    const inputB = document.getElementById("input-b")   
    const inputResult = document.getElementById("input-result")


    // int => Integer = Number = 1, 1000, 1000000
    const valueA = parseInt(inputA.value)
    const valueB = parseInt(inputB.value)

    const result = sum(valueA, valueB)

    inputResult.value = result
})

buttonSubtract.addEventListener("click", function(event) {
    const inputA = document.getElementById("input-a")
    const inputB = document.getElementById("input-b")
    const inputResult = document.getElementById("input-result")


    // int => Integer = Number = 1, 1000, 1000000
    const valueA = parseInt(inputA.value)
    const valueB = parseInt(inputB.value)

    const result = subtract(valueA, valueB)

    inputResult.value = result
})


buttonMultiply.addEventListener("click", function(event) {
    const inputA = document.getElementById("input-a")
    const inputB = document.getElementById("input-b")
    const inputResult = document.getElementById("input-result")


    // int => Integer = Number = 1, 1000, 1000000
    const valueA = parseInt(inputA.value)
    const valueB = parseInt(inputB.value)

    const result = multiply(valueA, valueB)

    inputResult.value = result
})

buttonDivide.addEventListener("click", function(event) {
    const inputA = document.getElementById("input-a")
    const inputB = document.getElementById("input-b")
    const inputResult = document.getElementById("input-result")


    // int => Integer = Number = 1, 1000, 1000000
    const valueA = parseInt(inputA.value)
    const valueB = parseInt(inputB.value)

    const result = divide(valueA, valueB)

    inputResult.value = result
})