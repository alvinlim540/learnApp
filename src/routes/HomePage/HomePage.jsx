import React from 'react';
import { useSelector } from 'react-redux';
import { addTodo } from '../../store/actionCreators';
import './HomePage.css';

const HomePage = () => {
  const username = useSelector((state) => state.auth.username);
  const todos = useSelector((state) => state.todos.todoList);
  const dispatch = useDispatch();

  const handleCreate = async () => {
    try {
      // Assume that createTodo returns { data: new Todo }
      const result = await createTodo('Untitled', '');
      dispatch(addTodo(result.data));
    } catch (err) {
      // Handle error
    }
  };

  return (
    <div className="app">
      <h1>Welcome {username}!</h1>
      <div className="todosList">
        {todos.map((todo) => (
          <div className="todoItem">
            <h6>{todo.title}</h6>
            <p>{todo.body}</p>
          </div>
        ))}
      </div>
      <button onClick={handleCreate}>Add New Todo</button>
    </div>
  );
};

export default HomePage;
