import axios from 'axios';


export const PRODUCTS = axios.create({
    baseURL: process.env.NEXT_PUBLIC_PRODUCTS_BASE_URL
});