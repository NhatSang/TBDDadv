"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account(accountNumber, name, balance) {
        this.accountNumber = 0;
        this.name = "";
        this.balance = 0;
        this.rate = 0.035;
        if (accountNumber)
            this.accountNumber = accountNumber;
        if (name)
            this.name = name;
        if (balance)
            this.balance = balance;
    }
    Object.defineProperty(Account.prototype, "getAccNumber", {
        get: function () {
            return this.accountNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "setAccNumber", {
        set: function (v) {
            this.accountNumber = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "getName", {
        get: function () {
            return this.getName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "setName", {
        set: function (v) {
            this.name = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "getBalance", {
        get: function () {
            return this.balance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "setBalance", {
        set: function (v) {
            this.balance = v;
        },
        enumerable: false,
        configurable: true
    });
    Account.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance = this.balance + amount;
            return true;
        }
        return false;
    };
    Account.prototype.withdraw = function (amount, fee) {
        if (amount > 0 && amount + fee <= this.balance) {
            this.balance = this.balance - (amount + fee);
            return true;
        }
        return false;
    };
    Account.prototype.addInterest = function () {
        return this.balance = this.balance * (1 + this.rate);
    };
    Account.prototype.transfer = function (acc2, amount) {
        if (acc2 != null && amount <= this.balance) {
            acc2.deposit(amount);
            this.withdraw(amount, 0);
            return true;
        }
        return false;
    };
    Account.prototype.toString = function () {
        return "name: " + this.name + " balance: " + this.balance;
    };
    return Account;
}());
exports.Account = Account;
