import { PrimeReactProvider } from 'primereact/api';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "primereact/resources/themes/lara-light-teal/theme.css";
import Header from './components/Header/Header'
import DetailPage from './components/Detail_page/DetailPage';

import Card from './components/Area/Area';
import Location from './components/Location/Location';

import { Button } from 'primereact/button';


export default function MyApp({ Component, pageProps }) {
  return (

    <>

      <Header />
  

      <Card />
      


    </>

  );
}