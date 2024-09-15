const { getOnChainBalance } = require("./points/onChainBalance");
const { getMempoolBalance } = require("./points/mempoolBalance");
const { getBalanceVariation } = require("./points/balanceVariationInPeriod");

const address = "32ixEdVJWo3kmvJGMTZq5jAQVZZeuwnqzo";

const app = async () => {
    const onChainBalance = await getOnChainBalance(address)
    const mempoolBalance = await getMempoolBalance(address)
    const balanceVariation = await getBalanceVariation(address, 30)
    const balanceVariationInSevenDays = await getBalanceVariation(address, 7)
    console.log("Prueba tecnica Cubo +")
    console.log(`On-chain Balance: ${onChainBalance} SATS`)
    console.log(`Mempool Balance: ${mempoolBalance} SATS`)
    console.log(`Balance variation in the last 30 days: ${balanceVariation} SATS`);
    console.log(`Balance variation in the last 7 days: ${balanceVariationInSevenDays} SATS`);
}

app()

