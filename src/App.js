import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
//pages
import HomePage from "./Pages/HomePage";
import SingleCoctailPage from "./Pages/SingleCoctailPage";
//portal
import Modal from "./Components/Modal"

const App = () => {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"> <HomePage /> </Route>
          <Route exact path="/coctails-db-2">  <HomePage /> </Route>   {/*  for Github Pages */}
          <Route exact path="/coctail/:id" children={<SingleCoctailPage />} />
          {/* <Route path="/about"> <AboutPage /> </Route> */}
          {/* <Route path="*"> <ErrorPage /> </Route> */}
        </Switch>
      </Router>
      <Modal />
    </div>
  )
}

export default App;
