
import "./App.css";
import Aside from "./components/aside/Aside";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  
  return (
    <Router>
      <div className="App">
        <Aside />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/about" exact component={About} />
          <Route path="/contacts" exact component={Contacts}/>
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
