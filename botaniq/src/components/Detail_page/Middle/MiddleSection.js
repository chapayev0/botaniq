import React from 'react';
import { Panel } from 'primereact/panel';
import "./MiddleSection.css";

export default function BasicDemo() {
    return (
        <>

        <div className='m-flex-container '>

            
        <Panel header="Traditional medicine">
                <p className="m-0">
                Products made from margosa trees have been used in the traditional medicine of India for centuries,[19][18] for treating skin troubles and rheumatism,[21] but there is insufficient clinical evidence to indicate any benefits of using margosa for medicinal purposes.[18] In adults, no specific doses have been established, and short-term use of margosa appears to be safe, while long-term use may harm the kidneys or liver; in small children, margosa oil is toxic and can lead to death.[18] Margosa may also cause miscarriages, infertility, and low blood sugar.[18]
                </p>
            </Panel>
            <Panel header="Biotechnology">
                <p className="m-0">
                The biopesticide produced by extraction from the tree seeds contains limonoid triterpenes.[18] Currently, the extraction process has disadvantages such as contamination with fungi and heterogeneity in the content of limonoids due to genetic, climatic, and geographical variations.[38][39] To overcome these problems, production of limonoids from plant cell suspension and hairy root cultures in bioreactors has been studied,[40][41] including the development of a two-stage bioreactor process that enhances growth and production of limonoids with cell suspension cultures of A. indica.[42]
                </p>
            </Panel>

            <Panel header="Other uses">
                <p className="m-0">
                Tree: the margosa tree is of great importance for its anti-desertification properties and possibly as a good carbon dioxide sink. It is also used for maintaining soil fertility.[25][26]
    Fertilizer: neem extract is added to fertilizers (urea) as a nitrification inhibitor.[27]
    Animal feed: margosa leaves can be occasionally used as forage for ruminants and rabbits.[28]
    Teeth cleaning: margosa has traditionally been used as a type of teeth-cleaning twig.[29]
                </p>
            </Panel>
        </div>


        </>


    )
}