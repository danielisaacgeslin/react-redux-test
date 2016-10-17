import React from 'react';

export default class FormGroup extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const extraClasses = 'form-group '.concat(this.props.extraClasses ? this.props.extraClasses : '');
    return (
      <div className={extraClasses}>
        <label>{this.props.label}</label>
        <input
        type={this.props.type}
        placeholder={this.props.placeholder ? this.props.placeholder : this.props.label}
        name={this.props.name}
        className="form-control col-xs-12"
        />
      </div>
    );
  }
}
