import React from 'react'
import Layout from '../components/layout'
import SEOHelmet from '../components/SEOHelmet'

const NotFoundPage = () => (
  <Layout>
    <SEOHelmet
      title={'404 Page Not Found'}
      description={'404 page'}
      cardDescription={'404 page'}
    />
    <div>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
