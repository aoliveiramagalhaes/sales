function concat(arg1, arg2) {
    return `${arg1} ${arg2}`
}

function hello(name) {
    const msg = concat('Hello World,', name)
    alert(msg)
}

function sum(a, b) {
    return a + b
}

// const result = sum(1, 2)
// result => 3

// hello(result)
hello('Aline')
hello('Pablo')