const { getUnixTime } = require("date-fns");
const { mempoolApi } = require("../api/apiMempool");
const { subDays } = require("date-fns/subDays");

const getBalanceVariation = async (address, days) => {
    try {
        const response = await mempoolApi.get(`${address}/txs`);
        const transactions = response.data;
        const currentDate = new Date();

        const daysagoDate = subDays(currentDate, days);
        const daysagoTime = getUnixTime(daysagoDate);

        let balanceVariation = 0;

        transactions.map(tx => {
            if (tx.status.confirmed && tx.status.block_time >= daysagoTime) {
                tx.vout.map(vout => {
                    if (vout.scriptpubkey_address === address) {
                        balanceVariation += parseInt(vout.value);
                    }
                });
            }
        })

        return balanceVariation
    } catch (error) {
        console.error("Error in fetching data: ", error);
    }
}


module.exports = {
    getBalanceVariation,
}