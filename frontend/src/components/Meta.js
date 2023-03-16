import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: `Welcome To Vibin'hood`,
  description: 'Stillness In Motion',
  keywords: 'Streetwear, street wear, clothing, trending, unique',
}

export default Meta
