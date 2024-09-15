const axios = require('axios');
const { mempoolApi } = require('../api/apiMempool');

const getOnChainBalance = async (address) => {
    try {
        const response = await mempoolApi.get(`${address}`)
        const data = response.data;

        console.log(data, "revisando la informacion")

        const confirmedBalance = data.chain_stats.funded_txo_sum - data.chain_stats.spent_txo_sum;
        return confirmedBalance;
    } catch (error) {
        console.error("Error in fetching data: ", error)
    }
}

module.exports = {
    getOnChainBalance
}