import React from "react";
import { Component, ReactDOM } from "react";
class Otp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
      otp5: "",
      otp6: "",
      disable: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value1, event) {
    this.setState({ [value1]: event.target.value });
  }

  handleSubmit(event) {
    const data = new FormData(event.target);
    console.log(this.state);
    event.preventDefault();
  }

  inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      console.log("next");

      const next = elmnt.target.tabIndex;
      if (next < 6) {
        elmnt.target.form.elements[next].focus();
      }
    }
  };
  render() {
    return (
      <>
        <div class="login-box bg-white box-shadow border-radius-10">
          <div className="col-md-12 text-center">
            <form>
              <h3 className="text-blue h3">Two Step Verification</h3>
              <div className="fw-normal text-muted mb-4">
                Enter the verification code we sent to
              </div>
              <div className="d-flex align-items-center justify-content-center fw-bold mb-4">
                <span>abc@example.org</span>
              </div>
              <div className="otp_input text-start mb-2">
                <label htmlFor="digit">Type your 6 digit security code</label>
                <div className="d-flex align-items-center justify-content-between mt-2">
                  <input
                    name="otp1"
                    type="text"
                    autoComplete="off"
                    className="form-control text-center mr-2"
                    value={this.state.otp1}
                    onKeyPress={this.keyPressed}
                    onChange={(e) => this.handleChange("otp1", e)}
                    tabIndex="1"
                    maxLength="1"
                    onKeyUp={(e) => this.inputfocus(e)}
                  />
                  <input
                    name="otp2"
                    type="text"
                    autoComplete="off"
                    className="form-control text-center mr-2"
                    value={this.state.otp2}
                    onChange={(e) => this.handleChange("otp2", e)}
                    tabIndex="2"
                    maxLength="1"
                    onKeyUp={(e) => this.inputfocus(e)}
                  />
                  <input
                    name="otp3"
                    type="text"
                    autoComplete="off"
                    className="form-control text-center mr-2"
                    value={this.state.otp3}
                    onChange={(e) => this.handleChange("otp3", e)}
                    tabIndex="3"
                    maxLength="1"
                    onKeyUp={(e) => this.inputfocus(e)}
                  />
                  <input
                    name="otp4"
                    type="text"
                    autoComplete="off"
                    className="form-control text-center mr-2"
                    value={this.state.otp4}
                    onChange={(e) => this.handleChange("otp4", e)}
                    tabIndex="4"
                    maxLength="1"
                    onKeyUp={(e) => this.inputfocus(e)}
                  />

                  <input
                    name="otp5"
                    type="text"
                    autoComplete="off"
                    className="form-control text-center mr-2"
                    value={this.state.otp5}
                    onChange={(e) => this.handleChange("otp5", e)}
                    tabIndex="5"
                    maxLength="1"
                    onKeyUp={(e) => this.inputfocus(e)}
                  />
                  <input
                    name="otp6"
                    type="text"
                    autoComplete="off"
                    className="form-control text-center"
                    value={this.state.otp6}
                    onChange={(e) => this.handleChange("otp6", e)}
                    tabIndex="6"
                    maxLength="1"
                    onKeyUp={(e) => this.inputfocus(e)}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary submit_btn my-4">
                Submit
              </button>
              <div className="fw-normal text-muted mb-2">
                Didn’t get the code ?{" "}
                <a
                  href="#"
                  className="text-primary fw-bold text-decoration-none"
                >
                  Resend
                </a>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Otp;