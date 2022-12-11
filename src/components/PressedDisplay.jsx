import React from 'react';
import '../sass/_presseddisplay.scss';

const PressedDisplay = ({setList, list}) => {

  return (
    <>
        <div className="output-display">
          {list}
        </div>
    </>
  )
}

export default PressedDisplay