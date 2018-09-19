export const addItem = (item) => {
  return {
      type: 'ADD_ITEM',
      payload: item
  }
};

export const removeItem = (index) => {
  return {
    type: 'REM_ITEM',
    payload: index
  }
}

export const editItem = (index) => {
  return {
    type: 'EDIT_ITEM',
    payload: index
  }
}

export const saveItem = (newItem) => {
  return {
    type: 'SAVE_ITEM',
    payload: newItem
  }
}

/**
 * TODO
 * Create Two More Actions
 * 1. Restore -> Which will take whole object and return
 * 2. Delete -> Which just takes index and deletes it from both deleted and items array
 */