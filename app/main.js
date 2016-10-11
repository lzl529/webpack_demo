import React from 'react';
import {render} from 'react-dom';
import Greeter from './greeter';

render(<Greeter />, document.getElementById('container'));


// var greeter = require('./greeter.js');
// document.getElementById('container').appendChild(greeter());