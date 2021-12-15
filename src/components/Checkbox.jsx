import React from "react";

export default function Checkbox(props) {
  return (
    <div id='menu-box'>
      <label className='checkbox'>
        Elixir
        <input type='checkbox' id='checkbox' onClick={() => {}} />
      </label>
      <label className='checkbox'>
        ERNIE BALL
        <input type='checkbox' id='checkbox' onClick={() => {}} />
      </label>
    </div>
  );
}
