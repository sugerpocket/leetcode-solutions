function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }

  let digit = Math.floor(Math.log10(x)) + 1;

  while (digit > 0) {
    const left = Math.floor(x / Math.pow(10, digit - 1));
    const right = x % 10;

    if (left !== right) {
      return false;
    }

    x = Math.floor(x % Math.pow(10, digit - 1) / 10);
    digit -= 2;
  }

  return true;
}
