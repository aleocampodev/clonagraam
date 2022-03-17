import Footer from "./components/Footer";
import Home from "./components/Home";
import { Container, Col, Row } from "reactstrap";
import "./styles/_main.scss";

function App() {
  return (
    <div className="App vh-100 bg-fluid d-flex flex-column justify-content-center">
      <Home />
      <Footer />
    </div>
  );
}

export default App;
