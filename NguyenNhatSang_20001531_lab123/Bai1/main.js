"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var triangle_1 = require("./triangle");
var Trg1 = new triangle_1.Triangle(3, 4, 5);
Trg1.setA = 4;
console.log(Trg1.toString());
console.log("Chu vi: " + Trg1.PTriangle());
console.log("Dien tich: " + Trg1.areaTriangle());
