const transferTxObj = Object.assign(Helpers.TX_EXAMPLES.TRANSFER, {
    recipient: 'escrowAddress',
    amount: 10000000,
    sender: bettorOrBookie.address,
    senderPublicKey: bettorOrBookieAccount.keyPair.publicKey
   });
   const transferTx = await Waves.tools.createTransaction(Waves.constants.TRANSFER_TX_NAME, transferTxObj);
   transferTx.addProof(betterOrBookieAccount.keyPair.privateKey);
   
   const transferTxJSON = await transferTx.getJSON();
   console.log(transferTxJSON);

   const paymentToEscrow = [{
    key: 'bettorOrBookieAddress',
    value: betAmount,
    type: 'integer'
  }];
 const dataTxObj = Object.assign(Helpers.TX_EXAMPLES.DATA, {
  data: paymentToEscrow,
  fee: await Waves.tools.getMinimumDataTxFee(paymentToEscrow) + 400000,
  sender: bettorOrBookieAccount.address,
  senderPublicKey: betterOrBookieAccount.keyPair.publicKey
 });
 const dataTx = await Waves.tools.createTransaction(Waves.constants.DATA_TX_NAME, dataTxObj);
 dataTx.addProof(bettorOrBookieAccount.keyPair.privateKey);
 
 //send Data Transction to the network
 const dataTxJSON = await dataTx.getJSON();
 const dataTxResult = await Waves.API.Node.transactions.rawBroadcast(dataTxJSON);

//  let eventCompleted = if( getData(oracleAcc.address, 'Actuariat', 'integer') >= 1 )

const escrowAcc = Waves.Seed.create();

