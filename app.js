const express = require('express');
const userRoutes = require('./routes/users');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Root route
app.get('/', (req, res) => {
    res.json({
        message: 'Bem-vindo à API RESTful!',
        endpoints: {
            users: '/api/users'
        }
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: 'Endpoint não encontrado'
    });
});

// Start server
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});