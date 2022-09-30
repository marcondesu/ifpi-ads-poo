// questão 6
var Triangulo = /** @class */ (function () {
    function Triangulo(lado_1, lado_2, lado_3) {
        this.l1 = lado_1;
        this.l2 = lado_2;
        this.l3 = lado_3;
    }
    Triangulo.prototype.ehTriangulo = function () {
        return Math.abs(this.l2 - this.l3) < this.l1 && this.l1 < this.l2 + this.l3;
    };
    Triangulo.prototype.ehEscaleno = function () {
        if (this.ehTriangulo()) {
            if (this.l1 != this.l2 && this.l2 != this.l3) {
                return true;
            }
        }
        return false;
    };
    Triangulo.prototype.ehEquilatero = function () {
        if (this.ehTriangulo()) {
            return this.l1 == this.l2 && this.l2 == this.l3;
        }
        return false;
    };
    Triangulo.prototype.ehIsosceles = function () {
        if (this.ehTriangulo()) {
            if (!this.ehEscaleno()) {
                if (!this.ehEquilatero()) {
                    return true;
                }
            }
        }
        return false;
    };
    return Triangulo;
}());
var t1 = new Triangulo(5, 5, 5);
var t2 = new Triangulo(3, 4, 5);
var t3 = new Triangulo(4, 4, 5);
console.log(t1.ehEquilatero());
console.log(t1.ehEscaleno());
console.log(t2.ehEscaleno());
console.log(t2.ehIsosceles());
console.log(t3.ehIsosceles());
console.log(t3.ehEquilatero());
