import Author from "./author";
import Language from "./language";
import LevelRange from "./level_range";
import Publisher from "./publishers";
import Topic from "./topic";

interface _Book {
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
}
type Book = Readonly<_Book>;
export default Book;
