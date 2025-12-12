import '@/styles/globals.css'
import { ProbatProvider } from "@probat/react";

export default function App({ Component, pageProps }) {
  return (
    <ProbatProvider 
      apiBaseUrl="https://gushi.onrender.com"
      clientKey="" 
      environment="prod"
      repoFullName="VenkateshSunke/portfolio-nextjs"
    >
      <Component {...pageProps} />
    </ProbatProvider>
  )
}