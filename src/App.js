
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import OrderNow from "./OrderNow";
import YourStatements from "./YourStatements";
import ContactUs from "./ContactUs";


function App() {
  
return(
<Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/OrderNow" element={<OrderNow/>} />
        <Route path="/YourStatements" element={<YourStatements/>} />
        <Route path="/Contact" element={<ContactUs/>} />

      
        
        
        
      </Routes>
    </Router>);

}

export default App;
