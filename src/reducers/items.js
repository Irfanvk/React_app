import data from '../data/code-challenge.json'

export default function (state = data.details, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      const newIndex = Number(Object.keys(state)[Object.keys(state).length - 1]) + 1
      return {
        ...state,
        [newIndex]: action.payload
      }
    default:
      return state;
  }
}