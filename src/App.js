import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Terms from "./pages/Terms";
import Register from "./pages/Register";
import Symptoms from "./pages/Symptoms";
import FormOne from "./pages/FormOne";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Landing" element={<Landing />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Symptoms" element={<Symptoms />} />
        <Route path="/Formone" element={<FormOne />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
