import React from 'react'
import {
  Footer,
  Header,
  Content
} from './index'

const TheLayout = () => {

  return (
    <div className="c-app c-default-layout">
      <div className="c-wrapper">
        <Header/>
        <div className="c-body">
          <Content/>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default TheLayout
