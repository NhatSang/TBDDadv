export class Car {
  private owner: string="";
  private type: string="";
  private price: number=0;
  private capacity: number=0;

  constructor(
    owner?: string,
    type?: string,
    price?: number,
    capacity?: number
  ) {
    if (owner) this.owner = owner;
    if (type) this.type = type;
    if (price) this.price = price;
    if (capacity) this.capacity = capacity;
  }

  public get getOwner(): string {
    return this.owner;
  }

  public set setOwner(v: string) {
    this.owner = v;
  }

  public get getType(): string {
    return this.type;
  }

  public set setType(v: string) {
    this.type = v;
  }

  public get getPrice(): number {
    return this.price;
  }

  public set setPrice(v: number) {
    this.price = v;
  }

  public get getCapacity(): number {
    return this.capacity;
  }

  public set setCapacity(v: number) {
    this.capacity = v;
  }

  public tax(): number {
    if (this.capacity < 100) return this.price * 0.01;
    if (this.capacity >= 100 && this.capacity <= 200) return this.price * 0.03;
    return this.price * 0.05;
  }

  public toString():string{
    return "Owner: "+this.owner+" Type: "+this.type+" Capacity: "+this.capacity+" Price: "+this.price+" Tax: "+this.tax();
  }
}
