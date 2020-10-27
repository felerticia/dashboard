import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import {incrementCounter} from '../store/actions/counter'
import {loadData} from '../store/actions/loaddata'
import {toggleTransitions} from '../store/actions/transition'
import {Link} from 'react-router-dom'


import Withloading from '../hoc/withLoading';
import Test from './Test';

const WithloadingTest = Withloading (Test);


const Dashboard = (props) => {

    const [loading,setLoading] = useState(false)

    useEffect (()=>{
        setTimeout(() => {
            setLoading(true)
        }, 3000);
    },[])


    return (
        <div className='dashboard'>
            <p>Redux state + component props:</p>

            <WithloadingTest loading={loading}/>


            <pre>{JSON.stringify(props, null, 2)}</pre>
            <Link to='/page' >GO</Link>

            <p>Actions:</p>
            <pre>{JSON.stringify(props, null, 2)}</pre>
            <button onClick={() => props.dispatch(incrementCounter())}>
                increment Counter
            </button>
            <button onClick={() => props.dispatch(toggleTransitions())}>
                toggle Transitions
            </button>
            <button onClick={() => props.dispatch(loadData())}>
                load Data
            </button> <pre>{JSON.stringify(props, null, 2)}</pre>
        </div>
        )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Dashboard)
