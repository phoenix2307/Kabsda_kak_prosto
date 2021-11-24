import React, {useState} from "react";

type OnOffPropsType = {
    // on: boolean
}
function OnOff (props: OnOffPropsType) {
    console.log('OnOff rendering')

    let [on, setOn] = useState(false)

    const onStyle = {
        width: '40px',
        height: '30px',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'white',
        display: 'inline-block',
        padding: '2px'
    }
    const offStyle = {
        width: '40px',
        height: '30px',
        border: '1px solid black',
        backgroundColor: on ? 'white' : 'red',
        display: 'inline-block',
        padding: '2px',
        marginLeft: '2px'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={() => setOn(true)}>ON</div>
            <div style={offStyle} onClick={() => setOn(false)}>OFF</div>
            <div style={indicatorStyle} onClick={() => {alert("TOGGLE")}}></div>
        </div>
    )
}

export default OnOff