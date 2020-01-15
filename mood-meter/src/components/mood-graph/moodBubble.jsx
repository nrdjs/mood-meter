import React from 'react'

function MoodBubble({color}) {
    return (
        <div className='bubble-button_container'>
            <button
                className={color ? `bubble-button bubble-button--${color}` : 'bubble-button'}>

            </button>
        </div>
    )
}
export default MoodBubble