import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";
import ErrorMessage from "./ErrorMessage";
import "./input-field.css";

class InputField extends Component {
  render() {
    const {
      value,
      label,
      hasError,
      errorMessage,
      width,
      id,
      type
    } = this.props;

    let finalValue = value;
    // input cannot have value as `null` or `undefined`, need to change to empty string
    if (finalValue === null || finalValue === undefined) {
      finalValue = "";
    }

    return (
      <div>
        <Row type="flex" justify="start" align="bottom">
          <Col>
            <input
              className="input-input-field"
              value={finalValue}
              onChange={this.props.onChange}
              placeholder={label}
              style={{ width: width }}
              id={id}
              type={type}
            />
          </Col>
        </Row>
        <ErrorMessage hasError={hasError} message={errorMessage} />
      </div>
    );
  }
}

export default connect(
  null,
  null
)(InputField);
