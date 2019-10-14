import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Add from './Add';
import Edit from './Edit';
import Listing from './Listing';

export default class Index extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <hr />
                        <Link to="/category" className="btn btn-primary">Listing </Link>
                        &nbsp;&nbsp;
                        <Link to="/category/Add" className="btn btn-primary">Add </Link>
                        <Route exact path="/category" component={Listing} />
                        <Route exact path="/category/add" component={Add} />
                        <Route exact path="/category/edit/:id" component={Edit} />
                    </div>
                </Router>
            </div>
        );
    }
}