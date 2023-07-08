const findMedianSortedArrays = (A, B) => {
  let l1 = A.length;
  let l2 = B.length;
  // We want to ensure that A is always smaller
  if (l1 > l2) {
    return findMedianSortedArrays(B, A);
  }
  // Calculate sum of lengths of two arrays,
  // set pointers at start and end of the first array
  let sum = l1 + l2;
  let lP = 0;
  let rP = l1 - 1;
  // Look for median
  while (true) {
    // Middle of the first array
    let i = Math.floor((lP + rP) / 2);
    // Middle of the second array
    // (getting first j elements of the second array
    // (up to half of sum of lengths))
    let j = Math.floor((sum + 1) / 2) - i - 2;

    // Taking two elements from each array (nearest from divide)
    let Al = i >= 0 ? A[i] : -Infinity;
    let Ar = i + 1 < l1 ? A[i + 1] : Infinity;
    let Bl = j >= 0 ? B[j] : -Infinity;
    let Br = j + 1 < l2 ? B[j + 1] : Infinity;

    // If partition is correct
    if (Al <= Br && Bl <= Ar) {
      if (sum % 2 === 0) {
        return (Math.max(Al, Bl) + Math.min(Ar, Br)) / 2;
      } else {
        return Math.max(Al, Bl);
      }
    } else if (Al > Br) {
      rP = i - 1;
    } else {
      lP = i + 1;
    }
  }
};