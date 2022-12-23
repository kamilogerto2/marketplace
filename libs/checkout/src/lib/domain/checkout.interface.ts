export interface CheckoutTransactionData {
  name: string;
  last_name: string;
  street: string;
  city: string;
  state: string;
  email: string;
}

export interface CheckoutConfig {
  apiUrl: string;
}
