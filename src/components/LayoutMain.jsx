import React, { Fragment, useEffect} from 'react';
import '../sass/_layoutMain.scss';
import { AiOutlineWindows, AiOutlineArrowUp, AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlineArrowDown} from 'react-icons/ai';
import { MdOutlineNotes } from 'react-icons/md';
import uuid from 'react-uuid';

const LayoutMain = ({list, setList}) => {
    

    useEffect(() => {
        function pressKeySon (e) {  
            document.querySelectorAll('.layout-main-key')
            e.preventDefault();
            setList([<span key={uuid()}>{e.key.toUpperCase()}</span>, ...list])
            if(e.key == ' ') {
                setList([<span key={uuid()}>Space</span>, ...list])
            }
        }

        window.addEventListener('keydown', pressKeySon)
        
        return () => window.removeEventListener('keydown', pressKeySon);
    }, [list])

   
  return (
    <Fragment>
        <div className="layout__container">
                <div className='layout-main-key esc'><p>ESC</p></div>
                <div className='layout-main-key'><p>F1</p></div>
                <div className='layout-main-key'><p>F2</p></div>
                <div className='layout-main-key'><p>F3</p></div>
                <div className='layout-main-key mr'><p>F4</p></div>
                <div className='layout-main-key'><p>F5</p></div>
                <div className='layout-main-key'><p>F6</p></div>
                <div className='layout-main-key'><p>F7</p></div>
                <div className='layout-main-key mr'><p>F8</p></div>
                <div className='layout-main-key'><p>F9</p></div>
                <div className='layout-main-key'><p>F10</p></div>
                <div className='layout-main-key'><p>F11</p></div>
                <div className='layout-main-key margin-right'><p>F12</p></div>
                <div className='layout-main-key margin-right'><p>PrtSc</p></div>
                <div className='layout-main-key'><p>ScrLk</p></div>
                <div className='layout-main-key'><p>Pause</p></div>
                <div className='layout-main-key'><p>Home</p></div>
                <div className='layout-main-key'><p>End</p></div>
                    <hr className='hidden-line'/>
                <div className='layout-main-key'><p>` ~ </p></div>
                <div className='layout-main-key'><p>1</p></div>
                <div className='layout-main-key'><p>2</p></div>
                <div className='layout-main-key'><p>3</p></div>
                <div className='layout-main-key'><p>4</p></div>
                <div className='layout-main-key'><p>5</p></div>
                <div id='6' className='layout-main-key'><p>6</p></div>
                <div className='layout-main-key'><p>7</p></div>
                <div className='layout-main-key'><p>8</p></div>
                <div className='layout-main-key'><p>9</p></div>
                <div className='layout-main-key'><p>0</p></div>
                <div className='layout-main-key'><p>- _</p></div>
                <div className='layout-main-key'><p>+ =</p></div>
                <div className='layout-main-key backspace margin-right'><p>Backspace</p></div>
                <div className='layout-main-key margin-right'><p>PgUp</p></div>
                <div className='layout-main-key'><p>Num <br /> Lock</p></div>
                <div className='layout-main-key'><p>/</p></div>
                <div className='layout-main-key'><p>*</p></div>
                <div className='layout-main-key'><p>-</p></div>
                    <hr className='hidden-line'/>
                <div className='layout-main-key tab'><p>Tab</p></div>
                <div className='layout-main-key'><p>q</p></div>
                <div className='layout-main-key'><p>w</p></div>
                <div className='layout-main-key'><p>e</p></div>
                <div className='layout-main-key'><p>r</p></div>
                <div className='layout-main-key'><p>t</p></div>
                <div className='layout-main-key'><p>y</p></div>
                <div className='layout-main-key'><p>u</p></div>
                <div className='layout-main-key'><p>i</p></div>
                <div className='layout-main-key'><p>o</p></div>
                <div className='layout-main-key'><p>p</p></div>
                <div className='layout-main-key'><p>&#123; [</p></div>
                <div className='layout-main-key'><p>&#125; ]</p></div>
                <div className='layout-main-key margin-right straight'><p>\ |</p></div>
                <div className='layout-main-key margin-right'><p>PgDn</p></div>
                <div className='layout-main-key'><p>7</p></div>
                <div className='layout-main-key'><p>8</p></div>
                <div className='layout-main-key'><p>9</p></div>
                <div className='layout-main-key plus'><p>+</p></div>
                    <hr className='hidden-line' />
                <div className='layout-main-key relative caps'><p>Caps</p></div>
                <div className='layout-main-key relative'><p>a</p></div>
                <div className='layout-main-key relative'><p>s</p></div>
                <div className='layout-main-key relative'><p>d</p></div>
                <div className='layout-main-key relative'><p>f</p></div>
                <div className='layout-main-key relative'><p>g</p></div>
                <div className='layout-main-key relative'><p>h</p></div>
                <div className='layout-main-key relative'><p>j</p></div>
                <div className='layout-main-key relative'><p>k</p></div>
                <div className='layout-main-key relative'><p>l</p></div>
                <div className='layout-main-key relative'><p>; :</p></div>
                <div className='layout-main-key relative'><p>' "</p></div>
                <div className='layout-main-key relative enter margin-right'><p>Enter</p></div>
                <div className='layout-main-key relative margin-right'><p>Ins</p></div>
                <div className='layout-main-key relative'><p>4</p></div>
                <div className='layout-main-key relative'><p>5</p></div>
                <div className='layout-main-key relative'><p>6</p></div>
                    <hr className='hidden-line'/>
                <div className='layout-main-key relative left-shift'><p>Shift</p></div>
                <div className='layout-main-key relative'><p>z</p></div>
                <div className='layout-main-key relative'><p>x</p></div>
                <div className='layout-main-key relative'><p>c</p></div>
                <div className='layout-main-key relative'><p>v</p></div>
                <div className='layout-main-key relative'><p>b</p></div>
                <div className='layout-main-key relative'><p>n</p></div>
                <div className='layout-main-key relative'><p>m</p></div>
                <div className='layout-main-key relative'><p>, &lt;</p></div>
                <div className='layout-main-key relative'><p>. &gt;</p></div>
                <div className='layout-main-key relative'><p>/ ?</p></div>
                <div className='layout-main-key relative shift margin-right'><p>Shift</p></div>
                <div className='layout-main-key relative margin-right'><p>Del</p></div>
                <div className='layout-main-key relative'><p>1</p></div>
                <div className='layout-main-key relative'><p>2</p></div>
                <div className='layout-main-key relative'><p>3</p></div>
                <div className='layout-main-key relative tall-enter'><p>Enter</p></div>
                    <hr className='hidden-line'/>
                <div className='layout-main-key relative-two ctrl'><p>Ctrl</p></div>
                <div className='layout-main-key relative-two windows'><p><AiOutlineWindows /></p></div>
                <div className='layout-main-key relative-two alt'><p>Alt</p></div>
                <div className='layout-main-key relative-two spaceBar'><p>SPACE</p></div>
                <div className='layout-main-key relative-two alt'><p>Alt</p></div>
                <div className='layout-main-key relative-two notes'><p><MdOutlineNotes /></p></div>
                <div className='layout-main-key relative-two ctrl margin-right'><p>Ctrl</p></div>
                <div className='layout-main-key relative-two margin-right'><p><AiOutlineArrowUp /></p></div>
                <div className='layout-main-key relative-two alt zero'><p>0</p></div>
                <div className='layout-main-key relative-two'><p>.</p></div>
                    <hr className='hidden-line'/>
                <div className='layout-main-key relative-two left-click'><p></p></div>
                <div className='layout-main-key relative-two middle-click'><p></p></div>
                <div className='layout-main-key relative-two right-click'><p></p></div>
                <div className='layout-main-key relative arrows left-arrow'><p><AiOutlineArrowLeft /></p></div>
                <div className='layout-main-key relative arrows down-arrow'><p><AiOutlineArrowDown /></p></div>
                <div className='layout-main-key relative arrows right-arrow'><p><AiOutlineArrowRight /></p></div>


        </div>
    </Fragment>
  )
}

export default LayoutMain