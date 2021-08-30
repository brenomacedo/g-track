import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Routes from './routes';
import AOS from 'aos'
import 'aos/dist/aos.css'
import PlayerProvider from './contexts/PlayerContext';

AOS.init()

function render() {
  ReactDOM.render((
      <PlayerProvider>
          <Routes />
      </PlayerProvider>
  ), document.body);
}

render();
