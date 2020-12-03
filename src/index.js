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
  console.log(`redirect to grid with ${planetData.films.length} Films`)
  history.push('/films')
}

function redirectToResidents(planetData) {
  console.log(`redirect to grid with ${planetData.residents.length} Residents`)
  history.push('/residents')
}

function redirectToPlanetDetails(planetData) {
  console.log(`redirect to planet details ${planetData.url}`)
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
      'population'
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
