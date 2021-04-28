import React, { Component } from 'react';
import { Route, Router, Switch, Redirect,withRouter } from 'react-router-dom';
import history from '../history'
import Header from './header_footer/Navbar';
import Footer from './header_footer/footer';
import Addblogs from './forms/addblog';
import AddMedicine from './forms/addmedicine';
import Medicines from './medicines/medicine';
import Home from './home_page/home';
import about from './about/about';
import { connect } from 'react-redux';
import ngoList from './ngoList/ngoList';
import medicinelist from './medicinesList/medicinelist';
import DonorSpeaks from './donor_speaks/DonorSpeaks';
import ngoBeneficiary from './ngo_beneficiary/ngoBeneficiary';
import Login from './Login_signup/Login'
import Signup from './Login_signup/Signup'

import "./main.css";

const mapStateToProps = state =>{
    return {
        medicines : state.medicines
    }
}
class Main extends Component {

    constructor(props) {
        super(props);
        
    }

    

    
    render() {
        const Home = () =>{
            return(
                <Home />
            )
        }
        return(
            <div className="page-container">
                <div className="content-wrap">
                    <Router history={history}>
                        <Header/>
                        <Switch>
                        <Route path ='/'>
                        <Route exact path='/addblog' component={Addblogs} />
                        <Route exact path='/about' component={about} />     
                        <Route exact path='/donorspeaks' component={DonorSpeaks} />  
                        <Route exact path='/medicines'  component={() => <Medicines medicines={this.props.medicines} />}  />
                        <Route path='/ngoBeneficiary' component={ngoBeneficiary} />
                        <Route exact path ='/Login' component={Login}   />
                        <Route exact path ='/Signup' component={Signup}   />    
                        <Route path='/ngoList' component={ngoList} />   
                        <Route path='/medicinelist' component={medicinelist} />           
                        </Route>
                        </Switch>
                        <Footer/>
                    </Router>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main)); 