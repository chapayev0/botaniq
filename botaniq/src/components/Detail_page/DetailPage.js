import { PrimeReactProvider } from 'primereact/api';

import "primereact/resources/themes/lara-light-teal/theme.css";
import Top from './Top/TopSection'
import Middle from './Middle/MiddleSection'
import { Divider } from 'primereact/divider';
export default function MyApp({ Component, pageProps }) {
    return (
        

        <>
        
        <Top />
        
        <Middle />
        
        </>
       
    );
}