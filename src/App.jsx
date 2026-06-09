import "./app.css";
import CafeQR from "./qr.jsx";
import Menu from "./menu.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/qr" element={<CafeQR />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
