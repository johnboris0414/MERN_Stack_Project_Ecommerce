import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL

const BearerToken = ()=> localStorage.getItem("jwt") ? JSON.parse(localStorage.getItem("jwt")).token : false
const Headers = ()=> {
    return {
      headers: {
        'token': `Bearer ${BearerToken()}` 
      }
    }
}

export const getAllProduct = async () => {
    try {
        let res = await axios.get(`${apiURL}/api/all-category`)
        return res.data;
    } catch (error) {
        console.log(error);
    }

}

export const createProduct = async ({ cName, cImage, cDescription, cStatus }) => {
    let formData = new FormData();
    formData.append("cImage", cImage)
    formData.append("cName", cName)
    formData.append("cDescription", cDescription)
    formData.append("cStatus", cStatus)

    try {
        let res = await axios.post(`${apiURL}/api/add-category`, formData)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const editProduct = async (cId, des, status) => {
    try {
        let res = await axios.post(`${apiURL}/api/edit-category`, { cId: cId, cDescription: des, cStatus: status })
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = async (cId) => {
    try {
        let res = await axios.post(`${apiURL}/api/delete-category`, { cId })
        return res.data;
    } catch (error) {
        console.log(error);
    }
}