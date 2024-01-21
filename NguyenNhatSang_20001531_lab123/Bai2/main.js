"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var car_1 = require("./car");
var c1 = new car_1.Car();
var c2 = new car_1.Car("Sang", "toyota", 1000000, 100);
console.log(c1.toString());
console.log(c2.toString());
