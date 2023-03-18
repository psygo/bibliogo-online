import Link from "next/link";

import { AppBar, Toolbar } from "@mui/material";

export default function Appbar() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", color: "black" }}
    >
      <Toolbar>
        <Link href="/">Bibliogo</Link>
        <Link href="/about">About</Link>
      </Toolbar>
    </AppBar>
  );
}
