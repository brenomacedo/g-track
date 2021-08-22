import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Routes from './routes';
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

function render() {
  ReactDOM.render(<Routes />, document.body);
}

render();
