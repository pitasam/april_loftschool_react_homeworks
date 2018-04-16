import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {

    // создает ref-ссылку
  constructor(props){
    super(props);
    this.video = React.createRef();
  }

  // начать проигрывание видео
    videoPlay = () => {
      const video = this.video.current;

      video.play();
    };

  // поставить на паузу видео
    videoStop = () => {
        const video = this.video.current;

        video.pause();
    };

  render() {

    return (
        <div className="video-player">
          <video ref={this.video} className="video-player__source" >
            <source src={videoFile} type="video/mp4" />
          </video>

          <div>
            <button onClick={this.videoPlay}>Play</button>
            <button onClick={this.videoStop}>Stop</button>
          </div>
        </div>
    );
  }
}

export default VideoPlayer;
