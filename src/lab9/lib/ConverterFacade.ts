import { MkvVideoConverter } from "./MkvVideoConverter";
import { TsVideoConverter } from "./TsVideoConverter";

export class ConverterFacade {
  private getExtension(filePath: string) {
    return filePath.substring(filePath.lastIndexOf(".") + 1).toLowerCase();
  }

  public convert(filePath: string) {
    const ext = this.getExtension(filePath);

    switch (ext) {
      case "mkv":
        return new MkvVideoConverter().convert(filePath);

      case "ts":
        return new TsVideoConverter().convert(filePath);

      default:
        throw new Error(`Unknown file format ${ext}`);
    }
  }
}
