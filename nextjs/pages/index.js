import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import useSWR from 'swr';

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Index() {
  const { data, error } = useSWR('/api/randomQuotes', fetcher);
  const author = data && data.author;
  let quote = data && data.quote;

  if (!data) quote = 'Loading...';
  if (error) quote = 'Failed to fetch the quote.';

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <p>From static json::</p>
        <div>{quote}</div>
        <span>- {author}</span>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
