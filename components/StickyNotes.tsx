import * as React from 'react';
import StickyNote from './StickyNote';

const StickyNotes = ({ stickyNotes, setCurrentFocus, focusValue }) => {
  return (
    <React.Fragment>
      {stickyNotes.map((stickyNote) => (
        <StickyNote
          key={stickyNote.id}
          stickyNote={stickyNote}
          currentFocus={focusValue}
          setCurrentFocus={setCurrentFocus}
        />
      ))}
    </React.Fragment>
  );
};

export default React.memo(StickyNotes);
