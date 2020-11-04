import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homes from './Home';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import mysql from 'mysql';

ReactDOM.render(
  <BrowserRouter>
    <Homes/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default function(Homes){
  rmportal.get('/', (req, res) => {
      Connection.query('SELECT * FROM rmp.application', function (err, data) {
        (err) ? res.send(err) : res.json({ applications: data });
      });
    });
};
