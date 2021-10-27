import {Films} from '../../types/films';

type VideoPlayerProps = {
  film: Films
}

function VideoPlayer({film}: VideoPlayerProps): JSX.Element {
  return (
    <video width="280" height="175" poster={film.posterImage} autoPlay>
      <source src={film.previewVideoLink} type='video/ogg; codecs="theora, vorbis"'/>
    </video>
  );
}

export default VideoPlayer;
