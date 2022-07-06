module.exports = () => {
	return {
        "files": [
			  "./tests/test.ts",
		],
		timeout: "50s",
		extensions : [ "ts"],
		require: [
			 "ts-node/register/transpile-only",
             "./tests/_setup.js"
        ],
		"verbose": true
	};
};