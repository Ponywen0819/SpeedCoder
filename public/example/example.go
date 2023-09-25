package main

import (
  "fmt"
  "sync"
)

type BankAccount struct {
  balance int
  musync.Mutex
}

func (a *BankAccount) Deposit(amount int) {
  a.mu.Lock()
  defer a.mu.Unlock()
  a.balance += amount
}

func (a *BankAccount) Withdraw(amount int) {
  a.mu.Lock()
  defer a.mu.Unlock()
  if a.balance >= amount {
    a.balance -= amount
  } else {
    fmt.Println("余额不足")
  }
}

func (a *BankAccount) Balance() int {
  a.mu.Lock()
  defer a.mu.Unlock()
  return a.balance
}
