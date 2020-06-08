it("quiz 1", () => {
    let fruits = []
    fruits.push('orange')

    expect(fruits).toEqual(['orange', 'apple', 'mango'])
});

it("quiz 2", () => {
    let n = 1
    let array = []

    for (let i = 0; i < n; i++) {
        array.push(n)
    }

    expect(array).toEqual([0, 1, 2, 3, 4])
});

it("quiz 3", () => {
    let n = 'hola'

    if (n === 'hi') {
        n = 'hello'
    }

    expect(n).toEqual('hello')
});


it("quiz 4", () => {
    function sum(a, b) {
        // ???
    }

    expect(sum(1, 3)).toEqual(4)
});

it("quiz 5", () => {
    function nextNumber(a) {
        // ???
    }

    expect(nextNumber(3)).toEqual(4)
    expect(nextNumber(4)).toEqual(5)
    expect(nextNumber(10)).toEqual(11)
});


it("quiz 6", () => {
    let n = 10
    let i = 0

    for (i = 0; i < n; i++) {
        if (i === 5) {
            // search how to break a JavaScript for-loop
        }
    }

    expect(i).toEqual(5)
});

it("quiz 7", () => {
    let fruits = ['orange']

    function addFruit(fruits, name) {
        // search JavaScript array push
        return fruits
    }

    expect(addFruit(fruits, 'mango')).toEqual(['orage', 'mango'])
    expect(addFruit(fruits, 'apple')).toEqual(['orage', 'mango', 'apple'])
});

it("quiz 8", () => {
    let array = [1, 123, 300, 490, 330]

    function findArrayIndex(num) {
        for (i = 0; i < array.length; i++) {
            if (array[i] === num) {
                // return ???
            }
        }
    }

    expect(findArrayIndex(123)).toEqual(1)
    expect(findArrayIndex(330)).toEqual(4)
});

it("quiz 9", () => {
    let array = ['pablo', 'aline', 'mia']

    function findArrayIndex(num) {
        for (i = 0; i < array.length; i++) {
            if (array[i] === num) {
                // return ???
            }
        }
    }

    expect(findArrayIndex('pablo')).toEqual(0)
    expect(findArrayIndex('mia')).toEqual(2)
});