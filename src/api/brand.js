import axiosClient from "./axiosClient";


const END_POINT = {
    TODOS: "brand"
}

export const brandpage = () =>{
    return axiosClient.get(`${END_POINT.TODOS}`);
}
export const getTotalPage = () =>{
    return axiosClient.get(`${END_POINT.TODOS}/total`);
}
export const addBrandAPI = (brandName) =>{
    return axiosClient.post(`${END_POINT.TODOS}`,{brandName});
}
export const editBrandAPI = (brandId ,brandName) =>{
    return axiosClient.put(`${END_POINT.TODOS}`,{brandId, brandName});
}
export const deleteBrandAPI = (brandId) =>{
    return axiosClient.delete(`${END_POINT.TODOS}?id=${brandId}`);
}
export const getBrandAPI = (page) =>{
    return axiosClient.get(`${END_POINT.TODOS}/page?page=${page}`);
}