module.exports = () => {
	return {
        "files": [

			//   "./test/test.ts",
			//  "./test/Wallet.test.ts"
			//   "./test/Files.test.ts",
			  "./test/Access.test.ts"
		],
		timeout: "50s",
		extensions : [ "ts"],
		require: [
			 "ts-node/register/transpile-only",
             "./test/_setup-browser-env.js"
        ],
		"verbose": true
	};
};