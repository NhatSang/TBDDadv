"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HinhTron_1 = require("./HinhTron");
var ToaDo_1 = require("./ToaDo");
var t = new ToaDo_1.ToaDo({ ten: 'O', x: 5, y: 5 });
var o = new HinhTron_1.HinhTron({ tam: t, banKinh: 10.5 });
console.log(o.toString());
