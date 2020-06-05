function sum(a, b) {
    return a + b
}

// "a" + "b" => "ab"
// 1 + 1 => 2

const button = document.getElementById("button-sum")


button.addEventListener("click", function(event) {
    const inputA = document.getElementById("input-a")
    const inputB = document.getElementById("input-b")
    const inputResult = document.getElementById("input-result")


    // int => Integer = Number = 1, 1000, 1000000
    const valueA = parseInt(inputA.value)
    const valueB = parseInt(inputB.value)

    const result = sum(valueA, valueB)

    inputResult.value = result
})