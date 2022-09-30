// questão 6

class Triangulo {
    l1: number
    l2: number
    l3: number

    constructor(lado_1: number, lado_2: number, lado_3: number) {
        this.l1 = lado_1
        this.l2 = lado_2
        this.l3 = lado_3
    }

    ehTriangulo(): boolean {
        return Math.abs(this.l2 - this.l3) < this.l1 && this.l1 < this.l2 + this.l3
    }

    ehEscaleno(): boolean {
        if (this.ehTriangulo()) {
            if (this.l1 != this.l2 && this.l2 != this.l3) {
                return true
            }
        }

        return false
    }

    ehEquilatero(): boolean {
        if (this.ehTriangulo()) {
            return this.l1 == this.l2 && this.l2 == this.l3
        }

        return false
    }

    ehIsosceles(): boolean {
        if (this.ehTriangulo()) {
            if (!this.ehEscaleno()) {
                if (!this.ehEquilatero()) {
                    return true
                }
            }
        }

        return false
    }
}

let t1: Triangulo = new Triangulo(5, 5, 5);
let t2: Triangulo = new Triangulo(3, 4, 5);
let t3: Triangulo = new Triangulo(4, 4, 5);

console.log(t1.ehEquilatero()) // true
console.log(t1.ehEscaleno()) // false

console.log(t2.ehEscaleno()) // true
console.log(t2.ehIsosceles()) // false

console.log(t3.ehIsosceles()) // true
console.log(t3.ehEquilatero()) // false
