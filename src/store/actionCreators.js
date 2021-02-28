export const logout = () => {
  return {
    type: "AUTH_LOGOUT"
  }
}

export const saveCredentials = (userId, username, accessToken) => {
  return {
    type: "AUTH_SAVE_CREDENTIALS",
    userId,
    username,
    accessToken
  }
}

/**
 * Creates an action object that has {type: "ADD_TODO", todo: todo} 
 * 
 * When the reducer receives the action, it will call the "ADD_TODO" case, which
 * pulls out the todo property of the action object
 * 
 * @param {Todo} todo todo to add to your current todoList
 */
export const addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    todo
  }
}


export const deleteTodo = (todoIndexToDelete) => {
  return {
    type: "DELETE_TODO",
    todoIndexToDelete
  }
}

export const updateTodo = (todoIndexToUpdate, updatedTodoContents) => {
  return {
    type: "UPDATE_TODO",
    todoIndexToUpdate,
    updatedTodoContents
  }
}
