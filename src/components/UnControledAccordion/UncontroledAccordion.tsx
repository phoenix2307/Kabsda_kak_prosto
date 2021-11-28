import React, {useState} from "react";

type UnControledAccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

function UnControledAccordion(props: UnControledAccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)

        return <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={ () =>  setCollapsed( !collapsed )}>TOGGLE</button>
            { !collapsed && <AccordionBody /> }
        </div>
}

type AccordionTitlePropsType = {
    title: string
}
function AccordionTitle(props: AccordionTitlePropsType) {

    return <h3>-- {props.title} --</h3>
}

function AccordionBody(props: any) {

        return <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
}

export default UnControledAccordion