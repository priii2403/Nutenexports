
import './App.css';
import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Index from './Screens/Home/Index';
function App() {
  return (
    <Router>
    <Navbar   totalItems={5} />
  <Routes>
    <Route path="/" exact element={Index} />
    <Route path="/product-list"   />
    <Route path="/product/:id"  />
    <Route path="/contact" />
    <Route path="/about"  />
  </Routes>
</Router>
  );
}

export default App;
