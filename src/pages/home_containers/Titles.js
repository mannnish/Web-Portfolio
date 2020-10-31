import React, { Component } from 'react'
import './HomeStyle.css'

class Titles extends Component {

    render() {
        return (
            <div class='title-style'>
                <h1>{this.props.text}</h1>
                <h3>{this.props.subtitle}</h3>
            </div>
        )
    }
}

export default Titles
