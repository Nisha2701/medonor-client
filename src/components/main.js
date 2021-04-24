import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from '../history'
import Header from './header_footer/header';
import Footer from './header_footer/footer';
import Addblogs from './forms/addblog';
import AddMedicine from './forms/addmedicine';
import Home from './home_page/home';

class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Router history={history}>
                    <Header/>
                    <Switch>
                    <Route path ='/'>
                    <Route path='/addblog' component={Addblogs} />    
                    <Route path='/addmedicine' component={AddMedicine}/>
                    </Route>
                    </Switch>
                    <Footer/>
                </Router>
            </div>
        );
    }
}

export default Main; 