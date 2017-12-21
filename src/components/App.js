import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import HomePage from 'Pages/HomePage';
import AboutPage from 'Pages/AboutPage';
import ProductsPage from 'Pages/ProductsPage';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/aboutpage">About</Link></li>
                        <li><Link to="/productspage">Products</Link></li>
                    </ul>
                    <Switch>
                        <Route path="/" exact render={() => isAuth('user', 'pass')} />
                        {/* <Route path="/" exact component={HomePage} /> */}
                        <Route path="/aboutpage" component={AboutPage} />
                        <Route path="/productspage" component={ProductsPage} />
                    </Switch>
                </div>
            </Router>
        );
    }

}

const isAuth = (user='aa', pass='aa') => {
    console.log({user, pass})
    if (user === 'user' && pass === 'pass') {
        return <Redirect to="/aboutpage" />;
    } else {
    return <HomePage />;
    }
}

export default App;