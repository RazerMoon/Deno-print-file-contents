import { assertEquals, assertThrowsAsync } from "../deps.ts";
import { printFile } from "./printFile.ts";

Deno.test("File contents should match", async () => {
  const filename = "hello.txt";
  const file = await Deno.create(filename);
  Deno.writeTextFileSync(filename, "hello");

  const contents = await printFile(filename);

  Deno.close(file.rid);
  Deno.removeSync(filename);

  assertEquals(contents, "hello");
});

Deno.test("Print file should throw error", async () => {
  await assertThrowsAsync(() => printFile("idontexist.txt"));
});
