import { addToCart } from "../constants";
export const addToCart=(data) =>{
    return {
        type:addToCart,
        data:data
    }
}