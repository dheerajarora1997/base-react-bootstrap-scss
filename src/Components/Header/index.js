import React from 'react'

import Header from './Header'

export default function Index(props) {

  const linkClicked = (element) => {
    console.log('You clicked ' + element);
  }

  return (
    <div>
      <Header linkClicked={linkClicked} />
    </div>
  )
}
