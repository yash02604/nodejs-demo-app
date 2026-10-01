const test = require("node:test");
const assert = require("node:assert");

test("basic application test", () => {
  const message = "Hello from Node.js CI/CD Demo App!";

  assert.strictEqual(
    message,
    "Hello from Node.js CI/CD Demo App!"
  );
});
