import "./App.css";
import Navbar from "./components/Navbar";
import { CartProvider } from "./ContextReducer/CartReducer"; 

function App() {
  return (
    <CartProvider>
      <Navbar />
    </CartProvider>
  );
}

export default App;
