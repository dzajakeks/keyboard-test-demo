import React from 'react';
import '../sass/_mediakeys.scss';
import mute from '../../photos/mute.png';
import volumeUp from '../../photos/volume.png';
import speaker from '../../photos/speaker.png';
import rewind from '../../photos/rewind.png';
import stop from '../../photos/stop.png';
import playPause from '../../photos/play-pause.png';
import forward from '../../photos/forward.png';
import music from '../../photos/music-alt.png';
import globe from '../../photos/globe.png';
import angleLeft from '../../photos/angle-left.png';
import angleRight from '../../photos/angle-right.png';
import refresh from '../../photos/refresh.png';
import cross from '../../photos/cross.png';
import search from '../../photos/search.png';
import star from '../../photos/star.png';
import envelope from '../../photos/envelope.png';
import calculator from '../../photos/calculator.png';
import folder from '../../photos/folder.png';

const MediaKeys = () => {
  return (
    <>
        <div className="media-keys__container">
            <div className='media-keys-key'><p><img src={mute} alt="mute icon" /></p></div>
            <div className='media-keys-key'><p><img src={volumeUp} alt="volume up icon" /></p></div>
            <div className='media-keys-key'><p><img src={speaker} alt="speaker up icon" /></p></div>
            <div className='media-keys-key'><p><img src={rewind} alt="rewind icon" /></p></div>
            <div className='media-keys-key'><p><img src={stop} alt="stop icon" /></p></div>
            <div className='media-keys-key'><p><img src={playPause} alt="play pause icon" /></p></div>
            <div className='media-keys-key'><p><img src={forward} alt="forward icon" /></p></div>
            <div className='media-keys-key icon-margin-right'><p><img src={music} alt="music icon" /></p></div>
            <div className='media-keys-key'><p><img src={globe} alt="globe icon" /></p></div>
            <div className='media-keys-key'><p><img src={angleLeft} alt="left icon" /></p></div>
            <div className='media-keys-key'><p><img src={angleRight} alt="right icon" /></p></div>
            <div className='media-keys-key'><p><img src={refresh} alt="refresh icon" /></p></div>
            <div className='media-keys-key'><p><img src={cross} alt="cross icon" /></p></div>
            <div className='media-keys-key'><p><img src={search} alt="search icon" /></p></div>
            <div className='media-keys-key icon-margin-right'><p><img src={star} alt="star icon" /></p></div>
            <div className='media-keys-key'><p><img src={envelope} alt="envelope icon" /></p></div>
            <div className='media-keys-key'><p><img src={calculator} alt="calculator icon" /></p></div>
            <div className='media-keys-key'><p><img src={folder} alt="folder icon" /></p></div>
        </div>
    </>
  )
}

export default MediaKeys