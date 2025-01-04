import axios from "axios"


export const fetchResults = async (query, page) => {
    const response = await axios.get(`https://api.unsplash.com/search/photos/?client_id=ApATSeGT2_8WkGHDCy3u2vWPSQ8UjD826KSEGc4MXRc`, {
        params: {
            query, 
            page,
        }
    });
    return response.data
}