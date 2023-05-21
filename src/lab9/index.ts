import { YoutubeUploaderFacade } from "./lib/YoutubeUploaderFacade";

const uploader = new YoutubeUploaderFacade("myApiKey");

uploader.upload("/my-videos/video1.mkv");
// console output
// [MkvVideoConverter] Convert file "/my-videos/video1.mkv"
// [YoutubeApi] Uploading video file "converted filePath", api key myApiKey

uploader.upload("/my-videos/web.ts");
// [TsVideoConverter] Convert file "/my-videos/web.ts"
// [YoutubeApi] Uploading video file "converted filePath", api key myApiKey

uploader.upload("/my-videos/awesome-party.mov");
// Error: Unknown file format mov
