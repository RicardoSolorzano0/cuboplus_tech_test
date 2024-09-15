const { mempoolApi } = require("../api/apiMempool");

const getMempoolBalance = async (address) => {
    try {
        const response = await mempoolApi.get(`${address}`)
        const data = response.data
        const confirmedBalance = data.mempool_stats.funded_txo_sum - data.mempool_stats.spent_txo_sum;
        return confirmedBalance
    } catch (error) {
        console.error("Error in fetching data: ", error)
    }
}

module.exports = {
    getMempoolBalance
}