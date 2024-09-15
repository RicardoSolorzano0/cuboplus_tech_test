
const axios = require('axios');

const mempoolApi = axios.create({
    baseURL: "https://mempool.space/api/address/"
});

module.exports = {
    mempoolApi
}