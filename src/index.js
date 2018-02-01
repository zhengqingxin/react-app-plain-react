import 'react-hot-loader/patch';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes/route';
import './index.css';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('root')
  );
};

registerServiceWorker();

render(Routes);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./routes/route', () => {
    render(Routes);
  });
}