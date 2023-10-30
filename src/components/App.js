import logo from "../logo.svg";
import "../App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Team from "./Team";

function App() {
    return (
        <div className="">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" Component={HomePage} />
                    <Route exact path="/team" Component={Team} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
