import express from 'express';
import cors from 'cors';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import jsonServer from 'json-server';

const __dirname = dirname(fileURLToPath(import.meta.url));
const server = express();
const router = jsonServer.router(join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 5000;

// Enable CORS
server.use(cors());

// Parse JSON bodies
server.use(express.json());

// Use json-server middlewares
server.use(middlewares);

// Add custom routes here
server.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'PowerTrack API is running' });
});

// Use json-server router
server.use('/api', router);

server.listen(PORT, () => {
  console.log(`PowerTrack server is running on port ${PORT}`);
}); 