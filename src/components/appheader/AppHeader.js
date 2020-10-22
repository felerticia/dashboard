import React, { Component } from 'react'
import { connect } from 'react-redux'

class AppHeader extends Component {
    render() {

        return (
        <div className='app-header'>
            AppHeader
        </div>
        )
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(AppHeader)
