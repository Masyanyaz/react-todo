import React from "react";

import './TodoListItem.css'

const TodoListItem = (props) => {

  const { text, important, completed, removeTodo, onToggleCompleted, onToggleImportant } = props;

  let classNames = 'todo-list-item-label';

  if (important) {
    classNames += ' important'
  }

  if (completed) {
    classNames += ' completed'
  }

  return (
    <div className={ 'todo-list-item' }>
      <span
        className={ classNames }
        onClick={ onToggleCompleted }
      >
        { text }
      </span>

      <button
        className={ 'btn btn-outline-danger btn-sm' }
        onClick={ removeTodo }
      >
        <i className={ 'fa fa-trash-o' } />
      </button>

      <button
        className={ 'btn btn-outline-info btn-sm' }
        onClick={ onToggleImportant }
      >
        <i className={ 'fa fa-exclamation' } />
      </button>
    </div>
  )
};

export default TodoListItem;
