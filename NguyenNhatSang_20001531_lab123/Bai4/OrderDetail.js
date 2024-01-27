"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetail = void 0;
var OrderDetail = /** @class */ (function () {
    function OrderDetail() {
        this.quatity = 0;
    }
    OrderDetail.orderDetail2 = function (quatity, product) {
        var o = new OrderDetail();
        o.quatity = quatity;
        o.product = product;
        return o;
    };
    return OrderDetail;
}());
exports.OrderDetail = OrderDetail;
