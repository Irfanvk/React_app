import data from '../data/code-challenge.json'
import { archiveItem } from '../actions';
import { Archive } from '../components/archive';
const initialState = {
  items: data.details,
  editingItem: null,
  // New Array which will hold deleted items
  archiveItems: []  
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
    /**
     * Got the index from action.payload
     * Store archiveItems array in temp var
     * Modify temp array using splice
     * return new state
     */
    
      const removingItem = action.payload
      const tempArchive = [ ...state.archiveItems ]
      tempArchive.splice(removingItem, 1)

      return {
        ...state,
        archiveItems: tempArchive
      }

    case 'ARCHIVE_ITEM':
      const index = action.payload
      const items = {...state.items} //Items is stored in JSON Object
      const archivedArray = [...state.archiveItems] //Archive storing it in array
      archivedArray.push({
        ...items[index],
        key: index
      }) // Get clicked item from items array and psuh it to archive array
      delete items[index]
      return {
        ...state,
        items,
        archiveItems: archivedArray
      }
      /**
       * Get the index from action.payload
       * Insert this object to archiveItems array
       * delet it from items array
       * return new state
       */

    case 'RESTORE_ITEM':
    /**
     * getting index.
     * temp <- find from archiveItems which matches the index you send from the action
     * delete the item from the archiveItems
     * usign key restore the temp Item 
     * delete the key
     */
    // tempRestore = {
    //   product: '',
    //   qty: '',
    //   price: '',
    //   key: ''
    // }
    const restoreIndex = action.payload
    const tempArchiveItems =  [ ...state.archiveItems]
    const tempRestore = tempArchiveItems[restoreIndex]
    tempArchiveItems.splice(restoreIndex,1)
    const getKey = tempRestore.key
    delete tempRestore.key
    const tempItems = { ...state.items }
    tempItems[getKey] = tempRestore

    // {
    //   editingItem: null,
    //   archivedItems: oldData,
    //   items: oldData
    // }

    // {
    //   editingItem: null,
    //   archivedItems: newData
    //   items: oldData
        // arhcivedData: arhcivedData

     
    // }
    
    return {
      ...state,
      archiveItems: tempArchiveItems,
      items: tempItems
    }
    /**
     * Whenever you are changing an object or array
     * 1. Get that from the state
     * 2. Modify that
     * 3. Add it back to the state
     */

    default:
      return state;
  }
}