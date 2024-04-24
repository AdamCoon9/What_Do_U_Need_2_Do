import { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

 

const useTodos = () => {

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

  const [filter, setFilter] = useState('all');

 

  useEffect(() => {

    localStorage.setItem('todos', JSON.stringify(todos));

  }, [todos]);

 

  const addTodo = (text) => {

    if (!text) {

      throw new Error('Cannot add a todo without text');

    }

    const newTodo = { id: uuidv4(), text, completed: false };

    setTodos([...todos, newTodo]);

  };

 

  const toggleTodo = (id) => {

    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));

  };

 

  const deleteTodo = (id) => {

    setTodos(todos.filter(todo => todo.id !== id));

  };

 

  const getVisibleTodos = () => {

    if (filter === 'all') {

      return todos;

    }

    return todos.filter(todo => filter === 'completed' ? todo.completed : !todo.completed);

  };

 

  return { todos: getVisibleTodos(), filter, addTodo, toggleTodo, deleteTodo, setFilter };

};

 

export default useTodos;

 