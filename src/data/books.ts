import { findAuthorByString } from "@/models/author";
import Book from "@/models/book";
import Language from "@/models/language";
import Topic from "@/models/topic";
import { Level } from "@/models/level_range";
import Publisher from "@/models/publishers";

const books: Book[] = [
  {
    title: "Joseki Revolution",
    pic: new URL("https://gobooks.com/books/thumbs/sg0169_ki_k90_tn.jpg"),
    subtitle: "Overthrowing Conventional Wisdom",
    author: findAuthorByString("Shibano")!,
    publishers: [Publisher.kiseido, Publisher.gobooks],
    releaseDate: new Date("2022-01-01"),
    languages: [Language.english, Language.japanese],
    topics: [Topic.joseki, Topic.fuseki],
    levelRange: {
      min: Level.k9,
      ideal: Level.k5,
    },
    externalLinks: [
      new URL("https://gobooks.com/"),
      new URL(
        "https://www.goodreads.com/book/show/61166800-joseki-revolution---overthrowing-convetional-wisdom?ac=1&from_search=true&qid=gCgyKPZFCy&rank=1"
      ),
    ],
  },
];

export default books;
