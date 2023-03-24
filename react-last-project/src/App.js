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
import FoodDetail from "./components/food/FoodDetail";
import SeoulFoodList from "./components/seoulfood/SeoulFoodList";
import SeoulFoodDetail from "./components/seoulfood/SeoulFoodDetail";
import SeoulLocationList from "./components/seoul/SeoulLocationList";
import SeoulLocationDetail from "./components/seoul/SeoulLocationDetail";
import FoodFind from "./components/food/FoodFind";
import NewsList from "./components/news/NewsList";
import JunsiFind from "./components/junsi/JunsiFind";
import JunsiDetail from "./components/junsi/JunsiDetail";
//<Route path={"/jeju/food_detail/:no"}  element={<FoodDetail/>}/> => PathVariable
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
             <Route path={"/jeju/food_detail/:no"}  element={<FoodDetail/>}/>
             <Route path={"/food/food_list"} element={<SeoulFoodList/>}/>
             <Route path={"/food/food_detail/:fno"} element={<SeoulFoodDetail/>}/>
             <Route path={"/seoul/seoul_location"} element={<SeoulLocationList/>}/>
             <Route path={"/seoul/location_detail/:no"} element={<SeoulLocationDetail/>}/>
             <Route path={"/jeju/food_find"} element={<FoodFind/>}/>
             <Route path={"/news/news_list"} element={<NewsList/>}/>
             <Route path={"/seoul/jisi_find"} element={<JunsiFind/>}/>
             <Route path={"/seoul/junsi_detail/:geno"} element={<JunsiDetail/>}/>
         </Routes>
        <Footer/>
      </Fragment>
    </Router>
  );
}

export default App;
