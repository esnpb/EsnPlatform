export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'ERROR': {
      throw new Error('OH NO!');
    }
    default: {
      break;
    }
  }
  return state;
}
