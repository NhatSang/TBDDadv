export class ToaDo {
  private ten: string = "";
  private x: number = 0;
  private y: number = 0;

  constructor(params: Partial<ToaDo>) {
    Object.assign(this, params);
  }

  public get getTen(): string {
    return this.ten;
  }

  public set setTen(v: string) {
    this.ten = v;
  }

  public get getX(): number {
    return this.x;
  }

  public set setX(v: number) {
    this.x = v;
  }

  public get getY(): number {
    return this.y;
  }

  public set setY(v: number) {
    this.y = v;
  }

  public toString(): string {
    return this.ten + "(" + this.x + "," + this.y + ")";
  }
}
