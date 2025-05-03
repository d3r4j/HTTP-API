const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const cors = require('cors');
server.use(cors({
    origin: ['https://http-api-4o6v.onrender.com', 'http://localhost:4200'], // Add your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));
server.use(middlewares);
server.use(router);
server.listen(process.env.PORT || 3000, () => {
    console.log('JSON Server is running');
});
