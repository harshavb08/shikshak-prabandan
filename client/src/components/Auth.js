import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import constants from "../constant.js";

export default function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function verify() {
            const token = localStorage.getItem("token");
            if (token) {
                const result = await axios({
                    method: "post",
                    url: `${constants.backendUrl}/verifyTeacher`,
                    headers: {
                        "Content-Type": "application/json",
                        "x-auth-token": token,
                    },
                    data: {
                        token: token,
                    },
                });
                console.log(result);
                if (!result.data.success) {
                    localStorage.removeItem("token");
                } else {
                    window.location.href = "/dashboard";
                }
            }
        }
        verify();
    }, []);
    return (
        <div>
            <Helmet>
                <script src="js/main.js"></script>
            </Helmet>
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 order-md-2">
                            <img
                                src="images/undrawcover.png"
                                alt="Image"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-md-6 contents">
                            <div className="row justify-content-center">
                                <div className="col-md-8">
                                    <div className="mb-4">
                                        <h2>Welcome, Please Sign-in</h2>
                                        <p className="mb-4">
                                            Please enter valid credentials to
                                            login
                                        </p>
                                    </div>
                                    <form action="#" method="post">
                                        <div className="form-group first">
                                            <h3>User Id</h3>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="userid"
                                                placeholder="Enter user id"
                                                onChange={(e) => {
                                                    setEmail(e.target.value);
                                                }}
                                                value={email}
                                            />
                                        </div>
                                        <div className="form-group last mb-4">
                                            <h3>Password</h3>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                placeholder="Enter user id"
                                                onChange={(e) => {
                                                    setPassword(e.target.value);
                                                }}
                                                value={password}
                                            />
                                        </div>
                                        {loading ? <p>loading</p> : null}
                                        {msg === "" ? null : (
                                            <p
                                                style={{
                                                    color: err
                                                        ? "red"
                                                        : "green",
                                                }}
                                            >
                                                {msg}
                                            </p>
                                        )}
                                        <div className="d-flex mb-5 align-items-center">
                                            <label className="control control--checkbox mb-0">
                                                <span className="caption">
                                                    Remember me
                                                </span>
                                                <input
                                                    type="checkbox"
                                                    defaultChecked="checked"
                                                />
                                                <div className="control__indicator" />
                                            </label>
                                            <span className="ml-auto">
                                                <a
                                                    href="/forgot-password"
                                                    className="forgot-pass"
                                                >
                                                    Forgot Password
                                                </a>
                                            </span>
                                        </div>
                                        {/*Once submit button is clicked*/}
                                        <input
                                            type="button"
                                            defaultValue="Sign In"
                                            className="btn text-white btn-block btn-primary btntxtsize"
                                            onClick={async () => {
                                                // window.location.href = "/otp";
                                                console.log(email);
                                                setLoading(true);
                                                const result = await axios({
                                                    method: "post",
                                                    url: `${constants.backendUrl}/teacherLogin`,
                                                    data: {
                                                        email: email,
                                                        password: password,
                                                    },
                                                    headers: {
                                                        "Content-Type":
                                                            "application/json",
                                                    },
                                                });
                                                // console.log(result);
                                                setLoading(false);
                                                if (result.data.success) {
                                                    setMsg(result.data.message);
                                                    setErr(false);
                                                    setInterval(() => {
                                                        localStorage.setItem(
                                                            "email",
                                                            email
                                                        );
                                                        window.location.href =
                                                            "/otp";
                                                    }, 1000);
                                                } else {
                                                    setMsg(result.data.message);
                                                    setErr(true);
                                                }
                                            }}
                                        />
                                        {/*Validate the otp received to registered phone number and then login*, also this section need to be visible only after
              the login details are vadilated*/}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}