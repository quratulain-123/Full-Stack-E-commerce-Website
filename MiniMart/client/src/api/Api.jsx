import axios from 'axios'

export async function productsData(){
    const axiosInstance = axios.create({
        timeout: 10000 // Set timeout to 10 seconds
      });
      
    const products = await axios.get(
        "https://fakestoreapi.com/products"
    )
    return products;
}