import { Route, Routes } from 'react-router-dom';
import { ProductsProvider } from "./contexts/productsContext";
import AddProduct from './pages/AddProduct';
import Main from './pages/Main';

function MainRoutes() {
  return (
    <ProductsProvider>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/add-product' element={<AddProduct />} />
      </Routes>
    </ProductsProvider>
  );
}

export default MainRoutes;