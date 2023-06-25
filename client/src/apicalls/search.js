import { axiosInstance } from "./axiosinstance";


export const GetProductsSearch = async () => {
    try {
        const response = await axiosInstance.get('api/products/fetch-products');
        return response.data;
    } catch (error) {
        return error.message;
    }
};