import { PrimeReactProvider } from 'primereact/api';

import "primereact/resources/themes/lara-light-teal/theme.css";
import Header from './components/Header/Header'
import DetailPage from './components/Detail_page/DetailPage';

import { Button } from 'primereact/button';
        

export default function MyApp({ Component, pageProps }) {
    return (
        
      <>
      <Header />
      <DetailPage />
      
      </>
       
    );
}