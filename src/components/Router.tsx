import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import ProjectDetail from "../routes/ProjectDetail";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route
          path={`${process.env.PUBLIC_URL}/project/:id`}
          element={<ProjectDetail />}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
