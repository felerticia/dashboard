import React from 'react'
import { connect } from 'react-redux'

const AppHeader= () => {
    return (
    <div className='app-header'>
        AppHeader
    </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(AppHeader)
