// src/domain/entities/Store.js
const mongoose = require('mongoose');
const StoreSchema = new mongoose.Schema({
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });
module.exports = mongoose.model('Store', StoreSchema);
