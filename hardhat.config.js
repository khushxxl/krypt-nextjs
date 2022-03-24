// https://eth-ropsten.alchemyapi.io/v2/84QznWTEamOBgmDEEUnqZhZ4SUhZQF73

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: `${process.env.PRIVATE_KEY}`,
      accounts: [`${process.env.CONTRACT_URL}`],
    },
  },
}
