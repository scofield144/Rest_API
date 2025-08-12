const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Validation middleware
function validateUser(req, res, next) {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ 
            success: false,
            error: 'Nome e email são obrigatórios.' 
        });
    }
    next();
}

// GET all users
router.get('/', (req, res) => {
    const allUsers = User.findAll();
    res.json({
        success: true,
        data: allUsers,
        count: allUsers.length
    });
});

// GET user by ID
router.get('/:id', (req, res) => {
    const user = User.findById(req.params.id);
    if (user) {
        res.json({
            success: true,
            data: user
        });
    } else {
        res.status(404).json({ 
            success: false,
            error: 'Utilizador não encontrado.' 
        });
    }
});

// POST new user
router.post('/', validateUser, (req, res) => {
    const newUser = User.create(req.body);
    res.status(201).json({
        success: true,
        data: newUser,
        message: 'Utilizador criado com sucesso.'
    });
});

// PUT update user
router.put('/:id', validateUser, (req, res) => {
    const updatedUser = User.update(req.params.id, req.body);
    if (updatedUser) {
        res.json({
            success: true,
            data: updatedUser,
            message: 'Utilizador atualizado com sucesso.'
        });
    } else {
        res.status(404).json({ 
            success: false,
            error: 'Utilizador não encontrado.' 
        });
    }
});

// DELETE user
router.delete('/:id', (req, res) => {
    const deleted = User.delete(req.params.id);
    if (deleted) {
        res.json({
            success: true,
            message: 'Utilizador eliminado com sucesso.'
        });
    } else {
        res.status(404).json({ 
            success: false,
            error: 'Utilizador não encontrado.' 
        });
    }
});

module.exports = router;