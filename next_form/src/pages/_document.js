import Document, { Head, Main, NextScript } from 'next/document';

import '../styles/antd-custom-styles.less';

const assetPrefix = '/static';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();

    return { html, head, errorHtml, chunks };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Next Form</title>

          <link rel="icon" href={`${assetPrefix}/images/favicon.ico`} type="image/x-icon" />

          <link rel="stylesheet" href="/_next/static/style.css" />

          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" />
        </Head>
        <body>
          <div className="agrocloud-app">
            <Main />
          </div>

          <NextScript />
        </body>
      </html>
    );
  }
}
