import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import { Route } from "wouter";
import Covid19 from "./Pages/Covid-19/Covid19";
import Appointment from "./Pages/Appointment/Appointment";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Covid19" component={Covid19} />
      <Route path="/Appointment" component={Appointment} />
    </div>
  );
}

export default App;
