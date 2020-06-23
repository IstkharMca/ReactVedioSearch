import React from 'react';
import VideoItems from './VideoItems';

const VideoList = ({ videos, onVedioSelect }) => {
    const listVideos = videos.map((video) => {
        return <VideoItems key={video.id.videoId} onVedioSelect={onVedioSelect} video={video} />
    })
    return <div className='ui relaxed devided list'>
        {listVideos}
    </div>
}

export default VideoList