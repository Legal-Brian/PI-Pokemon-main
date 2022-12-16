import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import Home from "./pages/Home/Home";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/home" component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
