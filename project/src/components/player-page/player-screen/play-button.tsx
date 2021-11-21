import {MouseEventHandler} from 'react';

type PlayButtonProps = {
  isPlay: boolean,
  isReady: boolean,
  onPlayButtonClickHandler: MouseEventHandler<HTMLButtonElement>,
}

function PlayButton({isPlay, isReady, onPlayButtonClickHandler}: PlayButtonProps): JSX.Element {

  return (
    <button type="button" className="player__play" disabled={!isReady} onClick={onPlayButtonClickHandler}>
      {!isPlay ?
        <>
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"/>
          </svg>
          <span>Play</span>
        </> :
        <>
          <svg viewBox="0 0 14 21" width="14" height="21">
            <use xlinkHref="#pause"/>
          </svg>
          <span>Pause</span>
        </>}
    </button>
  );
}

export default PlayButton;
