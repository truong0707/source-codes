import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Watch1 from './pages/watch/Watch1';
import Watch2 from './pages/watch/Watch2';
import Watch3 from './pages/watch/Watch3';
import Watch4 from './pages/watch/Watch4';
export default function RouterWatch() {
    return (
        <Router>
            <Route path="/Watch1" component={Watch1}/>
            <Route path="/Watch2" component={Watch2}/>
            <Route path="/Watch3" component={Watch3}/>
            <Route path="/Watch4" component={Watch4}/>
        </Router>
    )
}
