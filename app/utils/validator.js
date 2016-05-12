import React from 'react-native';
import isEmail from './isEmail';

export default (Component) =>
  class Validator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fields: [],
        isValid: true,
        errors: {}
      };
    }
    validate = () => {
      let hasError = false;
      const errors = {};
      this.state.fields.forEach(field => {
        const value = this.props[field.name];
        const fieldTitle = field.name.charAt(0).toUpperCase() + field.name.slice(1);
        errors[field.name] = [];
        field.validations.forEach(validation => {
          if (validation === 'required') {
            if (value === '' || value === null) {
              errors[field.name].push(`${fieldTitle} is required.`);
              hasError = true;
            }
          } else if (validation === 'email') {
            if (!isEmail(value)) {
              errors[field.name].push('You must enter a valid email address.');
              hasError = true;
            }
          }
        });
      });

      if (hasError) {
        this.setState({
          isValid: false,
          errors
        });
      } else {
        this.setState({
          isValid: true,
          errors: {}
        });
      }
    };
    setFields = (fields) => {
      this.setState({ fields });
    };
    getErrors = (field) => {
      if (Object.keys(this.state.errors).indexOf(field) >= 0 &&
          this.state.errors[field].length > 0) {
        return this.state.errors[field];
      } else {
        return [];
      }
    };
    hasError = (field) => {
      return Object.keys(this.state.errors).indexOf(field) >= 0 &&
             this.state.errors[field].length > 0;
    };
    render() {
      return (
        <Component
          validate={this.validate}
          setFields={this.setFields}
          getErrors={this.getErrors}
          hasError={this.hasError}
          errors={this.state.errors}
          isValid={this.state.isValid}
          {...this.props}
        />
      );
    }
  };
