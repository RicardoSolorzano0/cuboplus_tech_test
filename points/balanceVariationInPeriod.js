const { mempoolApi } = require("../api/apiMempool")

const getBalanceVariation = async (address, days) => {
    try {
        const response = await mempoolApi.get(`${address}/txs`);
        const transactions = response.data;
        const currentTime = Math.floor(Date.now() / 1000);
        const periodStart = currentTime - (days * 24 * 60 * 60);
        let balanceVariation = 0;

        transactions.forEach(tx => {
            if (tx.status.confirmed && tx.status.block_time >= periodStart) {
                tx.vout.forEach(vout => {
                    if (vout.scriptpubkey_address === address) {
                        balanceVariation += parseInt(vout.value);
                    }
                });
            }
        });

        return balanceVariation;
    } catch (error) {
        console.error("Error in fetching data: ", error);
    }
}


module.exports = {
    getBalanceVariation
}