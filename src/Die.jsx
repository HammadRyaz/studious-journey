import React from 'react'

const Die = ({ dice, hold }) => {
    const style = {
        backgroundColor: dice.isHeld && "#59E391",
    }
    return (
        <button style={style} onClick={() => hold(dice.id)} >{dice.value}</button>
    )
}

export default Die