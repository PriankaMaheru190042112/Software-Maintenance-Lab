// advance.js

function Add(a, b) {
     return a + b;
 }
 
 function Subtract(a, b) {
     return a - b;
 }
 
 function Multiply(a, b) {
     return a * b;
 }
 
 function Divide(a, b) {
     if(b === 0) throw new Error('Divide by zero');
     return a / b;
 }
 
 function Pow(x, n) {
     return Math.pow(x, n);
 }
 
 function Modulo(a, b) {
     return a % b;
 }
 
 module.exports = {
     Add,
     Subtract,
     Multiply,
     Divide,
     Pow,
     Modulo
 };
 