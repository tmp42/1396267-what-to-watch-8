function LoadingScreen(): JSX.Element {
  return (
    <>
      <h3 hidden>Loading screen</h3>
      <div className='spinner'>
        <div className='block'>
          {Array(8).fill(null).map(() => <div className="item" key={Math.random()}/>)}
        </div>
      </div>
    </>
  );
}

export default LoadingScreen;
