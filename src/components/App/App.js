import React, { useState, useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import TodoList from "../TodoList/TodoList";
import TodoHeader from "../TodoHeader/TodoHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import AddForm from "../AddForm/AddForm";

const App = () => {
  const [ todos, setTodos ] = useState([]);
  const [ searchText, setSearchText ] = useState('');
  const [ filter, setFilter ] = useState({ name: 'all', text: 'All' });

  useEffect(() => {
    document.title = `${ todos.length } Todo`
  }, [ todos ]);

  function removeTodo(id) {
    setTodos(todos.filter(todo => {
      return todo.id !== id
    }))
  }

  function onToggleCompleted(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo
    }))
  }

  function onToggleImportant(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.important = !todo.important
      }
      return todo
    }))
  }

  function addTodo(text) {
    if (!text.trim()) return;

    setTodos([ ...todos, {
      id: Date.now(),
      text,
      important: false,
      completed: false
    } ]);
  }

  function searchTodo(value) {
    setSearchText(value)
  }

  function search(items, text) {
    if (!text.trim()) {
      return items
    }

    return items.filter(item => {
      return item.text.toLowerCase().indexOf(text.toLowerCase()) > -1
    })
  }

  function filterTodo(btn) {
    setFilter(btn)
  }

  function filtered(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'important':
        return items.filter(item => item.important);
      case 'active':
        return items.filter(item => !item.completed);
      case 'completed':
        return items.filter(item => item.completed);
      default:
        return items
    }
  }

  const visibleTodo = filtered(search(todos, searchText), filter.name);

  return (
    <div className={ 'main' }>
      <TodoHeader />
      <SearchPanel searchTodo={ searchTodo } filterTodo={ filterTodo } />
      <TodoList
        listName={ filter.text }
        todos={ visibleTodo }
        removeTodo={ removeTodo }
        onToggleCompleted={ onToggleCompleted }
        onToggleImportant={ onToggleImportant }
      />
      <AddForm addTodo={ addTodo } />
    </div>
  )
};

export default App;
