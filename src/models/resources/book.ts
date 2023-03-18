import Author from "./author";
import Language from "../utils/language";
import LevelRange from "../utils/level_range";
import Publisher from "../utils/publishers";
import Resource from "./resource";
import Topic from "../utils/topic";

interface Book extends Resource {
  pic?: URL;
  volume?: string;
  publishers: Publisher[];
  author: Author;
  releaseDate?: Date;
  languages: readonly Language[];
  topics: readonly Topic[];
  levelRange?: LevelRange;
  pages: number | "unknown";
  numberOfProblems?: number;
}
export default Book;
