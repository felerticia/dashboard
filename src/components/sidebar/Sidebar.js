import React, { Component } from 'react'
import { connect } from 'react-redux'

class Sidebar extends Component {
    render() {

        return (
        <div className='sidebar'>
            Sidebar
        </div>
        )
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Sidebar)
