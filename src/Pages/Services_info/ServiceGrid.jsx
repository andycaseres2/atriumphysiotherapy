import React, { Component } from 'react'
import './servicegrid.css'

class ServiceGrid extends React.Component {
    render() {
        return (
            <div className="GridContainer">
                <div className="GridItem">Service 1</div>
                <div className="GridItem">Service 2</div>
                <div className="GridItem">Service 3</div>
                <div className="GridItem">Service 4</div>
                <div className="GridItem">Service 4</div>
            </div>
        )
    }
}
