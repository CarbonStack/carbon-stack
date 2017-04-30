import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import TopNav from '../TopNav'
import Footer from '../Footer'
import { largeBreakpoint } from '../../lib/styles/media'

const Main = styled.main`
  wposition: relative;
  width: 100%;
  max-width: ${largeBreakpoint}em;
  margin: 0 auto;
`

export default class DefaultLayout extends React.Component {
  render () {
    const { title, description, keywords, author, children } = this.props

    return (
      <div>
        <Head>
          <title>{title == null ? 'Carbon Stack' : title}</title>

          <meta name='description' content={description == null ? 'A democratic media for developers' : description} />
          {keywords == null || <meta name='keywords' content={keywords} />}
          {author == null || <meta name='author' content={author} />}
        </Head>
        <TopNav />
        <Main>
          {children}
        </Main>
        <Footer />
      </div>
    )
  }
}
