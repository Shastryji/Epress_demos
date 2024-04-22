function square(a)
{
    return a*a;
}

function sumOfSomething(a,b,fs)
{
    let sq1 = fs(a);
    let sq2 = fs(b);
    return sq1+sq2;
}

let a=10;
let b=20;
let ans = sumOfSomething(a,b,square)
console.log(ans);