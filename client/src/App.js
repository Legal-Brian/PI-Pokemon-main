import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import Home from "./pages/Home/Home";
import PokemonCreate from "./pages/PokemonCreate/PokemonCreate"
import Detail from './pages/Detail/Detail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/home" component={Home}/>
          <Route path="/pokemons" component={PokemonCreate}/>
          <Route path="/pokedex/:id" component={Detail}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
