import React from 'react';

type PropType = {
  items: { id: number, title: string }[];
  onDeleteTodo: (id: number) => () => void;
}

const TodoList: React.FC<PropType> = (props) => {
  return (
    <ul>
      {props.items.map(todo => (
        <li key={todo.id}>
          <span>{todo.title}</span>
          <button onClick={props.onDeleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
};

export { TodoList };
