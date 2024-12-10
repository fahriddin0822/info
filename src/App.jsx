import CreateWork from "./pages/create";
import Layout from "./pages/Layout";
import Info from "./pages/info";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route path="/create" element={<CreateWork />} />
        <Route path="/info" element={<Info />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
