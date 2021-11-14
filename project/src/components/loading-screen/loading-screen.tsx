function LoadingScreen(): JSX.Element {
  return (
    <>
      <h3 hidden>Loading screen</h3>
      <div className='spinner'>
        <div className='block'>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
        </div>
      </div>
    </>
  );
}

export default LoadingScreen;
