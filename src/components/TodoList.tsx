import React from 'react';

type PropType = {
  items: { id: number, title: string }[]
}

const TodoList: React.FC<PropType> = (props) => {
  return (
    <ul>
      {props.items.map(todo => (
        <li key={todo.id}>
          <span>{todo.title}</span>
          <button>Delete</button>
        </li>
      ))}
    </ul>
  )
};

export { TodoList };
