import Resource from "./resource";

interface Book extends Resource {
  volume?: string;
  pages: number | "unknown";
  numberOfProblems?: number;
}
export default Book;
