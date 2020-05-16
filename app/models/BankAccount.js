class BankAccount {
    constructor() {
        this.balance = 0;
        this.history = [];
    }

    current()
    {
        return this.balance;
    }

    getHistory()
    {
        return this.history;
    }

    append(amount)
    {
        if(amount > 0)
        {
            this.balance = this.balance + amount;
            this.history.push({operation: "append", amount: amount});
        }

        return this.balance;
    }

    substract(amount)
    {
        if(amount > 0)
        {
            this.balance = this.balance - amount;
            this.history.push({operation: "substract", amount: amount});
        }

        return this.balance;
    }

    merge(account)
    {
        for(let i = 0; i < account.history.length; i++)
        {
            this.history.push(account.history[i]);
        }
        this.balance = this.balance + account.balance;
        this.history.push({operation: "merge", amount: account.balance});
    }
}

module.exports = BankAccount;