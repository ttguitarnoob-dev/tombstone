import {NextUIProvider} from "@nextui-org/react";
import './App.css';
import { Route, Routes } from "react-router";
import Home from "./Components/Pages/Home";
import Navigation from "./Components/UI Components/Navigation";
import Services from "./Components/Pages/Services";
import ContactForm from "./Components/UI Components/ContactForm";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About"

function App() {
  return (
<NextUIProvider>
<div className="App">
  <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
    </Routes>
</div>
</NextUIProvider>
  );
}

export default App;
