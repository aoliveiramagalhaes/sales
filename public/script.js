function concat(arg1, arg2) {
    return `${arg1} ${arg2}`
}

function hello(name) {
    const msg = concat('New Test', name)
    alert(msg)
}

function sum(a, b) {
    return a + b
}

// const result = sum(1, 2)
// result => 3

// hello(result)
hello('Done')
hello('Done again')