function fib(n) {
    if (n <= 0) return 0;

    const go = (a,b,n) => n === 0 ? a : go(b, a+b, n-1);
    return go(0, 1, n);
}

console.log(fib(1_000));