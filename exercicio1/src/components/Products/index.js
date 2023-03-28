import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProductCard from "../../components/ProductCard";
import useProducts from "../../hooks/useProducts";
import "./styles.css";

export default function Products() {
    const { products } = useProducts();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 5, sm: 8, md: 20 }}>
                {products.map((product, index) =>
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <ProductCard product={product} />
                    </Grid>
                )}
            </Grid>
        </Box>
    );
}