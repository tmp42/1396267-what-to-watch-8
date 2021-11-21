import {MAX_ITEM_SPINNER} from '../../../const';

function LoadingScreen(): JSX.Element {
  return (
    <>
      <h3 hidden>Loading screen</h3>
      <div className='spinner'>
        <div className='block'>
          {Array(MAX_ITEM_SPINNER).fill(null).map(() => <div className="item" key={Math.random()}/>)}
        </div>
      </div>
    </>
  );
}

export default LoadingScreen;
