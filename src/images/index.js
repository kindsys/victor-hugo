// var req = require.context("./", true, /\.(gif|jpg|jpeg|tiff|png|svg)$/i);
// req([]);

const requireTest = require.context("./", true, /\.(gif|jpg|jpeg|tiff|png|svg)$/i);
requireTest.keys().forEach(requireTest);
