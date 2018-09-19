import data from '../data/code-challenge.json'
const initialState = {
  items: data.details,
  editingItem: null
  // New Array which will hold deleted items
}
export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      const newIndex = Number(Object.keys(state.items)[Object.keys(state.items).length - 1]) + 1
      return {
        ...state,
        items: {
          ...state.items,
          [newIndex]: action.payload
        }
      }
    case 'EDIT_ITEM':
      const editingItem = state.items[action.payload]
      return {
        ...state,
        editingItem: {
          ...editingItem,
          key: action.payload
        }
      } 
    
    case 'SAVE_ITEM':
      const savingItem = action.payload['key']
      delete action.payload['key']
      const temp = {...state.items}
      Object.keys(temp).map(item => {
        if(item === savingItem) {
          temp[item] = {
            ...action.payload,
            qty: Number(action.payload['qty']),
            price: Number(action.payload['price'])
          }
        }
        return item
      })
      return {
        ...state,
        items: temp,
        editingItem: null
      }
    
    case 'REM_ITEM':
      const removingItem = action.payload
      const tempItems = { ...state.items }
      delete tempItems[removingItem]
      return {
        ...state,
        items: tempItems
      }
    case 'ARCHIVE_ITEM':
      /**
       * Get the whole Object
       * Insert this object to deleted array
       * return new state
       */
    default:
      return state;
  }
}