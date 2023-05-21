import { VideoConverter } from "./VideoConverter";

export class MkvVideoConverter implements VideoConverter {
  public convert(filePath: string) {
    console.log(`[MkvVideoConverter] Convert file "${filePath}"`);

    return "converted filePath";
  }
}
