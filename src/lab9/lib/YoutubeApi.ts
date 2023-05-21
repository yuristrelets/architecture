export class YoutubeApi {
  constructor(protected apiKey: string) {}

  public uploadVideo(filePath: string) {
    console.log(
      `[YoutubeApi] Uploading video file "${filePath}", api key ${this.apiKey}`
    );
  }
}
