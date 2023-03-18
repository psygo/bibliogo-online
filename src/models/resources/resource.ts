import Author from "./author";
import Topic from "../utils/topic";
import Language from "../utils/language";
import LevelRange from "../utils/level_range";
import Publisher from "../utils/publishers";
import Tablable from "./tablable";

interface Resource extends Tablable {
  authors?: readonly Author[];
  description?: string;
  subtitle?: string;
  releaseDate?: Date;
  languages: readonly Language[];
  topics: readonly Topic[];
  publishers?: Publisher[];
  levelRange?: LevelRange;
}
export default Resource;
