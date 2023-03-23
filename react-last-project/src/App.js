import logo from './logo.svg';
import './App.css';
import {Fragment} from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

import Home from "./components/main/Home";
import Footer from "./components/main/Footer";
import Header from "./components/main/Header";
import FoodList from "./components/food/FoodList";
import EventList from "./components/food/EventList";
import RecipeList from "./components/recipe/RecipeList";
function App() {
  return (
    <Router>
      <Fragment>
        <Header/>
         <Routes>
           <Route exact path={"/"} element={<Home/>}/>
           <Route path={"/jeju/food_list"}  element={<FoodList/>}/>
             <Route path={"/jeju/event_list"}  element={<EventList/>}/>
             <Route path={"/recipe/recipe_list"}  element={<RecipeList/>}/>
         </Routes>
        <Footer/>
      </Fragment>
    </Router>
  );
}

export default App;
