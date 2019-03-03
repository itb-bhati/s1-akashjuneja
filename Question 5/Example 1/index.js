let f = (...a) => {
    let x = 0;
    for (let i = 0; i < a.length; i++)			// length property of a.
        x += a[i];
    return x;
}

console.log(f(1, 2, 3, 4, 5, 6, 7, 8));			// Outputs 36
