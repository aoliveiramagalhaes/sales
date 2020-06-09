it("quiz 1", () => {
    let fruits = []
    // Google JavaScript array push 
    fruits.push('orange', 'apple', 'mango');

    expect(fruits).toEqual(['orange', 'apple', 'mango'])
});

it("quiz 2", () => {
    let laps = []

    // walk around the block
    for (let i = 0; i < 3; i++) {
        // save lap in an array
        laps.push(i)
    }

    expect(laps).toEqual([0, 1, 2])
});

it("quiz 2.1", () => {
    let laps = []

    for (let i = 0; i < 10; i++) {
    }

    expect(laps).toEqual([])
});

it("quiz 2.2", () => {
    let lapCounter = 0

    for (let i = 0; i < 4; i++) { // 0 + 1, 1 + 1, 2 + 1
        lapCounter += 1 // += => lapCounter = lapCounter + N
    }

    expect(lapCounter).toEqual(4)
});

it("quiz 2.3", () => {
    let lapCounter = 0

    // for (initialization; condition to keep loop; after loop - usually increment + 1)
    for (let i = 0; i < 8; i++) {
        // 0 + 0, 0 + 1, 1 + 2, 3 + 3 (i), 6 + 4
        // 10 + 5, 15 + 6, 21 + 7
        lapCounter += i // += => lapCounter = lapCounter + N
    }

    expect(lapCounter).toEqual(28)
});

it("quiz 3", () => {
    let n = 'hola' // o valor de n eh hola

    // === or == is equal
    // a = 'test'  /// a === 'test' 
    if (n === 'hola') {  // se n for hola, o valor de n sera hello. Como n sera hello, o resultado eh verdadeiro, eh hello
        n = "hello"
    }

    expect(n).toEqual('hello')
});


it("quiz 4", () => {
    function sum(a, b) {
        return a + b
    }

    expect(sum(1, 3)).toEqual(4)
    expect(sum(5, 5)).toEqual(10)

});

it("quiz 5", () => {
    function nextNumber(a) {
        return a + 1
    }

    expect(nextNumber(3)).toEqual(4)
    expect(nextNumber(4)).toEqual(5)
    expect(nextNumber(10)).toEqual(11)
});


it("quiz 5.1", () => {
    function previousNumber(a) {
        return a - 1
    }

    expect(previousNumber(3)).toEqual(2)
    expect(previousNumber(4)).toEqual(3)
    expect(previousNumber(10)).toEqual(9)
});


it("quiz 6", () => {
    let n = 10
    let i = 0

    for (i = 0; i < n; i++) {
        if (i === 5) {
            break
        }
    }

    expect(i).toEqual(5)
});

it("quiz 7", () => {
    let fruits = ['orange']

    // function sum(a, b)
    // fruits = a, name = b
    function addFruit(fruits, name) {
        fruits.push(name)
        return fruits
    }

    expect(addFruit(fruits, 'mango')).toEqual(['orange', 'mango'])
    expect(addFruit(fruits, 'apple')).toEqual(['orange', 'mango', 'apple'])
});

it("quiz 8", () => {
    let array = [1, 123, 300, 490, 330] // elements 5 (length: 5)

    // function sum(a, b)
    function findArrayIndex(number) {
        for (let i = 0; i < array.length; i++) {
            // i = 0
            // array[i] => 1
            // i = 1
            // array[i] => 123
            // i = 2
            // array[i] => 300
            // i = 3
            // array[i] => 490
            // i = 4
            // array[i] => 330

            if (array[i] === number) {
                return i
            }
        }
    }

    expect(findArrayIndex(123)).toEqual(1)
    expect(findArrayIndex(330)).toEqual(4)
});

it("quiz 8.1", () => {
    let array = [10, 20, 30, 40, 50, 60, 70] // elements 7 (length: 7)

    function findArrayNextIndex(number) {
        for (let i = 0; i < array.length; i++) {
            // i = 0
            // array[i] => 10
            // i = 1
            // array[i] => 20
            // i = 2
            // array[i] => 30
            // i = 3
            // array[i] => 40
            // i = 4
            // array[i] => 50

            if (array[i] > number) {
                return i
            }
        }
    }

    expect(findArrayNextIndex(20)).toEqual(2)
    expect(findArrayNextIndex(40)).toEqual(4)
});

// function sum(a, b, c) {
//     return a + b + c
// }
// sum(10, 10, 10)

// function sum(a) {
//     return a + 10;
// }

// sum(10)
// sum(20)

it("quiz 9", () => {
    let array = ['pablo', 'aline', 'mia'] // length: 3

    function findArrayIndex(string) {

        for (let i = 0; i < array.length; i++) {
            if (array[i] === string) {
                return i
            }
        }

    }

    expect(findArrayIndex('pablo')).toEqual(0)
    expect(findArrayIndex('aline')).toEqual(1)
    expect(findArrayIndex('mia')).toEqual(2)
});