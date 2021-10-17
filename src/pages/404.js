import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import { Button } from 'theme-ui'

const ErrorPage = () => {
  return (
    <Layout>
      <h1>404</h1>
      <h3>You hit a page that doesn't exist.</h3>
      <Link to="/">
        <Button>Return</Button>
      </Link>
    </Layout>
  )
}

export default ErrorPage
