import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import { createBrowserHistory } from "history";

import { Provider } from 'react-redux';

import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import configureStore from './store'

const history = createBrowserHistory()

function redirectToFilms(planetData) {
  history.push(`/films/${encodeURIComponent(planetData.films)}`)
}

function redirectToResidents(planetData) {
  history.push(`/residents/${encodeURIComponent(planetData.residents)}`)
}

function redirectToPlanetDetails(planetData) {
  const found = planetData.url.match(/(\d*)\/$/);
  if (found) {
    history.push(`/planet/${found[1]}`)
  }
}

const initialState = {
  planets:{
    header: [
      'name',
      'rotation_period',
      'orbital_period',
      'diameter',
      'climate',
      'gravity',
      'terrain',
      'surface_water',
      'population',
      'residents',
      'films'
    ],
    actions: [
      {
        label: 'Go to Details',
        action: redirectToPlanetDetails
      },
      {
        label: 'Go to Films',
        action: redirectToFilms
      },
      {
        label: 'Go to Residents',
        action: redirectToResidents
      },
    ]
  }
}
const store = configureStore(initialState)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
