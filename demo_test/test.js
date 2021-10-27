//  check số đối xứng 12366321
// cách 1: Sử dụng thuần kiến thức for.
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}
// cách 2 sử dụng string
function isPalindromeString(str) {
  // console.log(str[Math.floor(str.length / 2)]);
  let newstr = "";
  if (str.length % 2 !== 0) {
    newstr = str.replace(str[Math.floor(str.length / 2)], "");
  }
  let begin = newstr.slice(0, newstr.length / 2);
  let end = newstr
    .slice(newstr.length / 2)
    .split("")
    .reverse()
    .join("");
  if (begin == end) return true;
  return false;
}
console.log(isPalindromeString(122676321 + ""));
