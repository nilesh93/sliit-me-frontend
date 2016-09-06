import 'react-toolbox/lib/commons.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link, browserHistory } from 'react-router';

import App from './App.js';
import Home from './Home/Home';
import Content from './Content/Content';
import Papers from './Content/Papers';
import Answers from './Content/Answers';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="home" component={Home}/>
            <Route path="content" component={Content}>
                <Route path="/papers" component={Papers} />
                <Route path="/answers" component={Answers} />
            </Route>
        </Route>
    </Router>
    , document.getElementById('app'));
