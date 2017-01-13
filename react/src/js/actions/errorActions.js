export default function throwError(code) {
  return {
    type: 'THROW_OTHER_ERROR',
    payload: code,
  };
}
