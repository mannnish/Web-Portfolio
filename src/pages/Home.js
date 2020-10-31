import React, { Component } from 'react'
import Scroll from '../components/Scroll'
import Footer from '../components/Footer'
import Bio from './home_containers/Bio'
import Help from './home_containers/Help'

class Home extends Component {
    render() {
        return (
            <div>
                <Scroll/>
                <Bio/>
                <Help/>
                <Footer/>
            </div>
        )
    }
}

export default Home
