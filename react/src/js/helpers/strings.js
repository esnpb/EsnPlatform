export function splitCamelCase(s) {
  if (s.length > 0) {
    let result = s[0].toUpperCase();
    for (let i = 1; i < s.length; i++) {
      if (s[i] == s[i].toUpperCase()) {
        result = `${result} ${s[i].toLowerCase()}`;
      } else {
        result = `${result}${s[i].toLowerCase()}`;
      }
    }
    return result;
  }
  return '';
}
