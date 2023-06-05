import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
import Head from 'next/head'
export const metadata={
    title : "Prompto",
    description: "Discover and share AI prompts using Prompto"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
         <head>
      <link rel="icon" type="image/svg+xml" href="/assets/images/logo.svg"/>
      <link rel="icon" type="image/png" href="/assets/images/favicon.png"/>
    </head>
<body>
  <Provider>
  <div className="main">
    <div className="gradient"/>
  </div>

  <main className='app'>
    <Nav/>
    {children}
  </main>
  </Provider>
</body>
    </html>
  )
} 

export default RootLayout