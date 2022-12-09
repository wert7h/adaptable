const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'4d738e1e-83c4-4988-8f1a-5e966e1e74d8'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
