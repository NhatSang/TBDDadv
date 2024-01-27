"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Order_1 = require("./Order");
var Product_1 = require("./Product");
var p = Product_1.Product.product3("ti vi", "adad", 100);
console.log(p);
var od = Order_1.Order.Order2(1, new Date());
od.addLineItem(p, 3);
console.log(od);
