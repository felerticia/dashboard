import React, { Component } from 'react'
import { connect } from 'react-redux'
import {incrementCounter} from '../store/actions/counter'
import {loadData} from '../store/actions/loaddata'
import {toggleTransitions} from '../store/actions/transition'
import {Link} from 'react-router-dom'

class Dashboard extends Component {
    render() {

        return (
        <div className='dashboard'>
            <p>Redux state + component props:</p>
            <pre>{JSON.stringify(this.props, null, 2)}</pre>
            <Link to='/page' >GO</Link>

            <p>Actions:</p>
            <pre>{JSON.stringify(this.props, null, 2)}</pre>
            <button onClick={() => this.props.dispatch(incrementCounter())}>
                increment Counter
            </button>
            <button onClick={() => this.props.dispatch(toggleTransitions())}>
                toggle Transitions
            </button>
            <button onClick={() => this.props.dispatch(loadData())}>
                load Data
            </button> <pre>{JSON.stringify(this.props, null, 2)}</pre>
        </div>
        )
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Dashboard)
