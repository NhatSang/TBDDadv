import { Account } from "./account";

let acc1 = new Account(72354,"Ted Murphy", 102.56);
let acc2 = new Account(69713,"Jane Smith", 40.0);
let acc3 = new Account(93757, "Edward Demsey", 759.32);

console.log(acc1.toString());
console.log(acc2.toString());
console.log(acc3.toString());
console.log("------------------------------------");

console.log(acc1.deposit(25.85));
console.log(acc2.deposit(500));
console.log(acc2.withdraw(430.75, 1.5));
console.log(acc3.addInterest());
console.log(acc1.toString());
console.log(acc2.toString());
console.log(acc3.toString());
console.log("------------------------------------");

console.log(acc2.transfer(acc1,100));
console.log(acc1.toString());
console.log(acc2.toString());


