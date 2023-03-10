import { findAuthorByString } from "@/models/author";
import Book from "@/models/book";
import Language from "@/models/language";
import Topic from "@/models/topic";
import { Level } from "@/models/level_range";
import Publisher from "@/models/publishers";

const allBooks: Book[] = [
  {
    title: "Joseki Revolution",
    pic: new URL("https://gobooks.com/books/thumbs/sg0169_ki_k90_tn.jpg"),
    subtitle: "Overthrowing Conventional Wisdom",
    author: findAuthorByString("Shibano")!,
    publishers: [Publisher.kiseido, Publisher.gobooks],
    releaseDate: new Date("2022-08-01"),
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
    pages: 199,
  },
  {
    title: "Fuseki Revolution",
    pic: new URL("https://gobooks.com/books/thumbs/sg0163_ki_k89_tn.jpg"),
    subtitle: "How AI Has Changed Go",
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
        "https://www.goodreads.com/book/show/60181200-fuseki-revolution?ac=1&from_search=true&qid=412xJPTEIw&rank=1"
      ),
    ],
    pages: 192,
  },
  {
    title: "Buddhist Philosophy and The Game of Go",
    pic: new URL("https://gobooks.com/books/thumbs/sg0170_ss_budd_tn.jpg"),
    author: findAuthorByString("Cobb")!,
    publishers: [Publisher.self_published, Publisher.gobooks],
    releaseDate: new Date("2023-02-01"),
    languages: [Language.english],
    topics: [Topic.philosophy, Topic.history],
    externalLinks: [
      new URL("https://gobooks.com/"),
      new URL(
        "https://www.goodreads.com/book/show/58901386-buddhist-philosophy-and-the-game-of-go"
      ),
    ],
    pages: 86,
  },
  {
    title: "Yang Yilun's Ingenious Life and Death Problems",
    pic: new URL("https://gobooks.com/books/thumbs/sg0167_yy_ild1_tn.jpg"),
    volume: "1",
    author: findAuthorByString("Yilun")!,
    publishers: [Publisher.gobooks],
    releaseDate: new Date("2022-12-01"),
    languages: [Language.english],
    topics: [Topic.tsumego],
    externalLinks: [
      new URL("https://gobooks.com/"),
      new URL(
        "https://www.goodreads.com/book/show/1485645.Yang_Yilun_s_Ingenious_Life_and_Death"
      ),
    ],
    pages: 180,
    numberOfProblems: 110,
  },
  {
    title: "Yang Yilun's Ingenious Life and Death Problems",
    pic: new URL("https://gobooks.com/books/thumbs/sg0168_yy_ild2_tn.jpg"),
    volume: "2",
    author: findAuthorByString("Yilun")!,
    publishers: [Publisher.gobooks],
    releaseDate: new Date("2022-12-01"),
    languages: [Language.english],
    topics: [Topic.tsumego],
    externalLinks: [new URL("https://gobooks.com/")],
    pages: 192,
    numberOfProblems: 90,
  },
];

export default allBooks;
