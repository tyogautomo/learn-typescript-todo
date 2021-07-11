import React, { useState } from 'react';

import { Todo } from './models/todo.model';

import { TodoList } from './components/TodoList';
import { TodoInput } from './components/TodoInput';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (title: string) => {
    const newTodo = {
      id: todos.length === 0 ? 1 : +todos[todos.length - 1].id + 1,
      title
    };
    setTodos(prev => [
      ...prev,
      newTodo
    ]);
  }

  return (
    <div className="App">
      <TodoInput addHandler={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
