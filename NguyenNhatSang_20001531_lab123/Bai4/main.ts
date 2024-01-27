import { Order } from "./Order";
import { OrderDetail } from "./OrderDetail";
import { Product } from "./Product";

let p = Product.product3("ti vi","adad",100);
console.log(p);


let od = Order.Order2(1,new Date());
od.addLineItem(p,3);
console.log(od);
