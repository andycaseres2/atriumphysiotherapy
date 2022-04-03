import "./App.css";
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import { Route} from "wouter"

function App() {
  return (
    <div className="App">
    
      <Route path="/" component={Home}/>
      <Route path="/About" component={About}/>

    </div>
  );
}

export default App;
