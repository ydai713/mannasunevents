"use client";

import ReactPlayer from 'react-player'

const Portfolio = () => {
  return (
    <div>
      <h2>NextJs VideoPlayer - GeeksforGeeks</h2>
      <ReactPlayer
        url='https://player.vimeo.com/video/363362477?h=190dcdb576'
        controls
        onStart={() => console.log('onLoadStart')}
      />
    </div>
  );
}

export default Portfolio;
