import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import UnControledAccordion from "./components/UnControledAccordion/UncontroledAccordion";
import {UnControledRating} from "./components/UnControledRating/UnControledRating";
import {UnControlledOnOff} from "./components/UnControlledOnOff/UnControlledOnOff";
import OnOff from "./components/OnOff/OnOff";


function App() {
    console.log('App rendering')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [toggle, setToggle] = useState<boolean>(true)

    return (
        <div>
            <h4>Controlled Components</h4>
            <OnOff currentToggle={toggle}
                   changeToggle={setToggle}/>
            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>

            <h4>Uncontrolled Components</h4>

            <UnControlledOnOff onChange={setToggle}/>{toggle.toString()}
            <UnControledAccordion titleValue={'Menu'}/>
            <UnControledRating/>

        </div>
    );
}

export default App;
