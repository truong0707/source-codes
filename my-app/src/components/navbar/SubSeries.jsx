import React from 'react'
import ListSeries from './ListSeries';

export default function SubSeries() {
    return (
        <div className="Series">
            <div className="subSeries">
                    <div className="topRow"></div>
                    <ListSeries/>
                    <ListSeries/>
                    <ListSeries/>
            </div>
        </div>
        
    )
}
