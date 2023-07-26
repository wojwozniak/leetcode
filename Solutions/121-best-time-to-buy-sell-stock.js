var maxProfit = function(prices) {
    if (!prices || prices.length < 2) {
      return 0;
    }
  
    let minPrice = prices[0];
    let maxProfit = 0;
  
    for (let i = 1; i < prices.length; i++) {
      let potentialProfit = prices[i] - minPrice;
      maxProfit = Math.max(maxProfit, potentialProfit);
      minPrice = Math.min(minPrice, prices[i]);
    }
  
    return maxProfit;
  };