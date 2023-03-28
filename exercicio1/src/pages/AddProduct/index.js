import { Divider } from '@mui/material';
import AddProductForm from '../../components/Form';
import Header from '../../components/Header';
import './styles.css';

function AddProduct() {
  return (
    <>
      <Header />
      <div className="container container-add-product">
        <section>
          <h1>Nome da loja</h1>
          <div className='add-products'>
            <h2>Adicionar produtos</h2>
            <AddProductForm />
          </div>
        </section>
        <Divider />
      </div >
    </>
  );
}

export default AddProduct;
