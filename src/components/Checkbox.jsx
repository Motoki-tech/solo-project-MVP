import React from "react";

export default function Checkbox(props) {
  return (
    <div id='menu-box'>
      <label className='checkbox'>
        Elixir
        <input
          type='checkbox'
          id='checkbox'
          onClick={(e) => {
            props.setCurrentView("Elixir");
          }}
        />
      </label>
      <label className='checkbox'>
        ERNIE BALL
        <input
          type='checkbox'
          id='checkbox'
          onClick={() => {
            props.setCurrentView("ERNIE BALL");
          }}
        />
      </label>
      <label className='checkbox'>
        DAddario
        <input
          type='checkbox'
          id='checkbox'
          onClick={(e) => {
            props.setCurrentView("Daddario");
          }}
        />
      </label>
      <label className='checkbox'>
        SIT
        <input
          type='checkbox'
          id='checkbox'
          onClick={(e) => {
            props.setCurrentView("SIT");
          }}
        />
      </label>
    </div>
  );
}
