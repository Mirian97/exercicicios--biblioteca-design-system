import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./styles.css";

export default function ProductCard({ product }) {
    return (
        <Card className='card' sx={{ maxWidth: 232, minHeight: 433 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="240"
                    image={product.image}
                    alt="Produto"
                />
                <CardContent className='card-content' >
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                    <div className='amount-price'>
                        <span className='amount'>{product.amount} unidades</span>
                        <span className='price'>R$ {(product.price / 100).toFixed(2)}</span>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}