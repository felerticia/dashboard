import React from 'react'
import { Link } from 'react-router-dom'


const Page = () => {
    return (
        <div className='Page'>
            <h2>Page component</h2>
            <span><Link to="/">Home</Link></span>
        </div>    
    )
}

export default Page
