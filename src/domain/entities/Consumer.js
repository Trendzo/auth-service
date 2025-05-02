// src/domain/entities/Consumer.js
const mongoose = require('mongoose');
const ConsumerSchema = new mongoose.Schema({
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });
module.exports = mongoose.model('Consumer', ConsumerSchema);