import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import AppHeader from './appheader/AppHeader'
import Sidebar from './sidebar/Sidebar'
import Dashboard from './Dashboard'
import Page from './Page'

import '../assets/scss/App.scss'


const App = (props) => {
    return (
        <main>
            <AppHeader />
            <Sidebar />

            <Route render={({ location }) => (
                <React.Fragment>
                    <TransitionGroup className='App'>
                        <CSSTransition
                            key={location.key}
                            classNames={props.transitions ? 'fade' : ''}
                            timeout={props.transitions ? 250 : 0}
                            >
                            <Switch location={location}>
                                <Route exact path="/" component={Dashboard} />
                                <Route exact path="/page" component={Page} />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                </React.Fragment>
            )}
            />
        </main>
    )
}

const mapStateToProps = state => ({
    transitions: state.transition.transitions,
})

export default connect(mapStateToProps)(App)
