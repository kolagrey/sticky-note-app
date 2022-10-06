import * as React from 'react';
import Layout from './components/Layout';
import NoteMenu from './components/NoteMenu';
import StickyNotes from './components/StickyNotes';
import './style.css';

export default function App() {
  const [stickyNotes, setStickyNotes] = React.useState([]);
  const [isDisabled, setIsDisabled] = React.useState(false);
  const [color, setColor] = React.useState('yellow');
  const [focusValue, setFocusValue] = React.useState(0);

  const winMouseDown = (e) => {
    const id = (999999 * Math.random()).toFixed(0);
    const newNote = {
      id,
      content: 'This is content ' + id,
      style: {
        backgroundColor: color,
        height: '200px',
        width: '200px',
        top: e.clientY,
        left: e.clientX,
        zIndex: stickyNotes.length + 1,
      },
    };
    setStickyNotes((prev) => [newNote, ...prev]);
  };

  const winMouseUp = (e) => {
    document.body.style.cursor = 'pointer';
    setIsDisabled(false);
    window.removeEventListener('mousedown', winMouseDown);
    window.removeEventListener('mouseup', winMouseUp);
  };

  const onCreateNote = () => {
    setIsDisabled(true);
    document.body.style.cursor = 'cell';
    window.addEventListener('mousedown', winMouseDown);
    window.addEventListener('mouseup', winMouseUp);
  };

  const onColorSelect = (e) => {
    setColor(e.target.value);
  };

  const setCurrentFocus = (value) => {
    setFocusValue(value);
  };

  return (
    <Layout>
      <NoteMenu
        onCreateNote={onCreateNote}
        onColorSelect={onColorSelect}
        isButtonDisabled={isDisabled}
      />
      <StickyNotes
        stickyNotes={stickyNotes}
        setCurrentFocus={setCurrentFocus}
        focusValue={focusValue}
      />
    </Layout>
  );
}
