export class Product {
  private desciption: string = "";
  private productID: string = "";
  private price: number = 0;

  public static product3(desciption: string, productID: string, price: number):Product {
    const p = new Product();
    p.desciption = desciption;
    p.productID = productID;
    p.price = price;
    return p;
  }
}
