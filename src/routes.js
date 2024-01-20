import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
