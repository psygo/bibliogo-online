import { Link, Typography, Stack } from "@mui/material";

import Appbar from "@/components/Appbar";

export default function About() {
  return (
    <>
      <Appbar />

      <Stack sx={{ p: 2 }}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          About Bibliogo Online
        </Typography>

        <Typography variant="body1">
          This website is inspired by the book{" "}
          <Link href="https://www.goodreads.com/book/show/61201231-bibliogo?ac=1&from_search=true&qid=Eijm7ZfsLF&rank=1">
            Bibliogo
          </Link>
          , by Theo van Ees and Franco Pratesi. In it, the authors catalog
          difficult-to-find Go books, however, I feel like that should have been
          a website, since such a catalog would ideally need regular updates.
        </Typography>

        <Typography variant="body1" sx={{ mt: 1 }}>
          Besides, why only books? What about articles? Videos? Websites? I
          don&apos;t see why not, and that&apos;s how the idea for this project
          arose. Let&apos;s hope the original authors don&apos;t sue me.
        </Typography>

        <Typography variant="body1" sx={{ mt: 1 }}>
          Anyone is welcome to contribute to the project, it is open source, and
          you can find the code{" "}
          <Link href="https://github.com/psygo/bibliogo-online">here</Link>.
        </Typography>
      </Stack>
    </>
  );
}
