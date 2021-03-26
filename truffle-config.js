module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    mynetwork: {
      host: "localhost",
      port: 8545,
      network_id: "*" // match any network
    },
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}