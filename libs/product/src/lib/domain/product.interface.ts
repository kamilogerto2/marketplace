export interface Product {
  id: number;
  name: string;
  prize: number;
  imagePath: string;
  quantity: number;
  disabled?: boolean;
}

export interface ProductConfig {
  apiUrl: string;
}
