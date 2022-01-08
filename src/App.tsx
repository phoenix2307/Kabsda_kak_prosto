import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import {
    ControlledCheckBox,
    ControlledInput,
    ControlledSelect
} from "./components/controlledElements/controlledElements";
import {Select} from "./components/customSelect/Select";
import {SelectCorrect} from "./components/customSelect/SelectCorrect";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [toggle, setToggle] = useState<boolean>(true)
    //to Select
    const technologies = [
        {id: '1', title: 'HTML'},
        {id: '2', title: 'CSS'},
        {id: '3', title: 'JavaScript'},
        {id: '4', title: 'TypeScript'},
        {id: '5', title: 'React'},
        {id: '6', title: 'React Native'}
    ]
    const onClick = (value: any) => {
        alert(`item: ${value} was clicked`)
    }
    //
    //to SelectCorrect
    const technologiesCorrect = [
        {value: '1', title: 'HTML'},
        {value: '2', title: 'CSS'},
        {value: '3', title: 'JavaScript'},
        {value: '4', title: 'TypeScript'},
        {value: '5', title: 'React'},
        {value: '6', title: 'React Native'}
    ]

    const [value, setValue] = useState('4')
    //можно просто вызывать setValue по ссылке. Так как в нее через пропсы возвращается значение value
/*    const clickItem = (value: any) => {
        setValue(value)
    }*/
    //

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
                           {title: 'Natalie', value: 3}
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
            {/*            <Select
                options={technologies}
            />*/}
            <SelectCorrect
                onChange={setValue}
                value={value}
                items={technologiesCorrect}/>

        </div>
    );
}

export default App;
