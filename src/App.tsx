import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UnControledAccordion from "./components/UnControledAccordion/UncontroledAccordion";
import {UnControledRating} from "./components/UnControledRating/UnControledRating";

function App() {
    console.log('App rendering')
    return (
        <div>
{/*            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <Rating value={3}/>*/}
            {/*<Accordion titleValue={'Menu'} collapsed={true}/>*/}
            {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}

            Article 2
{/*            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}

            <OnOff/>
            <OnOff/>
            <OnOff/>

            <UnControledAccordion titleValue={'Menu'}/>
            <UnControledAccordion titleValue={'Users'}/>


            <UnControledRating/>


        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;
