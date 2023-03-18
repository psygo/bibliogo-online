import Author from "./author";
import Language from "../utils/language";
import LevelRange from "../utils/level_range";
import Publisher from "../utils/publishers";
import Resource from "./resource";
import Topic from "../utils/topic";

interface _Book extends Resource {
  title: string;
  pic?: URL;
  subtitle?: string;
  volume?: string;
  publishers: Publisher[];
  author: Author;
  releaseDate?: Date;
  languages: readonly Language[];
  topics: readonly Topic[];
  levelRange?: LevelRange;
  externalLinks?: readonly URL[];
  pages: number | "unknown";
  numberOfProblems?: number;
}
type Book = Readonly<_Book>;
export default Book;
