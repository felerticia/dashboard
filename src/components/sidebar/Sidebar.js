import React from 'react'
import { connect } from 'react-redux'

const Sidebar = () => {
    return (
    <div className='sidebar'>
        Sidebar
    </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Sidebar)
