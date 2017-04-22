import React from 'react'
import DefaultLayout from '../components/layouts/DefaultLayout'
import styled from 'styled-components'
import Link from 'next/link'
import withRedux from '../lib/redux/withRedux'
import connect from '../lib/redux/lib/connect'

class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      check: false
    }
  }

  onLogInButtonClick (e) {
    const { dispatch } = this.props
    dispatch({
      type: 'REQUEST_LOGIN'
    })
  }

  render () {
    return (
      <DefaultLayout title='Carbon Stack'>
        Welcome to Carbon Stack
        <h2>Redux state</h2>
        <pre>{JSON.stringify(this.props)}</pre>
      </DefaultLayout>
    )
  }
}

export default withRedux(connect(x => x)(Index))
