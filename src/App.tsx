import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navigator } from './components/navigators/Navigator';
import { LayoutConfig } from './models/Layout-config';
import { productsConfig } from './models/Products-config';
import { BreadProducts } from './components/pages/BreadProducts';
import { Customers } from './components/pages/Customers';
import { DairyProducts } from './components/pages/DairyProducts';
import { Home } from './components/pages/Home';
import { Orders } from './components/pages/Orders';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigator navigConfig={LayoutConfig} />}>
          <Route index element={<Home />}></Route>
          <Route path="customers" element={<Customers />} />
          <Route path="orders" element={<Orders />}></Route>
          <Route
            path="products"
            element={<Navigator navigConfig={productsConfig} />}
          >
            <Route path="dairy" element={<DairyProducts />} />
            <Route path="bread" element={<BreadProducts />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
