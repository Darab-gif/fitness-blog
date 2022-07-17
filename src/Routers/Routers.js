import { Routes, Route } from "react-router-dom";
import Fitness from "../Pages/Categories/Fitness/Fitness";
import Keto from "../Pages/Categories/Keto/Keto";
import Nutrition from "../Pages/Categories/Nutrition/Nutrition";

import Home from "../Pages/Home/Home";
import PathPostPage from "../Pages/PathPost/PathPostPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":id" element={<PathPostPage />} />
      <Route path="/fitness" element={<Fitness />} />
      <Route path="/keto" element={<Keto />} />
      <Route path="/nutrition" element={<Nutrition />} />
    </Routes>
  );
};

export default Routers;
