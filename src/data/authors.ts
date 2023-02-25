import Author from "@/models/author";
import Country from "@/models/country";
import Language from "@/models/language";

const authors: Author[] = [
  {
    name: "Shibano Toramaru 芝野虎丸",
    pic: new URL(
      "https://en.wikipedia.org/wiki/Shibano_Toramaru#/media/File:Shibano_Toramaru20190812.jpg"
    ),
    birth: new Date("1999-11-09"),
    rank: "9p",
    countries: [Country.japan],
    spokenLanguages: [Language.japanese],
  },
  {
    name: "Yilun Yang 楊以倫",
    birth: new Date("1951-01-01"),
    rank: "7p",
    countries: [Country.china],
    spokenLanguages: [Language.chinese, Language.english],
  },
  {
    name: "William Cobb",
    countries: [Country.usa],
    spokenLanguages: [Language.english],
  },
];

export default authors;
