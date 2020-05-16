const assert = require('assert');
const BankAccount = require('../app/models/BankAccount');

describe('BankAccount', () => {
    describe('#current', () => {
        let bankAccount = new BankAccount();
        bankAccount.append(20);
        it('Debería mostrar el balance actual', () => {
            assert.equal(20, bankAccount.current());
        })
    })

    describe('#appendPos', () => {
        let bankAccount = new BankAccount();
        it('Debería añadir una cantidad', () => {
            assert.equal(20, bankAccount.append(20));
        })
    })

    describe('#appendNeg', () => {
        let bankAccount = new BankAccount();
        it('Debería no añadir una cantidad', () => {
            assert.equal(0, bankAccount.append(-20));
        })
    })

    describe('#substractPos', () => {
        let bankAccount = new BankAccount();
        bankAccount.append(20);
        it('Debería extraer una cantidad', () => {
            assert.equal(10, bankAccount.substract(10));
        })
    })

    describe('#substractNeg', () => {
        let bankAccount = new BankAccount();
        bankAccount.append(20);
        it('Debería no extraer una cantidad', () => {
            assert.equal(20, bankAccount.substract(-10));
        })
    })

    describe('#mergeAppendAppend', () => {
        let bankAccount1 = new BankAccount();
        bankAccount1.append(50);
        let bankAccount2 = new BankAccount();
        bankAccount2.append(60);
        bankAccount1.merge(bankAccount2);
        it('Debería unir las cuentas y mostrar el historial de la acción', () => {
            assert.deepEqual([{operation: "append", amount: 50}, {operation: "append", amount: 60}, {operation: "merge", amount: 60}], bankAccount1.getHistory());
        })
    })

    describe('#mergeAppendSubstract', () => {
        let bankAccount1 = new BankAccount();
        bankAccount1.append(50);
        let bankAccount2 = new BankAccount();
        bankAccount2.substract(60);
        bankAccount1.merge(bankAccount2);
        it('Debería unir las cuentas y mostrar el historial de la acción', () => {
            assert.deepEqual([{operation: "append", amount: 50}, {operation: "substract", amount: 60}, {operation: "merge", amount: -60}], bankAccount1.getHistory());
        })
    })

    describe('#mergeSumBalance', () => {
        let bankAccount1 = new BankAccount();
        bankAccount1.append(65);
        let bankAccount2 = new BankAccount();
        bankAccount2.append(85);
        bankAccount1.merge(bankAccount2);
        it('Debería unir las cuentas y sumar el balance', () => {
            assert.equal(150, bankAccount1.current());
        })
    })

    describe('#mergeSubstractBalance', () => {
        let bankAccount1 = new BankAccount();
        bankAccount1.append(85);
        let bankAccount2 = new BankAccount();
        bankAccount2.substract(40);
        bankAccount1.merge(bankAccount2);
        it('Debería unir las cuentas y restar el balance', () => {
            assert.equal(45, bankAccount1.current());
        })
    })

    describe('#history', () => {
        let bankAccount = new BankAccount();
        bankAccount.append(50);
        bankAccount.substract(20);
        it('Debería mostrar historial de la cuenta', () => {
            assert.deepEqual([{operation: "append", amount: 50}, {operation: "substract", amount: 20}], bankAccount.getHistory());
        })
    })
})