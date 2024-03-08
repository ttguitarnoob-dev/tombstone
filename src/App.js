import {NextUIProvider} from "@nextui-org/react";
import './App.css';
import { Route, Routes } from "react-router";
import Home from "./Components/Pages/Home";
import Navigation from "./Components/UI Components/Navigation";
import Services from "./Components/Pages/Services";
import ContactForm from "./Components/UI Components/ContactForm";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About"
import Success from "./Components/Pages/Success";
import Pricing from "./Components/Pages/Pricing";
import Gallery from "./Components/Pages/Gallery";
import Invoice from "./Components/Pages/Customer/Invoice";

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
      <Route path="/Pricing" element={<Pricing />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/success" element={<Success />} />
      <Route path="/invoices/:id" element={<Invoice />} />
    </Routes>
</div>
</NextUIProvider>
  );
}

export default App;
