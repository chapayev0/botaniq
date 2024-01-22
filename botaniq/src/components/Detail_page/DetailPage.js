import { PrimeReactProvider } from 'primereact/api';

import "primereact/resources/themes/lara-light-teal/theme.css";
import Top from './Top/TopSection'
import Middle from './Middle/MiddleSection'
import Header from '../Header/Header'
import { Divider } from 'primereact/divider';
export default function MyApp({ Component, pageProps }) {
    return (
        

        <>

        <Header/>
        
        <Top />
        
        <Middle />
        
        </>
       
    );
}