import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Link from "../components/Link";

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js Mui Starter
        </Typography>
        <Link href="/" color="secondary">
          Link component
        </Link>
      </Box>
    </Container>
  );
}
