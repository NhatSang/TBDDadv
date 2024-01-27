export class Account {
  private accountNumber: number = 0;
  private name: string = "";
  private balance: number = 0;
  private rate: number = 0.035;

  constructor(accountNumber?: number, name?: string, balance?: number) {
    if (accountNumber)  this.accountNumber = accountNumber;
    if(name)  this.name = name;
    if(balance)  this.balance = balance;
    

  }

  public get getAccNumber(): number {
    return this.accountNumber;
  }

  public set setAccNumber(v: number) {
    this.accountNumber = v;
  }

  public get getName(): string {
    return this.getName;
  }

  public set setName(v: string) {
    this.name = v;
  }

  public get getBalance(): number {
    return this.balance;
  }

  public set setBalance(v: number) {
    this.balance = v;
  }

  public deposit(amount: number): boolean {
    if (amount > 0) {
      this.balance = this.balance + amount;
      return true;
    }
    return false;
  }

  public withdraw(amount: number, fee: number): boolean {
    if (amount > 0 && amount + fee <= this.balance) {
      this.balance = this.balance - (amount + fee);
      return true;
    }
    return false;
  }

  public addInterest():number{
    return this.balance = this.balance * (1 + this.rate);
  }

  public transfer(acc2: Account, amount: number): boolean {
    if (acc2 != null && amount <= this.balance) {
      acc2.deposit(amount);
      this.withdraw(amount, 0);
      return true;
    }
    return false;
  }

  public toString():string{
    return "name: "+ this.name+" balance: "+this.balance;
  }
}
