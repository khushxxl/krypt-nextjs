const main = async () => {
  const Transaction = await hre.ethers
    .getContractFactory('Transaction')
    .catch((e) => console.log(e))
  const transaction = await Transaction.deploy().catch((e) => console.log(e))

  await transaction.deployed()

  console.log('Transaction deployed to:', transaction.address)
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (e) {
    console.log(e)
    process.exit(1)
  }
}

runMain()
