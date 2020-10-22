import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions/counter'

class Controls extends Component {
    render() {

        return (
        <div className='Controls'>
            <p>Redux state + component props:</p>
            <pre>{JSON.stringify(this.props, null, 2)}</pre>

            <p>Actions:</p>
            
            <button onClick={() => this.props.dispatch(actions.incrementCounter())}>
                increment Counter
            </button>
            <button onClick={() => this.props.dispatch(actions.toggleTransitions())}>
                toggle Transitions
            </button>
            <button onClick={() => this.props.dispatch(actions.loadData())}>
                load Data
            </button>
        </div>
        )
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Controls)
