import React, { useState, useEffect } from "react";
import ApproveRequests from "./approveRequests/ApproveRequests";
import LoginPage from "./loginPage/LoginPage";
import axios from "axios";
import Portal from './Portal/Portal';
import { useNavigate } from "react-router-dom";
const HomePageController = () => {
    const [isAuth, setisAuth] = useState();
    const H = useNavigate();
    const [loading, setLoading] = useState();
    const checkAuth = async () => {
        if (!localStorage.getItem("email") || !localStorage.getItem("password")) {
            setisAuth(false);
            setLoading(false);
        } else {
            try {
                const result = await axios({
                    method: "post",
                    url: "http://localhost:8000/ownerAuth",
                    data:{
                        email: localStorage.getItem("email"),
                        password: localStorage.getItem("password")
                    }
                });
                if (result.data.msg === "success") {
                    setisAuth(true);
                    setLoading(false);
                    H("/portal",{replace:true});
                } else {
                    localStorage.removeItem("email");
                    localStorage.removeItem("password");
                    setisAuth(false);
                    setLoading(false);
                }
            } catch (err) {
                localStorage.removeItem("email");
                localStorage.removeItem("password");
                console.log(err);
            }
            setisAuth(true);
            setLoading(false);
        }
    };

    useEffect(() => {
        setLoading(true);
        checkAuth();
    }, []);

    return (
        <div>
            {loading ? (
                <div>Loading</div>
            ) : isAuth ? (
                ""
            ) : (
                <LoginPage />
            )}
        </div>
    );
};

export default HomePageController;
