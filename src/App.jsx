import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@pages/home/home";
import Plans from "@pages/plans/plans";
import Plan from "@pages/plan/plan";
import PlanBuilder from "@pages/planBuilder/planBuilder";
import Layout from "@components/Layout/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/plan/:slug" element={<Plan />} />
          <Route path="/planbuilder" element={<PlanBuilder />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;