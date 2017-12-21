import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class MainPage extends Component {
    render() {
        return (
            <div>
                <h1>react-router 3.0.5</h1>
                <ul>
                    <li><IndexLink to="/" activeClassName="active">Main</IndexLink></li>
                    <li><Link to="/homepage" activeClassName="active">Home</Link></li>
                    <li><Link to="/aboutpage" activeClassName="active">About</Link></li>
                    <li><Link to="/productspage" activeClassName="active">Products</Link></li>
                </ul>  
                {this.props.children}
            </div>
        );
    }
}

export default MainPage;