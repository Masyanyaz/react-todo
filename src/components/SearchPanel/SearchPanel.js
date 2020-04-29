import React, { useState } from "react";

import StatusFilter from "../StatusFilter/StatusFilter";

import './SearchPanel.css'

const SearchPanel = ({ searchTodo, filterTodo }) => {
  const [ value, setValue ] = useState('');

  function changeValue(e) {
    const val = e.target.value;
    setValue(val);
    searchTodo(val)
  }

  return (
    <div className="search-panel">
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        value={ value }
        onChange={ changeValue }
      />
      <StatusFilter filterTodo={ filterTodo } />
    </div>
  )
};

export default SearchPanel;
