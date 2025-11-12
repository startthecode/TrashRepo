import axios from "axios";

export const authFetch = axios.create({
    baseURL:'https://dummyjson.com',
    timeout:800,
    timeoutErrorMessage:"Please check your internet connection"
})

export const defaultFetch = axios.create({
    baseURL:'https://dummyjson.com',
    timeout:800,
    timeoutErrorMessage:"Please check your internet connection"
})