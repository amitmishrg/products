interface IconShape {
  color: string;
  svg: any;
}

export interface ProductInterface {
  id: number;
  name: string;
  icon: IconShape;
}

export type ProductContextType = {
  products: ProductInterface[];
  selected: ProductInterface[];
  setSelected: any;
};

export interface ProductProviderProps {
  children: React.ReactNode;
}
