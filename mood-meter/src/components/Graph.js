import React from 'react';


const renderBubles = () => {
    const buttons = {};
        for(let i=0; i<10; i++){
            buttons.push(i)
        }
    return buttons
}

function Graph() {

    return(
        <>
        <div className='graph'>
            This be the graph
            renderBubles()
        </div>
        </>
    )
}
export default Graph