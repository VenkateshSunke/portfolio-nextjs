import React from 'react';
import { ProbatProvider } from "@probat/react";

function App({ Component, pageProps }) {
  return (
    <ProbatProvider
      apiBaseUrl="https://gushi.onrender.com"
      clientKey=""
      environment="prod"
      repoFullName="VenkateshSunke/portfolio-nextjs"
    >
      <Component {...pageProps} />
    </ProbatProvider>
  );
}

export default App;