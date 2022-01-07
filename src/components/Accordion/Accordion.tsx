import React, {ChangeEvent, useState} from "react";
import {Inp} from "../Input/Input";
import {InpRef} from "../Input/InputRef";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}


function Accordion(props: AccordionPropsType) {
    // const [value, setValue] = useState <ChangeEvent<HTMLInputElement> | string>('')

    return <div>
        <AccordionTitle title={props.titleValue} click={props.onChange}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        <div>
            {/*<Inp changeInputValue={changeInputValue}/> - {value}*/}
            <Inp/>
            <InpRef/>
        </div>

    </div>

}

type AccordionTitlePropsType = {
    title: string
    click: () => void

}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.click}>-- {props.title} --</h3>
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return <ul>
        {props.items.map((i, index) => <li
            key={index}
            onClick={() => props.onClick(i.value)}>{i.title}</li>)}
    </ul>
}


export default Accordion