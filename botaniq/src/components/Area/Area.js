
import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-teal/theme.css";
import "./Area.css";
import "../Detail_page/DetailPage";
import "../Location/Location";
import { Link } from 'react-router-dom';

export default function AdvancedDemo() {
    const header = (
        <img alt="Card" src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGxhbnR8ZW58MHx8MHx8fDA%3D" />
    );
    const footer = (
        <>
            <div className='btn-box'>

                <a href="/details" class="your-button-class">
                <Button label="More Details" icon="pi pi-check" />
                </a>
                

                <a href="/location" class="your-button-class">
                <Button label="Location Data" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} />
                </a>
                
            </div>
        </>
    );

    return (
        <>

            <div className='a-flex-container '>

                <div className="card flex justify-content-center">
                    <Card title="කොහොඹ" subTitle="Azadirachta indica" footer={footer} header={header} className="md:w-25rem">
                        <p className="m-0">
                            Azadirachta indica, commonly known as neem, is a fast-growing evergreen tree native to the Indian subcontinent and other parts of Southeast Asia. It belongs to the mahogany family (Meliaceae) and is highly valued for its various medicinal, pesticidal, and cosmetic properties.
                        </p>
                    </Card>
                </div>

                <div className="card flex justify-content-center">
                    <Card title="නික" subTitle="Vitex negundo" footer={footer} header={header} className="md:w-25rem">
                        <p className="m-0">
                            Vitex negundo has a history of traditional medicinal use in various cultures.
                            Different parts of the plant, including leaves, roots, and seeds, are used for their potential anti-inflammatory, analgesic, and antipyretic properties.</p>
                    </Card>
                </div>

                <div className="card flex justify-content-center">
                    <Card title="මී" subTitle="Madhuca longifolia" footer={footer} header={header} className="md:w-25rem">
                        <p className="m-0">
                            Madhuca longifolia, commonly known as Mahua or Mahwa, is a large deciduous tree native to the Indian subcontinent. It belongs to the Sapotaceae family and is well-known for its economic, cultural, and ecological significance. Here's a short description of the tree:
                        </p>
                    </Card>
                </div>

                <div className="card flex justify-content-center">
                    <Card title="කුඹුක්" subTitle="Terminalia arjuna" footer={footer} header={header} className="md:w-25rem">
                        <p className="m-0">
                            Terminalia arjuna is a deciduous tree native to the Indian subcontinent, belonging to the Combretaceae family. Commonly known as Arjuna, this tree has been used for centuries in traditional Ayurvedic medicine for its various medicinal properties. Here's a short description of Terminalia arjuna:
                        </p>
                    </Card>
                </div>
            </div>

        </>

    )
}
