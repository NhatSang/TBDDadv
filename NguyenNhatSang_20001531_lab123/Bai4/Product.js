"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product() {
        this.desciption = "";
        this.productID = "";
        this.price = 0;
    }
    Product.product3 = function (desciption, productID, price) {
        var p = new Product();
        p.desciption = desciption;
        p.productID = productID;
        p.price = price;
        return p;
    };
    return Product;
}());
exports.Product = Product;
