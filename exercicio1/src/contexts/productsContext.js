import { createContext } from "react";
import useProductsProvider from "../hooks/useProductsProvider";

export const ProductsContext = createContext({});

export function ProductsProvider(props) {
    const productsProvider = useProductsProvider();

    return (
        <ProductsContext.Provider value={productsProvider}>
            {props.children}
        </ProductsContext.Provider>
    )
}