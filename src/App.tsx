import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {
    ControlledCheckBox,
    ControlledInput,
    ControlledSelect
} from "./components/controlledElements/controlledElements";
import {Select} from "./components/customSelect/Select";
import {SelectCorrect} from "./components/customSelect/SelectCorrect";
import UnControledAccordion from "./components/UnControledAccordion/UncontroledAccordion";
import OnOff from "./components/OnOff/OnOff";
import {AccordionMemo} from "./components/Accordion/Accordion";
import {ExampleForUseMemo} from "./components/forUseMemo/ExampleForUseMemo";


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


    const RatingMemo = React.memo(Rating)
    const ControlledInputMemo = React.memo(ControlledInput)
    const ControlledCheckBoxMemo = React.memo(ControlledCheckBox)
    const ControlledSelectMemo = React.memo(ControlledSelect)
    const SelectCorrectMemo = React.memo(SelectCorrect)
    const UnControledAccordionMemo = React.memo(UnControledAccordion)
    const OnOffMemo = React.memo(OnOff)

    return (
        <div>
            {/*<h4>Controlled Components</h4>*/}
            {/*<OnOffMemo currentToggle={toggle}*/}
            {/*       changeToggle={setToggle}/>*/}
            {/*<AccordionMemo titleValue={'Menu'}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onChange={() => {*/}
            {/*               setAccordionCollapsed(!accordionCollapsed)*/}
            {/*           }}*/}
            {/*           items={[*/}
            {/*               {title: 'Alex', value: 1},*/}
            {/*               {title: 'Nika', value: 2},*/}
            {/*               {title: 'Natalie', value: 3}*/}
            {/*           ]}*/}
            {/*           onClick={onClick}*/}
            {/*/>*/}
            {/*<RatingMemo value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<ControlledInputMemo/>*/}
            {/*<ControlledCheckBoxMemo/>*/}
            {/*<div>----------------</div>*/}
            {/*<ControlledSelectMemo/>*/}
            {/*<hr/>*/}
            {/*Домашка по Select*/}
            {/*<hr/>*/}
            {/*            <Select*/}
            {/*    options={technologies}*/}
            {/*/>*/}
            {/*<SelectCorrectMemo*/}
            {/*    onChange={setValue}*/}
            {/*    value={value}*/}
            {/*    items={technologiesCorrect}/>*/}

            {/*<hr/>*/}
            {/*<UnControledAccordionMemo titleValue={'for REDUCER'}/>*/}
            <hr/>
            Example use.Memo
            <ExampleForUseMemo/>


        </div>
    );
}

export default App;
