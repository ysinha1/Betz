import Waves from 'waves.js/dist/waves';

const oracleAcc = Waves.Seed.create();
const outcomes = [
    {key: 'Actuariat',
    type: 'integer',
    value: 1}, 
    {key: 'Carry to Win',
    type: 'integer',
    value: 2},
    {key: 'Showing Character',
    type: 'integer',
    value:3},
    {key: 'Rugby Diamond',
    type: 'integer',
    value: 4},
    {key: 'Peace on Earth',
    type: 'integer',
    value: 5},
    {key: 'Kings Steed',
    type: 'integer',
    value: 6},
    {key: 'First Beaut',
    type: 'integer',
    value: 7}, 
    {key: 'Paddington',
    type: 'integer',
    value: 8}, 
    {key: 'Richcity Fortune',
    type: 'integer',
    value: 9}, 
    {key: 'Idyllic Wind',
    type: 'integer',
    value: 10}, 
    {key: 'Spicy Double',
    type: 'integer',
    value: 11}, 
    {key: 'Regency Honey',
    type: 'integer',
    value: 12
    }];

    // const outcomesTxObj = Object.assign(Helpers.TX_EXAMPLES.DATA, {
    //     data: outcomes,
    //     fee: await Waves.tools.getMinimumDataTxFee(outcomes) + 400000,
    //     sender: oracleAcc.address,
    //     senderPublicKey: oracleAcc.keyPair.publicKey });

    //     const outcomesTx = await Waves.tools.createTransaction(Waves.constants.DATA_TX_NAME, outcomesTxObj);

    //     outcomesTx.addProof(oracleAcc.keyPair.privateKey);

    //     const outcomesTxJSON = await outcomesTx.getJSON();
    //     const outcomesTxResult = await Waves.API.Node.transactions.rawBroadcast(outcomesTxJSON);

export default oracleAcc;