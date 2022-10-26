"use strict";
// questão 6
class Triangulo {
    constructor(lado_1, lado_2, lado_3) {
        this.l1 = lado_1;
        this.l2 = lado_2;
        this.l3 = lado_3;
    }
    ehTriangulo() {
        return Math.abs(this.l2 - this.l3) < this.l1 && this.l1 < this.l2 + this.l3;
    }
    ehEscaleno() {
        if (this.ehTriangulo()) {
            if (this.l1 != this.l2 && this.l2 != this.l3) {
                return true;
            }
        }
        return false;
    }
    ehEquilatero() {
        if (this.ehTriangulo()) {
            return this.l1 == this.l2 && this.l2 == this.l3;
        }
        return false;
    }
    ehIsosceles() {
        if (this.ehTriangulo()) {
            if (!this.ehEscaleno()) {
                if (!this.ehEquilatero()) {
                    return true;
                }
            }
        }
        return false;
    }
}
let t1 = new Triangulo(5, 5, 5);
let t2 = new Triangulo(3, 4, 5);
let t3 = new Triangulo(4, 4, 5);
console.log(t1.ehEquilatero()); // true
console.log(t1.ehEscaleno()); // false
console.log(t2.ehEscaleno()); // true
console.log(t2.ehIsosceles()); // false
console.log(t3.ehIsosceles()); // true
console.log(t3.ehEquilatero()); // false
