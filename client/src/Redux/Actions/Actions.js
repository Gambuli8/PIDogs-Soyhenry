import axios from 'axios';


export const PostDogs = (info) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3001/dogs/', info);
            alert('Dog created successfully!');
        } catch (error) {
            alert(error.response.data);
        }
    };
};