function mygcd(a, b) {
    if (b === 0) {
        return a;
    }
    return mygcd(b, a % b);
};

console.log(mygcd(30, 12))