import React, { createContext, useContext, useState } from 'react';
import { PRODUCTS } from '../constant';
import {
  ProductInterface,
  ProductContextType,
  ProductProviderProps,
} from '../modals';

const InitailState = {
  products: [],
  selected: [],
  setSelected: null,
};

const ProductContext = createContext<ProductContextType>(InitailState);

const ProductContextProvider = ({ children }: ProductProviderProps) => {
  const [selected, setSelected] = useState<ProductInterface[]>([]);
  const [products] = useState<Array<ProductInterface>>(PRODUCTS);

  return (
    <ProductContext.Provider value={{ products, selected, setSelected }}>
      {children}
    </ProductContext.Provider>
  );
};

export const ProductContextState = () => useContext(ProductContext);

export default ProductContextProvider;
