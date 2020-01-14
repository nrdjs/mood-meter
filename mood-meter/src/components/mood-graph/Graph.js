import React from 'react';
import MoodBubble from './moodBubble'


const renderBubles = () => {
    const buttons = [];
        for(let i=0; i<10; i++){
        buttons.push(<MoodBubble/>)
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
                        {renderBubles()}
                    </div>
                    <div className='graph-quadrant'>
                        {renderBubles()}
                    </div>
                </div>
                <div className='graph-quadrant_row'>
                    <div className='graph-quadrant'>
                        {renderBubles()}
                    </div>
                    <div className='graph-quadrant'>
                        {renderBubles()}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Graph