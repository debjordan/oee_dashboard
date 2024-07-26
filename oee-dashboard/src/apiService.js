import axios from 'axios';

const API_URL = 'https://localhost:5001/api';

const getOEERecords = async () => {
    try {
        const response = await axios.get(`${API_URL}/OEE`);
        return response.data;
    } catch (error) {
        console.error('Error fetching OEE records:', error);
        throw error;
    }
};

export default {
    getOEERecords,
};