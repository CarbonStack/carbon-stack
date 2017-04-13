import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Nav = styled.nav`
  .Logo a{

  }
`

class TopNav extends React.PureComponent {
  render () {
    return <Nav>
      <h1 className='Logo'><Link href='/'><a>Carbon Stack</a></Link></h1>

      <div>
        <Link href='/login'><a>Sign in via Github</a></Link>
      </div>
    </Nav>
  }
}

export default TopNav
