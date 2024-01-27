import { OrderDetail } from "./OrderDetail";
import { Product } from "./Product";

export class Order {
  private orderID: number;
  private orderDate: Date;
  private lineItems: Array<OrderDetail> = [];
  private count: number = 0;

  public static Order2(orderID: number, orderDate: Date) {
    const o = new Order();
    o.orderID = orderID;
    o.orderDate = orderDate;
    return o;
  }

  public addLineItem(product: Product, quatity: number) {
    this.lineItems.push(OrderDetail.orderDetail2(quatity, product));
  }
}
