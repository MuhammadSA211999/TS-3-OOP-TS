"use strict";
//access modifier are
//  private, 
//  readonly,
//  protected
class BankAccount {
    constructor(ownere, bankIde, balancee) {
        this.owner = ownere;
        this._balance = balancee;
        this.bankId = bankIde;
    }
    changeBalance(money) {
        const currentBalance = this._balance - money;
        return currentBalance;
    }
    getBalance() {
        return this._balance;
    }
}
const msaAccount = new BankAccount('MSA', 'mas746tmt764syl', 10);
// msaAccount._balance //error dicce
const balance = msaAccount.getBalance();
const newBalance = msaAccount.changeBalance(5);
console.log(balance, newBalance); //class method er maddhome private property access and change kora zay| kintu instance er maddhome sorasor access/modify kora zay na
