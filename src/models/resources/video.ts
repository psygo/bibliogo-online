import Resource from "./resource";

interface Video extends Resource {
  duration: number;
  sourceLink: URL;
  channelName: string;
  channelLink: URL;
}
export default Video;
