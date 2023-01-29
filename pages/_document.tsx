import { Html, Head, Main, NextScript } from 'next/document'
import { Background } from './components/background'
import MainHeader from './components/main-header'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Background/>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
