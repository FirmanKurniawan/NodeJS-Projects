// server.js
var fs = require('fs');
var app = require('./app');
var httpPort = process.env.PORT || 8000;
var httpsPort = process.env.PORT || 8100;
var http = require('http');
// var https = require('https');
// var privateKey  = fs.readFileSync('certificates/private.key', 'utf8');
// var certificate = fs.readFileSync('certificates/certificate.crt', 'utf8');
// var credentials = {key: privateKey, cert: certificate};
var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);
const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: './logs/error.log',
      level: 'error',
      format: winston.format.json()
    }),
    new winston.transports.File({
      filename: './logs/success.log',
      level: 'info',
      format: winston.format.json()
    }),
    new winston.transports.Http({
      filename: './logs/http.log',
      level: 'error',
      format: winston.format.json()
    }),
    new winston.transports.Console({
      filename: './logs/console.log',
      level: 'error',
      format: winston.format.json()
    })
  ]
});

// LOGGER IN PRODUCTION
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

// Socket.io server
const { Server } = require('socket.io');
const io = new Server(httpServer, {
    cors: {
        origin: ["*", "http://localhost", "http://localhost:8100"],
        methods: ["GET", "POST"],
        transports: ['websocket', 'polling'],
        credentials: true
    },
    allowEIO3: true
});
const socketEvents = require('../socket/events')(io);
socketEvents;
// Load exchange rates
var money = require('../config/money');
money.getRates();
// Run script
var runScript = require('./scripts/runScript');
runScript.run();

// Starting Server (HTTP)
httpServer.listen(httpPort, function() {
	console.log('LoanApp API (HTTP) Development Server listening on port ' + httpPort);
});

// // Starting Server (HTTPS)
// httpsServer.listen(httpsPort, function() {
// 	console.log('LoanApp API (HTTPS) Development Server listening on port ' + httpsPort);
// });

// Default launch URL
app.use('/', function(req, res) {
	res.status(200).send({ message: 'LoanApp API Development Server is Running' });
});

