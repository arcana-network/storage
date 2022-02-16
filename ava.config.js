module.exports = () => {
	return {
        "files": [
			"./test/test.ts",
		],
		timeout: "50s",
		extensions : [ "ts"],
		require: [
			 "ts-node/register/transpile-only",
             "./test/_setup-browser-env.js"
        ]
	};
};