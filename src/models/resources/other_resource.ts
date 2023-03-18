import Resource from "./resource";

interface OtherResource extends Resource {
  type: "Other" | string;
}
export default OtherResource;
