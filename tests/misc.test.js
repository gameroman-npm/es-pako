import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";

import * as pako from "es-pako";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

describe("ArrayBuffer", () => {
  const file = path.join(__dirname, "fixtures/samples/lorem_utf_100k.txt");
  const sample = new Uint8Array(fs.readFileSync(file));
  const deflated = pako.deflate(sample);

  it("Deflate ArrayBuffer", () => {
    assert.deepStrictEqual(deflated, pako.deflate(sample.buffer));
  });

  it("Inflate ArrayBuffer", () => {
    assert.deepStrictEqual(sample, pako.inflate(deflated.buffer));
  });
});
