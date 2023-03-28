import { Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Products from '../../components/Products';
import './styles.css';

function Main() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="container container-main">
        <section>
          <h1>Nome da loja</h1>
          <div className='title-products'>
            <h2>Seus Produtos</h2>
            <Button
              variant="contained"
              onClick={() => navigate("/add-product")}
            >
              Adicionar produto
            </Button>
          </div>
          <Products />
        </section>
        <Divider />
        <div />
      </div>
    </>
  );
}

export default Main;
