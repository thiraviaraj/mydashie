import axios from 'axios';

export default axios.create({
    baseURL: 'http://5c230da35db0f6001345fea3.mockapi.io',
});

// headers: {
//     Authorization: 'Client-ID BasicAuth'
// },