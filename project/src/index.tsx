import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './store/reducer';
import App from './components/app/app';
import {films} from './mocks/films';
import {comments} from './mocks/comments';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App films={films} comments={comments}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
