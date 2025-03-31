import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000",
});

export const getBooks = () => api.get("/books");
export const getBookById = (id) => api.get(`/books/${id}`);
export const createBook = (data) => api.post("/books", data);
export const updateBook = (id, data) => api.put(`/books/${id}`, data);
export const deleteBook = (id) => api.delete(`/books/${id}`);

export default api;
