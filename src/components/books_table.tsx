import Image from "next/image";

import { Typography, Stack } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import Book from "@/models/resources/book";

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
        <Typography sx={{ ml: 2 }} variant="subtitle1">
          {params.value}
        </Typography>
        <Typography sx={{ ml: 2, color: "grey" }} variant="subtitle2">
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
        <Typography sx={{ ml: 2 }} variant="subtitle1">
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

interface BooksTableProps {
  books: readonly Book[];
}

export default function BooksTable({ books }: BooksTableProps) {
  return (
    <Stack spacing={1} sx={{ height: "100%" }}>
      <Typography variant="h5">Books Table</Typography>

      <DataGrid
        getRowId={(row) => row.title + row.pic}
        rows={books}
        columns={booksTableColumns}
        rowHeight={50}
      ></DataGrid>
    </Stack>
  );
}
