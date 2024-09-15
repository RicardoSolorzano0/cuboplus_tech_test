const { mempoolApi } = require('../api/apiMempool');

const getOnChainBalance = async (address) => {
    try {
        const response = await mempoolApi.get(`${address}`)
        const data = response.data;

        const { chain_stats, mempool_stats } = data

        const confirmedBalanceChain = chain_stats.funded_txo_sum - chain_stats.spent_txo_sum;
        const confirmedBalanceMempool = mempool_stats.funded_txo_sum - mempool_stats.spent_txo_sum;

        return { confirmedBalanceChain, confirmedBalanceMempool };
    } catch (error) {
        console.error("Error in fetching data: ", error)
    }
}

module.exports = {
    getOnChainBalance
}