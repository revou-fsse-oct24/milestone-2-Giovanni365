export interface FormData {
  email: string;
  password: string;
}

export interface FormRegister {
  name: string;
  email: string;
  password: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  images: string[];
}

export interface Category {
    id: number;
    name: string;
    image: string;
}

export interface CartItemType {
  product: Product;
  quantity: number;
}