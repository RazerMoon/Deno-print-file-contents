import { printFile } from "./functions/printFile.ts";

const file = Deno.args[0];

if (!file) {
  console.log("No input passed!");
  Deno.exit();
}

const Encoder = new TextEncoder();

printFile(file).then((response) => Deno.stdout.write(Encoder.encode(response)))
  .catch((reason) => console.log(reason));
