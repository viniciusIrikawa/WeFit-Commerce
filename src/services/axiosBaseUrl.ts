import axios from 'axios';


export const PRODUCTS = axios.create({
    baseURL: process.env.BASE_URL
});