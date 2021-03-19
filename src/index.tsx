import React from 'react';
import ReactDOM from 'react-dom';
import { Reset } from 'styled-reset';
import MainPage from './components/mainPage/mainPage';


ReactDOM.render(
  <>
    <Reset/> {/* dodaje style resetujace */}
    <MainPage/>
  </>,
  document.getElementById('root')
);

