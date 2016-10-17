import React from 'react';
import FormGroup from './Contact/FormGroup';

export default class Contact extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="row contact">
				<div className="col-xs-12">
          <FormGroup name="firstName" label="First Name" type="text" extraClasses="col-md-6"></FormGroup>
          <FormGroup name="lastName" label="Last Name" type="text" extraClasses="col-md-6"></FormGroup>
          <FormGroup name="email" label="E-Mail" type="email" extraClasses="col-xs-12"></FormGroup>
          <div className="col-xs-12">
            <button className="btn btn-success pull-right">Send</button>
          </div>
        </div>
      </div>
    );
  }
}
