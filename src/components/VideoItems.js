import './VideoItems';
import React from 'react';

const VideoItems = ({video,onVedioSelect}) => {
    return (
      <div onClick={() => onVedioSelect(video)} className="video-item item">
        <img alt=""
        className='ui image'
        src={video.snippet.thumbnails.medium.url} />
        <div className='content'>
            <div className='header'>{video.snippet.title}</div>
        </div>    
      </div>
    )
}

export default VideoItems