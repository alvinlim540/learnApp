/*
interface AuthState {
  userId: string
  username: string
  accessToken: string
}
*/

import { combineReducers } from 'redux';

const defaultAuthState = {
  userId: '',
  username: '',
  accessToken: '',
};

const authReducer = (state = defaultAuthState, action) => {
  switch (action.type) {
    case 'AUTH_SAVE_CREDENTIALS':
      return {
        userId: action.userId,
        username: action.username,
        accessToken: action.accessToken,
      };
    case 'AUTH_LOGOUT':
      return {
        userId,
        username: '',
        accessToken: '',
      };
    default:
      return state;
  }
};

/*
interface TodosState {
  todoList: Todo[]
  todoCount: number
}

interface Todo {
  id: string
  title: string
  body: string
}
*/

const defaultTodosState = {
  todoList: [],
  todoCount: 0,
};

/**
 * Example
 *
 * State is
 * {
 *  todoList: [Todo1, Todo2, Todo3, Todo4]
 * }
 */
const todosReducer = (state = defaultTodosState, action) => {
  switch (action.type) {
    /**
     * If we add a Todo5,
     * then state becomes {
     *  todoList: [Todo1, Todo2, Todo3, Todo4, Todo5]
     * }
     *
     * So, action is {
     *  type: "ADD_TODO",
     *  todo: Todo5
     * }
     *
     * Reducer will do [...state.todoList, action.todo]
     * which actually becomes [Todo1, Todo2, Todo3, Todo4, Todo5]
     */
    case 'ADD_TODO': {
      const newTodoList = [
        ...state.todoList, // Extend the old todolist
        action.todo, // and add in the new todo at the end of the list
      ];
      return {
        ...state,
        todoList: newTodoList,
      };
    }

    /**
     * If we delete Todo3,
     * then state becomes {
     *  todoList: [Todo1, Todo2, Todo4]
     * }
     *
     * How do we know where to delete Todo3 from?
     * Action needs to hold the index so that we know where Todo3 is
     * and can delete
     *
     * So, action is {
     *  type: "ADD_TODO",
     *  todoIndexToDelete: 2
     * }
     *
     * Reducer will do newTodoList.splice(2, 1)
     * which actually becomes [Todo1, Todo2, Todo4]
     */
    case 'DELETE_TODO': {
      const newTodoList = [...state.todoList]; // Clone the current todoList (this will include the one that we want to delete)
      /* Splice example
      const arr = [1,2,3,4,5]
      arr.splice(2, 1) // Remove 1 element at index 2
      arr => [1,2,4,5]
      */
      newTodoList.splice(action.todoIndexToDelete, 1); // Remove 1 element at todoIndexToDelete
      return {
        ...state,
        todoList: newTodoList,
      };
    }

    /**
     * If we update Todo2 to Todo2.1,
     * then state becomes {
     *  todoList: [Todo1, Todo2.1, Todo3, Todo4]
     * }
     *
     * How do we know where to delete Todo3 from?
     * Action needs to hold the index so that we know where Todo3 is
     * and can delete
     *
     * So, action is {
     *  type: "ADD_TODO",
     *  todoIndexToDelete: 2
     * }
     *
     * Reducer will do newTodoList.splice(2, 1)
     * which actually becomes [Todo1, Todo2, Todo4]
     */
    case 'UPDATE_TODO': {
      const newTodoList = [...state.todoList]; // Clone the current todoList (this will include the one that we want to update)

      // updatedTodo Partial { title, body }
      newTodoList[action.todoIdxToUpdate] = {
        ...newTodoList[action.todoIdxToUpdate],
        ...action.updatedTodoContents,
      };

      return {
        ...state,
        todoList: newTodoList,
      };
    }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  auth: authReducer,
  todos: todosReducer,
});

/*
state = {
  auth: { userId, username, accessToken }
  todos: { todoList, todoCount }
}
*/
