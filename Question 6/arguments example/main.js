function f() {									//arguments
    let c = 0;
    for (let i = 0; i < arguments.length; i++)
        c += arguments[i];
    return c;
}

function g(x, y) {
    let c = x + y;
    return c;
}

console.log(f(1, 2, 3, 4, 5));								//Output 15

console.log(g.apply(0, [1, 2]));							// apply