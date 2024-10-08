export interface ProductCardProps {
  product: Product;
}

export interface Product {
  id: string;
  image: string;
  name: string;
  price: number;
  description: string;
}

export interface ProductButtonsProps {
  counter: number;
  increaseBy: (value: number) => void;
}
