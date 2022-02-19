import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
      return (
        <Html lang="en">
          <Head>
            <link rel="shortcut icon" href="/assets/logo/128x-circle.png" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
export default MyDocument