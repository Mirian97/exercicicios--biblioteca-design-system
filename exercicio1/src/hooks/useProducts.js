import { useContext } from "react";
import { ProductsContext } from "../contexts/productsContext";

function useProducts() {
    return useContext(ProductsContext)
}

export default useProducts;