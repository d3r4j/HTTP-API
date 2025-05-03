const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const cors = require('cors');

// Log incoming requests for debugging
server.use((req, res, next) => {
    console.log(`Request from ${req.headers.origin} to ${req.url}`);
    next();
});
server.use(cors({
    origin: ['https://http-api-4o6v.onrender.com', 'http://localhost:4200'], // Allow frontend and local dev
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: false
}));
server.use(middlewares);
server.use(router);
server.listen(process.env.PORT || 3000, () => {
    console.log('JSON Server is running');
});
