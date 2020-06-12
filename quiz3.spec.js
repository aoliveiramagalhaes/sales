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