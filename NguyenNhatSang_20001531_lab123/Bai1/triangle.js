"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
var Triangle = /** @class */ (function () {
    function Triangle(a, b, c) {
        this.a = 0;
        this.b = 0;
        this.c = 0;
        if (a && b && c && a > 0 && b > 0 && c > 0 && (a + b > c && a + c > b && b + c > a)) {
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }
    Object.defineProperty(Triangle.prototype, "getA", {
        get: function () {
            return this.a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "setA", {
        set: function (a) {
            if (!(a < 0 || a + this.b < this.c || a + this.c < this.b)) {
                this.a = a;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "getB", {
        get: function () {
            return this.b;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "setB", {
        set: function (b) {
            if (!(b < 0 || b + this.a < this.c || b + this.c < this.a)) {
                this.b = b;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "getC", {
        get: function () {
            return this.c;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "setC", {
        set: function (c) {
            if (!(c < 0 || c + this.b < this.a || c + this.a < this.b)) {
                this.c = c;
            }
        },
        enumerable: false,
        configurable: true
    });
    Triangle.prototype.PTriangle = function () {
        return this.a + this.b + this.c;
    };
    Triangle.prototype.areaTriangle = function () {
        var p = this.PTriangle() / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    };
    Triangle.prototype.checkTriangle = function () {
        if (this.a == 0 && this.b == 0 && this.c == 0)
            return "Not triangle";
        if (this.a == this.b && this.a == this.c)
            return "equilateral triangle";
        if (this.a == this.b || this.a == this.c || this.b == this.c)
            return "isosceles triangle";
        return "Normal triangle";
    };
    Triangle.prototype.toString = function () {
        return this.checkTriangle() + " with a = " + this.a + " b = " + this.b + " c = " + this.c;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
