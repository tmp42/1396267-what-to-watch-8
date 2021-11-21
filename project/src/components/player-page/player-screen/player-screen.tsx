import {memo, useEffect, useRef, useState} from 'react';
import {useHistory, useParams} from 'react-router';
import {useApi} from '../../../store/api-actions';
import {formatRemainingTime} from '../../../utils/utils';
import LoadingScreen from '../../general/loading-screen/loading-screen';
import {Film} from '../../../types/films';
import {APIRoute} from '../../../const';
import PlayButton from './play-button';

function PlayerScreen(): JSX.Element {
  const api = useApi();
  const [videoFilm, setVideoFilm] = useState<Film | null>(null);
  const {id} = useParams<{ id: string }>();
  const history = useHistory();

  const [currentTime, setCurrentTime] = useState(0);
  const [isReady, setReady] = useState(false);
  const [isPlay, setPlay] = useState(false);
  const [{duration, remainingTime}, setDuration] = useState({duration: 0, remainingTime: 0});

  const videoRef = useRef<HTMLVideoElement>(null);
  const {current: videoElement} = videoRef;
  const progressBarRef = useRef<HTMLProgressElement>(null);
  const {current: progressBarElement} = progressBarRef;

  useEffect(() => {
    api.get<Film>(APIRoute.Film.replace(':id', id.toString())).then((data) => setVideoFilm(data.data));
  }, [api, id]);

  useEffect(() => {
    if (!isReady || !videoElement) {
      return;
    }

    const videoDuration = Math.round(videoElement.duration);
    setDuration((state) => ({
      ...state, duration: videoDuration, remainingTime: videoDuration,
    }));
  }, [isReady, videoElement]);

  useEffect(() => {
    const play = async (video: HTMLVideoElement) => {
      try {
        await video.play();
      } catch {
        setPlay(false);
      }
    };

    if (!videoElement) {
      return;
    }

    if (isPlay) {
      play(videoElement);
      return;
    }

    videoElement.pause();
  }, [isPlay, videoElement]);

  const RemainingMovieTime = isReady ? formatRemainingTime(remainingTime) : 'Loading...';

  const playButtonClickHandler = () => {
    setPlay((prevState) => !prevState);
  };

  const videoProgressHandler = () => {
    if (!videoElement || !progressBarElement) {
      return;
    }

    const currentVideoTime = videoElement.currentTime;
    const currentPercentage = currentVideoTime / duration * 100;
    const currentRemainingTime = Math.round(duration * (100 - currentPercentage) / 100);

    setDuration((state) => ({
      ...state, remainingTime: currentRemainingTime,
    }));
    setCurrentTime(currentPercentage);
    progressBarElement.value = currentVideoTime;
  };

  const fullscreenButtonClickHandler = () => {
    if (videoElement) {
      videoElement.requestFullscreen();
    }
  };

  const videoLoadedDataHandler = () => {
    setReady(true);
  };

  return (
    <div className="player">

      {!isReady && <LoadingScreen/>}

      <video preload="metadata" src={videoFilm?.video_link} className="player__video" poster={videoFilm?.preview_image} ref={videoRef}
        onTimeUpdate={videoProgressHandler}
        onLoadedData={videoLoadedDataHandler}
      />

      <button type="button" className="player__exit" onClick={() => history.go(-1)}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" max={duration} ref={progressBarRef}/>
            <div className="player__toggler" style={{left: `${currentTime}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{RemainingMovieTime}</div>
        </div>

        <div className="player__controls-row">
          <PlayButton isPlay={isPlay} isReady={isReady} playButtonClickHandler={playButtonClickHandler}/>

          <button type="button" className="player__full-screen" disabled={!isReady} onClick={fullscreenButtonClickHandler}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"/>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(PlayerScreen);
