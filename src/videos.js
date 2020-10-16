import React from 'react';

const videos = () => {
  return (
    <div>
      <div className="video vid1">
        <video src="videos/Pretty.In.Pink.small.mp4" autoPlay loop muted />
      </div>
      <div className="video vid2">
        <video src="videos/ark.of.truth.mp4" autoPlay loop muted />
      </div>
      <div className="video vid3">
        <video src="videos/Pretty.In.Pink.small.mp4" autoPlay loop muted />
      </div>
    </div>
  );
};

export default videos;
