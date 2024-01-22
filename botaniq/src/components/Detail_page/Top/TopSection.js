// AdvancedDemo.js

import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { Galleria } from 'primereact/galleria';
import { classNames } from 'primereact/utils';
import { PhotoService } from './PhotoService';
import "primereact/resources/themes/lara-light-teal/theme.css";
import "./TopSection.css";

import { Divider } from 'primereact/divider';

import { Fieldset } from 'primereact/fieldset';


export default function CaptionDemo() {
    const [images, setImages] = useState(null);
    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ height: '100px',display: 'block' }} />;
    }

    const caption = (item) => {
        return (
            <React.Fragment>
                <div className="text-xl mb-2 font-bold">{item.title}</div>
                <p className="text-white">{item.alt}</p>
            </React.Fragment>
        );
    }

    return (
        <>


            <div className='flex-container'>

                <div className="card">
                    <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5}
                        item={itemTemplate} thumbnail={thumbnailTemplate} caption={caption} style={{ maxWidth: '640px' }} />
                </div>

                <div>

                    <Fieldset legend="කොහොඹ - Kohomba">
                        <p className="m-0">
                            Azadirachta indica, commonly known as neem, margosa, nimtree or Indian lilac,[3] is a tree in the mahogany family Meliaceae. It is one of two species in the genus Azadirachta. It is native to the Indian subcontinent and to parts of Southeast Asia, but is naturalized and grown around the world in tropical and subtropical areas. Its fruits and seeds are the source of neem oil. Nim is a Hindustani noun derived from Sanskrit nimba


                        </p>
                        <Divider />

                        <table>
                            <tr>
                                <td>Scientific Name: </td>
                                <td>Azadirachta indica</td>
                            </tr>

                            <tr>
                                <td>Family: </td>
                                <td>Meliaceae</td>
                            </tr>

                            <tr>
                                <td>Vernacular Names: </td>
                                <td>Vembu (Tamil); Neem, Margosa (English)</td>
                            </tr>

                            <tr>
                                <td>Habitat: </td>
                                <td>Shrublands, Opean wood lands, Floodplains</td>
                            </tr>

                            <tr>
                                <td>Distribution: </td>
                                <td>India, Buruma, throught Sri Lanka</td>
                            </tr>
                        </table>

                        <Divider />
                    </Fieldset>

                </div>
            </div>



        </>
    )
}