import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import UnControledAccordion from "./components/UnControledAccordion/UncontroledAccordion";
import {UnControledRating} from "./components/UnControledRating/UnControledRating";
import {UnControlledOnOff} from "./components/UnControlledOnOff/UnControlledOnOff";
import OnOff from "./components/OnOff/OnOff";
import {
    ControlledCheckBox,
    ControlledInput,
    ControlledSelect
} from "./components/controlledElements/controlledElements";
import {Select} from "./components/customSelect/Select";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [toggle, setToggle] = useState<boolean>(true)

    const technologies = [
        {id: '1', title: 'HTML'},
        {id: '2', title: 'CSS'},
        {id: '3', title: 'JavaScript'},
        {id: '4', title: 'TypeScript'},
        {id: '5', title: 'React'},
        {id: '6', title: 'React Native'}
    ]

    let [selectId, setSelectId] = useState<string>('1')

    const onClick = (value: any) => {
        alert(`item: ${value} was clicked`)
    }

    return (
        <div>
            <h4>Controlled Components</h4>
            <OnOff currentToggle={toggle}
                   changeToggle={setToggle}/>
            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}
                       items={[
                           {title: 'Alex', value: 1},
                           {title: 'Nika', value: 2},
                           {title: 'Natali', value: 3}
                       ]}
                       onClick={onClick}
            />
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <ControlledInput/>
            <ControlledCheckBox/>
            <div>----------------</div>
            <ControlledSelect/>
            <hr/>
            Домашка по Select
            <hr/>
            <Select
                options={technologies}
            />


{/*            <h4>Uncontrolled Components</h4>

            <UnControlledOnOff onChange={setToggle}/>{toggle.toString()}
            <UnControledAccordion titleValue={'Menu'}/>
            <UnControledRating/>*/}

        </div>
    );
}

export default App;
