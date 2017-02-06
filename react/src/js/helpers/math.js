export default function intToOrdinalText(number) {
  switch (number) {
    case 0:
      return 'zero';
    case 1:
      return 'first';
    case 2:
      return 'second';
    case 3:
      return 'third';
    case 4:
      return 'fourth';
    default:
      break;
  }
  return '';
}
