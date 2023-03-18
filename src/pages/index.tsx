import { useState, ChangeEvent } from "react";

import Head from "next/head";

import { FormControl, TextField, Typography } from "@mui/material";

import allBooks from "@/data/books";

import BooksTable from "@/components/books_table";

export default function Home() {
  const [books, setBooks] = useState(allBooks);

  const [search, setSearch] = useState("");

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const newSearch = e.target.value;

    setSearch(newSearch);

    if (newSearch === "") {
      setBooks(allBooks);
      return;
    }

    const filteredBooks = allBooks.filter(
      (b) =>
        b.title.toLowerCase().includes(search.toLowerCase()) ||
        b?.subtitle?.toLowerCase().includes(search.toLowerCase()) ||
        b.author.name.toLowerCase().includes(search.toLowerCase())
    );

    setBooks(filteredBooks);
  }

  return (
    <>
      <Head>
        <title>Bibliogo Online</title>
        <meta name="description" content="Bibliogo Online" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main style={{ height: "100vh" }}>
        <Typography variant="h4">Bibliogo Online</Typography>

        <FormControl>
          <TextField
            label="Global Search"
            value={search}
            onChange={handleSearch}
          ></TextField>
        </FormControl>

        <Typography variant="h5">Books Table</Typography>

        <BooksTable books={books} />

        {/* TODO: Authors Table */}
        {/* TODO: Articles Table */}
        {/* TODO: Resources Table */}
      </main>
    </>
  );
}
