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

function calculator(op) {
    const inputA = document.getElementById("input-a")
    const inputB = document.getElementById("input-b")
    const inputResult = document.getElementById("input-result")
    if (inputA.value === "" || inputB.value === "") {
        alert("Please enter values")
        inputResult.value = ""
        inputA.value = ""
        inputB.value = ""
        return
    }

    // int => Integer = Number = 1, 1000, 1000000. No decimals.
    // parseInt: to let JS know that it's a number, so JS can do the math.
    const valueA = parseInt(inputA.value)
    const valueB = parseInt(inputB.value)

    const result = op(valueA, valueB)

    inputResult.value = result
}

// const inputResult = document.getElementById("input-result") 
// inputResult.value = random()

function random() {
    // Math.random() => 0.40857533243588473 (float)
    // * 5 makes it returns from 0.0 to 5.9
    // parseInt turns 0.0 to 5.9 into 0 to 5
    return parseInt(Math.random() * 5)
}
// "a" + "b" => "ab"
// 1 + 1 => 2
// connect the elements in html with JS.

const buttonSum = document.getElementById("button-sum")
const buttonSubtract = document.getElementById("button-subtract")
const buttonMultiply = document.getElementById("button-multiply")
const buttonDivide = document.getElementById("button-divide")
const buttonRandom = document.getElementById("button-random")

// eventListener: what the button needs to do. In this case, the user needs to click on the /n
// button to make it work.
buttonSum.addEventListener("click", function (event) {
    calculator(sum)
})

buttonSubtract.addEventListener("click", function (event) {
    calculator(subtract)
})

buttonMultiply.addEventListener("click", function (event) {
    calculator(multiply)
})

buttonDivide.addEventListener("click", function (event) {
    calculator(divide)
})

buttonRandom.addEventListener("click", function (event) {
    const inputResult = document.getElementById("input-result")
    inputResult.value = random()
})

