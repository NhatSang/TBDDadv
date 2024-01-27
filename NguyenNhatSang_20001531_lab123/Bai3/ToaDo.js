"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToaDo = void 0;
var ToaDo = /** @class */ (function () {
    function ToaDo(params) {
        this.ten = "";
        this.x = 0;
        this.y = 0;
        Object.assign(this, params);
    }
    Object.defineProperty(ToaDo.prototype, "getTen", {
        get: function () {
            return this.ten;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ToaDo.prototype, "setTen", {
        set: function (v) {
            this.ten = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ToaDo.prototype, "getX", {
        get: function () {
            return this.x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ToaDo.prototype, "setX", {
        set: function (v) {
            this.x = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ToaDo.prototype, "getY", {
        get: function () {
            return this.y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ToaDo.prototype, "setY", {
        set: function (v) {
            this.y = v;
        },
        enumerable: false,
        configurable: true
    });
    ToaDo.prototype.toString = function () {
        return this.ten + "(" + this.x + "," + this.y + ")";
    };
    return ToaDo;
}());
exports.ToaDo = ToaDo;
