import { useState } from "react";
import { data } from "../data";

function useProductsProvider() {
    const [products, setProducts] = useState([...data]);

    return {
        products,
        setProducts,
    }
}

export default useProductsProvider;