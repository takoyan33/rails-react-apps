import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import QiitaPage from "./pages/QiitaPage";
import RailsPage from "./pages/RailsPage";
import QiitapracticePage from "./pages/QiitapracticePage";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/qiita" element={<QiitaPage />} />
        <Route path="/rails" element={<RailsPage />} />

        <Route path="/qiitapractice" element={<QiitapracticePage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
