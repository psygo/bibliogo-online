import { useState, ChangeEvent } from "react";

import Head from "next/head";
import Image from "next/image";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { createTheme, FormControl, TextField, Typography } from "@mui/material";

import allBooks from "@/data/books";

const theme = createTheme({
  spacing: 4,
});

const booksTableColumns: GridColDef[] = [
  {
    field: "title",
    headerName: "Title",
    width: 530,
    renderCell: (params) => (
      <>
        <Image
          src={params.row.pic.toString()}
          alt="Book's Thumbnail"
          width={50}
          height={50}
        />
        <Typography sx={{ ml: theme.spacing(2) }} variant="subtitle1">
          {params.value}
        </Typography>
        <Typography
          sx={{ ml: theme.spacing(2), color: "grey" }}
          variant="subtitle2"
        >
          {params.row.subtitle}
        </Typography>
      </>
    ),
  },
  {
    field: "author",
    headerName: "Author",
    width: 330,
    renderCell: (params) => (
      <>
        {params.value.pic && (
          <Image
            src={params.value.pic?.toString()}
            alt="Author's Picture"
            width={50}
            height={50}
          />
        )}
        <Typography sx={{ ml: theme.spacing(2) }} variant="subtitle1">
          {params.value.name}
        </Typography>
      </>
    ),
  },
  {
    field: "pages",
    headerName: "# Pages",
    width: 70,
    align: "center",
  },
  {
    field: "publishers",
    headerName: "Publishers",
    width: 200,
    renderCell: (params) => (
      <Typography variant="subtitle2">{params.value.join(", ")}</Typography>
    ),
  },
];

export default function Home() {
  const [books, setBooks] = useState(allBooks);

  const [search, setSearch] = useState("");

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const newSearch = e.target.value;

    setSearch(newSearch);

    if (newSearch === "") {
      setBooks(allBooks);
    } else {
      const filteredBooks = allBooks.filter(
        (b) =>
          b.title.toLowerCase().includes(search.toLowerCase()) ||
          b.author.name.toLowerCase().includes(search.toLowerCase())
      );

      setBooks(filteredBooks);
    }
  }

  return (
    <>
      <Head>
        <title>Bibliogo Online</title>
        <meta name="description" content="Bibliogo Online" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ height: "100vh" }}>
        <Typography variant="h4">Bibliogo Online</Typography>

        <FormControl>
          <TextField
            label="Search"
            value={search}
            onChange={handleSearch}
          ></TextField>
        </FormControl>

        <DataGrid
          getRowId={(row) => row.title + row.pic}
          rows={books}
          columns={booksTableColumns}
          rowHeight={50}
        ></DataGrid>
      </main>
    </>
  );
}
