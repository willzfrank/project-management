import "./App.css";
import Card from "./components/Cards/Card";
import Navbar from "./components/Navbar";
import Tables from "./components/Tables/Tables";
import ButtonContainer from "./components/ButtonContainer";
import Ecommerce from "./components/eCommerce/Ecommerce";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Ecommerce />
    </div>
  );
}

export default App;
