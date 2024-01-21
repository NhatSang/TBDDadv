"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(owner, type, price, capacity) {
        this.owner = "";
        this.type = "";
        this.price = 0;
        this.capacity = 0;
        if (owner)
            this.owner = owner;
        if (type)
            this.type = type;
        if (price)
            this.price = price;
        if (capacity)
            this.capacity = capacity;
    }
    Object.defineProperty(Car.prototype, "getOwner", {
        get: function () {
            return this.owner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "setOwner", {
        set: function (v) {
            this.owner = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "getType", {
        get: function () {
            return this.type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "setType", {
        set: function (v) {
            this.type = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "getPrice", {
        get: function () {
            return this.price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "setPrice", {
        set: function (v) {
            this.price = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "getCapacity", {
        get: function () {
            return this.capacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "setCapacity", {
        set: function (v) {
            this.capacity = v;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.tax = function () {
        if (this.capacity < 100)
            return this.price * 0.01;
        if (this.capacity >= 100 && this.capacity <= 200)
            return this.price * 0.03;
        return this.price * 0.05;
    };
    Car.prototype.toString = function () {
        return "Owner: " + this.owner + " Type: " + this.type + " Capacity: " + this.capacity + " Price: " + this.price + " Tax: " + this.tax();
    };
    return Car;
}());
exports.Car = Car;
