 let f = (a = 1, b = 2, ...c) => {
    // c is an array.
    c.push(a);
    c.push(b);
    c.sort();				//sort() on c
    return c;
}

console.log(f(55, 77, 3, 4, 5, 6, 7, 8));			//Output: [3, 4,]