import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import ProductList from './components/ProductList'
import GlobalStyle from "./styles/global"

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <GlobalStyle />
          <Header />
          <Cart />
          <ProductList />
      </header>
    </div>
  );
}

export default App;
