import Country from "../utils/country";
import Language from "../utils/language";

import allAuthors from "@/data/authors";

interface _Author {
  name: string;
  pic?: URL;
  rank?: string;
  birth?: Date | undefined;
  countries: readonly Country[];
  spokenLanguages: readonly Language[];
}
type Author = Readonly<_Author>;
export default Author;

/**
 * Not case sensitive.
 */
export const findAuthorByString = (name: string) =>
  allAuthors.find((a) => a.name.toLowerCase().includes(name.toLowerCase()));
