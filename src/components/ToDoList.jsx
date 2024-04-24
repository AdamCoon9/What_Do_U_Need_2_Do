import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import useTodos from './UseToDo.jsx';

const TodoList = ({ todos, onToggle, onDelete, onSelect }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => onSelect(todo)}
          >
            {todo.text}
          </span>
          <div className="todo-actions">
            <label>
              Complete
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
              />
            </label>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

const App = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [newTodoText, setNewTodoText] = useState('');
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // New loading state

  const handleAddTodo = useCallback(async () => { // Made the function async
    if (newTodoText.trim() === '') {
      setMessage('Please enter a todo.');
      return;
    }

    setIsLoading(true); // Set loading state to true before the async operation
    try {
      await addTodo(newTodoText); // Await the async operation
      setNewTodoText('');
      setMessage(`Added "${newTodoText}"`);
    } catch (error) {
      setMessage('An error occurred. Please try again.'); // Set error message if there's an error
    }
    setIsLoading(false); // Set loading state to false after the async operation
  }, [addTodo, newTodoText]);

  const handleSelect = useCallback((todo) => {
    setSelectedTodo(todo);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedTodo(null);
  }, []);

  return (
    <div>
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        placeholder="New todo"
        disabled={isLoading} // Disable the input when loading
      />
      <button onClick={handleAddTodo} disabled={isLoading}> {/* Disable the button when loading */}
        {isLoading ? 'Adding...' : 'Add'} {/* Change button text when loading */}
      </button>
      <p>{message}</p>
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} onSelect={handleSelect} />
      {selectedTodo && (
        <div>
          <h2>Selected Todo</h2>
          <p>{selectedTodo.text}</p>
          <button onClick={handleCloseModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default App;
