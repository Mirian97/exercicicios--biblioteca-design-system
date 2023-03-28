import { Button, FormControl, Input, InputAdornment, InputLabel } from '@mui/material';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from "../../hooks/useProducts";
import Notify from '../Alert';
import "./styles.css";

function AddProductForm() {
    const navigate = useNavigate();
    const { setProducts, products } = useProducts();
    const [notify, setNotify] = useState({
        open: false,
        severity: 'success',
        message: ''
    });
    const [localProduct, setLocalProduct] = useState({
        name: "",
        price: "",
        amount: "",
        description: "",
        image: ""
    });

    function handleSubmit(e) {
        e.preventDefault();

        if (!localProduct.name || !localProduct.price || !localProduct.description || !localProduct.image) {
            setNotify({
                open: true,
                severity: "error",
                message: "Todos os campos devem estar preenchidos!"
            })
            return;
        }

        setProducts([...products, { ...localProduct, price: Number(localProduct.price) * 100 }]);
        setNotify({
            open: true,
            severity: "success",
            message: "Produto inserido com sucesso!"
        })
        setTimeout(() => {
            navigate("/");
        }, 2000);
        handleClearInputs();
    }

    function handleChangeInputValue(e) {
        setLocalProduct({ ...localProduct, [e.target.name]: e.target.value, });
    }

    function handleClearInputs() {
        setLocalProduct({
            name: "",
            price: "",
            amount: "",
            description: "",
            image: ""
        });
    }

    return (
        <Stack
            className='form-add-product'
            component="form"
            sx={{
                width: 392,
            }}
            spacing={6}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <TextField
                id="name"
                name="name"
                label="Nome do produto"
                type="text"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="standard"
                value={localProduct.name}
                onChange={handleChangeInputValue}
            />
            <div className='inputs-price-amount'>
                <FormControl variant="standard">
                    <InputLabel htmlFor="price">Preço</InputLabel>
                    <Input
                        id="price"
                        name="price"
                        value={localProduct.price}
                        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                        onChange={handleChangeInputValue}
                    />
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel htmlFor="amount">Estoque</InputLabel>
                    <Input
                        id="amount"
                        name="amount"
                        value={localProduct.amount}
                        startAdornment={<InputAdornment position="start">Un</InputAdornment>}
                        onChange={handleChangeInputValue}
                    />
                </FormControl>
            </div>
            <TextField
                id="description"
                name="description"
                label="Descrição do produto"
                type="text"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="standard"
                value={localProduct.description}
                onChange={handleChangeInputValue}
            />
            <TextField
                id="image"
                name="image"
                label="Imagem"
                type="text"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="standard"
                value={localProduct.image}
                onChange={handleChangeInputValue}
            />
            <div className='form-btns'>
                <Button
                    sx={{
                        textDecorationLine: "underline",
                    }}
                    onClick={() => navigate("/")}
                >
                    Cancelar
                </Button>
                <Button
                    variant="contained"
                    type='submit'
                >
                    Adicionar produto
                </Button>
            </div>
            <Notify notify={notify} setNotify={setNotify} />
        </Stack>
    )
}

export default AddProductForm;