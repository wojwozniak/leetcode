var addBinary = function(a, b) {
    if (a.length === 0 || a === '0') return b;
    if (b.length === 0 || b === '0') return a;
    if (b.length > a.length) return addBinary(b, a);
    
    let al = a.length - 1;
    let bl = b.length - 1;
    let carry = 0;
    let result = '';
    
    while (al >= 0 || bl >= 0) {
      const digitA = al >= 0 ? Number(a[al]) : 0;
      const digitB = bl >= 0 ? Number(b[bl]) : 0;
      const sum = digitA + digitB + carry;
      
      result = (sum % 2) + result;
      carry = Math.floor(sum / 2);
      
      al--;
      bl--;
    }
    
    if (carry) {
      result = carry + result;
    }
    
    return result;
  };