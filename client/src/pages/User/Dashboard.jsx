import React, { useEffect, useState } from "react";
import Info from "../../components/User/Info/Info";
import { Helmet } from "react-helmet";
import Topbar from "../../components/User/Topbar/Topbar";
import Sidebar from "../../components/User/Sidebar/Sidebar";
import axios from "axios";
import constants from "../../constant.js";

function Dashboard() {
    const [teacherDetails, setteacherDetails] = useState({});
    useEffect(async () => {
        async function verify() {
            const token = localStorage.getItem("token");
            if (!token) {
                window.location.href = "/";
            } else {
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
                    window.location.href = "/";
                } else {
                    setteacherDetails(result.data.teacher);
                }
            }
        }
        verify();
        console.log(teacherDetails);
    }, []);

    useEffect(() => {
        console.log(teacherDetails);
    }, [teacherDetails]);

    return (
        <>
            <Helmet>
                <script
                    defer
                    src="assets/vendors/scripts/script.min.js"
                ></script>
            </Helmet>
            <Topbar teacherDetails={teacherDetails} />
            <Sidebar />
            <Info teacherDetails={teacherDetails} />
        </>
    );
}

export default Dashboard;