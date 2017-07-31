import React from 'react';

const VideoDetail = (props) => {

    if(!props.video) {
        return <div>Loading...</div>
    }

    const video = props.video;
    const videoId = video.id.videoId;
    // alternative to const url = 'https://www.youtube.com/embed/' + videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{ video.snippet.title }</div>
                <div>{ video.snippet.description }</div>
            </div>
        </div>
    );
};

export default VideoDetail;