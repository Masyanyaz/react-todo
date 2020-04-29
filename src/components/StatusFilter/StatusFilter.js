import React, { useState } from "react";

import './StatusFilter.css'

import StatusFilterButtons from "../StatusFilterButtons/StatusFilterButtons";

const StatusFilter = ({ filterTodo }) => {

  const [ buttons, setButtons ] = useState([
    { id: 1, text: 'All', name: 'all', active: true },
    { id: 2, text: 'Important', name: 'important', active: false },
    { id: 3, text: 'Active', name: 'active', active: false },
    { id: 4, text: 'Done', name: 'completed', active: false },
  ]);

  function changeGroupFilter(id) {
    setButtons(buttons.map(btn => {
      btn.active = false;
      if (btn.id === id) {
        btn.active = true;
        filterTodo({ name: btn.name, text: btn.text })
      }
      return btn
    }))

  }

  const renderButtons = (
    buttons.map(btn => {
      const { id, text, active } = btn;
      return (
        <StatusFilterButtons
          key={ id }
          id={ id }
          text={ text }
          active={ active }
          changeGroupFilter={ changeGroupFilter }
        />
      )
    })
  );

  return (
    <div className="btn-group status-filter">
      { renderButtons }
    </div>
  )
};

export default StatusFilter;
