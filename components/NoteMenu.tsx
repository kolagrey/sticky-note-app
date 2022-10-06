import * as React from 'react';

const NoteMenu = ({ onCreateNote, onColorSelect, isButtonDisabled }) => {
  return (
    <div className="top">
      <h1>Sticky Note App</h1>
      <div className="menu-area">
        <div className="form-input-area">
          <label htmlFor="dimension" className="form-input-area">
            Select note color
          </label>
          <select name="dimension" id="dimension" onChange={onColorSelect}>
            <option value="yellow">Yellow</option>
            <option value="pink">Pink</option>
            <option value="blue">Blue</option>
          </select>
        </div>
        <div className="form-input-area">
          <button disabled={isButtonDisabled} onClick={onCreateNote}>
            Create Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteMenu;
