import React from "react";

import TodoListItem from "../TodoListItem/TodoListItem";

import './TodoList.css'

const TodoList = (props) => {
  const { todos, removeTodo, onToggleCompleted, onToggleImportant, listName } = props;

  const list = todos.map(todo => {
    const { id, ...todoProps } = todo;

    return (
      <li
        key={ id }
        className={ 'list-group-item' }
      >
        <TodoListItem
          removeTodo={ removeTodo.bind(null, id) }
          onToggleCompleted={ onToggleCompleted.bind(null, id) }
          onToggleImportant={ onToggleImportant.bind(null, id) }
          { ...todoProps }
        />
      </li>
    )
  });

  return (
    <>
      { !todos.length && <div style={ { textAlign: 'center' } }>No { listName } Todo</div> }
      <ul className={ 'list-group todo-list' }>
        { list }
      </ul>
    </>
  )
};

export default TodoList;
