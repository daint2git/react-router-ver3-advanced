import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import HomePage from 'Pages/HomePage';
import AboutPage from 'Pages/AboutPage';
import ProductsPage from 'Pages/ProductsPage';
import MainPage from 'Pages/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import LoginForm from './LoginForm'
import {connect} from 'react-redux'

class AppOld extends Component {
    
    render() {
        return (
            <Router history={hashHistory}>
                <Router path="/" component={MainPage} >
                    <IndexRoute component={LoginForm}/>
                    <Route onEnter={this.requireLogin}>
                        <Route path="homepage" component={HomePage} />
                        <Route path="aboutpage" component={AboutPage} />
                        <Route
                        path="productspage"
                        component={ProductsPage}
                        />
                    </Route>

                </Router>
            </Router>
        );
    }
    //onEnter: middleware function
    requireLogin = (nextState, replace, next) => {
        console.log('requireLogin')
        // if (username == null) {
        //     replace('/');
        // }
        next();
    }
}



const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppOld);
