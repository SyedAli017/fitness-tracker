import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@pages/home/home";
import Layout from "@components/Layout/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;