import React from 'react'
import Link from 'gatsby-link'

import Checkout from '../components/checkout'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div>
      <Checkout />
    </div>
  </div>
)

export default IndexPage
