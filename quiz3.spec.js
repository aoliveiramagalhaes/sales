it("checks if a number is greater than five", () => {
    function isGreaterThanFive(number) {
        // return "yes" or "no"

        if (number > 5) {
            return "yes"
        } else {
            return "no"
        }
    }
    expect(isGreaterThanFive(3)).toEqual("no")
    expect(isGreaterThanFive(6)).toEqual("yes")
    expect(isGreaterThanFive(5)).toEqual("no")
});



it("checks if a number is greater than another", () => {
    function isGreaterThanAnother(number, another) {
        // return "yes" or "no"
        if (number > another) {
            return "yes"
        } else {
            return "no"
        }
    }
    expect(isGreaterThanAnother(3, 5)).toEqual("no")
    expect(isGreaterThanAnother(6, 2)).toEqual("yes")
    expect(isGreaterThanAnother(1, 1)).toEqual("no")
});


it("returns NPS score", () => {
    function nps(score) {
        if (score >= 0 && score <= 6) {
            return "detractors"
        } else if (score >= 7 && score <= 8) {
            return "passives"
        } else {
            return "promotors"
        }
    }
    expect(nps(3)).toEqual("detractors")
    expect(nps(8)).toEqual("passives")
    expect(nps(9)).toEqual("promotors")
});

it("returns occurrences of word", () => {
    function countOccurrences(array, word) {
        let count = 0

        for (let i = 0; i < array.length; i++) {
            if (array[i] === word) {
                count++
            }
        }    

        return count
    }

    expect(countOccurrences(['apple', 'apple', 'melon'], 'melon')).toEqual(1)
    expect(countOccurrences(['apple', 'apple', 'melon'], 'apple')).toEqual(2)
    expect(countOccurrences(['apple', 'apple', 'melon', 'apple', 'kiwi'], 'banana')).toEqual(0)
})

it("returns occurrences of number", () => {
    function countOccurrences(array, number) {
        let count = 0

        for (let i = 0; i < array.length; i++) {
            if (array[i] === number) {
                count++
            }
            
        }

        return count
    }

    expect(countOccurrences([10, 12, 50, 50], 10)).toEqual(1)
    expect(countOccurrences([10, 10, 40, 60], 10)).toEqual(2)
    expect(countOccurrences([10, 60, 30, 20, 90], 80)).toEqual(0)
})

it("returns if odd or even", () => {
    function oddOrEven(number) {
        if(number % 2 === 0) {
            return "even"
        } else {
            return "odd"
        }
    }

    expect(oddOrEven(1)).toEqual("odd")
    expect(oddOrEven(2)).toEqual("even")
})

it("returns occurrences of even number", () => {
    function countEvenNumbers(array) {
        let count = 0

        for (let i = 0; i < array.length; i++) {
            if(array[i] % 2 === 0) {
                count++
            }
            
        }

        return count
    }

    expect(countEvenNumbers([3, 9, 5, 1])).toEqual(0)
    expect(countEvenNumbers([2, 1, 1, 1, 1])).toEqual(1)
    expect(countEvenNumbers([2, 10, 3, 3])).toEqual(2)
})