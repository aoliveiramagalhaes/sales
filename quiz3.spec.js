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

it("returns difference in days", () => {
    function dateDiffInDaysFromToday(date) {
        let today = new Date() // today in JS
        let diffInMS = today.getTime() - date.getTime() // difference between two dates in milliseconds

        let diffInSec = diffInMS / 1000 // convert from milliseconds to seconds
        let diffInMin = diffInSec / 60 // convert from sec to min
        let diffInHour = diffInMin / 60
        let diffInDay = diffInHour / 24

        // var diffInDay = diffInMS / (1000 * 3600 * 24)

        return parseInt(diffInDay) // convert float to integer so that we ignore hour diff within days
    }

    expect(dateDiffInDaysFromToday(new Date("06/12/2020"))).toEqual(0)
    expect(dateDiffInDaysFromToday(new Date("06/10/2020"))).toEqual(2)
    expect(dateDiffInDaysFromToday(new Date("05/12/2020"))).toEqual(31)
})


it("returns due date status", () => {
    function getDueDateStatus(today, date) {
        // let today = new Date("06/12/2020") // today in JS
        let diffInMS = date.getTime() - today.getTime() // difference between two dates in milliseconds

        let diffInSec = diffInMS / 1000 // convert from milliseconds to seconds
        let diffInMin = diffInSec / 60 // convert from sec to min
        let diffInHour = diffInMin / 60 // convert min to hour
        let diffInDay = parseInt(diffInHour / 24) // convert hour to day. this is the diff in days 

        //if(diffInDay <= 30) {
        
        if (diffInDay < 30 && diffInDay > 0) {
            return "Due in <30 days"
        } else if (diffInDay < 60 && diffInDay > 0) {
            return "Due in <60 days"
        } else if (diffInDay > 90) {
            return "Due in >90 days"
        } else {
            return "Past Due"
        }
    }
        
    // change date to match with > 90
    expect(getDueDateStatus(new Date("06/12/2020"), new Date("06/15/2020"))).toEqual("Due in <30 days")
    expect(getDueDateStatus(new Date("06/12/2020"), new Date("07/13/2020"))).toEqual("Due in <60 days")
    expect(getDueDateStatus(new Date("06/12/2020"), new Date("09/12/2020"))).toEqual("Due in >90 days")
    expect(getDueDateStatus(new Date("05/12/2020"), new Date("06/11/2020"))).toEqual("Past Due")
    // add expect for 60
    // add expect for 30
    // add expect for past 
})