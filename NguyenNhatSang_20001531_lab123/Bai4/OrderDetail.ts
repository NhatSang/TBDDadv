import { Product } from "./Product";

export class OrderDetail{
    private quatity: number=0;
    private product: Product;

    public static orderDetail2(quatity:number,product:Product){
        const o = new OrderDetail();
        o.quatity = quatity;
        o.product = product;
        return o;
    }
}