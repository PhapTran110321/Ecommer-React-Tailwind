import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      {/* <Footer /> */}
    </>
  );
}

export default App;
