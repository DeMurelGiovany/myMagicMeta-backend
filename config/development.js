module.exports = {
    log: {
        level: 'silly',
        disabled: false,
    },
    cors: {
        origins: ['http://localhost:3000'],
        maxAge: 3 * 60 * 60,
    },
    database: {
		client: 'mysql2',
		host: 'ID365840_mymagicmeta.db.webhosting.be',
		port: 3306,
		name: 'ID365840_mymagicmeta',
		username: 'ID365840_mymagicmeta',
		password: 'magic2021',
	},
}

// Hostname:
// ID365840_mymagicmeta.db.webhosting.be
// Database:
// ID365840_mymagicmeta
// Gebruiker:
// ID365840_mymagicmeta
// Password: magic2021