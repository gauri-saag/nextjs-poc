import fetch from 'isomorphic-unfetch'
import React from 'react';

AboutPage.getInitialProps = async ({ req, query }) => {
  const protocol = req
    ? `${req.headers['x-forwarded-proto']}:`
    : location.protocol
  const host = req ? req.headers['x-forwarded-host'] : location.host
  const pageRequest = `https://localhost:3306/api/index`
  const res = await fetch(pageRequest)
  const json = await res.json()
  return json
} 


// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <MuiLink color="inherit" href="https://material-ui.com/">
//         Your Website
//       </MuiLink>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// export default function About() {
//   return (
//     <Container maxWidth="sm">
//       <Box my={4}>
//         <Typography variant="h4" component="h1" gutterBottom>
//           Next.js example
//         </Typography>
//         <Button variant="contained" color="primary" component={Link} naked href="/">
//           Go to the main page
//         </Button>
//         <p>From sql::</p>
//         {/* <div>{profilesCount}</div> */}
//         <ProTip />
//         {/* <Copyright /> */}
//       </Box>
//     </Container>
//   );
// }

export default function AboutPage({pageCount }) {
  return (
 <div>{pageCount}</div>     
  )
}