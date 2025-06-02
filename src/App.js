
import { BrowserRouter as Router, Routes, Route, Link  } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import OrderNow from "./OrderNow";
import YourStatements from "./YourStatements";
import ContactUs from "./ContactUs";
import ScrollToTop from "./Components/ScrollToTop";


function App() {
  
return(
<Router>
  <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/OrderNow" element={<OrderNow/>} />
        <Route path="/YourStatements" element={<YourStatements/>} />
        <Route path="/Contact" element={<ContactUs/>} />
        <Route path="/Register" component={() =>
          <Link to="https://forms.gle/th22N9s5qc5oEHJL6" target="_blank" rel="noopener noreferrer">
            Register Now
          </Link>
        }>
        </Route>
        
        
      </Routes>
    </Router>);

}

export default App;
