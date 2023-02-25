import Head from "next/head";
import Image from "next/image";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { createTheme, Typography } from "@mui/material";

import books from "@/data/books";

const theme = createTheme({
  spacing: 4,
});

const columns: GridColDef[] = [
  {
    field: "title",
    headerName: "Title",
    width: 530,
    renderCell: (params) => {
      return (
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
      );
    },
  },
  {
    field: "author",
    headerName: "Author",
    width: 330,
    renderCell: (params) => {
      return (
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
      );
    },
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Bibliogo Online</title>
        <meta name="description" content="Bibliogo Online" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ height: "100vh" }}>
        <DataGrid
          getRowId={(row) => row.title + row.pic}
          rows={books}
          columns={columns}
          rowHeight={50}
        ></DataGrid>
      </main>
    </>
  );
}
