import VideoPlayer from 'react-video-js-player';
import HomeVideo from './videohome- 27186.mp4';

export default function VideoHome() {

    const videoSrc = HomeVideo;
    const poster = "http://dotnetguru.org/wp-content/uploads/2018/12/full-stack-developer.jpg"

    return (
        <div >
            {/*    <h1>VideoHome</h1> */}
            <VideoPlayer
                src={videoSrc}
                className="video-home"
                poster={poster} width="720"
                height="420"
                playbackRates={[0.5, 1, 3.85, 16]} // cài tốc độ phát video tốc đồ phát
            />

        </div>
    );
}