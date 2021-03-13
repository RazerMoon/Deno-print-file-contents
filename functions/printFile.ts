import { existsSync } from "../deps.ts";

/**
 * Returns the contents of a file, throws error if file can't be found
 */
export async function printFile(path: string) {
  if (!existsSync(path)) {
    throw new Error("No file found with that path!");
  }

  return await Deno.readTextFile(path);
}
