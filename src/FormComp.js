import React, { Component } from 'react'
import './App.css';
import { Form } from 'react-bootstrap'

class FormComp extends Component {

  render() {

      return (
          <Form id='form' onSubmit={this.props.handleSubmit}>
              <h2 id='form-head'>Cheap Auto Coverage</h2>
              <p>Complete just 3 simple steps to get quotes from top providers in your area.</p>
              <br/>
              <Form.Group >
                  <input id='zip' size="lg"
                      type="text"
                      placeholder="Zip Code"
                      name="zipCode"
                      value={this.props.zipCode}
                      onChange={this.props.changeHandler}
                  />
              </Form.Group>
              <Form.Group>
                  <select id='insured' size="lg" value={this.props.insured} name="insured" onChange={this.props.changeHandler}>
                      <option>Currently Insured?</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                  </select>
              </Form.Group>
              <Form.Group>
                  <select id='age' size="lg" value={this.props.ageRange} name="ageRange" onChange={this.props.changeHandler}>
                      <option>Your Age Range</option>
                      <option value="34">Under 25</option>
                      <option value="34">25 to 34</option>
                      <option value="35">35 to 44</option>
                      <option value="35">45 to 55</option>
                      <option value="35">Over 55</option>
                  </select>
              </Form.Group>
              <Form.Group>
                  <button id='btn'  >
                      Find Lower Rates
                  </button>
                  <p id='secure-txt'>Your information is safe and secure</p>
              </Form.Group>
          </Form>
      )

  }
}

export default FormComp;