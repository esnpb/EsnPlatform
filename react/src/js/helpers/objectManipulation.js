export default function omit(myObj, deleteKey) {
  return Object.keys(myObj)
    .filter(key => key !== deleteKey)
    .reduce(function (result, current) {
      return { ...result, [current]: myObj[current] };
    }, {});
}
