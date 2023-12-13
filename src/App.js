import {NextUIProvider} from "@nextui-org/react";
import './App.css';
import { Route, Routes } from "react-router";
import Home from "./Components/Pages/Home";
import Navigation from "./Components/UI Components/Navigation";

function App() {
  return (
<NextUIProvider>
<div className="App">
  <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
</div>
</NextUIProvider>
  );
}

export default App;
