set.seed(123)

days <- 100
stock_prices <- cumsum(runif(days, min = -1, max = 1)) + 100

buy_signal <- rep(FALSE, days)
sell_signal <- rep(FALSE, days)

for (i in 4:days) {
  if (stock_prices[i - 2] < stock_prices[i - 1] && stock_prices[i - 1] < stock_prices[i]) {
    buy_signal[i] <- TRUE
  }
  if (stock_prices[i - 2] > stock_prices[i - 1] && stock_prices[i - 1] > stock_prices[i]) {
    sell_signal[i] <- TRUE
  }
}

initial_balance <- 10000
balance <- initial_balance
shares <- 0

for (i in 1:days) {
  if (buy_signal[i]) {
    shares_to_buy <- floor(balance / stock_prices[i])
    shares <- shares + shares_to_buy
    balance <- balance - shares_to_buy * stock_prices[i]
  }
  if (sell_signal[i]) {
    balance <- balance + shares * stock_prices[i]
    shares <- 0
  }
}
