"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
var OrderDetail_1 = require("./OrderDetail");
var Order = /** @class */ (function () {
    function Order() {
        this.lineItems = [];
        this.count = 0;
    }
    Order.Order2 = function (orderID, orderDate) {
        var o = new Order();
        o.orderID = orderID;
        o.orderDate = orderDate;
        return o;
    };
    Order.prototype.addLineItem = function (product, quatity) {
        this.lineItems.push(OrderDetail_1.OrderDetail.orderDetail2(quatity, product));
    };
    return Order;
}());
exports.Order = Order;
