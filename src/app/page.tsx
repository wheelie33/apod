
import { Box, Container, Typography } from '@mui/material';
import Link from 'next/link';

export default function Home() {


  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom color={'primary.main'}>
        Welcome to My Next.js App
      </Typography>
      <Box my={4}>
        <Typography variant="body1">
          This is the home page of your Next.js application using Material-UI for styling. Start building your app by editing this page.
        </Typography>

      </Box>

      <Link href="/preferences" >
        <Typography variant="h6" color="secondary.main">
          Go to Preferences
        </Typography>
      </Link>

      <Link href="/apod" >
        <Typography variant="h6" color="secondary.main">
          Go to APOD
        </Typography>
      </Link>

      
    </Container>
  );
}
