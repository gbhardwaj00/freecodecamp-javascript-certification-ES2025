class BankAccount {
    constructor () {
      this.balance = 0
      this.transactions = []
    }
  
    deposit (depAmount) {
      if (depAmount > 0) {
        this.transactions.push({
          amount : depAmount,
          type: 'deposit'
        })
        this.balance += depAmount;
        return `Successfully deposited \$${depAmount}. New balance: \$${this.balance}`
      } else {
        return `Deposit amount must be greater than zero.`
      }
    }
  
    withdraw (wAmount) {
      if (wAmount > 0 && wAmount <= this.balance) {
        this.transactions.push({
          amount : wAmount,
          type: 'withdraw'
        })
        this.balance -= wAmount
        return `Successfully withdrew \$${wAmount}. New balance: \$${this.balance}`
      } else {
        return `Insufficient balance or invalid amount.`
      }
    }
  
    checkBalance () {
      return `Current balance: \$${this.balance}`
    }
  
    listAllDeposits () {
      let result = 'Deposits: '
      let deposits = this.transactions.filter((tran) => tran.type === 'deposit')
      for (let dep of deposits) {
        result += `${dep.amount},`
      }
      return result.slice(0, -1)
    }
    listAllWithdrawals () {
      let result = 'Withdrawals: '
      let withdrawals = this.transactions.filter((tran) => tran.type === 'withdraw')
      for (let wth of withdrawals) {
        result += `${wth.amount},`
      }
      return result.slice(0, -1)
    }
  }
  
  const myAccount = new BankAccount()
  
  console.log(myAccount.deposit(200))   // deposit 1
  console.log(myAccount.deposit(150))  // deposit 2
  console.log(myAccount.withdraw(50))   // withdrawal 1
  console.log(myAccount.withdraw(75))   // withdrawal 2
  console.log(myAccount.deposit(30))   // deposit 3 (5th transaction)
  
  