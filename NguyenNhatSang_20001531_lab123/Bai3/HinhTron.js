"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HinhTron = void 0;
var HinhTron = /** @class */ (function () {
    function HinhTron(params) {
        Object.assign(this, params);
    }
    Object.defineProperty(HinhTron.prototype, "getTam", {
        get: function () {
            return this.tam;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HinhTron.prototype, "setTam", {
        set: function (v) {
            this.tam = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HinhTron.prototype, "getBanKinh", {
        get: function () {
            return this.banKinh;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HinhTron.prototype, "setBanKinh", {
        set: function (v) {
            this.banKinh = v;
        },
        enumerable: false,
        configurable: true
    });
    HinhTron.prototype.tinhChuVi = function () {
        return Math.PI * 2 * this.banKinh;
    };
    HinhTron.prototype.tinhDienTich = function () {
        return Math.PI * this.banKinh * this.banKinh;
    };
    HinhTron.prototype.toString = function () {
        return ("Hình tròn có tâm " +
            this.tam.toString() +
            " với bán kính " +
            this.banKinh +
            " có diện tích và chu vi lần lượt là " +
            this.tinhDienTich() +
            " và " +
            this.tinhChuVi());
    };
    return HinhTron;
}());
exports.HinhTron = HinhTron;
