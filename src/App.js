import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./Pages/Details";
import Home from "./Pages/Home";

//COMPONENTS
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <h1>test </h1>
      <div class="w-full h-auto box-border">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
