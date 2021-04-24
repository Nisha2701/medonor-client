import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from '../history'
import Header from './header_footer/Navbar';
import Footer from './header_footer/footer';
import Addblogs from './forms/addblog';
import AddMedicine from './forms/addmedicine';
import Home from './home_page/home';
import about from './about/about';

import "./main.css";
class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="page-container">
                <div className="content-wrap">
                    <Router history={history}>
                        <Header/>
                        <Switch>
                        <Route path ='/'>
                        <Route path='/addblog' component={Addblogs} />
                        <Route path='/about' component={about} />       
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