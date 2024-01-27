import { ToaDo } from "./ToaDo";

export class HinhTron {
  private tam: ToaDo;
  private banKinh: number;

  constructor(params: Partial<HinhTron>) {
    Object.assign(this, params);
  }

  public get getTam(): ToaDo {
    return this.tam;
  }

  public set setTam(v: ToaDo) {
    this.tam = v;
  }

  public get getBanKinh(): number {
    return this.banKinh;
  }

  public set setBanKinh(v: number) {
    this.banKinh = v;
  }

  public tinhChuVi(): number {
    return Math.PI * 2 * this.banKinh;
  }

  public tinhDienTich(): number {
    return Math.PI * this.banKinh * this.banKinh;
  }

  public toString(): string {
    return (
      "Hình tròn có tâm " +
      this.tam.toString() +
      " với bán kính " +
      this.banKinh +
      " có diện tích và chu vi lần lượt là " +
      this.tinhDienTich() +
      " và " +
      this.tinhChuVi()
    );
  }
}
