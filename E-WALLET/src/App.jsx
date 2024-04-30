// import "./index.css";
// import CardForm from "./pages/add-card/CardForm";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddCard } from "./pages/addcard/AddCard";
import { Home } from "./pages/home/Home";

import "./App.css";

function App() {
  return (
    <>
      {/* <CardForm /> */}
      <BrowserRouter>
        <Routes>
          <Route path="AddCard" element={<AddCard />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
