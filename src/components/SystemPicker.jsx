import React from 'react';
import { AiFillApple, AiFillWindows } from 'react-icons/ai';
import '../sass/_systempicker.scss';

const SystemPicker = () => {
  return (
    <>
        <div className='system__container'>
            <div className='system-icon'>
                <AiFillWindows className='windows-icon' />
            </div>
            <div className='system-icon'>
            <AiFillApple className='apple-icon' />
            </div>
        </div>
    </>
  )
}

export default SystemPicker;