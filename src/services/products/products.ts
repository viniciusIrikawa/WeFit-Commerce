import { PRODUCTS } from "../axiosBaseUrl";

export const getProducts = async () => {
   const response = await PRODUCTS.get('/products');
   return response.data;
}