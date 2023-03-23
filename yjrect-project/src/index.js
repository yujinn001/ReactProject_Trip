
import './App.css';
import {Fragment} from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

import Home from "./components/main/Home";
import Footer from "./components/main/Footer";
import Header from "./components/main/Header";
function App() {
    return (
        <Router>
            <Fragment>
                <Header/>
                <Routes>
                    <Route exact path={"/"} element={<Home/>}/>
                </Routes>
                <Footer/>
            </Fragment>
        </Router>
    );
}

export default App;