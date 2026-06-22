import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import * as pako from "es-pako";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function loadSamples(subdir) {
  const result = {};
  const dir = path.join(__dirname, "fixtures", subdir || "samples");

  fs.readdirSync(dir)
    .sort()
    .forEach(function (sample) {
      const filepath = path.join(dir, sample);
      const extname = path.extname(filepath);
      const basename = path.basename(filepath, extname);
      const content = new Uint8Array(fs.readFileSync(filepath));

      if (basename[0] === "_") {
        return;
      }

      result[basename] = content;
    });

  return result;
}

function testInflate(samples, inflateOptions, deflateOptions) {
  let name, data, deflated, inflated;

  for (name in samples) {
    if (!samples.hasOwnProperty(name)) continue;
    data = samples[name];

    deflated = pako.deflate(data, deflateOptions);
    inflated = pako.inflate(deflated, inflateOptions);

    assert.deepStrictEqual(inflated, data);
  }
}

export { testInflate, loadSamples };
