const score = 400
// console.log(score)

const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8907;
// console.log(otherNumber.toPrecision(4))

const hundred= 1000000;
// console.log(hundred.toLocaleString('en-INz'));


// ========================
// JavaScript Math Cheat Sheet
// ========================

// ✅ Properties (Constants)
console.log(Math.PI);      // PI -> π ki value deta h (3.14159...)
console.log(Math.E);       // E -> Euler’s number (2.718...)
console.log(Math.SQRT2);   // SQRT2 -> √2 ki value
console.log(Math.SQRT1_2); // SQRT1_2 -> 1/√2 ki value
console.log(Math.LN2);     // LN2 -> natural log of 2
console.log(Math.LN10);    // LN10 -> natural log of 10
console.log(Math.LOG2E);   // LOG2E -> log base 2 of e
console.log(Math.LOG10E);  // LOG10E -> log base 10 of e

// ✅ Rounding Methods
console.log(Math.round(4.6));  // round -> nearest integer (4.6 → 5)
console.log(Math.ceil(4.2));   // ceil -> hamesha upar round (4.2 → 5)
console.log(Math.floor(4.9));  // floor -> hamesha niche round (4.9 → 4)
console.log(Math.trunc(4.9));  // trunc -> sirf integer part deta h (4.9 → 4)

// ✅ Absolute & Sign
console.log(Math.abs(-5));   // abs -> minus hata deta h (|-5| = 5)
console.log(Math.sign(-5));  // sign -> -1 agar negative ho, 1 agar positive ho, 0 agar 0 ho

// ✅ Powers & Roots
console.log(Math.pow(2, 3));   // pow -> a^b (2^3 = 8)
console.log(Math.sqrt(25));    // sqrt -> square root (√25 = 5)
console.log(Math.cbrt(27));    // cbrt -> cube root (∛27 = 3)

// ✅ Min / Max
console.log(Math.min(3, 7, 2, 9)); // min -> sabse chhota number
console.log(Math.max(3, 7, 2, 9)); // max -> sabse bara number

// ✅ Random
console.log(Math.random());  
// random -> 0 aur 1 ke beech random decimal value deta h (har bar alag hoga)

// ✅ Logs & Exponentials
console.log(Math.log(10));    // log -> natural log (ln(x)) deta h
console.log(Math.log10(100)); // log10 -> base 10 log (log10(100) = 2)
console.log(Math.log2(8));    // log2 -> base 2 log (log2(8) = 3)
console.log(Math.exp(1));     // exp -> e^x (exp(1) = 2.718...)

// ✅ Trigonometry (Radians me)
console.log(Math.sin(Math.PI/2));  // sin -> sine value (π/2 = 1)
console.log(Math.cos(0));          // cos -> cosine value (cos(0) = 1)
console.log(Math.tan(Math.PI/4));  // tan -> tangent value (tan(π/4) = 1)

console.log(Math.asin(1));   // asin -> inverse sine (sin^-1)
console.log(Math.acos(1));   // acos -> inverse cosine (cos^-1)
console.log(Math.atan(1));   // atan -> inverse tangent (tan^-1)
console.log(Math.atan2(1, 1)); // atan2 -> point (x, y) ka angle return karta h

// ✅ Hyperbolic Functions
console.log(Math.sinh(1));   // sinh -> hyperbolic sine
console.log(Math.cosh(1));   // cosh -> hyperbolic cosine
console.log(Math.tanh(1));   // tanh -> hyperbolic tangent
console.log(Math.asinh(1));  // asinh -> inverse hyperbolic sine
console.log(Math.acosh(2));  // acosh -> inverse hyperbolic cosine
console.log(Math.atanh(0.5));// atanh -> inverse hyperbolic tangent





