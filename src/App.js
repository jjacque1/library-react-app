import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
