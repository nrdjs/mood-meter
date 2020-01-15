import React from 'react'

function MoodBubble({color, onClick}) {
    return (
        <div className='bubble-button_container'>
            <button
                className={color ? `bubble-button bubble-button--${color}` : 'bubble-button'}
                onClick={onClick}>

            </button>
        </div>
    )
}
export default MoodBubble