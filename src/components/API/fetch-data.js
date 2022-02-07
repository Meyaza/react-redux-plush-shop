import axios from 'axios'
const FetchData = async ({toys, setToys}) => {
    const apiURL = "http://localhost:8000/toys";
    const response = await axios.get(apiURL)
    return response.data
}

export default FetchData;