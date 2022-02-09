module.exports = () => {
	return {
        "files": [
			"./test/*",
		],
		timeout: "50s",
		extensions : [ "ts"],
		require: [
			 "ts-node/register/transpile-only",
             "./tests/_setup-browser-env.js"
        ]
	};
};