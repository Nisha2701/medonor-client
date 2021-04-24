import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from '../history'
import Header from './header_footer/Navbar';
import Footer from './header_footer/Footer';
import Addblogs from './forms/addblog';
import "./main.css";
class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="page-container">
                <div className="conten-wrap">
                    <Router history={history}>
                        <Header/>
                        <Switch>
                        <Route path ='/'>
                        <Route path='/addblog' component={Addblogs} />    
                        </Route>
                        </Switch>
                        <Footer/>
                    </Router>
                </div>
            </div>
        );
    }
}

export default Main; 