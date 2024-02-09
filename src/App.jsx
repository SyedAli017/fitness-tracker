import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@pages/home/home";
import Plans from "@pages/plans/plans";
import Layout from "@components/Layout/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;