import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, HashRouter } from "react-router-dom";
import LoginPage from "./Components/loginPage/LoginPage";
import ApproveRequests from "./Components/approveRequests/ApproveRequests";
import HomePageController from "./Components/HomePageController";
import Portal from "./Components/Portal/Portal";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/portal" element={<Portal />} />
                <Route path="/" exact element={<HomePageController />} />
            </Routes>
        </div>
    );
}

export default App;
