import { VideoConverter } from "./VideoConverter";

export class TsVideoConverter implements VideoConverter {
  public convert(filePath: string) {
    console.log(`[TsVideoConverter] Convert file "${filePath}"`);

    return "converted filePath";
  }
}
