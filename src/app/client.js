import 'react-toolbox/lib/commons.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link, browserHistory } from 'react-router';
import {applyRouterMiddleware} from 'react-router';
import {useTransitions, withTransition} from 'react-router-transitions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import App from './App.js';
import Home from './Home/Home';
import Content from './Content/Content';
import Papers from './Content/Papers';
import Answers from './Content/Answers';
import Assignments from './Content/Assignments';
import Lecturers from './Content/Lecturers';




ReactDOM.render(
    <Router history={browserHistory}
        render={applyRouterMiddleware(useTransitions({
            TransitionGroup: ReactCSSTransitionGroup,
            defaultTransition: {
                transitionName: 'fade',
                transitionEnterTimeout: 500,
                transitionLeaveTimeout: 300
            }
        })) }
        >
        <Route path="/" component={withTransition(App) }>
            <Route path="home" component={Home} transition="from-top"/>
            <Route path="content" component={Content} >
                <Route path="/papers" component={Papers}   transition="from-top"/>
                <Route path="/answers" component={Answers}  transition="from-top" />
                <Route path="/assignments" component={Assignments}  transition="from-top" />
                <Route path="/lecturers" component={Lecturers}  transition="from-top" />
            </Route>
        </Route>
    </Router>
    , document.getElementById('app'));
