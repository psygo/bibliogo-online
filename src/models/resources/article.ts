import Resource from "./resource";

interface Article extends Resource {
  pages: number | "unknown";
  numberOfProblems?: number;
}
export default Article;
