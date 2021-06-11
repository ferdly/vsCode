//nullishCoalescing_Quokka.js
p1 = 100;
t1 = 7 / 100;
d1 = 'Apple Peeler';

p2 = 100;
t2 =  0;
d2 = 'Blanket';

p3 = 100;
t3 = 7 / 100;
d3 = '';

p4 = undefined/100;
t4 = 0.1;
d4 = 'Champagne';

p5 = 19.99;
t5 = 'hello';
d5 = 'Doughnuts';

function withTax(price, tax, descr) {
    console.log(price);
    console.log(tax);
    console.log(descr);
    price = price || 1;
    tax = tax || 0.05;
    descr = descr || 'Thing';
    string = `The ${descr} cost $${price.toFixed(2)}. That's $${(price*(1 + tax)).toFixed(2)} with tax.`;
    console.log(string);
    return string;
}
function withTaxNullish(price, tax, descr) {
    console.log(price);
    console.log(tax);
    console.log(descr);
    price = price ?? 1;
    tax = tax ?? 0.05;
    descr = descr ?? 'Thing';
    string = `The ${descr} cost $${price.toFixed(2)}. That's $${(price*(1 + tax)).toFixed(2)} with tax.`;
    console.log(string);
    return string;
}
function withTaxNullishNaN(price, tax, descr) {
    console.log(price);
    console.log(tax);
    console.log(descr);
    price = isNaN (price) ? 1 : price;
    price = price ?? 1;
    tax = isNaN (tax) ? 0.05 : tax;
    tax = tax ?? 0.05;
    descr = descr ?? 'Thing';
    string = `The ${descr} cost $${price.toFixed(2)}. That's $${(price*(1 + tax)).toFixed(2)} with tax.`;
    console.log(string);
    return string;
}
//< attemped Loop with eval()> all hell broke loos with ??
// let x = 10;
// let y = 20;
// let a = eval("x");
// console.log(a);
//</ attemped Loop with eval()>
string = withTax(p1, t1, d1);
stringNullish = withTaxNullish(p1, t1, d1);
stringNullishNaN = withTaxNullishNaN(p1, t1, d1);
console.log(string);
console.log(stringNullish);
console.log(stringNullishNaN);