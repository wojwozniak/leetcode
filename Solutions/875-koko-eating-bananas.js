function canEatAll(piles, K, hours) {
    let totalHours = 0;
  
    for (let pile of piles) {
      totalHours += Math.ceil(pile / K);
    }
  
    return totalHours <= hours;
  }
  
  function minEatingSpeed(piles, H) {
    let left = 1;
    let right = Math.max(...piles);
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (canEatAll(piles, mid, H)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
  
    return left;
  }
  