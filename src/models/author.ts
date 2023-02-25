import Country from "./country";
import Language from "./language";

import authors from "@/data/authors";

interface _Author {
  name: string;
  pic?: URL;
  rank: string;
  birth: Date | undefined;
  countries: readonly Country[];
  spokenLanguages: readonly Language[];
}
type Author = Readonly<_Author>;
export default Author;

/**
 * Not case sensitive.
 */
export const findAuthorByString = (name: string) =>
  authors.find((a) => a.name.toLowerCase() === name.toLowerCase());
