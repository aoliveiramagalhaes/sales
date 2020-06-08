// yarn jest quiz1.spec.js
it("quiz 1", () => {
    let fruits = ["orange", "apple", "mango"]
    fruits.splice(1, 2, "kiwi");

    expect(fruits).toEqual(['orange', 'kiwi'])
});

it("quiz 2", () => {
    let fruits = ["orange", "apple", "mango"]
    fruits.pop();
    expect(fruits).toEqual(['orange', 'apple'])
});

it("quiz 3", () => {
    let msg = "Hello"
    msg += ", Aline"
    expect(msg).toEqual("Hello, Aline")
});

it("quiz 3.1", () => {
    let msg = "Hello"
    msg += ", Aline, Pablo, Mia"
    expect(msg).toEqual("Hello, Aline, Pablo, Mia")
});

it("quiz 4", () => {
    let count = 0
    count += 10
    count = count + 10
    expect(count).toEqual(20)
});

it("quiz 5", () => {
    let count = 3
    // count = count * 3
    count *= 3
    expect(count).toEqual(9)
});