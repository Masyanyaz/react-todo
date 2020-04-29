import React from "react";

export default function StatusFilterButtons(props) {
  const { id, text, active, changeGroupFilter } = props;

  let classNames = 'btn btn-outline-primary';

  if (active) {
    classNames += ' active';
  }

  return (
    <button
      className={ classNames }
      onClick={ changeGroupFilter.bind(null, id) }
    >
      { text }
    </button>
  )
}
