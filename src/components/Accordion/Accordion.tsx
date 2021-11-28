import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}

function Accordion(props: AccordionPropsType) {

        return <div >
            <AccordionTitle title={props.titleValue} click={props.onChange}/>
            { !props.collapsed && <AccordionBody /> }
        </div>

}

type AccordionTitlePropsType = {
    title: string
    click: () => void

}
function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.click}>-- {props.title} --</h3>
}

function AccordionBody(props: any) {
    console.log('AccordionBody rendering')
        return <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
}

export default Accordion