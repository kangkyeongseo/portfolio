import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import ProjectDetail from "../routes/ProjectDetail";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
