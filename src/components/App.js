import React from "react";
import logo from "../logo.svg";
import "../App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Team from "./Team";
import TopBar from "./TopBar";

function App() {
    return (
        <div className="">
            <BrowserRouter>
			<TopBar/>
                <Routes>
                    <Route exact path="/" Component={HomePage} />
                    <Route exact path="/team" Component={Team} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
