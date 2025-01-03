import axios from "axios";

export const apiConnector = (method,url) => {
    return axios.create({
        method:`${method}`,
        url:`${url}`
    })
}