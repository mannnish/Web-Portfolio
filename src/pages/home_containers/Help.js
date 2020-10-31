import React, { Component } from 'react'
import Titles from './Titles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'


class Help extends Component {
    render() {
        return (
            <div class="help-container">
                <Titles text="I can help." subtitle="I’m currently un-available for freelance work." />
                <div class="help-description">
                    <p>If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.</p>
                </div>
                <a class='copymail-button' data-tooltip="Copy to Clipboard" data-flow="right" > <FontAwesomeIcon icon={faMailBulk} /><span>COPY MY MAIL</span></a>
            </div>
        )
    }
}

export default Help
