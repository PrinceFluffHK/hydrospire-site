import logo from "../logo.svg";
import "../App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Founders from "./Founders";
import TopBar from "./TopBar";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
			<TopBar/>
                <Routes>
                    <Route exact path="/" Component={HomePage} />
                    <Route exact path="/founders" Component={Founders} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
