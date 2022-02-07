module.exports = () => {
	return {
        "files": [
			"./tests/*",
		],
		timeout: "10s",
	
		require: [
			 
             "./tests/_setup-browser-env.js"
        ]
	};
};