const minCostClimbingStairs = (cost) => {
    const n = cost.length;
    const minCost = new Array(n);
  
    minCost[0] = cost[0];
    minCost[1] = cost[1];
  
    for (let step = 2; step < n; step++) {
      minCost[step] = cost[step] + Math.min(minCost[step - 1], minCost[step - 2]);
    }
  
    return Math.min(minCost[n - 1], minCost[n - 2]);
};