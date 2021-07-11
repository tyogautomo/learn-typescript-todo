import React, { useRef } from 'react';

type PropType = {
  addHandler: (t: string) => void
}

const TodoInput: React.FC<PropType> = (props) => {
  const titleInputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredTitle = titleInputRef.current!.value
    props.addHandler(enteredTitle);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="todo-title">Todo Title:</label>
        <input type="text" id="todo-title" ref={titleInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  )
};

export { TodoInput };
