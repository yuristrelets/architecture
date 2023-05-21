import { YoutubeApi } from "./YoutubeApi";
import { ConverterFacade } from "./ConverterFacade";

export class YoutubeUploaderFacade {
  private api: YoutubeApi;

  constructor(apiKey: string) {
    this.api = new YoutubeApi(apiKey);
  }

  public upload(filePath: string) {
    const converter = new ConverterFacade();
    const convertedFilePath = converter.convert(filePath);

    this.api.uploadVideo(convertedFilePath);
  }
}
