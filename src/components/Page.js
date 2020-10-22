import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Page extends Component {
    render() {

        return (
        <div className='Page'>
            <h2>Page component</h2>
            <span><Link to="/">Home</Link></span>
        </div>    )
    }
}

export default Page
