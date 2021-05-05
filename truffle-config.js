//require('babel-polyfill')
var HDWalletProvider = require("@truffle/hdwallet-provider");
const MNEMONIC = '';

module.exports = {
	contracts_directory: "./contracts",

	plugins: [
		'truffle-plugin-verify'
	  ],

	  api_keys: {
		etherscan: '_'
	  },
 
	networks: {
		development: {
			host: "127.0.0.1",	
			port: 8545,		
			network_id: "*",
			gasPrice: 2000,
			gas: 12530149,
			skipDryRun: true
		},
		ropsten: {
			provider: function() {
			  return new HDWalletProvider(MNEMONIC, "http://127.0.0.1:8545")
			},
			network_id: 3,
			gas: 8000000,        // Ropsten has a lower block limit than mainnetdc
			confirmations: 1,    // # of confs to wait between deployments. (default: 0)
			timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
			skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
		  },
		  rinkeby: {
			provider: function() {
			  return new HDWalletProvider(MNEMONIC, "http://127.0.0.1:8545");
			},
			network_id: 4,
			gas: 9000000,        // Ropsten has a lower block limit than mainnetdc
			confirmations: 1,    // # of confs to wait between deployments. (default: 0)
			timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
			skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
		  },
	},
	mocha: {
	  },
	compilers: {
		solc: {
			version: "0.6.12+commit.27d51765",
			settings: {
			    optimizer: {
			    	enabled: true,
			    	runs: 200
				},
			},
		},
	},
};