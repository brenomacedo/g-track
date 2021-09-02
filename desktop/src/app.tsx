import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PlayerProvider from './contexts/PlayerContext';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';
import AOS from 'aos'
import 'react-toastify/dist/ReactToastify.css'
import 'aos/dist/aos.css'

AOS.init()

function render() {
  ReactDOM.render((
      <PlayerProvider>
          <Routes />
          <ToastContainer />
      </PlayerProvider>
  ), document.body);
}

render();
