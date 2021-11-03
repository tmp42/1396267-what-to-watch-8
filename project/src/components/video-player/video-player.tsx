import {Films} from '../../types/films';

type VideoPlayerProps = {
  film: Films
}

function VideoPlayer({film}: VideoPlayerProps): JSX.Element {
  return (
    <video width="280" height="175" poster={film.poster_image} autoPlay>
      <source src={film.preview_video_link} type='video/ogg; codecs="theora, vorbis"'/>
    </video>
  );
}

export default VideoPlayer;
