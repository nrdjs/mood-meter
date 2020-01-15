import React from 'react';
import MoodBubble from './moodBubble'


const renderBubles = ({color}) => {
    const buttons = [];
        for(let i=0; i<16; i++){
        buttons.push(<MoodBubble color={color}/>)
        }
    return buttons
}

function Graph() {

    return(
        <>
        <div className='graph'>
            <p>This be the graph</p>
            <div className='graph-quadrant_container'>
                <div className='graph-quadrant_row'>
                    <div className='graph-quadrant'>
                        {renderBubles({color: 'green'})}
                    </div>
                    <div className='graph-quadrant'>
                        {renderBubles({color: 'blue'})}
                    </div>
                </div>
                <div className='graph-quadrant_row'>
                    <div className='graph-quadrant'>
                        {renderBubles({color: 'orange'})}
                    </div>
                    <div className='graph-quadrant'>
                        {renderBubles({color: 'yellow'})}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Graph