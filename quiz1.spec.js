it("quiz 1", () => {
    let fruits = ['orange', 'apple', 'mango']
    fruits.splice(1, 2, 'kiwi');

    expect(fruits).toEqual(['orange', 'kiwi'])
});

it("quiz 2", () => {
    let fruits = ['orange', 'apple', 'mango']
    fruits.pop()

    expect(fruits).toEqual(['orange', 'apple'])
});

it("quiz 2.1", () => {
    let fruits = ['orange', 'apple', 'mango']
    fruits.splice(1,1);

    expect(fruits).toEqual(['orange', 'mango'])
});

it("quiz 3", () => {
    let msg = "Hello"
    msg = msg + ", Aline"

    expect(msg).toEqual("Hello, Aline")
});

it("quiz 4", () => {
    let count = 0
    count = count + 10

    expect(count).toEqual(10)
});