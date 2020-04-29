import React, { useState } from "react";

import './AddForm.css'

export default function AddForm({ addTodo }) {
  const [ value, setValue ] = useState('');

  function changeValue(e) {
    setValue(e.target.value)
  }

  function onClickAddNewTodo(e) {
    e.preventDefault();
    addTodo(value);

    setValue('')
  }

  return (
    <form className={ 'add-form' } onSubmit={ onClickAddNewTodo }>
      <input
        type="text"
        className="form-control"
        placeholder="Add new todo"
        onChange={ changeValue }

        value={ value }
      />
      <button
        type={ 'submit' }
        className={ 'btn btn-outline-success' }
      >
        Add
      </button>
    </form>
  )
}
