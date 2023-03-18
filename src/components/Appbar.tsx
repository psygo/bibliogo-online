import Link from "next/link";

import { Stack, AppBar, Toolbar, Typography } from "@mui/material";

export default function Appbar() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", color: "black" }}
    >
      <Toolbar>
        <Stack direction="row" spacing={4}>
          <Link href="/" className="appbar-link">
            <Typography>Bibliogo</Typography>
          </Link>
          <Link href="/about" className="appbar-link">
            <Typography>About</Typography>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
