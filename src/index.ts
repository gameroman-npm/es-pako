const { Deflate, deflate, deflateRaw, gzip } = require("./lib/deflate");

const { Inflate, inflate, inflateRaw, ungzip } = require("./lib/inflate");

const constants = require("./lib/zlib/constants");

export {
  Deflate,
  deflate,
  deflateRaw,
  gzip,
  Inflate,
  inflate,
  inflateRaw,
  ungzip,
  constants,
};
