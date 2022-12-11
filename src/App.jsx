import './App.scss';
import LayoutMain from './components/LayoutMain';
import MediaKeys from './components/MediaKeys';
import PressedDisplay from './components/PressedDisplay';
import SystemPicker from './components/SystemPicker';
import React, { useState, useEffect, useCallback } from 'react'

function App() {
  const [list, setList] = useState([]);


  return (
    <>
      <div className="keyboard__wraper">
        {/* <SystemPicker /> */}
        <PressedDisplay list={list} setList={setList}/>
        <MediaKeys />
        <LayoutMain list={list} setList={setList}/>
      </div>
    </>
  )
}

export default App
