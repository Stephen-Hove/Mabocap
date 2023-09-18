import './App.css';
import PageTitleUpdater from "./Pages/PageTitleUpdater";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Projects from "./Pages/Projects";
import Team from "./Pages/Team";
import Footer from "./Pages/Footer";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Careers from "./Pages/Careers";

function App() {
  return (
    <BrowserRouter>
      <PageTitleUpdater />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
