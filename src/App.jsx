import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import Rootlayouts from "./components/layouts/Rootlayouts";
import Error from "./components/Error";


function App() {
  return (
    <>
      <Routes>
        <Route element={<Rootlayouts/>}>
            <Route path="/" element={<Home/>} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
