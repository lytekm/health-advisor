// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const config = getDefaultConfig(__dirname);

// Keep defaults and just add the alias
config.resolver.alias = {
  "@": path.resolve(__dirname),
};

module.exports = config;
