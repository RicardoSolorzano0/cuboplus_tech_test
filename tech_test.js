const { getOnChainBalance } = require("./points/onChainBalance");
const { getBalanceVariation } = require("./points/balanceVariationInPeriod");

const address = "32ixEdVJWo3kmvJGMTZq5jAQVZZeuwnqzo";

const app = async () => {
    const { confirmedBalanceChain, confirmedBalanceMempool } = await getOnChainBalance(address)
    const balanceVariation = await getBalanceVariation(address, 30)
    const balanceVariationInSevenDays = await getBalanceVariation(address, 7)
    console.log("Prueba tecnica Cubo +")
    console.log(`On-chain Balance: ${confirmedBalanceChain} SATS`)
    console.log(`Mempool Balance: ${confirmedBalanceMempool} SATS`)
    console.log(`Balance variation in the last 30 days: ${balanceVariation} SATS`);
    console.log(`Balance variation in the last 7 days: ${balanceVariationInSevenDays} SATS`);
}

app()

