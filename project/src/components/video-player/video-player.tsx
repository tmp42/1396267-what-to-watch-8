import {Film} from '../../types/films';

type VideoPlayerProps = {
  film: Film
}

function VideoPlayer({film}: VideoPlayerProps): JSX.Element {
  return (
    <video width="280" src={film.preview_video_link} height="175" poster={film.poster_image} autoPlay muted/>
  );
}

export default VideoPlayer;
