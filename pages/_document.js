import Document, {
  Head,
  Main,
  NextScript
} from 'next/document'
import styleSheet from 'styled-components/lib/models/StyleSheet'

export default class MyDocument extends Document {
  static async getInitialProps ({renderPage}) {
    const page = renderPage()

    const styles = (
      <style
        dangerouslySetInnerHTML={{
          __html: styleSheet.rules().map(rule => rule.cssText).join('\n')
        }}
      />
    )

    return {
      ...page,
      styles
    }
  }

  render () {
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <meta name='theme-color' content='#ffffff' />

          <link rel='apple-touch-icon' sizes='180x180' href='https://unpkg.com/@carbonstack/favicon@0.0.1/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='https://unpkg.com/@carbonstack/favicon@0.0.1/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='https://unpkg.com/@carbonstack/favicon@0.0.1/favicon-16x16.png' />
          <link rel='manifest' href='https://unpkg.com/@carbonstack/favicon@0.0.1/manifest.json' />
          <link rel='mask-icon' href='https://unpkg.com/@carbonstack/favicon@0.0.1/safari-pinned-tab.svg' color='#5bbad5' />
          <link rel='stylesheet' href='https://unpkg.com/@carbonstack/base-css@0.0.2/build/style.css' />
          <link rel='stylesheet' href='https://unpkg.com/codemirror@5.25.2/lib/codemirror.css' />
        </Head>
        <body>
          <Main />

          <script type='text/javascript' src='https://unpkg.com/codemirror@5.25.2/lib/codemirror.js' />
          <script type='text/javascript' src='https://unpkg.com/codemirror@5.25.2/mode/meta.js' />
          <script type='text/javascript' src='https://unpkg.com/codemirror@5.25.2/addon/mode/overlay.js' />
          <script type='text/javascript' src='https://unpkg.com/codemirror@5.25.2/addon/mode/loadmode.js' />
          <script type='text/javascript' src='https://unpkg.com/codemirror@5.25.2/keymap/sublime.js' />
          <script type='text/javascript' src='https://unpkg.com/codemirror@5.25.2/addon/runmode/runmode.js' />
          <script type='text/javascript' src='https://unpkg.com/codemirror@5.25.2/addon/edit/continuelist.js' />
          <script type='text/javascript' src='https://unpkg.com/codemirror@5.25.2/addon/display/placeholder.js' />

          <NextScript />

        </body>
      </html>
    )
  }
}
