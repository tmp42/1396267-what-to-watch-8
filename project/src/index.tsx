import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  promo: 'The Grand Budapest Hotel',
  genre: 'Drama',
  release: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App promo={Setting.promo} genre={Setting.genre} release={Setting.release}/>
  </React.StrictMode>,
  document.getElementById('root'));
