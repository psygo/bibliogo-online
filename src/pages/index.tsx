import { useState, ChangeEvent } from "react";

import Head from "next/head";

import { Stack, FormControl, TextField } from "@mui/material";

import allBooks from "@/data/books";

import BooksTable from "@/components/BooksTable";
import Appbar from "@/components/Appbar";

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
        b.name.toLowerCase().includes(search.toLowerCase()) ||
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
        <Appbar />

        <Stack sx={{ height: "100%", mt: 2, p: 2 }} spacing={2}>
          <FormControl>
            <TextField
              label="Global Search"
              sx={{ width: "max-content" }}
              value={search}
              onChange={handleSearch}
            ></TextField>
          </FormControl>

          <BooksTable books={books} />
        </Stack>
      </main>
    </>
  );
}
