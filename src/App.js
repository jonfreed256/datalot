import React, { Component } from 'react';
import './App.css';
import Form from './FormComp.js'
import LowerRatesText from './LowerRatesText'
import ModalComp from './ModalComp'
import Bullet from './bulletsTextComp'
import car from './cars.jpg'

class App extends Component {

    state = {
        zipCode: "",
        insured: "",
        ageRange: "",
        show: false
    };

    changeHandler = e => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            show: true
        })
    };

    handleClose = () => {
        this.setState({
            show: false
        })
    };

    render() {
        return <div>
            <br/>
            <div className='container'>
                <div className='row' id='banner'>
                    <LowerRatesText className='col-sm-8'/>
                    <Form className='col-sm-4' id='form-main' handleSubmit={this.handleSubmit}
                          changeHandler={this.changeHandler}/>
                </div>

                    { this.state.show ? <div id='modal' ><ModalComp formState={this.state} handleClose={this.handleClose}/> </div>: null }

                <div className='row align-items-center'>
                    <Bullet id='bullet' className='col-sm'/>
                    <div className='col'></div>
                    <div className='col-sm float-right'>
                        <img src={require('./cars.jpg')} alt="cars"/>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default App;
