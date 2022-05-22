import React from 'react'
import './showView.scss'
import Navbar from './../navbar/Navbar';
import List from './../list/List';
import ListShow from './listShow/ListShow';
export default function ShowView() {
    return (
        <div className="showView">
            <Navbar/>
            <ListShow/>
            <List/>
        </div>
    )
}
