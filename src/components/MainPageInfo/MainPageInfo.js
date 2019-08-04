import React from 'react'
import { FormattedMessage} from "gatsby-plugin-intl"

const MainPageInfo = () => (
  <div>
    <h1 style={{
      textAlign: `center`
    }}>
      <FormattedMessage id="main_page_header" />
    </h1>
    <p style={{
      textAlign: `justify`,
      margin: `0 5%`
    }}>
      <FormattedMessage id="main_page_introduction" />
    </p>
  </div>
)

export default MainPageInfo;