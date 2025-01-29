import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/routes";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import ScrollToTop from "./components/ScrollToTop";
import "../src/styles/global.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;
