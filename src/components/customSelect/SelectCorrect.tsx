import React, {useState, KeyboardEvent} from "react";
import styles from './SelectCorrect.module.css'

type ItemType = {
    value: any
    title: string
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const SelectCorrect = (props: SelectPropsType) => {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const toggleItems = () => setActive(!active)
    const onItemClock = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)
    const keyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        e.preventDefault()
        console.log(e.key)
    }


    return (
        <div className={styles.select} onKeyUp={keyUp} tabIndex={0}>
            <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {
                active && <div className={styles.items}>
                    {props.items.map(i => <div
                        onMouseEnter={ () => { setHoveredElementValue(i.value) } }
                        className={styles.item + ' ' + (hoveredItem === i ? styles.selected: '') }
                        key={i.value}
                        onClick={() => { onItemClock(i.value) }}
                    >{i.title}</div>)}
                </div>
            }
        </div>
    )
}