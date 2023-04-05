const fibonacci = function fibonacci(n) {
    n = parseInt(n);
    if (isNaN(n) || n < 0){
        return 'OOPS';
    } else if (n === 0 || n ===1 ){
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci (n - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
