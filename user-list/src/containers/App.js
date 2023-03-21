import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import User from "../components/User.js";
function App() {
  return (
    <div className="App">
      <Header />
      <User />
      <Footer />
    </div>
  );
}

export default App;
